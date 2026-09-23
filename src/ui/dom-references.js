const requiredIds = [
  'universe',
  'coord-x',
  'coord-y',
  'coord-z',
  'civilization-panel',
  'civilization-legend',
  'timeline-event-detail',
  'timeline-event-detail-list',
  'timeline-filter-toggle',
  'timeline-filter-menu',
  'cosmic-timeline',
  'speed-control',
  'speed-toggle',
  'time-speed'
];

export function createDomReferences(root = document) {
  const byId = Object.fromEntries(requiredIds.map((id) => [id, root.getElementById(id)]));
  const missing = requiredIds.filter((id) => !byId[id]);
  if (missing.length) throw new Error(`Missing required DOM elements: ${missing.join(', ')}`);

  return {
    byId,
    query: (selector) => root.querySelector(selector),
    queryAll: (selector) => root.querySelectorAll(selector)
  };
}
