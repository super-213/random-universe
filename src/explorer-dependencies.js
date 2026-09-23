export { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
export { erasForUniverse, galaxyTypes, speciesColors, speciesNames } from './domain/catalog.js';
export { randomBetween, gaussianRandom } from './domain/random.js';
export {
  createStellarDawnModel,
  STELLAR_DAWN_END,
  STELLAR_DAWN_START
} from './domain/stellar-dawn.js';
export { createStellarPopulation, stellarSpectralType } from './domain/stellar-population.js';
export { stellarEndTimelinePosition } from './domain/universe.js';
export {
  cosmicTimeLabel,
  cosmicYearsToTimelinePosition,
  createCosmicTimelineState,
  referenceFutureYearsAtTimelinePosition,
  selectTimelineNarrative,
  timelinePositionToCosmicYears,
  timelineUnitsPerSecond
} from './domain/cosmic-time.js';
export { makeGlowTexture, makeRingTexture } from './rendering/textures.js';
export { animateBlackHoleVisual, createBlackHoleVisual } from './rendering/black-hole.js';
export { applyCivilizationSnapshot, syncCivilizationHosts } from './rendering/civilizations.js';
export { createCivilizationEventVisual } from './rendering/civilization-events.js';
export { animateCosmicEvents, updateCosmicEvents, updateEpochVisuals } from './rendering/timeline-visuals.js';
export { createMergerGravityField, createStellarGravityState } from './simulation/black-hole-gravity.js';
export {
  blackHoleEvaporationExponent,
  blackHoleMassFromSimulation,
  selectBlackHoleMergerPair,
  selectBlackHoleProgenitors
} from './simulation/compact-objects.js';
export { orbitalAngleAt } from './domain/orbital-motion.js';
export {
  civilizationSnapshotAt,
  deriveCivilizationRuntime,
  findDominantRelationship
} from './simulation/civilization.js';
export { buildCivilizationSimulationAsync } from './app/workers/civilization-worker-client.js';
export { createCivilizationEventPlan } from './simulation/civilization-events.js';
export { createRareEventPlan } from './simulation/rare-events.js';
export { expandEventSchedule } from './simulation/event-occurrence.js';
export {
  applyTransientImpactScales,
  createTransientGravityField,
  createTransientSimulation,
  describeTransientSimulation
} from './simulation/transient-events.js';
export {
  focusTimelineScale,
  renderCivilizationRows,
  renderPersistentTimelineEvent,
  renderTimelineEvent,
  renderTimelineHeader,
  renderTimelineScale,
  resetTimelineScaleFocus,
  restartTimelineScaleIntro
} from './ui/timeline.js';
export {
  clusterTimelineEvents,
  nearestTimelineEvent,
  timelineDetailWindow,
  timelinePercentAt,
  timelinePositionAtPercent,
  zoomTimelineViewport
} from './ui/timeline-layout.js';
export { organizeCivilizationLegend, resetCivilizationLegend } from './ui/civilization-legend.js';
