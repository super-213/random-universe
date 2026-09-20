import * as THREE from 'three';
import './style.css';
import { createSeededRandom } from './domain/random.js';
import { createUniverse } from './domain/universe.js';
import { galaxyTypes as galaxyTypeLabels } from './domain/catalog.js';
import { createLocalGalaxyGroup } from './domain/local-group.js';
import { disposeSharedTextures, getPointTexture } from './rendering/textures.js';
import { createUniverseRenderer } from './rendering/renderer.js';
import { civilizationObservation } from './simulation/observation.js';
import { shuttleTrafficAt } from './simulation/intergalactic-travel.js';
import {
  historyExportPayload,
  renderCivilizationChronicle,
  renderMultiverseComparison
} from './ui/civilization-chronicle.js';
import { updateUniverseData } from './ui/universe-data.js';

let erasForUniverse;
let galaxyTypes;
let speciesColors;
let speciesNames;
let randomBetween;
let gaussianRandom;
let createStellarDawnModel;
let STELLAR_DAWN_END;
let STELLAR_DAWN_START;
let stellarEndTimelinePosition;
let cosmicTimeLabel;
let cosmicYearsToTimelinePosition;
let createCosmicTimelineState;
let referenceFutureYearsAtTimelinePosition;
let selectTimelineNarrative;
let timelineUnitsPerSecond;
let makeGlowTexture;
let makeRingTexture;
let animateBlackHoleVisual;
let createBlackHoleVisual;
let applyCivilizationSnapshot;
let syncCivilizationHosts;
let createCivilizationEventVisual;
let animateCosmicEvents;
let updateCosmicEvents;
let updateEpochVisuals;
let createMergerGravityField;
let createStellarGravityState;
let blackHoleEvaporationExponent;
let blackHoleMassFromSimulation;
let selectBlackHoleProgenitors;
let buildCivilizationSimulationAsync;
let civilizationSnapshotAt;
let deriveCivilizationRuntime;
let findDominantRelationship;
let createCivilizationEventPlan;
let expandEventSchedule;
let applyTransientImpactScales;
let createTransientGravityField;
let createTransientSimulation;
let describeTransientSimulation;
let focusTimelineScale;
let renderCivilizationRows;
let renderTimelineEvent;
let renderTimelineHeader;
let renderTimelineScale;
let resetTimelineScaleFocus;
let restartTimelineScaleIntro;
let clusterTimelineEvents;
let nearestTimelineEvent;
let timelineDetailWindow;
let timelinePercentAt;
let timelinePositionAtPercent;
let zoomTimelineViewport;
let organizeCivilizationLegend;
let resetCivilizationLegend;

const $ = (selector) => document.querySelector(selector);
const canvas = $('#universe');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const compactCivilizationLayout = window.matchMedia('(max-width: 800px)');
const timelineUpdateIntervalMs = 1000 / 30;
const coordinateUpdateIntervalMs = 100;
const maxVisibleIntergalacticShips = 3;
const showCivilizationLogistics = false;
const coordinateElements = [$('#coord-x'), $('#coord-y'), $('#coord-z')];

const { renderer } = await createUniverseRenderer(canvas);

const scene = new THREE.Scene();
scene.fog = new THREE.FogExp2(0x050508, 0.008);
const camera = new THREE.PerspectiveCamera(42, innerWidth / innerHeight, 0.1, 200);
camera.position.set(0, 0.5, 32);

let controls = null;
let explorerLoadPromise = null;
let galaxyBuiltForSeed = null;

let universeGroup = new THREE.Group();
let galaxyGroup = new THREE.Group();
let epochEffectsGroup = new THREE.Group();
let remnantGroup = new THREE.Group();
let heatDeathGroup = new THREE.Group();
let cosmicFateGroup = new THREE.Group();
let cosmicEventGroup = new THREE.Group();
let localGroupGroup = new THREE.Group();
scene.add(universeGroup, galaxyGroup, localGroupGroup, epochEffectsGroup, remnantGroup, heatDeathGroup, cosmicFateGroup, cosmicEventGroup);

let universe = null;
let mode = 'generator';
let transition = null;
let pointer = new THREE.Vector2(0, 0);
let smoothedPointer = new THREE.Vector2(0, 0);
let raycaster = new THREE.Raycaster();
raycaster.params.Points.threshold = 0.12;
let clickableStars = null;
let civilizationGroups = [];
let logisticsGroups = [];
let civilizationData = [];
let civilizationRuntimeState = [];
let civilizationSimulation = null;
let civilizationEvents = [];
let blackHoleRemnants = [];
let primordialParticles = null;
let primordialDirections = null;
let primordialFactors = null;
let expansionStreaks = null;
let expansionDirections = null;
let bangCore = null;
let shockwaves = [];
let coldPhotons = null;
let fateBubble = null;
let fateGlow = null;
let originalPhotonPositions = null;
let originalPhotonColors = null;
let stellarRemnants = null;
let originalGalaxyPositions = null;
let originalGalaxyColors = null;
let stellarDawnModel = null;
let dawnGas = null;
let dawnSites = [];
let stellarGravityState = null;
let starDeathThresholds = null;
let originalRemnantPositions = null;
let remnantDynamics = null;
let cosmicPosition = 0;
let timePlaying = false;
let timeSpeed = 10;
let lastFrame = performance.now();
let lastTimelineUpdateAt = 0;
let lastCoordinateUpdateAt = 0;
let cosmicEvents = [];
let timelineMarkerResizeFrame = null;
let animationFrameId = null;
let pageDisposed = false;
let timelineViewport = { start: 0, end: 1000 };
let timelineEventFilter = 'all';
let timelineSnapEnabled = true;
let currentEras = null;
let cachedTimelineVisualContext = null;
let lastCivilizationSnapshot = null;
let activeSpeciesCount = 0;
let ascendedSpeciesCount = 0;
let activeCivilizationRelationship = null;
let selectedChronicleIndex = null;
let observerSpeciesIndex = null;
let localGalaxyGroup = null;
let localGroupRoutes = [];
let intergalacticMarkers = [];
let localGroupGalaxies = [];
let localGroupView = false;
let localGroupFrameRadius = 36;
let shipHighlightEnabled = false;
let keyboardStarIndex = -1;
let keyboardStarMarker = null;
const shipForward = new THREE.Vector3(1, 0, 0);
const shipRouteDirection = new THREE.Vector3();
const shipRouteStart = new THREE.Vector3();
const shipRouteEnd = new THREE.Vector3();

function loadExplorer() {
  if (explorerLoadPromise) return explorerLoadPromise;

  explorerLoadPromise = import('./explorer-dependencies.js').then((explorer) => {
    ({
      erasForUniverse,
      galaxyTypes,
      speciesColors,
      speciesNames,
      randomBetween,
      gaussianRandom,
      createStellarDawnModel,
      STELLAR_DAWN_END,
      STELLAR_DAWN_START,
      stellarEndTimelinePosition,
      cosmicTimeLabel,
      cosmicYearsToTimelinePosition,
      createCosmicTimelineState,
      referenceFutureYearsAtTimelinePosition,
      selectTimelineNarrative,
      timelineUnitsPerSecond,
      makeGlowTexture,
      makeRingTexture,
      animateBlackHoleVisual,
      createBlackHoleVisual,
      applyCivilizationSnapshot,
      syncCivilizationHosts,
      createCivilizationEventVisual,
      animateCosmicEvents,
      updateCosmicEvents,
      updateEpochVisuals,
      createMergerGravityField,
      createStellarGravityState,
      blackHoleEvaporationExponent,
      blackHoleMassFromSimulation,
      selectBlackHoleProgenitors,
      buildCivilizationSimulationAsync,
      civilizationSnapshotAt,
      deriveCivilizationRuntime,
      findDominantRelationship,
      createCivilizationEventPlan,
      expandEventSchedule,
      applyTransientImpactScales,
      createTransientGravityField,
      createTransientSimulation,
      describeTransientSimulation,
      focusTimelineScale,
      renderCivilizationRows,
      renderTimelineEvent,
      renderTimelineHeader,
      renderTimelineScale,
      resetTimelineScaleFocus,
      restartTimelineScaleIntro,
      clusterTimelineEvents,
      nearestTimelineEvent,
      timelineDetailWindow,
      timelinePercentAt,
      timelinePositionAtPercent,
      zoomTimelineViewport,
      organizeCivilizationLegend,
      resetCivilizationLegend
    } = explorer);

    controls = new explorer.OrbitControls(camera, canvas);
    controls.enableDamping = true;
    controls.dampingFactor = 0.045;
    controls.enablePan = false;
    controls.minDistance = 8;
    controls.maxDistance = 46;
    // The camera should only move in response to the observer. Automatic camera
    // orbit made a static galaxy look as though every star suddenly accelerated.
    controls.autoRotate = false;
    controls.enabled = false;
  }).catch((error) => {
    explorerLoadPromise = null;
    throw error;
  });

  return explorerLoadPromise;
}

function addBlackHoleRemnant({
  random,
  massSolar,
  birthAt,
  sourceIndex = null,
  isCentral = false,
  originEventId = null
}) {
  const massScale = THREE.MathUtils.clamp((Math.log10(massSolar) - .6) / 8.4, 0, 1);
  const baseScale = isCentral ? .9 : .3 + massScale * .34;
  const hole = createBlackHoleVisual({
    color: isCentral ? 0xffc996 : (random() > .35 ? 0xffb77c : 0xb9d7ff),
    tilt: randomBetween(random, -.38, .38),
    phase: random() * Math.PI * 2,
    visualScale: isCentral ? 1.14 : 1,
    intensity: 0
  });
  const hawkingGlow = new THREE.Sprite(new THREE.SpriteMaterial({
    map: makeGlowTexture(),
    color: 0x6f9fcc,
    transparent: true,
    opacity: 0,
    depthWrite: false,
    blending: THREE.AdditiveBlending
  }));
  hawkingGlow.scale.set(1.2, 1.2, 1);
  const finalPulse = new THREE.Sprite(new THREE.SpriteMaterial({
    map: makeGlowTexture(),
    color: 0xe8f4ff,
    transparent: true,
    opacity: 0,
    depthWrite: false,
    blending: THREE.AdditiveBlending
  }));
  finalPulse.scale.set(.2, .2, 1);
  hole.add(hawkingGlow, finalPulse);

  if (isCentral) {
    hole.position.set(0, 0, 0);
  } else if (Number.isInteger(sourceIndex)) {
    const offset = sourceIndex * 3;
    hole.position.set(
      originalGalaxyPositions[offset],
      originalGalaxyPositions[offset + 1],
      originalGalaxyPositions[offset + 2]
    );
  }

  const evaporationExponent = blackHoleEvaporationExponent(
    massSolar,
    universe.blackHoleEvaporationExponent
  );
  hole.scale.setScalar(baseScale);
  hole.visible = false;
  Object.assign(hole.userData, {
    baseScale,
    birthAt,
    evaporationAt: cosmicYearsToTimelinePosition(10 ** evaporationExponent, universe),
    evaporationExponent,
    massSolar,
    sourceIndex,
    isCentral,
    originEventId,
    accretionStrength: isCentral
      ? (universe.activeNucleus ? 1.08 : .56)
      : .68 + massScale * .18,
    hawkingGlow,
    finalPulse,
    spinDirection: random() < .5 ? -1 : 1
  });
  blackHoleRemnants.push(hole);
  remnantGroup.add(hole);
  return hole;
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

function buildLocalGroupMap() {
  disposeGroup(localGroupGroup);
  localGroupGroup.rotation.set(0, 0, 0);
  localGroupRoutes = [];
  intergalacticMarkers = [];
  localGroupGalaxies = [];
  localGalaxyGroup = createLocalGalaxyGroup(universe.seed, $('#galaxy-name').textContent);
  const random = createSeededRandom(universe.seed, 7317);
  const stellarEnd = stellarEndTimelinePosition(universe);
  const stellarDeathStart = Math.min(stellarEnd, cosmicYearsToTimelinePosition(4e10, universe));
  localGalaxyGroup.companions.forEach((companion) => {
    const galaxy = new THREE.Group();
    galaxy.position.fromArray(companion.position);
    galaxy.rotation.set(
      randomBetween(random, -.18, .18),
      randomBetween(random, -.4, .4),
      randomBetween(random, -.12, .12)
    );
    const count = Math.round(820 + companion.radius * 260);
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const baseColors = new Float32Array(count * 3);
    const radii = new Float32Array(count);
    const angles = new Float32Array(count);
    const verticals = new Float32Array(count);
    const phases = new Float32Array(count);
    const formationRadii = new Float32Array(count);
    const formationAngles = new Float32Array(count);
    const formationVerticals = new Float32Array(count);
    const birthAt = new Float32Array(count);
    const deathAt = new Float32Array(count);
    const remnantStrength = new Float32Array(count);
    const tint = new THREE.Color().setHSL(companion.hue, .58, .68);
    const isSpiral = companion.type === '小型螺旋星系';
    const isIrregular = companion.type === '不规则星系';
    const flattening = isIrregular ? .82 : isSpiral ? .68 : .76;
    const galaxyBirthStart = THREE.MathUtils.clamp(
      STELLAR_DAWN_START + randomBetween(random, -4, 8),
      STELLAR_DAWN_START - 4,
      STELLAR_DAWN_START + 8
    );
    for (let index = 0; index < count; index++) {
      const offset = index * 3;
      const radius = Math.pow(random(), .78) * companion.radius;
      const angle = isSpiral
        ? (index % 2) * Math.PI + radius * 1.55 + gaussianRandom(random) * .3
        : random() * Math.PI * 2;
      const vertical = gaussianRandom(random) * companion.radius * (isIrregular ? .3 : .16);
      radii[index] = radius;
      angles[index] = angle;
      verticals[index] = vertical;
      phases[index] = random() * Math.PI * 2;
      formationRadii[index] = radius * randomBetween(random, 1.28, 1.62)
        + random() * companion.radius * .16;
      formationAngles[index] = angle + gaussianRandom(random) * .34;
      formationVerticals[index] = vertical * randomBetween(random, 1.8, 2.5)
        + gaussianRandom(random) * companion.radius * .18;
      birthAt[index] = THREE.MathUtils.clamp(
        galaxyBirthStart + Math.pow(radius / companion.radius, .7) * 27 + Math.pow(random(), 1.55) * 31,
        STELLAR_DAWN_START - 3,
        STELLAR_DAWN_END - 8
      );
      deathAt[index] = stellarDeathStart
        + Math.pow(random(), 1.9) * Math.max(0, stellarEnd - stellarDeathStart);
      remnantStrength[index] = random() < .36 ? randomBetween(random, .08, .22) : 0;
      positions[offset] = Math.cos(angle) * radius;
      positions[offset + 1] = vertical;
      positions[offset + 2] = Math.sin(angle) * radius * flattening;
      const brightness = .68 + random() * .52;
      baseColors[offset] = tint.r * brightness;
      baseColors[offset + 1] = tint.g * brightness;
      baseColors[offset + 2] = tint.b * brightness;
      colors[offset] = baseColors[offset];
      colors[offset + 1] = baseColors[offset + 1];
      colors[offset + 2] = baseColors[offset + 2];
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    const material = new THREE.PointsMaterial({
      size: 1.45,
      sizeAttenuation: false,
      map: getPointTexture(),
      alphaTest: .01,
      vertexColors: true,
      transparent: true,
      opacity: .76,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });
    material.userData.baseOpacity = .76;
    const points = new THREE.Points(geometry, material);
    points.userData.companionIndex = companion.index;
    galaxy.add(points);

    const core = new THREE.Sprite(new THREE.SpriteMaterial({
      map: makeGlowTexture(),
      color: tint,
      transparent: true,
      opacity: .4,
      depthTest: false,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    }));
    core.scale.setScalar(companion.radius * 1.68);
    core.material.userData.baseOpacity = .4;
    core.renderOrder = 3;
    galaxy.add(core);

    const gas = new THREE.Sprite(new THREE.SpriteMaterial({
      map: makeGlowTexture(),
      color: tint.clone().lerp(new THREE.Color(0x8fc9e8), .48),
      transparent: true,
      opacity: 0,
      depthTest: false,
      depthWrite: false,
      fog: false,
      blending: THREE.AdditiveBlending
    }));
    gas.scale.setScalar(companion.radius * 4.1);
    gas.renderOrder = -1;
    galaxy.add(gas);
    localGroupGroup.add(galaxy);
    localGroupGalaxies.push({
      galaxy,
      points,
      core,
      gas,
      basePosition: companion.position.slice(),
      baseColors,
      radii,
      angles,
      verticals,
      phases,
      formationRadii,
      formationAngles,
      formationVerticals,
      birthAt,
      deathAt,
      remnantStrength,
      flattening,
      radius: companion.radius,
      galaxyBirthStart,
      rotationSpeed: (isSpiral ? .082 : isIrregular ? .036 : .052) * (random() < .5 ? -1 : 1),
      radialWobble: isIrregular ? .026 : .008,
      pulsePhase: random() * Math.PI * 2
    });
  });

  localGroupFrameRadius = localGalaxyGroup.companions.reduce((radius, companion) => (
    Math.max(radius, Math.hypot(companion.position[0], companion.position[2]) + companion.radius * 2.2)
  ), 36);

  civilizationData.forEach((species) => {
    const destination = localGalaxyGroup.companions[species.color % localGalaxyGroup.companions.length];
    const geometry = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(),
      new THREE.Vector3().fromArray(destination.position)
    ]);
    const line = new THREE.Line(geometry, new THREE.LineBasicMaterial({
      color: species.color,
      transparent: true,
      opacity: 0,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    }));
    line.visible = false;
    localGroupGroup.add(line);
    localGroupRoutes.push(line);

    const ship = new THREE.Group();
    const hullMaterial = new THREE.MeshBasicMaterial({
      color: species.color,
      transparent: true,
      opacity: 0,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });
    const hull = new THREE.Mesh(new THREE.ConeGeometry(.12, .48, 3), hullMaterial);
    hull.rotation.z = -Math.PI / 2;
    ship.add(hull);

    const highlightMaterial = new THREE.SpriteMaterial({
      map: makeRingTexture(),
      color: species.color,
      transparent: true,
      opacity: 0,
      depthTest: false,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });
    const highlight = new THREE.Sprite(highlightMaterial);
    highlight.scale.setScalar(1.05);
    highlight.renderOrder = 6;
    ship.add(highlight);

    const engineMaterial = new THREE.SpriteMaterial({
      map: makeGlowTexture(),
      color: species.color,
      transparent: true,
      opacity: 0,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });
    const engine = new THREE.Sprite(engineMaterial);
    engine.position.x = -.28;
    engine.scale.set(.42, .24, 1);
    ship.add(engine);
    ship.visible = false;
    ship.renderOrder = 5;
    ship.userData.hullMaterial = hullMaterial;
    ship.userData.engineMaterial = engineMaterial;
    ship.userData.highlightMaterial = highlightMaterial;
    ship.userData.highlightSprite = highlight;
    ship.userData.highlightMix = shipHighlightEnabled ? 1 : 0;
    ship.userData.trafficPhase = random() * 2;
    ship.userData.trafficSpeed = randomBetween(random, .022, .034);
    ship.userData.pulsePhase = random() * Math.PI * 2;
    localGroupGroup.add(ship);
    intergalacticMarkers.push(ship);
  });
  $('#local-group-count').textContent = `1 个主星系 · ${localGalaxyGroup.companions.length} 个伴星系`;
  $('#local-group-routes').textContent = '尚无跨星系航线';
  $('#local-group-members').textContent = localGalaxyGroup.companions
    .map((companion) => `${companion.name} · ${companion.type}`)
    .join(' / ');
  localGroupGroup.visible = false;
}

