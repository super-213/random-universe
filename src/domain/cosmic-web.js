import { cosmicYearsToTimelinePosition } from './cosmic-time.js';
import { createSeededRandom, gaussianRandom, randomBetween } from './random.js';

const DEFAULT_GALAXY_COUNT = 12000;
const DEFAULT_CLUSTER_COUNT = 32;
const UNIVERSE_RADIUS = 46.5;
const MORPHOLOGIES = [
  { id: 'porous-web', label: '多孔宇宙网' },
  { id: 'curved-wall', label: '弯曲星系墙' },
  { id: 'twin-lobes', label: '双叶超星系团' },
  { id: 'void-shells', label: '巨型空洞壳层' },
  { id: 'twisted-ribbon', label: '扭转纤维带' }
];

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

function rotatePosition(position, rotation) {
  let [x, y, z] = position;
  const cosX = Math.cos(rotation[0]);
  const sinX = Math.sin(rotation[0]);
  [y, z] = [y * cosX - z * sinX, y * sinX + z * cosX];
  const cosY = Math.cos(rotation[1]);
  const sinY = Math.sin(rotation[1]);
  [x, z] = [x * cosY + z * sinY, -x * sinY + z * cosY];
  const cosZ = Math.cos(rotation[2]);
  const sinZ = Math.sin(rotation[2]);
  return [x * cosZ - y * sinZ, x * sinZ + y * cosZ, z];
}

function createMorphology(random) {
  const definition = MORPHOLOGIES[Math.floor(random() * MORPHOLOGIES.length)];
  const rotation = [
    randomBetween(random, -.72, .72),
    randomBetween(random, -Math.PI, Math.PI),
    randomBetween(random, -.52, .52)
  ];
  return {
    ...definition,
    rotation,
    flowAxis: rotatePosition([0, 1, 0], rotation)
  };
}

function shapePosition(position, morphology) {
  let [x, y, z] = position;
  if (morphology.id === 'curved-wall') {
    y = y * .2 + Math.sin(x * .09) * 3.8 + Math.cos(z * .075) * 2.4;
    x *= 1.08;
    z *= 1.08;
  } else if (morphology.id === 'twin-lobes') {
    x += Math.tanh(x * .16) * 7.2;
    y *= .78;
    z *= .82;
  } else if (morphology.id === 'void-shells') {
    const radius = Math.hypot(x, y, z) || 1;
    const shellRadius = 8.5 + radius * .82;
    const scale = shellRadius / radius;
    x *= scale;
    y *= scale;
    z *= scale;
  } else if (morphology.id === 'twisted-ribbon') {
    y *= .24;
    const twist = x * .052;
    const cos = Math.cos(twist);
    const sin = Math.sin(twist);
    [y, z] = [y * cos - z * sin, y * sin + z * cos];
    z *= 1.08;
  }
  return rotatePosition([x, y, z], morphology.rotation);
}

