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

export function blackHoleRecoilKms({
  massA,
  massB,
  alignedSpinA,
  alignedSpinB,
  inPlaneSpinA = 0,
  inPlaneSpinB = 0
}) {
  const primaryMass = Math.max(massA, massB);
  const secondaryMass = Math.min(massA, massB);
  const q = secondaryMass / primaryMass;
  const eta = q / (1 + q) ** 2;
  const massAsymmetryKick = 12000 * eta ** 2 * Math.sqrt(Math.max(0, 1 - 4 * eta)) * (1 - .93 * eta);
  const alignedSpinKick = 6900 * eta ** 2 / (1 + q) * (alignedSpinB - q * alignedSpinA);
  const inPlaneSpinKick = 60000 * eta ** 2 / (1 + q) * (inPlaneSpinB - q * inPlaneSpinA);
  const interferenceAngle = 145 * Math.PI / 180;
  const orbitalPlaneKickSquared = massAsymmetryKick ** 2 + alignedSpinKick ** 2
    + 2 * massAsymmetryKick * alignedSpinKick * Math.cos(interferenceAngle);
  return Math.sqrt(Math.max(0, orbitalPlaneKickSquared) + inPlaneSpinKick ** 2);
}

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

  if (event.type === 'pair-instability-supernova') {
    const progenitorMass = randomBetween(random, 140, 255);
    const heliumCoreMass = randomBetween(random, 64, Math.min(133, progenitorMass * .54));
    const explosionEnergyBethe = clamp(4 + Math.pow((heliumCoreMass - 64) / 69, 1.7) * 72, 4, 76);
    const nickelMass = clamp(.04 + Math.pow((heliumCoreMass - 64) / 69, 2.2) * 38, .04, 38);
    const radiatedMass = explosionEnergyBethe * 1e51 / 1.788e54;
    return {
      model: 'pair-instability',
      progenitorMass,
      heliumCoreMass,
      explosionEnergyBethe,
      nickelMass,
      radiatedMass,
      ejectaMass: progenitorMass - radiatedMass,
      ejectaVelocityKms: randomBetween(random, 7000, 14500) * Math.pow(explosionEnergyBethe / 20, .18),
      noRemnant: true,
      rangeScale: clamp(.82 + Math.sqrt(explosionEnergyBethe / 20) * .3, .9, 1.62),
      civilizationScale: clamp(.76 + Math.sqrt(explosionEnergyBethe / 20) * .24, .86, 1.48),
      kickScale: clamp(.8 + explosionEnergyBethe / 120, .84, 1.42)
    };
  }

  if (event.type === 'type-ia-supernova') {
    const channel = random() < .46 ? 'double-degenerate' : 'single-degenerate';
    const whiteDwarfMass = channel === 'double-degenerate'
      ? randomBetween(random, 1.22, 1.58)
      : randomBetween(random, 1.34, 1.41);
    const nickelMass = randomBetween(random, .38, .86);
    const explosionEnergyBethe = randomBetween(random, .85, 1.55) * (1 + (nickelMass - .6) * .25);
    return {
      model: 'thermonuclear-supernova',
      channel,
      whiteDwarfMass,
      nickelMass,
      explosionEnergyBethe,
      ejectaMass: whiteDwarfMass,
      ejectaVelocityKms: randomBetween(random, 9000, 14500) * Math.sqrt(explosionEnergyBethe),
      noRemnant: true,
      rangeScale: clamp(.84 + explosionEnergyBethe * .14, .92, 1.16),
      civilizationScale: clamp(.78 + nickelMass * .28, .86, 1.12),
      kickScale: clamp(.84 + explosionEnergyBethe * .1, .9, 1.08)
    };
  }

  if (event.type === 'core-collapse-supernova') {
    const progenitorMass = randomBetween(random, 8.2, 31);
    const compactness = clamp((progenitorMass - 8) / 23 + randomBetween(random, -.16, .16), 0, 1);
    const remnantType = compactness > .7 ? 'black-hole' : 'neutron-star';
    const remnantMass = remnantType === 'black-hole'
      ? randomBetween(random, 4.8, Math.min(13.5, progenitorMass * .55))
      : randomBetween(random, 1.18, 2.18);
    const explosionEnergyBethe = randomBetween(random, .45, 2.15) * (1 - compactness * .28);
    const neutrinoMassLoss = randomBetween(random, .4, Math.min(2.1, progenitorMass - remnantMass - .8));
    return {
      model: 'core-collapse',
      progenitorMass,
      explosionEnergyBethe,
      ejectaMass: progenitorMass - remnantMass - neutrinoMassLoss,
      ejectaVelocityKms: randomBetween(random, 4500, 11500) * Math.sqrt(explosionEnergyBethe),
      nickelMass: randomBetween(random, .025, .13) * explosionEnergyBethe,
      neutrinoEnergyErg: logarithmicRandom(random, 52.9, 53.5),
      neutrinoMassLoss,
      remnantType,
      remnantMass,
      natalKickKms: remnantType === 'neutron-star' ? randomBetween(random, 80, 720) : randomBetween(random, 15, 180),
      persistentRemnant: true,
      gravityStrength: clamp(remnantMass / 8, .2, 1.35),
      gravityRadius: randomBetween(random, .42, .72),
      rangeScale: clamp(.78 + Math.sqrt(explosionEnergyBethe) * .2, .86, 1.22),
      civilizationScale: clamp(.72 + explosionEnergyBethe * .17, .8, 1.16),
      kickScale: clamp(.76 + explosionEnergyBethe * .18, .82, 1.18)
    };
  }

  if (event.type === 'superluminous-supernova') {
    const engine = random() < .64 ? 'magnetar' : 'circumstellar-interaction';
    const progenitorMass = randomBetween(random, 22, 78);
    const explosionEnergyBethe = randomBetween(random, 3, 18);
    const remnantType = engine === 'magnetar' && progenitorMass < 48 ? 'magnetar' : 'black-hole';
    const remnantMass = remnantType === 'magnetar'
      ? randomBetween(random, 1.55, 2.35)
      : randomBetween(random, 5.5, 18);
    const radiatedMass = explosionEnergyBethe * 1e51 / 1.788e54;
    return {
      model: 'superluminous-supernova',
      engine,
      progenitorMass,
      explosionEnergyBethe,
      radiatedMass,
      ejectaMass: progenitorMass - remnantMass - radiatedMass,
      ejectaVelocityKms: randomBetween(random, 8000, 18500) * Math.pow(explosionEnergyBethe / 8, .18),
      peakLuminosityErgS: logarithmicRandom(random, 43.7, 45),
      magnetarPeriodMs: engine === 'magnetar' ? randomBetween(random, 1.1, 4.8) : null,
      magneticFieldGauss: engine === 'magnetar' ? logarithmicRandom(random, 13.8, 15.2) : null,
      remnantType,
      remnantMass,
      persistentRemnant: true,
      gravityStrength: clamp(remnantMass / 10, .24, 1.45),
      gravityRadius: randomBetween(random, .48, .78),
      rangeScale: clamp(.94 + Math.sqrt(explosionEnergyBethe / 8) * .34, 1.05, 1.52),
      civilizationScale: clamp(.88 + Math.log10(explosionEnergyBethe) * .24, .96, 1.38),
      kickScale: clamp(.86 + explosionEnergyBethe / 42, .92, 1.32)
    };
  }

  if (event.type === 'young-pulsar-birth') {
    const neutronStarMass = randomBetween(random, 1.18, 2.12);
    const spinPeriodMs = logarithmicRandom(random, 1.05, 2.22);
    const magneticFieldGauss = logarithmicRandom(random, 11.8, 13.55);
    const spinDownLuminosityErgS = 3.9e31
      * Math.pow(magneticFieldGauss / 1e12, 2)
      * Math.pow(1000 / spinPeriodMs, 4);
    return {
      model: 'young-pulsar',
      neutronStarMass,
      spinPeriodMs,
      magneticFieldGauss,
      spinDownLuminosityErgS,
      natalKickKms: randomBetween(random, 90, 820),
      beamOpeningDeg: randomBetween(random, 5, 18),
      persistentRemnant: true,
      gravityStrength: clamp(neutronStarMass / 3.6, .28, .62),
      gravityRadius: randomBetween(random, .34, .54),
      rangeScale: clamp(.76 + Math.log10(spinDownLuminosityErgS / 1e36 + 1) * .16, .78, 1.22),
      civilizationScale: clamp(.72 + Math.log10(spinDownLuminosityErgS / 1e36 + 1) * .18, .75, 1.18),
      kickScale: 0
    };
  }

  if (event.type === 'gamma-ray-burst') {
    const progenitorMass = randomBetween(random, 22, 72);
    const isotropicEnergyErg = logarithmicRandom(random, 51.4, 54.1);
    const jetOpeningDeg = randomBetween(random, 3.2, 11.5);
    const jetOpeningRad = jetOpeningDeg * Math.PI / 180;
    return {
      model: 'collapsar-jet',
      progenitorMass,
      isotropicEnergyErg,
      trueJetEnergyErg: isotropicEnergyErg * (1 - Math.cos(jetOpeningRad)),
      jetOpeningDeg,
      lorentzFactor: randomBetween(random, 90, 620),
      durationSeconds: logarithmicRandom(random, .35, 2.15),
      remnantMass: randomBetween(random, 3.4, 15),
      remnantType: 'black-hole',
      rangeScale: clamp(.78 + (Math.log10(isotropicEnergyErg) - 51) * .17, .86, 1.48),
      civilizationScale: clamp(.72 + (Math.log10(isotropicEnergyErg) - 51) * .2, .82, 1.5),
      kickScale: 0
    };
  }

  if (event.type === 'quasar-awakening') {
    const blackHoleMass = logarithmicRandom(random, 6.5, 9.2) * clamp(universe.massRatio, .7, 1.6);
    const eddingtonRatio = logarithmicRandom(random, -1.15, .24);
    const radiativeEfficiency = randomBetween(random, .07, .22);
    return {
      model: 'quasar-duty-cycle',
      blackHoleMass,
      eddingtonRatio,
      radiativeEfficiency,
      accretionRateSolarPerYear: 2.2 * blackHoleMass / 1e8 * eddingtonRatio * (.1 / radiativeEfficiency),
      jetLorentzFactor: randomBetween(random, 3, 18),
      jetOpeningDeg: randomBetween(random, 4, 15),
      activeDurationMyr: logarithmicRandom(random, -.2, 1.7),
      pulsePhases: [.32, .58, .76],
      pulseWeights: [1, .72, .46],
      recoveryDuration: randomBetween(random, 18, 32),
      recoveryFraction: randomBetween(random, .22, .38),
      temporaryOnly: true,
      rangeScale: clamp(.8 + Math.sqrt(eddingtonRatio) * .34, .84, 1.38),
      civilizationScale: clamp(.72 + Math.sqrt(eddingtonRatio) * .3, .78, 1.34),
      kickScale: 0
    };
  }

  if (event.type === 'magnetar-flare') {
    const magneticFieldGauss = logarithmicRandom(random, 14.2, 15.35);
    const energyErg = logarithmicRandom(random, 44.2, 46.4);
    const pulseCount = 2 + Math.floor(random() * 4);
    return {
      model: 'magnetar-giant-flare',
      magneticFieldGauss,
      energyErg,
      spikeDurationSeconds: logarithmicRandom(random, -2.7, -.55),
      tailPeriodSeconds: randomBetween(random, 2.2, 11.8),
      pulsePhases: createPulsePhases(random, pulseCount, .34, .76),
      pulseWeights: Array.from({ length: pulseCount }, (_, index) => Math.pow(.68, index)),
      recoveryDuration: randomBetween(random, 12, 28),
      recoveryFraction: randomBetween(random, .36, .62),
      temporaryOnly: true,
      rangeScale: clamp(.76 + (Math.log10(energyErg) - 44) * .18, .8, 1.34),
      civilizationScale: clamp(.68 + (Math.log10(energyErg) - 44) * .22, .72, 1.42),
      kickScale: 0
    };
  }

  if (event.type === 'pulsar-glitch') {
    const spinPeriodMs = logarithmicRandom(random, 1.3, 3);
    const fractionalFrequencyJump = logarithmicRandom(random, -9.2, -5.1);
    return {
      model: 'pulsar-glitch',
      spinPeriodMs,
      fractionalFrequencyJump,
      recoveryFraction: randomBetween(random, .08, .82),
      recoveryDays: logarithmicRandom(random, .4, 2.9),
      pulsePhases: [.46, .56],
      pulseWeights: [1, .24],
      temporaryOnly: true,
      rangeScale: 1,
      civilizationScale: 1,
      kickScale: 0
    };
  }

  if (event.type === 'stellar-black-hole-merger' || event.type === 'late-black-hole-merger') {
    const late = event.type === 'late-black-hole-merger';
    const suppliedMasses = event.blackHoleMasses
      ?.filter(Number.isFinite)
      .map((mass) => Math.max(2.5, mass))
      .sort((left, right) => right - left);
    const massA = suppliedMasses?.[0]
      ?? (late ? logarithmicRandom(random, 2.7, 5.4) : randomBetween(random, 18, 86));
    const massB = suppliedMasses?.[1]
      ?? (late
        ? logarithmicRandom(random, 2.5, Math.log10(massA))
        : randomBetween(random, 7, Math.min(70, massA)));
    const totalMass = massA + massB;
    const symmetricMassRatio = massA * massB / (totalMass * totalMass);
    const spinMagnitudeA = randomBetween(random, 0, .94);
    const spinMagnitudeB = randomBetween(random, 0, .94);
    const spinTiltCosineA = randomBetween(random, -1, 1);
    const spinTiltCosineB = randomBetween(random, -1, 1);
    const spinA = spinMagnitudeA * spinTiltCosineA;
    const spinB = spinMagnitudeB * spinTiltCosineB;
    const spinPhaseA = random() * TWO_PI;
    const spinPhaseB = random() * TWO_PI;
    const inPlaneSpinA = spinMagnitudeA * Math.sqrt(1 - spinTiltCosineA ** 2) * Math.cos(spinPhaseA);
    const inPlaneSpinB = spinMagnitudeB * Math.sqrt(1 - spinTiltCosineB ** 2) * Math.cos(spinPhaseB);
    const effectiveSpin = (massA * spinA + massB * spinB) / totalMass;
    const radiatedMassFraction = clamp(.035 + symmetricMassRatio * .11 + Math.max(0, effectiveSpin) * .018, .028, .09);
    const recoilKms = clamp(blackHoleRecoilKms({
      massA,
      massB,
      alignedSpinA: spinA,
      alignedSpinB: spinB,
      inPlaneSpinA,
      inPlaneSpinB
    }), 0, 5000);
    return {
      model: 'black-hole-binary',
      massA,
      massB,
      chirpMass: Math.pow(massA * massB, 3 / 5) / Math.pow(totalMass, 1 / 5),
      spinA,
      spinB,
      spinMagnitudeA,
      spinMagnitudeB,
      spinTiltCosineA,
      spinTiltCosineB,
      effectiveSpin,
      radiatedMassFraction,
      remnantMass: totalMass * (1 - radiatedMassFraction),
      recoilKms,
      gasRich: !late && random() < .38,
      persistentRemnant: false,
      rangeScale: 1,
      civilizationScale: 1,
      kickScale: 0
    };
  }

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

