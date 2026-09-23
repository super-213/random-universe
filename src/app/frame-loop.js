export function createFrameLoop(onFrame) {
  let frameId = null;
  let disposed = false;

  function tick(now) {
    frameId = null;
    if (disposed || document.hidden) return;
    frameId = requestAnimationFrame(tick);
    onFrame(now);
  }

  return {
    start() {
      if (disposed || document.hidden || frameId !== null) return;
      frameId = requestAnimationFrame(tick);
    },
    stop() {
      if (frameId === null) return;
      cancelAnimationFrame(frameId);
      frameId = null;
    },
    dispose() {
      disposed = true;
      this.stop();
    }
  };
}
