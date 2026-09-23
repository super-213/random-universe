import { cosmicYearsToTimelinePosition } from './cosmic-time.js';
import { createSeededRandom } from './random.js';

const clamp = (value, minimum, maximum) => Math.min(maximum, Math.max(minimum, value));

function smoothstep(value, minimum, maximum) {
  const progress = clamp((value - minimum) / (maximum - minimum), 0, 1);
  return progress * progress * (3 - 2 * progress);
}

export function galacticNuclearRisk(radius, activeNucleus = false) {
  const distance = Math.max(0, Number.isFinite(radius) ? radius : 0);
  const coreRadius = activeNucleus ? .8 : .18;
  const influenceRadius = activeNucleus ? 4.2 : 1.8;
  const peakRisk = activeNucleus ? 1 : .985;
  return peakRisk * (1 - smoothstep(distance, coreRadius, influenceRadius));
}

function samplePowerLaw(random, minimum, maximum, alpha) {
  const exponent = 1 - alpha;
  const lower = minimum ** exponent;
  const upper = maximum ** exponent;
  return (lower + random() * (upper - lower)) ** (1 / exponent);
}

export function sampleStellarMass(random) {
  return random() < .73
    ? samplePowerLaw(random, .08, .5, 1.3)
    : samplePowerLaw(random, .5, 60, 2.3);
}

export function sampleStellarBirthYears(random, universe) {
  const firstStarsYears = universe.cosmicMilestones.firstStarsYears;
  const matureGalaxiesYears = universe.cosmicMilestones.matureGalaxiesYears;
  const formationEndYears = Math.min(
    10 ** universe.stellarFormationEndExponent,
    Number.isFinite(universe.cosmicFate?.outcomeYears)
      ? universe.cosmicFate.outcomeYears * (1 - 1e-9)
      : Infinity
  );
  const earlyPopulation = random() < .12;
  if (earlyPopulation) {
    return 10 ** (
      Math.log10(firstStarsYears)
        + (Math.log10(matureGalaxiesYears) - Math.log10(firstStarsYears)) * random()
    );
  }
  const progress = random() ** 2.7;
  return 10 ** (
    Math.log10(matureGalaxiesYears)
      + (Math.log10(formationEndYears) - Math.log10(matureGalaxiesYears)) * progress
  );
}

export function stellarLifetimeYears(massSolar, universe, bornYears = 0) {
  const exponent = massSolar < .5 ? 3 : massSolar < 2 ? 2.7 : 2.5;
  const lifetime = 1e10 * massSolar ** -exponent;
  const remainingStellarEra = Math.max(
    1,
    10 ** universe.lastStarDeathExponent - Math.max(0, bornYears)
  );
  return clamp(lifetime, Math.min(3e6, remainingStellarEra), remainingStellarEra);
}

function stellarLuminosity(massSolar) {
  if (massSolar < .43) return .23 * massSolar ** 2.3;
  if (massSolar < 2) return massSolar ** 4;
  if (massSolar < 20) return 1.5 * massSolar ** 3.5;
  return 3200 * massSolar;
}

function stellarRadius(massSolar) {
  if (massSolar < 1) return massSolar ** .8;
  if (massSolar < 10) return massSolar ** .57;
  return massSolar ** .72;
}

export function stellarTemperatureK(massSolar) {
  const temperature = 5772 * (
    stellarLuminosity(massSolar) / stellarRadius(massSolar) ** 2
  ) ** .25;
  return Math.round(clamp(temperature, 2300, 42000));
}

export function stellarSpectralType(temperatureK) {
  const bands = [
    ['O', 30000, 50000],
    ['B', 10000, 30000],
    ['A', 7500, 10000],
    ['F', 6000, 7500],
    ['G', 5200, 6000],
    ['K', 3700, 5200],
    ['M', 2300, 3700]
  ];
  const [letter, minimum, maximum] = bands.find(([, min]) => temperatureK >= min) || bands.at(-1);
  const subclass = Math.round(clamp((maximum - temperatureK) / (maximum - minimum) * 9, 0, 9));
  return `${letter}${subclass} V`;
}

function blackbodyRgb(temperatureK) {
  const temperature = clamp(temperatureK, 1000, 40000) / 100;
  let red;
  let green;
  let blue;
  if (temperature <= 66) {
    red = 255;
    green = 99.4708025861 * Math.log(temperature) - 161.1195681661;
    blue = temperature <= 19
      ? 0
      : 138.5177312231 * Math.log(temperature - 10) - 305.0447927307;
  } else {
    red = 329.698727446 * (temperature - 60) ** -.1332047592;
    green = 288.1221695283 * (temperature - 60) ** -.0755148492;
    blue = 255;
  }
  return [red, green, blue].map((channel) => clamp(channel / 255, 0, 1));
}

