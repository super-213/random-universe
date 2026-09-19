import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import './style.css';

const $ = (selector) => document.querySelector(selector);
const canvas = $('#universe');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
renderer.setSize(innerWidth, innerHeight);
renderer.setClearColor(0x050508, 1);
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.15;

const scene = new THREE.Scene();
scene.fog = new THREE.FogExp2(0x050508, 0.018);
const camera = new THREE.PerspectiveCamera(42, innerWidth / innerHeight, 0.1, 200);
camera.position.set(0, 0.5, 32);

const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.dampingFactor = 0.045;
controls.enablePan = false;
controls.minDistance = 8;
controls.maxDistance = 46;
controls.autoRotate = true;
controls.autoRotateSpeed = 0.18;
controls.enabled = false;

let universeGroup = new THREE.Group();
let galaxyGroup = new THREE.Group();
let epochEffectsGroup = new THREE.Group();
let remnantGroup = new THREE.Group();
let heatDeathGroup = new THREE.Group();
let cosmicEventGroup = new THREE.Group();
scene.add(universeGroup, galaxyGroup, epochEffectsGroup, remnantGroup, heatDeathGroup, cosmicEventGroup);

let universe = null;
let mode = 'generator';
let transition = null;
let pointer = new THREE.Vector2(0, 0);
let smoothedPointer = new THREE.Vector2(0, 0);
let raycaster = new THREE.Raycaster();
raycaster.params.Points.threshold = 0.12;
let clickableStars = null;
let civilizationGroups = [];
let civilizationData = [];
let battleGroup = new THREE.Group();
scene.add(battleGroup);
let blackHoleRemnants = [];
let primordialParticles = null;
let primordialDirections = null;
let primordialFactors = null;
let expansionStreaks = null;
let expansionDirections = null;
let bangCore = null;
let shockwaves = [];
let coldPhotons = null;
let originalPhotonPositions = null;
let originalPhotonColors = null;
let stellarRemnants = null;
let originalGalaxyPositions = null;
let originalGalaxyColors = null;
let starDeathThresholds = null;
let galaxyDriftVectors = null;
let originalRemnantPositions = null;
let remnantDriftVectors = null;
let cosmicPosition = 500;
let timePlaying = false;
let timeSpeed = 1;
let lastFrame = performance.now();
let lastEventKey = '';
let eventFadeTimer = null;
let sharedPointTexture = null;
let cosmicEvents = [];
let activeCosmicEvent = null;

const notes = [
  '一次偶然涨落，六条全新的自然法则。',
  '这里的星光，以陌生的速度穿过真空。',
  '引力写下结构，时间负责把它读完。',
  '一个从未存在过，也不会再次出现的宇宙。',
  '尘埃正在聚集，第一颗恒星即将点亮。'
];
const galaxyRoots = ['赫利俄斯', '弥涅耳瓦', '伊奥', '俄耳甫斯', '忒弥斯', '厄里倪厄斯', '欧律狄刻', '阿斯忒里亚'];
const galaxyTypes = ['棒旋星系', '絮状螺旋星系', '环状星系', '椭圆星系', '不规则星系'];
const speciesNames = ['赛里安共同体', '洛珂蜂群', '弧光联盟', '静默者', '澄海文明', '铸星者'];
const speciesColors = [0xd8ff5f, 0xff7b6b, 0x69b8ff, 0xe78cff, 0xffc65c, 0x62e6cf];
const eras = [
  { until: 55, name: '大爆炸', time: '最初三分钟', description: '时空展开，基本粒子从炽热的量子海中凝结。' },
  { until: 145, name: '黑暗时代', time: '38 万年', description: '宇宙变得透明，但第一颗恒星尚未点亮。' },
  { until: 260, name: '宇宙黎明', time: '1.8 亿年', description: '首批恒星燃烧，重元素开始在超新星中锻造。' },
  { until: 390, name: '星系生长', time: '32 亿年', description: '引力编织出星系、恒星与行星系统。' },
  { until: 610, name: '生命窗口', time: '138 亿年', description: '恒星照亮宇宙，复杂生命与文明开始扩张。' },
  { until: 745, name: '最后的恒星', time: '1,000 亿年', description: '新恒星不再诞生，红矮星成为最后的光源。' },
  { until: 875, name: '简并时代', time: '10¹⁴ 年', description: '只剩白矮星、中子星与冰冷行星在黑暗中漂流。' },
  { until: 970, name: '黑洞时代', time: '10⁴⁰ 年以后', description: '孤立黑洞在近乎空无的空间中缓慢蒸发。' },
  { until: 1001, name: '趋近热寂', time: '无限未来', description: '辐射持续红移，能量梯度无限趋近于零。' }
];

