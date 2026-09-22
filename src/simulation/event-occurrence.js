function clamp(value, minimum, maximum) {
  return Math.min(maximum, Math.max(minimum, value));
}

function samplePoisson(random, expectedValue, maximum) {
  if (expectedValue <= 0 || maximum <= 0) return 0;
  const threshold = Math.exp(-expectedValue);
  let product = 1;
  let count = 0;
  while (product > threshold && count <= maximum) {
    product *= Math.max(1e-12, random());
    count++;
  }
  return Math.min(maximum, Math.max(0, count - 1));
}

function occurrenceCount(event, activityScale, random) {
  const maximumOccurrences = Math.max(1, event.maximumOccurrences || 1);
  const model = event.occurrenceModel || 'legacy';

  if (model === 'deterministic') return 1;

  if (model === 'bernoulli') {
    const probability = event.occurrenceProbability ?? (
      1 - Math.exp(-(event.expectedOccurrences || 0) * activityScale)
    );
    return random() < clamp(probability, 0, 1) ? 1 : 0;
  }

  if (model === 'poisson') {
    return samplePoisson(
      random,
      Math.max(0, event.expectedOccurrences || 0) * activityScale,
      maximumOccurrences
    );
  }

  if (model === 'renewal') {
    const firstProbability = event.occurrenceProbability ?? (
      1 - Math.exp(-(event.expectedOccurrences || 0) * activityScale)
    );
    if (random() >= clamp(firstProbability, 0, 1)) return 0;
    const repeatProbability = clamp(
      (event.repeatProbability ?? .35) * Math.sqrt(activityScale),
      0,
      .92
    );
    let count = 1;
    while (count < maximumOccurrences && random() < repeatProbability) count++;
    return count;
  }

  if (event.occurrenceProbability !== undefined
    && random() > clamp(event.occurrenceProbability, 0, 1)) return 0;
  const additional = samplePoisson(
    random,
    (event.repeatRate || 0) * activityScale,
    maximumOccurrences - 1
  );
  return 1 + additional;
}

export function expandEventSchedule(baseEvents, universe, random) {
  const activityScale = clamp(
    .38 + universe.stars * .16 + universe.structureEfficiency * .18,
    .55,
    2.35
  );

  return baseEvents.flatMap((event) => {
    const sampledCount = occurrenceCount(event, activityScale, random);
    if (sampledCount === 0) return [];
    const repeatSpacing = event.repeatSpacing || Math.max(12, event.duration * .72);
    const {
      occurrenceModel: ignoredModel,
      expectedOccurrences: ignoredExpected,
      repeatRate,
      repeatProbability: ignoredRepeatProbability,
      repeatSpacing: ignoredSpacing,
      maximumOccurrences: ignoredMaximum,
      occurrenceProbability: ignoredProbability,
      ...eventData
    } = event;
    const maximumStart = Math.min(
      998 - eventData.duration,
      eventData.latestStart ?? Infinity
    );
    if (eventData.start > maximumStart) return [];

    const occurrences = Array.from({ length: sampledCount }, (_, occurrenceIndex) => {
      if (occurrenceIndex === 0) {
        return { ...eventData, occurrenceIndex, occurrenceCount: sampledCount };
      }
      const spacing = repeatSpacing * occurrenceIndex * (.82 + random() * .36);
      const start = eventData.start + spacing;
      if (start > maximumStart) return null;
      return {
        ...eventData,
        start,
        label: `${eventData.label}（第 ${occurrenceIndex + 1} 次）`,
        occurrenceIndex,
        occurrenceCount: sampledCount
      };
    }).filter(Boolean);
    return occurrences.map((occurrence) => ({
      ...occurrence,
      occurrenceCount: occurrences.length
    }));
  }).sort((a, b) => a.start - b.start || a.occurrenceIndex - b.occurrenceIndex);
}
