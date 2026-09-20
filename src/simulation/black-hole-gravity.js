import { orbitalTimelinePhase } from '../domain/orbital-motion.js';

const TWO_PI = Math.PI * 2;
const DEFAULT_MERGER_RELEASE_DURATION = 24;

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function smoothstep(value, min, max) {
  if (max <= min) return value >= max ? 1 : 0;
  const progress = clamp((value - min) / (max - min), 0, 1);
  return progress * progress * (3 - 2 * progress);
}

export function mergerPersistenceAt(position, event) {
  const persistenceEnd = event.persistUntil ?? event.start + event.duration;
  const releaseDuration = event.persistenceFadeDuration ?? DEFAULT_MERGER_RELEASE_DURATION;
  return 1 - smoothstep(position, persistenceEnd, persistenceEnd + releaseDuration);
}

function hashUnit(index, salt) {
  let value = (index + 1) ^ salt;
  value = Math.imul(value ^ value >>> 16, 0x21f0aaad);
  value = Math.imul(value ^ value >>> 15, 0x735a2d97);
  return ((value ^ value >>> 15) >>> 0) / 4294967296;
}

function writeRotated(array, offset, x, y, z, axisX, axisY, axisZ, angle) {
  const cosine = Math.cos(angle);
  const sine = Math.sin(angle);
  const dot = axisX * x + axisY * y + axisZ * z;
  array[offset] = x * cosine + (axisY * z - axisZ * y) * sine + axisX * dot * (1 - cosine);
  array[offset + 1] = y * cosine + (axisZ * x - axisX * z) * sine + axisY * dot * (1 - cosine);
  array[offset + 2] = z * cosine + (axisX * y - axisY * x) * sine + axisZ * dot * (1 - cosine);
}

export function createStellarGravityState(positions, universe) {
  const count = positions.length / 3;
  const axes = new Float32Array(positions.length);
  const orbitRates = new Float32Array(count);
  const diskLike = universe.galaxyType <= 2;
  const centralMass = universe.hasCentralBlackHole ? 1.35 : .16;
  const seedSalt = universe.seedValue ^ 0x6d2b79f5;
  const orbitDirection = 1;

  for (let index = 0; index < count; index++) {
    const offset = index * 3;
    const x = positions[offset];
    const y = positions[offset + 1];
    const z = positions[offset + 2];
    const radius = Math.max(.24, Math.hypot(x, y, z));

    if (diskLike) {
      // Thin discs share an angular-momentum axis. A very small deterministic
      // tilt keeps the particle sheet from looking mechanically rigid.
      let axisX = (hashUnit(index, seedSalt + 29) - .5) * .035;
      const axisY = 1;
      let axisZ = (hashUnit(index, seedSalt + 47) - .5) * .035;
      const length = Math.hypot(axisX, axisY, axisZ);
      axisX /= length;
      axisZ /= length;
      axes.set([axisX, axisY / length, axisZ], offset);
    } else {
      // Elliptical and irregular galaxies keep varied orbital planes, but all
      // axes stay in the same angular-momentum hemisphere. A fully isotropic
      // axis distribution made half the projected stars appear to run backward.
      const azimuth = hashUnit(index, seedSalt + 71) * TWO_PI;
      const tilt = .08 + hashUnit(index, seedSalt + 97) * .54;
      const horizontal = Math.sin(tilt);
      axes.set([
        Math.cos(azimuth) * horizontal,
        Math.cos(tilt),
        Math.sin(azimuth) * horizontal
      ], offset);
    }

    // The first term represents the central compact object and follows the
    // expected r^-3 circular-frequency dependence. The second is a softened
    // galactic halo/disc contribution, preventing the outer galaxy from being
    // incorrectly treated as if all its mass belonged to the black hole.
    const compactFrequency = centralMass / Math.pow(radius + .12, 3);
    // A flat outer rotation curve has Omega^2 proportional to r^-2. The
    // softening keeps the visual core finite without making outer speeds rise.
    const galacticFrequency = .72 / Math.pow(radius + 1.8, 2);
    const angularRate = .055 * Math.sqrt(universe.gravity * (compactFrequency + galacticFrequency));
    orbitRates[index] = orbitDirection * Math.min(.095, angularRate);
  }

  return { axes, orbitRates, centralMass };
}

export function applyStellarGravity(position, originalPositions, targetPositions, dynamics) {
  const timelinePhase = orbitalTimelinePhase(position);
  for (let index = 0; index < dynamics.orbitRates.length; index++) {
    const offset = index * 3;
    writeRotated(
      targetPositions,
      offset,
      originalPositions[offset],
      originalPositions[offset + 1],
      originalPositions[offset + 2],
      dynamics.axes[offset],
      dynamics.axes[offset + 1],
      dynamics.axes[offset + 2],
      timelinePhase * dynamics.orbitRates[index]
    );
  }
}