function mulberry32(seed) {
  return function random() {
    let t = seed += 0x6D2B79F5;
    t = Math.imul(t ^ t >>> 15, t | 1);
    t ^= t + Math.imul(t ^ t >>> 7, t | 61);
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}

function randomBetween(random, min, max) { return min + random() * (max - min); }

function gaussianRandom(random) {
  const u = Math.max(random(), 1e-7);
  const v = random();
  return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
}

function createUniverse(seed = Math.floor(Math.random() * 900000) + 100000) {
  const random = mulberry32(seed);
  const speed = randomBetween(random, 0.38, 1.84);
  const gravity = randomBetween(random, 0.52, 1.76);
  const elements = Math.floor(randomBetween(random, 36, 184));
  const stars = randomBetween(random, 0.12, 6.8);
  const lifeProbability = Math.pow(random(), 4) * 0.28;
  const civilizations = Math.max(0, Math.floor(stars * 1e5 * lifeProbability * randomBetween(random, 0.02, 0.7)));
  const lifetime = Math.floor(randomBetween(random, 18, 950) / Math.max(gravity * 0.7, 0.3));
  const armCount = Math.floor(randomBetween(random, 3, 7));
  const galaxyType = seed % galaxyTypes.length;
  const blackHoleProbability = [.96, .92, .72, .99, .34][galaxyType];
  const hasCentralBlackHole = random() < blackHoleProbability;
  const activeNucleus = hasCentralBlackHole && random() < [.1, .07, .05, .045, .025][galaxyType];
  const blackHoleEvaporationExponent = Math.floor(randomBetween(random, 97, 103));
  const hue = randomBetween(random, 0.48, 0.76);
  return { seed, random, speed, gravity, elements, stars, lifeProbability, civilizations, lifetime, blackHoleEvaporationExponent, armCount, galaxyType, hasCentralBlackHole, activeNucleus, hue };
}

function formatStars(value) {
  return value >= 1 ? `${value.toFixed(1)} 万亿颗` : `${Math.round(value * 10000)} 亿颗`;
}

function formatCivilizations(value) {
  return value === 0 ? '尚未出现' : `${new Intl.NumberFormat('zh-CN').format(value)} 个`;
}

function updateData() {
  $('#universe-id').textContent = `#${universe.seed}`;
  $('#explore-id').textContent = `#${universe.seed}`;
  $('#speed-value').textContent = `${universe.speed.toFixed(2)} × 本宇宙`;
  $('#gravity-value').textContent = `${universe.gravity.toFixed(2)} × 本宇宙`;
  $('#elements-value').textContent = `${universe.elements} 种`;
  $('#stars-value').textContent = formatStars(universe.stars);
  $('#civilizations-value').textContent = formatCivilizations(universe.civilizations);
  $('#lifetime-value').textContent = '渐近 · 无有限终点';
  $('#universe-note').textContent = notes[universe.seed % notes.length];
  $('#galaxy-name').textContent = `${galaxyRoots[universe.seed % galaxyRoots.length]}星系`;
  const diameter = (8 + universe.stars * 4.7).toFixed(1);
  $('#galaxy-meta').textContent = `${galaxyTypes[universe.galaxyType]} · 直径 ${diameter} 万光年`;
}

function disposeGroup(group) {
  group.traverse((object) => {
    if (object.geometry) object.geometry.dispose();
    if (object.material) {
      const materials = Array.isArray(object.material) ? object.material : [object.material];
      materials.forEach((material) => material.dispose());
    }
  });
  group.clear();
}

function buildUniverseObject() {
  disposeGroup(universeGroup);
  const random = mulberry32(universe.seed);

  const count = Math.min(10500, Math.floor(5200 + universe.stars * 900));
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  const sizes = new Float32Array(count);
  const base = new THREE.Color().setHSL(universe.hue, 0.55, 0.66);
  const warm = new THREE.Color(0xffd9aa);

  for (let i = 0; i < count; i++) {
    const radius = Math.pow(random(), 0.56) * 9.2;
    const theta = random() * Math.PI * 2;
    const phi = Math.acos(2 * random() - 1);
    const turbulence = Math.sin(theta * universe.armCount + radius) * 0.48;
    positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta) + turbulence;
    positions[i * 3 + 1] = radius * Math.cos(phi) * 0.82;
    positions[i * 3 + 2] = radius * Math.sin(phi) * Math.sin(theta);
    const color = base.clone().lerp(warm, Math.pow(random(), 2.3));
    const brightness = 0.45 + random() * 0.7;
    colors[i * 3] = color.r * brightness;
    colors[i * 3 + 1] = color.g * brightness;
    colors[i * 3 + 2] = color.b * brightness;
    sizes[i] = random();
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  geometry.setAttribute('aSize', new THREE.BufferAttribute(sizes, 1));
  const material = new THREE.PointsMaterial({ size: 0.065, map: getPointTexture(), alphaTest: .015, vertexColors: true, transparent: true, opacity: 0.86, depthWrite: false, blending: THREE.AdditiveBlending });
  const points = new THREE.Points(geometry, material);
  universeGroup.add(points);

  const shellGeometry = new THREE.IcosahedronGeometry(9.9, 3);
  const shell = new THREE.LineSegments(new THREE.WireframeGeometry(shellGeometry), new THREE.LineBasicMaterial({ color: 0xb9c7dc, transparent: true, opacity: 0.032 }));
  universeGroup.add(shell);

  const ring = new THREE.Mesh(
    new THREE.TorusGeometry(10.7, 0.007, 3, 220),
    new THREE.MeshBasicMaterial({ color: 0xd8ff5f, transparent: true, opacity: 0.25 })
  );
  ring.rotation.set(1.24, 0.18, 0.4);
  universeGroup.add(ring);

  universeGroup.rotation.set(0.15, -0.3, -0.08);
  universeGroup.scale.setScalar(0.01);
  transition = { type: 'birth', start: performance.now(), duration: prefersReducedMotion ? 1 : 1300 };
}

function buildGalaxy() {
  disposeGroup(galaxyGroup);
  disposeGroup(battleGroup);
  disposeGroup(epochEffectsGroup);
  disposeGroup(remnantGroup);
  disposeGroup(heatDeathGroup);
  disposeGroup(cosmicEventGroup);
  civilizationGroups = [];
  civilizationData = [];
  const random = mulberry32(universe.seed + 91);
  const count = 17000;
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  starDeathThresholds = new Float32Array(count);
  const core = new THREE.Color(0xffe7b4);
  const edge = new THREE.Color().setHSL(universe.hue, 0.65, 0.56);
  const irregularClumps = Array.from({ length: 4 + universe.seed % 3 }, (_, index) => ({
    x: randomBetween(random, -8, 8) + index * .35,
    y: randomBetween(random, -.6, .6),
    z: randomBetween(random, -6, 6),
    spread: randomBetween(random, 1.1, 3.1)
  }));

  for (let i = 0; i < count; i++) {
    let x = 0;
    let y = 0;
    let z = 0;

    if (universe.galaxyType === 0) {
      const selector = random();
      if (selector < .2) {
        x = gaussianRandom(random) * 3.7;
        z = gaussianRandom(random) * .42;
        y = gaussianRandom(random) * .18;
      } else if (selector < .29) {
        x = gaussianRandom(random) * 1.7;
        z = gaussianRandom(random) * 1.7;
        y = gaussianRandom(random) * .65;
      } else {
        const radius = 3 + Math.pow(random(), .72) * 11;
        const arm = i % 2;
        const angle = arm * Math.PI + (radius - 3) * .46 + gaussianRandom(random) * (.12 + radius * .012);
        const spread = gaussianRandom(random) * (.18 + radius * .025);
        x = Math.cos(angle) * radius + spread;
        z = Math.sin(angle) * radius + spread;
        y = gaussianRandom(random) * (.12 + radius * .018);
      }
    } else if (universe.galaxyType === 1) {
      const arms = 7 + universe.seed % 5;
      const radius = Math.pow(random(), .68) * 14;
      const arm = i % arms;
      const angle = arm / arms * Math.PI * 2 + radius * .31 + gaussianRandom(random) * (.26 + radius * .018);
      const patch = 1 + Math.sin(radius * 2.7 + arm * 1.9) * .11;
      x = Math.cos(angle) * radius * patch + gaussianRandom(random) * .25;
      z = Math.sin(angle) * radius * patch + gaussianRandom(random) * .25;
      y = gaussianRandom(random) * (.18 + radius * .028);
    } else if (universe.galaxyType === 2) {
      const selector = random();
      const angle = random() * Math.PI * 2;
      let radius;
      if (selector < .72) radius = 8.4 + gaussianRandom(random) * .78;
      else if (selector < .9) radius = Math.abs(gaussianRandom(random)) * 2.1;
      else radius = 4 + random() * 8;
      x = Math.cos(angle) * radius * 1.15 + gaussianRandom(random) * .13;
      z = Math.sin(angle) * radius + gaussianRandom(random) * .13;
      y = gaussianRandom(random) * (.18 + radius * .012);
    } else if (universe.galaxyType === 3) {
      const falloff = Math.pow(random(), .38);
      x = gaussianRandom(random) * 5.5 * falloff;
      y = gaussianRandom(random) * 2.35 * falloff;
      z = gaussianRandom(random) * 3.75 * falloff;
      const radius = Math.hypot(x, y, z);
      if (radius > 13.5) {
        const scale = 13.5 / radius;
        x *= scale; y *= scale; z *= scale;
      }
    } else {
      if (random() < .13) {
        const tail = randomBetween(random, -12, 12);
        x = tail;
        z = Math.sin(tail * .24) * 2.7 + gaussianRandom(random) * .7;
        y = gaussianRandom(random) * .55;
      } else {
        const clump = irregularClumps[Math.floor(random() * irregularClumps.length)];
        x = clump.x + gaussianRandom(random) * clump.spread;
        y = clump.y + gaussianRandom(random) * clump.spread * .38;
        z = clump.z + gaussianRandom(random) * clump.spread * .72;
      }
    }

    positions[i * 3] = x;
    positions[i * 3 + 1] = y;
    positions[i * 3 + 2] = z;
    const radius = Math.hypot(x, y, z);
    const color = core.clone().lerp(edge, Math.min(1, radius / 12));
    const brightness = 0.55 + random() * 0.85;
    colors[i * 3] = color.r * brightness;
    colors[i * 3 + 1] = color.g * brightness;
    colors[i * 3 + 2] = color.b * brightness;
    starDeathThresholds[i] = 635 + Math.pow(random(), 1.75) * 175;
  }

  originalGalaxyPositions = positions.slice();
  originalGalaxyColors = colors.slice();
  galaxyDriftVectors = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const x = positions[i * 3];
    const y = positions[i * 3 + 1];
    const z = positions[i * 3 + 2];
    const length = Math.max(.2, Math.hypot(x, y, z));
    const fate = random();
    const strength = fate < .06 ? -randomBetween(random, .18, .52) : fate < .72 ? randomBetween(random, .3, 1.28) : 0;
    const tangentX = -z / length;
    const tangentZ = x / length;
    galaxyDriftVectors[i * 3] = strength === 0 ? 0 : x / length * strength + tangentX * gaussianRandom(random) * .22;
    galaxyDriftVectors[i * 3 + 1] = strength === 0 ? 0 : y / length * strength + gaussianRandom(random) * .13;
    galaxyDriftVectors[i * 3 + 2] = strength === 0 ? 0 : z / length * strength + tangentZ * gaussianRandom(random) * .22;
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  const points = new THREE.Points(geometry, new THREE.PointsMaterial({ size: 0.09, map: getPointTexture(), alphaTest: .015, vertexColors: true, transparent: true, opacity: 0.9, depthWrite: false, blending: THREE.AdditiveBlending }));
  galaxyGroup.add(points);
  clickableStars = points;

  const coreProfiles = [
    { scale: 4.3, opacity: .32 },
    { scale: 3.25, opacity: .22 },
    { scale: 1.55, opacity: .055 },
    { scale: 6.4, opacity: .46 },
    { scale: 1.2, opacity: .035 }
  ];
  const coreProfile = coreProfiles[universe.galaxyType];
  const coreGlow = new THREE.Sprite(new THREE.SpriteMaterial({ map: makeGlowTexture(), color: 0xffdca4, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending }));
  coreGlow.scale.set(coreProfile.scale, coreProfile.scale, 1);
  coreGlow.userData.isCoreGlow = true;
  coreGlow.userData.profile = coreProfile;
  galaxyGroup.add(coreGlow);

  if (universe.activeNucleus) {
    const agnGlow = new THREE.Sprite(new THREE.SpriteMaterial({ map: makeGlowTexture(), color: 0xd9ecff, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending }));
    agnGlow.scale.set(.72, .72, 1);
    agnGlow.userData.isAgnGlow = true;
    galaxyGroup.add(agnGlow);
    const jetGeometry = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0, -2.6, 0), new THREE.Vector3(0, 2.6, 0)]);
    const agnJet = new THREE.Line(jetGeometry, new THREE.LineBasicMaterial({ color: 0xa8d8ff, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending }));
    agnJet.rotation.z = .3;
    agnJet.userData.isAgnJet = true;
    galaxyGroup.add(agnJet);
  }

  const tilts = [0.72, 0.92, 0.62, 0.35, 0.78];
  galaxyGroup.rotation.set(tilts[universe.galaxyType], -0.25 + universe.galaxyType * .06, 0.06);
  galaxyGroup.visible = false;
  buildCivilizations(positions);
  buildEpochEffects(positions);
  buildCosmicEvents(positions);
}

