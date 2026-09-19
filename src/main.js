import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import './style.css';
import { galaxyTypes, speciesColors, speciesNames, eras } from './domain/catalog.js';
import { mulberry32, randomBetween, gaussianRandom } from './domain/random.js';
import { createUniverse, stellarEndTimelinePosition } from './domain/universe.js';
import { cosmicTimeLabel, createCosmicTimelineState, selectTimelineNarrative, timelineUnitsPerSecond } from './domain/cosmic-time.js';
import { getPointTexture, makeGlowTexture, makeRingTexture } from './rendering/textures.js';
import { applyCivilizationSnapshot, syncCivilizationHosts } from './rendering/civilizations.js';
import { animateCosmicEvents, updateCosmicEvents, updateEpochVisuals } from './rendering/timeline-visuals.js';
import { buildCivilizationSimulation, civilizationSnapshotAt, deriveCivilizationRuntime, findDominantRelationship } from './simulation/civilization.js';
import { updateUniverseData } from './ui/universe-data.js';
import { renderCivilizationRows, renderTimelineEvent, renderTimelineHeader } from './ui/timeline.js';
import { organizeCivilizationLegend, resetCivilizationLegend } from './ui/civilization-legend.js';

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
let cosmicEvents = [];
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
  const stellarEnd = stellarEndTimelinePosition(universe);
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
  buildCivilizationSimulation({ universe, civilizationData, civilizationSimulation, cosmicEvents });
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
    // Sample isotropic comoving coordinates inside a sphere. Independent XYZ
    // samples would fill a cube and expose square corners during expansion.
    const azimuth = random() * Math.PI * 2;
    const vertical = randomBetween(random, -1, 1);
    const horizontal = Math.sqrt(1 - vertical * vertical);
    const volumeRadius = Math.cbrt(random());
    primordialDirections[i * 3] = Math.cos(azimuth) * horizontal * volumeRadius;
    primordialDirections[i * 3 + 1] = vertical * volumeRadius;
    primordialDirections[i * 3 + 2] = Math.sin(azimuth) * horizontal * volumeRadius;
    primordialFactors[i] = THREE.MathUtils.clamp(
      1 + gaussianRandom(random) * .035 * universe.primordialFluctuation,
      .82,
      1.18
    );
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
    depthTest: false,
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
      depthTest: false,
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
      evaporationAt: isCentral ? 949 : 880 + Math.pow(random(), .46) * 64,
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
    const photonColor = new THREE.Color().setHSL(.56 + random() * .1, .28, .46 + random() * .22);
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
    size: .11,
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
    marker.setAttribute('aria-label', `${event.label}，${cosmicTimeLabel(event.start, universe)}；${event.outcome}`);
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
  resetCivilizationLegend();
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



function regenerate() {
  if (mode !== 'generator') return;
  universe = createUniverse();
  updateUniverseData(universe);
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
  timePlaying = true;
  $('#toggle-time').textContent = 'Ⅱ';
  $('#toggle-time').setAttribute('aria-label', '暂停时间');
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
  timePlaying = false;
  $('#toggle-time').textContent = '▶';
  $('#toggle-time').setAttribute('aria-label', '播放时间');
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

function advanceCosmicTime(deltaSeconds) {
  cosmicPosition += deltaSeconds * timelineUnitsPerSecond(cosmicPosition) * timeSpeed;
}



function toggleHud() {
  if (mode !== 'explorer') return;
  const hidden = !$('#explorer-view').classList.contains('is-hud-hidden');
  $('#explorer-view').classList.toggle('is-hud-hidden', hidden);
  document.body.classList.toggle('is-hud-hidden', hidden);
  $('#toggle-hud').setAttribute('aria-pressed', String(hidden));
  $('#toggle-hud').setAttribute('aria-label', hidden ? '显示观察界面' : '隐藏观察界面');
}







function timelineVisualContext() {
  return {
    mode, epochEffectsGroup, primordialParticles, primordialFactors, primordialDirections,
    expansionStreaks, expansionDirections, bangCore, shockwaves, renderer, scene,
    clickableStars, originalGalaxyPositions, universe, transition, galaxyGroup,
    starDeathThresholds, originalGalaxyColors, cosmicEvents, remnantGroup,
    stellarRemnants, originalRemnantPositions, remnantDynamics, blackHoleRemnants,
    heatDeathGroup, coldPhotons, originalPhotonPositions, originalPhotonColors,
    cosmicEventGroup
  };
}

function applyCivilizationVisuals(runtimeState) {
  runtimeState.forEach((state, index) => {
    const group = civilizationGroups[index];
    const species = civilizationData[index];
    group.visible = state.alive && state.count > 0;
    group.material.opacity = state.ascended ? .88 : .98;
    group.material.size = state.ascended ? .31 : .24;
    group.material.color.setHex(state.ascended ? 0xe9d7ff : species.color);
  });
}

function updateCosmicTime(value, force = false) {
  const timelineState = createCosmicTimelineState(value, universe, eras);
  cosmicPosition = timelineState.position;
  renderTimelineHeader(timelineState);

  if (!clickableStars) return;

  updateEpochVisuals(cosmicPosition, timelineVisualContext());
  const simulationState = civilizationSnapshotAt(civilizationSimulation, cosmicPosition);
  applyCivilizationSnapshot(simulationState, {
    civilizationSimulation,
    civilizationData,
    civilizationGroups
  });
  syncCivilizationHosts({
    stellarRemnants,
    remnantDynamics,
    cosmicPosition,
    civilizationData,
    civilizationGroups
  });

  civilizationRuntimeState = deriveCivilizationRuntime(
    cosmicPosition,
    simulationState,
    civilizationData,
    cosmicEvents
  );
  applyCivilizationVisuals(civilizationRuntimeState);
  renderCivilizationRows({
    position: cosmicPosition,
    simulationState,
    runtimeState: civilizationRuntimeState,
    civilizationData
  });
  organizeCivilizationLegend(simulationState, civilizationData);

  const activeSpecies = civilizationRuntimeState.filter((state) => state.alive).length;
  const ascendedSpecies = civilizationRuntimeState.filter((state) => state.ascended).length;
  const activeRelationship = findDominantRelationship(
    simulationState,
    civilizationRuntimeState,
    civilizationData.length
  );
  const activeEvent = updateCosmicEvents(cosmicPosition, timelineVisualContext());
  const narrative = selectTimelineNarrative({
    position: cosmicPosition,
    label: timelineState.label,
    activeEvent,
    activeRelationship,
    ascendedSpecies,
    activeSpecies,
    civilizationData
  });
  renderTimelineEvent(narrative, force);
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
    animateCosmicEvents(now, {
      cosmicEventGroup,
      prefersReducedMotion,
      cosmicEvents,
      camera
    });
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
updateUniverseData(universe);
buildUniverseObject();
buildGalaxy();
animate(performance.now());
