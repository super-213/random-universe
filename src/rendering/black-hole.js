import * as THREE from 'three';

let accretionTexture = null;
let flowTexture = null;
let haloTexture = null;

function createCanvasTexture(draw) {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 1024;
  const context = canvas.getContext('2d');
  draw(context, canvas.width);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.minFilter = THREE.LinearMipmapLinearFilter;
  texture.magFilter = THREE.LinearFilter;
  return texture;
}

function ellipsePath(context, x, y, radiusX, radiusY, rotation, start = 0, end = Math.PI * 2) {
  context.beginPath();
  context.ellipse(x, y, radiusX, radiusY, rotation, start, end);
}

function makeAccretionTexture() {
  if (accretionTexture) return accretionTexture;
  accretionTexture = createCanvasTexture((context, size) => {
    const center = size / 2;
    const diskGradient = context.createLinearGradient(96, center, size - 96, center);
    diskGradient.addColorStop(0, 'rgba(255,255,255,0)');
    diskGradient.addColorStop(.12, 'rgba(255,221,174,.18)');
    diskGradient.addColorStop(.35, 'rgba(255,245,222,.76)');
    diskGradient.addColorStop(.5, 'rgba(255,255,255,1)');
    diskGradient.addColorStop(.66, 'rgba(255,232,199,.82)');
    diskGradient.addColorStop(.88, 'rgba(255,179,126,.2)');
    diskGradient.addColorStop(1, 'rgba(255,255,255,0)');

    // The broad, low-contrast material is drawn first so the silhouette stays
    // perfectly black while the disc can bloom beyond its sharp inner edge.
    context.save();
    context.globalCompositeOperation = 'lighter';
    context.filter = 'blur(34px)';
    context.strokeStyle = diskGradient;
    context.lineCap = 'round';
    context.lineWidth = 62;
    ellipsePath(context, center, center + 7, 360, 74, -.1);
    context.stroke();
    context.filter = 'blur(15px)';
    context.lineWidth = 22;
    ellipsePath(context, center, center + 4, 325, 62, -.1);
    context.stroke();
    context.restore();

    // Relativistic lensing lifts the far side of the disc above and below the
    // horizon. Two unequal arcs keep the result organic rather than emblematic.
    context.save();
    context.globalCompositeOperation = 'lighter';
    context.lineCap = 'round';
    context.strokeStyle = diskGradient;
    context.filter = 'blur(13px)';
    context.lineWidth = 34;
    ellipsePath(context, center - 2, center + 3, 118, 164, -.08, Math.PI * 1.03, Math.PI * 1.98);
    context.stroke();
    context.lineWidth = 25;
    ellipsePath(context, center + 2, center + 4, 121, 161, -.08, .03, Math.PI * .97);
    context.stroke();
    context.filter = 'none';
    context.lineWidth = 7;
    context.strokeStyle = 'rgba(255,250,232,.92)';
    ellipsePath(context, center - 2, center + 3, 116, 160, -.08, Math.PI * 1.05, Math.PI * 1.95);
    context.stroke();
    context.strokeStyle = 'rgba(255,221,180,.72)';
    ellipsePath(context, center + 2, center + 4, 119, 158, -.08, .07, Math.PI * .93);
    context.stroke();
    context.restore();

    // Fine concentric strands give the accretion flow depth at close zoom.
    context.save();
    context.globalCompositeOperation = 'lighter';
    context.lineCap = 'round';
    for (let index = 0; index < 12; index++) {
      const radiusX = 164 + index * 16;
      const radiusY = 28 + index * 3.25;
      const alpha = .2 - index * .011;
      context.strokeStyle = `rgba(255,238,210,${alpha})`;
      context.lineWidth = index < 4 ? 3.5 : 2;
      ellipsePath(context, center, center + 6, radiusX, radiusY, -.1);
      context.stroke();
    }
    context.restore();

    // The event horizon is deliberately opaque: background stars disappear
    // instead of shining through the transparent visual layers.
    const horizon = context.createRadialGradient(center - 18, center - 20, 6, center, center, 105);
    horizon.addColorStop(0, 'rgba(0,0,0,1)');
    horizon.addColorStop(.78, 'rgba(0,0,0,1)');
    horizon.addColorStop(.94, 'rgba(1,1,2,.995)');
    horizon.addColorStop(1, 'rgba(0,0,0,0)');
    context.fillStyle = horizon;
    context.fillRect(center - 112, center - 112, 224, 224);

    // Photon sphere and the approaching side of the disc sit in front of the
    // silhouette, reproducing the bright slash in the supplied reference.
    context.save();
    context.globalCompositeOperation = 'lighter';
    context.filter = 'blur(12px)';
    context.strokeStyle = 'rgba(255,244,220,.86)';
    context.lineWidth = 24;
    ellipsePath(context, center, center, 103, 106, -.08);
    context.stroke();
    context.filter = 'none';
    context.strokeStyle = 'rgba(255,255,247,.98)';
    context.lineWidth = 6;
    ellipsePath(context, center, center, 102, 105, -.08);
    context.stroke();

    const foregroundGradient = context.createLinearGradient(130, center + 58, size - 120, center - 32);
    foregroundGradient.addColorStop(0, 'rgba(255,184,126,0)');
    foregroundGradient.addColorStop(.2, 'rgba(255,207,158,.55)');
    foregroundGradient.addColorStop(.43, 'rgba(255,251,231,.98)');
    foregroundGradient.addColorStop(.66, 'rgba(255,244,219,.94)');
    foregroundGradient.addColorStop(.9, 'rgba(255,166,112,.34)');
    foregroundGradient.addColorStop(1, 'rgba(255,166,112,0)');
    context.strokeStyle = foregroundGradient;
    context.lineCap = 'round';
    context.filter = 'blur(11px)';
    context.lineWidth = 28;
    context.beginPath();
    context.moveTo(132, center + 103);
    context.bezierCurveTo(318, center + 83, 638, center - 54, 908, center - 90);
    context.stroke();
    context.filter = 'none';
    context.lineWidth = 9;
    context.stroke();
    context.restore();
  });
  return accretionTexture;
}