function planetCountFor(random, massSolar, metallicity, chemistryStability) {
  const massSuitability = Math.exp(-(((Math.log10(massSolar) - Math.log10(.9)) / .72) ** 2));
  const formationChance = clamp(
    .08 + metallicity * .58 + chemistryStability * .22,
    .04,
    .9
  ) * (.42 + massSuitability * .58);
  let count = 0;
  for (let slot = 0; slot < 12; slot++) {
    if (random() < formationChance * Math.exp(-slot / 5.2)) count++;
  }
  return count;
}

export function createStellarPopulation(universe, positions, {
  namespace = 2101,
  birthAt: suppliedBirthAt = null,
  birthYears: suppliedBirthYears = null
} = {}) {
  const random = createSeededRandom(universe.seed, namespace);
  const count = positions.length / 3;
  const birthAt = new Float32Array(count);
  const birthYears = new Float64Array(count);
  const deathAt = new Float32Array(count);
  const deathYears = new Float64Array(count);
  const massSolar = new Float32Array(count);
  const temperatureK = new Uint32Array(count);
  const metallicity = new Float32Array(count);
  const planetCounts = new Uint8Array(count);
  const habitability = new Float32Array(count);
  const nuclearRisk = new Float32Array(count);
  const lifeSignals = new Uint8Array(count);
  const remnantTypes = new Uint8Array(count);
  const colors = new Float32Array(count * 3);
  const firstStarsYears = universe.cosmicMilestones.firstStarsYears;
  const presentAgeYears = universe.presentAgeYears;

  for (let index = 0; index < count; index++) {
    const bornYears = suppliedBirthYears?.[index]
      || sampleStellarBirthYears(random, universe);
    const mass = sampleStellarMass(random);
    const lifetime = stellarLifetimeYears(mass, universe, bornYears);
    const diedYears = bornYears + lifetime;
    const temperature = stellarTemperatureK(mass);
    const enrichment = clamp(
      (Math.log10(bornYears) - Math.log10(firstStarsYears))
        / Math.max(.01, Math.log10(presentAgeYears) - Math.log10(firstStarsYears)),
      0,
      1.35
    );
    const radius = Math.hypot(
      positions[index * 3],
      positions[index * 3 + 1],
      positions[index * 3 + 2]
    );
    const localMetallicity = clamp(
      enrichment * (1.08 - Math.min(.34, radius / 48)) * (.82 + random() * .32),
      0,
      1.4
    );
    const planets = planetCountFor(random, mass, localMetallicity, universe.chemistryStability);
    const ageWindow = clamp(lifetime / 5e9, 0, 1);
    const massWindow = Math.exp(-(((Math.log10(mass) - Math.log10(.86)) / .42) ** 2));
    const localNuclearRisk = galacticNuclearRisk(radius, universe.activeNucleus);
    const habitable = clamp(
      massWindow * ageWindow * localMetallicity * universe.chemistryStability
        * (planets > 0 ? 1 : 0) * (1 - localNuclearRisk),
      0,
      1
    );
    const [red, green, blue] = blackbodyRgb(temperature);
    const brightness = clamp(.42 + Math.log10(1 + stellarLuminosity(mass)) * .22, .42, 1.42);

    birthYears[index] = bornYears;
    birthAt[index] = suppliedBirthAt?.[index]
      ?? cosmicYearsToTimelinePosition(bornYears, universe);
    deathYears[index] = diedYears;
    deathAt[index] = cosmicYearsToTimelinePosition(diedYears, universe);
    massSolar[index] = mass;
    temperatureK[index] = temperature;
    metallicity[index] = localMetallicity;
    planetCounts[index] = planets;
    habitability[index] = habitable;
    nuclearRisk[index] = localNuclearRisk;
    lifeSignals[index] = random() < universe.lifeProbability * habitable ? 1 : 0;
    remnantTypes[index] = mass < 8 ? 1 : mass < 25 ? 2 : 3;
    colors[index * 3] = red * brightness;
    colors[index * 3 + 1] = green * brightness;
    colors[index * 3 + 2] = blue * brightness;
  }

  return {
    birthAt,
    birthYears,
    deathAt,
    deathYears,
    massSolar,
    temperatureK,
    metallicity,
    planetCounts,
    habitability,
    nuclearRisk,
    lifeSignals,
    remnantTypes,
    colors
  };
}