function buildUniverseObject() {
  disposeGroup(universeGroup);
  const random = createSeededRandom(universe.seed);

  const count = Math.min(10500, Math.floor(5200 + universe.stars * 900));
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
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
    // Preserve the established seeded stream without uploading an unused
    // custom attribute to PointsMaterial.
    random();
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
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

async function buildGalaxy() {
  disposeGroup(galaxyGroup);
  disposeGroup(localGroupGroup);
  disposeGroup(epochEffectsGroup);
  disposeGroup(remnantGroup);
  disposeGroup(heatDeathGroup);
  disposeGroup(cosmicFateGroup);
  disposeGroup(cosmicEventGroup);
  civilizationGroups = [];
  logisticsGroups = [];
  civilizationData = [];
  civilizationEvents = [];
  civilizationRuntimeState = [];
  civilizationSimulation = null;
  currentEras = erasForUniverse(universe);
  cachedTimelineVisualContext = null;
  lastCivilizationSnapshot = null;
  activeSpeciesCount = 0;
  ascendedSpeciesCount = 0;
  activeCivilizationRelationship = null;
  timelineViewport = { start: 0, end: 1000 };
  const random = createSeededRandom(universe.seed, 91);
  const count = 17000;
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  starDeathThresholds = new Float32Array(count);
  const core = new THREE.Color(0xffe7b4);
  const edge = new THREE.Color().setHSL(universe.hue, 0.65, 0.56);
  const stellarEnd = stellarEndTimelinePosition(universe);
  const stellarDeathStart = Math.min(stellarEnd, cosmicYearsToTimelinePosition(4e10, universe));
  const irregularClumps = Array.from({ length: 4 + universe.seedValue % 3 }, (_, index) => ({
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
      const arms = 7 + universe.seedValue % 5;
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
    starDeathThresholds[i] = stellarDeathStart + Math.pow(random(), 1.9) * (stellarEnd - stellarDeathStart);
  }

  originalGalaxyPositions = positions.slice();
  originalGalaxyColors = colors.slice();
  stellarDawnModel = createStellarDawnModel(universe.seed, originalGalaxyPositions);
  stellarGravityState = createStellarGravityState(originalGalaxyPositions, universe);

  const gasPositions = new Float32Array(stellarDawnModel.gasSourceIndices.length * 3);
  const gasColors = new Float32Array(stellarDawnModel.gasSourceIndices.length * 3);
  stellarDawnModel.gasSourceIndices.forEach((sourceIndex, gasIndex) => {
    const sourceOffset = sourceIndex * 3;
    const gasOffset = gasIndex * 3;
    gasPositions[gasOffset] = stellarDawnModel.formationOrigins[sourceOffset];
    gasPositions[gasOffset + 1] = stellarDawnModel.formationOrigins[sourceOffset + 1];
    gasPositions[gasOffset + 2] = stellarDawnModel.formationOrigins[sourceOffset + 2];
    const temperature = .48 + random() * .32;
    gasColors[gasOffset] = .2 * temperature;
    gasColors[gasOffset + 1] = .52 * temperature;
    gasColors[gasOffset + 2] = .72 * temperature;
  });
  const gasGeometry = new THREE.BufferGeometry();
  gasGeometry.setAttribute('position', new THREE.BufferAttribute(gasPositions, 3));
  gasGeometry.setAttribute('color', new THREE.BufferAttribute(gasColors, 3));
  dawnGas = new THREE.Points(gasGeometry, new THREE.PointsMaterial({
    size: .18,
    map: getPointTexture(),
    alphaTest: .008,
    vertexColors: true,
    transparent: true,
    opacity: 0,
    depthWrite: false,
    blending: THREE.AdditiveBlending
  }));
  dawnGas.visible = false;
  dawnGas.renderOrder = -1;
  galaxyGroup.add(dawnGas);

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  const points = new THREE.Points(geometry, new THREE.PointsMaterial({ size: 0.09, map: getPointTexture(), alphaTest: .015, vertexColors: true, transparent: true, opacity: 0.9, depthWrite: false, blending: THREE.AdditiveBlending }));
  galaxyGroup.add(points);
  clickableStars = points;
  keyboardStarMarker = new THREE.Sprite(new THREE.SpriteMaterial({
    map: makeRingTexture(),
    color: 0xffffff,
    transparent: true,
    opacity: .9,
    depthWrite: false,
    blending: THREE.AdditiveBlending
  }));
  keyboardStarMarker.visible = false;
  keyboardStarMarker.scale.setScalar(.62);
  galaxyGroup.add(keyboardStarMarker);

  dawnSites = stellarDawnModel.sites.map((site) => {
    const group = new THREE.Group();
    group.position.fromArray(site.position);
    group.userData.birthAt = site.birthAt;
    group.userData.maxRadius = site.maxRadius;
    group.userData.phase = site.phase;
    const front = new THREE.Sprite(new THREE.SpriteMaterial({
      map: makeRingTexture(),
      color: 0x8ddbea,
      transparent: true,
      opacity: 0,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    }));
    const sourceGlow = new THREE.Sprite(new THREE.SpriteMaterial({
      map: makeGlowTexture(),
      color: 0xe9f8ff,
      transparent: true,
      opacity: 0,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    }));
    front.scale.setScalar(.1);
    sourceGlow.scale.setScalar(.25);
    group.userData.front = front;
    group.userData.sourceGlow = sourceGlow;
    group.add(front, sourceGlow);
    galaxyGroup.add(group);
    return group;
  });

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
  buildLocalGroupMap();
  buildCosmicEvents(positions);
  const simulationResult = await buildCivilizationSimulationAsync({
    universe,
    civilizationData,
    civilizationSimulation,
    cosmicEvents
  });
  civilizationSimulation = simulationResult.simulation;
  simulationResult.eventUpdates.forEach((update) => {
    const event = cosmicEvents.find((candidate) => candidate.id === update.id);
    if (event) Object.assign(event, update);
  });
  renderCosmicEventMarkers();
  renderTimelineScale(universe, timelineViewport);
  updateTimelineZoomControl();
}

function buildEpochEffects(starPositions) {
  const random = createSeededRandom(universe.seed, 771);
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
    sourceIndices: new Uint16Array(remnantCount),
    birthAt: new Float32Array(remnantCount),
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
    remnantDynamics.sourceIndices[i] = source;
    remnantDynamics.birthAt[i] = starDeathThresholds[source];
    const x = starPositions[sourceOffset];
    const y = starPositions[sourceOffset + 1];
    const z = starPositions[sourceOffset + 2];
    remnantPositions[i * 3] = originalRemnantPositions[i * 3] = x;
    remnantPositions[i * 3 + 1] = originalRemnantPositions[i * 3 + 1] = y;
    remnantPositions[i * 3 + 2] = originalRemnantPositions[i * 3 + 2] = z;
    // Preserve the random stream used by older generated universes while the
    // host now inherits the exact gravity state of its source star.
    random(); random(); random();
    remnantDynamics.axes.set([
      stellarGravityState.axes[sourceOffset],
      stellarGravityState.axes[sourceOffset + 1],
      stellarGravityState.axes[sourceOffset + 2]
    ], i * 3);
    remnantDynamics.orbitRates[i] = stellarGravityState.orbitRates[source];

    const fateRoll = random();
    const fate = fateRoll < .82 ? 0 : fateRoll < .92 ? 1 : fateRoll < .99 ? 2 : 3;
    remnantDynamics.fates[i] = fate;
    // Most remnants stay bound. Evaporation begins one object at a time near
    // 10^19 years (about timeline position 709), not as a synchronous outflow.
    const referenceEscapeAt = fate === 1
      ? 1001
      : (fate === 3 ? 704 : fate === 2 ? 724 : 710) + haloDelay + Math.pow(random(), .68) * (fate === 3 ? 28 : 92);
    remnantDynamics.escapeAt[i] = referenceEscapeAt > 1000
      ? referenceEscapeAt
      : cosmicYearsToTimelinePosition(
          referenceFutureYearsAtTimelinePosition(referenceEscapeAt, universe),
          universe
        );
    remnantDynamics.speeds[i] = fate === 3 ? randomBetween(random, 1.7, 2.6) : randomBetween(random, .55, 1.05);
    const remnantColor = new THREE.Color(random() > .28 ? 0x9bb6d9 : 0x8b3e32);
    remnantColors[i * 3] = remnantColor.r;
    remnantColors[i * 3 + 1] = remnantColor.g;
    remnantColors[i * 3 + 2] = remnantColor.b;
  }
  remnantDynamics.baseColors = remnantColors.slice();
  remnantDynamics.firstBirthAt = Math.min(...remnantDynamics.birthAt);
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

  if (universe.hasCentralBlackHole) {
    const firstStarsYears = universe.cosmicMilestones.firstStarsYears;
    const longestLivedMass = 10 ** (1 + (universe.blackHoleEvaporationExponent - 67) / 3);
    addBlackHoleRemnant({
      random,
      massSolar: longestLivedMass,
      birthAt: cosmicYearsToTimelinePosition(firstStarsYears * 2.2, universe),
      isCentral: true
    });
  }

  const sampledProgenitors = selectBlackHoleProgenitors(
    starDeathThresholds,
    universe.hasCentralBlackHole ? 4 : 5,
    random
  );
  sampledProgenitors.forEach((sourceIndex) => {
    addBlackHoleRemnant({
      random,
      massSolar: randomBetween(random, 5, 48),
      birthAt: starDeathThresholds[sourceIndex],
      sourceIndex
    });
  });

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

  const fateColor = universe.cosmicFate.type === 'vacuum-decay'
    ? 0xc6a7ff
    : universe.cosmicFate.type === 'big-rip' ? 0x80c8ff : 0xff805f;
  fateBubble = new THREE.Mesh(
    new THREE.SphereGeometry(1, 40, 24),
    new THREE.MeshBasicMaterial({
      color: fateColor,
      transparent: true,
      opacity: 0,
      wireframe: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    })
  );
  fateBubble.position.set(4.2, -1.4, 2.6);
  fateGlow = new THREE.Sprite(new THREE.SpriteMaterial({
    map: makeGlowTexture(),
    color: fateColor,
    transparent: true,
    opacity: 0,
    depthTest: false,
    depthWrite: false,
    blending: THREE.AdditiveBlending
  }));
  fateGlow.scale.set(.2, .2, 1);
  cosmicFateGroup.add(fateBubble, fateGlow);
  cosmicFateGroup.rotation.copy(galaxyGroup.rotation);

  epochEffectsGroup.visible = false;
  remnantGroup.visible = false;
  heatDeathGroup.visible = false;
  cosmicFateGroup.visible = false;
}

function buildCosmicEvents(starPositions) {
  const random = createSeededRandom(universe.seed, 1447);
  cosmicEvents = [];
  const stellarEnd = stellarEndTimelinePosition(universe);
  const finiteOutcome = universe.cosmicFate.type !== 'heat-death';
  const eventBoundary = finiteOutcome ? universe.cosmicFate.onsetAt : 1000;
  const remapEventStart = (position) => position < 470
    ? position
    : cosmicYearsToTimelinePosition(
        referenceFutureYearsAtTimelinePosition(position, universe),
        universe
      );
  const persistentEpochEnd = Math.min(eventBoundary, remapEventStart(845));
  const livingStarEvents = new Set([
    'pair-instability-supernova', 'young-pulsar-birth', 'classical-nova',
    'type-ia-supernova', 'red-dwarf-superflare', 'gamma-ray-burst',
    'neutron-star-kilonova', 'quasar-awakening', 'magnetar-flare',
    'tidal-disruption-event', 'core-collapse-supernova', 'pulsar-glitch',
    'superluminous-supernova', 'failed-supernova'
  ]);

  const nucleusEvent = universe.hasCentralBlackHole
    ? {
        type: 'quasar-awakening', visual: 'pulsar', label: '类星体短暂苏醒',
        message: '中心黑洞吸积率骤升，相对论喷流穿过星系核', preferCenter: true,
        start: 480 + random() * 16, duration: 30, color: '#8dd9ff', repeatRate: .32, maximumOccurrences: 2
      }
    : {
        type: 'magnetar-flare', visual: 'pulsar', label: '磁星巨型耀斑',
        message: '磁壳重排释放高能辐射，脉冲扫过邻近恒星系',
        start: 480 + random() * 16, duration: 26, color: '#7dcaff', repeatRate: .52, maximumOccurrences: 2
      };

  const baseSchedule = [
    {
      type: 'pair-instability-supernova', visual: 'supernova', label: '成对不稳定超新星',
      message: '第一代巨星被完全撕碎，重元素云向外扩散',
      start: 258 + random() * 18, duration: 28, color: '#ffb36b', repeatRate: .16, maximumOccurrences: 2
    },
    {
      type: 'young-pulsar-birth', visual: 'pulsar', label: '年轻脉冲星诞生',
      message: '新生中子星高速自转，双极束流开始扫掠星际介质',
      start: 302 + random() * 18, duration: 27, color: '#68c8ff', repeatRate: .42, maximumOccurrences: 2
    },
    {
      type: 'classical-nova', visual: 'nova', label: '经典新星爆发',
      message: '白矮星表面的吸积氢发生热核失控，抛出明亮但低质量的壳层',
      start: 336 + random() * 12, duration: 20, color: '#ffe4a8', repeatRate: .9, maximumOccurrences: 3
    },
    {
      type: 'type-ia-supernova', visual: 'supernova', label: 'Ia 型超新星爆发',
      message: '白矮星发生热核失控，将铁族元素抛入星际空间',
      start: 368 + random() * 22, duration: 25, color: '#ffd08a', repeatRate: .66, maximumOccurrences: 3
    },
    {
      type: 'red-dwarf-superflare', visual: 'stellar-flare', label: '红矮星超级耀斑',
      message: '磁场突然重联，高能辐射与带电粒子冲击近轨行星',
      start: 396 + random() * 12, duration: 21, color: '#ffcb72', repeatRate: 1.05, maximumOccurrences: 3
    },
    {
      type: 'gamma-ray-burst', visual: 'pulsar', label: '长伽马射线暴',
      message: '垂死巨星坍缩，狭窄高能喷流贯穿恒星外层',
      start: 420 + random() * 20, duration: 24, color: '#89b9ff', repeatRate: .2, maximumOccurrences: 2
    },
    {
      type: 'neutron-star-kilonova', visual: 'kilonova', label: '中子星并合千新星',
      message: '双中子星旋近并合，短伽马射线束与富含重元素的抛射物同时释放',
      start: 450 + random() * 12, duration: 25, color: '#caa5ff', repeatRate: .28, maximumOccurrences: 2
    },
    nucleusEvent,
    {
      type: 'tidal-disruption-event', visual: 'tidal-disruption', label: '潮汐瓦解事件',
      message: '恒星掠过中央黑洞的潮汐半径，被拉成长流并逐步吸积', preferCenter: true,
      requiresCentralBlackHole: true,
      start: 502 + random() * 10, duration: 30, color: '#72e4ff', repeatRate: .28, maximumOccurrences: 2
    },
    {
      type: 'core-collapse-supernova', visual: 'supernova', label: '核坍缩超新星',
      message: '恒星核心坍缩，冲击波把新合成元素送入星际云',
      start: 518 + random() * 20, duration: 27, color: '#ff875c', repeatRate: .86, maximumOccurrences: 3
    },
    {
      type: 'pulsar-glitch', visual: 'pulsar', label: '脉冲星自转突变',
      message: '中子星内部角动量重分配，脉冲节律突然跃迁',
      start: 548 + random() * 18, duration: 22, color: '#8ba8ff', repeatRate: .72, maximumOccurrences: 3
    },
    {
      type: 'superluminous-supernova', visual: 'supernova', label: '超亮超新星',
      message: '磁星引擎持续注入能量，爆发亮度超过普通超新星',
      start: 552 + random() * 16, duration: 26, color: '#ff6b52', repeatRate: .2, maximumOccurrences: 2
    },
    {
      type: 'failed-supernova', visual: 'stellar-collapse', label: '失败超新星',
      message: '冲击波未能掀开恒星外层，亮度短暂上升后整体坍缩为黑洞',
      start: 586 + random() * 14, duration: 29, color: '#b87958', repeatRate: .38, maximumOccurrences: 2
    },
    {
      type: 'stellar-black-hole-merger', visual: 'black-hole-merger', label: '双黑洞合并',
      message: '时空啁啾达到峰值，引力波波前穿过局部星域（形变已视觉放大）', preferCenter: true,
      start: 616 + random() * 18, duration: 38, persistUntil: persistentEpochEnd, persistenceFadeDuration: 24, color: '#c897ff', repeatRate: .36, maximumOccurrences: 2
    },
    {
      type: 'late-black-hole-merger', visual: 'black-hole-merger', label: '孤立黑洞捕获合并',
      message: '漫长引力散射后完成并合，残余黑洞在阻尼振铃中反冲', preferCenter: true,
      start: 872 + random() * 18, duration: 42, persistUntil: Math.min(eventBoundary, remapEventStart(950)), persistenceFadeDuration: 18, color: '#9bb8ff', repeatRate: .14, maximumOccurrences: 2
    }
  ].filter((event) => (!event.requiresCentralBlackHole || universe.hasCentralBlackHole)
    && (event.type !== 'late-black-hole-merger'
      || universe.cosmicFate.type === 'heat-death'
      || universe.cosmicFate.outcomeExponent > 45))
    .map((event) => {
      const requiresLivingStar = livingStarEvents.has(event.type);
      const start = remapEventStart(event.start);
      const latestStart = Math.min(
        eventBoundary - event.duration,
        requiresLivingStar ? stellarEnd - event.duration : Infinity
      );
      return { ...event, start, latestStart, requiresLivingStar };
    });
  const schedule = expandEventSchedule(baseSchedule, universe, random)
    .map((event) => {
      const endBoundary = Math.min(
        eventBoundary,
        event.requiresLivingStar ? stellarEnd : Infinity
      );
      return {
        ...event,
        duration: Math.min(event.duration, endBoundary - event.start)
      };
    })
    .filter((event) => event.duration >= 1)
    .map((event, eventIndex) => {
      const simulation = createTransientSimulation(event, universe, eventIndex);
      const simulatedEvent = {
        ...event,
        simulation
      };
      if (simulation?.model === 'black-hole-binary') {
        simulatedEvent.gasRich = simulation.gasRich;
        simulatedEvent.radiatedMassFraction = simulation.radiatedMassFraction;
        simulatedEvent.recoilKms = simulation.recoilKms;
      }
      if (!simulation?.persistentRemnant) return simulatedEvent;
      simulatedEvent.persistUntil = event.type === 'late-black-hole-merger'
        ? Math.min(eventBoundary, remapEventStart(950))
        : persistentEpochEnd;
      simulatedEvent.persistenceFadeDuration = 24;
      return simulatedEvent;
    });

  const impactProfiles = {
    'pair-instability-supernova': { radius: .55, maxStars: 5, sourceDim: .02, neighborDim: .96, kick: .018, civilization: .08, range: 2.4 },
    'young-pulsar-birth': { radius: .42, maxStars: 2, sourceDim: .12, neighborDim: .99, kick: .01, civilization: .035, range: 1.8, directional: true, beamAngle: .12 },
    'classical-nova': { radius: .18, maxStars: 1, sourceDim: 1, neighborDim: 1, kick: 0, civilization: .012, range: .75, maxSpecies: 1 },
    'type-ia-supernova': { radius: .48, maxStars: 4, sourceDim: .02, neighborDim: .97, kick: .012, civilization: .06, range: 2.1 },
    'red-dwarf-superflare': { radius: .22, maxStars: 1, sourceDim: 1, neighborDim: 1, kick: 0, civilization: .09, range: 1.15, maxSpecies: 1 },
    'gamma-ray-burst': { radius: 7.5, maxStars: 46, sourceDim: .025, neighborDim: .82, kick: 0, civilization: .42, range: 12, maxSpecies: 1, directional: true, beamAngle: .1 },
    'neutron-star-kilonova': { radius: 4.8, maxStars: 24, sourceDim: .03, neighborDim: .9, kick: .006, civilization: .24, range: 8.5, maxSpecies: 1, directional: true, beamAngle: .14 },
    'quasar-awakening': { radius: 8.5, maxStars: 60, sourceDim: .95, neighborDim: .96, kick: 0, civilization: .16, range: 14, maxSpecies: 2, directional: true, beamAngle: .16 },
    'magnetar-flare': { radius: 1.1, maxStars: 8, sourceDim: .82, neighborDim: .94, kick: 0, civilization: .12, range: 3.2, maxSpecies: 1 },
    'tidal-disruption-event': { radius: .32, maxStars: 2, sourceDim: .015, neighborDim: .995, kick: .008, civilization: .075, range: 2.8, maxSpecies: 1 },
    'core-collapse-supernova': { radius: .5, maxStars: 4, sourceDim: .025, neighborDim: .97, kick: .014, civilization: .06, range: 2.2 },
    'pulsar-glitch': { radius: .01, maxStars: 1, sourceDim: .985, neighborDim: 1, kick: 0, civilization: 0, range: 0, maxSpecies: 0 },
    'superluminous-supernova': { radius: .62, maxStars: 6, sourceDim: .02, neighborDim: .95, kick: .02, civilization: .09, range: 2.8, maxSpecies: 1 },
    'failed-supernova': { radius: .24, maxStars: 2, sourceDim: .008, neighborDim: .995, kick: .003, civilization: .025, range: 1.25, maxSpecies: 1 },
    'stellar-black-hole-merger': { radius: .08, maxStars: 1, sourceDim: .06, neighborDim: 1, kick: 0, civilization: 0, range: 0, maxSpecies: 0 },
    'late-black-hole-merger': { radius: .08, maxStars: 1, sourceDim: .04, neighborDim: 1, kick: 0, civilization: 0, range: 0, maxSpecies: 0 }
  };

  const pickPosition = (preferCenter = false, aliveThrough = null) => {
    let source = aliveThrough === null
      ? Math.floor(random() * starPositions.length / 3)
      : starDeathThresholds.findIndex((deathAt) => deathAt > aliveThrough);
    if (source < 0) source = Math.floor(random() * starPositions.length / 3);
    const maxRadius = preferCenter ? 2.8 : 6.2;
    for (let attempt = 0; attempt < 140; attempt++) {
      const candidate = Math.floor(random() * starPositions.length / 3);
      if (aliveThrough !== null && starDeathThresholds[candidate] <= aliveThrough) continue;
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
    const profile = applyTransientImpactScales(impactProfiles[data.type], data.simulation, universe);
    const impactPhases = {
      supernova: .08,
      nova: .14,
      kilonova: .22,
      pulsar: .46,
      'stellar-flare': .38,
      'tidal-disruption': .58,
      'stellar-collapse': .64,
      'black-hole-merger': .68
    };
    const impactPhase = impactPhases[data.visual] ?? .5;
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
      if (profile.directional && data.beamDirection && distance > .001) {
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

    const sourceOutcomes = {
      'pair-instability-supernova': '爆发源完全解体且没有致密残骸',
      'classical-nova': '白矮星保留下来，重新开始从伴星吸积物质',
      'type-ia-supernova': '白矮星被热核爆炸完全摧毁',
      'red-dwarf-superflare': '宿主恒星保持完整，但近轨行星大气受到高能粒子冲击',
      'neutron-star-kilonova': '并合形成大质量中子星或黑洞，并把重元素抛入星际空间',
      'tidal-disruption-event': '恒星被撕碎，部分物质形成吸积流，部分沿轨道逃逸',
      'core-collapse-supernova': '坍缩核心留下中子星或恒星级黑洞',
      'superluminous-supernova': '恒星外层被大规模抛射，中心结局仍不确定',
      'failed-supernova': '恒星几乎没有明亮爆炸便消失，留下新生黑洞'
    };
    const simulatedOutcome = describeTransientSimulation(data);
    const systemSummary = simulatedOutcome
      ? simulatedOutcome
      : data.visual === 'black-hole-merger'
        ? `约 ${(data.radiatedMassFraction * 100).toFixed(1)}% 总质量以引力波带走，残余黑洞以约 ${data.recoilKms} km/s 反冲${data.gasRich ? '，周围气体受热形成短暂余辉' : '；真空环境中没有超新星式爆炸'}`
        : data.type === 'pulsar-glitch'
          ? '自转频率发生微小跃变，没有可见的大规模破坏'
        : sourceOutcomes[data.type]
          ? `${sourceOutcomes[data.type]}，${Math.max(0, starImpacts.length - 1)} 个邻近恒星系受影响`
        : data.visual === 'pulsar'
          ? `${starImpacts.length} 个位于辐射束或近场内的恒星系受到影响`
          : `爆发源发生结构性改变，${Math.max(0, starImpacts.length - 1)} 个邻近恒星系受冲击`;
    return { impactAt, impactPhase, starImpacts, systemOutcome: systemSummary };
  };

  const deriveCivilizationNodeImpacts = (data, location, consequences, gravityField, eventIndex) => {
    if (!civilizationSimulation || !remnantDynamics) return [];
    const profile = applyTransientImpactScales(impactProfiles[data.type], data.simulation, universe);
    const impactRandom = createSeededRandom(universe.seed, 6203 + eventIndex * 131);
    const impactMap = new Map();
    const addImpact = (nodeIndex, at, severity, permanent = false, kind = 'damage') => {
      const key = `${kind}:${nodeIndex}:${at.toFixed(4)}`;
      const existing = impactMap.get(key);
      if (existing) {
        existing.severity = 1 - (1 - existing.severity) * (1 - severity);
        existing.permanent ||= permanent;
        return;
      }
      impactMap.set(key, {
        nodeIndex,
        at,
        severity: THREE.MathUtils.clamp(severity, 0, 1),
        permanent,
        kind,
        destructionRoll: impactRandom()
      });
    };

    if (profile.civilization > 0 && profile.range > 0) {
      for (let nodeIndex = 0; nodeIndex < civilizationSimulation.habitatPositions.length / 3; nodeIndex++) {
        const offset = nodeIndex * 3;
        const dx = civilizationSimulation.habitatPositions[offset] - location.position.x;
        const dy = civilizationSimulation.habitatPositions[offset + 1] - location.position.y;
        const dz = civilizationSimulation.habitatPositions[offset + 2] - location.position.z;
        const distance = Math.hypot(dx, dy, dz);
        if (distance > profile.range) continue;
        if (profile.directional && data.beamDirection && distance > .001) {
          const inverseDistance = 1 / distance;
          const alignment = Math.abs(
            dx * inverseDistance * data.beamDirection.x
            + dy * inverseDistance * data.beamDirection.y
            + dz * inverseDistance * data.beamDirection.z
          );
          if (alignment < Math.cos(profile.beamAngle)) continue;
        }
        const proximity = Math.max(.08, 1 - distance / profile.range);
        const severity = THREE.MathUtils.clamp(
          profile.civilization * (.62 + proximity * .48) * (.84 + impactRandom() * .3),
          0,
          .58
        );
        const pulsePhases = data.simulation?.pulsePhases;
        if (pulsePhases?.length) {
          pulsePhases.forEach((pulsePhase, pulseIndex) => {
            const weight = data.simulation.pulseWeights?.[pulseIndex] ?? 1;
            addImpact(nodeIndex, data.start + data.duration * pulsePhase, severity * weight);
          });
        } else {
          addImpact(nodeIndex, consequences.impactAt, severity);
        }
        if (data.simulation?.recoveryDuration && data.simulation.recoveryFraction > 0) {
          const lastPulsePhase = pulsePhases?.length ? Math.max(...pulsePhases) : consequences.impactPhase;
          const recoveryAt = data.start + data.duration * lastPulsePhase + data.simulation.recoveryDuration;
          addImpact(nodeIndex, recoveryAt, severity * data.simulation.recoveryFraction, false, 'recovery');
        }
      }
    }

    const starImpacts = new Map(consequences.starImpacts.map((impact) => [impact.index, impact]));
    const capturedStars = new Map();
    if (gravityField) {
      for (let sample = 0; sample < gravityField.indices.length; sample++) {
        if (gravityField.restDistances[sample] >= gravityField.captureRadius) continue;
        capturedStars.set(gravityField.indices[sample], gravityField.restDistances[sample]);
      }
    }

    for (let nodeIndex = 0; nodeIndex < civilizationSimulation.habitatRemnantIndices.length; nodeIndex++) {
      const remnantIndex = civilizationSimulation.habitatRemnantIndices[nodeIndex];
      const sourceStarIndex = remnantDynamics.sourceIndices[remnantIndex];
      const stellarImpact = starImpacts.get(sourceStarIndex);
      if (stellarImpact) {
        const stellarDamage = 1 - stellarImpact.dimFactor;
        if (stellarDamage > .001) {
          addImpact(nodeIndex, consequences.impactAt, stellarDamage, stellarImpact.dimFactor <= .15);
        }
      }
      const captureDistance = capturedStars.get(sourceStarIndex);
      if (captureDistance !== undefined) {
        const captureDelay = captureDistance / gravityField.captureRadius * 11;
        addImpact(nodeIndex, consequences.impactAt + captureDelay + 13, 1, true);
      }
    }

    return Array.from(impactMap.values()).sort((a, b) => a.at - b.at || a.nodeIndex - b.nodeIndex);
  };

  const buildWaveSamples = (data, location, eventIndex) => {
    const isKilonova = data.visual === 'kilonova';
    if (data.visual !== 'black-hole-merger' && !isKilonova) return null;
    const waveRadius = isKilonova ? 6.4 : data.type === 'late-black-hole-merger' ? 7.2 : 8.8;
    const candidates = [];
    for (let index = 0; index < starPositions.length / 3; index++) {
      const offset = index * 3;
      const dx = starPositions[offset] - location.position.x;
      const dy = starPositions[offset + 1] - location.position.y;
      const dz = starPositions[offset + 2] - location.position.z;
      const distance = Math.hypot(dx, dy, dz);
      if (distance > .12 && distance <= waveRadius) candidates.push({ index, dx, dy, dz, distance });
    }

    const sampleRandom = createSeededRandom(universe.seed, 9107 + eventIndex * 97);
    const sampleCount = Math.min(isKilonova ? 900 : 1800, candidates.length);
    const stride = candidates.length / Math.max(1, sampleCount);
    const indices = new Uint16Array(sampleCount);
    const distances = new Float32Array(sampleCount);
    const transverse = new Float32Array(sampleCount * 3);
    const polarities = new Float32Array(sampleCount);
    for (let sample = 0; sample < sampleCount; sample++) {
      const start = sample * stride;
      const candidate = candidates[Math.min(candidates.length - 1, Math.floor(start + sampleRandom() * stride))];
      const inverseDistance = 1 / candidate.distance;
      const nx = candidate.dx * inverseDistance;
      const ny = candidate.dy * inverseDistance;
      const nz = candidate.dz * inverseDistance;
      let tx = -nz;
      let ty = 0;
      let tz = nx;
      const tangentLength = Math.hypot(tx, ty, tz);
      if (tangentLength < .04) {
        tx = 1; ty = 0; tz = 0;
      } else {
        tx /= tangentLength; ty /= tangentLength; tz /= tangentLength;
      }
      indices[sample] = candidate.index;
      distances[sample] = candidate.distance;
      transverse.set([tx, ty, tz], sample * 3);
      polarities[sample] = Math.cos(Math.atan2(nz, nx) * 2) * (.72 + sampleRandom() * .28);
    }
    const waveAmplitude = isKilonova
      ? THREE.MathUtils.clamp((data.simulation?.radiatedMassFraction || .025) / .04, .38, 1)
      : THREE.MathUtils.clamp((data.simulation?.radiatedMassFraction || .045) / .045, .62, 1.8);
    return { waveRadius, waveAmplitude, indices, distances, transverse, polarities };
  };

  schedule.forEach((data, index) => {
    const group = new THREE.Group();
    const location = pickPosition(
      data.preferCenter,
      data.requiresLivingStar ? data.start + data.duration : null
    );
    group.position.copy(location.position);
    group.visible = false;
    cosmicEventGroup.add(group);
    const profile = impactProfiles[data.type];
    if (profile.directional) {
      data.beamDirection = new THREE.Vector3(gaussianRandom(random), gaussianRandom(random), gaussianRandom(random)).normalize();
      group.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), data.beamDirection);
    }

    if (data.visual === 'supernova' || data.visual === 'nova' || data.visual === 'kilonova') {
      const isNova = data.visual === 'nova';
      const isKilonova = data.visual === 'kilonova';
      const photosphereColor = isKilonova ? 0xb89dff : isNova ? 0xffe6ad : 0xffad63;
      const remnantColor = isKilonova ? 0xe0c8ff : isNova ? 0xf8fbff : 0xaed8ff;
      const innerFlash = new THREE.Sprite(new THREE.SpriteMaterial({ map: makeGlowTexture(), color: 0xffffff, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending }));
      const photosphere = new THREE.Sprite(new THREE.SpriteMaterial({ map: makeGlowTexture(), color: photosphereColor, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending }));
      const remnant = new THREE.Sprite(new THREE.SpriteMaterial({ map: getPointTexture(), color: remnantColor, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending }));
      remnant.scale.set(.16, .16, 1);

      const simulatedEjectaScale = THREE.MathUtils.clamp(
        Math.sqrt((data.simulation?.ejectaMass || (isNova ? .00002 : 8)) / (isNova ? .00002 : 8)),
        .7,
        1.65
      );
      const ejectaCount = Math.round((isNova ? 360 : 620) * simulatedEjectaScale);
      const ejectaPositions = new Float32Array(ejectaCount * 3);
      const ejectaColors = new Float32Array(ejectaCount * 3);
      const ejectaDirections = new Float32Array(ejectaCount * 3);
      const ejectaVelocity = new Float32Array(ejectaCount);
      const ejectaDelay = new Float32Array(ejectaCount);
      const hot = new THREE.Color(isKilonova ? 0xd9f3ff : isNova ? 0xfff8d8 : 0xfff0c7);
      const cool = new THREE.Color(isKilonova ? 0x8d4fd1 : isNova ? 0xffb568 : 0xff4b32);
      for (let i = 0; i < ejectaCount; i++) {
        const theta = random() * Math.PI * 2;
        const phi = Math.acos(2 * random() - 1);
        const clustered = 1 + Math.sin(theta * 5 + phi * 3) * .18 + (random() - .5) * .24;
        const direction = new THREE.Vector3(
          Math.sin(phi) * Math.cos(theta) * clustered,
          Math.cos(phi) * (isKilonova ? .34 : 1.08 + random() * .34),
          Math.sin(phi) * Math.sin(theta) * clustered
        ).normalize();
        ejectaDirections.set([direction.x, direction.y, direction.z], i * 3);
        const simulatedVelocityScale = isKilonova
          ? THREE.MathUtils.clamp((data.simulation?.ejectaVelocityC || .2) / .18, .72, 1.55)
          : isNova
            ? THREE.MathUtils.clamp((data.simulation?.ejectaVelocityKms || 1800) / 1800, .64, 1.7)
            : THREE.MathUtils.clamp((data.simulation?.ejectaVelocityKms || 9000) / 9000, .62, 1.72);
        const velocityScale = isNova ? .46 * simulatedVelocityScale : simulatedVelocityScale;
        ejectaVelocity[i] = (.38 + Math.pow(random(), .48) * 1.45 + Math.abs(direction.y) * .22) * velocityScale;
        ejectaDelay[i] = Math.pow(random(), 2.4) * .22;
        const color = hot.clone().lerp(cool, Math.pow(random(), .52));
        ejectaColors.set([color.r, color.g, color.b], i * 3);
      }
      const ejectaGeometry = new THREE.BufferGeometry();
      ejectaGeometry.setAttribute('position', new THREE.BufferAttribute(ejectaPositions, 3));
      ejectaGeometry.setAttribute('color', new THREE.BufferAttribute(ejectaColors, 3));
      const ejecta = new THREE.Points(ejectaGeometry, new THREE.PointsMaterial({ size: .1, map: getPointTexture(), alphaTest: .008, vertexColors: true, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending }));

      const shellCount = Math.round((isNova ? 160 : 280) * Math.min(1.45, simulatedEjectaScale));
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
      const shellColor = isKilonova ? 0xa57cff : isNova ? 0xffe0a0 : 0xffd4a0;
      const shell = new THREE.Points(shellGeometry, new THREE.PointsMaterial({ color: shellColor, size: isNova ? .052 : .072, map: getPointTexture(), alphaTest: .01, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending }));

      let polarJets = null;
      let gravityWave = null;
      if (isKilonova) {
        const jetLength = 2.6 + (data.simulation?.ejectaVelocityC || .2) * 4.2;
        const jetGeometry = new THREE.BufferGeometry();
        jetGeometry.setAttribute('position', new THREE.Float32BufferAttribute([
          0, -.12, 0, 0, -jetLength, 0,
          0, .12, 0, 0, jetLength, 0
        ], 3));
        polarJets = new THREE.LineSegments(jetGeometry, new THREE.LineBasicMaterial({ color: 0xc9efff, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending }));
        gravityWave = new THREE.Sprite(new THREE.SpriteMaterial({ map: makeRingTexture(), color: 0xc4b4ff, transparent: true, opacity: 0, depthTest: false, depthWrite: false, blending: THREE.AdditiveBlending }));
      }

      group.add(photosphere, innerFlash, ejecta, shell, remnant);
      if (polarJets) group.add(polarJets);
      if (gravityWave) group.add(gravityWave);
      group.userData.effect = { innerFlash, photosphere, remnant, ejecta, ejectaDirections, ejectaVelocity, ejectaDelay, shell, shellDirections, shellNoise, polarJets, gravityWave };
    } else if (data.visual === 'tidal-disruption') {
      const hole = createBlackHoleVisual({ color: 0x85ddff, tilt: .22, phase: random() * Math.PI * 2, visualScale: .86 });
      hole.userData.spinDirection = 1;
      const starCore = new THREE.Sprite(new THREE.SpriteMaterial({ map: getPointTexture(), color: 0xfff1c9, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending }));
      starCore.scale.set(.28, .28, 1);
      const flare = new THREE.Sprite(new THREE.SpriteMaterial({ map: makeGlowTexture(), color: 0x8eeaff, transparent: true, opacity: 0, depthTest: false, depthWrite: false, blending: THREE.AdditiveBlending }));
      const disk = new THREE.Sprite(new THREE.SpriteMaterial({ map: makeRingTexture(), color: 0x6bdcff, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending, rotation: random() * Math.PI }));
      disk.scale.set(1.5, .48, 1);

      const debrisCount = 480;
      const debrisPositions = new Float32Array(debrisCount * 3);
      const debrisOffsets = new Float32Array(debrisCount);
      const debrisNoise = new Float32Array(debrisCount);
      const debrisColors = new Float32Array(debrisCount * 3);
      const debrisHot = new THREE.Color(0xf9f1c7);
      const debrisCool = new THREE.Color(0x55cfff);
      for (let i = 0; i < debrisCount; i++) {
        const bound = random() < (data.simulation?.boundFraction || .5);
        debrisOffsets[i] = bound ? -random() : random();
        debrisNoise[i] = random() * Math.PI * 2;
        const color = debrisHot.clone().lerp(debrisCool, Math.pow(random(), .62));
        debrisColors.set([color.r, color.g, color.b], i * 3);
      }
      const debrisGeometry = new THREE.BufferGeometry();
      debrisGeometry.setAttribute('position', new THREE.BufferAttribute(debrisPositions, 3));
      debrisGeometry.setAttribute('color', new THREE.BufferAttribute(debrisColors, 3));
      const debris = new THREE.Points(debrisGeometry, new THREE.PointsMaterial({ size: .075, map: getPointTexture(), alphaTest: .008, vertexColors: true, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending }));

      group.add(flare, disk, debris, starCore, hole);
      group.userData.effect = { hole, starCore, flare, disk, debris, debrisOffsets, debrisNoise };
    } else if (data.visual === 'stellar-flare') {
      const starCore = new THREE.Sprite(new THREE.SpriteMaterial({ map: getPointTexture(), color: 0xffb75a, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending }));
      const halo = new THREE.Sprite(new THREE.SpriteMaterial({ map: makeGlowTexture(), color: 0xff7a32, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending }));
      const shock = new THREE.Sprite(new THREE.SpriteMaterial({ map: makeRingTexture(), color: 0xffd27b, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending }));
      starCore.scale.set(.25, .25, 1);

      const loops = [];
      for (let loopIndex = 0; loopIndex < 3; loopIndex++) {
        const points = [];
        for (let i = 0; i <= 72; i++) {
          const angle = i / 72 * Math.PI;
          points.push(new THREE.Vector3(
            Math.cos(angle) * (.42 + loopIndex * .16),
            Math.sin(angle) * (.68 + loopIndex * .18),
            Math.sin(angle * 2) * .06
          ));
        }
        const loop = new THREE.Line(new THREE.BufferGeometry().setFromPoints(points), new THREE.LineBasicMaterial({ color: loopIndex === 1 ? 0xfff0a3 : 0xff9b52, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending }));
        loop.rotation.y = loopIndex * 1.86 + random() * .35;
        loops.push(loop);
      }

      const particleCount = 320;
      const particlePositions = new Float32Array(particleCount * 3);
      const particleDirections = new Float32Array(particleCount * 3);
      for (let i = 0; i < particleCount; i++) {
        const theta = random() * Math.PI * 2;
        const y = randomBetween(random, -.28, 1);
        const radial = Math.sqrt(1 - Math.min(1, y * y));
        particleDirections.set([Math.cos(theta) * radial, y, Math.sin(theta) * radial], i * 3);
      }
      const particleGeometry = new THREE.BufferGeometry();
      particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
      const particles = new THREE.Points(particleGeometry, new THREE.PointsMaterial({ color: 0xffc970, size: .06, map: getPointTexture(), alphaTest: .008, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending }));

      group.add(halo, shock, starCore, particles, ...loops);
      group.userData.effect = { starCore, halo, shock, loops, particles, particleDirections };
    } else if (data.visual === 'stellar-collapse') {
      const starCore = new THREE.Sprite(new THREE.SpriteMaterial({ map: getPointTexture(), color: 0xffa45b, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending }));
      const shroud = new THREE.Sprite(new THREE.SpriteMaterial({ map: makeGlowTexture(), color: 0x9a5538, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending }));
      const remnantHole = createBlackHoleVisual({ color: 0x9d6b58, tilt: -.18, phase: random() * Math.PI * 2, visualScale: .72 });
      remnantHole.userData.spinDirection = -1;
      remnantHole.visible = false;

      const dustCount = Math.round(180 + (data.simulation?.ejectedEnvelopeFraction || .08) * 920);
      const dustPositions = new Float32Array(dustCount * 3);
      const dustDirections = new Float32Array(dustCount * 3);
      for (let i = 0; i < dustCount; i++) {
        const theta = random() * Math.PI * 2;
        const y = random() * 2 - 1;
        const radial = Math.sqrt(1 - y * y);
        dustDirections.set([Math.cos(theta) * radial, y, Math.sin(theta) * radial], i * 3);
      }
      const dustGeometry = new THREE.BufferGeometry();
      dustGeometry.setAttribute('position', new THREE.BufferAttribute(dustPositions, 3));
      const dust = new THREE.Points(dustGeometry, new THREE.PointsMaterial({ color: 0x8c533b, size: .065, map: getPointTexture(), alphaTest: .008, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending }));

      group.add(shroud, dust, starCore, remnantHole);
      group.userData.effect = { starCore, shroud, remnantHole, dust, dustDirections };
    } else if (data.visual === 'pulsar') {
      const core = new THREE.Sprite(new THREE.SpriteMaterial({ map: getPointTexture(), color: 0xf4fbff, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending }));
      const halo = new THREE.Sprite(new THREE.SpriteMaterial({ map: makeGlowTexture(), color: 0x4bb9ff, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending }));
      const nebula = new THREE.Sprite(new THREE.SpriteMaterial({ map: makeGlowTexture(), color: 0x1676b8, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending, rotation: random() * Math.PI }));
      const sweepGlow = new THREE.Sprite(new THREE.SpriteMaterial({ map: makeGlowTexture(), color: 0xc9edff, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending }));
      core.scale.set(.18, .18, 1);
      nebula.scale.set(1.45, .58, 1);

      const rotor = new THREE.Group();
      rotor.rotation.z = .58 + random() * .32;
      const jetPowerScale = data.simulation?.model === 'collapsar-jet'
        ? THREE.MathUtils.clamp(data.simulation.lorentzFactor / 260, .7, 1.75)
        : data.simulation?.model === 'quasar-duty-cycle'
          ? THREE.MathUtils.clamp(data.simulation.jetLorentzFactor / 8, .7, 1.7)
          : 1;
      const jetCount = Math.round(420 * jetPowerScale);
      const jetPositions = new Float32Array(jetCount * 3);
      const jetColors = new Float32Array(jetCount * 3);
      for (let i = 0; i < jetCount; i++) {
        const side = i % 2 ? 1 : -1;
        const distance = .1 + Math.pow(random(), .66) * 2.6 * jetPowerScale;
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
      group.userData.effect = { core, halo, nebula, sweepGlow, rotor, jets, fieldLines, knots, jetPowerScale };
    } else if (data.visual === 'black-hole-merger') {
      const makeHole = (color, direction) => {
        const hole = createBlackHoleVisual({
          color,
          tilt: randomBetween(random, -.28, .28),
          phase: random() * Math.PI * 2,
          visualScale: 1.08
        });
        hole.userData.spinDirection = direction;
        return hole;
      };
      const orbitalPlane = new THREE.Group();
      orbitalPlane.rotation.set(.76, .18, .24);
      const holeA = makeHole(0xffba70, 1);
      const holeB = makeHole(0xa7d7ff, -1);
      const remnantHole = makeHole(0xffd9ad, 1);
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

      const mergerGlow = new THREE.Sprite(new THREE.SpriteMaterial({ map: makeGlowTexture(), color: data.gasRich ? 0xffe2b5 : 0xdceaff, transparent: true, opacity: 0, depthTest: false, depthWrite: false, blending: THREE.AdditiveBlending }));
      const gasEcho = new THREE.Sprite(new THREE.SpriteMaterial({ map: makeRingTexture(), color: 0xffb46f, transparent: true, opacity: 0, depthTest: false, depthWrite: false, blending: THREE.AdditiveBlending }));
      gasEcho.visible = data.gasRich;
      const waveHalos = [0x9bc8ff, 0xd2b9ff, 0x79b7ff].map((color) => new THREE.Sprite(new THREE.SpriteMaterial({
        map: makeRingTexture(),
        color,
        transparent: true,
        opacity: 0,
        depthTest: false,
        depthWrite: false,
        blending: THREE.AdditiveBlending
      })));
      const wavefronts = [];
      for (let waveIndex = 0; waveIndex < 6; waveIndex++) {
        const points = [];
        for (let i = 0; i < 160; i++) {
          const angle = i / 160 * Math.PI * 2;
          const quadrupole = 1 + Math.cos(angle * 2 + waveIndex * .7) * .065;
          points.push(new THREE.Vector3(Math.cos(angle) * quadrupole, Math.sin(angle) * quadrupole, Math.sin(angle * 2 + waveIndex) * .055));
        }
        const wave = new THREE.LineLoop(new THREE.BufferGeometry().setFromPoints(points), new THREE.LineBasicMaterial({ color: waveIndex % 3 === 1 ? 0xd8c3ff : 0x8fc6ff, transparent: true, opacity: 0, depthTest: false, depthWrite: false, blending: THREE.AdditiveBlending }));
        wave.rotation.set(.34 + waveIndex * .47, .2 + waveIndex * .39, waveIndex * .76);
        wavefronts.push(wave);
        group.add(wave);
      }

      const waveParticleCount = 520;
      const waveParticles = new Float32Array(waveParticleCount * 3);
      const waveDirections = new Float32Array(waveParticleCount * 3);
      const waveColors = new Float32Array(waveParticleCount * 3);
      const coolWave = new THREE.Color(0x79bfff);
      const warmWave = new THREE.Color(0xe0cbff);
      for (let particle = 0; particle < waveParticleCount; particle++) {
        const azimuth = random() * Math.PI * 2;
        const vertical = randomBetween(random, -1, 1);
        const horizontal = Math.sqrt(1 - vertical * vertical);
        waveDirections.set([Math.cos(azimuth) * horizontal, vertical, Math.sin(azimuth) * horizontal], particle * 3);
        const particleColor = coolWave.clone().lerp(warmWave, random());
        waveColors.set([particleColor.r, particleColor.g, particleColor.b], particle * 3);
      }
      const waveParticleGeometry = new THREE.BufferGeometry();
      waveParticleGeometry.setAttribute('position', new THREE.BufferAttribute(waveParticles, 3));
      waveParticleGeometry.setAttribute('color', new THREE.BufferAttribute(waveColors, 3));
      const waveDust = new THREE.Points(waveParticleGeometry, new THREE.PointsMaterial({ size: .075, map: getPointTexture(), alphaTest: .008, vertexColors: true, transparent: true, opacity: 0, depthTest: false, depthWrite: false, blending: THREE.AdditiveBlending }));

      const recoilGeometry = new THREE.BufferGeometry();
      recoilGeometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(6), 3));
      const recoilTrail = new THREE.Line(recoilGeometry, new THREE.LineBasicMaterial({ color: 0xffd4aa, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending }));
      const recoilVector = new THREE.Vector3(gaussianRandom(random), gaussianRandom(random) * .45, gaussianRandom(random)).normalize();
      group.add(waveDust, ...waveHalos, gasEcho, orbitalPlane, mergerGlow, recoilTrail);
      group.userData.effect = { orbitalPlane, holeA, holeB, remnantHole, trailA, trailB, mergerGlow, gasEcho, waveHalos, wavefronts, waveDust, waveDirections, recoilTrail, recoilVector, gasRich: data.gasRich };
    }

    const consequences = deriveConsequences(data, location);
    const waveSamples = buildWaveSamples(data, location, index);
    const gravityField = data.visual === 'black-hole-merger'
      ? createMergerGravityField(starPositions, location.position, {
          seedValue: universe.seedValue,
          eventIndex: index
        })
      : null;
    const transientGravityField = createTransientGravityField(
      starPositions,
      location.position,
      data.simulation,
      universe.seedValue,
      index
    );
    const civilizationNodeImpacts = deriveCivilizationNodeImpacts(
      data,
      location,
      consequences,
      gravityField,
      index
    );
    const id = `${data.type}-${index}-${universe.seed}`;
    const blackHoleMass = blackHoleMassFromSimulation(data.simulation);
    const sourceDestroyed = profile.sourceDim <= .15
      && data.visual !== 'black-hole-merger';
    if (sourceDestroyed) {
      starDeathThresholds[location.index] = Math.min(
        starDeathThresholds[location.index],
        consequences.impactAt
      );
      for (let remnantIndex = 0; remnantIndex < remnantDynamics.sourceIndices.length; remnantIndex++) {
        if (remnantDynamics.sourceIndices[remnantIndex] !== location.index) continue;
        // The event owns its explicit compact-remnant visual. Suppress the
        // sampled population point for the same source to avoid a duplicate.
        remnantDynamics.birthAt[remnantIndex] = 1001;
      }
    }
    if (blackHoleMass) {
      // Hand the compact remnant from the short-lived event visual to the
      // long-lived population. Scrubbing now reconstructs the same object on
      // both sides of the event instead of inventing it in the black-hole era.
      data.persistUntil = data.start + data.duration;
      data.persistenceFadeDuration = 8;
      addBlackHoleRemnant({
        random,
        massSolar: blackHoleMass,
        birthAt: consequences.impactAt,
        sourceIndex: location.index,
        originEventId: id
      });
    }

    cosmicEvents.push({
      ...data,
      ...consequences,
      civilizationNodeImpacts,
      civilizationImpacts: [],
      outcome: consequences.systemOutcome,
      waveSamples,
      gravityField,
      transientGravityField,
      group,
      sourceIndex: location.index,
      id,
      label: data.label
    });
  });
  let galacticCenterSourceIndex = 0;
  let galacticCenterDistance = Infinity;
  for (let starIndex = 0; starIndex < starPositions.length / 3; starIndex++) {
    const offset = starIndex * 3;
    const distance = starPositions[offset] ** 2 + starPositions[offset + 1] ** 2 + starPositions[offset + 2] ** 2;
    if (distance < galacticCenterDistance) {
      galacticCenterDistance = distance;
      galacticCenterSourceIndex = starIndex;
    }
  }
  civilizationEvents.forEach((data) => {
    const remnantIndex = civilizationSimulation.habitatRemnantIndices[data.targetNodeIndex];
    const sourceIndex = data.visual === 'galactic-encounter'
      ? galacticCenterSourceIndex
      : remnantDynamics.sourceIndices[remnantIndex];
    const sourceOffset = sourceIndex * 3;
    const group = createCivilizationEventVisual(data);
    group.position.set(
      starPositions[sourceOffset],
      starPositions[sourceOffset + 1],
      starPositions[sourceOffset + 2]
    );
    group.visible = false;
    cosmicEventGroup.add(group);
    cosmicEvents.push({
      ...data,
      group,
      sourceIndex,
      impactPhase: (data.impactAt - data.start) / data.duration,
      starImpacts: [],
      waveSamples: null,
      gravityField: null,
      transientGravityField: null
    });
  });
  cosmicEvents.sort((a, b) => a.start - b.start);
  remnantDynamics.firstBirthAt = Math.min(...remnantDynamics.birthAt);

  cosmicEventGroup.rotation.copy(galaxyGroup.rotation);
  cosmicEventGroup.visible = false;
}

function eventConfidenceClass(event) {
  if (event.confidence === 'science-fiction') return ' is-speculative';
  if (event.confidence === 'astrophysical-model' || event.confidence === 'astrobiology-model') {
    return ' is-hypothesis';
  }
  return '';
}

function eventKindLabel(event) {
  if (event.confidence === 'science-fiction') return '科幻假设';
  if (event.confidence === 'astrophysical-model') return '天体演化模型';
  if (event.confidence === 'astrobiology-model') return '天体生物学模型';
  return '';
}

function timelineEventPosition(event) {
  return Number.isFinite(event.impactAt) ? event.impactAt : event.start;
}

const timelineFilterLabels = {
  all: '事件：全部',
  astro: '事件：天体',
  civilization: '事件：文明',
  speculative: '事件：科幻'
};

function timelineEventMatchesFilter(event, filter = timelineEventFilter) {
  if (filter === 'astro') return event.category !== 'civilization';
  if (filter === 'civilization') return event.category === 'civilization';
  if (filter === 'speculative') return event.confidence === 'science-fiction';
  return true;
}

function filteredTimelineEvents() {
  return cosmicEvents.filter((event) => timelineEventMatchesFilter(event));
}

function renderTimelineFilterCounts() {
  document.querySelectorAll('[data-event-filter]').forEach((button) => {
    const count = cosmicEvents.filter((event) => timelineEventMatchesFilter(
      event,
      button.dataset.eventFilter
    )).length;
    const countElement = button.querySelector('small');
    if (countElement) countElement.textContent = String(count);
  });
}

function timelineViewportIsZoomed() {
  return timelineViewport.end - timelineViewport.start < 999.5;
}

function updateTimelineZoomControl() {
  const button = $('#timeline-zoom-reset');
  if (!button) return;
  const zoom = 1000 / (timelineViewport.end - timelineViewport.start);
  button.hidden = !timelineViewportIsZoomed();
  button.textContent = `${zoom.toFixed(zoom >= 10 ? 0 : 1)}× · 重置`;
  button.setAttribute(
    'aria-label',
    `时间轴已放大 ${zoom.toFixed(1)} 倍，点击恢复完整时间轴`
  );
}

function refreshTimelineViewport() {
  if (!universe || !renderTimelineScale) return;
  renderTimelineScale(universe, timelineViewport);
  renderCosmicEventMarkers();
  currentEras ||= erasForUniverse(universe);
  renderTimelineHeader(
    createCosmicTimelineState(cosmicPosition, universe, currentEras),
    timelineViewport
  );
  updateTimelineZoomControl();
}

function jumpToTimelineEvent(event) {
  pauseTimelineForScrubbing();
  updateCosmicTime(timelineEventPosition(event), true);
}

function closeTimelineEventDetail() {
  const panel = $('#timeline-event-detail');
  if (panel) panel.hidden = true;
  document.querySelectorAll('.event-cluster[aria-expanded="true"]').forEach((marker) => {
    marker.setAttribute('aria-expanded', 'false');
    marker.classList.remove('is-expanded');
  });
}

function renderTimelineEventDetail(entries, sourceMarker) {
  const panel = $('#timeline-event-detail');
  const list = $('#timeline-event-detail-list');
  if (!panel || !list || entries.length === 0) return;
  const orderedEntries = [...entries].sort((a, b) => a.position - b.position);
  const events = orderedEntries.map((entry) => entry.event);
  const detailWindow = timelineDetailWindow(events);
  const firstImpact = orderedEntries[0].position;
  const lastImpact = orderedEntries.at(-1).position;
  const rangeLabel = firstImpact === lastImpact
    ? cosmicTimeLabel(firstImpact, universe)
    : `${cosmicTimeLabel(firstImpact, universe)} — ${cosmicTimeLabel(lastImpact, universe)}`;

  document.querySelectorAll('.event-cluster[aria-expanded="true"]').forEach((marker) => {
    marker.setAttribute('aria-expanded', 'false');
    marker.classList.remove('is-expanded');
  });
  sourceMarker.setAttribute('aria-expanded', 'true');
  sourceMarker.classList.add('is-expanded');
  panel.style.setProperty('--timeline-detail-origin', sourceMarker.style.left || '50%');
  $('#timeline-event-detail-title').textContent = `${events.length} 个事件 · ${rangeLabel}`;
  $('#timeline-event-detail-start').textContent = cosmicTimeLabel(detailWindow.start, universe);
  $('#timeline-event-detail-end').textContent = cosmicTimeLabel(detailWindow.end, universe);
  list.replaceChildren();

  orderedEntries.forEach(({ event, index, position }) => {
    const eventEnd = event.start + Math.max(0, event.duration || 0);
    const visibleStart = Math.max(detailWindow.start, event.start);
    const visibleEnd = Math.min(detailWindow.end, Math.max(eventEnd, position));
    const startPercent = (visibleStart - detailWindow.start) / detailWindow.span * 100;
    const widthPercent = Math.max(.8, (visibleEnd - visibleStart) / detailWindow.span * 100);
    const impactPercent = (position - detailWindow.start) / detailWindow.span * 100;
    const eventKind = eventKindLabel(event);
    const row = document.createElement('button');
    row.type = 'button';
    row.className = 'timeline-detail-event';
    row.dataset.eventIndex = String(index);
    row.style.setProperty('--event-color', event.color);
    row.setAttribute(
      'aria-label',
      `${eventKind ? `${eventKind}，` : ''}${event.label}，从${cosmicTimeLabel(event.start, universe)}到${cosmicTimeLabel(eventEnd, universe)}，影响时刻${cosmicTimeLabel(position, universe)}`
    );

    const label = document.createElement('span');
    label.className = 'timeline-detail-event-label';
    const name = document.createElement('b');
    name.textContent = event.label;
    const time = document.createElement('small');
    time.textContent = cosmicTimeLabel(position, universe);
    label.append(name, time);

    const plot = document.createElement('span');
    plot.className = 'timeline-detail-event-plot';
    const duration = document.createElement('i');
    duration.className = 'timeline-detail-duration';
    duration.style.left = `${startPercent}%`;
    duration.style.width = `${widthPercent}%`;
    const impact = document.createElement('i');
    impact.className = 'timeline-detail-impact';
    impact.style.left = `${impactPercent}%`;
    plot.append(duration, impact);
    row.append(label, plot);
    row.addEventListener('click', () => {
      list.querySelectorAll('.timeline-detail-event').forEach((item) => {
        if (item === row) item.setAttribute('aria-current', 'true');
        else item.removeAttribute('aria-current');
      });
      jumpToTimelineEvent(event);
    });
    list.appendChild(row);
  });

  panel.hidden = false;
  updateObserverMarkers();
}

function renderCosmicEventMarkers() {
  const container = $('#cosmic-event-markers');
  if (!container || !clusterTimelineEvents) return;
  closeTimelineEventDetail();
  container.replaceChildren();
  const trackWidth = container.clientWidth || Math.max(1, innerWidth * .56);
  const minimumGap = compactCivilizationLayout.matches ? 18 : 14;
  const groups = clusterTimelineEvents(
    filteredTimelineEvents(),
    trackWidth,
    minimumGap,
    timelineViewport
  );
  groups.forEach((group) => {
    group.entries.forEach((entry) => {
      entry.index = cosmicEvents.indexOf(entry.event);
    });
  });
  renderTimelineFilterCounts();

  groups.forEach((group) => {
    const marker = document.createElement('button');
    marker.type = 'button';
    marker.style.left = `${timelinePercentAt(group.position, timelineViewport)}%`;
    marker.dataset.position = group.position.toFixed(3);

    if (group.entries.length === 1) {
      const [{ event, index, position }] = group.entries;
      const eventKind = eventKindLabel(event);
      marker.dataset.eventIndex = String(index);
      marker.className = `event-marker${eventConfidenceClass(event)}`;
      marker.style.setProperty('--event-color', event.color);
      marker.setAttribute('aria-label', `${eventKind ? `${eventKind}，` : ''}${event.label}，${cosmicTimeLabel(position, universe)}；${event.outcome}`);
      marker.title = `${eventKind ? `${eventKind} · ` : ''}${event.outcome}`;
      marker.addEventListener('click', () => {
        closeTimelineEventDetail();
        jumpToTimelineEvent(event);
      });
    } else {
      const indices = group.entries.map((entry) => entry.index);
      const firstPosition = group.entries[0].position;
      const lastPosition = group.entries.at(-1).position;
      const representative = group.entries[Math.floor(group.entries.length / 2)].event;
      marker.className = 'event-marker event-cluster';
      marker.dataset.eventIndices = indices.join(',');
      marker.style.setProperty('--event-color', representative.color);
      marker.textContent = String(group.entries.length);
      marker.setAttribute('aria-expanded', 'false');
      marker.setAttribute(
        'aria-label',
        `${group.entries.length} 个事件，从${cosmicTimeLabel(firstPosition, universe)}到${cosmicTimeLabel(lastPosition, universe)}，点击展开详情`
      );
      marker.title = group.entries.map((entry) => entry.event.label).join(' · ');
      marker.addEventListener('click', () => {
        if (marker.getAttribute('aria-expanded') === 'true') {
          closeTimelineEventDetail();
          return;
        }
        pauseTimelineForScrubbing();
        renderTimelineEventDetail(group.entries, marker);
      });
    }
    container.appendChild(marker);
  });
  updateObserverMarkers();
}

function buildCivilizations() {
  resetCivilizationLegend();
  const random = createSeededRandom(universe.seed, 410);
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
    end: 1000,
    step: 1,
    habitatRemnantIndices,
    habitatPositions,
    adjacency: [],
    snapshots: []
  };

  const chosenHomes = [];
  const legend = $('#civilization-legend');
  legend.innerHTML = '';
  const registerSpecies = ({
    name,
    color: speciesColor,
    homeNodeIndex,
    birth,
    highDimensional = false,
    ascensionAt = Infinity,
    aggression,
    cooperation,
    expansionRate,
    resilience,
    technology,
    visibility,
    cohesion,
    machineAutonomy,
    morphology = '生物共同体',
    biospherePath = [],
    fermiScenario = '',
    originType = null,
    parentSpeciesIndex = null
  }) => {
    const speciesIndex = civilizationData.length;
    chosenHomes.push(homeNodeIndex);
    const homeRemnantIndex = habitatRemnantIndices[homeNodeIndex];
    const homeOffsetIndex = homeRemnantIndex * 3;
    const home = new THREE.Vector3(
      originalRemnantPositions[homeOffsetIndex],
      originalRemnantPositions[homeOffsetIndex + 1],
      originalRemnantPositions[homeOffsetIndex + 2]
    );
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
    const logisticsGeometry = new THREE.BufferGeometry();
    logisticsGeometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(12 * 6), 3));
    logisticsGeometry.setDrawRange(0, 0);
    const logisticsMaterial = new THREE.LineBasicMaterial({
      color: speciesColor,
      transparent: true,
      opacity: .16,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });
    const logistics = new THREE.LineSegments(logisticsGeometry, logisticsMaterial);
    galaxyGroup.add(logistics);
    logisticsGroups.push(logistics);
    civilizationData.push({
      name,
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
      aggression,
      cooperation,
      expansionRate,
      resilience,
      technology,
      visibility,
      cohesion,
      machineAutonomy,
      morphology,
      biospherePath,
      fermiScenario,
      originType,
      parentSpeciesIndex
    });
    const color = `#${speciesColor.toString(16).padStart(6, '0')}`;
    const origin = originType ? ` data-origin="${originType}"` : '';
    legend.insertAdjacentHTML(
      'beforeend',
      `<div class="civilization-item" role="button" tabindex="0" style="--species:${color}" data-species="${speciesIndex}"${origin}><i></i><span>${name}</span><b>未诞生</b></div>`
    );
  };

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
    const speciesColor = speciesColors[speciesIndex % speciesColors.length];
    const aggression = random();
    const cooperation = random();
    const expansionRate = randomBetween(random, .72, 1.36);
    const resilience = randomBetween(random, .68, 1.32);
    const birthSpread = speciesCount === 1 ? 0 : speciesIndex / (speciesCount - 1);
    const birth = 404 + Math.round(birthSpread * 72 + random() * 11);
    const highDimensional = random() < .01;
    const ascensionAt = highDimensional ? birth + Math.round(randomBetween(random, 130, 205)) : Infinity;
    const developmentRandom = createSeededRandom(universe.seed, 4801 + speciesIndex * 31);
    registerSpecies({
      name: speciesNames[(universe.seedValue + speciesIndex) % speciesNames.length],
      color: speciesColor,
      homeNodeIndex,
      birth,
      highDimensional,
      ascensionAt,
      aggression,
      cooperation,
      expansionRate,
      resilience,
      technology: randomBetween(developmentRandom, .18, .48),
      visibility: randomBetween(developmentRandom, .04, .18),
      cohesion: randomBetween(developmentRandom, .48, .82),
      machineAutonomy: randomBetween(developmentRandom, .08, .38)
    });
  }

  const plan = createCivilizationEventPlan({ universe, civilizationData, habitatPositions });
  plan.speciesProfiles.forEach((profile, index) => {
    Object.assign(civilizationData[index], profile);
  });
  plan.childSpecies.forEach((child) => {
    const parentColor = new THREE.Color(civilizationData[child.parentSpeciesIndex].color);
    parentColor.offsetHSL(child.colorShift, .04, .04);
    registerSpecies({
      ...child,
      color: parentColor.getHex(),
      highDimensional: false,
      ascensionAt: Infinity
    });
  });
  civilizationEvents = plan.events;
}

