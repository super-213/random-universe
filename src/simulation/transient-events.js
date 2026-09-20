import { createSeededRandom, randomBetween } from '../domain/random.js';

const TWO_PI = Math.PI * 2;

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

const smoothstep = (value, min, max) => {
  if (max <= min) return value >= max ? 1 : 0;
  const progress = clamp((value - min) / (max - min), 0, 1);
  return progress * progress * (3 - 2 * progress);
};

const logarithmicRandom = (random, minimumExponent, maximumExponent) => (
  10 ** randomBetween(random, minimumExponent, maximumExponent)
);

function createPulsePhases(random, count, start, end) {
  if (count <= 1) return [start];
  return Array.from({ length: count }, (_, index) => {
    const center = start + (end - start) * index / (count - 1);
    const jitter = index === 0 ? 0 : randomBetween(random, -.025, .025);
    return clamp(center + jitter, start, end);
  });
}

export function createTransientSimulation(event, universe, eventIndex) {
  const random = createSeededRandom(universe.seed, 12011 + eventIndex * 977);
  const gravityScale = Math.sqrt(universe.gravity);

  if (event.type === 'neutron-star-kilonova') {
    const massA = randomBetween(random, 1.18, 1.92);
    const massB = randomBetween(random, 1.12, Math.min(1.82, massA));
    const totalMass = massA + massB;
    const chirpMass = Math.pow(massA * massB, 3 / 5) / Math.pow(totalMass, 1 / 5);
    const asymmetry = 1 - massB / massA;
    const radiatedMass = randomBetween(random, .035, .075) * gravityScale;
    const ejectaMass = clamp(randomBetween(random, .018, .072) * (1 + asymmetry * 2.4), .012, .13);
    const ejectaVelocityC = clamp(randomBetween(random, .12, .27) * gravityScale, .09, .34);
    const collapseThreshold = 2.72 + (universe.massRatio - 1) * .28;
    const remnantType = totalMass - radiatedMass > collapseThreshold ? 'black-hole' : 'massive-neutron-star';
    return {
      model: 'compact-merger',
      massA,
      massB,
      chirpMass,
      ejectaMass,
      ejectaVelocityC,
      radiatedMassFraction: radiatedMass / totalMass,
      jetOpeningDeg: randomBetween(random, 5, 16),
      remnantMass: totalMass - radiatedMass - ejectaMass,
      remnantType,
      persistentRemnant: true,
      gravityStrength: clamp((totalMass - 2.2) / 1.5, .32, 1.25),
      gravityRadius: randomBetween(random, .62, .9),
      rangeScale: clamp(.82 + ejectaMass * 5 + ejectaVelocityC, .82, 1.42),
      civilizationScale: clamp(.72 + ejectaVelocityC * 1.7, .78, 1.3),
      kickScale: clamp(.7 + ejectaVelocityC * 1.5, .8, 1.25)
    };
  }

  if (event.type === 'tidal-disruption-event') {
    const starMass = randomBetween(random, .35, 3.2);
    const starRadius = Math.pow(starMass, starMass < 1 ? .82 : .57);
    const hillsMass = 8e7 * Math.pow(starRadius, 1.5) / Math.sqrt(starMass);
    const blackHoleMass = Math.min(
      logarithmicRandom(random, 5.8, 8.05) * universe.gravity,
      hillsMass
    );
    const penetration = randomBetween(random, .72, 2.15);
    const tidalRadiusSolar = starRadius * Math.cbrt(blackHoleMass / starMass);
    const fallbackDays = 41 * Math.sqrt(blackHoleMass / 1e6)
      * Math.pow(starMass, -.5) * Math.pow(starRadius, 1.5) / Math.pow(penetration, 3);
    const boundFraction = randomBetween(random, .43, .57);
    const peakEddingtonRatio = clamp(randomBetween(random, .6, 3.8) * penetration, .5, 6.5);
    return {
      model: 'tidal-disruption',
      blackHoleMass,
      hillsMass,
      starMass,
      starRadius,
      penetration,
      tidalRadiusSolar,
      fallbackDays,
      boundFraction,
      peakEddingtonRatio,
      fallbackExponent: -5 / 3,
      unboundVelocityKms: randomBetween(random, 5500, 16000) * Math.sqrt(penetration),
      pulsePhases: [.58, .74],
      pulseWeights: [1, .42],
      recoveryDuration: randomBetween(random, 18, 32),
      recoveryFraction: .28,
      rangeScale: clamp(.76 + Math.log10(peakEddingtonRatio + 1) * .42, .78, 1.25),
      civilizationScale: clamp(.62 + Math.log10(peakEddingtonRatio + 1) * .5, .68, 1.18),
      kickScale: clamp(.72 + penetration * .15, .82, 1.08)
    };
  }

  if (event.type === 'failed-supernova') {
    const progenitorMass = randomBetween(random, 18, 42);
    const ejectedEnvelopeFraction = randomBetween(random, .025, .16) / gravityScale;
    const neutrinoMassLoss = randomBetween(random, .16, .46);
    const remnantMass = progenitorMass * (1 - ejectedEnvelopeFraction) - neutrinoMassLoss;
    return {
      model: 'failed-collapse',
      progenitorMass,
      ejectedEnvelopeFraction,
      neutrinoMassLoss,
      remnantMass,
      dustOpticalDepth: randomBetween(random, 1.2, 5.4),
      fallbackFraction: clamp(1 - ejectedEnvelopeFraction - neutrinoMassLoss / progenitorMass, .72, .97),
      persistentRemnant: true,
      remnantType: 'black-hole',
      gravityStrength: clamp(remnantMass / 24, .45, 1.5),
      gravityRadius: randomBetween(random, .58, .88),
      rangeScale: clamp(.76 + ejectedEnvelopeFraction * 2.1, .78, 1.08),
      civilizationScale: clamp(.6 + ejectedEnvelopeFraction * 2.4, .65, 1.02),
      kickScale: clamp(.45 + ejectedEnvelopeFraction * 2.8, .5, .88)
    };
  }

  if (event.type === 'red-dwarf-superflare') {
    const energyErg = logarithmicRandom(random, 34.4, 36.25);
    const stormCount = 2 + Math.floor(random() * 4);
    const energyScale = Math.log10(energyErg) - 34;
    return {
      model: 'magnetic-flare-storm',
      energyErg,
      stormCount,
      pulsePhases: createPulsePhases(random, stormCount, .38, .78),
      pulseWeights: Array.from({ length: stormCount }, (_, index) => Math.pow(.76, index)),
      cmeVelocityKms: randomBetween(random, 900, 4200) * gravityScale,
      ultravioletFraction: randomBetween(random, .12, .34),
      atmosphereLossFraction: clamp(randomBetween(random, .006, .045) * energyScale, .004, .14),
      recoveryDuration: randomBetween(random, 16, 34),
      recoveryFraction: randomBetween(random, .48, .72),
      temporaryOnly: true,
      rangeScale: clamp(.72 + energyScale * .13, .78, 1.22),
      civilizationScale: clamp(.55 + energyScale * .22, .62, 1.3),
      kickScale: 0
    };
  }

  if (event.type === 'classical-nova') {
    const whiteDwarfMass = randomBetween(random, .72, 1.34);
    const accretionRate = logarithmicRandom(random, -10.1, -8.15);
    const ignitionMass = 2.2e-5 * Math.pow(1.05 / whiteDwarfMass, 3.2);
    const recurrenceYears = ignitionMass / accretionRate;
    const outburstCount = clamp(Math.round(4.4 - Math.log10(recurrenceYears) * .58), 2, 4);
    return {
      model: 'recurrent-nova',
      whiteDwarfMass,
      accretionRate,
      ignitionMass,
      recurrenceYears,
      ejectaMass: ignitionMass * randomBetween(random, .62, 1.08),
      ejectaVelocityKms: randomBetween(random, 850, 3900) * Math.sqrt(whiteDwarfMass),
      outburstCount,
      pulsePhases: createPulsePhases(random, outburstCount, .14, .78),
      pulseWeights: Array.from({ length: outburstCount }, (_, index) => Math.pow(.7, index)),
      recoveryDuration: randomBetween(random, 7, 15),
      recoveryFraction: .74,
      temporaryOnly: true,
      rangeScale: clamp(.72 + whiteDwarfMass * .18, .78, 1.02),
      civilizationScale: clamp(.58 + whiteDwarfMass * .2, .68, .92),
      kickScale: 0
    };
  }

  return null;
}