function makeFlowTexture() {
  if (flowTexture) return flowTexture;
  flowTexture = createCanvasTexture((context, size) => {
    const center = size / 2;
    context.globalCompositeOperation = 'lighter';
    context.lineCap = 'round';
    for (let index = 0; index < 18; index++) {
      const angle = index / 18 * Math.PI * 2;
      const radius = 108 + (index % 3) * 17;
      const arcLength = .11 + (index % 4) * .035;
      context.strokeStyle = `rgba(255,255,245,${.24 + (index % 5) * .07})`;
      context.lineWidth = 2 + index % 3;
      ellipsePath(context, center, center, radius, radius * .9, -.08, angle, angle + arcLength);
      context.stroke();
    }
    context.filter = 'blur(9px)';
    context.strokeStyle = 'rgba(255,238,209,.42)';
    context.lineWidth = 10;
    ellipsePath(context, center, center, 118, 111, -.08, .14, Math.PI * .72);
    context.stroke();
  });
  return flowTexture;
}

function makeHaloTexture() {
  if (haloTexture) return haloTexture;
  haloTexture = createCanvasTexture((context, size) => {
    const center = size / 2;
    const halo = context.createRadialGradient(center, center, 44, center, center, 430);
    halo.addColorStop(0, 'rgba(255,250,232,.7)');
    halo.addColorStop(.18, 'rgba(255,226,190,.38)');
    halo.addColorStop(.42, 'rgba(255,180,119,.1)');
    halo.addColorStop(.72, 'rgba(255,139,84,.025)');
    halo.addColorStop(1, 'rgba(255,255,255,0)');
    context.fillStyle = halo;
    context.fillRect(0, 0, size, size);
  });
  return haloTexture;
}

