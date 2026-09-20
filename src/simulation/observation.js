const clamp = (value, minimum, maximum) => Math.max(minimum, Math.min(maximum, value));

function snapshotAt(simulation, position) {
  if (!simulation?.snapshots?.length) return null;
  const index = clamp(
    Math.floor((position - simulation.start) / simulation.step),
    0,
    simulation.snapshots.length - 1
  );
  return simulation.snapshots[index];
}

function metricSet(snapshot, speciesIndex) {
  if (!snapshot) return null;
  return {
    population: snapshot.populations?.[speciesIndex] || 0,
    resources: snapshot.resources?.[speciesIndex] || 0,
    energy: snapshot.energyReserves?.[speciesIndex] || 0,
    governance: snapshot.governance?.[speciesIndex] || 0,
    research: snapshot.research?.[speciesIndex] || 0,
    stability: snapshot.stability?.[speciesIndex] || 0
  };
}

export function civilizationObservation({
  observerSpeciesIndex,
  targetSpeciesIndex,
  position,
  civilizationSimulation,
  civilizationData,
  universe
}) {
  const actualSnapshot = snapshotAt(civilizationSimulation, position);
  const actual = metricSet(actualSnapshot, targetSpeciesIndex);
  if (!actual) return null;
  if (observerSpeciesIndex === null || observerSpeciesIndex === undefined) {
    return { mode: 'omniscient', distance: 0, delay: 0, confidence: 1, observedAt: position, actual, observed: actual, inferred: actual, uncertainty: 0 };
  }
  if (observerSpeciesIndex === targetSpeciesIndex) {
    return { mode: 'direct', distance: 0, delay: 0, confidence: 1, observedAt: position, actual, observed: actual, inferred: actual, uncertainty: 0 };
  }
  const observerNode = civilizationData[observerSpeciesIndex]?.homeNodeIndex;
  const targetNode = civilizationData[targetSpeciesIndex]?.homeNodeIndex;
  if (observerNode === undefined || targetNode === undefined) return null;
  const positions = civilizationSimulation.habitatPositions;
  const observerOffset = observerNode * 3;
  const targetOffset = targetNode * 3;
  const distance = Math.hypot(
    positions[observerOffset] - positions[targetOffset],
    positions[observerOffset + 1] - positions[targetOffset + 1],
    positions[observerOffset + 2] - positions[targetOffset + 2]
  );
  const delay = distance / Math.max(.38, universe.speed) * 3.2;
  const observedAt = Math.max(civilizationSimulation.start, position - delay);
  const observedSnapshot = snapshotAt(civilizationSimulation, observedAt);
  const observed = metricSet(observedSnapshot, targetSpeciesIndex);
  const visibility = observedSnapshot?.visibility?.[targetSpeciesIndex] || 0;
  const confidence = clamp(.94 - distance / 52 + visibility * .18, .18, .96);
  const uncertainty = clamp((1 - confidence) * .72 + delay / 240, .05, .68);
  const trend = observedSnapshot?.trends?.[targetSpeciesIndex] || 0;
  const projection = 1 + trend * Math.min(.14, delay / 250);
  const inferred = Object.fromEntries(Object.entries(observed).map(([key, value]) => [
    key,
    key === 'population' ? Math.max(0, value * projection) : clamp(value * projection, 0, 1)
  ]));
  return { mode: 'delayed', distance, delay, confidence, observedAt, actual, observed, inferred, uncertainty };
}
