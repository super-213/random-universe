import * as THREE from 'three';
import {
  stellarEndTimelinePosition,
  stellarFormationEndTimelinePosition
} from '../domain/universe.js';
import {
  cosmicYearsToTimelinePosition,
  referenceFutureYearsAtTimelinePosition
} from '../domain/cosmic-time.js';
import { STELLAR_DAWN_END, STELLAR_DAWN_START } from '../domain/stellar-dawn.js';
import { orbitalAngleAt } from '../domain/orbital-motion.js';
import {
  applyMergerGravity,
  applyStellarGravity,
  blackHoleMergerVisualState,
  mergerPersistenceAt
} from '../simulation/black-hole-gravity.js';
import {
  applyTransientGravity,
  stellarCollapseVisualState,
  tidalDisruptionVisualState,
  transientPersistenceAt
} from '../simulation/transient-events.js';
import { animateBlackHoleVisual, setBlackHoleIntensity } from './black-hole.js';
import {
  animateCivilizationEventVisual,
  updateCivilizationEventVisual
} from './civilization-events.js';
import { eventVisualFamily } from './event-visual-registry.js';

const normalBackground = new THREE.Color(0x050508);
const hotBackground = new THREE.Color(0x2a1108);
const heatDeathBackground = new THREE.Color(0x03050a);
const currentBackground = new THREE.Color();
const fateColors = {
  'big-rip': new THREE.Color(0x071324),
  'big-crunch': new THREE.Color(0x260806),
  'vacuum-decay': new THREE.Color(0x160a25)
};
const pulsarWorldQuaternion = new THREE.Quaternion();
const pulsarWorldPosition = new THREE.Vector3();
const pulsarBeamAxis = new THREE.Vector3();
const pulsarViewDirection = new THREE.Vector3();
const mergerOrbitAxis = new THREE.Vector3(0, 1, 0);
const mergerTrailPoint = new THREE.Vector3();
const tidalApproachStart = new THREE.Vector3();
const tidalApproachDirection = new THREE.Vector3();
const tidalApproachTangent = new THREE.Vector3();
const tidalPeriapsis = new THREE.Vector3();

