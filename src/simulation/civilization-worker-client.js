import { buildCivilizationSimulation } from './civilization.js';

function simulationPayload({ universe, civilizationData, civilizationSimulation, cosmicEvents }) {
  return {
    universe,
    civilizationData: civilizationData.map((species) => ({
      ...species,
      home: undefined,
      homeOffset: undefined,
      hostRemnantIndices: undefined,
      hostOffsets: undefined
    })),
    civilizationSimulation: {
      ...civilizationSimulation,
      adjacency: [],
      snapshots: []
    },
    cosmicEvents: cosmicEvents.map((event) => {
      const clean = {};
      Object.entries(event).forEach(([key, value]) => {
        if (['group', 'gravityField'].includes(key) || typeof value === 'function') return;
        clean[key] = value;
      });
      return clean;
    })
  };
}

function directBuild(input) {
  buildCivilizationSimulation(input);
  return {
    simulation: input.civilizationSimulation,
    eventUpdates: input.cosmicEvents.map((event) => ({
      id: event.id,
      outcome: event.outcome,
      civilizationImpacts: event.civilizationImpacts || []
    })),
    backend: '主线程降级'
  };
}

export async function buildCivilizationSimulationAsync(input) {
  if (!window.Worker) return directBuild(input);
  const payload = simulationPayload(input);
  const worker = new Worker(new URL('./civilization-worker.js', import.meta.url), { type: 'module' });
  try {
    const result = await new Promise((resolve, reject) => {
      const timeout = window.setTimeout(() => reject(new Error('worker timeout')), 30000);
      worker.addEventListener('message', (message) => {
        window.clearTimeout(timeout);
        if (message.data.error) reject(new Error(message.data.error));
        else resolve(message.data);
      }, { once: true });
      worker.addEventListener('error', (error) => {
        window.clearTimeout(timeout);
        reject(error);
      }, { once: true });
      worker.postMessage(payload);
    });
    return { ...result, backend: 'Web Worker' };
  } catch (error) {
    console.info('Civilization worker unavailable, continuing on the main thread.', error?.message || error);
    return directBuild(input);
  } finally {
    worker.terminate();
  }
}