export function createBlackHoleVisual({
  color = 0xffc58f,
  tilt = 0,
  phase = 0,
  visualScale = 1,
  intensity = 1
} = {}) {
  const group = new THREE.Group();
  const halo = new THREE.Sprite(new THREE.SpriteMaterial({
    map: makeHaloTexture(),
    color,
    transparent: true,
    opacity: 0,
    depthWrite: false,
    blending: THREE.AdditiveBlending
  }));
  halo.scale.setScalar(2.65 * visualScale);

  const accretion = new THREE.Sprite(new THREE.SpriteMaterial({
    map: makeAccretionTexture(),
    color,
    transparent: true,
    opacity: 0,
    alphaTest: .006,
    depthWrite: false,
    blending: THREE.NormalBlending,
    rotation: tilt
  }));
  accretion.scale.setScalar(2.2 * visualScale);

  const flow = new THREE.Sprite(new THREE.SpriteMaterial({
    map: makeFlowTexture(),
    color,
    transparent: true,
    opacity: 0,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    rotation: tilt
  }));
  flow.scale.setScalar(2.2 * visualScale);

  // A low-opacity additive copy acts as localized bloom without requiring a
  // full-scene post-processing pass. Black pixels add nothing, so the event
  // horizon remains absolute while only the hot matter gains intensity.
  const bloom = new THREE.Sprite(new THREE.SpriteMaterial({
    map: makeAccretionTexture(),
    color,
    transparent: true,
    opacity: 0,
    alphaTest: .006,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    rotation: tilt
  }));
  bloom.scale.setScalar(2.2 * visualScale);

  const horizon = new THREE.Mesh(
    new THREE.SphereGeometry(.235 * visualScale, 32, 20),
    new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0 })
  );
  horizon.renderOrder = 2;
  halo.renderOrder = 1;
  accretion.renderOrder = 3;
  bloom.renderOrder = 4;
  flow.renderOrder = 5;
  group.add(halo, horizon, accretion, bloom, flow);
  group.userData.blackHoleVisual = {
    halo,
    horizon,
    accretion,
    bloom,
    flow,
    intensity: 0,
    visibility: 1,
    baseTilt: tilt,
    phase,
    visualScale
  };
  setBlackHoleIntensity(group, intensity);
  return group;
}

export function setBlackHoleIntensity(group, intensity, visibility = 1) {
  const visual = group.userData.blackHoleVisual;
  if (!visual) return;
  const normalized = THREE.MathUtils.clamp(intensity, 0, 1.4);
  const opacity = THREE.MathUtils.clamp(visibility, 0, 1);
  visual.intensity = normalized;
  visual.visibility = opacity;
  // Keep a formed event horizon visually black while still allowing its birth
  // and final evaporation to cross-fade with the luminous layers.
  visual.horizon.material.opacity = THREE.MathUtils.smoothstep(normalized, 0, .24) * opacity;
  visual.horizon.visible = normalized * opacity > .001;
  visual.accretion.material.opacity = Math.min(1, normalized * .92) * opacity;
  visual.bloom.material.opacity = Math.min(.34, normalized * .27) * opacity;
  visual.flow.material.opacity = Math.min(.82, normalized * .5) * opacity;
  visual.halo.material.opacity = Math.min(.7, normalized * .42) * opacity;
}

export function animateBlackHoleVisual(group, now, direction = 1) {
  const visual = group.userData.blackHoleVisual;
  if (!visual || visual.intensity <= 0) return;
  const time = now * .001;
  const pulse = 1 + Math.sin(time * .72 + visual.phase) * .035;
  const shimmer = .82 + Math.sin(time * 1.7 + visual.phase * 1.9) * .18;
  visual.halo.scale.setScalar(2.65 * visual.visualScale * pulse);
  visual.halo.material.opacity = Math.min(.7, visual.intensity * (.36 + shimmer * .09)) * visual.visibility;
  visual.bloom.material.opacity = Math.min(.36, visual.intensity * (.22 + shimmer * .07)) * visual.visibility;
  visual.flow.material.rotation = visual.baseTilt + direction * Math.sin(time * .44 + visual.phase) * .055;
  visual.flow.material.opacity = Math.min(.82, visual.intensity * (.38 + shimmer * .15)) * visual.visibility;
}
