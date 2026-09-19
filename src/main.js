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
let civilizationRuntimeState = [];
let civilizationSimulation = null;
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
let originalRemnantPositions = null;
let remnantDynamics = null;
let cosmicPosition = 0;
let timePlaying = false;
let timeSpeed = 1;
let lastFrame = performance.now();
let lastEventKey = '';
let eventFadeTimer = null;
let sharedPointTexture = null;
let cosmicEvents = [];
let activeCosmicEvent = null;
const NORMAL_JOURNEY_SECONDS = 35 * 60;

const notes = [
  '一次偶然涨落，一组全新的自然法则。',
  '这里的星光，以陌生的速度穿过真空。',
  '引力写下结构，时间负责把它读完。',
  '一个从未存在过，也不会再次出现的宇宙。',
  '尘埃正在聚集，第一颗恒星即将点亮。'
];
const galaxyRoots = ['赫利俄斯', '弥涅耳瓦', '伊奥', '俄耳甫斯', '忒弥斯', '厄里倪厄斯', '欧律狄刻', '阿斯忒里亚'];
const galaxyTypes = ['棒旋星系', '絮状螺旋星系', '环状星系', '椭圆星系', '不规则星系'];
const speciesNames = [
  '赛里安共同体', '洛珂蜂群', '弧光联盟', '静默者', '澄海文明',
  '铸星者', '织光议会', '塔乌林协约', '奈落合众体', '远潮群落',
  '镜海联邦', '巡星庭', '赤纬公社', '无昼同盟', '尘环智群'
];
const speciesColors = [
  0xd8ff5f, 0xff7b6b, 0x69b8ff, 0xe78cff, 0xffc65c,
  0x62e6cf, 0xff8dc7, 0xa6a0ff, 0xf29d55, 0x73e46c,
  0x5ed8ff, 0xffe67b, 0xc38cff, 0xff6666, 0x90b8ff
];
// The boundaries follow the conventional thermal history and the long-term
// Adams–Laughlin era scheme. Far-future boundaries are explicitly conditional.
const eras = [
  { until: 55, name: '炽热大爆炸', description: '整个可观测区域同时处于高温、高密度状态；这不是物质从某个中心炸开。' },
  { until: 145, name: '等离子体时代', description: '宇宙膨胀并冷却，原初核合成后，光子仍被自由电子频繁散射。' },
  { until: 245, name: '宇宙黑暗时代', description: '38 万年后宇宙变得透明，但第一代恒星尚未点亮。' },
  { until: 340, name: '宇宙黎明', description: '约 1～2 亿年后，第一代恒星与星系开始形成并推动再电离。' },
  { until: 650, name: '恒星时代', description: '恒星、星系与重元素持续演化；生命与文明属于未证实的模型层。' },
  { until: 845, name: '简并时代 · 假说', description: '若质子衰变等标准长期假说成立，恒星残骸绕核运行，并在近遇中逐个逃离或落入黑洞。' },
  { until: 985, name: '黑洞时代 · 假说', description: '若霍金辐射的标准推断适用，孤立黑洞在极漫长时间中逐个蒸发。' },
  { until: 1001, name: '暗时代 · 渐近', description: '宇宙继续膨胀，辐射红移与稀释，可用能量梯度趋近于零，而非发生一次全局终结。' }
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
  const fineStructure = randomBetween(random, 0.72, 1.28);
  const massRatio = randomBetween(random, 0.82, 1.18);
  const expansionRate = randomBetween(random, 0.65, 1.45);
  const darkEnergyDensity = randomBetween(random, 0.48, 0.82);
  const primordialFluctuation = randomBetween(random, 0.55, 1.75);
  const cmbTemperature = randomBetween(random, 1.9, 4.4);
  // Alternative constants are a hypothesis layer, not a solved theory. Keep
  // their downstream values correlated so they are not independent decoration.
  const chemistryStability = Math.exp(-Math.pow((fineStructure - 1) / .17, 2) - Math.pow((massRatio - 1) / .14, 2));
  const structureEfficiency = THREE.MathUtils.clamp(gravity * primordialFluctuation / Math.pow(expansionRate, .72), .12, 2.8);
  const elements = Math.max(2, Math.round(118 * chemistryStability * randomBetween(random, .82, 1.08)));
  const stars = THREE.MathUtils.clamp(randomBetween(random, .35, 3.2) * structureEfficiency, .08, 7.2);
  const stellarFormationEndExponent = THREE.MathUtils.clamp(13.4 - (darkEnergyDensity - .68) * 2.1 - (expansionRate - 1) * .55, 12.2, 14.1);
  const habitability = chemistryStability * THREE.MathUtils.clamp(1 - Math.abs(cmbTemperature - 2.725) / 3.5, .12, 1);
  const lifeProbability = Math.pow(random(), 4) * .08 * habitability;
  const speciesCount = Math.floor(randomBetween(random, 5, 16));
  const civilizations = Math.max(speciesCount, Math.floor(stars * 1e5 * lifeProbability * randomBetween(random, 0.02, 0.7)));
  const lifetime = Math.round(Math.pow(10, stellarFormationEndExponent - 8) / 10) * 10;
  const armCount = Math.floor(randomBetween(random, 3, 7));
  const galaxyType = seed % galaxyTypes.length;
  const blackHoleProbability = [.96, .92, .72, .99, .34][galaxyType];
  const hasCentralBlackHole = random() < blackHoleProbability;
  const activeNucleus = hasCentralBlackHole && random() < [.1, .07, .05, .045, .025][galaxyType];
  const blackHoleEvaporationExponent = Math.floor(randomBetween(random, 97, 103));
  const hue = randomBetween(random, 0.48, 0.76);
  return {
    seed, speed, gravity, fineStructure, massRatio, expansionRate, darkEnergyDensity,
    primordialFluctuation, cmbTemperature, chemistryStability, structureEfficiency,
    stellarFormationEndExponent, elements, stars, lifeProbability,
    civilizations, speciesCount, lifetime, blackHoleEvaporationExponent, armCount, galaxyType,
    hasCentralBlackHole, activeNucleus, hue
  };
}

function formatStars(value) {
  return value >= 1 ? `${value.toFixed(1)} 万亿颗` : `${Math.round(value * 10000)} 亿颗`;
}

function stellarEndTimelinePosition() {
  return THREE.MathUtils.clamp(570 + (universe.stellarFormationEndExponent - 12) / 2 * 80, 578, 654);
}

function formatCivilizations(value) {
  return value === 0 ? '尚未出现' : `${new Intl.NumberFormat('zh-CN').format(value)} 个`;
}

function formatProbability(value) {
  const percent = value * 100;
  if (percent < 0.0001) return '< 0.0001%';
  if (percent < 0.01) return `${percent.toFixed(4)}%`;
  if (percent < 1) return `${percent.toFixed(2)}%`;
  return `${percent.toFixed(1)}%`;
}

function formatArmStructure(type, count) {
  if (type === 2) return '主环 + 碎环';
  if (type === 3) return '无旋臂';
  if (type === 4) return '不规则';
  return `${count} 条`;
}

function formatGalaxyHue(hue) {
  const degrees = Math.round(hue * 360);
  const name = degrees < 190 ? '青白' : degrees < 225 ? '蓝白' : degrees < 250 ? '靛蓝' : '紫白';
  return `${name} · ${degrees}°`;
}

