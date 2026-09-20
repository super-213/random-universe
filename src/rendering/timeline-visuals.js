import * as THREE from 'three';
import {
  stellarEndTimelinePosition,
  stellarFormationEndTimelinePosition
} from '../domain/universe.js';
import {
  cosmicYearsToTimelinePosition,
  referenceFutureYearsAtTimelinePosition
} from '../domain/cosmic-time.js';
import { orbitalAngleAt } from '../domain/orbital-motion.js';
import { applyMergerGravity, applyStellarGravity, mergerPersistenceAt } from '../simulation/black-hole-gravity.js';
import { applyTransientGravity, transientPersistenceAt } from '../simulation/transient-events.js';
import { animateBlackHoleVisual, setBlackHoleIntensity } from './black-hole.js';

export function updateEpochVisuals(position, context) {
  const {
    mode, epochEffectsGroup, primordialParticles, primordialFactors, primordialDirections,
    expansionStreaks, expansionDirections, bangCore, shockwaves, renderer, scene,
    clickableStars, originalGalaxyPositions, stellarGravityState, universe, transition, galaxyGroup,
    starDeathThresholds, originalGalaxyColors, cosmicEvents, remnantGroup,
    stellarRemnants, originalRemnantPositions, remnantDynamics, blackHoleRemnants,
    heatDeathGroup, coldPhotons, originalPhotonPositions, originalPhotonColors,
    cosmicFateGroup, fateBubble, fateGlow
  } = context;
  const fate = universe.cosmicFate;
  const finiteOutcome = fate && fate.type !== 'heat-death';
  const fatePhase = finiteOutcome
    ? THREE.MathUtils.smoothstep(position, fate.onsetAt, 1000)
    : 0;
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

  const normalBackground = new THREE.Color(0x050508);
  const currentBackground = normalBackground.clone();
  if (position < 70) {
    const cooling = THREE.MathUtils.smoothstep(position, 0, 70);
    currentBackground.lerpColors(new THREE.Color(0x2a1108), normalBackground, cooling);
    renderer.toneMappingExposure = 1.15 + (1 - cooling) * 2.2;
  } else if (finiteOutcome && fatePhase > 0) {
    const fateColors = {
      'big-rip': new THREE.Color(0x071324),
      'big-crunch': new THREE.Color(0x260806),
      'vacuum-decay': new THREE.Color(0x160a25)
    };
    currentBackground.lerpColors(normalBackground, fateColors[fate.type], fatePhase * .72);
    renderer.toneMappingExposure = fate.type === 'big-crunch'
      ? 1.15 + fatePhase * 1.45
      : 1.15 - fatePhase * .38;
  } else if (position > 950) {
    // Heat death is the disappearance of usable gradients, not a global dimmer.
    const cooling = THREE.MathUtils.smoothstep(position, 950, 1000);
    currentBackground.lerpColors(normalBackground, new THREE.Color(0x03050a), cooling * .32);
    renderer.toneMappingExposure = 1.15;
  } else {
    renderer.toneMappingExposure = 1.15;
  }
  renderer.setClearColor(currentBackground, 1);
  scene.fog.color.copy(currentBackground);

  if (!clickableStars || !originalGalaxyPositions) return;
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
  const formation = THREE.MathUtils.smoothstep(position, 245, 340);
  const stellarPopulation = 1 - THREE.MathUtils.smoothstep(position, stellarEnd - 75, stellarEnd + 10);
  clickableStars.material.opacity = formation * .9;
  clickableStars.material.size = .09;
  if (!transition) galaxyGroup.scale.setScalar(1);

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
    colorArray[i] = originalGalaxyColors[i] * alive;
    colorArray[i + 1] = originalGalaxyColors[i + 1] * alive;
    colorArray[i + 2] = originalGalaxyColors[i + 2] * alive;
  }
  cosmicEvents.forEach((event) => {
    const sourceOffset = event.sourceIndex * 3;
    const center = {
      x: positionArray[sourceOffset],
      y: positionArray[sourceOffset + 1],
      z: positionArray[sourceOffset + 2]
    };
    event.group.position.set(center.x, center.y, center.z);
    if (event.visual === 'black-hole-merger') {
      applyMergerGravity(position, positionArray, colorArray, event, center);
    }
    if (event.transientGravityField) {
      applyTransientGravity(position, positionArray, event, center);
    }
  });
  cosmicEvents.forEach((event) => {
    if (position < event.impactAt) return;
    const aftermath = THREE.MathUtils.smoothstep(position, event.impactAt, event.impactAt + 24);
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
    const waveProgress = THREE.MathUtils.clamp((position - event.impactAt) / waveDuration, 0, 1);
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
      if (fate.type === 'big-rip') {
        const radius = Math.hypot(originalGalaxyPositions[i], originalGalaxyPositions[i + 1], originalGalaxyPositions[i + 2]);
        const separation = 1 + Math.pow(fatePhase, 1.7) * (2.8 + radius * .16);
        positionArray[i] *= separation;
        positionArray[i + 1] *= separation;
        positionArray[i + 2] *= separation;
        const survival = Math.pow(1 - fatePhase, .72);
        colorArray[i] *= survival;
        colorArray[i + 1] *= survival;
        colorArray[i + 2] *= survival;
      } else if (fate.type === 'big-crunch') {
        const contraction = Math.max(.012, 1 - Math.pow(fatePhase, 1.35) * .988);
        positionArray[i] *= contraction;
        positionArray[i + 1] *= contraction;
        positionArray[i + 2] *= contraction;
        colorArray[i] *= 1 + fatePhase * 1.4;
        colorArray[i + 1] *= 1 - fatePhase * .5;
        colorArray[i + 2] *= 1 - fatePhase * .72;
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
    const sourceOffset = event.sourceIndex * 3;
    event.group.position.set(
      positionArray[sourceOffset],
      positionArray[sourceOffset + 1],
      positionArray[sourceOffset + 2]
    );
  });
  clickableStars.geometry.attributes.position.needsUpdate = true;
  clickableStars.geometry.attributes.color.needsUpdate = true;

  const coreGlow = galaxyGroup.children.find((item) => item.userData.isCoreGlow);
  if (coreGlow) {
    const { scale, opacity } = coreGlow.userData.profile;
    coreGlow.material.opacity = formation * stellarPopulation * opacity * (1 - fatePhase);
    coreGlow.scale.set(scale, scale, 1);
  }
  const agnGlow = galaxyGroup.children.find((item) => item.userData.isAgnGlow);
  const agnJet = galaxyGroup.children.find((item) => item.userData.isAgnJet);
  if (agnGlow) {
    const agnFadeStart = Math.min(
      stellarFormationEnd - 1,
      cosmicYearsToTimelinePosition(4e10, universe)
    );
    const activePhase = formation * (1 - THREE.MathUtils.smoothstep(
      position,
      agnFadeStart,
      stellarFormationEnd
    ));
    agnGlow.material.opacity = activePhase * .82;
    agnGlow.scale.set(.72, .72, 1);
    agnJet.material.opacity = activePhase * .18;
  }

  const outcomeVisibility = 1 - fatePhase;
  const remnantsVisible = outcomeVisibility > .001
    && position >= remnantDynamics.firstBirthAt
    && position < remnantFadeEnd;
  const blackHolesVisible = outcomeVisibility > .001 && blackHoleRemnants.some((hole) => (
    position >= hole.userData.birthAt
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
    stellarRemnants.material.opacity = remnantFade * .64 * (1 - fatePhase);
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
    if (!data.isCentral && Number.isInteger(data.sourceIndex)) {
      const sourceOffset = data.sourceIndex * 3;
      hole.position.set(
        positionArray[sourceOffset],
        positionArray[sourceOffset + 1],
        positionArray[sourceOffset + 2]
      );
    }
    const born = THREE.MathUtils.smoothstep(position, data.birthAt, data.birthAt + 7);
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
      && position >= data.birthAt
      && position <= data.evaporationAt + pulseWindow;
    const massScale = data.baseScale * (.18 + .82 * Math.cbrt(Math.max(0, remaining)));
    hole.scale.setScalar(Math.max(.035, massScale));
    const accretionIntensity = born
      * THREE.MathUtils.lerp(data.accretionStrength, .24, isolated)
      * Math.sqrt(Math.max(0, remaining));
    setBlackHoleIntensity(hole, accretionIntensity, outcomeVisibility);
    data.hawkingGlow.material.opacity = born
      * hawkingEra
      * (.06 + lateEvaporation * .62)
      * Math.sqrt(Math.max(0, remaining))
      * outcomeVisibility;
    data.finalPulse.material.opacity = pulse * .84 * outcomeVisibility;
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
      const radius = .18 + Math.pow(fatePhase, .58) * 36;
      fateBubble.visible = true;
      fateBubble.scale.setScalar(radius);
      fateBubble.material.opacity = Math.sin(Math.min(.98, fatePhase) * Math.PI) * .18 + .035;
      fateGlow.position.copy(fateBubble.position);
      fateGlow.material.opacity = (1 - fatePhase) * .42;
      fateGlow.scale.setScalar(1.2 + fatePhase * 5.5);
    } else {
      fateBubble.visible = false;
      fateGlow.position.set(0, 0, 0);
      fateGlow.material.opacity = fate.type === 'big-crunch'
        ? Math.pow(fatePhase, 2.4) * .92
        : Math.sin(fatePhase * Math.PI) * .28;
      const glowScale = fate.type === 'big-crunch'
        ? .4 + (1 - fatePhase) * 8
        : 3 + fatePhase * 28;
      fateGlow.scale.setScalar(glowScale);
    }
  }
}