export function createMergerGravityField(positions, center, {
  seedValue,
  eventIndex,
  influenceRadius = 4.8,
  maxStars = 2600
}) {
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

  // Preserve the closest stars and evenly subsample the outskirts. This keeps
  // the near-field response dense without allowing a galactic-centre event to
  // turn every timeline update into an unnecessarily large calculation.
  candidates.sort((a, b) => a.distance - b.distance);
  const count = Math.min(maxStars, candidates.length);
  const indices = new Uint16Array(count);
  const restDistances = new Float32Array(count);
  const stride = candidates.length / Math.max(1, count);
  const salt = seedValue ^ Math.imul(eventIndex + 1, 0x45d9f3b);
  for (let sample = 0; sample < count; sample++) {
    const jitter = hashUnit(sample, salt) * Math.min(1, stride);
    const candidateIndex = sample === 0
      ? 0
      : Math.min(candidates.length - 1, Math.floor(sample * stride + jitter));
    indices[sample] = candidates[candidateIndex].index;
    restDistances[sample] = candidates[candidateIndex].distance;
  }

  const axisAzimuth = hashUnit(eventIndex, salt + 131) * TWO_PI;
  const axisTilt = (hashUnit(eventIndex, salt + 173) - .5) * .5;
  const horizontal = Math.cos(axisTilt);
  const axis = new Float32Array([
    Math.cos(axisAzimuth) * Math.sin(axisTilt),
    horizontal,
    Math.sin(axisAzimuth) * Math.sin(axisTilt)
  ]);

  return {
    indices,
    restDistances,
    axis,
    influenceRadius,
    softening: .24,
    captureRadius: .42
  };
}

export function applyMergerGravity(position, targetPositions, colorArray, event, center) {
  const field = event.gravityField;
  if (!field || position < event.start) return;

  const activeUntil = Math.min(position, event.persistUntil);
  const elapsed = activeUntil - event.start;
  const onset = smoothstep(position, event.start, event.start + 4.5);
  const merged = smoothstep(position, event.impactAt - 1.2, event.impactAt + 2.4);
  const persistence = mergerPersistenceAt(position, event);
  const retainedMass = 1 - event.radiatedMassFraction * merged;
  const axisX = field.axis[0];
  const axisY = field.axis[1];
  const axisZ = field.axis[2];

  for (let sample = 0; sample < field.indices.length; sample++) {
    const index = field.indices[sample];
    const offset = index * 3;
    const x = targetPositions[offset] - center.x;
    const y = targetPositions[offset + 1] - center.y;
    const z = targetPositions[offset + 2] - center.z;
    const liveDistance = Math.max(.025, Math.hypot(x, y, z));
    const restDistance = field.restDistances[sample];
    const influence = 1 - smoothstep(restDistance, field.influenceRadius * .34, field.influenceRadius);
    if (influence <= 0) continue;

    // Softened point-mass dynamics approximate the binary's barycentric field.
    // The 1/sqrt(r^3) term is Keplerian angular frequency; softening prevents
    // singular velocities at the event horizon in the visual coordinate scale.
    const softenedRadius = Math.sqrt(liveDistance * liveDistance + field.softening * field.softening);
    const angularFrequency = .105 * Math.sqrt(retainedMass / Math.pow(softenedRadius, 3));
    const binaryTorque = 1 + (1 - merged) * .22 * Math.sin(elapsed * .72 + restDistance * 2.3);
    const angle = elapsed * angularFrequency * binaryTorque * onset * influence;
    const cosine = Math.cos(angle);
    const sine = Math.sin(angle);
    const dot = axisX * x + axisY * y + axisZ * z;
    let rotatedX = x * cosine + (axisY * z - axisZ * y) * sine + axisX * dot * (1 - cosine);
    let rotatedY = y * cosine + (axisZ * x - axisX * z) * sine + axisY * dot * (1 - cosine);
    let rotatedZ = z * cosine + (axisX * y - axisY * x) * sine + axisZ * dot * (1 - cosine);

    // Bound stars do not simply fall inward: they exchange radial and tangential
    // velocity and remain on eccentric orbits. Only the innermost samples cross
    // the capture region and fade as they are accreted after the merger.
    const eccentricity = Math.min(.14, .055 / (restDistance + .24));
    const epicycle = 1 + Math.sin(angle * .63 + restDistance * 3.1) * eccentricity * onset * influence;
    rotatedX *= epicycle;
    rotatedY *= epicycle;
    rotatedZ *= epicycle;

    if (restDistance < field.captureRadius) {
      const captureDelay = (restDistance / field.captureRadius) * 11;
      const capture = smoothstep(position, event.impactAt + captureDelay, event.impactAt + captureDelay + 13);
      const radiusScale = 1 - capture * .965;
      rotatedX *= radiusScale;
      rotatedY *= radiusScale;
      rotatedZ *= radiusScale;
      const visibility = 1 - capture;
      colorArray[offset] *= visibility;
      colorArray[offset + 1] *= visibility;
      colorArray[offset + 2] *= visibility;
    }

    // When the remnant reaches the end of its visible lifetime, release the
    // local distortion over the same interval used by the visual fade. A hard
    // return here used to restore thousands of stars to their baseline orbit
    // in one frame. Captured stars remain dark instead of reappearing.
    targetPositions[offset] = center.x + x + (rotatedX - x) * persistence;
    targetPositions[offset + 1] = center.y + y + (rotatedY - y) * persistence;
    targetPositions[offset + 2] = center.z + z + (rotatedZ - z) * persistence;
  }
}
