export function runWhenIdle(callback) {
  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(callback, { timeout: 1400 });
    return;
  }
  window.setTimeout(callback, 80);
}

export function yieldToMainThread() {
  if (globalThis.scheduler?.yield) return globalThis.scheduler.yield();
  return new Promise((resolve) => {
    requestAnimationFrame(() => window.setTimeout(resolve, 0));
  });
}
