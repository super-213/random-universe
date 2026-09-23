export const timelineEventFilterKeys = Object.freeze([
  'astro',
  'civilization',
  'speculative'
]);

export function timelineEventFilterFor(event) {
  if (event.confidence === 'science-fiction') return 'speculative';
  if (event.category === 'civilization') return 'civilization';
  return 'astro';
}

export function allTimelineEventFiltersSelected(filters) {
  return timelineEventFilterKeys.every((filter) => filters.includes(filter));
}

export function timelineEventMatchesFilters(event, filters) {
  return filters.includes(timelineEventFilterFor(event));
}

export function toggleTimelineEventFilter(filters, filter) {
  const selected = new Set(filters.filter((item) => timelineEventFilterKeys.includes(item)));

  if (!timelineEventFilterKeys.includes(filter)) return [...selected];
  if (selected.has(filter)) selected.delete(filter);
  else selected.add(filter);
  return timelineEventFilterKeys.filter((item) => selected.has(item));
}