function updateData() {
  $('#universe-id').textContent = `#${universe.seed}`;
  $('#explore-id').textContent = `#${universe.seed}`;
  $('#speed-value').textContent = `${universe.speed.toFixed(2)} × 现实宇宙`;
  $('#gravity-value').textContent = `${universe.gravity.toFixed(2)} × 现实宇宙`;
  $('#fine-structure-value').textContent = `${universe.fineStructure.toFixed(3)} × 现实宇宙`;
  $('#mass-ratio-value').textContent = `${universe.massRatio.toFixed(3)} × 现实宇宙`;
  $('#expansion-value').textContent = `${universe.expansionRate.toFixed(2)} × 现实宇宙`;
  $('#dark-energy-value').textContent = `${(universe.darkEnergyDensity * 100).toFixed(1)}%`;
  $('#fluctuation-value').textContent = `${universe.primordialFluctuation.toFixed(2)} × 现实宇宙`;
  $('#cmb-value').textContent = `${universe.cmbTemperature.toFixed(2)} K`;
  $('#elements-value').textContent = `${universe.elements} 种`;
  $('#stars-value').textContent = formatStars(universe.stars);
  $('#life-probability-value').textContent = formatProbability(universe.lifeProbability);
  $('#civilizations-value').textContent = formatCivilizations(universe.civilizations);
  $('#galaxy-type-value').textContent = galaxyTypes[universe.galaxyType];
  $('#arm-count-value').textContent = formatArmStructure(universe.galaxyType, universe.armCount);
  $('#black-hole-value').textContent = universe.hasCentralBlackHole ? '存在' : '未形成';
  $('#nucleus-value').textContent = universe.hasCentralBlackHole ? (universe.activeNucleus ? '活动 · 吸积中' : '宁静') : '不适用';
  $('#stellar-window-value').textContent = `约 10^${universe.stellarFormationEndExponent.toFixed(1)} 年`;
  $('#galaxy-hue-value').textContent = formatGalaxyHue(universe.hue);
  $('#evaporation-value').textContent = `约 10^${universe.blackHoleEvaporationExponent} 年`;
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
  civilizationRuntimeState = [];
  civilizationSimulation = null;
  const random = mulberry32(universe.seed + 91);
  const count = 17000;
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  starDeathThresholds = new Float32Array(count);
  const core = new THREE.Color(0xffe7b4);
  const edge = new THREE.Color().setHSL(universe.hue, 0.65, 0.56);
  const stellarEnd = stellarEndTimelinePosition();
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
    // Massive stars disappear early; the last low-mass red dwarfs survive to
    // roughly 10^14 years, at the end of the Stelliferous Era.
    starDeathThresholds[i] = 495 + Math.pow(random(), 1.9) * (stellarEnd - 495);
  }

  originalGalaxyPositions = positions.slice();
  originalGalaxyColors = colors.slice();

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
  buildEpochEffects(positions);
  // Keep the full stellar population for dense civilization territories; each
  // marker is mapped to a nearby remnant below so it still follows late orbits.
  buildCivilizations(positions);
  buildCosmicEvents(positions);
  buildCivilizationSimulation();
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
    // Random comoving coordinates fill the observed volume uniformly. This
    // avoids implying that the Big Bang occurred at the centre of the scene.
    primordialDirections[i * 3] = randomBetween(random, -1, 1);
    primordialDirections[i * 3 + 1] = randomBetween(random, -1, 1);
    primordialDirections[i * 3 + 2] = randomBetween(random, -1, 1);
    primordialFactors[i] = .86 + gaussianRandom(random) * .035 * universe.primordialFluctuation;
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
  remnantDynamics = {
    axes: new Float32Array(remnantCount * 3),
    orbitRates: new Float32Array(remnantCount),
    escapeAt: new Float32Array(remnantCount),
    speeds: new Float32Array(remnantCount),
    fates: new Uint8Array(remnantCount)
  };
  const haloDelay = THREE.MathUtils.clamp((universe.gravity - .5) * 6 + (universe.galaxyType === 3 ? 4 : 0), 0, 12);
  for (let i = 0; i < remnantCount; i++) {
    const source = Math.floor(random() * starPositions.length / 3);
    const sourceOffset = source * 3;
    const x = starPositions[sourceOffset];
    const y = starPositions[sourceOffset + 1];
    const z = starPositions[sourceOffset + 2];
    remnantPositions[i * 3] = originalRemnantPositions[i * 3] = x;
    remnantPositions[i * 3 + 1] = originalRemnantPositions[i * 3 + 1] = y;
    remnantPositions[i * 3 + 2] = originalRemnantPositions[i * 3 + 2] = z;
    const diskLike = universe.galaxyType <= 2;
    let axisX = diskLike ? gaussianRandom(random) * .035 : gaussianRandom(random);
    let axisY = diskLike ? 1 : gaussianRandom(random);
    let axisZ = diskLike ? gaussianRandom(random) * .035 : gaussianRandom(random);
    const axisLength = Math.max(.001, Math.hypot(axisX, axisY, axisZ));
    axisX /= axisLength; axisY /= axisLength; axisZ /= axisLength;
    remnantDynamics.axes.set([axisX, axisY, axisZ], i * 3);
    const orbitDirection = diskLike ? (random() < .94 ? 1 : -1) : (random() < .5 ? 1 : -1);
    const radius = Math.max(.8, Math.hypot(x, y, z));
    remnantDynamics.orbitRates[i] = orbitDirection * randomBetween(random, .008, .018) / Math.sqrt(radius * .22);

    const fateRoll = random();
    const fate = fateRoll < .82 ? 0 : fateRoll < .92 ? 1 : fateRoll < .99 ? 2 : 3;
    remnantDynamics.fates[i] = fate;
    // Most remnants stay bound. Evaporation begins one object at a time near
    // 10^19 years (about timeline position 709), not as a synchronous outflow.
    remnantDynamics.escapeAt[i] = fate === 1
      ? 1001
      : (fate === 3 ? 704 : fate === 2 ? 724 : 710) + haloDelay + Math.pow(random(), .68) * (fate === 3 ? 28 : 92);
    remnantDynamics.speeds[i] = fate === 3 ? randomBetween(random, 1.7, 2.6) : randomBetween(random, .55, 1.05);
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
      birthAt: 825 + random() * 34,
      evaporationAt: isCentral ? 984 : 910 + Math.pow(random(), .46) * 70,
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

  const nucleusEvent = universe.hasCentralBlackHole
    ? {
        type: 'quasar-awakening', visual: 'pulsar', label: '类星体短暂苏醒',
        message: '中心黑洞吸积率骤升，相对论喷流穿过星系核', preferCenter: true,
        start: 480 + random() * 16, duration: 30, color: '#8dd9ff'
      }
    : {
        type: 'magnetar-flare', visual: 'pulsar', label: '磁星巨型耀斑',
        message: '磁壳重排释放高能辐射，脉冲扫过邻近恒星系',
        start: 480 + random() * 16, duration: 26, color: '#7dcaff'
      };

  const schedule = [
    {
      type: 'pair-instability-supernova', visual: 'supernova', label: '成对不稳定超新星',
      message: '第一代巨星被完全撕碎，重元素云向外扩散',
      start: 258 + random() * 18, duration: 28, color: '#ffb36b'
    },
    {
      type: 'young-pulsar-birth', visual: 'pulsar', label: '年轻脉冲星诞生',
      message: '新生中子星高速自转，双极束流开始扫掠星际介质',
      start: 302 + random() * 18, duration: 27, color: '#68c8ff'
    },
    {
      type: 'type-ia-supernova', visual: 'supernova', label: 'Ia 型超新星爆发',
      message: '白矮星发生热核失控，将铁族元素抛入星际空间',
      start: 368 + random() * 22, duration: 25, color: '#ffd08a'
    },
    {
      type: 'gamma-ray-burst', visual: 'pulsar', label: '长伽马射线暴',
      message: '垂死巨星坍缩，狭窄高能喷流贯穿恒星外层',
      start: 420 + random() * 20, duration: 24, color: '#89b9ff'
    },
    nucleusEvent,
    {
      type: 'core-collapse-supernova', visual: 'supernova', label: '核坍缩超新星',
      message: '恒星核心坍缩，冲击波把新合成元素送入星际云',
      start: 518 + random() * 20, duration: 27, color: '#ff875c'
    },
    {
      type: 'pulsar-glitch', visual: 'pulsar', label: '脉冲星自转突变',
      message: '中子星内部角动量重分配，脉冲节律突然跃迁',
      start: 548 + random() * 18, duration: 22, color: '#8ba8ff'
    },
    {
      type: 'superluminous-supernova', visual: 'supernova', label: '超亮超新星',
      message: '磁星引擎持续注入能量，爆发亮度超过普通超新星',
      start: 552 + random() * 16, duration: 26, color: '#ff6b52'
    },
    {
      type: 'stellar-black-hole-merger', visual: 'black-hole-merger', label: '双黑洞合并',
      message: '两颗恒星级黑洞完成旋近，引力波向外传播', preferCenter: true,
      start: 616 + random() * 18, duration: 31, color: '#c897ff'
    },
    {
      type: 'late-black-hole-merger', visual: 'black-hole-merger', label: '孤立黑洞捕获合并',
      message: '漫长引力散射后，两颗孤立黑洞形成并合系统', preferCenter: true,
      start: 872 + random() * 18, duration: 34, color: '#9bb8ff'
    }
  ];

  const impactProfiles = {
    'pair-instability-supernova': { radius: .55, maxStars: 5, sourceDim: .02, neighborDim: .96, kick: .018, civilization: .08, range: 2.4 },
    'young-pulsar-birth': { radius: .42, maxStars: 2, sourceDim: .12, neighborDim: .99, kick: .01, civilization: .035, range: 1.8, directional: true, beamAngle: .12 },
    'type-ia-supernova': { radius: .48, maxStars: 4, sourceDim: .02, neighborDim: .97, kick: .012, civilization: .06, range: 2.1 },
    'gamma-ray-burst': { radius: 7.5, maxStars: 46, sourceDim: .025, neighborDim: .82, kick: 0, civilization: .42, range: 12, maxSpecies: 1, directional: true, beamAngle: .1 },
    'quasar-awakening': { radius: 8.5, maxStars: 60, sourceDim: .95, neighborDim: .96, kick: 0, civilization: .16, range: 14, maxSpecies: 2, directional: true, beamAngle: .16 },
    'magnetar-flare': { radius: 1.1, maxStars: 8, sourceDim: .82, neighborDim: .94, kick: 0, civilization: .12, range: 3.2, maxSpecies: 1 },
    'core-collapse-supernova': { radius: .5, maxStars: 4, sourceDim: .025, neighborDim: .97, kick: .014, civilization: .06, range: 2.2 },
    'pulsar-glitch': { radius: .01, maxStars: 1, sourceDim: .985, neighborDim: 1, kick: 0, civilization: 0, range: 0, maxSpecies: 0 },
    'superluminous-supernova': { radius: .62, maxStars: 6, sourceDim: .02, neighborDim: .95, kick: .02, civilization: .09, range: 2.8, maxSpecies: 1 },
    'stellar-black-hole-merger': { radius: .08, maxStars: 1, sourceDim: .08, neighborDim: 1, kick: .65, civilization: 0, range: 0, maxSpecies: 0 },
    'late-black-hole-merger': { radius: .08, maxStars: 1, sourceDim: .06, neighborDim: 1, kick: .82, civilization: 0, range: 0, maxSpecies: 0 }
  };

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
    return {
      index: source,
      position: new THREE.Vector3(starPositions[source * 3], starPositions[source * 3 + 1], starPositions[source * 3 + 2])
    };
  };

  const deriveConsequences = (data, location) => {
    const profile = impactProfiles[data.type];
    const impactPhase = data.visual === 'supernova' ? .08 : data.visual === 'pulsar' ? .46 : .68;
    const impactAt = data.start + data.duration * impactPhase;
    const nearbyStars = [];
    for (let index = 0; index < starPositions.length / 3; index++) {
      const offset = index * 3;
      const distance = Math.hypot(
        starPositions[offset] - location.position.x,
        starPositions[offset + 1] - location.position.y,
        starPositions[offset + 2] - location.position.z
      );
      if (distance > profile.radius) continue;
      if (profile.directional && data.beamDirection) {
        const direction = new THREE.Vector3(
          starPositions[offset] - location.position.x,
          starPositions[offset + 1] - location.position.y,
          starPositions[offset + 2] - location.position.z
        ).normalize();
        if (Math.abs(direction.dot(data.beamDirection)) < Math.cos(profile.beamAngle)) continue;
      }
      nearbyStars.push({ index, distance });
    }
    nearbyStars.sort((a, b) => a.distance - b.distance);
    const starImpacts = nearbyStars.slice(0, profile.maxStars).map(({ index, distance }, order) => {
      const offset = index * 3;
      const proximity = 1 - Math.min(1, distance / profile.radius);
      let dx = starPositions[offset] - location.position.x;
      let dy = starPositions[offset + 1] - location.position.y;
      let dz = starPositions[offset + 2] - location.position.z;
      const length = Math.hypot(dx, dy, dz);
      if (length < .001) {
        const theta = random() * Math.PI * 2;
        const z = random() * 2 - 1;
        const radial = Math.sqrt(1 - z * z);
        dx = Math.cos(theta) * radial; dy = z; dz = Math.sin(theta) * radial;
      } else {
        dx /= length; dy /= length; dz /= length;
      }
      const kick = profile.kick * (.2 + proximity * .8) * (.72 + random() * .5);
      return {
        index,
        dimFactor: order === 0 ? profile.sourceDim : 1 - (1 - profile.neighborDim) * proximity,
        kick: [dx * kick, dy * kick, dz * kick]
      };
    });

    const livingSpecies = civilizationData
      .map((species, speciesIndex) => ({ species, speciesIndex, distance: species.home.distanceTo(location.position) }))
      .filter(({ species, distance }) => {
        if (!(impactAt >= species.birth && impactAt < species.extinction && distance <= profile.range)) return false;
        if (species.highDimensional && impactAt >= species.ascensionAt) return false;
        if (!profile.directional || !data.beamDirection) return true;
        const direction = species.home.clone().sub(location.position).normalize();
        return Math.abs(direction.dot(data.beamDirection)) >= Math.cos(profile.beamAngle);
      })
      .sort((a, b) => a.distance - b.distance);
    const maxSpecies = Math.min(profile.maxSpecies || 1, livingSpecies.length);
    const civilizationImpacts = livingSpecies.slice(0, maxSpecies).map(({ species, speciesIndex, distance }) => {
      const proximity = Math.max(.08, 1 - distance / profile.range);
      const lossFraction = THREE.MathUtils.clamp(profile.civilization * (.62 + proximity * .48) * (.84 + random() * .3), .03, .58);
      const established = Math.floor(species.maxColonies * THREE.MathUtils.smoothstep(impactAt, species.birth, species.birth + 95));
      const collapse = established > 0 && established <= 8 && lossFraction > .3 && random() < .42;
      return { speciesIndex, lossFraction: collapse ? 1 : lossFraction, collapse };
    });

    const sourceOutcomes = {
      'pair-instability-supernova': '爆发源完全解体且没有致密残骸',
      'type-ia-supernova': '白矮星被热核爆炸完全摧毁',
      'core-collapse-supernova': '坍缩核心留下中子星或恒星级黑洞',
      'superluminous-supernova': '恒星外层被大规模抛射，中心结局仍不确定'
    };
    const systemSummary = data.visual === 'black-hole-merger'
      ? '合并黑洞质量转化为引力波，残留黑洞获得反冲速度'
      : data.type === 'pulsar-glitch'
        ? '自转频率发生微小跃变，没有可见的大规模破坏'
        : data.visual === 'pulsar'
          ? `${starImpacts.length} 个位于辐射束或近场内的恒星系受到影响`
        : `${sourceOutcomes[data.type] || '爆发源发生结构性改变'}，${Math.max(0, starImpacts.length - 1)} 个邻近恒星系受冲击`;
    const civilizationSummary = civilizationImpacts.length
      ? civilizationImpacts.map((impact) => {
          const name = civilizationData[impact.speciesIndex].name;
          return impact.collapse ? `${name} 灭绝` : `${name} 仿真疆域损失约 ${Math.round(impact.lossFraction * 100)}%`;
        }).join('，')
      : '未波及已知文明';

    return { impactAt, impactPhase, starImpacts, civilizationImpacts, outcome: `${systemSummary}；${civilizationSummary}` };
  };

  schedule.forEach((data, index) => {
    const group = new THREE.Group();
    const location = pickPosition(data.preferCenter);
    group.position.copy(location.position);
    group.visible = false;
    cosmicEventGroup.add(group);
    const profile = impactProfiles[data.type];
    if (profile.directional) {
      data.beamDirection = new THREE.Vector3(gaussianRandom(random), gaussianRandom(random), gaussianRandom(random)).normalize();
      group.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), data.beamDirection);
    }

    if (data.visual === 'supernova') {
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
        ejectaVelocity[i] = .38 + Math.pow(random(), .48) * 1.45 + Math.abs(direction.y) * .22;
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
    } else if (data.visual === 'pulsar') {
      const core = new THREE.Sprite(new THREE.SpriteMaterial({ map: getPointTexture(), color: 0xf4fbff, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending }));
      const halo = new THREE.Sprite(new THREE.SpriteMaterial({ map: makeGlowTexture(), color: 0x4bb9ff, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending }));
      const nebula = new THREE.Sprite(new THREE.SpriteMaterial({ map: makeGlowTexture(), color: 0x1676b8, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending, rotation: random() * Math.PI }));
      const sweepGlow = new THREE.Sprite(new THREE.SpriteMaterial({ map: makeGlowTexture(), color: 0xc9edff, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending }));
      core.scale.set(.18, .18, 1);
      nebula.scale.set(1.45, .58, 1);

      const rotor = new THREE.Group();
      rotor.rotation.z = .58 + random() * .32;
      const jetCount = 420;
      const jetPositions = new Float32Array(jetCount * 3);
      const jetColors = new Float32Array(jetCount * 3);
      for (let i = 0; i < jetCount; i++) {
        const side = i % 2 ? 1 : -1;
        const distance = .1 + Math.pow(random(), .66) * 2.6;
        const width = .012 + distance * .014;
        const angle = random() * Math.PI * 2;
        jetPositions[i * 3] = Math.cos(angle) * width * random();
        jetPositions[i * 3 + 1] = side * distance;
        jetPositions[i * 3 + 2] = Math.sin(angle) * width * random();
        const brightness = .35 + Math.pow(1 - distance / 2.8, .45) * .65;
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

    const consequences = deriveConsequences(data, location);
    cosmicEvents.push({
      ...data,
      ...consequences,
      group,
      sourceIndex: location.index,
      id: `${data.type}-${index}-${universe.seed}`,
      label: data.label
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
    marker.setAttribute('aria-label', `${event.label}，${cosmicTimeLabel(event.start)}；${event.outcome}`);
    marker.title = event.outcome;
    marker.addEventListener('click', () => {
      timePlaying = false;
      $('#toggle-time').textContent = '▶';
      const previewPhase = event.visual === 'supernova' ? .14 : event.visual === 'black-hole-merger' ? .76 : .54;
      updateCosmicTime(event.start + event.duration * previewPhase, true);
    });
    container.appendChild(marker);
  });
}

function buildCivilizations() {
  const random = mulberry32(universe.seed + 410);
  const speciesCount = universe.speciesCount;
  const remnantCount = originalRemnantPositions.length / 3;
  const habitatCount = Math.min(720, remnantCount);
  const habitatRemnantIndices = new Uint16Array(habitatCount);
  const habitatPositions = new Float32Array(habitatCount * 3);
  const stride = remnantCount / habitatCount;
  for (let node = 0; node < habitatCount; node++) {
    const remnantIndex = Math.min(remnantCount - 1, Math.floor((node + random() * .86) * stride));
    const source = remnantIndex * 3;
    const target = node * 3;
    habitatRemnantIndices[node] = remnantIndex;
    habitatPositions[target] = originalRemnantPositions[source];
    habitatPositions[target + 1] = originalRemnantPositions[source + 1];
    habitatPositions[target + 2] = originalRemnantPositions[source + 2];
  }

  civilizationSimulation = {
    start: 390,
    end: 710,
    step: 1,
    habitatRemnantIndices,
    habitatPositions,
    adjacency: [],
    snapshots: []
  };

  const chosenHomes = [];
  const legend = $('#civilization-legend');
  legend.innerHTML = '';
  for (let speciesIndex = 0; speciesIndex < speciesCount; speciesIndex++) {
    let homeNodeIndex = Math.floor(random() * habitatCount);
    let bestSeparation = -1;
    for (let attempt = 0; attempt < 96; attempt++) {
      const candidate = Math.floor(random() * habitatCount);
      const offset = candidate * 3;
      let separation = Infinity;
      chosenHomes.forEach((otherNode) => {
        const other = otherNode * 3;
        separation = Math.min(separation, Math.hypot(
          habitatPositions[offset] - habitatPositions[other],
          habitatPositions[offset + 1] - habitatPositions[other + 1],
          habitatPositions[offset + 2] - habitatPositions[other + 2]
        ));
      });
      if (separation > bestSeparation) {
        bestSeparation = separation;
        homeNodeIndex = candidate;
      }
    }
    chosenHomes.push(homeNodeIndex);
    const homeRemnantIndex = habitatRemnantIndices[homeNodeIndex];
    const homeOffsetIndex = homeRemnantIndex * 3;
    const home = new THREE.Vector3(
      originalRemnantPositions[homeOffsetIndex],
      originalRemnantPositions[homeOffsetIndex + 1],
      originalRemnantPositions[homeOffsetIndex + 2]
    );
    const speciesColor = speciesColors[speciesIndex % speciesColors.length];
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(habitatCount * 3), 3));
    geometry.setDrawRange(0, 0);
    const material = new THREE.PointsMaterial({
      color: speciesColor,
      size: .24,
      map: getPointTexture(),
      alphaTest: .012,
      transparent: true,
      opacity: .98,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });
    const points = new THREE.Points(geometry, material);
    galaxyGroup.add(points);
    civilizationGroups.push(points);

    const aggression = random();
    const cooperation = random();
    const expansionRate = randomBetween(random, .72, 1.36);
    const resilience = randomBetween(random, .68, 1.32);
    const birthSpread = speciesCount === 1 ? 0 : speciesIndex / (speciesCount - 1);
    const birth = 404 + Math.round(birthSpread * 72 + random() * 11);
    const highDimensional = random() < .01;
    const ascensionAt = highDimensional ? birth + Math.round(randomBetween(random, 130, 205)) : Infinity;
    civilizationData.push({
      name: speciesNames[(universe.seed + speciesIndex) % speciesNames.length],
      color: speciesColor,
      home,
      homeNodeIndex,
      homeRemnantIndex,
      homeOffset: new THREE.Vector3(),
      hostRemnantIndices: new Uint16Array(habitatCount),
      hostOffsets: new Float32Array(habitatCount * 3),
      displayCount: 0,
      maxColonies: habitatCount,
      birth,
      highDimensional,
      ascensionAt,
      extinction: highDimensional ? 1001 : 710,
      aggression,
      cooperation,
      expansionRate,
      resilience
    });
    const color = `#${speciesColor.toString(16).padStart(6, '0')}`;
    legend.insertAdjacentHTML('beforeend', `<div class="civilization-item" style="--species:${color}" data-species="${speciesIndex}"><i></i><span>${civilizationData[speciesIndex].name}</span><b>未诞生</b></div>`);
  }
}

