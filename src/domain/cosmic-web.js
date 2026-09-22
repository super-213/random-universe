import { cosmicYearsToTimelinePosition } from './cosmic-time.js';
import { createSeededRandom, gaussianRandom, randomBetween } from './random.js';

const DEFAULT_GALAXY_COUNT = 12000;
const DEFAULT_CLUSTER_COUNT = 32;
const UNIVERSE_RADIUS = 46.5;

function sampleSphere(random, radius = 1) {
  const azimuth = random() * Math.PI * 2;
  const vertical = randomBetween(random, -1, 1);
  const horizontal = Math.sqrt(1 - vertical * vertical);
  const distance = Math.cbrt(random()) * radius;
  return [
    Math.cos(azimuth) * horizontal * distance,
    vertical * distance,
    Math.sin(azimuth) * horizontal * distance
  ];
}

function distanceSquared(left, right) {
  return (left[0] - right[0]) ** 2
    + (left[1] - right[1]) ** 2
    + (left[2] - right[2]) ** 2;
}

function createClusters(random, count) {
  const clusters = [{ position: [0, 0, 0], mass: 1.2 }];
  while (clusters.length < count) {
    const position = sampleSphere(random, UNIVERSE_RADIUS * .82);
    if (clusters.every((cluster) => distanceSquared(cluster.position, position) > 18)) {
      clusters.push({
        position,
        mass: randomBetween(random, .58, 1.52)
      });
    }
  }
  return clusters;
}

function createFilaments(clusters) {
  const keys = new Set();
  const filaments = [];
  clusters.forEach((cluster, clusterIndex) => {
    const nearest = clusters
      .map((candidate, candidateIndex) => ({
        candidateIndex,
        distance: candidateIndex === clusterIndex
          ? Infinity
          : distanceSquared(cluster.position, candidate.position)
      }))
      .sort((left, right) => left.distance - right.distance)
      .slice(0, clusterIndex === 0 ? 4 : 2);
    nearest.forEach(({ candidateIndex }) => {
      const startIndex = Math.min(clusterIndex, candidateIndex);
      const endIndex = Math.max(clusterIndex, candidateIndex);
      const key = `${startIndex}:${endIndex}`;
      if (keys.has(key)) return;
      keys.add(key);
      filaments.push({ startIndex, endIndex });
    });
  });
  return filaments;
}

function perpendicularBasis(direction) {
  const reference = Math.abs(direction[1]) < .82 ? [0, 1, 0] : [1, 0, 0];
  let first = [
    direction[1] * reference[2] - direction[2] * reference[1],
    direction[2] * reference[0] - direction[0] * reference[2],
    direction[0] * reference[1] - direction[1] * reference[0]
  ];
  const firstLength = Math.hypot(...first) || 1;
  first = first.map((value) => value / firstLength);
  const second = [
    direction[1] * first[2] - direction[2] * first[1],
    direction[2] * first[0] - direction[0] * first[2],
    direction[0] * first[1] - direction[1] * first[0]
  ];
  return [first, second];
}

function sampleFilamentGalaxy(random, clusters, filament) {
  const start = clusters[filament.startIndex].position;
  const end = clusters[filament.endIndex].position;
  const delta = end.map((value, axis) => value - start[axis]);
  const length = Math.hypot(...delta) || 1;
  const direction = delta.map((value) => value / length);
  const [normal, binormal] = perpendicularBasis(direction);
  const progress = (random() + random()) / 2;
  const concentration = Math.sin(progress * Math.PI);
  const width = randomBetween(random, .22, 1.18) * (.72 + concentration * .48);
  const normalOffset = gaussianRandom(random) * width;
  const binormalOffset = gaussianRandom(random) * width;
  const bow = Math.sin(progress * Math.PI) * gaussianRandom(random) * length * .035;
  return start.map((value, axis) => (
    value + delta[axis] * progress
      + normal[axis] * (normalOffset + bow)
      + binormal[axis] * binormalOffset
  ));
}

function sampleClusterGalaxy(random, clusters) {
  const cluster = clusters[Math.floor(random() * clusters.length)];
  const spread = randomBetween(random, .7, 2.8) / cluster.mass;
  return cluster.position.map((value) => value + gaussianRandom(random) * spread);
}

function clampToObservableRadius(position) {
  const length = Math.hypot(...position);
  if (length <= UNIVERSE_RADIUS) return position;
  const scale = UNIVERSE_RADIUS / length;
  return position.map((value) => value * scale);
}

export function createCosmicWebModel(universe, {
  galaxyCount = DEFAULT_GALAXY_COUNT,
  clusterCount = DEFAULT_CLUSTER_COUNT
} = {}) {
  const random = createSeededRandom(universe.seed, 12821);
  const clusters = createClusters(random, clusterCount);
  const filaments = createFilaments(clusters);
  const positions = new Float32Array(galaxyCount * 3);
  const formationAt = new Float32Array(galaxyCount);
  const luminosity = new Float32Array(galaxyCount);
  const colorMix = new Float32Array(galaxyCount);
  const firstStarsYears = universe.cosmicMilestones.firstStarsYears;
  const matureGalaxiesYears = universe.cosmicMilestones.matureGalaxiesYears;

  for (let index = 0; index < galaxyCount; index++) {
    const structureRoll = random();
    let position;
    let densityBoost;
    if (structureRoll < .76) {
      const filament = filaments[Math.floor(random() * filaments.length)];
      position = sampleFilamentGalaxy(random, clusters, filament);
      densityBoost = .72;
    } else if (structureRoll < .95) {
      position = sampleClusterGalaxy(random, clusters);
      densityBoost = 1;
    } else {
      position = sampleSphere(random, UNIVERSE_RADIUS);
      densityBoost = .34;
    }
    position = clampToObservableRadius(position);
    positions.set(position, index * 3);

    const assemblyYears = firstStarsYears + (
      matureGalaxiesYears * randomBetween(random, .56, 1.62)
        / Math.max(.2, universe.structureEfficiency)
    );
    formationAt[index] = cosmicYearsToTimelinePosition(assemblyYears, universe);
    luminosity[index] = randomBetween(random, .42, 1.15) * (.74 + densityBoost * .34);
    colorMix[index] = Math.min(1, Math.max(0, random() ** 1.8 + densityBoost * .08));
  }

  return {
    radius: UNIVERSE_RADIUS,
    observableDiameterBillionLightYears: UNIVERSE_RADIUS * 2,
    galaxyCount,
    clusterCount: clusters.length,
    filamentCount: filaments.length,
    clusters,
    filaments,
    positions,
    formationAt,
    luminosity,
    colorMix
  };
}
