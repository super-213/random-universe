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

export function expandEventSchedule(baseEvents, universe, random) {
  const activityScale = clamp(
    .38 + universe.stars * .16 + universe.structureEfficiency * .18,
    .55,
    2.35
  );

  return baseEvents.flatMap((event) => {
    const maximumOccurrences = event.maximumOccurrences || 1;
    const additional = samplePoisson(
      random,
      (event.repeatRate || 0) * activityScale,
      maximumOccurrences - 1
    );
    const occurrenceCount = 1 + additional;
    const repeatSpacing = event.repeatSpacing || Math.max(12, event.duration * .72);
    const { repeatRate, repeatSpacing: ignoredSpacing, maximumOccurrences: ignoredMaximum, ...eventData } = event;

    return Array.from({ length: occurrenceCount }, (_, occurrenceIndex) => {
      if (occurrenceIndex === 0) {
        return { ...eventData, occurrenceIndex, occurrenceCount };
      }
      const spacing = repeatSpacing * occurrenceIndex * (.82 + random() * .36);
      const maximumStart = Math.max(eventData.start, 998 - eventData.duration);
      return {
        ...eventData,
        start: Math.min(maximumStart, eventData.start + spacing),
        label: `${eventData.label}（第 ${occurrenceIndex + 1} 次）`,
        occurrenceIndex,
        occurrenceCount
      };
    });
  }).sort((a, b) => a.start - b.start || a.occurrenceIndex - b.occurrenceIndex);
}