function buildEpochEffects(starPositions) {
  const random = mulberry32(universe.seed + 771);
  blackHoleRemnants = [];

  const primordialCount = 4800;
  const primordialPositions = new Float32Array(primordialCount * 3);
  const primordialColors = new Float32Array(primordialCount * 3);
  primordialDirections = new Float32Array(primordialCount * 3);
  primordialFactors = new Float32Array(primordialCount);
  const hot = new THREE.Color(0xffffff);
  const plasma = new THREE.Color(0xff6d28);
  for (let i = 0; i < primordialCount; i++) {
    const theta = random() * Math.PI * 2;
    const phi = Math.acos(2 * random() - 1);
    const sinPhi = Math.sin(phi);
    primordialDirections[i * 3] = sinPhi * Math.cos(theta);
    primordialDirections[i * 3 + 1] = Math.cos(phi);
    primordialDirections[i * 3 + 2] = sinPhi * Math.sin(theta);
    primordialFactors[i] = .35 + Math.pow(random(), .42) * .85;
    const color = hot.clone().lerp(plasma, Math.pow(random(), .7));
    primordialColors[i * 3] = color.r;
    primordialColors[i * 3 + 1] = color.g;
    primordialColors[i * 3 + 2] = color.b;
  }
  const primordialGeometry = new THREE.BufferGeometry();
  primordialGeometry.setAttribute('position', new THREE.BufferAttribute(primordialPositions, 3));
  primordialGeometry.setAttribute('color', new THREE.BufferAttribute(primordialColors, 3));
  primordialParticles = new THREE.Points(primordialGeometry, new THREE.PointsMaterial({
    size: .24,
    map: getPointTexture(),
    alphaTest: .012,
    vertexColors: true,
    transparent: true,
    opacity: 1,
    depthWrite: false,
    blending: THREE.AdditiveBlending
  }));
  epochEffectsGroup.add(primordialParticles);

  const streakCount = 340;
  const streakPositions = new Float32Array(streakCount * 6);
  expansionDirections = new Float32Array(streakCount * 4);
  for (let i = 0; i < streakCount; i++) {
    const theta = random() * Math.PI * 2;
    const phi = Math.acos(2 * random() - 1);
    expansionDirections[i * 4] = Math.sin(phi) * Math.cos(theta);
    expansionDirections[i * 4 + 1] = Math.cos(phi);
    expansionDirections[i * 4 + 2] = Math.sin(phi) * Math.sin(theta);
    expansionDirections[i * 4 + 3] = .45 + random() * .75;
  }
  const streakGeometry = new THREE.BufferGeometry();
  streakGeometry.setAttribute('position', new THREE.BufferAttribute(streakPositions, 3));
  expansionStreaks = new THREE.LineSegments(streakGeometry, new THREE.LineBasicMaterial({
    color: 0xffc58d,
    transparent: true,
    opacity: .8,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  }));
  epochEffectsGroup.add(expansionStreaks);

  bangCore = new THREE.Sprite(new THREE.SpriteMaterial({
    map: makeGlowTexture(),
    color: 0xffffff,
    transparent: true,
    opacity: 1,
    depthWrite: false,
    blending: THREE.AdditiveBlending
  }));
  bangCore.scale.setScalar(.2);
  epochEffectsGroup.add(bangCore);

  shockwaves = [0xfff4df, 0xff9b54, 0x88bfff].map((color, index) => {
    const sprite = new THREE.Sprite(new THREE.SpriteMaterial({
      map: makeRingTexture(),
      color,
      transparent: true,
      opacity: 0,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    }));
    sprite.userData.offset = index * .13;
    epochEffectsGroup.add(sprite);
    return sprite;
  });

  const remnantCount = 1350;
  const remnantPositions = new Float32Array(remnantCount * 3);
  const remnantColors = new Float32Array(remnantCount * 3);
  originalRemnantPositions = new Float32Array(remnantCount * 3);
  remnantDriftVectors = new Float32Array(remnantCount * 3);
  for (let i = 0; i < remnantCount; i++) {
    const source = Math.floor(random() * starPositions.length / 3);
    const sourceOffset = source * 3;
    const x = starPositions[sourceOffset];
    const y = starPositions[sourceOffset + 1];
    const z = starPositions[sourceOffset + 2];
    remnantPositions[i * 3] = originalRemnantPositions[i * 3] = x;
    remnantPositions[i * 3 + 1] = originalRemnantPositions[i * 3 + 1] = y;
    remnantPositions[i * 3 + 2] = originalRemnantPositions[i * 3 + 2] = z;
    remnantDriftVectors[i * 3] = galaxyDriftVectors[sourceOffset] * 1.25;
    remnantDriftVectors[i * 3 + 1] = galaxyDriftVectors[sourceOffset + 1] * 1.25;
    remnantDriftVectors[i * 3 + 2] = galaxyDriftVectors[sourceOffset + 2] * 1.25;
    const remnantColor = new THREE.Color(random() > .28 ? 0x9bb6d9 : 0x8b3e32);
    remnantColors[i * 3] = remnantColor.r;
    remnantColors[i * 3 + 1] = remnantColor.g;
    remnantColors[i * 3 + 2] = remnantColor.b;
  }
  const remnantGeometry = new THREE.BufferGeometry();
  remnantGeometry.setAttribute('position', new THREE.BufferAttribute(remnantPositions, 3));
  remnantGeometry.setAttribute('color', new THREE.BufferAttribute(remnantColors, 3));
  stellarRemnants = new THREE.Points(remnantGeometry, new THREE.PointsMaterial({
    size: .12,
    map: getPointTexture(),
    alphaTest: .012,
    vertexColors: true,
    transparent: true,
    opacity: 0,
    depthWrite: false,
    blending: THREE.AdditiveBlending
  }));
  remnantGroup.add(stellarRemnants);
  remnantGroup.rotation.copy(galaxyGroup.rotation);

  const blackHoleCount = universe.hasCentralBlackHole ? 9 : 6;
  for (let i = 0; i < blackHoleCount; i++) {
    const hole = new THREE.Group();
    const isCentral = i === 0 && universe.hasCentralBlackHole;
    const baseScale = isCentral ? .9 : randomBetween(random, .3, .5);
    const horizon = new THREE.Mesh(new THREE.SphereGeometry(.32, 24, 16), new THREE.MeshBasicMaterial({ color: 0x000000 }));
    const photonRing = new THREE.Mesh(new THREE.TorusGeometry(.4, .018, 5, 72), new THREE.MeshBasicMaterial({ color: 0x7296bd, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending }));
    photonRing.rotation.x = Math.PI / 2;
    const hawkingGlow = new THREE.Sprite(new THREE.SpriteMaterial({ map: makeGlowTexture(), color: 0x6f9fcc, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending }));
    hawkingGlow.scale.set(1.2, 1.2, 1);
    const finalPulse = new THREE.Sprite(new THREE.SpriteMaterial({ map: makeGlowTexture(), color: 0xe8f4ff, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending }));
    finalPulse.scale.set(.2, .2, 1);
    hole.add(hawkingGlow, finalPulse, horizon, photonRing);
    if (isCentral) {
      hole.position.set(0, 0, 0);
    } else {
      const source = Math.floor(random() * starPositions.length / 3) * 3;
      hole.position.set(starPositions[source], starPositions[source + 1], starPositions[source + 2]);
    }
    hole.scale.setScalar(baseScale);
    hole.visible = false;
    hole.userData = {
      baseScale,
      birthAt: 848 + random() * 40,
      evaporationAt: isCentral ? 988 : 928 + Math.pow(random(), .46) * 57,
      horizon,
      photonRing,
      hawkingGlow,
      finalPulse
    };
    blackHoleRemnants.push(hole);
    remnantGroup.add(hole);
  }

  const photonCount = 260;
  const photonPositions = new Float32Array(photonCount * 3);
  const photonColors = new Float32Array(photonCount * 3);
  for (let i = 0; i < photonCount; i++) {
    const theta = random() * Math.PI * 2;
    const phi = Math.acos(2 * random() - 1);
    const radius = 4 + Math.pow(random(), 1 / 3) * 24;
    photonPositions[i * 3] = Math.sin(phi) * Math.cos(theta) * radius;
    photonPositions[i * 3 + 1] = Math.cos(phi) * radius;
    photonPositions[i * 3 + 2] = Math.sin(phi) * Math.sin(theta) * radius;
    const photonColor = new THREE.Color().setHSL(.56 + random() * .1, .18, .24 + random() * .16);
    photonColors[i * 3] = photonColor.r;
    photonColors[i * 3 + 1] = photonColor.g;
    photonColors[i * 3 + 2] = photonColor.b;
  }
  const photonGeometry = new THREE.BufferGeometry();
  photonGeometry.setAttribute('position', new THREE.BufferAttribute(photonPositions, 3));
  photonGeometry.setAttribute('color', new THREE.BufferAttribute(photonColors, 3));
  originalPhotonPositions = photonPositions.slice();
  originalPhotonColors = photonColors.slice();
  coldPhotons = new THREE.Points(photonGeometry, new THREE.PointsMaterial({
    size: .055,
    map: getPointTexture(),
    alphaTest: .01,
    vertexColors: true,
    transparent: true,
    opacity: 0,
    depthWrite: false,
    blending: THREE.AdditiveBlending
  }));
  heatDeathGroup.add(coldPhotons);

  epochEffectsGroup.visible = false;
  remnantGroup.visible = false;
  heatDeathGroup.visible = false;
}