function eventCenterFromStars(event, positionArray) {
  if (event.hostBlackHoleId === 'central') return { x: 0, y: 0, z: 0 };
  if (event.visual === 'interuniversal-gateway') {
    const sourceOffset = event.sourceIndex * 3;
    return {
      x: positionArray[sourceOffset] * .28,
      y: positionArray[sourceOffset + 1] * .28,
      z: positionArray[sourceOffset + 2] * .28
    };
  }
  const indices = event.mergerAnchorSourceIndices;
  const weights = event.mergerAnchorWeights;
  if (indices?.length) {
    const totalWeight = weights?.reduce((sum, weight) => sum + weight, 0) || indices.length;
    return indices.reduce((center, sourceIndex, index) => {
      const offset = sourceIndex * 3;
      const weight = (weights?.[index] ?? 1) / totalWeight;
      center.x += positionArray[offset] * weight;
      center.y += positionArray[offset + 1] * weight;
      center.z += positionArray[offset + 2] * weight;
      return center;
    }, { x: 0, y: 0, z: 0 });
  }
  const sourceOffset = event.sourceIndex * 3;
  return {
    x: positionArray[sourceOffset],
    y: positionArray[sourceOffset + 1],
    z: positionArray[sourceOffset + 2]
  };
}

 export function updateCosmicEvents(position, context) {
  const { mode, cosmicEvents, cosmicEventGroup, universe, blackHoleRemnants } = context;
  const fateStarted = universe.cosmicFate.type !== 'heat-death'
    && position >= universe.cosmicFate.onsetAt;
  const centralBlackHole = blackHoleRemnants.find((hole) => hole.userData.isCentral);
  const centralBlackHoleBaseline = centralBlackHole?.userData.blackHoleVisual?.intensity || 0;
  let centralAccretionBoost = 0;
  let activeCosmicEvent = null;
  let anyVisible = false;
  cosmicEvents.forEach((event) => {
    const family = eventVisualFamily(event);
    const phase = (position - event.start) / event.duration;
    const active = phase >= 0 && phase <= 1;
    const mergerPersistence = event.visual === 'black-hole-merger'
      ? mergerPersistenceAt(position, event)
      : 0;
    const transientPersistence = transientPersistenceAt(position, event);
    const visualImpactAt = event.visualImpactAt ?? event.impactAt;
    const civilizationPersistence = event.markerVisual
      && position >= visualImpactAt
      && position <= (event.persistentUntil ?? -Infinity) + (event.persistenceFadeDuration ?? 0)
      ? 1 - THREE.MathUtils.smoothstep(
          position,
          event.persistentUntil,
          event.persistentUntil + (event.persistenceFadeDuration ?? 20)
        )
      : 0;
    const persistence = Math.max(mergerPersistence, transientPersistence, civilizationPersistence);
    const persistentRemnant = position >= visualImpactAt && persistence > 0;
    const survivesCosmicFate = event.visual === 'interuniversal-gateway';
    const visible = (!fateStarted || survivesCosmicFate)
      && (active || persistentRemnant)
      && mode === 'explorer';
    event.group.visible = visible;
    if (!visible) return;
    anyVisible = true;
    if (active) activeCosmicEvent = event;
    const visualPhase = Math.min(1, phase);
    event.group.userData.phase = visualPhase;
    const effect = event.group.userData.effect;

    if (family === 'civilization') {
      updateCivilizationEventVisual(event, visualPhase, persistence);
      return;
    }

    if (!active && transientPersistence > 0) {
      if (event.visual === 'kilonova') {
        effect.innerFlash.material.opacity = 0;
        effect.photosphere.material.opacity = 0;
        effect.ejecta.material.opacity = 0;
        effect.shell.material.opacity = 0;
        if (effect.polarJets) effect.polarJets.material.opacity = 0;
        if (effect.gravityWave) effect.gravityWave.material.opacity = 0;
        effect.remnant.material.opacity = transientPersistence * .72;
      } else if (event.visual === 'stellar-collapse') {
        effect.starCore.material.opacity = 0;
        effect.shroud.material.opacity = 0;
        effect.dust.material.opacity = 0;
        effect.remnantHole.visible = true;
        setBlackHoleIntensity(effect.remnantHole, .92, transientPersistence);
      } else if (event.visual === 'black-hole-merger') {
        effect.holeA.visible = false;
        effect.holeB.visible = false;
        effect.remnantHole.visible = transientPersistence > .001;
        setBlackHoleIntensity(effect.remnantHole, .74, transientPersistence);
        effect.mergerGlow.material.opacity = 0;
        effect.gasEcho.material.opacity = 0;
        effect.waveDust.material.opacity = 0;
        effect.recoilTrail.material.opacity = .08 * transientPersistence;
      } else if (event.visual === 'supernova') {
        effect.innerFlash.material.opacity = 0;
        effect.photosphere.material.opacity = 0;
        effect.ejecta.material.opacity = 0;
        effect.shell.material.opacity = 0;
        effect.remnant.material.opacity = transientPersistence * .68;
      } else if (event.visual === 'pulsar') {
        effect.core.material.opacity = transientPersistence * .76;
        effect.halo.material.opacity = transientPersistence * .1;
        effect.nebula.material.opacity = transientPersistence * .055;
        effect.jets.material.opacity = transientPersistence * .12;
        effect.sweepGlow.material.opacity = 0;
        effect.fieldLines.forEach((field, fieldIndex) => {
          field.material.opacity = transientPersistence * (.038 - fieldIndex * .005);
        });
        event.group.userData.intensity = transientPersistence * .56;
      }
      return;
    }

    if (family === 'explosive-transient') {
      const phase = visualPhase;
      const isNova = event.visual === 'nova';
      const isKilonova = event.visual === 'kilonova';
      const visualScale = isNova ? .48 : isKilonova ? 1.18 : 1;
      const ignition = THREE.MathUtils.smoothstep(phase, 0, .028);
      const simulatedPulse = event.simulation?.pulsePhases?.reduce((strongest, pulsePhase, pulseIndex) => {
        const weight = event.simulation.pulseWeights?.[pulseIndex] ?? 1;
        const distance = Math.abs(phase - pulsePhase);
        return Math.max(strongest, Math.exp(-distance * distance * 1500) * weight);
      }, 0) || 0;
      const radioactiveScale = THREE.MathUtils.clamp(
        (event.simulation?.nickelMass || .6) / .6,
        .58,
        2.2
      );
      const flash = Math.min(1, Math.max(
        ignition * (1 - THREE.MathUtils.smoothstep(phase, .045, .19)),
        simulatedPulse
      ) * (isNova || isKilonova ? 1 : radioactiveScale));
      const afterglow = (1 - THREE.MathUtils.smoothstep(phase, .12, 1)) * ignition;
      effect.innerFlash.material.opacity = flash * (isNova ? .72 : .98);
      const flashScale = (.08 + Math.pow(Math.min(1, phase / .16), .28) * .72) * visualScale;
      effect.innerFlash.scale.set(flashScale, flashScale, 1);
      effect.photosphere.material.opacity = flash * .58 + afterglow * .2;
      const photosphereScale = (.16 + Math.pow(phase, .56) * 1.15) * visualScale;
      effect.photosphere.scale.set(photosphereScale, photosphereScale * .9, 1);
      const remnantFade = isNova || event.simulation?.persistentRemnant
        ? 1
        : 1 - THREE.MathUtils.smoothstep(phase, .82, 1);
      effect.remnant.material.opacity = THREE.MathUtils.smoothstep(phase, .2, .52) * remnantFade * .72;

      const ejectaArray = effect.ejecta.geometry.attributes.position.array;
      for (let i = 0; i < effect.ejectaVelocity.length; i++) {
        const local = THREE.MathUtils.clamp((phase - effect.ejectaDelay[i]) / (1 - effect.ejectaDelay[i]), 0, 1);
        const distance = .05 + Math.pow(local, .58) * effect.ejectaVelocity[i];
        const turbulence = Math.sin(local * 10 + i * 1.73) * local * .045;
        const offset = i * 3;
        ejectaArray[offset] = effect.ejectaDirections[offset] * distance + turbulence * effect.ejectaDirections[offset + 1];
        ejectaArray[offset + 1] = effect.ejectaDirections[offset + 1] * distance + turbulence * effect.ejectaDirections[offset + 2];
        ejectaArray[offset + 2] = effect.ejectaDirections[offset + 2] * distance + turbulence * effect.ejectaDirections[offset];
      }
      effect.ejecta.geometry.attributes.position.needsUpdate = true;
      effect.ejecta.material.opacity = ignition * (1 - THREE.MathUtils.smoothstep(phase, .58, 1)) * .86;

      const shellArray = effect.shell.geometry.attributes.position.array;
      const shellExtent = isNova
        ? .72 + (event.simulation?.ejectaVelocityKms || 1800) / 10000
        : isKilonova
          ? 2.15 + (event.simulation?.ejectaVelocityC || .2) * 3.1
          : THREE.MathUtils.clamp(1.25 + (event.simulation?.ejectaVelocityKms || 9000) / 7200, 1.8, 3.9);
      const shellRadius = .12 + (1 - Math.pow(1 - phase, 2.4)) * shellExtent;
      for (let i = 0; i < effect.shellNoise.length; i++) {
        const offset = i * 3;
        const uneven = 1 + Math.sin(effect.shellNoise[i] + phase * 4.5) * .055 + Math.sin(i * 2.1) * .025;
        shellArray[offset] = effect.shellDirections[offset] * shellRadius * uneven;
        shellArray[offset + 1] = effect.shellDirections[offset + 1] * shellRadius * uneven;
        shellArray[offset + 2] = effect.shellDirections[offset + 2] * shellRadius * uneven;
      }
      effect.shell.geometry.attributes.position.needsUpdate = true;
      effect.shell.material.opacity = THREE.MathUtils.smoothstep(phase, .04, .14) * (1 - THREE.MathUtils.smoothstep(phase, .5, 1)) * .34;
      if (effect.polarJets) {
        effect.polarJets.material.opacity = THREE.MathUtils.smoothstep(phase, .015, .08)
          * (1 - THREE.MathUtils.smoothstep(phase, .18, .5)) * .72;
      }
      if (effect.gravityWave) {
        const waveProgress = THREE.MathUtils.clamp(
          (phase - event.impactPhase) / Math.max(.001, 1 - event.impactPhase),
          0,
          1
        );
        const waveScale = .25 + Math.pow(waveProgress, .72) * 7.2;
        effect.gravityWave.scale.set(waveScale, waveScale, 1);
        effect.gravityWave.material.opacity = Math.pow(Math.sin(waveProgress * Math.PI), .72)
          * .28 * (event.waveSamples?.waveAmplitude || 1);
      }
    } else if (family === 'tidal-disruption') {
      const phase = visualPhase;
      const state = tidalDisruptionVisualState(phase, event.simulation);
      const approachOffset = event.tidalApproachOffset || [2.5, 0, .34];
      tidalApproachStart.fromArray(approachOffset);
      if (tidalApproachStart.lengthSq() < .01) tidalApproachStart.set(2.5, 0, .34);
      tidalApproachDirection.copy(tidalApproachStart).normalize();
      tidalApproachTangent.set(-tidalApproachDirection.z, 0, tidalApproachDirection.x);
      if (tidalApproachTangent.lengthSq() < .01) tidalApproachTangent.set(0, 0, 1);
      tidalApproachTangent.normalize();
      tidalPeriapsis.copy(tidalApproachDirection).multiplyScalar(.48);
      effect.starCore.position.copy(tidalApproachStart).lerp(tidalPeriapsis, state.approach);
      effect.starCore.position.addScaledVector(
        tidalApproachTangent,
        Math.sin(state.approach * Math.PI) * .34
      );
      effect.starCore.material.opacity = state.onset * (1 - state.disrupted) * .96;
      effect.starCore.scale.set(
        .28 + state.disrupted * .68,
        Math.max(.035, .28 * (1 - state.disrupted * .88)),
        1
      );
      effect.disk.material.opacity = state.fallbackLuminosity * state.fade * .5;
      effect.flare.material.opacity = state.fallbackLuminosity * state.fade * .62;
      const flareScale = .24 + Math.sqrt(state.fallbackLuminosity) * 2.5;
      effect.flare.scale.set(flareScale, flareScale, 1);
      centralAccretionBoost = Math.max(centralAccretionBoost, state.centralAccretionBoost);

      const debrisArray = effect.debris.geometry.attributes.position.array;
      for (let i = 0; i < effect.debrisOffsets.length; i++) {
        const offset = i * 3;
        const stream = effect.debrisOffsets[i];
        const bound = stream < 0;
        const radius = bound
          ? .34 + Math.abs(stream) * (1.15 - state.accretion * .72)
          : .42 + stream * (.65 + state.accretion * 3.4);
        const angle = stream * 1.8 + state.accretion * (bound ? 6.4 : 1.25);
        const thickness = Math.sin(effect.debrisNoise[i] + state.accretion * 5)
          * .045 * (1 - state.accretion * .45);
        debrisArray[offset] = Math.cos(angle) * radius;
        debrisArray[offset + 1] = Math.sin(angle) * radius * .38 + thickness;
        debrisArray[offset + 2] = Math.sin(angle * .5 + effect.debrisNoise[i]) * .075;
      }
      effect.debris.geometry.attributes.position.needsUpdate = true;
      effect.debris.material.opacity = state.disrupted * state.fade * .82;
    } else if (family === 'stellar-flare') {
      const phase = visualPhase;
      const onset = THREE.MathUtils.smoothstep(phase, 0, .08);
      const stormPulse = event.simulation?.pulsePhases?.reduce((strongest, pulsePhase, pulseIndex) => {
        const weight = event.simulation.pulseWeights?.[pulseIndex] ?? 1;
        const distance = Math.abs(phase - pulsePhase);
        return Math.max(strongest, Math.exp(-distance * distance * 900) * weight);
      }, 0) || 0;
      const envelope = Math.max(Math.pow(Math.sin(phase * Math.PI), .5) * .22, stormPulse);
      const pulse = .72 + stormPulse * .28;
      effect.starCore.material.opacity = onset * (.48 + envelope * .5);
      effect.halo.material.opacity = envelope * pulse * .32;
      const haloScale = .45 + envelope * 1.25;
      effect.halo.scale.set(haloScale, haloScale, 1);
      effect.shock.material.opacity = envelope * (1 - phase) * .46;
      const shockScale = .25 + Math.pow(phase, .62) * 3.4;
      effect.shock.scale.set(shockScale, shockScale, 1);
      effect.loops.forEach((loop, loopIndex) => {
        loop.material.opacity = envelope * (.32 - loopIndex * .065);
      });

      const particleArray = effect.particles.geometry.attributes.position.array;
      const cmeScale = THREE.MathUtils.clamp((event.simulation?.cmeVelocityKms || 2200) / 2200, .55, 2.2);
      for (let i = 0; i < effect.particleDirections.length / 3; i++) {
        const offset = i * 3;
        const distance = .18 + Math.pow(phase, .58) * (1.25 + (i % 17) * .045) * cmeScale;
        particleArray[offset] = effect.particleDirections[offset] * distance;
        particleArray[offset + 1] = effect.particleDirections[offset + 1] * distance;
        particleArray[offset + 2] = effect.particleDirections[offset + 2] * distance;
      }
      effect.particles.geometry.attributes.position.needsUpdate = true;
      effect.particles.material.opacity = envelope * .64;
    } else if (family === 'stellar-collapse') {
      const phase = visualPhase;
      const state = stellarCollapseVisualState(phase);
      const { collapse } = state;
      const briefBrightening = THREE.MathUtils.smoothstep(phase, .04, .2)
        * (1 - THREE.MathUtils.smoothstep(phase, .3, .52));
      effect.starCore.material.opacity = state.onset
        * (1 - collapse)
        * (.58 + briefBrightening * .42);
      const coreScale = Math.max(.025, .34 * (1 - collapse * .94) + briefBrightening * .24);
      effect.starCore.scale.set(coreScale, coreScale, 1);
      const dustOpacity = THREE.MathUtils.clamp((event.simulation?.dustOpticalDepth || 2) / 8, .16, .68);
      effect.shroud.material.opacity = THREE.MathUtils.smoothstep(phase, .18, .46)
        * (1 - THREE.MathUtils.smoothstep(phase, .74, 1)) * dustOpacity;
      const shroudScale = .32 + phase * 1.45;
      effect.shroud.scale.set(shroudScale, shroudScale, 1);

      const dustArray = effect.dust.geometry.attributes.position.array;
      const ejectaScale = THREE.MathUtils.clamp((event.simulation?.ejectedEnvelopeFraction || .08) / .08, .45, 1.8);
      for (let i = 0; i < effect.dustDirections.length / 3; i++) {
        const offset = i * 3;
        const distance = .1 + THREE.MathUtils.smoothstep(phase, .16, .82) * (.32 + (i % 19) * .018) * ejectaScale;
        dustArray[offset] = effect.dustDirections[offset] * distance;
        dustArray[offset + 1] = effect.dustDirections[offset + 1] * distance;
        dustArray[offset + 2] = effect.dustDirections[offset + 2] * distance;
      }
      effect.dust.geometry.attributes.position.needsUpdate = true;
      effect.dust.material.opacity = THREE.MathUtils.smoothstep(phase, .22, .48)
        * (1 - THREE.MathUtils.smoothstep(phase, .82, 1)) * .46;
      effect.remnantHole.visible = state.remnantReveal > .001;
      if (effect.remnantHole.visible) {
        setBlackHoleIntensity(
          effect.remnantHole,
          state.remnantIntensity,
          state.remnantReveal
        );
      }
    } else if (family === 'pulsar') {
      const phase = visualPhase;
      const simulatedPulse = event.simulation?.pulsePhases?.reduce((strongest, pulsePhase, pulseIndex) => {
        const weight = event.simulation.pulseWeights?.[pulseIndex] ?? 1;
        const distance = Math.abs(phase - pulsePhase);
        return Math.max(strongest, Math.exp(-distance * distance * 1200) * weight);
      }, 0) || 0;
      const envelope = Math.max(Math.pow(Math.sin(phase * Math.PI), .45), simulatedPulse);
      const glitchScale = event.type === 'pulsar-glitch' ? .22 : 1;
      const jetPowerScale = effect.jetPowerScale || 1;
      effect.core.material.opacity = Math.min(1, envelope * (.82 + simulatedPulse * .18));
      effect.halo.material.opacity = Math.min(.58, envelope * .16 * glitchScale * Math.sqrt(jetPowerScale));
      effect.nebula.material.opacity = Math.min(.34, envelope * .095 * glitchScale * Math.sqrt(jetPowerScale));
      const haloScale = 1.05 + simulatedPulse * .52 + (jetPowerScale - 1) * .18;
      effect.halo.scale.set(haloScale, haloScale, 1);
      effect.jets.material.opacity = envelope * .18 * glitchScale;
      effect.fieldLines.forEach((field, fieldIndex) => {
        field.material.opacity = envelope * (.055 - fieldIndex * .007) * glitchScale;
      });
      event.group.userData.intensity = envelope;
    } else if (family === 'black-hole-merger') {
      const phase = visualPhase;
      const state = blackHoleMergerVisualState(phase, persistence);
      const { mergePoint, inspiral, postMerge } = state;
      effect.holeA.visible = state.progenitorVisibility > .001;
      effect.holeB.visible = state.progenitorVisibility > .001;
      effect.remnantHole.visible = state.remnantVisibility > .001;
      const angleFor = (value) => Math.PI * 2 * (1.15 * value + 4.1 * Math.pow(value, 3));
      const radiusFor = (value) => .12 + 2.45 * Math.pow(1 - value, .72);
      const positionFor = (side, value, target) => {
        const initialOffset = effect.mergerStartOffsets?.[side > 0 ? 0 : 1];
        if (!initialOffset) {
          const angle = angleFor(value);
          const radius = radiusFor(value);
          return target.set(
            side * Math.cos(angle) * radius,
            side * Math.sin(angle) * radius,
            side * Math.sin(angle * .5) * .09
          );
        }
        target.fromArray(initialOffset);
        const startRadius = Math.max(.001, target.length());
        const endRadius = Math.min(.11, startRadius * .12);
        const radius = THREE.MathUtils.lerp(startRadius, endRadius, Math.pow(value, .72));
        return target.applyAxisAngle(mergerOrbitAxis, angleFor(value)).setLength(radius);
      };
      positionFor(1, inspiral, effect.holeA.position);
      positionFor(-1, inspiral, effect.holeB.position);

      const updateTrail = (trail, side) => {
        const array = trail.geometry.attributes.position.array;
        for (let i = 0; i < 84; i++) {
          const historical = Math.max(0, inspiral - (83 - i) * (.0028 + inspiral * .0009));
          positionFor(side, historical, mergerTrailPoint);
          array[i * 3] = mergerTrailPoint.x;
          array[i * 3 + 1] = mergerTrailPoint.y;
          array[i * 3 + 2] = mergerTrailPoint.z;
        }
        trail.geometry.attributes.position.needsUpdate = true;
        trail.material.opacity = THREE.MathUtils.smoothstep(phase, .02, .22)
          * .34
          * state.progenitorVisibility;
      };
      updateTrail(effect.trailA, 1);
      updateTrail(effect.trailB, -1);

      const ringdown = Math.exp(-postMerge * 7) * Math.sin(postMerge * 38);
      const remnantScale = effect.remnantScale ?? 1;
      effect.remnantHole.scale.set(
        remnantScale * (1 + ringdown * .056),
        remnantScale * (1 - ringdown * .036),
        remnantScale
      );
      setBlackHoleIntensity(effect.holeA, .62 + inspiral * .38, state.progenitorVisibility);
      setBlackHoleIntensity(effect.holeB, .62 + inspiral * .38, state.progenitorVisibility);
      setBlackHoleIntensity(
        effect.remnantHole,
        .74 + Math.exp(-postMerge * 4) * .34,
        state.remnantVisibility
      );
      const mergerFlash = state.remnantReveal * Math.exp(-postMerge * 18);
      // Vacuum mergers have no supernova-like flash. Gas-rich systems can have
      // a short electromagnetic afterglow, shown separately in warm light.
      effect.mergerGlow.material.opacity = mergerFlash * (effect.gasRich ? .48 : .13);
      const glowScale = .3 + postMerge * (effect.gasRich ? 3.6 : 2.4);
      effect.mergerGlow.scale.set(glowScale, glowScale, 1);
      effect.gasEcho.material.opacity = effect.gasRich
        ? THREE.MathUtils.smoothstep(postMerge, .02, .12) * (1 - THREE.MathUtils.smoothstep(postMerge, .3, .92)) * .34
        : 0;
      const gasScale = .35 + Math.pow(postMerge, .62) * 4.2;
      effect.gasEcho.scale.set(gasScale, gasScale, 1);
      effect.waveHalos.forEach((halo, haloIndex) => {
        const delay = haloIndex * .12;
        const local = THREE.MathUtils.clamp((postMerge - delay) / (1 - delay), 0, 1);
        halo.visible = state.remnantReveal > .001 && local > 0;
        const scale = .38 + Math.pow(local, .7) * (8.8 + haloIndex * .6);
        halo.scale.set(scale, scale, 1);
        halo.material.opacity = Math.pow(Math.sin(local * Math.PI), .78) * (.29 - haloIndex * .045);
      });
      effect.wavefronts.forEach((wave, waveIndex) => {
        const delay = waveIndex * .075;
        const local = THREE.MathUtils.clamp((postMerge - delay) / (1 - delay), 0, 1);
        wave.visible = state.remnantReveal > .001 && local > 0;
        wave.scale.setScalar(.28 + Math.pow(local, .72) * (7.4 + waveIndex * .34));
        wave.material.opacity = Math.pow(Math.sin(local * Math.PI), .72) * .19 * (1 - waveIndex * .08);
      });

      const waveArray = effect.waveDust.geometry.attributes.position.array;
      const waveRadius = .22 + Math.pow(postMerge, .72) * 8.6;
      for (let particle = 0; particle < effect.waveDirections.length / 3; particle++) {
        const offset = particle * 3;
        const dx = effect.waveDirections[offset];
        const dy = effect.waveDirections[offset + 1];
        const dz = effect.waveDirections[offset + 2];
        const quadrupole = 1 + (dx * dx - dz * dz) * .085 * Math.sin(postMerge * Math.PI * 5);
        waveArray[offset] = dx * waveRadius * quadrupole;
        waveArray[offset + 1] = dy * waveRadius * quadrupole;
        waveArray[offset + 2] = dz * waveRadius * quadrupole;
      }
      effect.waveDust.geometry.attributes.position.needsUpdate = true;
      effect.waveDust.material.opacity = state.remnantReveal
        * Math.pow(Math.sin(postMerge * Math.PI), .62)
        * .5;

      const recoilProgress = THREE.MathUtils.smoothstep(postMerge, .08, 1);
      const recoilDistance = recoilProgress * THREE.MathUtils.clamp(
        (event.simulation?.recoilKms || event.recoilKms || 500) / 720,
        .22,
        2.2
      );
      effect.remnantHole.position.copy(effect.recoilVector).multiplyScalar(recoilDistance);
      const recoilArray = effect.recoilTrail.geometry.attributes.position.array;
      recoilArray[0] = 0; recoilArray[1] = 0; recoilArray[2] = 0;
      recoilArray[3] = effect.remnantHole.position.x;
      recoilArray[4] = effect.remnantHole.position.y;
      recoilArray[5] = effect.remnantHole.position.z;
      effect.recoilTrail.geometry.attributes.position.needsUpdate = true;
      effect.recoilTrail.material.opacity = state.remnantReveal
        * (1 - postMerge * .72)
        * .28
        * persistence;
    }
  });
  if (centralBlackHole?.visible && centralAccretionBoost > 0) {
    setBlackHoleIntensity(
      centralBlackHole,
      Math.min(1.3, centralBlackHoleBaseline + centralAccretionBoost)
    );
  }
  cosmicEventGroup.visible = anyVisible;
  return activeCosmicEvent;
}