function syncUniverseUrl() {
  const url = new URL(window.location.href);
  url.searchParams.set('seed', universe.seed);
  window.history.replaceState(null, '', url);
}

function neighboringSeed(seed, offset) {
  const alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const raw = seed.replaceAll('-', '').padEnd(16, '0').slice(0, 16).split('');
  const position = raw.length - 1 - (offset % 4);
  const current = Math.max(0, alphabet.indexOf(raw[position]));
  raw[position] = alphabet[(current + offset * 7) % alphabet.length];
  return raw.join('').match(/.{1,4}/g).join('-');
}

function installUniverse(nextUniverse, flash = true) {
  observerSpeciesIndex = null;
  selectedChronicleIndex = null;
  closeCivilizationChronicle();
  universe = nextUniverse;
  syncUniverseUrl();
  updateUniverseData(universe);
  buildUniverseObject();
  galaxyBuiltForSeed = null;
  currentEras = null;
  cachedTimelineVisualContext = null;
  $('.universe-data').scrollTop = 0;
  if (flash) {
    const creationFlash = $('#creation-flash');
    creationFlash.classList.remove('is-flashing');
    void creationFlash.offsetWidth;
    creationFlash.classList.add('is-flashing');
  }
  document.querySelectorAll('.metric').forEach((metric) => {
    metric.style.animation = 'none';
    void metric.offsetWidth;
    metric.style.animation = '';
  });
}