function buildCivilizationSimulation() {
  if (!civilizationSimulation || civilizationData.length === 0) return;
  const simulation = civilizationSimulation;
  const random = mulberry32(universe.seed + 9241);
  const nodeCount = simulation.habitatRemnantIndices.length;
  const speciesCount = civilizationData.length;
  const neighborsPerNode = 6;

  for (let node = 0; node < nodeCount; node++) {
    const nearest = [];
    const source = node * 3;
    for (let candidate = 0; candidate < nodeCount; candidate++) {
      if (candidate === node) continue;
      const target = candidate * 3;
      const distance = Math.hypot(
        simulation.habitatPositions[source] - simulation.habitatPositions[target],
        simulation.habitatPositions[source + 1] - simulation.habitatPositions[target + 1],
        simulation.habitatPositions[source + 2] - simulation.habitatPositions[target + 2]
      );
      if (nearest.length < neighborsPerNode || distance < nearest[nearest.length - 1].distance) {
        nearest.push({ node: candidate, distance });
        nearest.sort((a, b) => a.distance - b.distance);
        if (nearest.length > neighborsPerNode) nearest.pop();
      }
    }
    simulation.adjacency[node] = Uint16Array.from(nearest.map((entry) => entry.node));
  }

  const owners = new Int16Array(nodeCount);
  owners.fill(-1);
  const strength = new Float32Array(nodeCount);
  const seeded = new Uint8Array(speciesCount);
  const relationScores = new Float32Array(speciesCount * speciesCount);
  const relationStates = new Int8Array(speciesCount * speciesCount);
  const everRelated = new Uint8Array(speciesCount * speciesCount);
  const peakRelationStrength = new Float32Array(speciesCount * speciesCount);
  const reservedFor = new Int16Array(nodeCount);
  reservedFor.fill(-1);
  civilizationData.forEach((species, index) => { reservedFor[species.homeNodeIndex] = index; });
  const lastCounts = new Uint16Array(speciesCount);
  const lastCauses = Array(speciesCount).fill('自主扩张');

  const relationIndex = (a, b) => a * speciesCount + b;
  for (let a = 0; a < speciesCount; a++) {
    for (let b = a + 1; b < speciesCount; b++) {
      const speciesA = civilizationData[a];
      const speciesB = civilizationData[b];
      const affinity = (speciesA.cooperation + speciesB.cooperation) * .28
        - (speciesA.aggression + speciesB.aggression) * .24
        + randomBetween(random, -.16, .16);
      relationScores[relationIndex(a, b)] = affinity;
      relationScores[relationIndex(b, a)] = affinity;
    }
  }

  const setRelation = (a, b, score, state) => {
    relationScores[relationIndex(a, b)] = score;
    relationScores[relationIndex(b, a)] = score;
    relationStates[relationIndex(a, b)] = state;
    relationStates[relationIndex(b, a)] = state;
    if (state !== 0) {
      everRelated[relationIndex(a, b)] = 1;
      everRelated[relationIndex(b, a)] = 1;
      const peak = Math.max(peakRelationStrength[relationIndex(a, b)], Math.abs(score));
      peakRelationStrength[relationIndex(a, b)] = peak;
      peakRelationStrength[relationIndex(b, a)] = peak;
    }
  };

  const removeTerritory = (speciesIndex, fraction, collapse, cause) => {
    const territory = [];
    for (let node = 0; node < nodeCount; node++) {
      if (owners[node] === speciesIndex) territory.push(node);
    }
    if (territory.length === 0) return;
    if (collapse) fraction = 1;
    for (let index = territory.length - 1; index > 0; index--) {
      const swap = Math.floor(random() * (index + 1));
      [territory[index], territory[swap]] = [territory[swap], territory[index]];
    }
    const losses = Math.min(territory.length, Math.max(collapse ? territory.length : 0, Math.round(territory.length * fraction * .62)));
    territory.forEach((node, order) => {
      if (order < losses) {
        owners[node] = -1;
        strength[node] = 0;
      } else {
        strength[node] *= Math.max(.18, 1 - fraction * .46);
      }
    });
    lastCauses[speciesIndex] = cause;
  };

  const events = cosmicEvents.slice().sort((a, b) => a.impactAt - b.impactAt);
  for (let time = simulation.start; time <= simulation.end; time += simulation.step) {
    civilizationData.forEach((species, speciesIndex) => {
      if (seeded[speciesIndex] || time < species.birth) return;
      seeded[speciesIndex] = 1;
      owners[species.homeNodeIndex] = speciesIndex;
      strength[species.homeNodeIndex] = .34;
      lastCauses[speciesIndex] = '母星文明进入星际阶段';
    });

    events.forEach((event) => {
      if (event.impactAt <= time - simulation.step || event.impactAt > time) return;
      event.civilizationImpacts.forEach((impact) => {
        const species = civilizationData[impact.speciesIndex];
        if (!species || (species.highDimensional && time >= species.ascensionAt)) return;
        removeTerritory(impact.speciesIndex, impact.lossFraction, impact.collapse, event.label);
      });
    });

    const friendlyCounts = new Uint8Array(speciesCount);
    const conflictCounts = new Uint8Array(speciesCount);
    for (let a = 0; a < speciesCount; a++) {
      for (let b = a + 1; b < speciesCount; b++) {
        const state = relationStates[relationIndex(a, b)];
        if (state > 0) { friendlyCounts[a]++; friendlyCounts[b]++; }
        if (state < 0) { conflictCounts[a]++; conflictCounts[b]++; }
      }
    }

    for (let node = 0; node < nodeCount; node++) {
      const owner = owners[node];
      if (owner < 0) continue;
      const species = civilizationData[owner];
      const support = 1 + friendlyCounts[owner] * .045 - conflictCounts[owner] * .028;
      strength[node] += (.032 + species.resilience * .018) * support * (1 - strength[node]);
      strength[node] = THREE.MathUtils.clamp(strength[node], 0, 1.35);
    }

    const contact = new Uint8Array(speciesCount * speciesCount);
    for (let node = 0; node < nodeCount; node++) {
      const owner = owners[node];
      if (owner < 0) continue;
      simulation.adjacency[node].forEach((neighbor) => {
        const other = owners[neighbor];
        if (other < 0 || other === owner) return;
        contact[relationIndex(owner, other)] = 1;
        contact[relationIndex(other, owner)] = 1;
      });
    }

    for (let a = 0; a < speciesCount; a++) {
      for (let b = a + 1; b < speciesCount; b++) {
        let score = relationScores[relationIndex(a, b)];
        let state = relationStates[relationIndex(a, b)];
        if (contact[relationIndex(a, b)]) {
          const speciesA = civilizationData[a];
          const speciesB = civilizationData[b];
          score += ((speciesA.cooperation + speciesB.cooperation) - 1) * .026;
          score -= ((speciesA.aggression + speciesB.aggression) - .82) * .023;
          score += randomBetween(random, -.012, .012);
          if (state === 0 && score > .3) state = 1;
          if (state === 0 && score < -.26) state = -1;
          if (state === 1 && score < .08) state = 0;
          if (state === -1 && score > -.04) state = 0;
        } else {
          score *= .992;
          if (state === 1 && score < .1) state = 0;
          if (state === -1 && score > -.08) state = 0;
        }
        setRelation(a, b, THREE.MathUtils.clamp(score, -.95, .95), state);
      }
    }

    const ownedBySpecies = Array.from({ length: speciesCount }, () => []);
    for (let node = 0; node < nodeCount; node++) {
      if (owners[node] >= 0) ownedBySpecies[owners[node]].push(node);
    }
    civilizationData.forEach((species, speciesIndex) => {
      const territory = ownedBySpecies[speciesIndex];
      if (!seeded[speciesIndex] || territory.length === 0 || time >= 650) return;
      const attempts = 1 + Math.floor(species.expansionRate + friendlyCounts[speciesIndex] * .34);
      for (let attempt = 0; attempt < attempts; attempt++) {
        const frontier = [];
        territory.forEach((source) => {
          simulation.adjacency[source].forEach((target) => {
            if (owners[target] !== speciesIndex) frontier.push([source, target]);
          });
        });
        if (frontier.length === 0) break;
        const [source, target] = frontier[Math.floor(random() * frontier.length)];
        const defender = owners[target];
        if (defender < 0) {
          if (reservedFor[target] >= 0 && reservedFor[target] !== speciesIndex && !seeded[reservedFor[target]]) continue;
          if (random() < .18 + species.expansionRate * .19 + friendlyCounts[speciesIndex] * .025) {
            owners[target] = speciesIndex;
            strength[target] = Math.max(.14, strength[source] * .34);
            territory.push(target);
            lastCauses[speciesIndex] = friendlyCounts[speciesIndex] > 0 ? '协作网络推动殖民' : '殖民前沿扩张';
          }
          continue;
        }
        const state = relationStates[relationIndex(speciesIndex, defender)];
        if (state > 0) {
          strength[source] = Math.min(1.35, strength[source] + .018);
          strength[target] = Math.min(1.35, strength[target] + .012);
          lastCauses[speciesIndex] = `与${civilizationData[defender].name}交流`;
          lastCauses[defender] = `与${species.name}交流`;
          continue;
        }
        if (state < 0) {
          const attack = strength[source] * (.72 + species.aggression * .76 + random() * .35);
          const defense = strength[target] * (.84 + civilizationData[defender].resilience * .52 + random() * .28);
          if (attack > defense) {
            owners[target] = speciesIndex;
            strength[target] = Math.max(.08, Math.min(.48, (attack - defense) * .5));
            lastCauses[speciesIndex] = `与${civilizationData[defender].name}争夺边界`;
            lastCauses[defender] = `边界被${species.name}突破`;
          } else {
            strength[source] *= .84;
            strength[target] *= .92;
            lastCauses[speciesIndex] = `对${civilizationData[defender].name}的进攻受挫`;
          }
        } else if (random() < species.aggression * .035) {
          const lowered = relationScores[relationIndex(speciesIndex, defender)] - .055;
          setRelation(speciesIndex, defender, lowered, lowered < -.26 ? -1 : 0);
        }
      }
    });

    if (time >= 620) {
      const decline = THREE.MathUtils.smoothstep(time, 620, 710);
      for (let node = 0; node < nodeCount; node++) {
        const owner = owners[node];
        if (owner < 0 || civilizationData[owner].highDimensional && time >= civilizationData[owner].ascensionAt) continue;
        strength[node] -= .004 + decline * .052;
        if (strength[node] <= .035 || time >= 710) {
          owners[node] = -1;
          strength[node] = 0;
          lastCauses[owner] = '恒星能源枯竭';
        }
      }
    }

    const counts = new Uint16Array(speciesCount);
    const populations = new Float32Array(speciesCount);
    for (let node = 0; node < nodeCount; node++) {
      const owner = owners[node];
      if (owner < 0) continue;
      counts[owner]++;
      populations[owner] += strength[node];
    }
    const trends = new Int8Array(speciesCount);
    const active = new Uint8Array(speciesCount);
    const ascended = new Uint8Array(speciesCount);
    for (let speciesIndex = 0; speciesIndex < speciesCount; speciesIndex++) {
      trends[speciesIndex] = Math.sign(counts[speciesIndex] - lastCounts[speciesIndex]);
      active[speciesIndex] = seeded[speciesIndex] && counts[speciesIndex] > 0 ? 1 : 0;
      ascended[speciesIndex] = civilizationData[speciesIndex].highDimensional && time >= civilizationData[speciesIndex].ascensionAt ? 1 : 0;
      lastCounts[speciesIndex] = counts[speciesIndex];
    }
    simulation.snapshots.push({
      time,
      owners: owners.slice(),
      counts,
      populations,
      trends,
      active,
      ascended,
      relations: relationStates.slice(),
      relationScores: relationScores.slice(),
      causes: lastCauses.slice()
    });
  }

  const visiblePairs = [];
  for (let a = 0; a < speciesCount; a++) {
    for (let b = a + 1; b < speciesCount; b++) {
      if (everRelated[relationIndex(a, b)]) {
        visiblePairs.push({ a, b, strength: peakRelationStrength[relationIndex(a, b)] });
      }
    }
  }
  visiblePairs.sort((a, b) => b.strength - a.strength);
  const visibleDegrees = new Uint8Array(speciesCount);
  const visiblePairLimit = Math.ceil(speciesCount * 1.8);
  visiblePairs.slice().forEach(({ a, b }) => {
    if (battleGroup.children.length >= visiblePairLimit || visibleDegrees[a] >= 3 || visibleDegrees[b] >= 3) return;
      const speciesA = civilizationData[a];
      const speciesB = civilizationData[b];
      const points = new Float32Array([
        speciesA.home.x, speciesA.home.y, speciesA.home.z,
        speciesB.home.x, speciesB.home.y, speciesB.home.z
      ]);
      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute('position', new THREE.BufferAttribute(points, 3));
      const material = new THREE.LineBasicMaterial({ color: 0x68e0cb, transparent: true, opacity: 0, depthWrite: false });
      const line = new THREE.Line(geometry, material);
      line.visible = false;
      line.userData = { speciesA: a, speciesB: b };
      battleGroup.add(line);
      visibleDegrees[a]++;
      visibleDegrees[b]++;
  });
  battleGroup.rotation.copy(galaxyGroup.rotation);
}