export function animateCosmicEvents(now, context) {
  const {
    cosmicEventGroup,
    prefersReducedMotion,
    cosmicEvents,
    camera,
    pulsarAnimationTimeMs = now,
    timelineAdvancing = true
  } = context;
  if (!cosmicEventGroup.visible || prefersReducedMotion) return;
  cosmicEvents.forEach((event) => {
    if (!event.group.visible) return;
    const family = eventVisualFamily(event);
    const phase = event.group.userData.phase;
    const effect = event.group.userData.effect;
    if (family === 'civilization') {
      animateCivilizationEventVisual(event, now);
    } else if (family === 'explosive-transient') {
      effect.innerFlash.material.rotation = now * .00007;
      effect.photosphere.material.rotation = -now * .000035;
      effect.ejecta.rotation.y = Math.sin(now * .00021) * .035;
    } else if (family === 'tidal-disruption') {
      effect.disk.material.rotation = now * .0014;
      effect.debris.rotation.y = Math.sin(now * .00017) * .08;
    } else if (family === 'stellar-flare') {
      effect.loops.forEach((loop, index) => {
        loop.rotation.z = Math.sin(now * .0009 + index) * .16;
      });
      effect.particles.rotation.y = now * .00022;
    } else if (family === 'stellar-collapse') {
      if (effect.remnantHole.visible) animateBlackHoleVisual(effect.remnantHole, now, effect.remnantHole.userData.spinDirection);
    } else if (family === 'pulsar') {
      const pulsarNow = pulsarAnimationTimeMs;
      const spinPeriodMs = event.simulation?.spinPeriodMs;
      const spinRate = spinPeriodMs
        ? THREE.MathUtils.clamp(80 / spinPeriodMs, .45, 4.8)
        : event.simulation?.model === 'magnetar-giant-flare' ? .72 : 1;
      const glitchCue = event.simulation?.model === 'pulsar-glitch' && phase >= .46
        ? 1 + Math.min(.12, event.simulation.fractionalFrequencyJump * 15000)
        : 1;
      effect.rotor.rotation.y = pulsarNow * .0024 * spinRate * glitchCue;
      effect.rotor.getWorldQuaternion(pulsarWorldQuaternion);
      event.group.getWorldPosition(pulsarWorldPosition);
      pulsarBeamAxis.set(0, 1, 0).applyQuaternion(pulsarWorldQuaternion).normalize();
      pulsarViewDirection.copy(camera.position).sub(pulsarWorldPosition).normalize();
      const alignment = Math.pow(Math.abs(pulsarBeamAxis.dot(pulsarViewDirection)), 14);
      const pulseFrequency = THREE.MathUtils.clamp(spinRate, .55, 3.2);
      const pulse = .52 + Math.pow(Math.max(0, Math.sin(pulsarNow * .012 * pulseFrequency)), 10) * .48;
      const glitchScale = event.type === 'pulsar-glitch' ? .16 : 1;
      effect.jets.material.opacity = event.group.userData.intensity * (.34 + alignment * .58) * pulse * glitchScale;
      effect.sweepGlow.material.opacity = event.group.userData.intensity * alignment * pulse * .78 * glitchScale;
      const sweepScale = .5 + alignment * 1.8;
      effect.sweepGlow.scale.set(sweepScale, sweepScale, 1);
      effect.knots.forEach((knot) => {
        const travel = (pulsarNow * .00055 + knot.userData.offset) % 1;
        knot.position.set(0, knot.userData.side * (.18 + travel * 2.45), 0);
        knot.material.opacity = event.group.userData.intensity * Math.sin(travel * Math.PI) * (.12 + alignment * .55) * glitchScale;
      });
      if (timelineAdvancing) {
        effect.fieldLines.forEach((field, index) => {
          field.rotation.y += .006 + index * .001;
        });
      }
    } else if (family === 'black-hole-merger') {
      animateBlackHoleVisual(effect.holeA, now, effect.holeA.userData.spinDirection);
      animateBlackHoleVisual(effect.holeB, now, effect.holeB.userData.spinDirection);
      animateBlackHoleVisual(effect.remnantHole, now, effect.remnantHole.userData.spinDirection);
    }
  });
}