export function applyTransientImpactScales(profile, simulation) {
  if (!simulation) return profile;
  return {
    ...profile,
    radius: profile.radius * (simulation.rangeScale || 1),
    maxStars: Math.max(1, Math.round(profile.maxStars * (simulation.rangeScale || 1))),
    kick: profile.kick * (simulation.kickScale ?? 1),
    civilization: profile.civilization * (simulation.civilizationScale || 1),
    range: profile.range * (simulation.rangeScale || 1),
    beamAngle: simulation.jetOpeningDeg
      ? simulation.jetOpeningDeg * Math.PI / 180
      : profile.beamAngle
  };
}

export function describeTransientSimulation(event) {
  const simulation = event.simulation;
  if (!simulation) return null;
  if (simulation.model === 'compact-merger') {
    const remnant = simulation.remnantType === 'black-hole' ? '黑洞' : '大质量中子星';
    return `两颗 ${simulation.massA.toFixed(2)} 与 ${simulation.massB.toFixed(2)} M☉ 中子星并合，抛出 ${(simulation.ejectaMass).toFixed(3)} M☉、约 ${(simulation.ejectaVelocityC * 100).toFixed(0)}% 光速的物质，留下 ${simulation.remnantMass.toFixed(2)} M☉ ${remnant}`;
  }
  if (simulation.model === 'tidal-disruption') {
    return `${simulation.starMass.toFixed(1)} M☉ 恒星以穿透因子 β=${simulation.penetration.toFixed(2)} 掠过约 ${(simulation.blackHoleMass / 1e6).toFixed(1)}×10⁶ M☉ 黑洞，束缚碎片在约 ${Math.round(simulation.fallbackDays)} 天后开始回落`;
  }
  if (simulation.model === 'failed-collapse') {
    return `${simulation.progenitorMass.toFixed(1)} M☉ 恒星仅抛出约 ${(simulation.ejectedEnvelopeFraction * 100).toFixed(1)}% 外层，回落物质形成约 ${simulation.remnantMass.toFixed(1)} M☉ 黑洞`;
  }
  if (simulation.model === 'magnetic-flare-storm') {
    return `${simulation.stormCount} 次耀斑组成约 10^${Math.log10(simulation.energyErg).toFixed(1)} erg 的爆发风暴，CME 速度约 ${Math.round(simulation.cmeVelocityKms)} km/s，近轨行星大气随后逐步恢复`;
  }
  if (simulation.model === 'recurrent-nova') {
    return `${simulation.whiteDwarfMass.toFixed(2)} M☉ 白矮星以 ${simulation.accretionRate.toExponential(1)} M☉/年吸积，模型复发周期约 ${Math.round(simulation.recurrenceYears).toLocaleString('zh-CN')} 年，本段显示 ${simulation.outburstCount} 次爆发`;
  }
  return null;
}