function toggleMultiverseLab(open = !$('#multiverse-lab').classList.contains('is-open')) {
  if (mode !== 'generator') return;
  const lab = $('#multiverse-lab');
  lab.classList.toggle('is-open', open);
  lab.setAttribute('aria-hidden', String(!open));
  $('#compare-universes').setAttribute('aria-expanded', String(open));
  if (!open) return;
  const candidates = [universe, ...[1, 2, 3].map((offset) => createUniverse(neighboringSeed(universe.seed, offset)))]
    .map((candidate) => ({
      ...candidate,
      galaxyTypeLabel: galaxyTypeLabels[candidate.galaxyType]
    }));
  renderMultiverseComparison(candidates);
}



function regenerate() {
  if (mode !== 'generator') return;
  toggleMultiverseLab(false);
  installUniverse(createUniverse());
}

async function enterUniverse() {
  if (mode !== 'generator') return;
  const enterButton = $('#enter-universe');
  const enterLabel = enterButton.querySelector('span');
  if (enterButton.getAttribute('aria-busy') === 'true') return;

  enterButton.disabled = true;
  enterButton.setAttribute('aria-busy', 'true');
  enterLabel.textContent = '正在校准';

  try {
    await loadExplorer();
    if (galaxyBuiltForSeed !== universe.seed) {
      await buildGalaxy();
      galaxyBuiltForSeed = universe.seed;
    }
  } catch (error) {
    console.error('无法加载宇宙探索器', error);
    $('#mode-label').textContent = '探索器加载失败';
    return;
  } finally {
    enterButton.disabled = false;
    enterButton.removeAttribute('aria-busy');
    enterLabel.textContent = '进入宇宙';
  }

  mode = 'explorer';
  document.body.classList.add('is-exploring');
  $('#generator-view').classList.remove('is-active');
  $('#explorer-view').classList.add('is-active');
  $('#mode-label').textContent = '深空航行中';
  $('#regenerate-top').style.opacity = '0';
  $('#regenerate-top').style.pointerEvents = 'none';
  $('#civilization-panel').classList.remove('is-expanded');
  $('#toggle-civilizations').setAttribute('aria-expanded', 'false');
  galaxyGroup.visible = true;
  localGroupGroup.visible = true;
  galaxyGroup.scale.setScalar(0.02);
  localGroupGroup.scale.setScalar(0.02);
  localGroupView = false;
  document.body.classList.remove('is-local-group-view');
  $('#toggle-local-group').setAttribute('aria-pressed', 'false');
  $('#toggle-local-group').textContent = '查看局部星系群';
  controls.enabled = true;
  controls.target.set(0, 0, 0);
  const linkedPosition = Number(new URLSearchParams(window.location.search).get('t'));
  cosmicPosition = Number.isFinite(linkedPosition)
    ? THREE.MathUtils.clamp(linkedPosition, 0, 1000)
    : 0;
  $('#cosmic-timeline').value = cosmicPosition;
  updateCosmicTime(cosmicPosition, true);
  restartTimelineScaleIntro();
  timePlaying = cosmicPosition === 0;
  lastTimelineUpdateAt = 0;
  $('#toggle-time').textContent = timePlaying ? 'Ⅱ' : '▶';
  $('#toggle-time').setAttribute('aria-label', timePlaying ? '暂停时间' : '播放时间');
  transition = { type: 'enter', start: performance.now(), duration: prefersReducedMotion ? 1 : 2100 };
}

