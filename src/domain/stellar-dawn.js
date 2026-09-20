import { createSeededRandom, gaussianRandom } from './random.js';

export const STELLAR_DAWN_START = 245;
export const STELLAR_DAWN_END = 340;

const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

function distanceBetween(positions, firstIndex, secondIndex) {
  const firstOffset = firstIndex * 3;
  const secondOffset = secondIndex * 3;
  return Math.hypot(
    positions[firstOffset] - positions[secondOffset],
    positions[firstOffset + 1] - positions[secondOffset + 1],
    positions[firstOffset + 2] - positions[secondOffset + 2]
  );
}

/**
 * Build a deterministic, spatially heterogeneous model for the first stellar
 * populations. Stars ignite outwards from several overdense regions instead
 * of revealing an already completed galaxy through one global opacity value.
 */
export function createStellarDawnModel(seed, positions, requestedSiteCount = 7) {
  const random = createSeededRandom(seed, 191);
  const starCount = positions.length / 3;
  const siteCount = Math.min(requestedSiteCount, starCount);
  const siteIndices = [];

  let densestIndex = 0;
  let smallestRadius = Infinity;
  for (let index = 0; index < starCount; index++) {
    const offset = index * 3;
    const radius = Math.hypot(positions[offset], positions[offset + 1], positions[offset + 2]);
    if (radius < smallestRadius) {
      smallestRadius = radius;
      densestIndex = index;
    }
  }
  siteIndices.push(densestIndex);

  for (let attempt = 0; siteIndices.length < siteCount && attempt < starCount * 2; attempt++) {
    const candidate = Math.floor(random() * starCount);
    const separated = siteIndices.every((siteIndex) => distanceBetween(positions, candidate, siteIndex) > 3.2);
    if (separated) siteIndices.push(candidate);
  }
  while (siteIndices.length < siteCount) {
    siteIndices.push(Math.floor(random() * starCount));
  }

  const sites = siteIndices.map((starIndex, siteIndex) => {
    const offset = starIndex * 3;
    return {
      position: [positions[offset], positions[offset + 1], positions[offset + 2]],
      birthAt: siteIndex === 0 ? 246 : 249 + random() * 28,
      maxRadius: 4.8 + random() * 3.8,
      phase: random() * Math.PI * 2
    };
  });

  const birthAt = new Float32Array(starCount);
  const formationOrigins = new Float32Array(positions.length);
  for (let starIndex = 0; starIndex < starCount; starIndex++) {
    const offset = starIndex * 3;
    let closestSite = sites[0];
    let closestDistance = Infinity;
    sites.forEach((site) => {
      const distance = Math.hypot(
        positions[offset] - site.position[0],
        positions[offset + 1] - site.position[1],
        positions[offset + 2] - site.position[2]
      );
      if (distance < closestDistance) {
        closestDistance = distance;
        closestSite = site;
      }
    });

    const propagationDelay = Math.min(48, closestDistance * 2.65);
    const collapseDelay = Math.pow(random(), 1.65) * 24;
    birthAt[starIndex] = clamp(
      closestSite.birthAt + propagationDelay + collapseDelay,
      STELLAR_DAWN_START + 1,
      322
    );

    const diffuseScale = 1.28 + random() * .24;
    formationOrigins[offset] = positions[offset] * diffuseScale + gaussianRandom(random) * .9;
    formationOrigins[offset + 1] = positions[offset + 1] * (1.8 + random() * .45)
      + gaussianRandom(random) * .68;
    formationOrigins[offset + 2] = positions[offset + 2] * diffuseScale + gaussianRandom(random) * .9;
  }

  const gasCount = Math.min(3200, starCount);
  const gasSourceIndices = new Uint16Array(gasCount);
  const stride = starCount / gasCount;
  for (let index = 0; index < gasCount; index++) {
    gasSourceIndices[index] = Math.min(starCount - 1, Math.floor(index * stride + random() * stride));
  }

  return { birthAt, formationOrigins, gasSourceIndices, sites };
}
