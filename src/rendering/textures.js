import * as THREE from 'three';

let sharedPointTexture = null;

export function makeRingTexture() {
  const c = document.createElement('canvas');
  c.width = c.height = 256;
  const context = c.getContext('2d');
  const gradient = context.createRadialGradient(128, 128, 82, 128, 128, 128);
  gradient.addColorStop(0, 'rgba(255,255,255,0)');
  gradient.addColorStop(.72, 'rgba(255,255,255,0)');
  gradient.addColorStop(.86, 'rgba(255,255,255,.8)');
  gradient.addColorStop(.91, 'rgba(255,255,255,.18)');
  gradient.addColorStop(1, 'rgba(255,255,255,0)');
  context.fillStyle = gradient;
  context.fillRect(0, 0, 256, 256);
  const texture = new THREE.CanvasTexture(c);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

export function makeGlowTexture() {
  const c = document.createElement('canvas');
  c.width = c.height = 128;
  const context = c.getContext('2d');
  const gradient = context.createRadialGradient(64, 64, 0, 64, 64, 64);
  gradient.addColorStop(0, 'rgba(255,255,255,1)');
  gradient.addColorStop(.08, 'rgba(255,230,170,.85)');
  gradient.addColorStop(.35, 'rgba(255,190,100,.22)');
  gradient.addColorStop(1, 'rgba(0,0,0,0)');
  context.fillStyle = gradient;
  context.fillRect(0, 0, 128, 128);
  const texture = new THREE.CanvasTexture(c);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

export function getPointTexture() {
  if (sharedPointTexture) return sharedPointTexture;
  const c = document.createElement('canvas');
  c.width = c.height = 64;
  const context = c.getContext('2d');
  const gradient = context.createRadialGradient(32, 32, 0, 32, 32, 32);
  gradient.addColorStop(0, 'rgba(255,255,255,1)');
  gradient.addColorStop(.22, 'rgba(255,255,255,.95)');
  gradient.addColorStop(.5, 'rgba(255,255,255,.35)');
  gradient.addColorStop(1, 'rgba(255,255,255,0)');
  context.fillStyle = gradient;
  context.fillRect(0, 0, 64, 64);
  sharedPointTexture = new THREE.CanvasTexture(c);
  sharedPointTexture.colorSpace = THREE.SRGBColorSpace;
  return sharedPointTexture;
}