function leaveUniverse() {
  if (mode !== 'explorer') return;
  closeTimelineEventDetail();
  mode = 'generator';
  document.body.classList.remove('is-exploring');
  $('#explorer-view').classList.remove('is-active');
  $('#generator-view').classList.add('is-active');
  $('#star-inspector').classList.remove('is-open');
  observerSpeciesIndex = null;
  localGroupView = false;
  document.body.classList.remove('is-local-group-view');
  closeCivilizationChronicle();
  $('#civilization-panel').classList.remove('is-expanded');
  $('#toggle-civilizations').setAttribute('aria-expanded', 'false');
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
  localGroupGroup.visible = false;
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
    localGroupGroup.scale.setScalar(0.02 + easeOutExpo(t) * 0.98);
    camera.position.z = 32 - e * 12;
    camera.position.y = 0.5 + e * 4.2;
  }
  if (transition.type === 'leave') {
    const e = easeInOutCubic(t);
    galaxyGroup.scale.setScalar(1 - e * .96);
    localGroupGroup.scale.setScalar(1 - e * .96);
    universeGroup.scale.setScalar(e);
    camera.position.z = 20 + e * 12;
    camera.position.y = 4.7 - e * 4.2;
  }
  if (t === 1) {
    if (transition.type === 'enter') universeGroup.visible = false;
    if (transition.type === 'leave') { galaxyGroup.visible = false; localGroupGroup.visible = false; universeGroup.visible = true; universeGroup.scale.setScalar(1); }
    transition = null;
  }
}

