export function gaussianRandom(random) {
  const u = Math.max(random(), 1e-7);
  const v = random();
  return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
}

export function randomBetween(random, min, max) { return min + random() * (max - min); }

const seedAlphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const seedGroupLength = 4;
const seedCharacterCount = 16;

function hashSeed128(value) {
  let h1 = 1779033703;
  let h2 = 3144134277;
  let h3 = 1013904242;
  let h4 = 2773480762;

  for (let index = 0; index < value.length; index++) {
    const character = value.charCodeAt(index);
    h1 = h2 ^ Math.imul(h1 ^ character, 597399067);
    h2 = h3 ^ Math.imul(h2 ^ character, 2869860233);
    h3 = h4 ^ Math.imul(h3 ^ character, 951274213);
    h4 = h1 ^ Math.imul(h4 ^ character, 2716044179);
  }

  h1 = Math.imul(h3 ^ h1 >>> 18, 597399067);
  h2 = Math.imul(h4 ^ h2 >>> 22, 2869860233);
  h3 = Math.imul(h1 ^ h3 >>> 17, 951274213);
  h4 = Math.imul(h2 ^ h4 >>> 19, 2716044179);

  h1 ^= h2 ^ h3 ^ h4;
  h2 ^= h1;
  h3 ^= h1;
  h4 ^= h1;

  return [h1 >>> 0, h2 >>> 0, h3 >>> 0, h4 >>> 0];
}

export function normalizeSeedCode(seed) {
  const value = String(seed).trim().toUpperCase();
  if (!/^(?:[A-Z0-9]{16}|[A-Z0-9]{4}(?:-[A-Z0-9]{4}){3})$/.test(value)) {
    throw new TypeError('Universe seed must contain exactly 16 letters or digits.');
  }
  const compact = value.replaceAll('-', '');
  return compact.match(new RegExp(`.{${seedGroupLength}}`, 'g')).join('-');
}

export function generateSeedCode() {
  const cryptoApi = globalThis.crypto;
  if (!cryptoApi?.getRandomValues) {
    throw new Error('Secure random number generation is unavailable.');
  }

  let compact = '';
  do {
    compact = '';
    while (compact.length < seedCharacterCount) {
      const bytes = cryptoApi.getRandomValues(new Uint8Array(seedCharacterCount));
      for (const byte of bytes) {
        // 252 is the largest multiple of 36 below 256, avoiding modulo bias.
        if (byte >= 252) continue;
        compact += seedAlphabet[byte % seedAlphabet.length];
        if (compact.length === seedCharacterCount) break;
      }
    }
  } while (!/[A-Z]/.test(compact) || !/[0-9]/.test(compact));

  return normalizeSeedCode(compact);
}

export function seedToUint32(seed) {
  return hashSeed128(normalizeSeedCode(seed))[0];
}

export function createSeededRandom(seed, namespace = 0) {
  let [a, b, c, d] = hashSeed128(`${normalizeSeedCode(seed)}:${namespace}`);

  return function random() {
    const result = ((a + b | 0) + d | 0) >>> 0;
    d = d + 1 | 0;
    a = b ^ b >>> 9;
    b = c + (c << 3) | 0;
    c = (c << 21 | c >>> 11);
    c = c + result | 0;
    return result / 4294967296;
  };
}