export function transientPersistenceAt(position, event) {
  if (!event.simulation?.persistentRemnant || position < event.impactAt) return 0;
  const persistenceEnd = event.persistUntil ?? 845;
  const fadeDuration = event.persistenceFadeDuration ?? 24;
  return 1 - smoothstep(position, persistenceEnd, persistenceEnd + fadeDuration);
}

function hashUnit(index, salt) {
  let value = (index + 1) ^ salt;
  value = Math.imul(value ^ value >>> 16, 0x21f0aaad);
  value = Math.imul(value ^ value >>> 15, 0x735a2d97);
  return ((value ^ value >>> 15) >>> 0) / 4294967296;
}

export function createTransientGravityField(positions, center, simulation, seedValue, eventIndex) {
  if (!simulation?.gravityStrength || !simulation.persistentRemnant) return null;
  const influenceRadius = simulation.gravityRadius || .7;
  const candidates = [];
  for (let index = 0; index < positions.length / 3; index++) {
    const offset = index * 3;
    const distance = Math.hypot(
      positions[offset] - center.x,
      positions[offset + 1] - center.y,
      positions[offset + 2] - center.z
    );
    if (distance <= influenceRadius) candidates.push({ index, distance });
  }
  candidates.sort((a, b) => a.distance - b.distance);
  const count = Math.min(180, candidates.length);
  const indices = new Uint16Array(count);
  const restDistances = new Float32Array(count);
  const stride = candidates.length / Math.max(1, count);
  for (let sample = 0; sample < count; sample++) {
    const candidate = candidates[Math.min(candidates.length - 1, Math.floor(sample * stride))];
    indices[sample] = candidate.index;
    restDistances[sample] = candidate.distance;
  }
  const salt = seedValue ^ Math.imul(eventIndex + 1, 0x27d4eb2d);
  const azimuth = hashUnit(eventIndex, salt) * TWO_PI;
  const tilt = (hashUnit(eventIndex + 11, salt + 37) - .5) * .56;
  const horizontal = Math.cos(tilt);
  return {
    indices,
    restDistances,
    influenceRadius,
    strength: simulation.gravityStrength,
    axis: new Float32Array([
      Math.cos(azimuth) * Math.sin(tilt),
      horizontal,
      Math.sin(azimuth) * Math.sin(tilt)
    ])
  };
}