function civilizationSnapshotAt(position) {
  if (!civilizationSimulation?.snapshots.length) return null;
  const simulation = civilizationSimulation;
  const index = THREE.MathUtils.clamp(
    Math.floor((position - simulation.start) / simulation.step),
    0,
    simulation.snapshots.length - 1
  );
  return simulation.snapshots[index];
}

function applyCivilizationSnapshot(snapshot) {
  if (!snapshot || !civilizationSimulation) return;
  const writeCounts = new Uint16Array(civilizationData.length);
  snapshot.owners.forEach((owner, node) => {
    if (owner < 0) return;
    const target = writeCounts[owner]++;
    civilizationData[owner].hostRemnantIndices[target] = civilizationSimulation.habitatRemnantIndices[node];
  });
  civilizationData.forEach((species, index) => {
    species.displayCount = writeCounts[index];
    civilizationGroups[index].geometry.setDrawRange(0, writeCounts[index]);
  });
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
  $('.universe-data').scrollTop = 0;
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
  cosmicPosition = 0;
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
  const logLerp = (start, end, value) => 10 ** (Math.log10(start) + (Math.log10(end) - Math.log10(start)) * value);
  const formatYears = (years) => {
    if (years < 1) {
      const seconds = years * 31557600;
      if (seconds < 3600) return `${Math.round(seconds / 60)} 分钟`;
      if (seconds < 86400) return `${(seconds / 3600).toFixed(1)} 小时`;
      return `${(seconds / 86400).toFixed(1)} 天`;
    }
    if (years < 1e4) return `${Math.max(1, Math.round(years))} 年`;
    if (years < 1e8) return `${(years / 1e4).toFixed(years < 1e6 ? 1 : 0)} 万年`;
    if (years < 1e12) return `${(years / 1e8).toFixed(years < 1e9 ? 2 : 1)} 亿年`;
    return `10^${Math.log10(years).toFixed(1)} 年`;
  };
  if (position < 18) return `T+${Math.max(.001, logLerp(.001, 1, position / 18)).toFixed(3)} 秒`;
  if (position < 55) return `T+${Math.max(1, Math.round(logLerp(1, 180, (position - 18) / 37)))} 秒`;
  if (position < 145) return `T+${formatYears(logLerp(180 / 31557600, 380000, (position - 55) / 90))}`;
  if (position < 245) return `T+${formatYears(logLerp(380000, 1.8e8, (position - 145) / 100))}`;
  if (position < 340) return `T+${formatYears(logLerp(1.8e8, 1e9, (position - 245) / 95))}`;
  if (position < 470) return `T+${formatYears(logLerp(1e9, 1.38e10, (position - 340) / 130))}`;
  if (position < 570) return `T+${formatYears(logLerp(1.38e10, 1e12, (position - 470) / 100))}`;
  if (position < 650) return `T+10^${(12 + (position - 570) / 80 * 2).toFixed(1)} 年`;
  if (position < 680) return `T+10^${(14 + (position - 650) / 30).toFixed(1)} 年`;
  if (position < 845) return `T+10^${Math.round(15 + (position - 680) / 165 * 23)} 年`;
  if (position < 985) return `T+10^${Math.round(38 + (position - 845) / 140 * (universe.blackHoleEvaporationExponent - 38))} 年`;
  return position < 999 ? `T+10^${universe.blackHoleEvaporationExponent} 年以后` : '趋近热寂';
}