export function updateCosmicEvents(position, context) {
  const { mode, cosmicEvents, cosmicEventGroup, universe } = context;
  const fateStarted = universe.cosmicFate.type !== 'heat-death'
    && position >= universe.cosmicFate.onsetAt;
  let activeCosmicEvent = null;
  let anyVisible = false;
  cosmicEvents.forEach((event) => {
    const phase = (position - event.start) / event.duration;
    const active = phase >= 0 && phase <= 1;
    const mergerPersistence = event.visual === 'black-hole-merger'
      ? mergerPersistenceAt(position, event)
      : 0;
    const transientPersistence = transientPersistenceAt(position, event);
    const persistence = Math.max(mergerPersistence, transientPersistence);
    const persistentRemnant = position >= event.impactAt && persistence > 0;
    const visible = !fateStarted && (active || persistentRemnant) && mode === 'explorer';
    event.group.visible = visible;
    if (!visible) return;
    anyVisible = true;
    if (active) activeCosmicEvent = event;
    const visualPhase = Math.min(1, phase);
    event.group.userData.phase = visualPhase;
    const effect = event.group.userData.effect;

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
        setBlackHoleIntensity(effect.remnantHole, .8, transientPersistence);
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

    if (event.visual === 'supernova' || event.visual === 'nova' || event.visual === 'kilonova') {
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
    } else if (event.visual === 'tidal-disruption') {
      const phase = visualPhase;
      const approach = THREE.MathUtils.smoothstep(phase, 0, .42);
      const disrupted = THREE.MathUtils.smoothstep(phase, .3, .62);
      const accretion = THREE.MathUtils.smoothstep(phase, .4, .72);
      const fallbackStart = event.simulation?.pulsePhases?.[0] || .58;
      const fallbackProgress = Math.max(0, (phase - fallbackStart) / Math.max(.001, 1 - fallbackStart));
      const fallbackLuminosity = THREE.MathUtils.smoothstep(phase, .4, fallbackStart)
        * Math.pow(1 + fallbackProgress * 6, event.simulation?.fallbackExponent || -5 / 3);
      effect.starCore.position.set(
        THREE.MathUtils.lerp(2.5, .48, approach),
        Math.sin(approach * Math.PI) * .34,
        THREE.MathUtils.lerp(.34, 0, approach)
      );
      effect.starCore.material.opacity = (1 - disrupted) * .96;
      effect.starCore.scale.set(.28 + disrupted * .68, Math.max(.035, .28 * (1 - disrupted * .88)), 1);
      effect.disk.material.opacity = fallbackLuminosity * .5;
      effect.flare.material.opacity = fallbackLuminosity * .62;
      const flareScale = .24 + Math.sqrt(fallbackLuminosity) * 2.5;
      effect.flare.scale.set(flareScale, flareScale, 1);
      setBlackHoleIntensity(effect.hole, .62 + accretion * .38);

      const debrisArray = effect.debris.geometry.attributes.position.array;
      for (let i = 0; i < effect.debrisOffsets.length; i++) {
        const offset = i * 3;
        const stream = effect.debrisOffsets[i];
        const bound = stream < 0;
        const radius = bound
          ? .34 + Math.abs(stream) * (1.15 - accretion * .72)
          : .42 + stream * (.65 + accretion * 3.4);
        const angle = stream * 1.8 + accretion * (bound ? 6.4 : 1.25);
        const thickness = Math.sin(effect.debrisNoise[i] + accretion * 5) * .045 * (1 - accretion * .45);
        debrisArray[offset] = Math.cos(angle) * radius;
        debrisArray[offset + 1] = Math.sin(angle) * radius * .38 + thickness;
        debrisArray[offset + 2] = Math.sin(angle * .5 + effect.debrisNoise[i]) * .075;
      }
      effect.debris.geometry.attributes.position.needsUpdate = true;
      effect.debris.material.opacity = disrupted * (1 - THREE.MathUtils.smoothstep(phase, .9, 1)) * .82;
    } else if (event.visual === 'stellar-flare') {
      const phase = visualPhase;
      const stormPulse = event.simulation?.pulsePhases?.reduce((strongest, pulsePhase, pulseIndex) => {
        const weight = event.simulation.pulseWeights?.[pulseIndex] ?? 1;
        const distance = Math.abs(phase - pulsePhase);
        return Math.max(strongest, Math.exp(-distance * distance * 900) * weight);
      }, 0) || 0;
      const envelope = Math.max(Math.pow(Math.sin(phase * Math.PI), .5) * .22, stormPulse);
      const pulse = .72 + stormPulse * .28;
      effect.starCore.material.opacity = .48 + envelope * .5;
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
    } else if (event.visual === 'stellar-collapse') {
      const phase = visualPhase;
      const collapse = THREE.MathUtils.smoothstep(phase, .32, .68);
      const briefBrightening = THREE.MathUtils.smoothstep(phase, .04, .2)
        * (1 - THREE.MathUtils.smoothstep(phase, .3, .52));
      effect.starCore.material.opacity = (1 - collapse) * (.58 + briefBrightening * .42);
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
      effect.remnantHole.visible = collapse > .72;
      if (effect.remnantHole.visible) setBlackHoleIntensity(effect.remnantHole, .58 + collapse * .34);
    } else if (event.visual === 'pulsar') {
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
    } else if (event.visual === 'black-hole-merger') {
      const phase = visualPhase;
      const mergePoint = .68;
      const merged = phase >= mergePoint;
      effect.holeA.visible = !merged;
      effect.holeB.visible = !merged;
      effect.remnantHole.visible = merged && persistence > 0;
      const inspiral = Math.min(1, phase / mergePoint);
      const angleFor = (value) => Math.PI * 2 * (1.15 * value + 4.1 * Math.pow(value, 3));
      const radiusFor = (value) => .12 + 2.45 * Math.pow(1 - value, .72);
      const angle = angleFor(inspiral);
      const radius = radiusFor(inspiral);
      effect.holeA.position.set(Math.cos(angle) * radius, Math.sin(angle) * radius, Math.sin(angle * .5) * .09);
      effect.holeB.position.set(-Math.cos(angle) * radius, -Math.sin(angle) * radius, -Math.sin(angle * .5) * .09);

      const updateTrail = (trail, side) => {
        const array = trail.geometry.attributes.position.array;
        for (let i = 0; i < 84; i++) {
          const historical = Math.max(0, inspiral - (83 - i) * (.0028 + inspiral * .0009));
          const oldAngle = angleFor(historical);
          const oldRadius = radiusFor(historical);
          array[i * 3] = side * Math.cos(oldAngle) * oldRadius;
          array[i * 3 + 1] = side * Math.sin(oldAngle) * oldRadius;
          array[i * 3 + 2] = side * Math.sin(oldAngle * .5) * .09;
        }
        trail.geometry.attributes.position.needsUpdate = true;
        trail.material.opacity = merged ? 0 : THREE.MathUtils.smoothstep(phase, .02, .22) * .34;
      };
      updateTrail(effect.trailA, 1);
      updateTrail(effect.trailB, -1);

      const postMerge = THREE.MathUtils.clamp((phase - mergePoint) / (1 - mergePoint), 0, 1);
      const ringdown = Math.exp(-postMerge * 7) * Math.sin(postMerge * 38);
      effect.remnantHole.scale.set(1.24 + ringdown * .07, 1.24 - ringdown * .045, 1.24);
      setBlackHoleIntensity(effect.holeA, .62 + inspiral * .38);
      setBlackHoleIntensity(effect.holeB, .62 + inspiral * .38);
      setBlackHoleIntensity(effect.remnantHole, .74 + Math.exp(-postMerge * 4) * .34, persistence);
      const mergerFlash = merged ? Math.exp(-postMerge * 18) : 0;
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
        halo.visible = merged && local > 0;
        const scale = .38 + Math.pow(local, .7) * (8.8 + haloIndex * .6);
        halo.scale.set(scale, scale, 1);
        halo.material.opacity = Math.pow(Math.sin(local * Math.PI), .78) * (.29 - haloIndex * .045);
      });
      effect.wavefronts.forEach((wave, waveIndex) => {
        const delay = waveIndex * .075;
        const local = THREE.MathUtils.clamp((postMerge - delay) / (1 - delay), 0, 1);
        wave.visible = merged && local > 0;
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
      effect.waveDust.material.opacity = merged ? Math.pow(Math.sin(postMerge * Math.PI), .62) * .5 : 0;

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
      effect.recoilTrail.material.opacity = merged ? (1 - postMerge * .72) * .28 * persistence : 0;
    }
  });
  cosmicEventGroup.visible = anyVisible;
  return activeCosmicEvent;
}