export function applyTransientGravity(position, targetPositions, event, center) {
  const field = event.transientGravityField;
  if (!field || position < event.impactAt) return;
  const persistence = transientPersistenceAt(position, event);
  if (persistence <= 0) return;
  const elapsed = Math.min(position, event.persistUntil ?? 845) - event.impactAt;
  const axisX = field.axis[0];
  const axisY = field.axis[1];
  const axisZ = field.axis[2];
  for (let sample = 0; sample < field.indices.length; sample++) {
    const index = field.indices[sample];
    if (index === event.sourceIndex) continue;
    const offset = index * 3;
    const x = targetPositions[offset] - center.x;
    const y = targetPositions[offset + 1] - center.y;
    const z = targetPositions[offset + 2] - center.z;
    const restDistance = Math.max(.08, field.restDistances[sample]);
    const influence = 1 - smoothstep(restDistance, field.influenceRadius * .35, field.influenceRadius);
    if (influence <= 0) continue;
    const angle = elapsed * .018 * Math.sqrt(field.strength / Math.pow(restDistance + .18, 3)) * influence;
    const cosine = Math.cos(angle);
    const sine = Math.sin(angle);
    const dot = axisX * x + axisY * y + axisZ * z;
    const rotatedX = x * cosine + (axisY * z - axisZ * y) * sine + axisX * dot * (1 - cosine);
    const rotatedY = y * cosine + (axisZ * x - axisX * z) * sine + axisY * dot * (1 - cosine);
    const rotatedZ = z * cosine + (axisX * y - axisY * x) * sine + axisZ * dot * (1 - cosine);
    targetPositions[offset] = center.x + x + (rotatedX - x) * persistence;
    targetPositions[offset + 1] = center.y + y + (rotatedY - y) * persistence;
    targetPositions[offset + 2] = center.z + z + (rotatedZ - z) * persistence;
  }
}