function inspectStar(event) {
  if (mode !== 'explorer' || transition || !clickableStars || cosmicPosition < 250) return;
  pointer.x = (event.clientX / innerWidth) * 2 - 1;
  pointer.y = -(event.clientY / innerHeight) * 2 + 1;
  raycaster.setFromCamera(pointer, camera);
  const hits = raycaster.intersectObject(clickableStars);
  const livingHit = hits.find((hit) => (
    cosmicPosition < starDeathThresholds[hit.index] + 22
  ));
  if (!livingHit) return;
  showStarInspector(livingHit.index);
}

function showStarInspector(index) {
  if (!clickableStars || index < 0 || index >= starDeathThresholds.length) return;
  const random = createSeededRandom(universe.seed, index * 31);
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
  $('#star-navigation-status').textContent = `已选择恒星 RU-${String(index).padStart(5, '0')}，${type}，温度 ${temperature} K，${planets} 颗行星，生命信号${life}`;
}

function advanceCosmicTime(deltaSeconds) {
  cosmicPosition += deltaSeconds * timelineUnitsPerSecond(cosmicPosition) * timeSpeed;
}



function toggleCivilizations() {
  if (mode !== 'explorer') return;
  const panel = $('#civilization-panel');
  const expanded = !panel.classList.contains('is-expanded');
  panel.classList.toggle('is-expanded', expanded);
  $('#toggle-civilizations').setAttribute('aria-expanded', String(expanded));
  if (expanded && civilizationRuntimeState.length) {
    renderCivilizationRows({
      position: cosmicPosition,
      simulationState: lastCivilizationSnapshot,
      runtimeState: civilizationRuntimeState,
      civilizationData
    });
    organizeCivilizationLegend(lastCivilizationSnapshot, civilizationData);
  }
}

function openCivilizationChronicle(speciesIndex) {
  if (!civilizationData[speciesIndex]) return;
  selectedChronicleIndex = speciesIndex;
  $('#star-inspector').classList.remove('is-open');
  document.body.classList.add('is-chronicle-open');
  renderCivilizationChronicle({
    speciesIndex,
    civilizationData,
    runtimeState: civilizationRuntimeState,
    cosmicEvents,
    universe,
    timeLabel: cosmicTimeLabel,
    localGroup: localGalaxyGroup,
    observation: civilizationObservation({
      observerSpeciesIndex,
      targetSpeciesIndex: speciesIndex,
      position: cosmicPosition,
      civilizationSimulation,
      civilizationData,
      universe
    })
  });
  const observing = observerSpeciesIndex === speciesIndex;
  $('#observe-civilization').classList.toggle('is-active', observing);
  $('#observe-civilization').textContent = observing ? '退出观察者模式' : '以此文明观察';
}

function toggleLocalGroupView() {
  if (mode !== 'explorer') return;
  localGroupView = !localGroupView;
  document.body.classList.toggle('is-local-group-view', localGroupView);
  $('#toggle-local-group').setAttribute('aria-pressed', String(localGroupView));
  $('#toggle-local-group').textContent = localGroupView ? '返回主星系' : '查看局部星系群';
  if (localGroupView) {
    const verticalFov = THREE.MathUtils.degToRad(camera.fov);
    const horizontalFov = 2 * Math.atan(Math.tan(verticalFov / 2) * camera.aspect);
    const widthDistance = localGroupFrameRadius / Math.tan(horizontalFov / 2);
    const heightDistance = localGroupFrameRadius * .62 / Math.tan(verticalFov / 2);
    const frameDistance = Math.max(64, widthDistance, heightDistance) * 1.12;
    camera.far = Math.max(240, frameDistance + localGroupFrameRadius * 2);
    camera.position.set(0, frameDistance * .46, frameDistance * .89);
    controls.maxDistance = frameDistance * 1.35;
  } else {
    camera.far = 200;
    camera.position.set(0, 5.6, 23.3);
    controls.maxDistance = 46;
  }
  camera.updateProjectionMatrix();
  controls.target.set(0, 0, 0);
  controls.update();
  updateLocalGroupVisuals(lastCivilizationSnapshot);
}

function closeCivilizationChronicle() {
  selectedChronicleIndex = null;
  document.body.classList.remove('is-chronicle-open');
  $('#civilization-chronicle').classList.remove('is-open');
}

function observerDelayForEvent(event) {
  if (observerSpeciesIndex === null || event.targetSpeciesIndex === null) return 0;
  if (event.targetSpeciesIndex === observerSpeciesIndex) return 0;
  const observerNode = civilizationData[observerSpeciesIndex]?.homeNodeIndex;
  const eventNode = event.targetNodeIndex;
  if (observerNode === undefined || eventNode === undefined) return 0;
  const positions = civilizationSimulation.habitatPositions;
  const observerOffset = observerNode * 3;
  const eventOffset = eventNode * 3;
  const distance = Math.hypot(
    positions[observerOffset] - positions[eventOffset],
    positions[observerOffset + 1] - positions[eventOffset + 1],
    positions[observerOffset + 2] - positions[eventOffset + 2]
  );
  return distance / Math.max(.38, universe.speed) * 3.2;
}

function observerCanSeeEvent(event, position = cosmicPosition) {
  return observerSpeciesIndex === null || position >= event.impactAt + observerDelayForEvent(event);
}

function timelineMarkerEvents(marker) {
  const indices = marker.dataset.eventIndices
    ? marker.dataset.eventIndices.split(',').map(Number)
    : [Number(marker.dataset.eventIndex)];
  return indices.map((index) => cosmicEvents[index]).filter(Boolean);
}

function updateObserverMarkers() {
  document.querySelectorAll('.event-marker, .timeline-detail-event').forEach((marker) => {
    const events = timelineMarkerEvents(marker);
    const observations = events.map((event) => ({
      delay: observerDelayForEvent(event),
      visible: observerCanSeeEvent(event)
    }));
    const visibleObservations = observations.filter((observation) => observation.visible);
    const beyondLightcone = visibleObservations.length === 0;
    const partial = visibleObservations.length > 0 && visibleObservations.length < observations.length;
    const maximumDelay = Math.max(0, ...visibleObservations.map((observation) => observation.delay));
    const uncertain = observerSpeciesIndex !== null && !beyondLightcone && maximumDelay > 8;
    marker.classList.toggle('is-beyond-lightcone', beyondLightcone);
    marker.classList.toggle('is-partially-observed', partial);
    marker.classList.toggle('is-uncertain-observation', uncertain);
    marker.style.setProperty(
      '--observation-confidence',
      String(THREE.MathUtils.clamp(1 - maximumDelay / 180, .22, 1))
    );
  });
}

function toggleObserverMode() {
  if (selectedChronicleIndex === null) return;
  observerSpeciesIndex = observerSpeciesIndex === selectedChronicleIndex ? null : selectedChronicleIndex;
  $('#mode-label').textContent = observerSpeciesIndex === null
    ? '宇宙观测模式'
    : `${civilizationData[observerSpeciesIndex].name} · 有限光锥`;
  openCivilizationChronicle(selectedChronicleIndex);
  updateObserverMarkers();
  updateCosmicTime(cosmicPosition, true);
}







function timelineVisualContext() {
  if (!cachedTimelineVisualContext) {
    cachedTimelineVisualContext = {
      mode, epochEffectsGroup, primordialParticles, primordialFactors, primordialDirections,
      expansionStreaks, expansionDirections, bangCore, shockwaves, renderer, scene,
      clickableStars, originalGalaxyPositions, stellarGravityState, universe, transition, galaxyGroup,
      starDeathThresholds, originalGalaxyColors, stellarDawnModel, dawnGas, dawnSites,
      cosmicEvents, remnantGroup,
      stellarRemnants, originalRemnantPositions, remnantDynamics, blackHoleRemnants,
      heatDeathGroup, coldPhotons, originalPhotonPositions, originalPhotonColors,
      cosmicFateGroup, fateBubble, fateGlow, cosmicEventGroup
    };
  }
  cachedTimelineVisualContext.mode = mode;
  cachedTimelineVisualContext.transition = transition;
  return cachedTimelineVisualContext;
}

function applyCivilizationVisuals(runtimeState) {
  const fateFade = universe.cosmicFate.type === 'heat-death'
    ? 0
    : THREE.MathUtils.smoothstep(cosmicPosition, universe.cosmicFate.onsetAt, 995);
  runtimeState.forEach((state, index) => {
    const group = civilizationGroups[index];
    const species = civilizationData[index];
    group.visible = state.alive && state.count > 0;
    let observerOpacity = 1;
    if (observerSpeciesIndex !== null && index !== observerSpeciesIndex) {
      const observerState = runtimeState[observerSpeciesIndex];
      const known = observerState?.friendlyNames.includes(species.name)
        || observerState?.conflictNames.includes(species.name);
      observerOpacity = known ? .62 : .12;
    }
    group.material.opacity = (state.ascended ? .88 : .98) * (1 - fateFade) * observerOpacity;
    group.material.size = state.ascended ? .31 : .24;
    group.material.color.setHex(state.ascended ? 0xe9d7ff : species.color);
  });
}

function updateLogisticsVisuals(simulationState) {
  logisticsGroups.forEach((network, speciesIndex) => {
    const species = civilizationData[speciesIndex];
    const civilization = civilizationGroups[speciesIndex];
    const count = Math.min(12, Math.max(0, species?.displayCount - 1));
    const linePositions = network.geometry.attributes.position.array;
    const colonyPositions = civilization.geometry.attributes.position.array;
    if (!showCivilizationLogistics || !simulationState?.active?.[speciesIndex] || count === 0) {
      network.visible = false;
      network.geometry.setDrawRange(0, 0);
      return;
    }
    network.visible = true;
    for (let lineIndex = 0; lineIndex < count; lineIndex++) {
      const colonyIndex = 1 + Math.floor(lineIndex * (species.displayCount - 1) / count);
      const target = lineIndex * 6;
      linePositions[target] = colonyPositions[0];
      linePositions[target + 1] = colonyPositions[1];
      linePositions[target + 2] = colonyPositions[2];
      linePositions[target + 3] = colonyPositions[colonyIndex * 3];
      linePositions[target + 4] = colonyPositions[colonyIndex * 3 + 1];
      linePositions[target + 5] = colonyPositions[colonyIndex * 3 + 2];
    }
    network.geometry.setDrawRange(0, count * 2);
    network.geometry.attributes.position.needsUpdate = true;
    const throughput = simulationState.logisticsThroughput?.[speciesIndex] || 0;
    network.material.opacity = .018 + throughput * .11;
    network.material.color.setHex(species.color);
  });
}

function updateKeyboardStarMarker() {
  if (!keyboardStarMarker || keyboardStarIndex < 0 || !clickableStars) return;
  if (cosmicPosition >= starDeathThresholds[keyboardStarIndex] + 22) {
    keyboardStarMarker.visible = false;
    return;
  }
  const positions = clickableStars.geometry.attributes.position.array;
  keyboardStarMarker.position.fromArray(positions, keyboardStarIndex * 3);
  keyboardStarMarker.visible = mode === 'explorer' && cosmicPosition >= 250;
}

