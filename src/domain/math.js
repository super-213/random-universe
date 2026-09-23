export function clamp(value, minimum, maximum) {
  return Math.max(minimum, Math.min(maximum, value));
}

export function smoothstep(value, minimum, maximum) {
  if (value <= minimum) return 0;
  if (value >= maximum) return 1;
  const progress = (value - minimum) / (maximum - minimum);
  return progress * progress * (3 - 2 * progress);
}
