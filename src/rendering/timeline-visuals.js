import * as THREE from 'three';
import { stellarEndTimelinePosition } from '../domain/universe.js';
import { orbitalAngleAt } from '../domain/orbital-motion.js';
import { animateBlackHoleVisual, setBlackHoleIntensity } from './black-hole.js';

export function updateEpochVisuals(position, context) {
  const {
    mode, epochEffectsGroup, primordialParticles, primordialFactors, primordialDirections,
    expansionStreaks, expansionDirections, bangCore, shockwaves, renderer, scene,
    clickableStars, originalGalaxyPositions, universe, transition, galaxyGroup,
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
    const radius = .06 + Math.pow(rapidExpansion, .62) * 32 + plasmaExpansion * 7;
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
      const head = (.04 + Math.pow(rapidExpansion, .5) * 31 + plasmaExpansion * 5) * factor;
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
  const formation = THREE.MathUtils.smoothstep(position, 220, 340);
  const stellarPopulation = 1 - THREE.MathUtils.smoothstep(position, stellarEnd - 75, stellarEnd + 10);
  clickableStars.material.opacity = formation * .9;
  clickableStars.material.size = .09;
  if (!transition) galaxyGroup.scale.setScalar(1);

  const positionArray = clickableStars.geometry.attributes.position.array;
  const colorArray = clickableStars.geometry.attributes.color.array;
  for (let i = 0; i < originalGalaxyPositions.length; i += 3) {
    const starIndex = i / 3;
    const alive = 1 - THREE.MathUtils.smoothstep(position, starDeathThresholds[starIndex], starDeathThresholds[starIndex] + 22);
    positionArray[i] = originalGalaxyPositions[i];
    positionArray[i + 1] = originalGalaxyPositions[i + 1];
    positionArray[i + 2] = originalGalaxyPositions[i + 2];
    colorArray[i] = originalGalaxyColors[i] * alive;
    colorArray[i + 1] = originalGalaxyColors[i + 1] * alive;
    colorArray[i + 2] = originalGalaxyColors[i + 2] * alive;
  }
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
    const activePhase = formation * (1 - THREE.MathUtils.smoothstep(position, 500, 650));
    agnGlow.material.opacity = activePhase * .82;
    agnGlow.scale.set(.72, .72, 1);
    agnJet.material.opacity = activePhase * .18;
  }

  const allowsDeepFuture = !finiteOutcome || fate.outcomeExponent > 38;
  const remnantsVisible = allowsDeepFuture && position > stellarEnd - 80 && position < 930;
  const blackHolesVisible = allowsDeepFuture && position > 825 && position < 960;
  remnantGroup.visible = (remnantsVisible || blackHolesVisible) && mode === 'explorer';
  if (remnantsVisible && stellarRemnants) {
    const remnantBirth = THREE.MathUtils.smoothstep(position, stellarEnd - 80, stellarEnd + 15);
    const remnantFade = 1 - THREE.MathUtils.smoothstep(position, 845, 930);
    stellarRemnants.material.opacity = remnantBirth * remnantFade * .64 * (1 - fatePhase);
    const remnantArray = stellarRemnants.geometry.attributes.position.array;
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
      const fate = remnantDynamics.fates[index];
      const transitionAt = remnantDynamics.escapeAt[index];
      if (position < transitionAt || fate === 1) {
        writeOrbit(index, position);
        continue;
      }

      if (fate === 2) {
        const infall = THREE.MathUtils.smoothstep(position, transitionAt, Math.min(900, transitionAt + 42));
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
      const progress = THREE.MathUtils.clamp((position - transitionAt) / Math.max(1, 900 - transitionAt), 0, 1);
      const distance = fate === 3
        ? Math.pow(progress, .72) * (18 + remnantDynamics.speeds[index] * 7)
        : Math.pow(progress, 1.35) * (6 + remnantDynamics.speeds[index] * 11);
      remnantArray[offset] = startX + directionX * distance;
      remnantArray[offset + 1] = startY + directionY * distance;
      remnantArray[offset + 2] = startZ + directionZ * distance;
    }
    stellarRemnants.geometry.attributes.position.needsUpdate = true;
  }

  blackHoleRemnants.forEach((hole) => {
    const data = hole.userData;
    const born = THREE.MathUtils.smoothstep(position, data.birthAt, data.birthAt + 7);
    const remaining = 1 - THREE.MathUtils.smoothstep(position, data.evaporationAt - 24, data.evaporationAt);
    const lateEvaporation = THREE.MathUtils.smoothstep(position, data.evaporationAt - 15, data.evaporationAt);
    const pulseWindow = 7.5;
    const pulseDistance = Math.abs(position - data.evaporationAt);
    const pulse = pulseDistance < pulseWindow ? Math.sin((1 - pulseDistance / pulseWindow) * Math.PI / 2) : 0;
    hole.visible = allowsDeepFuture && mode === 'explorer' && position >= data.birthAt && position <= data.evaporationAt + pulseWindow;
    const massScale = data.baseScale * (.18 + .82 * Math.cbrt(Math.max(0, remaining)));
    hole.scale.setScalar(Math.max(.035, massScale));
    const accretionIntensity = born * (.78 + lateEvaporation * .22) * Math.sqrt(Math.max(0, remaining));
    setBlackHoleIntensity(hole, accretionIntensity);
    data.hawkingGlow.material.opacity = born * (.07 + lateEvaporation * .62) * Math.sqrt(Math.max(0, remaining));
    data.finalPulse.material.opacity = pulse * .84;
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
  const { mode, cosmicEvents, cosmicEventGroup } = context;
  let activeCosmicEvent = null;
  let anyVisible = false;
  cosmicEvents.forEach((event) => {
    const phase = (position - event.start) / event.duration;
    const visible = phase >= 0 && phase <= 1 && mode === 'explorer';
    event.group.visible = visible;
    if (!visible) return;
    anyVisible = true;
    activeCosmicEvent = event;
    event.group.userData.phase = phase;
    const effect = event.group.userData.effect;

    if (event.visual === 'supernova') {
      const ignition = THREE.MathUtils.smoothstep(phase, 0, .028);
      const flash = ignition * (1 - THREE.MathUtils.smoothstep(phase, .045, .19));
      const afterglow = (1 - THREE.MathUtils.smoothstep(phase, .12, 1)) * ignition;
      effect.innerFlash.material.opacity = flash * .98;
      const flashScale = .08 + Math.pow(Math.min(1, phase / .16), .28) * .72;
      effect.innerFlash.scale.set(flashScale, flashScale, 1);
      effect.photosphere.material.opacity = flash * .58 + afterglow * .2;
      const photosphereScale = .16 + Math.pow(phase, .56) * 1.15;
      effect.photosphere.scale.set(photosphereScale, photosphereScale * .9, 1);
      effect.remnant.material.opacity = THREE.MathUtils.smoothstep(phase, .2, .52) * (1 - THREE.MathUtils.smoothstep(phase, .82, 1)) * .72;

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
      const shellRadius = .12 + (1 - Math.pow(1 - phase, 2.4)) * 2.25;
      for (let i = 0; i < effect.shellNoise.length; i++) {
        const offset = i * 3;
        const uneven = 1 + Math.sin(effect.shellNoise[i] + phase * 4.5) * .055 + Math.sin(i * 2.1) * .025;
        shellArray[offset] = effect.shellDirections[offset] * shellRadius * uneven;
        shellArray[offset + 1] = effect.shellDirections[offset + 1] * shellRadius * uneven;
        shellArray[offset + 2] = effect.shellDirections[offset + 2] * shellRadius * uneven;
      }
      effect.shell.geometry.attributes.position.needsUpdate = true;
      effect.shell.material.opacity = THREE.MathUtils.smoothstep(phase, .04, .14) * (1 - THREE.MathUtils.smoothstep(phase, .5, 1)) * .34;
    } else if (event.visual === 'pulsar') {
      const envelope = Math.pow(Math.sin(phase * Math.PI), .45);
      const glitchScale = event.type === 'pulsar-glitch' ? .22 : 1;
      effect.core.material.opacity = envelope * .92;
      effect.halo.material.opacity = envelope * .16 * glitchScale;
      effect.nebula.material.opacity = envelope * .095 * glitchScale;
      effect.halo.scale.set(1.05, 1.05, 1);
      effect.jets.material.opacity = envelope * .18 * glitchScale;
      effect.fieldLines.forEach((field, fieldIndex) => {
        field.material.opacity = envelope * (.055 - fieldIndex * .007) * glitchScale;
      });
      event.group.userData.intensity = envelope;
    } else {
      const mergePoint = .68;
      const merged = phase >= mergePoint;
      effect.holeA.visible = !merged;
      effect.holeB.visible = !merged;
      effect.remnantHole.visible = merged;
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
      const mergerFlash = merged ? Math.exp(-postMerge * 18) : 0;
      // Vacuum black-hole mergers are not expected to produce a bright
      // electromagnetic flash; retain only a faint locator for legibility.
      effect.mergerGlow.material.opacity = mergerFlash * .045;
      const glowScale = .3 + postMerge * 2.4;
      effect.mergerGlow.scale.set(glowScale, glowScale, 1);
      effect.wavefronts.forEach((wave, waveIndex) => {
        const delay = waveIndex * .11;
        const local = THREE.MathUtils.clamp((postMerge - delay) / (1 - delay), 0, 1);
        wave.visible = merged && local > 0;
        wave.scale.setScalar(.3 + Math.pow(local, .62) * (3.2 + waveIndex * .7));
        wave.material.opacity = Math.sin(local * Math.PI) * .075 * (1 - waveIndex * .16);
      });
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
    if (event.visual === 'supernova') {
      effect.innerFlash.material.rotation = now * .00007;
      effect.photosphere.material.rotation = -now * .000035;
      effect.ejecta.rotation.y = Math.sin(now * .00021) * .035;
    } else if (event.visual === 'pulsar') {
      effect.rotor.rotation.y = now * .0024;
      const worldQuaternion = new THREE.Quaternion();
      const worldPosition = new THREE.Vector3();
      const beamAxis = new THREE.Vector3(0, 1, 0);
      effect.rotor.getWorldQuaternion(worldQuaternion);
      event.group.getWorldPosition(worldPosition);
      beamAxis.applyQuaternion(worldQuaternion).normalize();
      const viewDirection = camera.position.clone().sub(worldPosition).normalize();
      const alignment = Math.pow(Math.abs(beamAxis.dot(viewDirection)), 14);
      const pulse = .52 + Math.pow(Math.max(0, Math.sin(now * .012)), 10) * .48;
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
    } else {
      animateBlackHoleVisual(effect.holeA, now, effect.holeA.userData.spinDirection);
      animateBlackHoleVisual(effect.holeB, now, effect.holeB.userData.spinDirection);
      animateBlackHoleVisual(effect.remnantHole, now, effect.remnantHole.userData.spinDirection);
    }
  });
}
