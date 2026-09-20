import * as THREE from 'three';
import { galaxyTypes } from './catalog.js';
import { createCosmicFate } from './cosmic-fate.js';
import { cosmicYearsToTimelinePosition } from './cosmic-time.js';
import { createSeededRandom, generateSeedCode, normalizeSeedCode, randomBetween, seedToUint32 } from './random.js';

const REFERENCE_AGE_YEARS = 1.38e10;
const REFERENCE_CMB_TEMPERATURE = 2.725;
const REFERENCE_MATTER_DENSITY = .315;

export function estimatePresentAgeYears(expansionRate, darkEnergyDensity) {
  const omegaMatter = Math.max(.06, 1 - darkEnergyDensity);
  const omegaLambda = Math.max(1e-6, darkEnergyDensity);
  const dimensionlessAge = 2 / (3 * Math.sqrt(omegaLambda))
    * Math.asinh(Math.sqrt(omegaLambda / omegaMatter));
  const referenceDimensionlessAge = 2 / (3 * Math.sqrt(1 - REFERENCE_MATTER_DENSITY))
    * Math.asinh(Math.sqrt((1 - REFERENCE_MATTER_DENSITY) / REFERENCE_MATTER_DENSITY));
  return REFERENCE_AGE_YEARS * dimensionlessAge / referenceDimensionlessAge / expansionRate;
}

export function deriveCosmicMilestones({
  speed,
  fineStructure,
  massRatio,
  expansionRate,
  darkEnergyDensity,
  primordialFluctuation,
  cmbTemperature,
  structureEfficiency
}) {
  const omegaMatter = Math.max(.06, 1 - darkEnergyDensity);
  const atomicBindingScale = fineStructure ** 2 * speed ** 2 / massRatio;
  const recombinationYears = THREE.MathUtils.clamp(
    380000
      * Math.pow(cmbTemperature / REFERENCE_CMB_TEMPERATURE / atomicBindingScale, 1.5)
      / expansionRate
      * Math.sqrt(REFERENCE_MATTER_DENSITY / omegaMatter),
    40000,
    4e6
  );
  const firstStarsYears = THREE.MathUtils.clamp(
    1.8e8
      / Math.pow(structureEfficiency, .7)
      / Math.pow(primordialFluctuation, .35)
      / Math.sqrt(expansionRate),
    3e7,
    9e8
  );
  const matureGalaxiesYears = THREE.MathUtils.clamp(firstStarsYears * 5.4, firstStarsYears * 1.8, 3.2e9);
  return {
    atomicBindingScale,
    recombinationYears,
    firstStarsYears,
    matureGalaxiesYears,
    presentAgeYears: estimatePresentAgeYears(expansionRate, darkEnergyDensity)
  };
}

export function formatGalaxyHue(hue) {
  const degrees = Math.round(hue * 360);
  const name = degrees < 190 ? '青白' : degrees < 225 ? '蓝白' : degrees < 250 ? '靛蓝' : '紫白';
  return `${name} · ${degrees}°`;
}

export function formatArmStructure(type, count) {
  if (type === 2) return '主环 + 碎环';
  if (type === 3) return '无旋臂';
  if (type === 4) return '不规则';
  return `${count} 条`;
}

export function formatProbability(value) {
  const percent = value * 100;
  if (percent < 0.0001) return '< 0.0001%';
  if (percent < 0.01) return `${percent.toFixed(4)}%`;
  if (percent < 1) return `${percent.toFixed(2)}%`;
  return `${percent.toFixed(1)}%`;
}

export function formatCivilizations(value) {
  return value === 0 ? '尚未出现' : `${new Intl.NumberFormat('zh-CN').format(value)} 个`;
}

export function stellarEndTimelinePosition(universe) {
  const exponent = universe.lastStarDeathExponent ?? universe.stellarFormationEndExponent;
  return THREE.MathUtils.clamp(cosmicYearsToTimelinePosition(10 ** exponent, universe), 478, 1000);
}

export function formatStars(value) {
  return value >= 1 ? `${value.toFixed(1)} 万亿颗` : `${Math.round(value * 10000)} 亿颗`;
}

