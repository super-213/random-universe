import test from 'node:test';
import assert from 'node:assert/strict';
import { createGalaxyHydrator } from '../../src/features/galaxy/galaxy-hydrator.js';

test('galaxy hydration runs each stage in order and commits once', async () => {
  const calls = [];
  const events = [{ id: 'event-1' }];
  const simulationResult = { simulation: { id: 'simulation-1' }, eventUpdates: [] };
  const hydrator = createGalaxyHydrator({
    buildCivilizations: () => calls.push('civilizations'),
    buildCosmicEvents: () => {
      calls.push('events');
      return events;
    },
    buildCosmicWeb: () => calls.push('cosmic-web'),
    buildEpochEffects: () => calls.push('epochs'),
    buildLocalGroup: () => calls.push('local-group'),
    buildSimulation: (receivedEvents) => {
      assert.equal(receivedEvents, events);
      calls.push('simulation');
      return simulationResult;
    },
    finish: (result) => {
      assert.equal(result.cosmicEvents, events);
      assert.equal(result.simulationResult, simulationResult);
      calls.push('finish');
    },
    isCurrent: () => true,
    warmUniverseScaleShaders: () => calls.push('warm-shaders'),
    yieldControl: () => calls.push('yield')
  });

  assert.equal(await hydrator.hydrate([], 'seed', 1), true);
  assert.deepEqual(calls, [
    'yield', 'epochs',
    'yield', 'civilizations',
    'yield', 'local-group',
    'yield', 'cosmic-web',
    'warm-shaders',
    'yield', 'events',
    'yield', 'simulation',
    'finish'
  ]);
});

test('galaxy hydration stops when its build version becomes stale', async () => {
  const calls = [];
  let current = true;
  const hydrator = createGalaxyHydrator({
    buildCivilizations: () => calls.push('civilizations'),
    buildCosmicEvents: () => [],
    buildCosmicWeb: () => {},
    buildEpochEffects: () => {
      calls.push('epochs');
      current = false;
    },
    buildLocalGroup: () => {},
    buildSimulation: () => ({}),
    finish: () => calls.push('finish'),
    isCurrent: () => current,
    warmUniverseScaleShaders: () => {},
    yieldControl: () => calls.push('yield')
  });

  assert.equal(await hydrator.hydrate([], 'seed', 1), false);
  assert.deepEqual(calls, ['yield', 'epochs']);
});
