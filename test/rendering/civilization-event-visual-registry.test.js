import test from 'node:test';
import assert from 'node:assert/strict';
import {
  animateCivilizationEventVisual,
  civilizationEventVisualRegistry,
  createCivilizationEventVisual,
  updateCivilizationEventVisual
} from '../../src/rendering/civilization-events.js';
import { disposeSharedTextures } from '../../src/rendering/textures.js';

const expectedVisuals = [
  'interuniversal-gateway',
  'signal-wave',
  'probe-swarm',
  'megastructure',
  'civilization-fracture',
  'knowledge-ark',
  'uplift',
  'orbital-debris',
  'terraforming',
  'digital-migration',
  'precursor-ruins',
  'information-plague',
  'relativistic-divergence',
  'biosphere-chain',
  'light-cone',
  'stellar-engine',
  'galactic-encounter',
  'microlensing',
  'transit-curve',
  'waste-heat',
  'signal-silence',
  'last-star'
];

test('civilization event visuals are registered explicitly', () => {
  assert.deepEqual([...civilizationEventVisualRegistry.keys()], expectedVisuals);
  civilizationEventVisualRegistry.forEach((handler) => {
    assert.equal(typeof handler.create, 'function');
    assert.equal(typeof handler.update, 'function');
    assert.ok(handler.animate === null || typeof handler.animate === 'function');
  });
});

test('every registered civilization visual completes its lifecycle', () => {
  const originalDocument = globalThis.document;
  const context = {
    createRadialGradient: () => ({ addColorStop() {} }),
    fillRect() {},
    fillStyle: ''
  };
  globalThis.document = {
    createElement: () => ({ width: 0, height: 0, getContext: () => context })
  };

  try {
    expectedVisuals.forEach((visual) => {
      const event = {
        visual,
        color: '#d8ff5f',
        asymmetry: .4,
        transitDepth: .04,
        peakMagnification: 1.6
      };
      event.group = createCivilizationEventVisual(event);
      assert.doesNotThrow(() => updateCivilizationEventVisual(event, .52, .08), visual);
      assert.doesNotThrow(() => animateCivilizationEventVisual(event, 1200), visual);
      event.group.traverse((object) => {
        object.geometry?.dispose();
        const materials = Array.isArray(object.material)
          ? object.material
          : object.material ? [object.material] : [];
        materials.forEach((material) => material.dispose());
      });
    });
  } finally {
    disposeSharedTextures();
    if (originalDocument === undefined) delete globalThis.document;
    else globalThis.document = originalDocument;
  }
});