function updateLocalGroupVisuals(simulationState) {
  if (!localGalaxyGroup) return;
  const visible = mode === 'explorer' && cosmicPosition >= 205;
  const routesFormed = visible && cosmicPosition >= STELLAR_DAWN_END;
  localGroupGroup.visible = visible;
  const viewBoost = localGroupView ? 1 : .34;
  const stellarEnd = stellarEndTimelinePosition(universe);
  const remapReferencePosition = (referencePosition) => cosmicYearsToTimelinePosition(
    referenceFutureYearsAtTimelinePosition(referencePosition, universe),
    universe
  );
  const remnantFadeStart = remapReferencePosition(845);
  const remnantFadeEnd = remapReferencePosition(930);
  const remnantPersistence = remnantFadeStart >= 999
    ? 1
    : 1 - THREE.MathUtils.smoothstep(
        cosmicPosition,
        remnantFadeStart,
        Math.max(remnantFadeStart + 1, remnantFadeEnd)
      );
  const stellarPopulation = 1 - THREE.MathUtils.smoothstep(
    cosmicPosition,
    stellarEnd - 75,
    stellarEnd + 10
  );
  const fate = universe.cosmicFate;
  const finiteOutcome = fate?.type && fate.type !== 'heat-death';
  const fatePhase = finiteOutcome
    ? THREE.MathUtils.smoothstep(cosmicPosition, fate.onsetAt, 1000)
    : 0;

  localGroupGalaxies.forEach((companion) => {
    let fateSurvival = 1;
    companion.galaxy.position.fromArray(companion.basePosition);
    companion.galaxy.scale.setScalar(1);
    if (fatePhase > 0 && fate.type === 'big-rip') {
      const separation = 1 + Math.pow(fatePhase, 1.7) * 3.2;
      companion.galaxy.position.multiplyScalar(separation);
      companion.galaxy.scale.setScalar(1 + Math.pow(fatePhase, 1.7) * 2.5);
      fateSurvival = Math.pow(1 - fatePhase, .72);
    } else if (fatePhase > 0 && fate.type === 'big-crunch') {
      const contraction = Math.max(.012, 1 - Math.pow(fatePhase, 1.35) * .988);
      companion.galaxy.position.multiplyScalar(contraction);
      companion.galaxy.scale.setScalar(contraction);
    } else if (fatePhase > 0 && fate.type === 'vacuum-decay') {
      const bubbleRadius = .18 + Math.pow(fatePhase, .58) * 36;
      const bubblePosition = fateBubble?.position || new THREE.Vector3();
      const distance = companion.galaxy.position.distanceTo(bubblePosition);
      fateSurvival = THREE.MathUtils.smoothstep(bubbleRadius - 1.2, bubbleRadius + .4, distance);
    }

    const gasReveal = THREE.MathUtils.smoothstep(
      cosmicPosition,
      companion.galaxyBirthStart - 38,
      companion.galaxyBirthStart - 12
    );
    const gasIonized = THREE.MathUtils.smoothstep(
      cosmicPosition,
      companion.galaxyBirthStart + 22,
      STELLAR_DAWN_END
    );
    const colorArray = companion.points.geometry.attributes.color.array;
    for (let index = 0; index < companion.birthAt.length; index++) {
      const offset = index * 3;
      const born = THREE.MathUtils.smoothstep(
        cosmicPosition,
        companion.birthAt[index],
        companion.birthAt[index] + 5.5
      );
      const alive = 1 - THREE.MathUtils.smoothstep(
        cosmicPosition,
        companion.deathAt[index],
        companion.deathAt[index] + 22
      );
      const young = 1 - THREE.MathUtils.smoothstep(
        cosmicPosition,
        companion.birthAt[index] + 3,
        companion.birthAt[index] + 18
      );
      const remnant = THREE.MathUtils.smoothstep(
        cosmicPosition,
        companion.deathAt[index],
        companion.deathAt[index] + 10
      ) * companion.remnantStrength[index] * remnantPersistence;
      const livingLight = born * alive;
      const gasLight = (1 - born) * gasReveal * (1 - gasIonized);
      colorArray[offset] = companion.baseColors[offset] * livingLight * (1 + young * .28)
        + remnant * .64
        + gasLight * .055;
      colorArray[offset + 1] = companion.baseColors[offset + 1] * livingLight * (1 + young * .52)
        + remnant * .74
        + gasLight * .14;
      colorArray[offset + 2] = companion.baseColors[offset + 2] * livingLight * (1 + young * .95)
        + remnant
        + gasLight * .22;
      if (fate.type === 'big-crunch' && fatePhase > 0) {
        colorArray[offset] *= 1 + fatePhase * 1.4;
        colorArray[offset + 1] *= 1 - fatePhase * .5;
        colorArray[offset + 2] *= 1 - fatePhase * .72;
      }
    }
    companion.points.geometry.attributes.color.needsUpdate = true;
    companion.points.material.opacity = companion.points.material.userData.baseOpacity
      * viewBoost
      * fateSurvival;

    companion.gas.material.opacity = gasReveal * (1 - gasIonized) * .38 * viewBoost * fateSurvival;
    companion.gas.scale.setScalar(companion.radius * THREE.MathUtils.lerp(4.4, 3.2, gasIonized));
    const assembled = THREE.MathUtils.smoothstep(
      cosmicPosition,
      companion.galaxyBirthStart + 20,
      STELLAR_DAWN_END + 8
    );
    companion.coreEvolutionOpacity = companion.core.material.userData.baseOpacity
      * viewBoost
      * assembled
      * stellarPopulation
      * fateSurvival;
    companion.core.material.opacity = companion.coreEvolutionOpacity;
    if (prefersReducedMotion || !localGroupView) {
      updateLocalGalaxyParticlePositions(companion, performance.now(), false);
    }
  });

  let epochLabel = '原星系云';
  if (cosmicPosition < STELLAR_DAWN_START) epochLabel = '原星系云';
  else if (cosmicPosition < STELLAR_DAWN_END) epochLabel = '恒星形成中';
  else if (cosmicPosition < stellarEnd - 75) epochLabel = '恒星时代';
  else if (cosmicPosition < stellarEnd + 10) epochLabel = '恒星逐渐熄灭';
  else if (cosmicPosition < remnantFadeEnd) epochLabel = '致密残骸时代';
  else epochLabel = '暗星系遗迹';
  if (fatePhase > 0) epochLabel = fate.type === 'big-rip'
    ? '结构解体中'
    : fate.type === 'big-crunch' ? '整体坍缩中' : '真空衰变中';
  const groupCountText = `1 个主星系 · ${localGalaxyGroup.companions.length} 个伴星系 · ${epochLabel}`;
  if ($('#local-group-count').textContent !== groupCountText) {
    $('#local-group-count').textContent = groupCountText;
  }

  let activeRoutes = 0;
  const trafficCandidates = [];
  civilizationData.forEach((species, speciesIndex) => {
    const route = localGroupRoutes[speciesIndex];
    const ship = intergalacticMarkers[speciesIndex];
    if (!route || !ship) return;
    const externalIndex = simulationState?.externalGalaxyIndices?.[speciesIndex] || 0;
    const externalPopulation = simulationState?.externalPopulations?.[speciesIndex] || 0;
    const fleetState = simulationState?.fleetStates?.[speciesIndex] || 0;
    const fleetTarget = simulationState?.fleetTargetGalaxyIndices?.[speciesIndex] || 0;
    const routeIndex = externalIndex || fleetTarget;
    const companion = routeIndex
      ? localGalaxyGroup.companions[(routeIndex - 1) % localGalaxyGroup.companions.length]
      : null;
    const routeActive = Boolean(
      companion
      && (fleetState || externalPopulation > .01)
      && routesFormed
      && fatePhase < .08
    );
    route.visible = false;
    ship.visible = false;
    if (!routeActive) return;
    activeRoutes++;
    const recordedProgress = simulationState.fleetProgress?.[speciesIndex] || 0;
    const targetGalaxy = localGroupGalaxies.find((item) => (
      item.galaxy.userData.companionIndex === companion.index
      || item.points.userData.companionIndex === companion.index
    ));
    ship.userData.targetGalaxy = targetGalaxy;
    ship.userData.targetRadius = companion.radius;
    ship.userData.fleetProgress = recordedProgress;
    ship.userData.isInitialFlight = (fleetState === 1 || fleetState === 3) && externalPopulation <= .01;
    ship.userData.isLost = false;
    if (fleetState !== -1 || externalPopulation > .01) {
      trafficCandidates.push({
        ship,
        priority: externalPopulation + (fleetState > 0 ? .25 : 0),
        speciesIndex
      });
    }
  });
  trafficCandidates
    .sort((a, b) => b.priority - a.priority || a.speciesIndex - b.speciesIndex)
    .slice(0, maxVisibleIntergalacticShips)
    .forEach(({ ship }) => {
      ship.visible = localGroupView;
      updateIntergalacticShipPosition(ship, performance.now(), false);
      updateIntergalacticShipAppearance(ship, performance.now());
    });
  const visibleShips = Math.min(trafficCandidates.length, maxVisibleIntergalacticShips);
  $('#local-group-routes').textContent = activeRoutes
    ? `${activeRoutes} 条跨星系航路 · ${visibleShips} 艘运输船往返中`
    : '尚无跨星系航线';
}

function updateIntergalacticShipPosition(ship, now, animateTraffic) {
  const targetGalaxy = ship.userData.targetGalaxy;
  if (!ship.visible || !targetGalaxy) return;
  shipRouteDirection.copy(targetGalaxy.galaxy.position).normalize();
  shipRouteStart.copy(shipRouteDirection).multiplyScalar(.8);
  shipRouteEnd.copy(targetGalaxy.galaxy.position).addScaledVector(
    shipRouteDirection,
    -Math.max(.7, ship.userData.targetRadius * 1.08)
  );

  let progress = ship.userData.fleetProgress || 0;
  let direction = 1;
  if (!ship.userData.isInitialFlight) {
    const traffic = shuttleTrafficAt(
      animateTraffic ? now * .001 : 0,
      ship.userData.trafficPhase,
      ship.userData.trafficSpeed
    );
    progress = traffic.progress;
    direction = traffic.direction;
  }
  ship.position.lerpVectors(shipRouteStart, shipRouteEnd, progress);
  shipRouteEnd.copy(shipRouteDirection).multiplyScalar(direction);
  ship.quaternion.setFromUnitVectors(
    shipForward,
    shipRouteEnd
  );
}

function updateIntergalacticShipAppearance(ship, now, delta = 1 / 60) {
  const targetMix = shipHighlightEnabled ? 1 : 0;
  const blend = prefersReducedMotion ? 1 : 1 - Math.exp(-12 * delta);
  const highlightMix = THREE.MathUtils.lerp(
    ship.userData.highlightMix || 0,
    targetMix,
    blend
  );
  const lost = ship.userData.isLost;
  const elapsed = now * .001;
  const enginePulse = prefersReducedMotion
    ? 1
    : .82 + Math.sin(elapsed * 4.2 + ship.userData.pulsePhase) * .18;
  const locatorPulse = prefersReducedMotion
    ? 1
    : .88 + Math.sin(elapsed * 2.8 + ship.userData.pulsePhase) * .12;

  ship.userData.highlightMix = Math.abs(highlightMix - targetMix) < .001
    ? targetMix
    : highlightMix;
  ship.scale.setScalar(THREE.MathUtils.lerp(1, 2.25, ship.userData.highlightMix));
  ship.userData.hullMaterial.opacity = THREE.MathUtils.lerp(
    lost ? .32 : .9,
    lost ? .48 : 1,
    ship.userData.highlightMix
  );
  ship.userData.engineMaterial.opacity = THREE.MathUtils.lerp(
    lost ? .12 : .58,
    lost ? .28 : .96,
    ship.userData.highlightMix
  ) * enginePulse;
  ship.userData.highlightMaterial.opacity = ship.userData.highlightMix
    * (lost ? .18 : .38)
    * locatorPulse;
  ship.userData.highlightSprite.scale.setScalar(1.02 + locatorPulse * .14);
  ship.userData.highlightMaterial.rotation = prefersReducedMotion ? 0 : elapsed * .22;
}

function updateLocalGalaxyParticlePositions(companion, now, motionEnabled) {
  const elapsed = now * .001;
  const positions = companion.points.geometry.attributes.position.array;
  for (let index = 0; index < companion.radii.length; index++) {
    const offset = index * 3;
    const normalizedRadius = companion.radii[index] / companion.radius;
    const angularSpeed = companion.rotationSpeed * (
      .48 + 1.05 / (.32 + Math.max(.14, normalizedRadius))
    );
    const phase = companion.phases[index];
    const assembly = THREE.MathUtils.smoothstep(
      cosmicPosition,
      companion.birthAt[index] - 7,
      Math.min(STELLAR_DAWN_END, companion.birthAt[index] + 38)
    );
    const settledRadius = companion.radii[index] * (
      1 + (motionEnabled ? Math.sin(elapsed * .24 + phase) * companion.radialWobble : 0)
    );
    const radius = THREE.MathUtils.lerp(companion.formationRadii[index], settledRadius, assembly);
    const settledAngle = companion.angles[index]
      + (motionEnabled ? elapsed * angularSpeed : 0);
    const angle = THREE.MathUtils.lerp(companion.formationAngles[index], settledAngle, assembly);
    positions[offset] = Math.cos(angle) * radius;
    positions[offset + 1] = THREE.MathUtils.lerp(
      companion.formationVerticals[index],
      companion.verticals[index],
      assembly
    ) + (motionEnabled ? Math.sin(elapsed * .34 + phase) * companion.radius * .012 : 0);
    positions[offset + 2] = Math.sin(angle) * radius * companion.flattening;
  }
  companion.points.geometry.attributes.position.needsUpdate = true;
}

function animateLocalGroupGalaxies(now, delta) {
  if (!localGroupView || !localGroupGroup.visible) return;
  const elapsed = now * .001;
  if (!prefersReducedMotion) {
    localGroupGalaxies.forEach((companion) => {
      updateLocalGalaxyParticlePositions(companion, now, true);
      const pulse = 1 + Math.sin(elapsed * .72 + companion.pulsePhase) * .035;
      companion.core.scale.setScalar(companion.radius * 1.68 * pulse);
      companion.core.material.opacity = (companion.coreEvolutionOpacity || 0)
        * (.92 + Math.sin(elapsed * .72 + companion.pulsePhase) * .08);
      companion.gas.material.rotation = elapsed * companion.rotationSpeed * .08;
    });
  }
  intergalacticMarkers.forEach((ship) => {
    if (!ship.visible) return;
    updateIntergalacticShipPosition(ship, now, !prefersReducedMotion);
    updateIntergalacticShipAppearance(ship, now, delta);
  });
}

function updateCosmicTime(value, force = false) {
  currentEras ||= erasForUniverse(universe);
  const timelineState = createCosmicTimelineState(value, universe, currentEras);
  cosmicPosition = timelineState.position;
  renderTimelineHeader(timelineState, timelineViewport);

  if (!clickableStars) return;

  updateEpochVisuals(cosmicPosition, timelineVisualContext());
  const simulationState = civilizationSnapshotAt(civilizationSimulation, cosmicPosition);
  const civilizationSnapshotChanged = force || simulationState !== lastCivilizationSnapshot;
  if (civilizationSnapshotChanged) {
    lastCivilizationSnapshot = simulationState;
    applyCivilizationSnapshot(simulationState, {
      civilizationSimulation,
      civilizationData,
      civilizationGroups
    });
    civilizationRuntimeState = deriveCivilizationRuntime(
      cosmicPosition,
      simulationState,
      civilizationData,
      cosmicEvents
    );
    renderCivilizationRows({
      position: cosmicPosition,
      simulationState,
      runtimeState: civilizationRuntimeState,
      civilizationData
    });
    const civilizationPanelCollapsed = compactCivilizationLayout.matches
      && !$('#civilization-panel').classList.contains('is-expanded');
    if (!civilizationPanelCollapsed) organizeCivilizationLegend(simulationState, civilizationData);
    activeSpeciesCount = civilizationRuntimeState.filter((state) => state.alive).length;
    ascendedSpeciesCount = civilizationRuntimeState.filter((state) => state.ascended).length;
    activeCivilizationRelationship = findDominantRelationship(
      simulationState,
      civilizationRuntimeState,
      civilizationData.length
    );
    if (selectedChronicleIndex !== null) openCivilizationChronicle(selectedChronicleIndex);
    if (observerSpeciesIndex !== null) updateObserverMarkers();
  }
  syncCivilizationHosts({
    clickableStars,
    stellarRemnants,
    remnantDynamics,
    cosmicPosition,
    civilizationData,
    civilizationGroups
  });

  applyCivilizationVisuals(civilizationRuntimeState);
  updateLogisticsVisuals(simulationState);
  updateKeyboardStarMarker();
  updateLocalGroupVisuals(simulationState);
  const activeEvent = updateCosmicEvents(cosmicPosition, timelineVisualContext());
  const observedEvent = activeEvent && observerCanSeeEvent(activeEvent) ? activeEvent : null;
  if (activeEvent && !observedEvent) activeEvent.group.visible = false;
  const narrative = selectTimelineNarrative({
    position: cosmicPosition,
    label: timelineState.label,
    universe,
    activeEvent: observedEvent,
    activeRelationship: activeCivilizationRelationship,
    ascendedSpecies: ascendedSpeciesCount,
    activeSpecies: activeSpeciesCount,
    civilizationData
  });
  if (observerSpeciesIndex !== null && observedEvent && observedEvent.targetSpeciesIndex !== observerSpeciesIndex) {
    const confidence = Math.round(THREE.MathUtils.clamp(1 - observerDelayForEvent(observedEvent) / 180, .22, 1) * 100);
    narrative.text = `延迟观测 · 置信度 ${confidence}% · ${narrative.text}`;
  }
  renderTimelineEvent(narrative, force);
}

function selectKeyboardStar(direction) {
  if (mode !== 'explorer' || !clickableStars || cosmicPosition < 250) return;
  const count = starDeathThresholds.length;
  let candidate = keyboardStarIndex < 0
    ? (direction < 0 ? count : -1)
    : keyboardStarIndex;
  for (let attempt = 0; attempt < count; attempt++) {
    candidate = (candidate + direction + count) % count;
    if (cosmicPosition < starDeathThresholds[candidate] + 22) break;
  }
  keyboardStarIndex = candidate;
  updateKeyboardStarMarker();
  $('#star-navigation-status').textContent = `恒星 RU-${String(candidate).padStart(5, '0')} 已获得键盘焦点，按回车查看详情。`;
}