function timelineUnitsPerSecond(position) {
  // The logarithmic timeline is paced as a cinematic journey. At 1× the full
  // 0–1000 range takes 35 minutes, leaving visible dwell time at both endpoints.
  return 1000 / NORMAL_JOURNEY_SECONDS;
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
    const expansion = Math.min(1, position / 145);
    // A comoving sample volume: every location expands with every other one.
    // There is deliberately no explosion centre or propagating shock front.
    const radius = 25 + Math.pow(expansion, .58) * 14;
    const array = primordialParticles.geometry.attributes.position.array;
    for (let i = 0; i < primordialFactors.length; i++) {
      const r = radius * primordialFactors[i];
      array[i * 3] = primordialDirections[i * 3] * r;
      array[i * 3 + 1] = primordialDirections[i * 3 + 1] * r;
      array[i * 3 + 2] = primordialDirections[i * 3 + 2] * r;
    }
    primordialParticles.geometry.attributes.position.needsUpdate = true;
    primordialParticles.material.opacity = .92 * (1 - THREE.MathUtils.smoothstep(position, 112, 150));
    primordialParticles.material.size = .2 - expansion * .085;

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
    expansionStreaks.material.opacity = 0;
    bangCore.material.opacity = 0;
    shockwaves.forEach((wave) => { wave.material.opacity = 0; });
  }

  const normalBackground = new THREE.Color(0x050508);
  const currentBackground = normalBackground.clone();
  if (position < 70) {
    const cooling = THREE.MathUtils.smoothstep(position, 0, 70);
    currentBackground.lerpColors(new THREE.Color(0x2a1108), normalBackground, cooling);
    renderer.toneMappingExposure = 1.15 + (1 - cooling) * 2.2;
  } else if (position > 985) {
    // Heat death is the disappearance of usable gradients, not a global dimmer.
    const cooling = THREE.MathUtils.smoothstep(position, 985, 1000);
    currentBackground.lerpColors(normalBackground, new THREE.Color(0x03050a), cooling * .32);
    renderer.toneMappingExposure = 1.15;
  } else {
    renderer.toneMappingExposure = 1.15;
  }
  renderer.setClearColor(currentBackground, 1);
  scene.fog.color.copy(currentBackground);

  if (!clickableStars || !originalGalaxyPositions) return;
  const stellarEnd = stellarEndTimelinePosition();
  const formation = THREE.MathUtils.smoothstep(position, 220, 340);
  const stellarPopulation = 1 - THREE.MathUtils.smoothstep(position, stellarEnd - 75, stellarEnd + 10);
  clickableStars.material.opacity = formation * .9;
  clickableStars.material.size = .09;
  if (!transition) galaxyGroup.scale.setScalar(1);

  const positionArray = clickableStars.geometry.attributes.position.array;
  const colorArray = clickableStars.geometry.attributes.color.array;
  for (let i = 0; i < originalGalaxyPositions.length; i += 3) {
    const starIndex = i / 3;
    const alive = 1 - THREE.MathUtils.smoothstep(position, starDeathThresholds[starIndex], starDeathThresholds[starIndex] + 22);
    positionArray[i] = originalGalaxyPositions[i];
    positionArray[i + 1] = originalGalaxyPositions[i + 1];
    positionArray[i + 2] = originalGalaxyPositions[i + 2];
    colorArray[i] = originalGalaxyColors[i] * alive;
    colorArray[i + 1] = originalGalaxyColors[i + 1] * alive;
    colorArray[i + 2] = originalGalaxyColors[i + 2] * alive;
  }
  cosmicEvents.forEach((event) => {
    if (position < event.impactAt) return;
    const aftermath = THREE.MathUtils.smoothstep(position, event.impactAt, event.impactAt + 24);
    event.starImpacts.forEach((impact) => {
      const offset = impact.index * 3;
      positionArray[offset] += impact.kick[0] * aftermath;
      positionArray[offset + 1] += impact.kick[1] * aftermath;
      positionArray[offset + 2] += impact.kick[2] * aftermath;
      colorArray[offset] *= impact.dimFactor;
      colorArray[offset + 1] *= impact.dimFactor;
      colorArray[offset + 2] *= impact.dimFactor;
    });
  });
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

  const remnantsVisible = position > stellarEnd - 80 && position < 930;
  const blackHolesVisible = position > 825 && position < 995;
  remnantGroup.visible = (remnantsVisible || blackHolesVisible) && mode === 'explorer';
  if (remnantsVisible && stellarRemnants) {
    const remnantBirth = THREE.MathUtils.smoothstep(position, stellarEnd - 80, stellarEnd + 15);
    const remnantFade = 1 - THREE.MathUtils.smoothstep(position, 845, 930);
    stellarRemnants.material.opacity = remnantBirth * remnantFade * .64;
    const remnantArray = stellarRemnants.geometry.attributes.position.array;
    const writeOrbit = (index, samplePosition) => {
      const offset = index * 3;
      const x = originalRemnantPositions[offset];
      const y = originalRemnantPositions[offset + 1];
      const z = originalRemnantPositions[offset + 2];
      const ax = remnantDynamics.axes[offset];
      const ay = remnantDynamics.axes[offset + 1];
      const az = remnantDynamics.axes[offset + 2];
      const angle = Math.max(0, samplePosition - 570) * remnantDynamics.orbitRates[index];
      const cosine = Math.cos(angle);
      const sine = Math.sin(angle);
      const dot = ax * x + ay * y + az * z;
      remnantArray[offset] = x * cosine + (ay * z - az * y) * sine + ax * dot * (1 - cosine);
      remnantArray[offset + 1] = y * cosine + (az * x - ax * z) * sine + ay * dot * (1 - cosine);
      remnantArray[offset + 2] = z * cosine + (ax * y - ay * x) * sine + az * dot * (1 - cosine);
    };

    for (let index = 0; index < originalRemnantPositions.length / 3; index++) {
      const offset = index * 3;
      const fate = remnantDynamics.fates[index];
      const transitionAt = remnantDynamics.escapeAt[index];
      if (position < transitionAt || fate === 1) {
        writeOrbit(index, position);
        continue;
      }

      if (fate === 2) {
        const infall = THREE.MathUtils.smoothstep(position, transitionAt, Math.min(900, transitionAt + 42));
        writeOrbit(index, position + infall * 150);
        const radiusScale = 1 - infall * .985;
        remnantArray[offset] *= radiusScale;
        remnantArray[offset + 1] *= radiusScale;
        remnantArray[offset + 2] *= radiusScale;
        continue;
      }

      writeOrbit(index, transitionAt);
      const startX = remnantArray[offset];
      const startY = remnantArray[offset + 1];
      const startZ = remnantArray[offset + 2];
      const radius = Math.max(.001, Math.hypot(startX, startY, startZ));
      const ax = remnantDynamics.axes[offset];
      const ay = remnantDynamics.axes[offset + 1];
      const az = remnantDynamics.axes[offset + 2];
      const orbitDirection = Math.sign(remnantDynamics.orbitRates[index]) || 1;
      let tangentX = (ay * startZ - az * startY) * orbitDirection;
      let tangentY = (az * startX - ax * startZ) * orbitDirection;
      let tangentZ = (ax * startY - ay * startX) * orbitDirection;
      const tangentLength = Math.max(.001, Math.hypot(tangentX, tangentY, tangentZ));
      tangentX /= tangentLength; tangentY /= tangentLength; tangentZ /= tangentLength;
      let directionX = tangentX * .9 + startX / radius * .34;
      let directionY = tangentY * .9 + startY / radius * .34 + ay * Math.sin(index * 12.9898) * .08;
      let directionZ = tangentZ * .9 + startZ / radius * .34;
      const directionLength = Math.max(.001, Math.hypot(directionX, directionY, directionZ));
      directionX /= directionLength; directionY /= directionLength; directionZ /= directionLength;
      const progress = THREE.MathUtils.clamp((position - transitionAt) / Math.max(1, 900 - transitionAt), 0, 1);
      const distance = fate === 3
        ? Math.pow(progress, .72) * (18 + remnantDynamics.speeds[index] * 7)
        : Math.pow(progress, 1.35) * (6 + remnantDynamics.speeds[index] * 11);
      remnantArray[offset] = startX + directionX * distance;
      remnantArray[offset + 1] = startY + directionY * distance;
      remnantArray[offset + 2] = startZ + directionZ * distance;
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

  heatDeathGroup.visible = position > 930 && mode === 'explorer';
  if (coldPhotons && originalPhotonPositions && originalPhotonColors) {
    const radiationBirth = THREE.MathUtils.smoothstep(position, 930, 955);
    const redshift = THREE.MathUtils.smoothstep(position, 950, 1000);
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

    if (event.visual === 'supernova') {
      const ignition = THREE.MathUtils.smoothstep(phase, 0, .028);
      const flash = ignition * (1 - THREE.MathUtils.smoothstep(phase, .045, .19));
      const afterglow = (1 - THREE.MathUtils.smoothstep(phase, .12, 1)) * ignition;
      effect.innerFlash.material.opacity = flash * .98;
      const flashScale = .08 + Math.pow(Math.min(1, phase / .16), .28) * .72;
      effect.innerFlash.scale.set(flashScale, flashScale, 1);
      effect.photosphere.material.opacity = flash * .58 + afterglow * .2;
      const photosphereScale = .16 + Math.pow(phase, .56) * 1.15;
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
      const shellRadius = .12 + (1 - Math.pow(1 - phase, 2.4)) * 2.25;
      for (let i = 0; i < effect.shellNoise.length; i++) {
        const offset = i * 3;
        const uneven = 1 + Math.sin(effect.shellNoise[i] + phase * 4.5) * .055 + Math.sin(i * 2.1) * .025;
        shellArray[offset] = effect.shellDirections[offset] * shellRadius * uneven;
        shellArray[offset + 1] = effect.shellDirections[offset + 1] * shellRadius * uneven;
        shellArray[offset + 2] = effect.shellDirections[offset + 2] * shellRadius * uneven;
      }
      effect.shell.geometry.attributes.position.needsUpdate = true;
      effect.shell.material.opacity = THREE.MathUtils.smoothstep(phase, .04, .14) * (1 - THREE.MathUtils.smoothstep(phase, .5, 1)) * .34;
    } else if (event.visual === 'pulsar') {
      const envelope = Math.pow(Math.sin(phase * Math.PI), .45);
      const glitchScale = event.type === 'pulsar-glitch' ? .22 : 1;
      effect.core.material.opacity = envelope * .92;
      effect.halo.material.opacity = envelope * .16 * glitchScale;
      effect.nebula.material.opacity = envelope * .095 * glitchScale;
      effect.halo.scale.set(1.05, 1.05, 1);
      effect.jets.material.opacity = envelope * .18 * glitchScale;
      effect.fieldLines.forEach((field, fieldIndex) => {
        field.material.opacity = envelope * (.055 - fieldIndex * .007) * glitchScale;
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
      // Vacuum black-hole mergers are not expected to produce a bright
      // electromagnetic flash; retain only a faint locator for legibility.
      effect.mergerGlow.material.opacity = mergerFlash * .045;
      const glowScale = .3 + postMerge * 2.4;
      effect.mergerGlow.scale.set(glowScale, glowScale, 1);
      effect.wavefronts.forEach((wave, waveIndex) => {
        const delay = waveIndex * .11;
        const local = THREE.MathUtils.clamp((postMerge - delay) / (1 - delay), 0, 1);
        wave.visible = merged && local > 0;
        wave.scale.setScalar(.3 + Math.pow(local, .62) * (3.2 + waveIndex * .7));
        wave.material.opacity = Math.sin(local * Math.PI) * .075 * (1 - waveIndex * .16);
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
    if (event.visual === 'supernova') {
      effect.innerFlash.material.rotation = now * .00007;
      effect.photosphere.material.rotation = -now * .000035;
      effect.ejecta.rotation.y = Math.sin(now * .00021) * .035;
    } else if (event.visual === 'pulsar') {
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
      const glitchScale = event.type === 'pulsar-glitch' ? .16 : 1;
      effect.jets.material.opacity = event.group.userData.intensity * (.34 + alignment * .58) * pulse * glitchScale;
      effect.sweepGlow.material.opacity = event.group.userData.intensity * alignment * pulse * .78 * glitchScale;
      const sweepScale = .5 + alignment * 1.8;
      effect.sweepGlow.scale.set(sweepScale, sweepScale, 1);
      effect.knots.forEach((knot) => {
        const travel = (now * .00055 + knot.userData.offset) % 1;
        knot.position.set(0, knot.userData.side * (.18 + travel * 2.45), 0);
        knot.material.opacity = event.group.userData.intensity * Math.sin(travel * Math.PI) * (.12 + alignment * .55) * glitchScale;
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

function civilizationConsequencesAt(position, speciesIndex) {
  let capacityFactor = 1;
  let collapsedAt = Infinity;
  const causes = [];
  const species = civilizationData[speciesIndex];
  cosmicEvents.forEach((event) => {
    if (position < event.impactAt) return;
    if (species?.highDimensional && event.impactAt >= species.ascensionAt) return;
    const impact = event.civilizationImpacts.find((item) => item.speciesIndex === speciesIndex);
    if (!impact) return;
    capacityFactor *= 1 - impact.lossFraction;
    if (impact.collapse) collapsedAt = Math.min(collapsedAt, event.impactAt);
    causes.push(event.label);
  });
  return { capacityFactor, collapsedAt, lossFraction: 1 - capacityFactor, causes };
}

function syncCivilizationHosts() {
  if (!stellarRemnants) return;
  const remnantPositions = stellarRemnants.geometry.attributes.position.array;
  const rotatedOffset = new THREE.Vector3();
  const rotateOffsetWithHost = (hostIndex, x, y, z, target) => {
    const offset = hostIndex * 3;
    const samplePosition = Math.min(cosmicPosition, remnantDynamics.escapeAt[hostIndex]);
    const angle = Math.max(0, samplePosition - 570) * remnantDynamics.orbitRates[hostIndex];
    const cosine = Math.cos(angle);
    const sine = Math.sin(angle);
    const ax = remnantDynamics.axes[offset];
    const ay = remnantDynamics.axes[offset + 1];
    const az = remnantDynamics.axes[offset + 2];
    const dot = ax * x + ay * y + az * z;
    target.set(
      x * cosine + (ay * z - az * y) * sine + ax * dot * (1 - cosine),
      y * cosine + (az * x - ax * z) * sine + ay * dot * (1 - cosine),
      z * cosine + (ax * y - ay * x) * sine + az * dot * (1 - cosine)
    );
  };
  civilizationData.forEach((species, speciesIndex) => {
    const civilization = civilizationGroups[speciesIndex];
    if (!civilization) return;
    const colonyPositions = civilization.geometry.attributes.position.array;
    for (let colonyIndex = 0; colonyIndex < species.displayCount; colonyIndex++) {
      const hostIndex = species.hostRemnantIndices[colonyIndex];
      const source = hostIndex * 3;
      const target = colonyIndex * 3;
      rotateOffsetWithHost(
        hostIndex,
        species.hostOffsets[target],
        species.hostOffsets[target + 1],
        species.hostOffsets[target + 2],
        rotatedOffset
      );
      colonyPositions[target] = remnantPositions[source] + rotatedOffset.x;
      colonyPositions[target + 1] = remnantPositions[source + 1] + rotatedOffset.y;
      colonyPositions[target + 2] = remnantPositions[source + 2] + rotatedOffset.z;
      if (species.highDimensional && cosmicPosition >= species.ascensionAt) {
        const projection = THREE.MathUtils.smoothstep(cosmicPosition, species.ascensionAt, species.ascensionAt + 34);
        const phase = colonyIndex * 1.618 + cosmicPosition * .035;
        colonyPositions[target] += Math.sin(phase) * projection * .7;
        colonyPositions[target + 1] += Math.cos(phase * .73) * projection * .42;
        colonyPositions[target + 2] += Math.sin(phase * .51 + 2.1) * projection * .7;
      }
    }
    civilization.geometry.attributes.position.needsUpdate = true;

    const homeOffset = species.homeRemnantIndex * 3;
    rotateOffsetWithHost(
      species.homeRemnantIndex,
      species.homeOffset.x,
      species.homeOffset.y,
      species.homeOffset.z,
      rotatedOffset
    );
    species.home.set(
      remnantPositions[homeOffset] + rotatedOffset.x,
      remnantPositions[homeOffset + 1] + rotatedOffset.y,
      remnantPositions[homeOffset + 2] + rotatedOffset.z
    );
    if (species.highDimensional && cosmicPosition >= species.ascensionAt) {
      const projection = THREE.MathUtils.smoothstep(cosmicPosition, species.ascensionAt, species.ascensionAt + 34);
      const phase = speciesIndex * 2.17 + cosmicPosition * .035;
      species.home.x += Math.sin(phase) * projection * .7;
      species.home.y += Math.cos(phase * .73) * projection * .42;
      species.home.z += Math.sin(phase * .51 + 2.1) * projection * .7;
    }
  });

  battleGroup.children.forEach((line) => {
    const a = civilizationData[line.userData.speciesA];
    const b = civilizationData[line.userData.speciesB];
    if (!a || !b) return;
    const positions = line.geometry.attributes.position.array;
    positions.set([a.home.x, a.home.y, a.home.z, b.home.x, b.home.y, b.home.z]);
    line.geometry.attributes.position.needsUpdate = true;
    line.computeLineDistances();
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
  const galaxyIdentityOpacity = THREE.MathUtils.smoothstep(cosmicPosition, 245, 325)
    * (1 - THREE.MathUtils.smoothstep(cosmicPosition, 820, 900));
  $('.explorer-title').style.setProperty('--cosmic-opacity', galaxyIdentityOpacity.toFixed(3));

  if (!clickableStars) return;
  updateEpochVisuals(cosmicPosition);
  const simulationState = civilizationSnapshotAt(cosmicPosition);
  applyCivilizationSnapshot(simulationState);
  syncCivilizationHosts();

  let activeSpecies = 0;
  let ascendedSpecies = 0;
  civilizationRuntimeState = [];
  civilizationData.forEach((species, index) => {
    const eventState = civilizationConsequencesAt(cosmicPosition, index);
    const alive = Boolean(simulationState?.active[index]);
    const ascended = Boolean(simulationState?.ascended[index]) && alive;
    const count = simulationState?.counts[index] || 0;
    const trend = simulationState?.trends[index] || 0;
    const friendlyNames = [];
    const conflictNames = [];
    civilizationData.forEach((other, otherIndex) => {
      if (otherIndex === index || !simulationState) return;
      const relation = simulationState.relations[index * civilizationData.length + otherIndex];
      if (relation > 0) friendlyNames.push(other.name);
      if (relation < 0) conflictNames.push(other.name);
    });
    civilizationRuntimeState[index] = { alive, ascended, count, eventState, friendlyNames, conflictNames };
    civilizationGroups[index].visible = alive && count > 0;
    civilizationGroups[index].material.opacity = ascended ? .88 : .98;
    civilizationGroups[index].material.size = ascended ? .31 : .24;
    civilizationGroups[index].material.color.setHex(ascended ? 0xe9d7ff : species.color);
    const row = document.querySelector(`[data-species="${index}"]`);
    if (row) {
      row.style.opacity = alive ? '1' : '.18';
      row.classList.toggle('is-impacted', alive && (conflictNames.length > 0 || eventState.causes.length > 0));
      row.classList.toggle('is-ascended', ascended);
      const details = [];
      if (simulationState?.causes[index]) details.push(simulationState.causes[index]);
      if (friendlyNames.length) details.push(`与 ${friendlyNames.join('、')} 友好交流`);
      if (conflictNames.length) details.push(`与 ${conflictNames.join('、')} 冲突`);
      if (eventState.causes.length) details.push(`受 ${eventState.causes.join('、')} 影响`);
      row.title = ascended ? '1% 概率的高维转化：已脱离普通物质宿主' : details.join('；');
      row.querySelector('b').textContent = alive
        ? (ascended ? '超维存续' : `${count} 域${trend > 0 ? ' ↑' : trend < 0 ? ' ↓' : ''}`)
        : cosmicPosition < species.birth ? '未诞生' : '衰亡';
    }
    if (alive) {
      activeSpecies++;
      if (ascended) ascendedSpecies++;
    }
  });
  $('#civilization-legend').style.setProperty('--cosmic-opacity', activeSpecies > 0 ? '1' : '0');

  let activeRelationship = null;
  battleGroup.children.forEach((line) => {
    const speciesAState = civilizationRuntimeState[line.userData.speciesA];
    const speciesBState = civilizationRuntimeState[line.userData.speciesB];
    if (!speciesAState?.alive || !speciesBState?.alive || speciesAState.ascended || speciesBState.ascended) {
      line.visible = false;
      line.material.opacity = 0;
      return;
    }
    const relationState = simulationState?.relations[
      line.userData.speciesA * civilizationData.length + line.userData.speciesB
    ] || 0;
    if (relationState === 0) {
      line.visible = false;
      line.material.opacity = 0;
      return;
    }
    line.visible = true;
    if (relationState < 0) {
      line.userData.relationship = 'conflict';
      line.material.color.setHex(0xff624f);
      line.material.opacity = .24 + Math.sin(performance.now() * .016) * .1;
      activeRelationship = line.userData;
    } else {
      line.userData.relationship = 'coexistence';
      line.material.color.setHex(0x68e0cb);
      line.material.opacity = .16;
      if (!activeRelationship) activeRelationship = line.userData;
    }
  });

  const activeEvent = updateCosmicEvents(cosmicPosition);

  if (activeEvent) {
    const impacted = cosmicPosition >= activeEvent.impactAt;
    const aftermath = impacted ? `；${activeEvent.outcome}` : '';
    setEvent(`${activeEvent.id}-${impacted ? 'aftermath' : 'forming'}`, label, `${activeEvent.label}：${activeEvent.message}${aftermath}`, force);
  } else if (activeRelationship) {
    const a = civilizationData[activeRelationship.speciesA];
    const b = civilizationData[activeRelationship.speciesB];
    const text = activeRelationship.relationship === 'conflict'
      ? `${a.name} 与 ${b.name} 的边界冲突正在削减双方疆域`
      : `${a.name} 与 ${b.name} 建立友好共存区，共享资源与航路`;
    setEvent(`relation-${activeRelationship.relationship}-${activeRelationship.speciesA}-${activeRelationship.speciesB}`, label, text, force);
  } else if (ascendedSpecies > 0) {
    setEvent(`ascended-${ascendedSpecies}`, label, `${ascendedSpecies} 个种群已转化为高维生命，脱离恒星与黑洞的普通物质演化`, force);
  } else if (cosmicPosition < 55) {
    setEvent('bang', 'T+0', '整个可观测区域处于超高温、高密度状态，空间本身在膨胀', force);
  } else if (cosmicPosition < 145) {
    setEvent('plasma', label, '光子在等离子体中不断散射，宇宙随膨胀持续冷却', force);
  } else if (cosmicPosition < 245) {
    setEvent('dark', label, '复合后宇宙变得透明，但尚没有恒星光', force);
  } else if (cosmicPosition < 340) {
    setEvent('stars', label, '第一代恒星与星系点亮，再电离逐渐开始', force);
  } else if (activeSpecies > 0) {
    setEvent(`life-${activeSpecies}`, label, `${activeSpecies} 个主要文明种群正在跨越恒星系扩张`, force);
  } else if (cosmicPosition < 430) {
    setEvent('chemistry', label, '重元素丰度上升，宜居行星开始形成', force);
  } else if (cosmicPosition < Math.min(...civilizationData.map((species) => species.birth), 620)) {
    setEvent('waiting-life', label, '宜居世界正在积累复杂化学反应，智慧生命尚未出现', force);
  } else if (cosmicPosition < 620) {
    setEvent('silence', label, '文明信号已经沉寂，只剩无人维护的轨道遗迹', force);
  } else if (cosmicPosition < 650) {
    setEvent('last-stars', label, '恒星形成早已停止，最后的低质量红矮星仍在极缓慢地消耗燃料', force);
  } else if (cosmicPosition < 710) {
    setEvent('degenerate', label, '最后一批红矮星熄灭，恒星残骸仍被星系引力束缚并长期绕核运行', force);
  } else if (cosmicPosition < 845) {
    setEvent('evaporation', label, '长期引力近遇持续重分配能量，少数残骸逐个逃离，极少数落向星系中心', force);
  } else if (cosmicPosition < 985) {
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
    epochEffectsGroup.position.set(0, 0, 0);
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
