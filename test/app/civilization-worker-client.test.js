import test from 'node:test';
import assert from 'node:assert/strict';
import { buildCivilizationSimulationAsync } from '../../src/app/workers/civilization-worker-client.js';

test('civilization worker adapter delegates pure simulation to its app worker', async () => {
  const originalWindow = globalThis.window;
  const originalWorker = globalThis.Worker;
  let workerUrl = null;
  let terminated = false;

  class FakeWorker {
    constructor(url, options) {
      workerUrl = String(url);
      assert.deepEqual(options, { type: 'module' });
      this.listeners = {};
    }

    addEventListener(type, listener) {
      this.listeners[type] = listener;
    }

    postMessage() {
      queueMicrotask(() => {
        this.listeners.message({
          data: {
            simulation: { id: 'worker-result' },
            eventUpdates: []
          }
        });
      });
    }

    terminate() {
      terminated = true;
    }
  }

  globalThis.window = { Worker: FakeWorker, setTimeout, clearTimeout };
  globalThis.Worker = FakeWorker;
  try {
    const result = await buildCivilizationSimulationAsync({
      universe: { seed: 'worker-test' },
      civilizationData: [],
      civilizationSimulation: { adjacency: [], snapshots: [] },
      cosmicEvents: []
    });
    assert.equal(result.backend, 'Web Worker');
    assert.equal(result.simulation.id, 'worker-result');
    assert.match(workerUrl, /\/src\/app\/workers\/civilization-worker\.js$/);
    assert.equal(terminated, true);
  } finally {
    if (originalWindow === undefined) delete globalThis.window;
    else globalThis.window = originalWindow;
    if (originalWorker === undefined) delete globalThis.Worker;
    else globalThis.Worker = originalWorker;
  }
});