function buildCosmicEvents(starPositions) {
  const random = mulberry32(universe.seed + 1447);
  cosmicEvents = [];
  activeCosmicEvent = null;

  const schedule = [
    { type: 'supernova', start: 300 + random() * 75, duration: 25, color: '#ff9a52' },
    { type: 'pulsar', start: 395 + random() * 65, duration: 31, color: '#68c8ff' },
    { type: 'supernova', start: 515 + random() * 65, duration: 23, color: '#ff6b52' },
    { type: 'pulsar', start: 630 + random() * 45, duration: 28, color: '#8ba8ff' },
    { type: 'black-hole-merger', start: 872 + random() * 12, duration: 32, color: '#c897ff' }
  ];

  const pickPosition = (preferCenter = false) => {
    let source = Math.floor(random() * starPositions.length / 3);
    const maxRadius = preferCenter ? 2.8 : 6.2;
    for (let attempt = 0; attempt < 140; attempt++) {
      const candidate = Math.floor(random() * starPositions.length / 3);
      const offset = candidate * 3;
      if (Math.hypot(starPositions[offset], starPositions[offset + 1], starPositions[offset + 2]) < maxRadius) {
        source = candidate;
        break;
      }
    }
    return new THREE.Vector3(starPositions[source * 3], starPositions[source * 3 + 1], starPositions[source * 3 + 2]);
  };

  schedule.forEach((data, index) => {
    const group = new THREE.Group();
    group.position.copy(pickPosition(data.type === 'black-hole-merger'));
    group.visible = false;
    cosmicEventGroup.add(group);

    if (data.type === 'supernova') {
      const innerFlash = new THREE.Sprite(new THREE.SpriteMaterial({ map: makeGlowTexture(), color: 0xffffff, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending }));
      const photosphere = new THREE.Sprite(new THREE.SpriteMaterial({ map: makeGlowTexture(), color: 0xffad63, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending }));
      const remnant = new THREE.Sprite(new THREE.SpriteMaterial({ map: getPointTexture(), color: 0xaed8ff, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending }));
      remnant.scale.set(.16, .16, 1);

      const ejectaCount = 620;
      const ejectaPositions = new Float32Array(ejectaCount * 3);
      const ejectaColors = new Float32Array(ejectaCount * 3);
      const ejectaDirections = new Float32Array(ejectaCount * 3);
      const ejectaVelocity = new Float32Array(ejectaCount);
      const ejectaDelay = new Float32Array(ejectaCount);
      const hot = new THREE.Color(0xfff0c7);
      const cool = new THREE.Color(0xff4b32);
      for (let i = 0; i < ejectaCount; i++) {
        const theta = random() * Math.PI * 2;
        const phi = Math.acos(2 * random() - 1);
        const clustered = 1 + Math.sin(theta * 5 + phi * 3) * .18 + (random() - .5) * .24;
        const direction = new THREE.Vector3(
          Math.sin(phi) * Math.cos(theta) * clustered,
          Math.cos(phi) * (1.08 + random() * .34),
          Math.sin(phi) * Math.sin(theta) * clustered
        ).normalize();
        ejectaDirections.set([direction.x, direction.y, direction.z], i * 3);
        ejectaVelocity[i] = 2.9 + Math.pow(random(), .48) * 5.2 + Math.abs(direction.y) * .85;
        ejectaDelay[i] = Math.pow(random(), 2.4) * .22;
        const color = hot.clone().lerp(cool, Math.pow(random(), .52));
        ejectaColors.set([color.r, color.g, color.b], i * 3);
      }
      const ejectaGeometry = new THREE.BufferGeometry();
      ejectaGeometry.setAttribute('position', new THREE.BufferAttribute(ejectaPositions, 3));
      ejectaGeometry.setAttribute('color', new THREE.BufferAttribute(ejectaColors, 3));
      const ejecta = new THREE.Points(ejectaGeometry, new THREE.PointsMaterial({ size: .1, map: getPointTexture(), alphaTest: .008, vertexColors: true, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending }));

      const shellCount = 280;
      const shellPositions = new Float32Array(shellCount * 3);
      const shellDirections = new Float32Array(shellCount * 3);
      const shellNoise = new Float32Array(shellCount);
      for (let i = 0; i < shellCount; i++) {
        const theta = random() * Math.PI * 2;
        const y = 2 * random() - 1;
        const radius = Math.sqrt(1 - y * y);
        shellDirections.set([Math.cos(theta) * radius, y, Math.sin(theta) * radius], i * 3);
        shellNoise[i] = random() * Math.PI * 2;
      }
      const shellGeometry = new THREE.BufferGeometry();
      shellGeometry.setAttribute('position', new THREE.BufferAttribute(shellPositions, 3));
      const shell = new THREE.Points(shellGeometry, new THREE.PointsMaterial({ color: 0xffd4a0, size: .072, map: getPointTexture(), alphaTest: .01, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending }));

      group.add(photosphere, innerFlash, ejecta, shell, remnant);
      group.userData.effect = { innerFlash, photosphere, remnant, ejecta, ejectaDirections, ejectaVelocity, ejectaDelay, shell, shellDirections, shellNoise };
    } else if (data.type === 'pulsar') {
      const core = new THREE.Sprite(new THREE.SpriteMaterial({ map: getPointTexture(), color: 0xf4fbff, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending }));
      const halo = new THREE.Sprite(new THREE.SpriteMaterial({ map: makeGlowTexture(), color: 0x4bb9ff, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending }));
      const nebula = new THREE.Sprite(new THREE.SpriteMaterial({ map: makeGlowTexture(), color: 0x1676b8, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending, rotation: random() * Math.PI }));
      const sweepGlow = new THREE.Sprite(new THREE.SpriteMaterial({ map: makeGlowTexture(), color: 0xc9edff, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending }));
      core.scale.set(.18, .18, 1);
      nebula.scale.set(3.6, 1.35, 1);

      const rotor = new THREE.Group();
      rotor.rotation.z = .58 + random() * .32;
      const jetCount = 420;
      const jetPositions = new Float32Array(jetCount * 3);
      const jetColors = new Float32Array(jetCount * 3);
      for (let i = 0; i < jetCount; i++) {
        const side = i % 2 ? 1 : -1;
        const distance = .16 + Math.pow(random(), .66) * 8.2;
        const width = .012 + distance * .014;
        const angle = random() * Math.PI * 2;
        jetPositions[i * 3] = Math.cos(angle) * width * random();
        jetPositions[i * 3 + 1] = side * distance;
        jetPositions[i * 3 + 2] = Math.sin(angle) * width * random();
        const brightness = .35 + Math.pow(1 - distance / 8.4, .45) * .65;
        jetColors.set([.38 * brightness, .76 * brightness, brightness], i * 3);
      }
      const jetGeometry = new THREE.BufferGeometry();
      jetGeometry.setAttribute('position', new THREE.BufferAttribute(jetPositions, 3));
      jetGeometry.setAttribute('color', new THREE.BufferAttribute(jetColors, 3));
      const jets = new THREE.Points(jetGeometry, new THREE.PointsMaterial({ size: .09, map: getPointTexture(), alphaTest: .008, vertexColors: true, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending }));
      rotor.add(jets);

      const fieldLines = [];
      for (let lineIndex = 0; lineIndex < 4; lineIndex++) {
        const points = [];
        const stretch = .5 + lineIndex * .18;
        for (let i = 0; i <= 80; i++) {
          const angle = i / 80 * Math.PI * 2;
          points.push(new THREE.Vector3(Math.cos(angle) * stretch, Math.sin(angle) * stretch * .34, Math.sin(angle * 2) * .08));
        }
        const field = new THREE.Line(new THREE.BufferGeometry().setFromPoints(points), new THREE.LineBasicMaterial({ color: 0x72cfff, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending }));
        field.rotation.set(random() * Math.PI, random() * Math.PI, random() * Math.PI);
        fieldLines.push(field);
        rotor.add(field);
      }

      const knots = [];
      for (let i = 0; i < 8; i++) {
        const knot = new THREE.Sprite(new THREE.SpriteMaterial({ map: getPointTexture(), color: 0x9bddff, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending }));
        knot.scale.set(.11, .11, 1);
        knot.userData.offset = i / 8;
        knot.userData.side = i % 2 ? 1 : -1;
        knots.push(knot);
        rotor.add(knot);
      }
      group.add(nebula, halo, sweepGlow, core, rotor);
      group.userData.effect = { core, halo, nebula, sweepGlow, rotor, jets, fieldLines, knots };
    } else {
      const makeHole = (color) => {
        const hole = new THREE.Group();
        const horizon = new THREE.Mesh(new THREE.SphereGeometry(.27, 28, 18), new THREE.MeshBasicMaterial({ color: 0x000000 }));
        const photonRing = new THREE.Mesh(new THREE.TorusGeometry(.34, .013, 5, 96), new THREE.MeshBasicMaterial({ color, transparent: true, opacity: .72, depthWrite: false, blending: THREE.AdditiveBlending }));
        photonRing.rotation.x = Math.PI / 2;
        const lensing = new THREE.Sprite(new THREE.SpriteMaterial({ map: makeRingTexture(), color, transparent: true, opacity: .14, depthWrite: false, blending: THREE.AdditiveBlending }));
        lensing.scale.set(1.08, 1.08, 1);
        hole.add(lensing, horizon, photonRing);
        hole.userData.photonRing = photonRing;
        return hole;
      };
      const orbitalPlane = new THREE.Group();
      orbitalPlane.rotation.set(.76, .18, .24);
      const holeA = makeHole(0xffba70);
      const holeB = makeHole(0x8bcfff);
      const remnantHole = makeHole(0xd9e9ff);
      remnantHole.scale.setScalar(1.24);
      remnantHole.visible = false;

      const makeTrail = (color) => {
        const positions = new Float32Array(84 * 3);
        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        return new THREE.Line(geometry, new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending }));
      };
      const trailA = makeTrail(0xff9b55);
      const trailB = makeTrail(0x79bfff);
      orbitalPlane.add(trailA, trailB, holeA, holeB, remnantHole);

      const mergerGlow = new THREE.Sprite(new THREE.SpriteMaterial({ map: makeGlowTexture(), color: 0xdceaff, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending }));
      const wavefronts = [];
      for (let waveIndex = 0; waveIndex < 3; waveIndex++) {
        const points = [];
        for (let i = 0; i < 128; i++) {
          const angle = i / 128 * Math.PI * 2;
          points.push(new THREE.Vector3(Math.cos(angle), Math.sin(angle), Math.sin(angle * 2 + waveIndex) * .04));
        }
        const wave = new THREE.LineLoop(new THREE.BufferGeometry().setFromPoints(points), new THREE.LineBasicMaterial({ color: waveIndex === 1 ? 0xd8c3ff : 0x8fc6ff, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending }));
        wave.rotation.set(.34 + waveIndex * .62, .2 + waveIndex * .41, waveIndex * .9);
        wavefronts.push(wave);
        group.add(wave);
      }
      group.add(orbitalPlane, mergerGlow);
      group.userData.effect = { orbitalPlane, holeA, holeB, remnantHole, trailA, trailB, mergerGlow, wavefronts };
    }

    cosmicEvents.push({
      ...data,
      group,
      id: `${data.type}-${index}-${universe.seed}`,
      label: data.type === 'supernova' ? '核坍缩超新星爆发' : data.type === 'pulsar' ? '脉冲星巨型耀斑' : '双黑洞合并'
    });
  });

  cosmicEventGroup.rotation.copy(galaxyGroup.rotation);
  cosmicEventGroup.visible = false;
  renderCosmicEventMarkers();
}

function renderCosmicEventMarkers() {
  const container = $('#cosmic-event-markers');
  container.innerHTML = '';
  cosmicEvents.forEach((event) => {
    const marker = document.createElement('button');
    marker.type = 'button';
    marker.className = 'event-marker';
    marker.style.left = `${event.start / 10}%`;
    marker.style.setProperty('--event-color', event.color);
    marker.setAttribute('aria-label', `${event.label}，${cosmicTimeLabel(event.start)}`);
    marker.addEventListener('click', () => {
      timePlaying = false;
      $('#toggle-time').textContent = '▶';
      const previewPhase = event.type === 'supernova' ? .12 : event.type === 'black-hole-merger' ? .64 : .5;
      updateCosmicTime(event.start + event.duration * previewPhase, true);
    });
    container.appendChild(marker);
  });
}

