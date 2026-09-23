import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const mainSource = readFileSync(new URL('../src/main.js', import.meta.url), 'utf8');

test('main remains a small composition root', () => {
  const lineCount = mainSource.trimEnd().split('\n').length;
  assert.ok(lineCount <= 500, `src/main.js has grown to ${lineCount} lines`);
  assert.match(mainSource, /createExplorerApp/);
});

test('main does not own mutable array state', () => {
  assert.doesNotMatch(mainSource, /^(?:let|var)\s+\w+\s*=\s*\[/m);
});
