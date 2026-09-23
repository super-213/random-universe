import { yieldToMainThread } from '../../app/browser-scheduler.js';

export function createGalaxyHydrator({
  buildCivilizations,
  buildCosmicEvents,
  buildCosmicWeb,
  buildEpochEffects,
  buildLocalGroup,
  buildSimulation,
  finish,
  isCurrent,
  warmUniverseScaleShaders,
  yieldControl = yieldToMainThread
}) {
  async function runDeferredStage(stage, seed, version) {
    await yieldControl();
    if (!isCurrent(seed, version)) return false;
    await stage();
    return isCurrent(seed, version);
  }

  async function hydrate(starPositions, seed, version) {
    if (!await runDeferredStage(() => buildEpochEffects(starPositions), seed, version)) return false;
    if (!await runDeferredStage(() => buildCivilizations(starPositions), seed, version)) return false;
    if (!await runDeferredStage(buildLocalGroup, seed, version)) return false;
    if (!await runDeferredStage(buildCosmicWeb, seed, version)) return false;

    await warmUniverseScaleShaders();
    if (!isCurrent(seed, version)) return false;

    let cosmicEvents;
    if (!await runDeferredStage(() => {
      cosmicEvents = buildCosmicEvents(starPositions);
    }, seed, version)) return false;

    let simulationResult;
    if (!await runDeferredStage(async () => {
      simulationResult = await buildSimulation(cosmicEvents);
    }, seed, version)) return false;

    finish({ cosmicEvents, seed, simulationResult });
    return true;
  }

  return { hydrate };
}
