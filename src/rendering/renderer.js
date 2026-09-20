import * as THREE from 'three';

function configureRenderer(renderer) {
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  renderer.setSize(innerWidth, innerHeight);
  renderer.setClearColor(0x050508, 1);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.15;
  return renderer;
}

export async function createUniverseRenderer(canvas) {
  const url = new URL(window.location.href);
  if (url.searchParams.has('renderer')) {
    url.searchParams.delete('renderer');
    window.history.replaceState(null, '', url);
  }
  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: false,
    powerPreference: 'high-performance'
  });
  return { renderer: configureRenderer(renderer), backend: 'WebGL' };
}