function buildCivilizations(starPositions) {
  const random = mulberry32(universe.seed + 410);
  const visibleCount = universe.civilizations === 0 ? 0 : Math.min(6, Math.max(2, Math.ceil(Math.log10(universe.civilizations + 1))));
  const legend = $('#civilization-legend');
  legend.innerHTML = '';
  for (let s = 0; s < visibleCount; s++) {
    const homeIndex = Math.floor(random() * (starPositions.length / 3));
    const home = new THREE.Vector3(starPositions[homeIndex * 3], starPositions[homeIndex * 3 + 1], starPositions[homeIndex * 3 + 2]);
    const candidates = [];
    for (let i = s; i < starPositions.length / 3; i += 18 + s * 2) {
      const point = new THREE.Vector3(starPositions[i * 3], starPositions[i * 3 + 1], starPositions[i * 3 + 2]);
      const distance = point.distanceTo(home);
      if (distance < 7.5 + random() * 2) candidates.push({ point, distance: distance + random() * 1.8 });
    }
    candidates.sort((a, b) => a.distance - b.distance);
    const maxColonies = Math.min(260, candidates.length);
    const colonyPositions = new Float32Array(maxColonies * 3);
    candidates.slice(0, maxColonies).forEach(({ point }, i) => {
      colonyPositions[i * 3] = point.x;
      colonyPositions[i * 3 + 1] = point.y;
      colonyPositions[i * 3 + 2] = point.z;
    });
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(colonyPositions, 3));
    geometry.setDrawRange(0, 0);
    const material = new THREE.PointsMaterial({ color: speciesColors[s], size: .2, map: getPointTexture(), alphaTest: .012, transparent: true, opacity: .95, depthWrite: false, blending: THREE.AdditiveBlending });
    const points = new THREE.Points(geometry, material);
    galaxyGroup.add(points);
    civilizationGroups.push(points);
    civilizationData.push({
      name: speciesNames[(universe.seed + s) % speciesNames.length],
      color: speciesColors[s], home, maxColonies,
      birth: 410 + s * 19 + Math.floor(random() * 34),
      extinction: random() > .74 ? 570 + Math.floor(random() * 65) : 710,
      aggression: random()
    });
    const color = `#${speciesColors[s].toString(16).padStart(6, '0')}`;
    legend.insertAdjacentHTML('beforeend', `<div class="civilization-item" style="--species:${color}" data-species="${s}"><i></i><span>${civilizationData[s].name}</span><b>0</b></div>`);
  }

  let battleCount = 0;
  const addBattle = (i, j, delay = 0) => {
    const a = civilizationData[i];
    const b = civilizationData[j];
    const points = new Float32Array([a.home.x, a.home.y, a.home.z, b.home.x, b.home.y, b.home.z]);
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(points, 3));
    const material = new THREE.LineDashedMaterial({ color: 0xff624f, transparent: true, opacity: 0, dashSize: .18, gapSize: .12 });
    const line = new THREE.Line(geometry, material);
    line.computeLineDistances();
    line.userData = { speciesA: i, speciesB: j, battleAt: Math.max(a.birth, b.birth) + 70 + delay };
    battleGroup.add(line);
    battleCount++;
  };

  for (let i = 0; i < civilizationData.length; i++) {
    for (let j = i + 1; j < civilizationData.length; j++) {
      const a = civilizationData[i];
      const b = civilizationData[j];
      if (a.home.distanceTo(b.home) > 10.5) continue;
      addBattle(i, j, Math.floor(random() * 65));
    }
  }
  if (battleCount === 0 && civilizationData.length > 1) {
    let nearest = { a: 0, b: 1, distance: Infinity };
    for (let i = 0; i < civilizationData.length; i++) {
      for (let j = i + 1; j < civilizationData.length; j++) {
        const distance = civilizationData[i].home.distanceTo(civilizationData[j].home);
        if (distance < nearest.distance) nearest = { a: i, b: j, distance };
      }
    }
    addBattle(nearest.a, nearest.b, 52);
  }
  battleGroup.rotation.copy(galaxyGroup.rotation);
}