function createClusters(random, count, morphology) {
  const clusters = [];
  while (clusters.length < count) {
    const position = clampToObservableRadius(shapePosition(
      sampleSphere(random, UNIVERSE_RADIUS * .82),
      morphology
    ));
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

function nearestCluster(position, clusters) {
  let nearest = clusters[0];
  let nearestDistance = Infinity;
  clusters.forEach((cluster) => {
    const distance = distanceSquared(position, cluster.position);
    if (distance < nearestDistance) {
      nearest = cluster;
      nearestDistance = distance;
    }
  });
  return nearest;
}

function normalizedCross(left, right) {
  const cross = [
    left[1] * right[2] - left[2] * right[1],
    left[2] * right[0] - left[0] * right[2],
    left[0] * right[1] - left[1] * right[0]
  ];
  const length = Math.hypot(...cross) || 1;
  return cross.map((value) => value / length);
}

function createFlowField(random, positions, clusters, morphology) {
  const flowVectors = new Float32Array(positions.length);
  const flowSideVectors = new Float32Array(positions.length);
  const flowPhases = new Float32Array(positions.length / 3);
  const flowSpeeds = new Float32Array(positions.length / 3);
  for (let index = 0; index < flowPhases.length; index++) {
    const offset = index * 3;
    const position = [positions[offset], positions[offset + 1], positions[offset + 2]];
    const cluster = nearestCluster(position, clusters);
    const radial = position.map((value, axis) => value - cluster.position[axis]);
    const radialLength = Math.hypot(...radial) || 1;
    const radialDirection = radial.map((value) => value / radialLength);
    let tangent = normalizedCross(morphology.flowAxis, radialDirection);
    if (Math.abs(tangent[0]) + Math.abs(tangent[1]) + Math.abs(tangent[2]) < .01) {
      tangent = normalizedCross([1, 0, 0], radialDirection);
    }
    const amplitude = randomBetween(random, .28, .78) * (.78 + cluster.mass * .18);
    const flow = tangent.map((value, axis) => (
      value * amplitude - radialDirection[axis] * amplitude * .14
    ));
    const flowDirectionLength = Math.hypot(...flow) || 1;
    const flowDirection = flow.map((value) => value / flowDirectionLength);
    const side = normalizedCross(radialDirection, flowDirection);
    flowVectors.set(flow, offset);
    flowSideVectors.set(side.map((value) => value * amplitude * .38), offset);
    flowPhases[index] = random() * Math.PI * 2;
    flowSpeeds[index] = randomBetween(random, .16, .34);
  }
  return { flowVectors, flowSideVectors, flowPhases, flowSpeeds };
}

function selectCurrentGalaxyIndex(random, positions) {
  const count = positions.length / 3;
  const start = Math.floor(random() * count);
  for (let attempt = 0; attempt < count; attempt++) {
    const index = (start + attempt * 97) % count;
    const offset = index * 3;
    const radius = Math.hypot(
      positions[offset],
      positions[offset + 1],
      positions[offset + 2]
    );
    const transverseRadius = Math.hypot(positions[offset], positions[offset + 1]);
    if (radius >= UNIVERSE_RADIUS * .26
      && radius <= UNIVERSE_RADIUS * .72
      && transverseRadius >= UNIVERSE_RADIUS * .32) return index;
  }
  return start;
}

export function cosmicGalaxyPositionAt(model, index, time, target = [0, 0, 0], offset = 0) {
  const sourceOffset = index * 3;
  const angle = time * model.flowSpeeds[index] + model.flowPhases[index];
  const primary = Math.sin(angle);
  const secondary = Math.cos(angle);
  for (let axis = 0; axis < 3; axis++) {
    target[offset + axis] = model.positions[sourceOffset + axis]
      + model.flowVectors[sourceOffset + axis] * primary
      + model.flowSideVectors[sourceOffset + axis] * secondary;
  }
  return target;
}

export function createCosmicWebModel(universe, {
  galaxyCount = DEFAULT_GALAXY_COUNT,
  clusterCount = DEFAULT_CLUSTER_COUNT
} = {}) {
  const random = createSeededRandom(universe.seed, 12821);
  const morphology = createMorphology(random);
  const clusters = createClusters(random, clusterCount, morphology);
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
      position = shapePosition(sampleSphere(random, UNIVERSE_RADIUS), morphology);
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

  const flowField = createFlowField(random, positions, clusters, morphology);
  const currentGalaxyIndex = selectCurrentGalaxyIndex(random, positions);
  const currentGalaxyOffset = currentGalaxyIndex * 3;

  return {
    radius: UNIVERSE_RADIUS,
    observableDiameterBillionLightYears: UNIVERSE_RADIUS * 2,
    galaxyCount,
    clusterCount: clusters.length,
    filamentCount: filaments.length,
    clusters,
    filaments,
    morphology: morphology.id,
    morphologyLabel: morphology.label,
    positions,
    ...flowField,
    currentGalaxyIndex,
    currentGalaxyPosition: [
      positions[currentGalaxyOffset],
      positions[currentGalaxyOffset + 1],
      positions[currentGalaxyOffset + 2]
    ],
    formationAt,
    luminosity,
    colorMix
  };
}