export function applyTransientImpactScales(profile, simulation, universe = null) {
  if (!simulation) return profile;
  const causalScale = Math.sqrt(universe?.speed || 1);
  const localPropagationScale = .82 + causalScale * .18;
  return {
    ...profile,
    radius: profile.radius * (simulation.rangeScale || 1) * localPropagationScale,
    maxStars: Math.max(1, Math.round(profile.maxStars * (simulation.rangeScale || 1))),
    kick: profile.kick * (simulation.kickScale ?? 1),
    civilization: profile.civilization * (simulation.civilizationScale || 1),
    range: profile.range * (simulation.rangeScale || 1) * causalScale,
    beamAngle: simulation.jetOpeningDeg || simulation.beamOpeningDeg
      ? (simulation.jetOpeningDeg || simulation.beamOpeningDeg) * Math.PI / 180
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
  if (simulation.model === 'pair-instability') {
    return `${simulation.progenitorMass.toFixed(0)} M☉ 巨星的 ${simulation.heliumCoreMass.toFixed(0)} M☉ 氦核触发成对不稳定，释放约 ${simulation.explosionEnergyBethe.toFixed(1)} Bethe，并完全解体、不留致密残骸`;
  }
  if (simulation.model === 'thermonuclear-supernova') {
    const channel = simulation.channel === 'double-degenerate' ? '双白矮星并合' : '伴星吸积';
    return `${channel}使 ${simulation.whiteDwarfMass.toFixed(2)} M☉ 白矮星热核失控，合成约 ${simulation.nickelMass.toFixed(2)} M☉ 镍-56，并完全解体`;
  }
  if (simulation.model === 'core-collapse') {
    const remnant = simulation.remnantType === 'black-hole' ? '黑洞' : '中子星';
    return `${simulation.progenitorMass.toFixed(1)} M☉ 恒星以约 ${simulation.explosionEnergyBethe.toFixed(2)} Bethe 爆发，抛出 ${simulation.ejectaMass.toFixed(1)} M☉ 物质，留下 ${simulation.remnantMass.toFixed(2)} M☉ ${remnant}`;
  }
  if (simulation.model === 'superluminous-supernova') {
    const engine = simulation.engine === 'magnetar'
      ? `${simulation.magnetarPeriodMs.toFixed(1)} ms 初始周期磁星`
      : '致密星周物质相互作用';
    return `${simulation.progenitorMass.toFixed(0)} M☉ 前身星由${engine}持续供能，峰值光度约 10^${Math.log10(simulation.peakLuminosityErgS).toFixed(1)} erg/s，留下 ${simulation.remnantMass.toFixed(1)} M☉ ${simulation.remnantType === 'black-hole' ? '黑洞' : '磁星'}`;
  }
  if (simulation.model === 'young-pulsar') {
    return `${simulation.neutronStarMass.toFixed(2)} M☉ 中子星以 ${simulation.spinPeriodMs.toFixed(1)} ms 周期自转，表面磁场约 10^${Math.log10(simulation.magneticFieldGauss).toFixed(1)} G，并以约 ${Math.round(simulation.natalKickKms)} km/s 获得诞生踢速`;
  }
  if (simulation.model === 'collapsar-jet') {
    return `${simulation.progenitorMass.toFixed(0)} M☉ 巨星坍缩为约 ${simulation.remnantMass.toFixed(1)} M☉ 黑洞，产生张角 ${simulation.jetOpeningDeg.toFixed(1)}°、洛伦兹因子约 ${Math.round(simulation.lorentzFactor)} 的喷流，持续约 ${simulation.durationSeconds.toFixed(1)} 秒`;
  }
  if (simulation.model === 'quasar-duty-cycle') {
    return `约 ${(simulation.blackHoleMass / 1e6).toFixed(1)}×10⁶ M☉ 中央黑洞达到 ${(simulation.eddingtonRatio * 100).toFixed(0)}% 爱丁顿吸积率，每年吸积约 ${simulation.accretionRateSolarPerYear.toFixed(2)} M☉，活动期约 ${simulation.activeDurationMyr.toFixed(1)} 百万年`;
  }
  if (simulation.model === 'magnetar-giant-flare') {
    return `约 10^${Math.log10(simulation.magneticFieldGauss).toFixed(1)} G 磁场重排，释放约 10^${Math.log10(simulation.energyErg).toFixed(1)} erg；初始硬脉冲持续 ${simulation.spikeDurationSeconds.toFixed(3)} 秒并伴随衰减尾波`;
  }
  if (simulation.model === 'pulsar-glitch') {
    return `${simulation.spinPeriodMs.toFixed(1)} ms 脉冲星的自转频率跃增约 ${simulation.fractionalFrequencyJump.toExponential(1)}，其中 ${(simulation.recoveryFraction * 100).toFixed(0)}% 在约 ${Math.round(simulation.recoveryDays)} 天内恢复`;
  }
  if (simulation.model === 'black-hole-binary') {
    return `${simulation.massA.toFixed(1)} 与 ${simulation.massB.toFixed(1)} M☉ 黑洞并合，约 ${(simulation.radiatedMassFraction * 100).toFixed(1)}% 总质量转化为引力波，形成 ${simulation.remnantMass.toFixed(1)} M☉ 黑洞并以约 ${Math.round(simulation.recoilKms)} km/s 反冲${simulation.gasRich ? '，周围气体产生短暂余辉' : ''}`;
  }
  return null;
}

export function transientPersistenceAt(position, event) {
  const visualImpactAt = event.visualImpactAt ?? event.impactAt;
  if (!event.simulation?.persistentRemnant || position < visualImpactAt) return 0;
  const persistenceEnd = event.persistUntil ?? 845;
  const fadeDuration = event.persistenceFadeDuration ?? 24;
  return 1 - smoothstep(position, persistenceEnd, persistenceEnd + fadeDuration);
}

export function tidalDisruptionVisualState(phase, simulation = null) {
  const normalizedPhase = clamp(phase, 0, 1);
  const onset = smoothstep(normalizedPhase, 0, .1);
  const approach = smoothstep(normalizedPhase, 0, .42);
  const disrupted = smoothstep(normalizedPhase, .3, .62);
  const accretion = smoothstep(normalizedPhase, .4, .72);
  const fallbackStart = simulation?.pulsePhases?.[0] || .58;
  const fallbackProgress = Math.max(
    0,
    (normalizedPhase - fallbackStart) / Math.max(.001, 1 - fallbackStart)
  );
  const fallbackLuminosity = smoothstep(normalizedPhase, .4, fallbackStart)
    * Math.pow(1 + fallbackProgress * 6, simulation?.fallbackExponent || -5 / 3);
  const fade = 1 - smoothstep(normalizedPhase, .9, 1);
  const centralAccretionBoost = onset * fade * (
    approach * .08
    + accretion * .12
    + fallbackLuminosity * .52
  );
  return {
    onset,
    approach,
    disrupted,
    accretion,
    fallbackLuminosity,
    fade,
    centralAccretionBoost
  };
}

export function stellarCollapseVisualState(phase) {
  const normalizedPhase = clamp(phase, 0, 1);
  const onset = smoothstep(normalizedPhase, 0, .08);
  const collapse = smoothstep(normalizedPhase, .32, .68);
  const remnantReveal = smoothstep(normalizedPhase, .52, .68);
  return {
    onset,
    collapse,
    remnantReveal,
    remnantIntensity: .58 + collapse * .34
  };
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
  const visualImpactAt = event.visualImpactAt ?? event.impactAt;
  if (!field || position < visualImpactAt) return;
  const persistence = transientPersistenceAt(position, event);
  if (persistence <= 0) return;
  const elapsed = Math.min(position, event.persistUntil ?? 845) - visualImpactAt;
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
