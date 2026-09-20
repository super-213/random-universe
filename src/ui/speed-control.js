export const speedExponentMin = -2;
export const speedExponentMax = 2;
export const speedSnapExponents = [-1, 0, 1];

export function speedFromExponent(exponent) {
  const boundedExponent = Math.max(speedExponentMin, Math.min(speedExponentMax, Number(exponent)));
  return 10 ** boundedExponent;
}

export function snapSpeedExponent(exponent, threshold = .055) {
  const numericExponent = Number(exponent);
  const snapTarget = speedSnapExponents.find((target) => Math.abs(target - numericExponent) <= threshold);
  return snapTarget ?? numericExponent;
}

export function formatTimeSpeed(speed) {
  const numericSpeed = Number(speed);
  const decimals = numericSpeed < .1 ? 2 : numericSpeed < 10 ? 2 : numericSpeed < 100 ? 1 : 0;
  return `${numericSpeed.toFixed(decimals).replace(/\.0+$|(?<=\.[0-9])0+$/u, '')}×`;
}
