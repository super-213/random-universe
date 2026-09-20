import { readdirSync, readFileSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { extname, join, resolve } from 'node:path';

const projectRoot = resolve(import.meta.dirname, '..');
const sourceFont = join(projectRoot, 'src/assets/fonts/SmileySans-Oblique.ttf.woff2');
const outputFont = join(projectRoot, 'src/assets/fonts/SmileySans-Oblique.subset.woff2');
const sourceExtensions = new Set(['.css', '.html', '.js']);

function sourceFiles(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) return sourceFiles(path);
    return sourceExtensions.has(extname(entry.name)) ? [path] : [];
  });
}

const content = [join(projectRoot, 'index.html'), ...sourceFiles(join(projectRoot, 'src'))]
  .map((path) => readFileSync(path, 'utf8'))
  .join('');
const codePoints = new Set(Array.from({ length: 0x7f - 0x20 }, (_, index) => index + 0x20));
for (const character of content) codePoints.add(character.codePointAt(0));

const unicodeRanges = [];
const sortedCodePoints = [...codePoints].sort((a, b) => a - b);
let rangeStart = sortedCodePoints[0];
let rangeEnd = rangeStart;
for (const codePoint of sortedCodePoints.slice(1)) {
  if (codePoint === rangeEnd + 1) {
    rangeEnd = codePoint;
    continue;
  }
  unicodeRanges.push(rangeStart === rangeEnd
    ? `U+${rangeStart.toString(16)}`
    : `U+${rangeStart.toString(16)}-${rangeEnd.toString(16)}`);
  rangeStart = codePoint;
  rangeEnd = codePoint;
}
unicodeRanges.push(rangeStart === rangeEnd
  ? `U+${rangeStart.toString(16)}`
  : `U+${rangeStart.toString(16)}-${rangeEnd.toString(16)}`);

const result = spawnSync('pyftsubset', [
  sourceFont,
  `--output-file=${outputFont}`,
  '--flavor=woff2',
  `--unicodes=${unicodeRanges.join(',')}`,
  '--layout-features=*',
  '--no-hinting',
  '--no-recalc-timestamp'
], { stdio: 'inherit' });

if (result.error) {
  console.error('pyftsubset is required to regenerate the display-font subset.');
  throw result.error;
}
process.exitCode = result.status ?? 1;
