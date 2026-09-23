export function createExplorer({ camera, canvas, dependencies }) {
  const controls = new dependencies.OrbitControls(camera, canvas);
  controls.enableDamping = true;
  controls.dampingFactor = 0.045;
  controls.enablePan = false;
  controls.minDistance = 8;
  controls.maxDistance = 46;
  // Camera motion remains entirely observer-driven. Automatic orbit makes a
  // static galaxy appear as though every star suddenly accelerated.
  controls.autoRotate = false;
  controls.enabled = false;

  return { controls, dependencies };
}