export function createUniverse(seed = generateSeedCode()) {
  const seedCode = normalizeSeedCode(seed);
  const seedValue = seedToUint32(seedCode);
  const random = createSeededRandom(seedCode);
  const speed = randomBetween(random, 0.38, 1.84);
  const gravity = randomBetween(random, 0.52, 1.76);
  const fineStructure = randomBetween(random, 0.72, 1.28);
  const massRatio = randomBetween(random, 0.82, 1.18);
  const expansionRate = randomBetween(random, 0.65, 1.45);
  const darkEnergyDensity = randomBetween(random, 0.48, 0.82);
  const primordialFluctuation = randomBetween(random, 0.55, 1.75);
  const cmbTemperature = randomBetween(random, 1.9, 4.4);
  // Alternative constants are a hypothesis layer, not a solved theory. Keep
  // their downstream values correlated so they are not independent decoration.
  const chemistryStability = Math.exp(-Math.pow((fineStructure - 1) / .17, 2) - Math.pow((massRatio - 1) / .14, 2));
  const structureEfficiency = THREE.MathUtils.clamp(gravity * primordialFluctuation / Math.pow(expansionRate, .72), .12, 2.8);
  const elements = Math.max(2, Math.round(118 * chemistryStability * randomBetween(random, .82, 1.08)));
  const stars = THREE.MathUtils.clamp(randomBetween(random, .35, 3.2) * structureEfficiency, .08, 7.2);
  const stellarFormationEndExponent = THREE.MathUtils.clamp(12.5 - (darkEnergyDensity - .68) * 1.35 - (expansionRate - 1) * .42, 11.8, 13.25);
  const lastStarDeathExponent = THREE.MathUtils.clamp(stellarFormationEndExponent + randomBetween(random, .68, 1.08), 12.8, 14.25);
  const habitability = chemistryStability * THREE.MathUtils.clamp(1 - Math.abs(cmbTemperature - 2.725) / 3.5, .12, 1);
  const lifeProbability = Math.pow(random(), 4) * .08 * habitability;
  const speciesCount = Math.floor(randomBetween(random, 5, 16));
  const estimatedCivilizations = Math.floor(stars * 1e5 * lifeProbability * randomBetween(random, 0.02, 0.7));
  const civilizations = Math.max(speciesCount, estimatedCivilizations);
  const lifetime = Math.round(Math.pow(10, lastStarDeathExponent - 8) / 10) * 10;
  const armCount = Math.floor(randomBetween(random, 3, 7));
  const galaxyType = seedValue % galaxyTypes.length;
  const blackHoleProbability = [.96, .92, .72, .99, .34][galaxyType];
  const hasCentralBlackHole = random() < blackHoleProbability;
  const activeNucleus = hasCentralBlackHole && random() < [.1, .07, .05, .045, .025][galaxyType];
  const blackHoleEvaporationExponent = Math.floor(randomBetween(random, 97, 103));
  const hue = randomBetween(random, 0.48, 0.76);
  const cosmicMilestones = deriveCosmicMilestones({
    speed,
    fineStructure,
    massRatio,
    expansionRate,
    darkEnergyDensity,
    primordialFluctuation,
    cmbTemperature,
    structureEfficiency
  });
  const cosmicFate = createCosmicFate(seedCode, {
    expansionRate,
    darkEnergyDensity,
    presentAgeYears: cosmicMilestones.presentAgeYears
  });
  return {
    seed: seedCode, seedValue, speed, gravity, fineStructure, massRatio, expansionRate, darkEnergyDensity,
    primordialFluctuation, cmbTemperature, chemistryStability, structureEfficiency,
    stellarFormationEndExponent, lastStarDeathExponent, elements, stars, lifeProbability,
    civilizations, estimatedCivilizations, speciesCount, trackedSpeciesCount: speciesCount,
    lifetime, blackHoleEvaporationExponent, armCount, galaxyType,
    hasCentralBlackHole, activeNucleus, hue, cosmicMilestones,
    presentAgeYears: cosmicMilestones.presentAgeYears, cosmicFate
  };
}