export function animateCosmicEvents(now, context) {
  const { cosmicEventGroup, prefersReducedMotion, cosmicEvents, camera } = context;
  if (!cosmicEventGroup.visible || prefersReducedMotion) return;
  cosmicEvents.forEach((event) => {
    if (!event.group.visible) return;
    const phase = event.group.userData.phase;
    const effect = event.group.userData.effect;
    if (event.visual === 'supernova' || event.visual === 'nova' || event.visual === 'kilonova') {
      effect.innerFlash.material.rotation = now * .00007;
      effect.photosphere.material.rotation = -now * .000035;
      effect.ejecta.rotation.y = Math.sin(now * .00021) * .035;
    } else if (event.visual === 'tidal-disruption') {
      effect.disk.material.rotation = now * .0014;
      effect.debris.rotation.y = Math.sin(now * .00017) * .08;
      animateBlackHoleVisual(effect.hole, now, effect.hole.userData.spinDirection);
    } else if (event.visual === 'stellar-flare') {
      effect.loops.forEach((loop, index) => {
        loop.rotation.z = Math.sin(now * .0009 + index) * .16;
      });
      effect.particles.rotation.y = now * .00022;
    } else if (event.visual === 'stellar-collapse') {
      if (effect.remnantHole.visible) animateBlackHoleVisual(effect.remnantHole, now, effect.remnantHole.userData.spinDirection);
    } else if (event.visual === 'pulsar') {
      const spinPeriodMs = event.simulation?.spinPeriodMs;
      const spinRate = spinPeriodMs
        ? THREE.MathUtils.clamp(80 / spinPeriodMs, .45, 4.8)
        : event.simulation?.model === 'magnetar-giant-flare' ? .72 : 1;
      const glitchCue = event.simulation?.model === 'pulsar-glitch' && phase >= .46
        ? 1 + Math.min(.12, event.simulation.fractionalFrequencyJump * 15000)
        : 1;
      effect.rotor.rotation.y = now * .0024 * spinRate * glitchCue;
      const worldQuaternion = new THREE.Quaternion();
      const worldPosition = new THREE.Vector3();
      const beamAxis = new THREE.Vector3(0, 1, 0);
      effect.rotor.getWorldQuaternion(worldQuaternion);
      event.group.getWorldPosition(worldPosition);
      beamAxis.applyQuaternion(worldQuaternion).normalize();
      const viewDirection = camera.position.clone().sub(worldPosition).normalize();
      const alignment = Math.pow(Math.abs(beamAxis.dot(viewDirection)), 14);
      const pulseFrequency = THREE.MathUtils.clamp(spinRate, .55, 3.2);
      const pulse = .52 + Math.pow(Math.max(0, Math.sin(now * .012 * pulseFrequency)), 10) * .48;
      const glitchScale = event.type === 'pulsar-glitch' ? .16 : 1;
      effect.jets.material.opacity = event.group.userData.intensity * (.34 + alignment * .58) * pulse * glitchScale;
      effect.sweepGlow.material.opacity = event.group.userData.intensity * alignment * pulse * .78 * glitchScale;
      const sweepScale = .5 + alignment * 1.8;
      effect.sweepGlow.scale.set(sweepScale, sweepScale, 1);
      effect.knots.forEach((knot) => {
        const travel = (now * .00055 + knot.userData.offset) % 1;
        knot.position.set(0, knot.userData.side * (.18 + travel * 2.45), 0);
        knot.material.opacity = event.group.userData.intensity * Math.sin(travel * Math.PI) * (.12 + alignment * .55) * glitchScale;
      });
      effect.fieldLines.forEach((field, index) => {
        field.rotation.y += .006 + index * .001;
      });
    } else if (event.visual === 'black-hole-merger') {
      animateBlackHoleVisual(effect.holeA, now, effect.holeA.userData.spinDirection);
      animateBlackHoleVisual(effect.holeB, now, effect.holeB.userData.spinDirection);
      animateBlackHoleVisual(effect.remnantHole, now, effect.remnantHole.userData.spinDirection);
    }
  });
}
