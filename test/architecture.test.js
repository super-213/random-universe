import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';

const mainSource = readFileSync(new URL('../src/main.js', import.meta.url), 'utf8');
const styleSource = readFileSync(new URL('../src/style.css', import.meta.url), 'utf8');

function javascriptFiles(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const entryUrl = new URL(`${entry.name}${entry.isDirectory() ? '/' : ''}`, directory);
    if (entry.isDirectory()) return javascriptFiles(entryUrl);
    return entry.name.endsWith('.js') ? [entryUrl] : [];
  });
}

const domainFiles = javascriptFiles(new URL('../src/domain/', import.meta.url));
const simulationFiles = javascriptFiles(new URL('../src/simulation/', import.meta.url));

function assertPureModule(file, allowedImport) {
  const source = readFileSync(file, 'utf8');
  const label = decodeURIComponent(file.pathname);
  assert.doesNotMatch(source, /(?:from\s+['"]three(?:\/|['"])|\bTHREE\b)/, `${label} depends on Three.js`);
  assert.doesNotMatch(
    source,
    /\b(?:window|document|self)\s*\.|\b(?:requestAnimationFrame|cancelAnimationFrame)\s*\(/,
    `${label} depends on a browser runtime`
  );
  assert.doesNotMatch(source, /Math\.random\s*\(/, `${label} uses unseeded randomness`);

  const imports = source.matchAll(/(?:from\s+|import\s*\()\s*['"]([^'"]+)['"]/g);
  for (const [, specifier] of imports) {
    assert.ok(allowedImport(specifier), `${label} crosses its architecture boundary via ${specifier}`);
  }
}

test('main remains a small composition root', () => {
  const lineCount = mainSource.trimEnd().split('\n').length;
  assert.ok(lineCount <= 500, `src/main.js has grown to ${lineCount} lines`);
  assert.match(mainSource, /createExplorerApp/);
});

test('main does not own mutable array state', () => {
  assert.doesNotMatch(mainSource, /^(?:let|var)\s+\w+\s*=\s*\[/m);
});

test('domain modules are deterministic and dependency-free', () => {
  domainFiles.forEach((file) => assertPureModule(file, (specifier) => specifier.startsWith('./')));
});

test('simulation modules depend only on domain and simulation modules', () => {
  simulationFiles.forEach((file) => assertPureModule(file, (specifier) => (
    specifier.startsWith('./') || specifier.startsWith('../domain/')
  )));
});

test('styles remain split by interface responsibility', () => {
  const imports = [...styleSource.matchAll(/@import ['"]([^'"]+)['"]/g)].map((match) => match[1]);
  assert.deepEqual(imports, [
    './styles/base.css',
    './styles/generator.css',
    './styles/explorer.css',
    './styles/timeline.css',
    './styles/overlays.css',
    './styles/responsive.css'
  ]);
  imports.forEach((specifier) => {
    const stylesheet = readFileSync(new URL(`../src/${specifier.slice(2)}`, import.meta.url), 'utf8');
    assert.ok(stylesheet.trim().length > 0, `${specifier} is empty`);
  });
});