function getPointTexture() {
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

function makeGlowTexture() {
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

function makeRingTexture() {
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

function regenerate() {
  if (mode !== 'generator') return;
  universe = createUniverse();
  updateData();
  buildUniverseObject();
  buildGalaxy();
  const flash = $('#creation-flash');
  flash.classList.remove('is-flashing');
  void flash.offsetWidth;
  flash.classList.add('is-flashing');
  document.querySelectorAll('.metric').forEach((metric) => {
    metric.style.animation = 'none';
    void metric.offsetWidth;
    metric.style.animation = '';
  });
}

function enterUniverse() {
  if (mode !== 'generator') return;
  mode = 'explorer';
  document.body.classList.add('is-exploring');
  $('#generator-view').classList.remove('is-active');
  $('#explorer-view').classList.add('is-active');
  $('#mode-label').textContent = '深空航行中';
  $('#regenerate-top').style.opacity = '0';
  $('#regenerate-top').style.pointerEvents = 'none';
  galaxyGroup.visible = true;
  galaxyGroup.scale.setScalar(0.02);
  controls.enabled = true;
  controls.target.set(0, 0, 0);
  cosmicPosition = 500;
  $('#cosmic-timeline').value = cosmicPosition;
  updateCosmicTime(cosmicPosition, true);
  transition = { type: 'enter', start: performance.now(), duration: prefersReducedMotion ? 1 : 2100 };
}

function leaveUniverse() {
  if (mode !== 'explorer') return;
  mode = 'generator';
  document.body.classList.remove('is-exploring', 'is-hud-hidden');
  $('#explorer-view').classList.remove('is-hud-hidden');
  $('#toggle-hud').setAttribute('aria-pressed', 'false');
  $('#toggle-hud').setAttribute('aria-label', '隐藏观察界面');
  $('#explorer-view').classList.remove('is-active');
  $('#generator-view').classList.add('is-active');
  $('#star-inspector').classList.remove('is-open');
  $('#mode-label').textContent = '创世引擎在线';
  $('#regenerate-top').style.opacity = '';
  $('#regenerate-top').style.pointerEvents = '';
  controls.enabled = false;
  epochEffectsGroup.visible = false;
  remnantGroup.visible = false;
  heatDeathGroup.visible = false;
  cosmicEventGroup.visible = false;
  transition = { type: 'leave', start: performance.now(), duration: prefersReducedMotion ? 1 : 1300 };
}

function easeOutExpo(t) { return t === 1 ? 1 : 1 - Math.pow(2, -10 * t); }
function easeInOutCubic(t) { return t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; }

function updateTransition(now) {
  if (!transition) return;
  const t = Math.min(1, (now - transition.start) / transition.duration);
  if (transition.type === 'birth') {
    const s = easeOutExpo(t);
    universeGroup.scale.setScalar(s);
    universeGroup.rotation.y = -0.3 + (1 - s) * 1.5;
  }
  if (transition.type === 'enter') {
    const e = easeInOutCubic(t);
    universeGroup.scale.setScalar(Math.max(0.001, 1 - e * 1.5));
    universeGroup.rotation.z += 0.018 * (1 - t);
    galaxyGroup.scale.setScalar(0.02 + easeOutExpo(t) * 0.98);
    camera.position.z = 32 - e * 12;
    camera.position.y = 0.5 + e * 4.2;
  }
  if (transition.type === 'leave') {
    const e = easeInOutCubic(t);
    galaxyGroup.scale.setScalar(1 - e * .96);
    universeGroup.scale.setScalar(e);
    camera.position.z = 20 + e * 12;
    camera.position.y = 4.7 - e * 4.2;
  }
  if (t === 1) {
    if (transition.type === 'enter') universeGroup.visible = false;
    if (transition.type === 'leave') { galaxyGroup.visible = false; universeGroup.visible = true; universeGroup.scale.setScalar(1); }
    transition = null;
  }
}

function inspectStar(event) {
  if (mode !== 'explorer' || transition || !clickableStars || cosmicPosition < 250 || cosmicPosition > 750) return;
  pointer.x = (event.clientX / innerWidth) * 2 - 1;
  pointer.y = -(event.clientY / innerHeight) * 2 + 1;
  raycaster.setFromCamera(pointer, camera);
  const hits = raycaster.intersectObject(clickableStars);
  if (!hits.length) return;
  const index = hits[0].index;
  const random = mulberry32(universe.seed + index * 31);
  const classes = ['M4 V', 'K1 III', 'G2 V', 'F8 V', 'A3 V', 'B1 Ia'];
  const type = classes[Math.floor(random() * classes.length)];
  const temps = { M: [2400, 3700], K: [3700, 5200], G: [5200, 6000], F: [6000, 7500], A: [7500, 10000], B: [10000, 30000] };
  const range = temps[type[0]];
  const temperature = Math.round(randomBetween(random, range[0], range[1]));
  const planets = Math.floor(random() * 13);
  const life = random() < universe.lifeProbability ? '候选信号' : '未检出';
  $('#star-name').textContent = `RU-${String(index).padStart(5, '0')}`;
  $('#star-type').textContent = type;
  $('#star-temp').textContent = `${new Intl.NumberFormat('zh-CN').format(temperature)} K`;
  $('#star-planets').textContent = planets;
  $('#star-life').textContent = life;
  $('#star-life').style.color = life === '候选信号' ? 'var(--accent)' : '';
  $('#star-inspector').classList.add('is-open');
}

function cosmicTimeLabel(position) {
  if (position < 18) return `T+${Math.max(0.001, position / 18 * 3).toFixed(3)} 秒`;
  if (position < 55) return `T+${Math.round((position - 18) / 37 * 180)} 秒`;
  if (position < 145) return `T+${Math.round(380000 * Math.pow((position - 55) / 90, 2))} 年`;
  if (position < 260) return `T+${(0.0038 + (position - 145) / 115 * 1.796).toFixed(2)} 亿年`;
  if (position < 425) return `T+${(1.8 + (position - 260) / 165 * 12).toFixed(1)} 亿年`;
  if (position < 610) return `T+${(13.8 + (position - 425) / 185 * 86.2).toFixed(1)} 亿年`;
  if (position < 745) return `T+${(100 + (position - 610) / 135 * 99900).toFixed(0)} 亿年`;
  if (position < 875) return `T+10^${Math.round(13 + (position - 745) / 130)} 年`;
  if (position < 970) return `T+10^${Math.round(14 + (position - 875) / 95 * (universe.blackHoleEvaporationExponent - 14))} 年`;
  return position < 999 ? `T+10^${universe.blackHoleEvaporationExponent} 年后` : '趋近热寂';
}

function timelineUnitsPerSecond(position) {
  // The first two eras and logarithmic deep-time eras stay cinematically compressed.
  // Across the linear "亿年" eras, 1× advances exactly 0.1 亿年 per second.
  if (position < 55) return 55 / 80;
  if (position < 145) return 90 / 90;
  if (position < 260) return .1 / (1.7962 / 115);
  if (position < 425) return .1 / (12 / 165);
  if (position < 610) return .1 / (86.2 / 185);
  if (position < 745) return .1 / (99900 / 135);
  if (position < 875) return 130 / 160;
  if (position < 970) return 95 / 160;
  return 30 / 100;
}

function advanceCosmicTime(deltaSeconds) {
  cosmicPosition += deltaSeconds * timelineUnitsPerSecond(cosmicPosition) * timeSpeed;
}

function setEvent(key, time, text, force = false) {
  if (key === lastEventKey && !force) return;
  lastEventKey = key;
  $('#event-year').textContent = time;
  $('#event-text').textContent = text;
  const feed = $('#event-feed');
  feed.classList.remove('is-visible');
  requestAnimationFrame(() => feed.classList.add('is-visible'));
  clearTimeout(eventFadeTimer);
  eventFadeTimer = setTimeout(() => feed.classList.remove('is-visible'), 3200);
}

function toggleHud() {
  if (mode !== 'explorer') return;
  const hidden = !$('#explorer-view').classList.contains('is-hud-hidden');
  $('#explorer-view').classList.toggle('is-hud-hidden', hidden);
  document.body.classList.toggle('is-hud-hidden', hidden);
  $('#toggle-hud').setAttribute('aria-pressed', String(hidden));
  $('#toggle-hud').setAttribute('aria-label', hidden ? '显示观察界面' : '隐藏观察界面');
}

function updateEpochVisuals(position) {
  const earlyVisible = position < 150 && mode === 'explorer';
  epochEffectsGroup.visible = earlyVisible;
  if (earlyVisible && primordialParticles) {
    const expansion = Math.min(1, position / 55);
    const radius = .04 + Math.pow(expansion, .46) * 25 + Math.max(0, position - 55) * .095;
    const array = primordialParticles.geometry.attributes.position.array;
    for (let i = 0; i < primordialFactors.length; i++) {
      const r = radius * primordialFactors[i];
      array[i * 3] = primordialDirections[i * 3] * r;
      array[i * 3 + 1] = primordialDirections[i * 3 + 1] * r;
      array[i * 3 + 2] = primordialDirections[i * 3 + 2] * r;
    }
    primordialParticles.geometry.attributes.position.needsUpdate = true;
    primordialParticles.material.opacity = position < 55 ? .95 : .95 * (1 - THREE.MathUtils.smoothstep(position, 55, 148));
    primordialParticles.material.size = .28 - expansion * .11;

    const streakArray = expansionStreaks.geometry.attributes.position.array;
    for (let i = 0; i < expansionDirections.length / 4; i++) {
      const factor = expansionDirections[i * 4 + 3];
      const head = (.15 + Math.pow(expansion, .52) * 29) * factor;
      const tail = Math.max(0, head - (1.2 + expansion * 5.5) * factor);
      for (let axis = 0; axis < 3; axis++) {
        const direction = expansionDirections[i * 4 + axis];
        streakArray[i * 6 + axis] = direction * tail;
        streakArray[i * 6 + 3 + axis] = direction * head;
      }
    }
    expansionStreaks.geometry.attributes.position.needsUpdate = true;
    expansionStreaks.material.opacity = Math.max(0, .92 * (1 - THREE.MathUtils.smoothstep(position, 18, 72)));

    const coreFade = 1 - THREE.MathUtils.smoothstep(position, 12, 66);
    bangCore.material.opacity = coreFade;
    const coreSize = .35 + Math.pow(expansion, .34) * 16;
    bangCore.scale.set(coreSize, coreSize, 1);

    shockwaves.forEach((wave, index) => {
      const offset = wave.userData.offset;
      const local = Math.max(0, Math.min(1, (expansion - offset) / (1 - offset)));
      const size = 2 + local * (32 + index * 8);
      wave.scale.set(size, size, 1);
      wave.material.opacity = Math.sin(local * Math.PI) * (.72 - index * .14);
    });
  }

  const normalBackground = new THREE.Color(0x050508);
  const currentBackground = normalBackground.clone();
  if (position < 70) {
    const cooling = THREE.MathUtils.smoothstep(position, 0, 70);
    currentBackground.lerpColors(new THREE.Color(0x2a1108), normalBackground, cooling);
    renderer.toneMappingExposure = 1.15 + (1 - cooling) * 2.2;
  } else if (position > 900) {
    const cooling = THREE.MathUtils.smoothstep(position, 900, 1000);
    currentBackground.lerpColors(normalBackground, new THREE.Color(0x010307), cooling);
    renderer.toneMappingExposure = 1.15 - cooling * .38;
  } else {
    renderer.toneMappingExposure = 1.15;
  }
  renderer.setClearColor(currentBackground, 1);
  scene.fog.color.copy(currentBackground);

  if (!clickableStars || !originalGalaxyPositions) return;
  const formation = THREE.MathUtils.smoothstep(position, 135, 290);
  const stellarPopulation = 1 - THREE.MathUtils.smoothstep(position, 625, 815);
  clickableStars.material.opacity = formation * .9;
  clickableStars.material.size = .09;
  if (!transition) galaxyGroup.scale.setScalar(1);

  const dynamicalEvaporation = THREE.MathUtils.smoothstep(position, 700, 968);
  const positionArray = clickableStars.geometry.attributes.position.array;
  const colorArray = clickableStars.geometry.attributes.color.array;
  const driftDistance = Math.pow(dynamicalEvaporation, 1.7) * 20;
  for (let i = 0; i < originalGalaxyPositions.length; i += 3) {
    const starIndex = i / 3;
    const alive = 1 - THREE.MathUtils.smoothstep(position, starDeathThresholds[starIndex], starDeathThresholds[starIndex] + 22);
    positionArray[i] = originalGalaxyPositions[i] + galaxyDriftVectors[i] * driftDistance;
    positionArray[i + 1] = originalGalaxyPositions[i + 1] + galaxyDriftVectors[i + 1] * driftDistance;
    positionArray[i + 2] = originalGalaxyPositions[i + 2] + galaxyDriftVectors[i + 2] * driftDistance;
    colorArray[i] = originalGalaxyColors[i] * alive;
    colorArray[i + 1] = originalGalaxyColors[i + 1] * alive;
    colorArray[i + 2] = originalGalaxyColors[i + 2] * alive;
  }
  clickableStars.geometry.attributes.position.needsUpdate = true;
  clickableStars.geometry.attributes.color.needsUpdate = true;

  const coreGlow = galaxyGroup.children.find((item) => item.userData.isCoreGlow);
  if (coreGlow) {
    const { scale, opacity } = coreGlow.userData.profile;
    coreGlow.material.opacity = formation * stellarPopulation * opacity;
    coreGlow.scale.set(scale, scale, 1);
  }
  const agnGlow = galaxyGroup.children.find((item) => item.userData.isAgnGlow);
  const agnJet = galaxyGroup.children.find((item) => item.userData.isAgnJet);
  if (agnGlow) {
    const activePhase = formation * (1 - THREE.MathUtils.smoothstep(position, 500, 650));
    agnGlow.material.opacity = activePhase * .82;
    agnGlow.scale.set(.72, .72, 1);
    agnJet.material.opacity = activePhase * .18;
  }

  const remnantsVisible = position > 665 && position < 978;
  const blackHolesVisible = position > 840 && position < 995;
  remnantGroup.visible = (remnantsVisible || blackHolesVisible) && mode === 'explorer';
  if (remnantsVisible && stellarRemnants) {
    const remnantBirth = THREE.MathUtils.smoothstep(position, 665, 760);
    const remnantFade = 1 - THREE.MathUtils.smoothstep(position, 892, 974);
    stellarRemnants.material.opacity = remnantBirth * remnantFade * .64;
    const remnantDecay = THREE.MathUtils.smoothstep(position, 760, 968);
    const remnantDistance = Math.pow(remnantDecay, 1.55) * 23;
    const remnantArray = stellarRemnants.geometry.attributes.position.array;
    for (let i = 0; i < originalRemnantPositions.length; i += 3) {
      remnantArray[i] = originalRemnantPositions[i] + remnantDriftVectors[i] * remnantDistance;
      remnantArray[i + 1] = originalRemnantPositions[i + 1] + remnantDriftVectors[i + 1] * remnantDistance;
      remnantArray[i + 2] = originalRemnantPositions[i + 2] + remnantDriftVectors[i + 2] * remnantDistance;
    }
    stellarRemnants.geometry.attributes.position.needsUpdate = true;
  }

  blackHoleRemnants.forEach((hole) => {
    const data = hole.userData;
    const born = THREE.MathUtils.smoothstep(position, data.birthAt, data.birthAt + 7);
    const remaining = 1 - THREE.MathUtils.smoothstep(position, data.evaporationAt - 24, data.evaporationAt);
    const lateEvaporation = THREE.MathUtils.smoothstep(position, data.evaporationAt - 15, data.evaporationAt);
    const pulseWindow = 3.2;
    const pulseDistance = Math.abs(position - data.evaporationAt);
    const pulse = pulseDistance < pulseWindow ? Math.sin((1 - pulseDistance / pulseWindow) * Math.PI / 2) : 0;
    hole.visible = mode === 'explorer' && position >= data.birthAt && position <= data.evaporationAt + pulseWindow;
    const massScale = data.baseScale * (.18 + .82 * Math.cbrt(Math.max(0, remaining)));
    hole.scale.setScalar(Math.max(.035, massScale));
    data.photonRing.material.opacity = born * remaining * .28;
    data.hawkingGlow.material.opacity = born * (.045 + lateEvaporation * .3) * remaining;
    data.finalPulse.material.opacity = pulse * .62;
    const pulseScale = .18 + pulse * 1.35;
    data.finalPulse.scale.set(pulseScale, pulseScale, 1);
  });

  heatDeathGroup.visible = position > 895 && mode === 'explorer';
  if (coldPhotons && originalPhotonPositions && originalPhotonColors) {
    const radiationBirth = THREE.MathUtils.smoothstep(position, 895, 928);
    const redshift = THREE.MathUtils.smoothstep(position, 925, 1000);
    coldPhotons.material.opacity = radiationBirth * Math.pow(1 - redshift, 2.4) * .16;
    const photonArray = coldPhotons.geometry.attributes.position.array;
    const photonColors = coldPhotons.geometry.attributes.color.array;
    const expansion = 1 + redshift * 1.8;
    for (let i = 0; i < originalPhotonPositions.length; i += 3) {
      photonArray[i] = originalPhotonPositions[i] * expansion;
      photonArray[i + 1] = originalPhotonPositions[i + 1] * expansion;
      photonArray[i + 2] = originalPhotonPositions[i + 2] * expansion;
      photonColors[i] = originalPhotonColors[i] * (1 - redshift * .55) + redshift * .06;
      photonColors[i + 1] = originalPhotonColors[i + 1] * (1 - redshift * .88);
      photonColors[i + 2] = originalPhotonColors[i + 2] * (1 - redshift * .96);
    }
    coldPhotons.geometry.attributes.position.needsUpdate = true;
    coldPhotons.geometry.attributes.color.needsUpdate = true;
  }
}

function updateCosmicEvents(position) {
  activeCosmicEvent = null;
  let anyVisible = false;
  cosmicEvents.forEach((event) => {
    const phase = (position - event.start) / event.duration;
    const visible = phase >= 0 && phase <= 1 && mode === 'explorer';
    event.group.visible = visible;
    if (!visible) return;
    anyVisible = true;
    activeCosmicEvent = event;
    event.group.userData.phase = phase;
    const effect = event.group.userData.effect;

    if (event.type === 'supernova') {
      const ignition = THREE.MathUtils.smoothstep(phase, 0, .028);
      const flash = ignition * (1 - THREE.MathUtils.smoothstep(phase, .045, .19));
      const afterglow = (1 - THREE.MathUtils.smoothstep(phase, .12, 1)) * ignition;
      effect.innerFlash.material.opacity = flash * .98;
      const flashScale = .12 + Math.pow(Math.min(1, phase / .16), .28) * 2.1;
      effect.innerFlash.scale.set(flashScale, flashScale, 1);
      effect.photosphere.material.opacity = flash * .58 + afterglow * .2;
      const photosphereScale = .28 + Math.pow(phase, .56) * 5.4;
      effect.photosphere.scale.set(photosphereScale, photosphereScale * .9, 1);
      effect.remnant.material.opacity = THREE.MathUtils.smoothstep(phase, .2, .52) * (1 - THREE.MathUtils.smoothstep(phase, .82, 1)) * .72;

      const ejectaArray = effect.ejecta.geometry.attributes.position.array;
      for (let i = 0; i < effect.ejectaVelocity.length; i++) {
        const local = THREE.MathUtils.clamp((phase - effect.ejectaDelay[i]) / (1 - effect.ejectaDelay[i]), 0, 1);
        const distance = .05 + Math.pow(local, .58) * effect.ejectaVelocity[i];
        const turbulence = Math.sin(local * 10 + i * 1.73) * local * .045;
        const offset = i * 3;
        ejectaArray[offset] = effect.ejectaDirections[offset] * distance + turbulence * effect.ejectaDirections[offset + 1];
        ejectaArray[offset + 1] = effect.ejectaDirections[offset + 1] * distance + turbulence * effect.ejectaDirections[offset + 2];
        ejectaArray[offset + 2] = effect.ejectaDirections[offset + 2] * distance + turbulence * effect.ejectaDirections[offset];
      }
      effect.ejecta.geometry.attributes.position.needsUpdate = true;
      effect.ejecta.material.opacity = ignition * (1 - THREE.MathUtils.smoothstep(phase, .58, 1)) * .86;

      const shellArray = effect.shell.geometry.attributes.position.array;
      const shellRadius = .18 + (1 - Math.pow(1 - phase, 2.4)) * 8.5;
      for (let i = 0; i < effect.shellNoise.length; i++) {
        const offset = i * 3;
        const uneven = 1 + Math.sin(effect.shellNoise[i] + phase * 4.5) * .055 + Math.sin(i * 2.1) * .025;
        shellArray[offset] = effect.shellDirections[offset] * shellRadius * uneven;
        shellArray[offset + 1] = effect.shellDirections[offset + 1] * shellRadius * uneven;
        shellArray[offset + 2] = effect.shellDirections[offset + 2] * shellRadius * uneven;
      }
      effect.shell.geometry.attributes.position.needsUpdate = true;
      effect.shell.material.opacity = THREE.MathUtils.smoothstep(phase, .04, .14) * (1 - THREE.MathUtils.smoothstep(phase, .5, 1)) * .34;
    } else if (event.type === 'pulsar') {
      const envelope = Math.pow(Math.sin(phase * Math.PI), .45);
      effect.core.material.opacity = envelope * .92;
      effect.halo.material.opacity = envelope * .16;
      effect.nebula.material.opacity = envelope * .095;
      effect.halo.scale.set(1.05, 1.05, 1);
      effect.jets.material.opacity = envelope * .18;
      effect.fieldLines.forEach((field, fieldIndex) => {
        field.material.opacity = envelope * (.055 - fieldIndex * .007);
      });
      event.group.userData.intensity = envelope;
    } else {
      const mergePoint = .68;
      const merged = phase >= mergePoint;
      effect.holeA.visible = !merged;
      effect.holeB.visible = !merged;
      effect.remnantHole.visible = merged;
      const inspiral = Math.min(1, phase / mergePoint);
      const angleFor = (value) => Math.PI * 2 * (1.15 * value + 4.1 * Math.pow(value, 3));
      const radiusFor = (value) => .12 + 2.45 * Math.pow(1 - value, .72);
      const angle = angleFor(inspiral);
      const radius = radiusFor(inspiral);
      effect.holeA.position.set(Math.cos(angle) * radius, Math.sin(angle) * radius, Math.sin(angle * .5) * .09);
      effect.holeB.position.set(-Math.cos(angle) * radius, -Math.sin(angle) * radius, -Math.sin(angle * .5) * .09);

      const updateTrail = (trail, side) => {
        const array = trail.geometry.attributes.position.array;
        for (let i = 0; i < 84; i++) {
          const historical = Math.max(0, inspiral - (83 - i) * (.0028 + inspiral * .0009));
          const oldAngle = angleFor(historical);
          const oldRadius = radiusFor(historical);
          array[i * 3] = side * Math.cos(oldAngle) * oldRadius;
          array[i * 3 + 1] = side * Math.sin(oldAngle) * oldRadius;
          array[i * 3 + 2] = side * Math.sin(oldAngle * .5) * .09;
        }
        trail.geometry.attributes.position.needsUpdate = true;
        trail.material.opacity = merged ? 0 : THREE.MathUtils.smoothstep(phase, .02, .22) * .34;
      };
      updateTrail(effect.trailA, 1);
      updateTrail(effect.trailB, -1);

      const postMerge = THREE.MathUtils.clamp((phase - mergePoint) / (1 - mergePoint), 0, 1);
      const ringdown = Math.exp(-postMerge * 7) * Math.sin(postMerge * 38);
      effect.remnantHole.scale.set(1.24 + ringdown * .07, 1.24 - ringdown * .045, 1.24);
      const mergerFlash = merged ? Math.exp(-postMerge * 18) : 0;
      effect.mergerGlow.material.opacity = mergerFlash * .42;
      const glowScale = .3 + postMerge * 2.4;
      effect.mergerGlow.scale.set(glowScale, glowScale, 1);
      effect.wavefronts.forEach((wave, waveIndex) => {
        const delay = waveIndex * .11;
        const local = THREE.MathUtils.clamp((postMerge - delay) / (1 - delay), 0, 1);
        wave.visible = merged && local > 0;
        wave.scale.setScalar(.3 + Math.pow(local, .62) * (7.4 + waveIndex * 1.8));
        wave.material.opacity = Math.sin(local * Math.PI) * .13 * (1 - waveIndex * .16);
      });
    }
  });
  cosmicEventGroup.visible = anyVisible;
  return activeCosmicEvent;
}

function animateCosmicEvents(now) {
  if (!cosmicEventGroup.visible || prefersReducedMotion) return;
  cosmicEvents.forEach((event) => {
    if (!event.group.visible) return;
    const phase = event.group.userData.phase;
    const effect = event.group.userData.effect;
    if (event.type === 'supernova') {
      effect.innerFlash.material.rotation = now * .00007;
      effect.photosphere.material.rotation = -now * .000035;
      effect.ejecta.rotation.y = Math.sin(now * .00021) * .035;
    } else if (event.type === 'pulsar') {
      effect.rotor.rotation.y = now * .0024;
      const worldQuaternion = new THREE.Quaternion();
      const worldPosition = new THREE.Vector3();
      const beamAxis = new THREE.Vector3(0, 1, 0);
      effect.rotor.getWorldQuaternion(worldQuaternion);
      event.group.getWorldPosition(worldPosition);
      beamAxis.applyQuaternion(worldQuaternion).normalize();
      const viewDirection = camera.position.clone().sub(worldPosition).normalize();
      const alignment = Math.pow(Math.abs(beamAxis.dot(viewDirection)), 14);
      const pulse = .52 + Math.pow(Math.max(0, Math.sin(now * .012)), 10) * .48;
      effect.jets.material.opacity = event.group.userData.intensity * (.34 + alignment * .58) * pulse;
      effect.sweepGlow.material.opacity = event.group.userData.intensity * alignment * pulse * .78;
      const sweepScale = .5 + alignment * 1.8;
      effect.sweepGlow.scale.set(sweepScale, sweepScale, 1);
      effect.knots.forEach((knot) => {
        const travel = (now * .00055 + knot.userData.offset) % 1;
        knot.position.set(0, knot.userData.side * (.28 + travel * 7.5), 0);
        knot.material.opacity = event.group.userData.intensity * Math.sin(travel * Math.PI) * (.12 + alignment * .55);
      });
      effect.fieldLines.forEach((field, index) => {
        field.rotation.y += .006 + index * .001;
      });
    } else {
      effect.holeA.userData.photonRing.rotation.z += .012;
      effect.holeB.userData.photonRing.rotation.z -= .01;
      effect.remnantHole.userData.photonRing.rotation.z += .006;
    }
  });
}

function updateCosmicTime(value, force = false) {
  cosmicPosition = Math.max(0, Math.min(1000, Number(value)));
  $('#cosmic-timeline').value = cosmicPosition;
  $('#time-progress').style.width = `${cosmicPosition / 10}%`;
  const label = cosmicTimeLabel(cosmicPosition);
  $('#timeline-value').textContent = label;

  const eraIndex = eras.findIndex((era) => cosmicPosition < era.until);
  const era = eras[Math.max(0, eraIndex)];
  $('#era-number').textContent = String(eraIndex + 1).padStart(2, '0');
  $('#era-name').textContent = era.name;
  $('#cosmic-time').textContent = label.replace('T+', '');
  $('#era-description').textContent = era.description;

  if (!clickableStars) return;
  updateEpochVisuals(cosmicPosition);

  let activeSpecies = 0;
  civilizationData.forEach((species, index) => {
    const bornProgress = THREE.MathUtils.smoothstep(cosmicPosition, species.birth, species.birth + 95);
    const extinctionProgress = 1 - THREE.MathUtils.smoothstep(cosmicPosition, species.extinction - 18, species.extinction);
    const alive = cosmicPosition >= species.birth && cosmicPosition < species.extinction;
    const count = Math.floor(species.maxColonies * bornProgress * extinctionProgress);
    civilizationGroups[index].geometry.setDrawRange(0, count);
    civilizationGroups[index].material.opacity = .95 * extinctionProgress;
    const row = document.querySelector(`[data-species="${index}"]`);
    if (row) {
      row.style.opacity = alive ? '1' : '.18';
      row.querySelector('b').textContent = alive ? `${count} 域` : cosmicPosition < species.birth ? '未诞生' : '灭绝';
    }
    if (alive) activeSpecies++;
  });

  let activeBattle = null;
  battleGroup.children.forEach((line) => {
    const distance = Math.abs(cosmicPosition - line.userData.battleAt);
    const intensity = Math.max(0, 1 - distance / 24);
    line.material.opacity = intensity * (0.32 + Math.sin(performance.now() * .016) * .18);
    line.visible = intensity > 0;
    if (distance < 16) activeBattle = line.userData;
  });

  const activeEvent = updateCosmicEvents(cosmicPosition);

  if (activeEvent) {
    const eventText = activeEvent.type === 'supernova'
      ? `${activeEvent.label}，重元素正在被抛入星际空间`
      : activeEvent.type === 'pulsar'
        ? `${activeEvent.label}，双极喷流扫过邻近星系`
        : `${activeEvent.label}，时空涟漪向外传播`;
    setEvent(activeEvent.id, label, eventText, force);
  } else if (activeBattle) {
    const a = civilizationData[activeBattle.speciesA];
    const b = civilizationData[activeBattle.speciesB];
    setEvent(`battle-${activeBattle.speciesA}-${activeBattle.speciesB}`, label.replace('T+', 'T+'), `${a.name} 与 ${b.name} 的边界战争持续蔓延`, force);
  } else if (cosmicPosition < 55) {
    setEvent('bang', 'T+0', '时空从一个超高温、高密度状态开始膨胀', force);
  } else if (cosmicPosition < 145) {
    setEvent('dark', 'T+38 万年', '最后散射面形成，宇宙进入没有星光的漫长黑夜', force);
  } else if (cosmicPosition < 260) {
    setEvent('stars', 'T+1.8 亿年', '第一代恒星点燃，宇宙黎明到来', force);
  } else if (activeSpecies > 0) {
    setEvent(`life-${activeSpecies}`, label, `${activeSpecies} 个主要文明种群正在跨越恒星系扩张`, force);
  } else if (cosmicPosition < 410) {
    setEvent('chemistry', label, '重元素丰度上升，宜居行星开始形成', force);
  } else if (cosmicPosition < Math.min(...civilizationData.map((species) => species.birth), 745)) {
    setEvent('waiting-life', label, '宜居世界正在积累复杂化学反应，智慧生命尚未出现', force);
  } else if (cosmicPosition < 745) {
    setEvent('silence', label, '文明信号已经沉寂，只剩无人维护的轨道遗迹', force);
  } else if (cosmicPosition < 875) {
    setEvent('degenerate', label, '最后一颗红矮星熄灭，宇宙进入简并时代', force);
  } else if (cosmicPosition < 970) {
    setEvent('holes', label, '黑洞通过霍金辐射缓慢蒸发', force);
  } else {
    setEvent('heatdeath', label, '没有可用能量梯度，宇宙中不再发生宏观事件', force);
  }
}

function animate(now) {
  requestAnimationFrame(animate);
  const delta = Math.min(0.05, (now - lastFrame) / 1000);
  lastFrame = now;
  updateTransition(now);
  smoothedPointer.lerp(pointer, 0.04);

  if (mode === 'generator' && universeGroup.visible && !prefersReducedMotion) {
    universeGroup.rotation.y += 0.00045;
    universeGroup.rotation.x = 0.15 + smoothedPointer.y * 0.045;
    universeGroup.position.x = smoothedPointer.x * 0.42;
    universeGroup.position.y = smoothedPointer.y * 0.25;
  }
  if (mode === 'explorer') {
    if (timePlaying && !transition) {
      advanceCosmicTime(delta);
      if (cosmicPosition >= 1000) {
        cosmicPosition = 1000;
        timePlaying = false;
        $('#toggle-time').textContent = '▶';
        $('#toggle-time').setAttribute('aria-label', '播放时间');
      }
      updateCosmicTime(cosmicPosition);
    }
    controls.update();
    if (epochEffectsGroup.visible && cosmicPosition < 70 && !prefersReducedMotion) {
      const vibration = (1 - cosmicPosition / 70) * .08;
      epochEffectsGroup.position.x = Math.sin(now * .021) * vibration;
      epochEffectsGroup.position.y = Math.cos(now * .017) * vibration;
      epochEffectsGroup.rotation.y += .0009;
      bangCore.material.rotation = now * .00008;
    } else {
      epochEffectsGroup.position.set(0, 0, 0);
    }
    if (heatDeathGroup.visible && !prefersReducedMotion) {
      coldPhotons.rotation.y += .000035;
      coldPhotons.rotation.x += .000009;
    }
    if (!prefersReducedMotion) {
      blackHoleRemnants.forEach((hole, index) => {
        if (!hole.visible) return;
        hole.userData.photonRing.rotation.z += .002 + index * .0003;
        hole.userData.hawkingGlow.material.rotation = now * (.000025 + index * .000001);
      });
    }
    animateCosmicEvents(now);
    if (!controls.enabled) galaxyGroup.rotation.y += 0.0003;
    const time = now * 0.00012;
    $('#coord-x').textContent = `${Math.sin(time) < 0 ? '−' : '+'}${Math.abs(Math.sin(time) * 9).toFixed(2)}`;
    $('#coord-y').textContent = `${Math.cos(time * .7) < 0 ? '−' : '+'}${Math.abs(Math.cos(time * .7) * 9).toFixed(2)}`;
    $('#coord-z').textContent = `${Math.sin(time * .3) < 0 ? '−' : '+'}${Math.abs(Math.sin(time * .3) * 3).toFixed(2)}`;
  }
  renderer.render(scene, camera);
}

window.addEventListener('pointermove', (event) => {
  pointer.x = (event.clientX / innerWidth) * 2 - 1;
  pointer.y = -(event.clientY / innerHeight) * 2 + 1;
  const cursor = $('#cursor');
  cursor.style.left = `${event.clientX}px`;
  cursor.style.top = `${event.clientY}px`;
  cursor.style.opacity = '1';
});

window.addEventListener('resize', () => {
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight);
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
});

canvas.addEventListener('click', inspectStar);
$('#regenerate-top').addEventListener('click', regenerate);
$('#enter-universe').addEventListener('click', enterUniverse);
$('#leave-universe').addEventListener('click', leaveUniverse);
$('#close-inspector').addEventListener('click', () => $('#star-inspector').classList.remove('is-open'));
$('#toggle-hud').addEventListener('click', toggleHud);
$('#toggle-time').addEventListener('click', () => {
  if (cosmicPosition >= 1000) updateCosmicTime(0, true);
  timePlaying = !timePlaying;
  $('#toggle-time').textContent = timePlaying ? 'Ⅱ' : '▶';
  $('#toggle-time').setAttribute('aria-label', timePlaying ? '暂停时间' : '播放时间');
});
$('#cosmic-timeline').addEventListener('input', (event) => {
  timePlaying = false;
  $('#toggle-time').textContent = '▶';
  updateCosmicTime(event.target.value, true);
});
document.querySelectorAll('.speed-controls button').forEach((button) => {
  button.addEventListener('click', () => {
    timeSpeed = Number(button.dataset.speed);
    document.querySelectorAll('.speed-controls button').forEach((item) => {
      const active = item === button;
      item.classList.toggle('is-active', active);
      item.setAttribute('aria-pressed', String(active));
    });
  });
});
document.addEventListener('keydown', (event) => {
  if (event.key.toLowerCase() === 'r' && mode === 'generator') regenerate();
  if (event.key.toLowerCase() === 'h' && mode === 'explorer') toggleHud();
  if (event.key === 'Escape' && mode === 'explorer') leaveUniverse();
});

universe = createUniverse();
updateData();
buildUniverseObject();
buildGalaxy();
animate(performance.now());