function animate(now) {
  animationFrameId = null;
  if (pageDisposed || document.hidden) return;
  animationFrameId = requestAnimationFrame(animate);
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
      let reachedTimelineEnd = false;
      if (cosmicPosition >= 1000) {
        cosmicPosition = 1000;
        timePlaying = false;
        reachedTimelineEnd = true;
        $('#toggle-time').textContent = '▶';
        $('#toggle-time').setAttribute('aria-label', '播放时间');
      }
      if (reachedTimelineEnd || now - lastTimelineUpdateAt >= timelineUpdateIntervalMs) {
        lastTimelineUpdateAt = now;
        updateCosmicTime(cosmicPosition);
      }
    }
    controls.update();
    epochEffectsGroup.position.set(0, 0, 0);
    if (heatDeathGroup.visible && !prefersReducedMotion) {
      coldPhotons.rotation.y += .000035;
      coldPhotons.rotation.x += .000009;
    }
    if (cosmicFateGroup.visible && !prefersReducedMotion) {
      fateBubble.rotation.y += .0014;
      fateBubble.rotation.x -= .0007;
      fateGlow.material.rotation = now * .00008;
    }
    if (!prefersReducedMotion) {
      blackHoleRemnants.forEach((hole, index) => {
        if (!hole.visible) return;
        animateBlackHoleVisual(hole, now, hole.userData.spinDirection || (index % 2 ? -1 : 1));
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
    animateLocalGroupGalaxies(now, delta);
    if (now - lastCoordinateUpdateAt >= coordinateUpdateIntervalMs) {
      lastCoordinateUpdateAt = now;
      const time = now * 0.00012;
      const coordinateValues = [
        `${Math.sin(time) < 0 ? '−' : '+'}${Math.abs(Math.sin(time) * 9).toFixed(2)}`,
        `${Math.cos(time * .7) < 0 ? '−' : '+'}${Math.abs(Math.cos(time * .7) * 9).toFixed(2)}`,
        `${Math.sin(time * .3) < 0 ? '−' : '+'}${Math.abs(Math.sin(time * .3) * 3).toFixed(2)}`
      ];
      coordinateElements.forEach((element, index) => {
        if (element.textContent !== coordinateValues[index]) element.textContent = coordinateValues[index];
      });
    }
  }
  renderer.render(scene, camera);
}

function startAnimation() {
  if (pageDisposed || document.hidden || animationFrameId !== null) return;
  lastFrame = performance.now();
  animationFrameId = requestAnimationFrame(animate);
}

function stopAnimation() {
  if (animationFrameId === null) return;
  cancelAnimationFrame(animationFrameId);
  animationFrameId = null;
}

function disposePageResources() {
  if (pageDisposed) return;
  pageDisposed = true;
  stopAnimation();
  if (timelineMarkerResizeFrame !== null) {
    cancelAnimationFrame(timelineMarkerResizeFrame);
    timelineMarkerResizeFrame = null;
  }
  controls?.dispose();
  [
    universeGroup,
    galaxyGroup,
    localGroupGroup,
    epochEffectsGroup,
    remnantGroup,
    heatDeathGroup,
    cosmicFateGroup,
    cosmicEventGroup
  ].forEach(disposeGroup);
  disposeSharedTextures();
  scene.clear();
  renderer.renderLists?.dispose();
  renderer.dispose();
  renderer.forceContextLoss();
}

document.addEventListener('visibilitychange', () => {
  if (document.hidden) stopAnimation();
  else startAnimation();
});

window.addEventListener('pagehide', (event) => {
  stopAnimation();
  if (!event.persisted) disposePageResources();
});

window.addEventListener('pageshow', (event) => {
  if (event.persisted) startAnimation();
});

window.addEventListener('pointermove', (event) => {
  pointer.x = (event.clientX / innerWidth) * 2 - 1;
  pointer.y = -(event.clientY / innerHeight) * 2 + 1;
});

window.addEventListener('resize', () => {
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight);
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  cancelAnimationFrame(timelineMarkerResizeFrame);
  timelineMarkerResizeFrame = requestAnimationFrame(() => {
    if (mode === 'explorer' && cosmicEvents.length > 0) refreshTimelineViewport();
  });
});

canvas.addEventListener('click', inspectStar);
canvas.addEventListener('keydown', (event) => {
  if (!['ArrowLeft', 'ArrowRight', 'Home', 'End', 'Enter', ' '].includes(event.key)) return;
  if (mode !== 'explorer') return;
  event.preventDefault();
  event.stopPropagation();
  if (event.key === 'ArrowLeft') selectKeyboardStar(-1);
  if (event.key === 'ArrowRight') selectKeyboardStar(1);
  if (event.key === 'Home') { keyboardStarIndex = -1; selectKeyboardStar(1); }
  if (event.key === 'End') { keyboardStarIndex = 0; selectKeyboardStar(-1); }
  if ((event.key === 'Enter' || event.key === ' ') && keyboardStarIndex >= 0) showStarInspector(keyboardStarIndex);
});
$('#regenerate-top').addEventListener('click', regenerate);
$('#enter-universe').addEventListener('click', enterUniverse);
$('#compare-universes').addEventListener('click', () => toggleMultiverseLab());
$('#close-multiverse').addEventListener('click', () => toggleMultiverseLab(false));
$('#multiverse-list').addEventListener('click', (event) => {
  const candidate = event.target.closest('[data-seed]');
  if (!candidate || mode !== 'generator') return;
  toggleMultiverseLab(false);
  installUniverse(createUniverse(candidate.dataset.seed));
});
$('#close-inspector').addEventListener('click', () => $('#star-inspector').classList.remove('is-open'));
$('#close-chronicle').addEventListener('click', closeCivilizationChronicle);
$('#toggle-local-group').addEventListener('click', toggleLocalGroupView);
$('#toggle-ship-highlight').addEventListener('click', (event) => {
  shipHighlightEnabled = !shipHighlightEnabled;
  event.currentTarget.classList.toggle('is-active', shipHighlightEnabled);
  event.currentTarget.setAttribute('aria-pressed', String(shipHighlightEnabled));
  if (prefersReducedMotion) {
    intergalacticMarkers.forEach((ship) => {
      updateIntergalacticShipAppearance(ship, performance.now());
    });
  }
});
$('#civilization-legend').addEventListener('click', (event) => {
  const row = event.target.closest('[data-species]');
  if (row) openCivilizationChronicle(Number(row.dataset.species));
});
$('#civilization-legend').addEventListener('keydown', (event) => {
  if (event.key !== 'Enter' && event.key !== ' ') return;
  const row = event.target.closest('[data-species]');
  if (!row) return;
  event.preventDefault();
  openCivilizationChronicle(Number(row.dataset.species));
});
function jumpToChronicleEvent(event) {
  const item = event.target.closest('[data-event-id]');
  if (!item) return;
  const cosmicEvent = cosmicEvents.find((entry) => entry.id === item.dataset.eventId);
  if (cosmicEvent) updateCosmicTime(cosmicEvent.start + cosmicEvent.duration * .56, true);
}
$('#chronicle-events').addEventListener('click', jumpToChronicleEvent);
$('#causal-graph').addEventListener('click', jumpToChronicleEvent);
$('#causal-graph').addEventListener('keydown', (event) => {
  if (event.key === 'Enter' || event.key === ' ') jumpToChronicleEvent(event);
});
document.querySelector('.chronicle-view-switch').addEventListener('click', (event) => {
  const button = event.target.closest('[data-chronicle-view]');
  if (!button) return;
  document.querySelectorAll('[data-chronicle-view]').forEach((item) => item.classList.toggle('is-active', item === button));
  $('#chronicle-events').classList.toggle('is-active', button.dataset.chronicleView === 'timeline');
  $('#causal-graph').classList.toggle('is-active', button.dataset.chronicleView === 'graph');
});
$('#observe-civilization').addEventListener('click', toggleObserverMode);
$('#bookmark-cosmic-time').addEventListener('click', () => {
  const key = 'random-universe-bookmarks';
  let bookmarks = [];
  try {
    const stored = JSON.parse(localStorage.getItem(key) || '[]');
    if (Array.isArray(stored)) bookmarks = stored;
  } catch {
    bookmarks = [];
  }
  bookmarks.unshift({ seed: universe.seed, position: Number(cosmicPosition.toFixed(3)), savedAt: new Date().toISOString() });
  localStorage.setItem(key, JSON.stringify(bookmarks.slice(0, 20)));
  $('#chronicle-status').textContent = '当前宇宙时刻已保存在本机';
});
$('#copy-universe-link').addEventListener('click', async () => {
  const url = new URL(window.location.href);
  url.searchParams.set('seed', universe.seed);
  url.searchParams.set('t', cosmicPosition.toFixed(3));
  try {
    await navigator.clipboard.writeText(url.toString());
    $('#chronicle-status').textContent = '可回放链接已复制';
  } catch {
    $('#chronicle-status').textContent = '浏览器未允许写入剪贴板';
  }
});
$('#export-universe-history').addEventListener('click', () => {
  const payload = historyExportPayload({
    universe,
    civilizationData,
    cosmicEvents,
    runtimeState: civilizationRuntimeState,
    localGroup: localGalaxyGroup
  });
  const blobUrl = URL.createObjectURL(new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' }));
  const link = document.createElement('a');
  link.href = blobUrl;
  link.download = `random-universe-${universe.seed}.json`;
  link.click();
  URL.revokeObjectURL(blobUrl);
  $('#chronicle-status').textContent = '文明历史已导出';
});
$('#toggle-civilizations').addEventListener('click', toggleCivilizations);
$('#close-timeline-event-detail').addEventListener('click', closeTimelineEventDetail);
$('#toggle-time').addEventListener('click', () => {
  const willPlay = !timePlaying;
  if (willPlay && timelineViewportIsZoomed()) {
    timelineViewport = { start: 0, end: 1000 };
    refreshTimelineViewport();
  }
  if (cosmicPosition >= 1000) updateCosmicTime(0, true);
  timePlaying = !timePlaying;
  if (timePlaying) lastTimelineUpdateAt = 0;
  $('#toggle-time').textContent = timePlaying ? 'Ⅱ' : '▶';
  $('#toggle-time').setAttribute('aria-label', timePlaying ? '暂停时间' : '播放时间');
});
const timelineInput = $('#cosmic-timeline');
const timelineWrap = timelineInput.closest('.range-wrap');
const timelineFilterToggle = $('#timeline-filter-toggle');
const timelineFilterMenu = $('#timeline-filter-menu');
let timelinePointerId = null;
let timelineSnapTarget = null;

function setTimelineFilterMenuOpen(open) {
  timelineFilterMenu.hidden = !open;
  timelineFilterToggle.setAttribute('aria-expanded', String(open));
  if (open) {
    closeTimelineEventDetail();
    timelineFilterMenu.querySelector('[aria-checked="true"]')?.focus({ preventScroll: true });
  }
}

timelineFilterToggle.addEventListener('click', () => {
  setTimelineFilterMenuOpen(timelineFilterMenu.hidden);
});
document.addEventListener('pointerdown', (event) => {
  if (!timelineFilterMenu.hidden && !event.target.closest('.timeline-filter')) {
    setTimelineFilterMenuOpen(false);
  }
});
timelineFilterMenu.querySelectorAll('[data-event-filter]').forEach((button) => {
  button.addEventListener('click', () => {
    timelineEventFilter = button.dataset.eventFilter;
    timelineFilterMenu.querySelectorAll('[data-event-filter]').forEach((item) => {
      item.setAttribute('aria-checked', String(item === button));
    });
    timelineFilterToggle.textContent = timelineFilterLabels[timelineEventFilter];
    setTimelineFilterMenuOpen(false);
    renderCosmicEventMarkers();
    timelineFilterToggle.focus({ preventScroll: true });
  });
});
$('#toggle-timeline-snap').addEventListener('click', (event) => {
  timelineSnapEnabled = !timelineSnapEnabled;
  event.currentTarget.classList.toggle('is-active', timelineSnapEnabled);
  event.currentTarget.setAttribute('aria-pressed', String(timelineSnapEnabled));
});
$('#timeline-zoom-reset').addEventListener('click', () => {
  timelineViewport = { start: 0, end: 1000 };
  refreshTimelineViewport();
});

function resetTimelineSnapTarget() {
  timelineSnapTarget = null;
  document.querySelectorAll('.event-marker.is-snap-target').forEach((marker) => {
    marker.classList.remove('is-snap-target');
  });
}

function updateTimelineSnapTarget(position, trackWidth) {
  resetTimelineSnapTarget();
  if (!timelineSnapEnabled || !nearestTimelineEvent) return null;
  const tolerance = (timelineViewport.end - timelineViewport.start)
    / Math.max(1, trackWidth)
    * (compactCivilizationLayout.matches ? 18 : 12);
  timelineSnapTarget = nearestTimelineEvent(filteredTimelineEvents(), position, tolerance);
  if (!timelineSnapTarget) return null;
  const eventIndex = cosmicEvents.indexOf(timelineSnapTarget.event);
  document.querySelectorAll('.event-marker').forEach((marker) => {
    const indices = marker.dataset.eventIndices
      ? marker.dataset.eventIndices.split(',').map(Number)
      : [Number(marker.dataset.eventIndex)];
    if (indices.includes(eventIndex)) marker.classList.add('is-snap-target');
  });
  return timelineSnapTarget;
}

function beginTimelineFocus() {
  timelineWrap.classList.add('is-scrubbing');
  focusTimelineScale(Number(timelineInput.value), timelineViewport);
}

function endTimelineFocus() {
  if (!timelineWrap.classList.contains('is-scrubbing')) return;
  timelineWrap.classList.remove('is-scrubbing');
  resetTimelineScaleFocus();
}

function pauseTimelineForScrubbing() {
  timePlaying = false;
  $('#toggle-time').textContent = '▶';
  $('#toggle-time').setAttribute('aria-label', '播放时间');
}

function updateTimelineFromPointer(event) {
  const bounds = timelineWrap.getBoundingClientRect();
  if (bounds.width <= 0) return;
  const progress = THREE.MathUtils.clamp((event.clientX - bounds.left) / bounds.width, 0, 1);
  const position = Math.round(timelinePositionAtPercent(progress * 100, timelineViewport) * 10) / 10;
  updateCosmicTime(position, true);
  focusTimelineScale(position, timelineViewport);
  const snapTarget = updateTimelineSnapTarget(position, bounds.width);
  if (snapTarget) {
    $('#timeline-scrub-value').textContent = `吸附 · ${cosmicTimeLabel(snapTarget.position, universe)}`;
  }
  return snapTarget;
}

function beginTimelineScrub(event) {
  if (event.button !== 0 || event.target.closest('.event-marker, [data-timeline-control]')) return;
  event.preventDefault();
  closeTimelineEventDetail();
  timelinePointerId = event.pointerId;
  timelineWrap.setPointerCapture(event.pointerId);
  timelineInput.focus({ preventScroll: true });
  timelineWrap.classList.remove('is-keyboard-focus');
  pauseTimelineForScrubbing();
  beginTimelineFocus();
  updateTimelineFromPointer(event);
}

function moveTimelineScrub(event) {
  if (event.pointerId !== timelinePointerId) return;
  updateTimelineFromPointer(event);
}

function endTimelineScrub(event, allowSnap = true) {
  if (event.pointerId !== timelinePointerId) return;
  const snapTarget = allowSnap ? updateTimelineFromPointer(event) : null;
  if (snapTarget) updateCosmicTime(snapTarget.position, true);
  timelinePointerId = null;
  if (timelineWrap.hasPointerCapture(event.pointerId)) {
    timelineWrap.releasePointerCapture(event.pointerId);
  }
  resetTimelineSnapTarget();
  endTimelineFocus();
}

timelineWrap.addEventListener('pointerdown', beginTimelineScrub);
timelineWrap.addEventListener('pointermove', moveTimelineScrub);
timelineWrap.addEventListener('pointerup', endTimelineScrub);
timelineWrap.addEventListener('pointercancel', (event) => endTimelineScrub(event, false));
timelineWrap.addEventListener('lostpointercapture', (event) => {
  if (event.pointerId !== timelinePointerId) return;
  timelinePointerId = null;
  resetTimelineSnapTarget();
  endTimelineFocus();
});
timelineWrap.addEventListener('wheel', (event) => {
  if (event.target.closest('[data-timeline-control]')) return;
  event.preventDefault();
  closeTimelineEventDetail();
  const bounds = timelineWrap.getBoundingClientRect();
  const percent = THREE.MathUtils.clamp((event.clientX - bounds.left) / bounds.width, 0, 1) * 100;
  const anchor = timelinePositionAtPercent(percent, timelineViewport);
  const scale = Math.exp(THREE.MathUtils.clamp(event.deltaY, -240, 240) * .0024);
  timelineViewport = zoomTimelineViewport(
    timelineViewport,
    anchor,
    scale,
    compactCivilizationLayout.matches ? 80 : 55
  );
  refreshTimelineViewport();
}, { passive: false });
timelineWrap.addEventListener('dblclick', (event) => {
  if (event.target.closest('[data-timeline-control], .event-marker')) return;
  timelineViewport = { start: 0, end: 1000 };
  refreshTimelineViewport();
});
timelineInput.addEventListener('focus', () => {
  if (timelinePointerId === null) timelineWrap.classList.add('is-keyboard-focus');
});
timelineInput.addEventListener('keydown', (event) => {
  if (['ArrowLeft', 'ArrowRight', 'Home', 'End', 'PageUp', 'PageDown'].includes(event.key)) {
    beginTimelineFocus();
  }
});
timelineInput.addEventListener('keyup', endTimelineFocus);
timelineInput.addEventListener('blur', () => {
  timelineWrap.classList.remove('is-keyboard-focus');
  endTimelineFocus();
});
timelineInput.addEventListener('input', (event) => {
  pauseTimelineForScrubbing();
  updateCosmicTime(event.target.value, true);
  if (timelineWrap.classList.contains('is-scrubbing')) {
    focusTimelineScale(Number(event.target.value), timelineViewport);
  }
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
  if (event.key === 'Escape' && mode === 'generator' && $('#multiverse-lab').classList.contains('is-open')) {
    toggleMultiverseLab(false);
    return;
  }
  if (event.key === 'Escape' && mode === 'explorer') {
    if (!timelineFilterMenu.hidden) {
      setTimelineFilterMenuOpen(false);
      timelineFilterToggle.focus({ preventScroll: true });
      return;
    }
    if (!$('#timeline-event-detail').hidden) {
      closeTimelineEventDetail();
      return;
    }
    if ($('#civilization-chronicle').classList.contains('is-open')) {
      closeCivilizationChronicle();
      return;
    }
    const civilizationPanel = $('#civilization-panel');
    if (civilizationPanel.classList.contains('is-expanded')) {
      civilizationPanel.classList.remove('is-expanded');
      $('#toggle-civilizations').setAttribute('aria-expanded', 'false');
    } else {
      leaveUniverse();
    }
  }
});

const requestedSeed = new URLSearchParams(window.location.search).get('seed');
universe = createUniverse(requestedSeed || undefined);
syncUniverseUrl();
updateUniverseData(universe);
buildUniverseObject();
startAnimation();
