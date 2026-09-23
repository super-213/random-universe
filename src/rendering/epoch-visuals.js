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

const normalBackground = new THREE.Color(0x050508);
const hotBackground = new THREE.Color(0x2a1108);
const heatDeathBackground = new THREE.Color(0x03050a);
const currentBackground = new THREE.Color();
const fateColors = {
  'big-rip': new THREE.Color(0x071324),
  'little-rip': new THREE.Color(0x071523),
  'type-iii-singularity': new THREE.Color(0x241407),
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

export function updateEpochVisuals(position, context) {
  const {
    mode, epochEffectsGroup, primordialParticles, primordialFactors, primordialDirections,
    expansionStreaks, expansionDirections, bangCore, shockwaves, renderer, scene,
    clickableStars, originalGalaxyPositions, stellarGravityState, universe, transition, galaxyGroup,
    starDeathThresholds, originalGalaxyColors, stellarDawnModel, dawnGas, dawnSites,
    cosmicEvents, remnantGroup,
    stellarRemnants, originalRemnantPositions, remnantDynamics, blackHoleRemnants,
    heatDeathGroup, coldPhotons, originalPhotonPositions, originalPhotonColors,
    cosmicFateGroup, fateBubble, fateGlow
  } = context;
  const fate = universe.cosmicFate;
  const finiteOutcome = fate && fate.type !== 'heat-death';
  const fatePhase = finiteOutcome
    ? THREE.MathUtils.smoothstep(position, fate.onsetAt, 1000)
    : 0;
  const bouncePhase = fate?.cyclicBounce
    ? THREE.MathUtils.smoothstep(position, fate.bounceAt, 1000)
    : 0;
  const crunchPhase = fate?.cyclicBounce
    ? THREE.MathUtils.smoothstep(position, fate.onsetAt, fate.bounceAt)
    : fatePhase;
  const fateDestruction = fate?.type === 'little-rip'
    ? fatePhase * (fate.ripStrength ?? 1)
    : fatePhase;
  const earlyVisible = position < 150 && mode === 'explorer';
  epochEffectsGroup.visible = earlyVisible;
  if (earlyVisible && primordialParticles) {
    const expansion = THREE.MathUtils.smoothstep(position, 0, 145);
    const rapidExpansion = THREE.MathUtils.smoothstep(position, 0, 55);
    const plasmaExpansion = THREE.MathUtils.smoothstep(position, 55, 145);
    // The compact origin represents our observable patch, not a privileged
    // centre of the entire universe. Every sampled point then separates from
    // every other point as the metric expands.
    const causalScale = Math.sqrt(universe.speed);
    const radius = (.06 + Math.pow(rapidExpansion, .62) * 32 + plasmaExpansion * 7) * causalScale;
    const array = primordialParticles.geometry.attributes.position.array;
    for (let i = 0; i < primordialFactors.length; i++) {
      const r = radius * primordialFactors[i];
      array[i * 3] = primordialDirections[i * 3] * r;
      array[i * 3 + 1] = primordialDirections[i * 3 + 1] * r;
      array[i * 3 + 2] = primordialDirections[i * 3 + 2] * r;
    }
    primordialParticles.geometry.attributes.position.needsUpdate = true;
    primordialParticles.material.opacity = .98 * (1 - THREE.MathUtils.smoothstep(position, 112, 150));
    primordialParticles.material.size = .3 - expansion * .17;

    const streakArray = expansionStreaks.geometry.attributes.position.array;
    for (let i = 0; i < expansionDirections.length / 4; i++) {
      const factor = expansionDirections[i * 4 + 3];
      const head = (.04 + Math.pow(rapidExpansion, .5) * 31 + plasmaExpansion * 5) * factor * causalScale;
      const tail = Math.max(0, head - (1.2 + expansion * 5.5) * factor);
      for (let axis = 0; axis < 3; axis++) {
        const direction = expansionDirections[i * 4 + axis];
        streakArray[i * 6 + axis] = direction * tail;
        streakArray[i * 6 + 3 + axis] = direction * head;
      }
    }
    expansionStreaks.geometry.attributes.position.needsUpdate = true;
    expansionStreaks.material.opacity = .68
      * THREE.MathUtils.smoothstep(position, 1.5, 8)
      * (1 - THREE.MathUtils.smoothstep(position, 48, 82));

    const coreFade = 1 - THREE.MathUtils.smoothstep(position, 7, 34);
    const coreScale = .7 + Math.pow(rapidExpansion, .46) * 18;
    bangCore.material.opacity = coreFade;
    bangCore.scale.set(coreScale, coreScale, 1);
    shockwaves.forEach((wave, index) => {
      const start = 3 + index * 6;
      const duration = 52 + index * 7;
      const phase = THREE.MathUtils.clamp((position - start) / duration, 0, 1);
      const scale = .9 + Math.pow(phase, .72) * (39 + index * 5);
      wave.scale.set(scale, scale, 1);
      wave.material.opacity = Math.sin(phase * Math.PI) * (.24 - index * .045);
    });
  }

  currentBackground.copy(normalBackground);
  if (position < 70) {
    const cooling = THREE.MathUtils.smoothstep(position, 0, 70);
    currentBackground.lerpColors(hotBackground, normalBackground, cooling);
    renderer.toneMappingExposure = 1.15 + (1 - cooling) * 2.2;
  } else if (finiteOutcome && fatePhase > 0) {
    currentBackground.lerpColors(normalBackground, fateColors[fate.type], fatePhase * .72);
    renderer.toneMappingExposure = fate.type === 'big-crunch'
      ? 1.15 + crunchPhase * 1.45 + bouncePhase * 1.8
      : fate.type === 'type-iii-singularity'
        ? 1.15 + Math.pow(fatePhase, 2.2) * 2.6
        : 1.15 - fatePhase * .38;
  } else if (position > 950) {
    // Heat death is the disappearance of usable gradients, not a global dimmer.
    const cooling = THREE.MathUtils.smoothstep(position, 950, 1000);
    currentBackground.lerpColors(normalBackground, heatDeathBackground, cooling * .32);
    renderer.toneMappingExposure = 1.15;
  } else {
    renderer.toneMappingExposure = 1.15;
  }
  renderer.setClearColor(currentBackground, 1);
  scene.fog.color.copy(currentBackground);

  if (!clickableStars || !originalGalaxyPositions) return;
  const stellarVisualsVisible = position >= 205;
  clickableStars.visible = stellarVisualsVisible;
  if (!stellarVisualsVisible) {
    if (dawnGas) dawnGas.visible = false;
    dawnSites?.forEach((site) => { site.visible = false; });
    remnantGroup.visible = false;
    heatDeathGroup.visible = false;
    cosmicFateGroup.visible = false;
    galaxyGroup.children.forEach((item) => {
      if (item.userData.isCoreGlow || item.userData.isAgnGlow || item.userData.isAgnJet) {
        item.material.opacity = 0;
      }
    });
    return;
  }
  const stellarEnd = stellarEndTimelinePosition(universe);
  const stellarFormationEnd = stellarFormationEndTimelinePosition(universe);
  const remapReferencePosition = (referencePosition) => cosmicYearsToTimelinePosition(
    referenceFutureYearsAtTimelinePosition(referencePosition, universe),
    universe
  );
  const remnantFadeStart = remapReferencePosition(845);
  const remnantFadeEnd = remapReferencePosition(930);
  const remnantMotionEnd = remapReferencePosition(900);
  const hawkingStart = remapReferencePosition(790);
  const hawkingEstablished = remapReferencePosition(850);
  const formation = THREE.MathUtils.smoothstep(position, STELLAR_DAWN_START, STELLAR_DAWN_END);
  const assembledCore = THREE.MathUtils.smoothstep(position, 282, STELLAR_DAWN_END);
  const stellarPopulation = 1 - THREE.MathUtils.smoothstep(position, stellarEnd - 75, stellarEnd + 10);
  clickableStars.material.opacity = .9;
  clickableStars.material.size = .09;
  if (!transition) galaxyGroup.scale.setScalar(1);

  const dawnVisible = mode === 'explorer' && position >= 205 && position < 348;
  if (dawnGas && stellarDawnModel) {
    dawnGas.visible = dawnVisible;
    const gasReveal = THREE.MathUtils.smoothstep(position, 205, 228);
    const gasIonized = THREE.MathUtils.smoothstep(position, 265, 342);
    dawnGas.material.opacity = gasReveal * (1 - gasIonized) * .2;
    dawnGas.material.size = .19 - formation * .07;
    const gasPositions = dawnGas.geometry.attributes.position.array;
    stellarDawnModel.gasSourceIndices.forEach((sourceIndex, gasIndex) => {
      const sourceOffset = sourceIndex * 3;
      const gasOffset = gasIndex * 3;
      const collapse = THREE.MathUtils.smoothstep(
        position,
        stellarDawnModel.birthAt[sourceIndex] - 32,
        Math.min(STELLAR_DAWN_END, stellarDawnModel.birthAt[sourceIndex] + 32)
      ) * .72;
      gasPositions[gasOffset] = THREE.MathUtils.lerp(
        stellarDawnModel.formationOrigins[sourceOffset],
        originalGalaxyPositions[sourceOffset],
        collapse
      );
      gasPositions[gasOffset + 1] = THREE.MathUtils.lerp(
        stellarDawnModel.formationOrigins[sourceOffset + 1],
        originalGalaxyPositions[sourceOffset + 1],
        collapse
      );
      gasPositions[gasOffset + 2] = THREE.MathUtils.lerp(
        stellarDawnModel.formationOrigins[sourceOffset + 2],
        originalGalaxyPositions[sourceOffset + 2],
        collapse
      );
    });
    dawnGas.geometry.attributes.position.needsUpdate = true;
  }
  dawnSites?.forEach((site) => {
    const { birthAt, maxRadius, phase: phaseOffset, front, sourceGlow } = site.userData;
    const phase = THREE.MathUtils.clamp(
      (position - birthAt) / Math.max(1, STELLAR_DAWN_END - birthAt),
      0,
      1
    );
    const fade = 1 - THREE.MathUtils.smoothstep(position, 330, 348);
    site.visible = dawnVisible && phase > 0;
    const frontScale = .25 + Math.pow(phase, .68) * maxRadius;
    front.scale.set(frontScale, frontScale, 1);
    front.material.opacity = Math.sin(Math.min(.995, phase) * Math.PI) * .075 * fade;
    front.material.rotation = phaseOffset + phase * .18;
    const ignition = 1 - THREE.MathUtils.smoothstep(phase, .03, .24);
    const sourceReveal = THREE.MathUtils.smoothstep(phase, 0, .035);
    sourceGlow.scale.setScalar(.35 + phase * .95);
    sourceGlow.material.opacity = sourceReveal * ignition * .72 * fade;
  });

  const positionArray = clickableStars.geometry.attributes.position.array;
  const colorArray = clickableStars.geometry.attributes.color.array;
  if (stellarGravityState) {
    applyStellarGravity(position, originalGalaxyPositions, positionArray, stellarGravityState);
  }
  for (let i = 0; i < originalGalaxyPositions.length; i += 3) {
    const starIndex = i / 3;
    const alive = 1 - THREE.MathUtils.smoothstep(position, starDeathThresholds[starIndex], starDeathThresholds[starIndex] + 22);
    if (!stellarGravityState) {
      positionArray[i] = originalGalaxyPositions[i];
      positionArray[i + 1] = originalGalaxyPositions[i + 1];
      positionArray[i + 2] = originalGalaxyPositions[i + 2];
    }
    const birthAt = stellarDawnModel?.birthAt[starIndex] ?? STELLAR_DAWN_START;
    const born = THREE.MathUtils.smoothstep(position, birthAt, birthAt + 5.5);
    const young = 1 - THREE.MathUtils.smoothstep(position, birthAt + 3, birthAt + 18);
    if (stellarDawnModel && position < STELLAR_DAWN_END) {
      const assembly = THREE.MathUtils.smoothstep(
        position,
        birthAt - 7,
        Math.min(STELLAR_DAWN_END, birthAt + 38)
      );
      positionArray[i] = THREE.MathUtils.lerp(stellarDawnModel.formationOrigins[i], positionArray[i], assembly);
      positionArray[i + 1] = THREE.MathUtils.lerp(stellarDawnModel.formationOrigins[i + 1], positionArray[i + 1], assembly);
      positionArray[i + 2] = THREE.MathUtils.lerp(stellarDawnModel.formationOrigins[i + 2], positionArray[i + 2], assembly);
    }
    colorArray[i] = originalGalaxyColors[i] * alive * born * (1 + young * .28);
    colorArray[i + 1] = originalGalaxyColors[i + 1] * alive * born * (1 + young * .52);
    colorArray[i + 2] = originalGalaxyColors[i + 2] * alive * born * (1 + young * .95);
  }
  cosmicEvents.forEach((event) => {
    const center = eventCenterFromStars(event, positionArray);
    event.group.position.set(center.x, center.y, center.z);
    if (event.visual === 'black-hole-merger') {
      applyMergerGravity(position, positionArray, colorArray, event, center);
    }
    if (event.transientGravityField) {
      applyTransientGravity(position, positionArray, event, center);
    }
  });
  cosmicEvents.forEach((event) => {
    const visualImpactAt = event.visualImpactAt ?? event.impactAt;
    if (position < visualImpactAt) return;
    const aftermath = THREE.MathUtils.smoothstep(position, visualImpactAt, visualImpactAt + 24);
    if (event.type === 'stellar-megastructure' && !event.unstable) {
      const offset = event.sourceIndex * 3;
      const occlusion = 1 - aftermath * .58;
      colorArray[offset] *= occlusion;
      colorArray[offset + 1] *= occlusion * .96;
      colorArray[offset + 2] *= occlusion * .82;
    }
    event.starImpacts.forEach((impact) => {
      const offset = impact.index * 3;
      positionArray[offset] += impact.kick[0] * aftermath;
      positionArray[offset + 1] += impact.kick[1] * aftermath;
      positionArray[offset + 2] += impact.kick[2] * aftermath;
      colorArray[offset] *= impact.dimFactor;
      colorArray[offset + 1] *= impact.dimFactor;
      colorArray[offset + 2] *= impact.dimFactor;
    });

    if (!event.waveSamples) return;
    const waveDuration = event.duration * (1 - event.impactPhase);
    const waveProgress = THREE.MathUtils.clamp((position - visualImpactAt) / waveDuration, 0, 1);
    if (waveProgress <= 0 || waveProgress >= 1) return;
    const { waveRadius, waveAmplitude = 1, indices, distances, transverse, polarities } = event.waveSamples;
    const crestRadius = .18 + Math.pow(waveProgress, .72) * waveRadius;
    const thickness = .18 + waveProgress * .34;
    const attenuation = .13 * waveAmplitude * (1 - waveProgress * .58);
    for (let sample = 0; sample < indices.length; sample++) {
      const delta = distances[sample] - crestRadius;
      if (Math.abs(delta) > thickness * 2.8) continue;
      const pulse = Math.cos(delta / thickness * Math.PI) * Math.exp(-Math.pow(delta / thickness, 2) * 1.7);
      const displacement = pulse * attenuation * polarities[sample];
      const offset = indices[sample] * 3;
      const vectorOffset = sample * 3;
      // Gravitational-wave strain is transverse and far too small to see at
      // this scale. The displacement is an explicitly amplified teaching cue.
      positionArray[offset] += transverse[vectorOffset] * displacement;
      positionArray[offset + 1] += transverse[vectorOffset + 1] * displacement;
      positionArray[offset + 2] += transverse[vectorOffset + 2] * displacement;
      const crestHighlight = 1 + Math.abs(pulse) * .18;
      colorArray[offset] *= crestHighlight;
      colorArray[offset + 1] *= crestHighlight;
      colorArray[offset + 2] *= crestHighlight;
    }
  });

  if (finiteOutcome && fatePhase > 0) {
    const bubbleX = fateBubble?.position.x || 0;
    const bubbleY = fateBubble?.position.y || 0;
    const bubbleZ = fateBubble?.position.z || 0;
    const bubbleRadius = .18 + Math.pow(fatePhase, .58) * 36;
    for (let i = 0; i < originalGalaxyPositions.length; i += 3) {
      if (fate.type === 'big-rip' || fate.type === 'little-rip') {
        const ripStrength = fate.type === 'little-rip' ? fate.ripStrength ?? 1 : 1;
        const radius = Math.hypot(originalGalaxyPositions[i], originalGalaxyPositions[i + 1], originalGalaxyPositions[i + 2]);
        const separation = 1 + Math.pow(fatePhase, 1.7) * (2.8 + radius * .16) * ripStrength;
        positionArray[i] *= separation;
        positionArray[i + 1] *= separation;
        positionArray[i + 2] *= separation;
        const survival = Math.pow(1 - fatePhase * ripStrength, .72);
        colorArray[i] *= survival;
        colorArray[i + 1] *= survival;
        colorArray[i + 2] *= survival;
      } else if (fate.type === 'big-crunch') {
        const collapsed = Math.max(.012, 1 - Math.pow(crunchPhase, 1.35) * .988);
        const contraction = fate.cyclicBounce
          ? THREE.MathUtils.lerp(collapsed, .72, Math.pow(bouncePhase, .68))
          : collapsed;
        positionArray[i] *= contraction;
        positionArray[i + 1] *= contraction;
        positionArray[i + 2] *= contraction;
        colorArray[i] *= 1 + crunchPhase * 1.4 + bouncePhase * 1.8;
        colorArray[i + 1] *= 1 - crunchPhase * .5 + bouncePhase * 1.25;
        colorArray[i + 2] *= 1 - crunchPhase * .72 + bouncePhase * 2.2;
      } else if (fate.type === 'type-iii-singularity') {
        const finiteExpansion = 1 + Math.log2(fate.singularityScaleFactor || 2) * .14 * fatePhase;
        positionArray[i] *= finiteExpansion;
        positionArray[i + 1] *= finiteExpansion;
        positionArray[i + 2] *= finiteExpansion;
        const energyRise = Math.pow(fatePhase, 2.4);
        colorArray[i] *= 1 + energyRise * 4.8;
        colorArray[i + 1] *= 1 + energyRise * 2.8;
        colorArray[i + 2] *= 1 + energyRise * 1.2;
      } else {
        const distance = Math.hypot(
          positionArray[i] - bubbleX,
          positionArray[i + 1] - bubbleY,
          positionArray[i + 2] - bubbleZ
        );
        const survival = THREE.MathUtils.smoothstep(bubbleRadius - 1.2, bubbleRadius + .4, distance);
        colorArray[i] *= survival;
        colorArray[i + 1] *= survival;
        colorArray[i + 2] *= survival;
      }
    }
  }
  // Fate transformations run after local event gravity. Re-anchor event
  // visuals to their final transformed host position so a collapsing or
  // unbinding galaxy cannot slide away from its black-hole remnant.
  cosmicEvents.forEach((event) => {
    const center = eventCenterFromStars(event, positionArray);
    event.group.position.set(
      center.x,
      center.y,
      center.z
    );
  });
  clickableStars.geometry.attributes.position.needsUpdate = true;
  clickableStars.geometry.attributes.color.needsUpdate = true;

  const coreGlow = galaxyGroup.children.find((item) => item.userData.isCoreGlow);
  if (coreGlow) {
    const { scale, opacity } = coreGlow.userData.profile;
    coreGlow.material.opacity = assembledCore * stellarPopulation * opacity * (1 - fateDestruction);
    coreGlow.scale.set(scale, scale, 1);
  }
  const agnGlow = galaxyGroup.children.find((item) => item.userData.isAgnGlow);
  const agnJet = galaxyGroup.children.find((item) => item.userData.isAgnJet);
  if (agnGlow) {
    const agnFadeStart = Math.min(
      stellarFormationEnd - 1,
      cosmicYearsToTimelinePosition(4e10, universe)
    );
    const activePhase = assembledCore * (1 - THREE.MathUtils.smoothstep(
      position,
      agnFadeStart,
      stellarFormationEnd
    ));
    agnGlow.material.opacity = activePhase * .82;
    agnGlow.scale.set(.72, .72, 1);
    agnJet.material.opacity = activePhase * .18;
  }

  const outcomeVisibility = 1 - fateDestruction;
  const remnantsVisible = outcomeVisibility > .001
    && position >= remnantDynamics.firstBirthAt
    && position < remnantFadeEnd;
  const blackHolesVisible = outcomeVisibility > .001 && blackHoleRemnants.some((hole) => (
    position >= (hole.userData.visibleAt ?? hole.userData.birthAt)
      && position < (hole.userData.handoffAt ?? Infinity)
      && position <= hole.userData.evaporationAt + 7.5
  ));
  remnantGroup.visible = (remnantsVisible || blackHolesVisible) && mode === 'explorer';
  if (remnantsVisible && stellarRemnants) {
    const remnantFade = remnantFadeStart >= 999
      ? 1
      : 1 - THREE.MathUtils.smoothstep(
          position,
          remnantFadeStart,
          Math.max(remnantFadeStart + 1, remnantFadeEnd)
        );
    stellarRemnants.material.opacity = remnantFade * .64 * outcomeVisibility;
    const remnantArray = stellarRemnants.geometry.attributes.position.array;
    const remnantColors = stellarRemnants.geometry.attributes.color.array;
    const writeOrbit = (index, samplePosition) => {
      const offset = index * 3;
      const x = originalRemnantPositions[offset];
      const y = originalRemnantPositions[offset + 1];
      const z = originalRemnantPositions[offset + 2];
      const ax = remnantDynamics.axes[offset];
      const ay = remnantDynamics.axes[offset + 1];
      const az = remnantDynamics.axes[offset + 2];
      const angle = orbitalAngleAt(samplePosition, remnantDynamics.orbitRates[index]);
      const cosine = Math.cos(angle);
      const sine = Math.sin(angle);
      const dot = ax * x + ay * y + az * z;
      remnantArray[offset] = x * cosine + (ay * z - az * y) * sine + ax * dot * (1 - cosine);
      remnantArray[offset + 1] = y * cosine + (az * x - ax * z) * sine + ay * dot * (1 - cosine);
      remnantArray[offset + 2] = z * cosine + (ax * y - ay * x) * sine + az * dot * (1 - cosine);
    };

    for (let index = 0; index < originalRemnantPositions.length / 3; index++) {
      const offset = index * 3;
      const born = THREE.MathUtils.smoothstep(
        position,
        remnantDynamics.birthAt[index],
        remnantDynamics.birthAt[index] + 8
      );
      remnantColors[offset] = remnantDynamics.baseColors[offset] * born;
      remnantColors[offset + 1] = remnantDynamics.baseColors[offset + 1] * born;
      remnantColors[offset + 2] = remnantDynamics.baseColors[offset + 2] * born;
      const fate = remnantDynamics.fates[index];
      const transitionAt = remnantDynamics.escapeAt[index];
      if (position < transitionAt || fate === 1) {
        writeOrbit(index, position);
        continue;
      }

      if (fate === 2) {
        const infall = THREE.MathUtils.smoothstep(
          position,
          transitionAt,
          Math.max(transitionAt + 1, Math.min(remnantMotionEnd, transitionAt + 42))
        );
        writeOrbit(index, position + infall * 150);
        const radiusScale = 1 - infall * .985;
        remnantArray[offset] *= radiusScale;
        remnantArray[offset + 1] *= radiusScale;
        remnantArray[offset + 2] *= radiusScale;
        continue;
      }

      writeOrbit(index, transitionAt);
      const startX = remnantArray[offset];
      const startY = remnantArray[offset + 1];
      const startZ = remnantArray[offset + 2];
      const radius = Math.max(.001, Math.hypot(startX, startY, startZ));
      const ax = remnantDynamics.axes[offset];
      const ay = remnantDynamics.axes[offset + 1];
      const az = remnantDynamics.axes[offset + 2];
      const orbitDirection = Math.sign(remnantDynamics.orbitRates[index]) || 1;
      let tangentX = (ay * startZ - az * startY) * orbitDirection;
      let tangentY = (az * startX - ax * startZ) * orbitDirection;
      let tangentZ = (ax * startY - ay * startX) * orbitDirection;
      const tangentLength = Math.max(.001, Math.hypot(tangentX, tangentY, tangentZ));
      tangentX /= tangentLength; tangentY /= tangentLength; tangentZ /= tangentLength;
      let directionX = tangentX * .9 + startX / radius * .34;
      let directionY = tangentY * .9 + startY / radius * .34 + ay * Math.sin(index * 12.9898) * .08;
      let directionZ = tangentZ * .9 + startZ / radius * .34;
      const directionLength = Math.max(.001, Math.hypot(directionX, directionY, directionZ));
      directionX /= directionLength; directionY /= directionLength; directionZ /= directionLength;
      const progress = THREE.MathUtils.clamp(
        (position - transitionAt) / Math.max(1, remnantMotionEnd - transitionAt),
        0,
        1
      );
      const distance = fate === 3
        ? Math.pow(progress, .72) * (18 + remnantDynamics.speeds[index] * 7)
        : Math.pow(progress, 1.35) * (6 + remnantDynamics.speeds[index] * 11);
      remnantArray[offset] = startX + directionX * distance;
      remnantArray[offset + 1] = startY + directionY * distance;
      remnantArray[offset + 2] = startZ + directionZ * distance;
    }
    stellarRemnants.geometry.attributes.position.needsUpdate = true;
    stellarRemnants.geometry.attributes.color.needsUpdate = true;
  }

  blackHoleRemnants.forEach((hole) => {
    const data = hole.userData;
    if (!data.isCentral && data.anchorSourceIndices?.length) {
      const totalWeight = data.anchorWeights?.reduce((sum, weight) => sum + weight, 0)
        || data.anchorSourceIndices.length;
      hole.position.set(0, 0, 0);
      data.anchorSourceIndices.forEach((sourceIndex, index) => {
        const sourceOffset = sourceIndex * 3;
        const weight = (data.anchorWeights?.[index] ?? 1) / totalWeight;
        hole.position.x += positionArray[sourceOffset] * weight;
        hole.position.y += positionArray[sourceOffset + 1] * weight;
        hole.position.z += positionArray[sourceOffset + 2] * weight;
      });
    } else if (!data.isCentral && Number.isInteger(data.sourceIndex)) {
      const sourceOffset = data.sourceIndex * 3;
      hole.position.set(
        positionArray[sourceOffset],
        positionArray[sourceOffset + 1],
        positionArray[sourceOffset + 2]
      );
    }
    if (!data.isCentral && data.positionOffset) {
      hole.position.x += data.positionOffset[0];
      hole.position.y += data.positionOffset[1];
      hole.position.z += data.positionOffset[2];
    }
    const born = THREE.MathUtils.smoothstep(position, data.birthAt, data.birthAt + 7);
    const formationDuration = Math.max(0, data.formationDuration ?? 12);
    const formed = formationDuration === 0
      ? 1
      : THREE.MathUtils.smoothstep(
          position,
          data.visibleAt ?? data.birthAt,
          (data.visibleAt ?? data.birthAt) + formationDuration
        );
    const remaining = 1 - THREE.MathUtils.smoothstep(position, data.evaporationAt - 24, data.evaporationAt);
    const lateEvaporation = THREE.MathUtils.smoothstep(position, data.evaporationAt - 15, data.evaporationAt);
    const isolationStart = Math.max(data.birthAt + 12, stellarEnd - 50);
    const isolated = THREE.MathUtils.smoothstep(
      position,
      isolationStart,
      Math.max(isolationStart + 1, remapReferencePosition(825))
    );
    const hawkingEra = THREE.MathUtils.smoothstep(
      position,
      hawkingStart,
      Math.max(hawkingStart + 1, hawkingEstablished)
    );
    const pulseWindow = 7.5;
    const pulseDistance = Math.abs(position - data.evaporationAt);
    const pulse = pulseDistance < pulseWindow ? Math.sin((1 - pulseDistance / pulseWindow) * Math.PI / 2) : 0;
    hole.visible = outcomeVisibility > .001
      && mode === 'explorer'
      && position >= (data.visibleAt ?? data.birthAt)
      && position < (data.handoffAt ?? Infinity)
      && position <= data.evaporationAt + pulseWindow;
    const handoffVisibility = data.handoffStartAt === undefined
      ? 1
      : 1 - THREE.MathUtils.smoothstep(
          position,
          data.handoffStartAt,
          data.handoffAt
        );
    const dawnMaturity = data.isCentral
      ? THREE.MathUtils.smoothstep(position, data.birthAt, STELLAR_DAWN_END + 18)
      : 1;
    const massScale = data.baseScale
      * THREE.MathUtils.lerp(.28, 1, dawnMaturity)
      * (.18 + .82 * Math.cbrt(Math.max(0, remaining)))
      * (data.isCentral ? 1 : THREE.MathUtils.lerp(.12, 1, formed));
    hole.scale.setScalar(Math.max(.035, massScale));
    const accretionIntensity = born
      * formed
      * dawnMaturity
      * THREE.MathUtils.lerp(data.accretionStrength, .24, isolated)
      * Math.sqrt(Math.max(0, remaining));
    setBlackHoleIntensity(hole, accretionIntensity, outcomeVisibility * handoffVisibility);
    data.hawkingGlow.material.opacity = born
      * hawkingEra
      * (.06 + lateEvaporation * .62)
      * Math.sqrt(Math.max(0, remaining))
      * outcomeVisibility
      * handoffVisibility;
    data.finalPulse.material.opacity = pulse * .84 * outcomeVisibility * handoffVisibility;
    const pulseScale = (.22 + pulse * 2.1) / Math.max(.035, massScale);
    data.finalPulse.scale.set(pulseScale, pulseScale, 1);
  });

  heatDeathGroup.visible = !finiteOutcome && position > 910 && mode === 'explorer';
  if (coldPhotons && originalPhotonPositions && originalPhotonColors) {
    const radiationBirth = THREE.MathUtils.smoothstep(position, 910, 940);
    const redshift = THREE.MathUtils.smoothstep(position, 938, 1000);
    coldPhotons.material.opacity = radiationBirth * Math.pow(1 - redshift, 1.7) * .34;
    const photonArray = coldPhotons.geometry.attributes.position.array;
    const photonColors = coldPhotons.geometry.attributes.color.array;
    const expansion = 1 + redshift * 1.8;
    for (let i = 0; i < originalPhotonPositions.length; i += 3) {
      photonArray[i] = originalPhotonPositions[i] * expansion;
      photonArray[i + 1] = originalPhotonPositions[i + 1] * expansion;
      photonArray[i + 2] = originalPhotonPositions[i + 2] * expansion;
      photonColors[i] = originalPhotonColors[i] * (1 - redshift * .55) + redshift * .06;
      photonColors[i + 1] = originalPhotonColors[i + 1] * (1 - redshift * .88);
      photonColors[i + 2] = originalPhotonColors[i + 2] * (1 - redshift * .96);
    }
    coldPhotons.geometry.attributes.position.needsUpdate = true;
    coldPhotons.geometry.attributes.color.needsUpdate = true;
  }

  cosmicFateGroup.visible = finiteOutcome && fatePhase > 0 && mode === 'explorer';
  if (cosmicFateGroup.visible && fateBubble && fateGlow) {
    if (fate.type === 'vacuum-decay') {
      const nucleation = THREE.MathUtils.smoothstep(fatePhase, 0, .025);
      const radius = .18 + Math.pow(fatePhase, .58) * 36;
      fateBubble.visible = true;
      fateBubble.scale.setScalar(radius);
      fateBubble.material.opacity = nucleation
        * (Math.sin(Math.min(.98, fatePhase) * Math.PI) * .18 + .035);
      fateGlow.position.copy(fateBubble.position);
      fateGlow.material.opacity = nucleation * (1 - fatePhase) * .42;
      fateGlow.scale.setScalar(1.2 + fatePhase * 5.5);
    } else {
      fateBubble.visible = false;
      fateGlow.position.set(0, 0, 0);
      fateGlow.material.opacity = fate.type === 'big-crunch'
        ? Math.min(1, Math.pow(crunchPhase, 2.4) * .92 + bouncePhase * .9)
        : fate.type === 'type-iii-singularity'
          ? Math.pow(fatePhase, 2.1) * .96
          : Math.sin(fatePhase * Math.PI) * .28;
      const glowScale = fate.type === 'big-crunch'
        ? fate.cyclicBounce
          ? .4 + (1 - crunchPhase) * 8 + bouncePhase * 16
          : .4 + (1 - fatePhase) * 8
        : fate.type === 'type-iii-singularity'
          ? 2 + Math.pow(fatePhase, .8) * 7
          : 3 + fatePhase * 28;
      fateGlow.scale.setScalar(glowScale);
    }
  }
}
