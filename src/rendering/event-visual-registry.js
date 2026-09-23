const visualFamilies = [
  {
    id: 'civilization',
    matches: (event) => event.markerVisual || event.category === 'civilization'
  },
  {
    id: 'explosive-transient',
    visuals: new Set(['supernova', 'nova', 'kilonova'])
  },
  { id: 'tidal-disruption', visuals: new Set(['tidal-disruption']) },
  { id: 'stellar-flare', visuals: new Set(['stellar-flare']) },
  { id: 'stellar-collapse', visuals: new Set(['stellar-collapse']) },
  { id: 'pulsar', visuals: new Set(['pulsar']) },
  { id: 'black-hole-merger', visuals: new Set(['black-hole-merger']) }
];

export const eventVisualFamilyRegistry = new Map(
  visualFamilies.map((family) => [family.id, family])
);

export function eventVisualFamily(event) {
  for (const family of visualFamilies) {
    if (family.matches?.(event) || family.visuals?.has(event.visual)) return family.id;
  }
  return 'unknown';
}
