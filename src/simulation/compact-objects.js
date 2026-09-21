const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

export function selectBlackHoleProgenitors(deathThresholds, count, random) {
  if (!deathThresholds?.length || count <= 0) return [];

  const candidates = Array.from(deathThresholds, (_, index) => index)
    .sort((left, right) => deathThresholds[left] - deathThresholds[right]);
  const poolSize = Math.max(count, Math.floor(candidates.length * .42));
  const pool = candidates.slice(0, poolSize);
  const selected = [];

  for (let slot = 0; slot < Math.min(count, pool.length); slot++) {
    const start = Math.floor(slot / count * pool.length);
    const end = Math.max(start + 1, Math.floor((slot + 1) / count * pool.length));
    const offset = Math.min(end - start - 1, Math.floor(random() * (end - start)));
    selected.push(pool[start + offset]);
  }

  return selected;
}

export function blackHoleMassFromSimulation(simulation) {
  if (!simulation) return null;
  const formsBlackHole = simulation.remnantType === 'black-hole'
    || simulation.model === 'black-hole-binary'
    || simulation.model === 'collapsar-jet'
    || simulation.model === 'failed-collapse';
  if (!formsBlackHole || !Number.isFinite(simulation.remnantMass)) return null;
  return Math.max(2.5, simulation.remnantMass);
}

export function blackHoleEvaporationExponent(massSolar, maximumExponent = 100) {
  const mass = Math.max(2.5, Number(massSolar) || 2.5);
  // A stellar-mass black hole lasts roughly 10^67 years and Hawking lifetime
  // scales with M^3. The universe-specific ceiling represents its longest-lived
  // central black hole rather than forcing every compact object to vanish at once.
  return clamp(67 + 3 * Math.log10(mass / 10), 64, maximumExponent);
}

export function selectBlackHoleMergerPair(candidates, {
  at,
  maximumSeparation,
  allowCentral = false
}) {
  if (!Array.isArray(candidates) || candidates.length < 2) return null;

  const available = candidates.filter((candidate) => (
    candidate
    && Number.isFinite(candidate.birthAt)
    && candidate.birthAt < at
    && (!Number.isFinite(candidate.evaporationAt) || candidate.evaporationAt > at)
    && (!Number.isFinite(candidate.consumedAt) || candidate.consumedAt > at)
    && (allowCentral || !candidate.isCentral)
    && Number.isFinite(candidate.position?.[0])
    && Number.isFinite(candidate.position?.[1])
    && Number.isFinite(candidate.position?.[2])
  ));
  let closest = null;

  for (let leftIndex = 0; leftIndex < available.length - 1; leftIndex++) {
    const left = available[leftIndex];
    for (let rightIndex = leftIndex + 1; rightIndex < available.length; rightIndex++) {
      const right = available[rightIndex];
      const separation = Math.hypot(
        left.position[0] - right.position[0],
        left.position[1] - right.position[1],
        left.position[2] - right.position[2]
      );
      if (separation > maximumSeparation) continue;
      if (!closest || separation < closest.separation) {
        closest = { left, right, separation };
      }
    }
  }

  return closest;
}
