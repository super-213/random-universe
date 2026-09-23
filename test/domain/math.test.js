import test from 'node:test';
import assert from 'node:assert/strict';
import { clamp, smoothstep } from '../../src/domain/math.js';

test('domain math clamps values without a rendering dependency', () => {
  assert.equal(clamp(-2, 0, 1), 0);
  assert.equal(clamp(.4, 0, 1), .4);
  assert.equal(clamp(3, 0, 1), 1);
});

test('domain smoothstep preserves the cubic interpolation contract', () => {
  assert.equal(smoothstep(-1, 0, 10), 0);
  assert.equal(smoothstep(5, 0, 10), .5);
  assert.equal(smoothstep(11, 0, 10), 1);
});
