import * as THREE from 'three';
import { createExplorer } from './create-explorer.js';
import { runWhenIdle } from './browser-scheduler.js';
import { createFrameLoop } from './frame-loop.js';
import { createExplorerSession } from './explorer-session.js';
import { createGalaxyHydrator } from '../features/galaxy/galaxy-hydrator.js';
import { createTimelineController } from '../features/timeline/timeline-controller.js';
import { createSeededRandom } from '../domain/random.js';
import { createUniverse } from '../domain/universe.js';
import { cosmicGalaxyPositionAt, createCosmicWebModel } from '../domain/cosmic-web.js';
import { galaxyTypes as galaxyTypeLabels } from '../domain/catalog.js';
import { createLocalGalaxyGroup } from '../domain/local-group.js';
import { disposeSharedTextures, getPointTexture } from '../rendering/textures.js';
import { createUniverseRenderer } from '../rendering/renderer.js';
import { createSceneGraph } from '../rendering/scene-graph.js';
import { disposeGroup } from '../rendering/scene-resources.js';
import { createCosmicEventBuilder } from '../rendering/systems/cosmic-event-builder.js';
import { createCosmicWebSystem } from '../rendering/systems/cosmic-web-system.js';
import { createLocalGroupSystem } from '../rendering/systems/local-group-system.js';
import { createShipSystem } from '../rendering/systems/ship-system.js';
import {
  civilizationObservation,
  lightTravelYearsForSceneDistance
} from '../simulation/observation.js';
import {
  fleetProgress,
  fleetStates,
  intergalacticRouteOperational,
  routeTrafficSpeedForIdentity,
  shuttleTrafficAt,
  stableRouteAssignments
} from '../simulation/intergalactic-travel.js';
import {
  cosmicCivilizationSummaryAt
} from '../simulation/cosmic-civilizations.js';
import {
  historyExportPayload,
  renderCivilizationChronicle,
  renderMultiverseComparison
} from '../ui/civilization-chronicle.js';
import { updateUniverseData } from '../ui/universe-data.js';
import { createDomReferences } from '../ui/dom-references.js';

export async function createExplorerApp() {
  let explorer = null;
  
  const dom = createDomReferences();
  const $ = dom.query;
  const session = createExplorerSession();
  const canvas = dom.byId.universe;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const compactCivilizationLayout = window.matchMedia('(max-width: 800px)');
  const timelineUpdateIntervalMs = 1000 / 30;
  const coordinateUpdateIntervalMs = 100;
  const maxLogisticsRoutesPerSpecies = 12;
  const routesPerVisibleShip = 5;
  const maxCivilizationNuclearRisk = .86;
  const maxLogisticsShipsPerSpecies = Math.ceil(
    maxLogisticsRoutesPerSpecies / routesPerVisibleShip
  );
  const showCivilizationLogistics = false;
  const coordinateElements = [dom.byId['coord-x'], dom.byId['coord-y'], dom.byId['coord-z']];
  
  const { renderer } = await createUniverseRenderer(canvas);
  
  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x050508, 0.008);
  const camera = new THREE.PerspectiveCamera(42, innerWidth / innerHeight, 0.1, 200);
  camera.position.set(0, 0.5, 32);
  
  let controls = null;
  let explorerLoadPromise = null;
  let galaxyPreparationPromise = null;
  let galaxyHydrationPromise = null;
  let preparedGalaxyPositions = null;
  
  const {
    cosmicEventGroup,
    cosmicFateGroup,
    cosmicWebGroup,
    detailGroup,
    epochEffectsGroup,
    galaxyGroup,
    heatDeathGroup,
    localGroupGroup,
    remnantGroup,
    universeGroup
  } = createSceneGraph(scene);
  
  let universe = null;
  let pointer = new THREE.Vector2(0, 0);
  let smoothedPointer = new THREE.Vector2(0, 0);
  let raycaster = new THREE.Raycaster();
  raycaster.params.Points.threshold = 0.12;
  let clickableStars = null;
  let civilizationGroups = [];
  let logisticsGroups = [];
  let logisticsShipMarkers = [];
  let logisticsRouteAssignments = [];
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
  let stellarPopulation = null;
  let dawnGas = null;
  let dawnSites = [];
  let stellarGravityState = null;
  let starDeathThresholds = null;
  let originalRemnantPositions = null;
  let remnantDynamics = null;
  let lastFrame = performance.now();
  let pulsarAnimationTimeMs = 0;
  let lastTimelineUpdateAt = 0;
  let lastCoordinateUpdateAt = 0;
  let cosmicEvents = [];
  let timelineMarkerResizeFrame = null;
  let pageDisposed = false;
  let cachedTimelineVisualContext = null;
  const localGroupState = {
    model: null,
    routes: [],
    shipMarkers: [],
    routeAssignments: [],
    galaxies: []
  };
  const cosmicWebState = {
    model: null,
    visual: null,
    civilizationPlan: null,
    civilizationVisual: null,
    flowTime: 0,
    lastFlowUpdateAt: 0,
    shadersWarmed: false
  };
  let galaxyViewPose = null;
  let immersiveUiTimer = null;
  let suppressImmersiveCanvasClick = false;
  let keyboardStarMarker = null;
  const immersiveUiDelayMs = 3500;
  const shipRouteDirection = new THREE.Vector3();
  const shipRouteStart = new THREE.Vector3();
  const shipRouteEnd = new THREE.Vector3();
  
  const cosmicWebSystem = createCosmicWebSystem({
    camera,
    compactLayout: compactCivilizationLayout,
    cosmicWebGroup,
    disposeGroup,
    getDependencies: () => explorer,
    getPosition: () => session.timeline.position,
    getUniverse: () => universe,
    prefersReducedMotion,
    renderer,
    restoreDetailGroupToScene,
    scene,
    state: cosmicWebState
  });
  const {
    applyOpacity: applyCosmicWebOpacity,
    build: buildCosmicWebMap,
    updateMotion: updateCosmicWebMotion,
    updateVisuals: updateCosmicWebVisuals,
    warmShaders: warmUniverseScaleShaders
  } = cosmicWebSystem;
  
  const shipSystem = createShipSystem({
    getDependencies: () => explorer,
    getState: () => ({
      mode: session.mode,
      shipHighlight: session.view.shipHighlight,
      universeScale: session.view.universeScale
    }),
    getBlackHoleRemnants: () => blackHoleRemnants,
    getLocalGroupGalaxies: () => localGroupState.galaxies,
    getShipCollections: () => [localGroupState.shipMarkers, logisticsShipMarkers],
    galaxyGroup,
    remnantGroup,
    prefersReducedMotion
  });
  const {
    activeBlackHoleNavigationObstacles,
    assignShipNavigationPath,
    beginShipDisappearance,
    createTravelShip,
    forEachShipMarker,
    intergalacticNavigationObstacles,
    positionShipOnNavigationPath,
    resetShipDisappearance,
    updateShipDisappearance
  } = shipSystem;
  
  const localGroupSystem = createLocalGroupSystem({
    beginShipDisappearance,
    createTravelShip,
    disposeGroup,
    getCivilizationData: () => civilizationData,
    getDependencies: () => explorer,
    getFateBubble: () => fateBubble,
    getMode: () => session.mode,
    getSession: () => session,
    getUniverse: () => universe,
    group: localGroupGroup,
    isUniverseScaleTransition,
    prefersReducedMotion,
    query: $,
    resetShipDisappearance,
    routesPerVisibleShip,
    state: localGroupState,
    updateIntergalacticShipAppearance,
    updateIntergalacticShipNavigationPath
  });
  const {
    animate: animateLocalGroupGalaxies,
    build: buildLocalGroupMap,
    updateVisuals: updateLocalGroupVisuals
  } = localGroupSystem;
  
  const cosmicEventBuilder = createCosmicEventBuilder({
    addBlackHoleRemnant,
    blackHoleBaseScale,
    blackHoleDisplayScaleAt,
    blackHolePositionAt,
    cosmicEventGroup,
    galaxyGroup,
    getBlackHoleRemnants: () => blackHoleRemnants,
    getCivilizationData: () => civilizationData,
    getCivilizationEvents: () => civilizationEvents,
    getCivilizationSimulation: () => civilizationSimulation,
    getDependencies: () => explorer,
    getLocalGroup: () => localGroupState.model,
    getRemnantDynamics: () => remnantDynamics,
    getStarDeathThresholds: () => starDeathThresholds,
    getStellarPopulation: () => stellarPopulation,
    getUniverse: () => universe,
    stellarPositionAt
  });
  
  const galaxyHydrator = createGalaxyHydrator({
    buildCivilizations,
    buildCosmicEvents: (starPositions) => cosmicEventBuilder.buildCosmicEvents(starPositions),
    buildCosmicWeb: buildCosmicWebMap,
    buildEpochEffects,
    buildLocalGroup: buildLocalGroupMap,
    buildSimulation: (nextCosmicEvents) => explorer.buildCivilizationSimulationAsync({
      universe,
      civilizationData,
      civilizationSimulation,
      cosmicEvents: nextCosmicEvents
    }),
    finish: ({ cosmicEvents: nextCosmicEvents, seed, simulationResult }) => {
      cosmicEvents = nextCosmicEvents;
      civilizationSimulation = simulationResult.simulation;
      simulationResult.eventUpdates.forEach((update) => {
        const event = cosmicEvents.find((candidate) => candidate.id === update.id);
        if (event) Object.assign(event, update);
      });
      renderCosmicEventMarkers();
      explorer.renderTimelineScale(universe, session.timeline.viewport);
      updateTimelineZoomControl();
      session.hydration.hydratedSeed = seed;
      cachedTimelineVisualContext = null;
    },
    isCurrent: galaxyBuildIsCurrent,
    warmUniverseScaleShaders
  });
  
  function loadExplorer() {
    if (explorerLoadPromise) return explorerLoadPromise;
  
    explorerLoadPromise = import('../explorer-dependencies.js').then((dependencies) => {
      const created = createExplorer({ camera, canvas, dependencies });
      explorer = created.dependencies;
      controls = created.controls;
      return created;
    }).catch((error) => {
      explorerLoadPromise = null;
      throw error;
    });
  
    return explorerLoadPromise;
  }
  
  function prepareGalaxyPreview() {
    const seed = universe.seed;
    const version = session.hydration.buildVersion;
    if (session.hydration.preparedSeed === seed && preparedGalaxyPositions) {
      return Promise.resolve(preparedGalaxyPositions);
    }
    if (galaxyPreparationPromise) return galaxyPreparationPromise;
  
    const preparationPromise = loadExplorer()
      .then(() => {
        if (!galaxyBuildIsCurrent(seed, version) || session.mode !== 'generator') return null;
        const positions = buildGalaxyPreview();
        if (!galaxyBuildIsCurrent(seed, version)) return null;
        preparedGalaxyPositions = positions;
        session.hydration.preparedSeed = seed;
        return positions;
      });
    const trackedPromise = preparationPromise.finally(() => {
      if (galaxyPreparationPromise === trackedPromise) galaxyPreparationPromise = null;
    });
    galaxyPreparationPromise = trackedPromise;
    return galaxyPreparationPromise;
  }
  
  function scheduleGalaxyPreparation() {
    const version = session.hydration.buildVersion;
    runWhenIdle(() => {
      if (!galaxyBuildIsCurrent(universe.seed, version) || session.mode !== 'generator') return;
      prepareGalaxyPreview().catch((error) => {
        console.warn('宇宙探索器预加载失败，将在进入时重试', error);
      });
    });
  }
  
  function addBlackHoleRemnant({
    random,
    massSolar,
    birthAt,
    visibleAt = birthAt,
    originEventId = null,
    formationDuration = originEventId ? 8 : 12,
    sourceIndex = null,
    anchorSourceIndices = null,
    anchorWeights = null,
    positionOffset = null,
    isCentral = false
  }) {
    const massScale = THREE.MathUtils.clamp((Math.log10(massSolar) - .6) / 8.4, 0, 1);
    const baseScale = blackHoleBaseScale(massSolar, isCentral);
    const hole = explorer.createBlackHoleVisual({
      color: isCentral ? 0xffc996 : (random() > .35 ? 0xffb77c : 0xb9d7ff),
      tilt: explorer.randomBetween(random, -.38, .38),
      phase: random() * Math.PI * 2,
      visualScale: isCentral ? 1.14 : 1,
      intensity: 0
    });
    const hawkingGlow = new THREE.Sprite(new THREE.SpriteMaterial({
      map: explorer.makeGlowTexture(),
      color: 0x6f9fcc,
      transparent: true,
      opacity: 0,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    }));
    hawkingGlow.scale.set(1.2, 1.2, 1);
    const finalPulse = new THREE.Sprite(new THREE.SpriteMaterial({
      map: explorer.makeGlowTexture(),
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
  
    const evaporationExponent = explorer.blackHoleEvaporationExponent(
      massSolar,
      universe.blackHoleEvaporationExponent
    );
    hole.scale.setScalar(baseScale);
    hole.visible = false;
    Object.assign(hole.userData, {
      baseScale,
      birthAt,
      visibleAt,
      formationDuration,
      evaporationAt: explorer.cosmicYearsToTimelinePosition(10 ** evaporationExponent, universe),
      evaporationExponent,
      massSolar,
      sourceIndex,
      anchorSourceIndices,
      anchorWeights,
      positionOffset,
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
  
  function blackHoleBaseScale(massSolar, isCentral = false) {
    if (isCentral) return .9;
    const massScale = THREE.MathUtils.clamp((Math.log10(massSolar) - .6) / 8.4, 0, 1);
    return .3 + massScale * .34;
  }
  
  function blackHoleDisplayScaleAt(hole, timelinePosition) {
    const { baseScale, evaporationAt } = hole.userData;
    const remaining = 1 - THREE.MathUtils.smoothstep(
      timelinePosition,
      evaporationAt - 24,
      evaporationAt
    );
    return baseScale * (.18 + .82 * Math.cbrt(Math.max(0, remaining)));
  }
  
  function stellarPositionAt(sourceIndex, timelinePosition) {
    if (!Number.isInteger(sourceIndex)) return new THREE.Vector3();
    const offset = sourceIndex * 3;
    const position = new THREE.Vector3(
      originalGalaxyPositions[offset],
      originalGalaxyPositions[offset + 1],
      originalGalaxyPositions[offset + 2]
    );
    const axis = new THREE.Vector3(
      stellarGravityState.axes[offset],
      stellarGravityState.axes[offset + 1],
      stellarGravityState.axes[offset + 2]
    );
    return position.applyAxisAngle(
      axis,
      explorer.orbitalAngleAt(timelinePosition, stellarGravityState.orbitRates[sourceIndex])
    );
  }
  
  function blackHolePositionAt(hole, timelinePosition) {
    const { anchorSourceIndices, anchorWeights, isCentral, positionOffset, sourceIndex } = hole.userData;
    if (isCentral) return new THREE.Vector3();
    let position;
    if (anchorSourceIndices?.length) {
      const totalWeight = anchorWeights?.reduce((sum, weight) => sum + weight, 0)
        || anchorSourceIndices.length;
      position = anchorSourceIndices.reduce((center, anchorIndex, index) => {
        const weight = anchorWeights?.[index] ?? 1;
        return center.addScaledVector(stellarPositionAt(anchorIndex, timelinePosition), weight / totalWeight);
      }, new THREE.Vector3());
    } else if (Number.isInteger(sourceIndex)) {
      position = stellarPositionAt(sourceIndex, timelinePosition);
    } else {
      position = hole.position.clone();
    }
    if (positionOffset) position.add(new THREE.Vector3().fromArray(positionOffset));
    return position;
  }
  
  function buildUniverseObject() {
    disposeGroup(universeGroup);
    const random = createSeededRandom(universe.seed);
    const compactViewport = compactCivilizationLayout.matches;
  
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
      const brightness = (0.58 + random() * 0.78) * (compactViewport ? 1.16 : 1);
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
    const material = new THREE.PointsMaterial({
      size: compactViewport ? .105 : .075,
      map: getPointTexture(),
      alphaTest: compactViewport ? .004 : .008,
      vertexColors: true,
      transparent: true,
      opacity: compactViewport ? 1 : .96,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });
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
    session.transition = { type: 'birth', start: performance.now(), duration: prefersReducedMotion ? 1 : 1300 };
  }
  
  function buildGalaxyPreview() {
    restoreDetailGroupToScene();
    disposeGroup(galaxyGroup);
    disposeGroup(localGroupGroup);
    disposeGroup(epochEffectsGroup);
    disposeGroup(remnantGroup);
    disposeGroup(heatDeathGroup);
    disposeGroup(cosmicFateGroup);
    disposeGroup(cosmicEventGroup);
    disposeGroup(cosmicWebGroup);
    civilizationGroups = [];
    logisticsGroups = [];
    logisticsShipMarkers = [];
    logisticsRouteAssignments = [];
    civilizationData = [];
    civilizationEvents = [];
    civilizationRuntimeState = [];
    civilizationSimulation = null;
    cosmicEvents = [];
    blackHoleRemnants = [];
    primordialParticles = null;
    primordialDirections = null;
    primordialFactors = null;
    expansionStreaks = null;
    expansionDirections = null;
    bangCore = null;
    shockwaves = [];
    coldPhotons = null;
    fateBubble = null;
    fateGlow = null;
    originalPhotonPositions = null;
    originalPhotonColors = null;
    stellarRemnants = null;
    stellarPopulation = null;
    originalRemnantPositions = null;
    remnantDynamics = null;
    localGroupState.model = null;
    localGroupState.routes = [];
    localGroupState.shipMarkers = [];
    localGroupState.routeAssignments = [];
    localGroupState.galaxies = [];
    cosmicWebState.model = null;
    cosmicWebState.visual = null;
    cosmicWebState.civilizationPlan = null;
    cosmicWebState.civilizationVisual = null;
    cosmicWebState.flowTime = 0;
    cosmicWebState.lastFlowUpdateAt = 0;
    galaxyViewPose = null;
    cosmicWebState.shadersWarmed = false;
    session.timeline.eras = explorer.erasForUniverse(universe);
    cachedTimelineVisualContext = null;
    session.timeline.lastCivilizationSnapshot = null;
    session.civilization.activeSpeciesCount = 0;
    session.civilization.ascendedSpeciesCount = 0;
    session.civilization.activeRelationship = null;
    session.timeline.viewport = { start: 0, end: 1000 };
    const random = createSeededRandom(universe.seed, 91);
    const count = 17000;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    starDeathThresholds = new Float32Array(count);
    const irregularClumps = Array.from({ length: 4 + universe.seedValue % 3 }, (_, index) => ({
      x: explorer.randomBetween(random, -8, 8) + index * .35,
      y: explorer.randomBetween(random, -.6, .6),
      z: explorer.randomBetween(random, -6, 6),
      spread: explorer.randomBetween(random, 1.1, 3.1)
    }));
  
    for (let i = 0; i < count; i++) {
      let x = 0;
      let y = 0;
      let z = 0;
  
      if (universe.galaxyType === 0) {
        const selector = random();
        if (selector < .2) {
          x = explorer.gaussianRandom(random) * 3.7;
          z = explorer.gaussianRandom(random) * .42;
          y = explorer.gaussianRandom(random) * .18;
        } else if (selector < .29) {
          x = explorer.gaussianRandom(random) * 1.7;
          z = explorer.gaussianRandom(random) * 1.7;
          y = explorer.gaussianRandom(random) * .65;
        } else {
          const radius = 3 + Math.pow(random(), .72) * 11;
          const arm = i % 2;
          const angle = arm * Math.PI + (radius - 3) * .46 + explorer.gaussianRandom(random) * (.12 + radius * .012);
          const spread = explorer.gaussianRandom(random) * (.18 + radius * .025);
          x = Math.cos(angle) * radius + spread;
          z = Math.sin(angle) * radius + spread;
          y = explorer.gaussianRandom(random) * (.12 + radius * .018);
        }
      } else if (universe.galaxyType === 1) {
        const arms = 7 + universe.seedValue % 5;
        const radius = Math.pow(random(), .68) * 14;
        const arm = i % arms;
        const angle = arm / arms * Math.PI * 2 + radius * .31 + explorer.gaussianRandom(random) * (.26 + radius * .018);
        const patch = 1 + Math.sin(radius * 2.7 + arm * 1.9) * .11;
        x = Math.cos(angle) * radius * patch + explorer.gaussianRandom(random) * .25;
        z = Math.sin(angle) * radius * patch + explorer.gaussianRandom(random) * .25;
        y = explorer.gaussianRandom(random) * (.18 + radius * .028);
      } else if (universe.galaxyType === 2) {
        const selector = random();
        const angle = random() * Math.PI * 2;
        let radius;
        if (selector < .72) radius = 8.4 + explorer.gaussianRandom(random) * .78;
        else if (selector < .9) radius = Math.abs(explorer.gaussianRandom(random)) * 2.1;
        else radius = 4 + random() * 8;
        x = Math.cos(angle) * radius * 1.15 + explorer.gaussianRandom(random) * .13;
        z = Math.sin(angle) * radius + explorer.gaussianRandom(random) * .13;
        y = explorer.gaussianRandom(random) * (.18 + radius * .012);
      } else if (universe.galaxyType === 3) {
        const falloff = Math.pow(random(), .38);
        x = explorer.gaussianRandom(random) * 5.5 * falloff;
        y = explorer.gaussianRandom(random) * 2.35 * falloff;
        z = explorer.gaussianRandom(random) * 3.75 * falloff;
        const radius = Math.hypot(x, y, z);
        if (radius > 13.5) {
          const scale = 13.5 / radius;
          x *= scale; y *= scale; z *= scale;
        }
      } else {
        if (random() < .13) {
          const tail = explorer.randomBetween(random, -12, 12);
          x = tail;
          z = Math.sin(tail * .24) * 2.7 + explorer.gaussianRandom(random) * .7;
          y = explorer.gaussianRandom(random) * .55;
        } else {
          const clump = irregularClumps[Math.floor(random() * irregularClumps.length)];
          x = clump.x + explorer.gaussianRandom(random) * clump.spread;
          y = clump.y + explorer.gaussianRandom(random) * clump.spread * .38;
          z = clump.z + explorer.gaussianRandom(random) * clump.spread * .72;
        }
      }
  
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
    }
  
    originalGalaxyPositions = positions.slice();
    stellarPopulation = explorer.createStellarPopulation(universe, originalGalaxyPositions);
    colors.set(stellarPopulation.colors);
    starDeathThresholds.set(stellarPopulation.deathAt);
    originalGalaxyColors = colors.slice();
    stellarDawnModel = explorer.createStellarDawnModel(universe.seed, originalGalaxyPositions);
    stellarDawnModel.birthAt.set(stellarPopulation.birthAt);
    stellarDawnModel.birthYears = stellarPopulation.birthYears;
    stellarGravityState = explorer.createStellarGravityState(originalGalaxyPositions, universe);
  
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
      map: explorer.makeRingTexture(),
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
        map: explorer.makeRingTexture(),
        color: 0x8ddbea,
        transparent: true,
        opacity: 0,
        depthWrite: false,
        blending: THREE.AdditiveBlending
      }));
      const sourceGlow = new THREE.Sprite(new THREE.SpriteMaterial({
        map: explorer.makeGlowTexture(),
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
    const coreGlow = new THREE.Sprite(new THREE.SpriteMaterial({ map: explorer.makeGlowTexture(), color: 0xffdca4, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending }));
    coreGlow.scale.set(coreProfile.scale, coreProfile.scale, 1);
    coreGlow.userData.isCoreGlow = true;
    coreGlow.userData.profile = coreProfile;
    galaxyGroup.add(coreGlow);
  
    if (universe.activeNucleus) {
      const agnGlow = new THREE.Sprite(new THREE.SpriteMaterial({ map: explorer.makeGlowTexture(), color: 0xd9ecff, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending }));
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
    localGroupGroup.visible = false;
    epochEffectsGroup.visible = false;
    remnantGroup.visible = false;
    heatDeathGroup.visible = false;
    cosmicFateGroup.visible = false;
    cosmicEventGroup.visible = false;
    return positions;
  }
  
  function galaxyBuildIsCurrent(seed, version) {
    return universe.seed === seed && session.hydration.buildVersion === version && !pageDisposed;
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
      const vertical = explorer.randomBetween(random, -1, 1);
      const horizontal = Math.sqrt(1 - vertical * vertical);
      const volumeRadius = Math.cbrt(random());
      primordialDirections[i * 3] = Math.cos(azimuth) * horizontal * volumeRadius;
      primordialDirections[i * 3 + 1] = vertical * volumeRadius;
      primordialDirections[i * 3 + 2] = Math.sin(azimuth) * horizontal * volumeRadius;
      primordialFactors[i] = THREE.MathUtils.clamp(
        1 + explorer.gaussianRandom(random) * .035 * universe.primordialFluctuation,
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
      map: explorer.makeGlowTexture(),
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
        map: explorer.makeRingTexture(),
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
      fates: new Uint8Array(remnantCount),
      types: new Uint8Array(remnantCount)
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
      const remnantType = stellarPopulation.remnantTypes[source];
      remnantDynamics.types[i] = remnantType;
      // Most remnants stay bound. Evaporation begins one object at a time near
      // 10^19 years (about timeline position 709), not as a synchronous outflow.
      const referenceEscapeAt = fate === 1
        ? 1001
        : (fate === 3 ? 704 : fate === 2 ? 724 : 710) + haloDelay + Math.pow(random(), .68) * (fate === 3 ? 28 : 92);
      remnantDynamics.escapeAt[i] = referenceEscapeAt > 1000
        ? referenceEscapeAt
        : explorer.cosmicYearsToTimelinePosition(
            explorer.referenceFutureYearsAtTimelinePosition(referenceEscapeAt, universe),
            universe
          );
      remnantDynamics.speeds[i] = fate === 3 ? explorer.randomBetween(random, 1.7, 2.6) : explorer.randomBetween(random, .55, 1.05);
      const remnantColor = new THREE.Color(
        remnantType === 1 ? 0xc8dcff
          : remnantType === 2 ? 0x7aa7ff
            : 0x362b48
      );
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
        birthAt: explorer.cosmicYearsToTimelinePosition(firstStarsYears * 2.2, universe),
        isCentral: true
      });
    }
  
    const sampledProgenitors = explorer.selectBlackHoleProgenitors(
      starDeathThresholds,
      universe.hasCentralBlackHole ? 4 : 5,
      random,
      (sourceIndex) => stellarPopulation.remnantTypes[sourceIndex] === 3
    );
    sampledProgenitors.forEach((sourceIndex) => {
      addBlackHoleRemnant({
        random,
        massSolar: Math.max(3, stellarPopulation.massSolar[sourceIndex] * explorer.randomBetween(random, .1, .22)),
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
      map: explorer.makeGlowTexture(),
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
  
  function eventConfidenceClass(event) {
    if (event.confidence === 'science-fiction') return ' is-speculative';
    if (event.confidence === 'astrophysical-model'
      || event.confidence === 'astrobiology-model'
      || event.confidence === 'cosmology-hypothesis') {
      return ' is-hypothesis';
    }
    return '';
  }
  
  function eventKindLabel(event) {
    if (event.confidence === 'science-fiction') return '科幻假设';
    if (event.confidence === 'astrophysical-model') return '天体演化模型';
    if (event.confidence === 'astrobiology-model') return '天体生物学模型';
    if (event.confidence === 'cosmology-hypothesis') return '宇宙学候选';
    return '';
  }
  
  function timelineEventPosition(event) {
    return Number.isFinite(event.impactAt) ? event.impactAt : event.start;
  }
  
  const timelineFilterLabels = {
    all: { zh: '全部事件', en: 'All events' },
    astro: { zh: '天体事件', en: 'Astronomical events' },
    civilization: { zh: '文明事件', en: 'Civilization events' },
    speculative: { zh: '科幻假设', en: 'Speculative events' }
  };
  
  function updateTimelineFilterToggle(filter) {
    const label = timelineFilterLabels[filter];
    const timelineFilterToggle = dom.byId['timeline-filter-toggle'];
    const sourceIcon = document.querySelector(`[data-event-filter="${filter}"] .timeline-filter-icon`);
    const currentIcon = timelineFilterToggle.querySelector('.timeline-filter-icon');
    if (sourceIcon && currentIcon) currentIcon.replaceWith(sourceIcon.cloneNode(true));
    timelineFilterToggle.querySelector('[data-timeline-filter-label]').textContent = label.zh;
    timelineFilterToggle.setAttribute('aria-label', `筛选事件：${label.zh}`);
    timelineFilterToggle.title = `${label.zh} / ${label.en}`;
  }
  
  function timelineEventMatchesFilter(event, filter = session.timeline.eventFilter) {
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
    return session.timeline.viewport.end - session.timeline.viewport.start < 999.5;
  }
  
  function updateTimelineZoomControl() {
    const button = $('#timeline-zoom-reset');
    if (!button) return;
    const zoom = 1000 / (session.timeline.viewport.end - session.timeline.viewport.start);
    button.hidden = !timelineViewportIsZoomed();
    button.textContent = `${zoom.toFixed(zoom >= 10 ? 0 : 1)}× · 重置`;
    button.setAttribute(
      'aria-label',
      `时间轴已放大 ${zoom.toFixed(1)} 倍，点击恢复完整时间轴`
    );
  }
  
  function refreshTimelineViewport() {
    if (!universe || !explorer.renderTimelineScale) return;
    explorer.renderTimelineScale(universe, session.timeline.viewport);
    renderCosmicEventMarkers();
    session.timeline.eras ||= explorer.erasForUniverse(universe);
    explorer.renderTimelineHeader(
      explorer.createCosmicTimelineState(session.timeline.position, universe, session.timeline.eras),
      session.timeline.viewport
    );
    updateTimelineZoomControl();
  }
  
  function jumpToTimelineEvent(event) {
    timelineController.pause();
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
    const detailWindow = explorer.timelineDetailWindow(events);
    const firstImpact = orderedEntries[0].position;
    const lastImpact = orderedEntries.at(-1).position;
    const rangeLabel = firstImpact === lastImpact
      ? explorer.cosmicTimeLabel(firstImpact, universe)
      : `${explorer.cosmicTimeLabel(firstImpact, universe)} — ${explorer.cosmicTimeLabel(lastImpact, universe)}`;
  
    document.querySelectorAll('.event-cluster[aria-expanded="true"]').forEach((marker) => {
      marker.setAttribute('aria-expanded', 'false');
      marker.classList.remove('is-expanded');
    });
    sourceMarker.setAttribute('aria-expanded', 'true');
    sourceMarker.classList.add('is-expanded');
    panel.style.setProperty('--timeline-detail-origin', sourceMarker.style.left || '50%');
    $('#timeline-event-detail-title').textContent = `${events.length} 个事件 · ${rangeLabel}`;
    $('#timeline-event-detail-start').textContent = explorer.cosmicTimeLabel(detailWindow.start, universe);
    $('#timeline-event-detail-end').textContent = explorer.cosmicTimeLabel(detailWindow.end, universe);
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
        `${eventKind ? `${eventKind}，` : ''}${event.label}，从${explorer.cosmicTimeLabel(event.start, universe)}到${explorer.cosmicTimeLabel(eventEnd, universe)}，影响时刻${explorer.cosmicTimeLabel(position, universe)}`
      );
  
      const label = document.createElement('span');
      label.className = 'timeline-detail-event-label';
      const name = document.createElement('b');
      name.textContent = event.label;
      const time = document.createElement('small');
      time.textContent = explorer.cosmicTimeLabel(position, universe);
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
    if (!container || !explorer.clusterTimelineEvents) return;
    closeTimelineEventDetail();
    container.replaceChildren();
    const trackWidth = container.clientWidth || Math.max(1, innerWidth * .56);
    const minimumGap = compactCivilizationLayout.matches ? 18 : 14;
    const groups = explorer.clusterTimelineEvents(
      filteredTimelineEvents(),
      trackWidth,
      minimumGap,
      session.timeline.viewport
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
      marker.style.left = `${explorer.timelinePercentAt(group.position, session.timeline.viewport)}%`;
      marker.dataset.position = group.position.toFixed(3);
  
      if (group.entries.length === 1) {
        const [{ event, index, position }] = group.entries;
        const eventKind = eventKindLabel(event);
        marker.dataset.eventIndex = String(index);
        marker.className = `event-marker${eventConfidenceClass(event)}`;
        marker.style.setProperty('--event-color', event.color);
        marker.setAttribute('aria-label', `${eventKind ? `${eventKind}，` : ''}${event.label}，${explorer.cosmicTimeLabel(position, universe)}；${event.outcome}`);
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
          `${group.entries.length} 个事件，从${explorer.cosmicTimeLabel(firstPosition, universe)}到${explorer.cosmicTimeLabel(lastPosition, universe)}，点击展开详情`
        );
        marker.title = group.entries.map((entry) => entry.event.label).join(' · ');
        marker.addEventListener('click', () => {
          if (marker.getAttribute('aria-expanded') === 'true') {
            closeTimelineEventDetail();
            return;
          }
          timelineController.pause();
          renderTimelineEventDetail(group.entries, marker);
        });
      }
      container.appendChild(marker);
    });
    updateObserverMarkers();
  }
  
  function buildCivilizations() {
    explorer.resetCivilizationLegend();
    const random = createSeededRandom(universe.seed, 410);
    const speciesCount = universe.speciesCount;
    const birthRandom = createSeededRandom(universe.seed, 411);
    const earliestCivilizationYears = Math.max(
      universe.cosmicMilestones.matureGalaxiesYears * 1.6,
      1.2e9
    );
    const fateLimitedYears = Number.isFinite(universe.cosmicFate.outcomeYears)
      ? universe.cosmicFate.outcomeYears * .72
      : Infinity;
    const latestCivilizationYears = Math.max(
      earliestCivilizationYears * 1.08,
      Math.min(
        1e12,
        10 ** universe.stellarFormationEndExponent,
        universe.presentAgeYears * (3 + universe.habitability * 7),
        fateLimitedYears
      )
    );
    const earliestExponent = Math.log10(earliestCivilizationYears);
    const latestExponent = Math.log10(latestCivilizationYears);
    const speciesBirths = Array.from({ length: speciesCount }, () => {
      // Averaging independent samples produces a broad, non-uniform emergence
      // history without forcing civilizations into one evenly spaced cohort.
      const emergenceProgress = (birthRandom() + birthRandom()) / 2;
      const birthYears = 10 ** (
        earliestExponent + (latestExponent - earliestExponent) * emergenceProgress
      );
      return explorer.cosmicYearsToTimelinePosition(birthYears, universe);
    }).sort((left, right) => left - right);
    const remnantCount = originalRemnantPositions.length / 3;
    const seenHostStars = new Set();
    const remnantCandidates = Array.from({ length: remnantCount }, (_, remnantIndex) => remnantIndex)
      .filter((remnantIndex) => {
        const sourceIndex = remnantDynamics.sourceIndices[remnantIndex];
        if (seenHostStars.has(sourceIndex)) return false;
        const viable = stellarPopulation.planetCounts[sourceIndex] > 0
          && stellarPopulation.habitability[sourceIndex] > .015
          && stellarPopulation.nuclearRisk[sourceIndex] < maxCivilizationNuclearRisk
          && stellarPopulation.birthAt[sourceIndex] <= 390
          && stellarPopulation.deathAt[sourceIndex] > 520;
        if (viable) seenHostStars.add(sourceIndex);
        return viable;
      });
    let fallbackCandidates = remnantCandidates.length >= 180
      ? remnantCandidates
      : Array.from({ length: remnantCount }, (_, remnantIndex) => remnantIndex)
        .filter((remnantIndex) => {
          const sourceIndex = remnantDynamics.sourceIndices[remnantIndex];
          return stellarPopulation.birthAt[sourceIndex] <= 390
            && stellarPopulation.nuclearRisk[sourceIndex] < maxCivilizationNuclearRisk
            && stellarPopulation.deathAt[sourceIndex] > 520;
        });
    if (fallbackCandidates.length === 0) {
      const candidates = Array.from({ length: remnantCount }, (_, remnantIndex) => remnantIndex);
      const nuclearSafeCandidates = candidates.filter((remnantIndex) => {
        const sourceIndex = remnantDynamics.sourceIndices[remnantIndex];
        return stellarPopulation.nuclearRisk[sourceIndex] < maxCivilizationNuclearRisk;
      });
      if (nuclearSafeCandidates.length > 0) {
        fallbackCandidates = nuclearSafeCandidates;
      } else {
        fallbackCandidates = [candidates.reduce((safest, candidate) => {
          const safestSource = remnantDynamics.sourceIndices[safest];
          const candidateSource = remnantDynamics.sourceIndices[candidate];
          return stellarPopulation.nuclearRisk[candidateSource]
            < stellarPopulation.nuclearRisk[safestSource]
            ? candidate
            : safest;
        })];
      }
    }
    const habitatCount = Math.min(720, fallbackCandidates.length);
    const habitatRemnantIndices = new Uint16Array(habitatCount);
    const habitatStarIndices = new Uint16Array(habitatCount);
    const habitatBirthAt = new Float32Array(habitatCount);
    const habitatDeathAt = new Float32Array(habitatCount);
    const habitatPositions = new Float32Array(habitatCount * 3);
    const stride = fallbackCandidates.length / habitatCount;
    for (let node = 0; node < habitatCount; node++) {
      const candidateIndex = Math.min(
        fallbackCandidates.length - 1,
        Math.floor((node + random() * .86) * stride)
      );
      const remnantIndex = fallbackCandidates[candidateIndex];
      const starIndex = remnantDynamics.sourceIndices[remnantIndex];
      const source = remnantIndex * 3;
      const target = node * 3;
      habitatRemnantIndices[node] = remnantIndex;
      habitatStarIndices[node] = starIndex;
      habitatBirthAt[node] = stellarPopulation.birthAt[starIndex];
      habitatDeathAt[node] = stellarPopulation.deathAt[starIndex];
      habitatPositions[target] = originalRemnantPositions[source];
      habitatPositions[target + 1] = originalRemnantPositions[source + 1];
      habitatPositions[target + 2] = originalRemnantPositions[source + 2];
    }
  
    civilizationSimulation = {
      start: speciesBirths.length
        ? Math.max(340, Math.floor(speciesBirths[0] - 16))
        : 390,
      end: 1000,
      step: 1,
      habitatRemnantIndices,
      habitatStarIndices,
      habitatBirthAt,
      habitatDeathAt,
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
      logisticsGeometry.setAttribute('position', new THREE.BufferAttribute(
        new Float32Array(maxLogisticsRoutesPerSpecies * 6),
        3
      ));
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
      const shipRandom = createSeededRandom(universe.seed, 9200 + speciesIndex * 37);
      const logisticsShips = Array.from(
        { length: maxLogisticsShipsPerSpecies },
        (_, shipIndex) => {
          const ship = createTravelShip(shipRandom, speciesColor, .24);
          ship.userData.trafficPhase = (ship.userData.trafficPhase + shipIndex * .73) % 2;
          ship.userData.shipContext = 'galaxy';
          galaxyGroup.add(ship);
          return ship;
        }
      );
      logisticsShipMarkers.push(logisticsShips);
      civilizationData.push({
        name,
        color: speciesColor,
        home,
        homeNodeIndex,
        homeRemnantIndex,
        homeOffset: new THREE.Vector3(),
        hostNodeIndices: new Uint16Array(habitatCount),
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
      const speciesColor = explorer.speciesColors[speciesIndex % explorer.speciesColors.length];
      const aggression = random();
      const cooperation = random();
      const expansionRate = explorer.randomBetween(random, .72, 1.36);
      const resilience = explorer.randomBetween(random, .68, 1.32);
      const birth = speciesBirths[speciesIndex];
      const highDimensional = random() < .01;
      const ascensionAt = highDimensional
        ? explorer.cosmicYearsToTimelinePosition(
            explorer.timelinePositionToCosmicYears(birth, universe) + explorer.randomBetween(random, 2e9, 2e10),
            universe
          )
        : Infinity;
      const developmentRandom = createSeededRandom(universe.seed, 4801 + speciesIndex * 31);
      registerSpecies({
        name: explorer.speciesNames[(universe.seedValue + speciesIndex) % explorer.speciesNames.length],
        color: speciesColor,
        homeNodeIndex,
        birth,
        highDimensional,
        ascensionAt,
        aggression,
        cooperation,
        expansionRate,
        resilience,
        technology: explorer.randomBetween(developmentRandom, .18, .48),
        visibility: explorer.randomBetween(developmentRandom, .04, .18),
        cohesion: explorer.randomBetween(developmentRandom, .48, .82),
        machineAutonomy: explorer.randomBetween(developmentRandom, .08, .38)
      });
    }
  
    if (civilizationData.length === 0) {
      civilizationEvents = [];
      return;
    }
  
    const plan = explorer.createCivilizationEventPlan({ universe, civilizationData, habitatPositions });
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
    session.hydration.buildVersion += 1;
    session.hydration.preparedSeed = null;
    session.hydration.hydratedSeed = null;
    galaxyPreparationPromise = null;
    galaxyHydrationPromise = null;
    preparedGalaxyPositions = null;
    session.civilization.observerSpeciesIndex = null;
    session.civilization.selectedChronicleIndex = null;
    closeCivilizationChronicle();
    universe = nextUniverse;
    syncUniverseUrl();
    updateUniverseData(universe);
    buildUniverseObject();
    session.timeline.eras = null;
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
    scheduleGalaxyPreparation();
  }
  
  function toggleMultiverseLab(open = !$('#multiverse-lab').classList.contains('is-open')) {
    if (session.mode !== 'generator') return;
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
    if (session.mode !== 'generator') return;
    toggleMultiverseLab(false);
    installUniverse(createUniverse());
  }
  
  function setExplorerHydrationState(loading, failed = false) {
    document.body.classList.toggle('is-hydrating-explorer', loading);
    $('#toggle-time').disabled = loading;
    $('#toggle-civilizations').disabled = loading;
    $('#toggle-universe-scale').disabled = loading;
    $('#mode-label').textContent = failed
      ? '深空航行中 · 扩展数据不可用'
      : loading ? '深空航行中 · 星图同步中' : '深空航行中';
  }
  
  function finishGalaxyHydration(seed, hydrated) {
    if (!hydrated || universe.seed !== seed) return;
    galaxyHydrationPromise = null;
    if (session.mode !== 'explorer') return;
    localGroupGroup.visible = true;
    setExplorerHydrationState(false);
    updateCosmicTime(session.timeline.position, true);
    explorer.restartTimelineScaleIntro();
    session.timeline.playing = session.timeline.position === 0;
    syncTimelinePlaybackState();
    lastTimelineUpdateAt = 0;
    $('#toggle-time').textContent = session.timeline.playing ? 'Ⅱ' : '▶';
    $('#toggle-time').setAttribute('aria-label', session.timeline.playing ? '暂停时间' : '播放时间');
  }
  
  async function enterUniverse() {
    if (session.mode !== 'generator') return;
    const enterButton = $('#enter-universe');
    const enterLabel = enterButton.querySelector('span');
    if (enterButton.getAttribute('aria-busy') === 'true') return;
  
    enterButton.disabled = true;
    enterButton.setAttribute('aria-busy', 'true');
    enterLabel.textContent = '正在校准';
  
    try {
      await requestAppFullscreen();
      await prepareGalaxyPreview();
      if (session.hydration.preparedSeed !== universe.seed || !preparedGalaxyPositions) {
        throw new Error('星系预览未能完成');
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
  
    session.mode = 'explorer';
    document.body.classList.add('is-exploring');
    $('#generator-view').classList.remove('is-active');
    $('#explorer-view').classList.add('is-active');
    const alreadyHydrated = session.hydration.hydratedSeed === universe.seed;
    setExplorerHydrationState(!alreadyHydrated);
    $('#regenerate-top').style.opacity = '0';
    $('#regenerate-top').style.pointerEvents = 'none';
    $('#civilization-panel').classList.remove('is-expanded');
    $('#toggle-civilizations').setAttribute('aria-expanded', 'false');
    $('#civilization-legend').setAttribute('aria-hidden', 'true');
    galaxyGroup.visible = true;
    localGroupGroup.visible = alreadyHydrated;
    restoreDetailGroupToScene();
    detailGroup.visible = true;
    detailGroup.position.set(0, 0, 0);
    detailGroup.quaternion.identity();
    detailGroup.scale.setScalar(0.02);
    cosmicWebGroup.visible = false;
    cosmicWebGroup.position.set(0, 0, 0);
    if (cosmicWebState.visual) cosmicWebState.visual.reveal = 0;
    galaxyViewPose = null;
    session.view.universeScale = false;
    document.body.classList.remove('is-universe-scale-view');
    $('#toggle-universe-scale').setAttribute('aria-pressed', 'false');
    $('#toggle-universe-scale').textContent = '查看整个宇宙';
    setImmersiveMode(false);
    setGalaxyMenuOpen(false);
    controls.enabled = true;
    controls.target.set(0, 0, 0);
    const linkedPosition = Number(new URLSearchParams(window.location.search).get('t'));
    session.timeline.position = Number.isFinite(linkedPosition)
      ? THREE.MathUtils.clamp(linkedPosition, 0, 1000)
      : 0;
    $('#cosmic-timeline').value = session.timeline.position;
    updateCosmicTime(session.timeline.position, true);
    session.timeline.playing = alreadyHydrated && session.timeline.position === 0;
    syncTimelinePlaybackState();
    lastTimelineUpdateAt = 0;
    $('#toggle-time').textContent = session.timeline.playing ? 'Ⅱ' : '▶';
    $('#toggle-time').setAttribute('aria-label', session.timeline.playing ? '暂停时间' : '播放时间');
    session.transition = { type: 'enter', start: performance.now(), duration: prefersReducedMotion ? 1 : 2100 };
  
    if (alreadyHydrated) {
      explorer.restartTimelineScaleIntro();
      return;
    }
    if (!galaxyHydrationPromise) {
      const seed = universe.seed;
      const version = session.hydration.buildVersion;
      galaxyHydrationPromise = galaxyHydrator.hydrate(preparedGalaxyPositions, seed, version)
        .then((hydrated) => finishGalaxyHydration(seed, hydrated))
        .catch((error) => {
          galaxyHydrationPromise = null;
          if (!galaxyBuildIsCurrent(seed, version)) return;
          console.error('无法完成宇宙扩展数据加载', error);
          if (session.mode === 'explorer') setExplorerHydrationState(true, true);
        });
    }
  }
  
  function leaveUniverse() {
    if (session.mode !== 'explorer') return;
    closeTimelineEventDetail();
    setImmersiveMode(false);
    session.mode = 'generator';
    document.body.classList.remove('is-exploring');
    $('#explorer-view').classList.remove('is-active');
    $('#generator-view').classList.add('is-active');
    $('#star-inspector').classList.remove('is-open');
    session.civilization.observerSpeciesIndex = null;
    session.view.universeScale = false;
    document.body.classList.remove('is-universe-scale-view');
    setGalaxyMenuOpen(false);
    closeCivilizationChronicle();
    $('#civilization-panel').classList.remove('is-expanded');
    $('#toggle-civilizations').setAttribute('aria-expanded', 'false');
    $('#civilization-legend').setAttribute('aria-hidden', 'true');
    $('#mode-label').textContent = '创世引擎在线';
    $('#regenerate-top').style.opacity = '';
    $('#regenerate-top').style.pointerEvents = '';
    session.timeline.playing = false;
    syncTimelinePlaybackState();
    $('#toggle-time').textContent = '▶';
    $('#toggle-time').setAttribute('aria-label', '播放时间');
    controls.enabled = false;
    restoreDetailGroupToScene();
    detailGroup.position.set(0, 0, 0);
    detailGroup.quaternion.identity();
    detailGroup.scale.setScalar(1);
    epochEffectsGroup.visible = false;
    remnantGroup.visible = false;
    heatDeathGroup.visible = false;
    cosmicEventGroup.visible = false;
    localGroupGroup.visible = false;
    cosmicWebGroup.visible = false;
    scene.fog.density = .008;
    session.transition = { type: 'leave', start: performance.now(), duration: prefersReducedMotion ? 1 : 1300 };
  }
  
  function easeOutExpo(t) { return t === 1 ? 1 : 1 - Math.pow(2, -10 * t); }
  function easeInOutCubic(t) { return t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; }
  
  function isUniverseScaleTransition(candidate = session.transition) {
    return candidate?.type === 'universe-out' || candidate?.type === 'universe-in';
  }
  
  function cosmicWebAlignedPosition(target = new THREE.Vector3()) {
    if (!cosmicWebState.visual?.currentGalaxyAnchor) return target.set(0, 0, 0);
    const previousPosition = cosmicWebGroup.position.clone();
    cosmicWebGroup.position.set(0, 0, 0);
    cosmicWebGroup.updateMatrixWorld(true);
    cosmicWebState.visual.currentGalaxyAnchor.getWorldPosition(target);
    cosmicWebGroup.position.copy(previousPosition);
    cosmicWebGroup.updateMatrixWorld(true);
    return target.multiplyScalar(-1);
  }
  
  function attachDetailGroupToCurrentGalaxy() {
    const anchor = cosmicWebState.visual?.currentGalaxyAnchor;
    if (!anchor || detailGroup.parent === anchor) return;
    anchor.attach(detailGroup);
    detailGroup.position.set(0, 0, 0);
  }
  
  function restoreDetailGroupToScene() {
    if (detailGroup.parent === scene) return;
    scene.attach(detailGroup);
  }
  
  function hideScaleIncompatibleMarkers() {
    if (session.view.universeScale) {
      logisticsShipMarkers.forEach((ships) => ships.forEach((ship) => {
        ship.visible = false;
      }));
      if (keyboardStarMarker) keyboardStarMarker.visible = false;
      return;
    }
    localGroupState.shipMarkers.forEach((ships) => ships.forEach((ship) => {
      ship.visible = false;
    }));
  }
  
  function refreshScaleDependentVisualsWhenIdle(expectedUniverseScaleView) {
    runWhenIdle(() => {
      if (pageDisposed
        || session.mode !== 'explorer'
        || session.transition
        || session.view.universeScale !== expectedUniverseScaleView) return;
      updateLogisticsVisuals(session.timeline.lastCivilizationSnapshot);
      updateLocalGroupVisuals(session.timeline.lastCivilizationSnapshot);
      updateKeyboardStarMarker();
    });
  }
  
  function updateTransition(now) {
    if (!session.transition) return;
    const t = Math.min(1, (now - session.transition.start) / session.transition.duration);
    if (session.transition.type === 'birth') {
      const s = easeOutExpo(t);
      universeGroup.scale.setScalar(s);
      universeGroup.rotation.y = -0.3 + (1 - s) * 1.5;
    }
    if (session.transition.type === 'enter') {
      const e = easeInOutCubic(t);
      universeGroup.scale.setScalar(Math.max(0.001, 1 - e * 1.5));
      universeGroup.rotation.z += 0.018 * (1 - t);
      detailGroup.scale.setScalar(0.02 + easeOutExpo(t) * 0.98);
      camera.position.z = 32 - e * 12;
      camera.position.y = 0.5 + e * 4.2;
    }
    if (session.transition.type === 'leave') {
      const e = easeInOutCubic(t);
      detailGroup.scale.setScalar(1 - e * .96);
      universeGroup.scale.setScalar(e);
      camera.position.z = 20 + e * 12;
      camera.position.y = 4.7 - e * 4.2;
    }
    if (session.transition.type === 'universe-out' || session.transition.type === 'universe-in') {
      const e = easeInOutCubic(t);
      const reveal = THREE.MathUtils.lerp(session.transition.mixStart, session.transition.mixEnd, e);
      detailGroup.scale.setScalar(THREE.MathUtils.lerp(1, .018, reveal));
      camera.position.lerpVectors(session.transition.cameraStart, session.transition.cameraEnd, e);
      controls.target.lerpVectors(session.transition.targetStart, session.transition.targetEnd, e);
      camera.lookAt(controls.target);
      cosmicWebGroup.position.lerpVectors(
        session.transition.cosmicPositionStart,
        session.transition.cosmicPositionEnd,
        e
      );
      cosmicWebState.visual.reveal = reveal;
      applyCosmicWebOpacity();
      scene.fog.density = THREE.MathUtils.lerp(.008, .0024, reveal);
    }
    if (t === 1) {
      if (session.transition.type === 'enter') universeGroup.visible = false;
      if (session.transition.type === 'leave') { detailGroup.visible = false; galaxyGroup.visible = false; localGroupGroup.visible = false; universeGroup.visible = true; universeGroup.scale.setScalar(1); }
      if (session.transition.type === 'universe-in') {
        restoreDetailGroupToScene();
        cosmicWebGroup.visible = false;
        cosmicWebGroup.position.set(0, 0, 0);
        detailGroup.position.set(0, 0, 0);
        detailGroup.quaternion.copy(galaxyViewPose?.detailQuaternion || new THREE.Quaternion());
        detailGroup.scale.setScalar(1);
        scene.fog.density = .008;
        camera.far = 200;
        controls.minDistance = 8;
        controls.maxDistance = 46;
      }
      if (session.transition.type === 'universe-out') {
        cosmicWebGroup.position.set(0, 0, 0);
        camera.far = 360;
        controls.minDistance = 68;
        controls.maxDistance = 158;
      }
      if (isUniverseScaleTransition()) {
        const completedUniverseScaleView = session.transition.type === 'universe-out';
        camera.updateProjectionMatrix();
        controls.enabled = session.mode === 'explorer';
        controls.update();
        refreshScaleDependentVisualsWhenIdle(completedUniverseScaleView);
      }
      session.transition = null;
    }
  }
  
  function inspectStar(event) {
    if (session.mode !== 'explorer' || session.view.universeScale || session.transition || !clickableStars || session.timeline.position < 250) return;
    pointer.x = (event.clientX / innerWidth) * 2 - 1;
    pointer.y = -(event.clientY / innerHeight) * 2 + 1;
    raycaster.setFromCamera(pointer, camera);
    const hits = raycaster.intersectObject(clickableStars);
    const livingHit = hits.find((hit) => (
      session.timeline.position >= stellarPopulation.birthAt[hit.index]
        && session.timeline.position < starDeathThresholds[hit.index]
    ));
    if (!livingHit) return;
    showStarInspector(livingHit.index);
  }
  
  function showStarInspector(index) {
    if (!clickableStars || !stellarPopulation || index < 0 || index >= starDeathThresholds.length) return;
    const temperature = stellarPopulation.temperatureK[index];
    const type = explorer.stellarSpectralType(temperature);
    const planets = stellarPopulation.planetCounts[index];
    const life = stellarPopulation.lifeSignals[index] ? '候选信号' : '未检出';
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
    session.timeline.position += deltaSeconds * explorer.timelineUnitsPerSecond(session.timeline.position) * session.timeline.speed;
  }
  
  function syncTimelinePlaybackState() {
    document.body.classList.toggle(
      'is-time-paused',
      session.mode === 'explorer' && !session.timeline.playing
    );
  }
  
  function renderUniverseScaleStatus(timeLabel, force = false) {
    if (!session.view.universeScale || !cosmicWebState.civilizationPlan) return;
    const summary = cosmicCivilizationSummaryAt(
      cosmicWebState.civilizationPlan,
      session.timeline.position
    );
    const { state } = summary;
    const panel = $('#civilization-panel');
    panel.style.setProperty('--cosmic-opacity', '1');
    $('#civilization-species-count').textContent = `${summary.civilizations} 文明`;
    $('#civilization-domain-count').textContent = `${summary.occupiedGalaxies} 星系`;
    $('#civilization-population-count').textContent = `${summary.fleets} 艘`;
    $('#civilization-species-stat').title = '全宇宙文明数量';
    $('#civilization-domain-stat').title = '全宇宙已占据星系';
    $('#civilization-population-stat').title = '星际航行舰队数量';
    const toggle = $('#toggle-civilizations');
    toggle.setAttribute('aria-disabled', 'true');
    toggle.setAttribute(
      'aria-label',
      `整个可观测宇宙，${summary.civilizations} 个文明，${summary.occupiedGalaxies} 个已占据星系，${summary.fleets} 艘星际航行舰队`
    );
  
    let report = '全宇宙文明航行尚未出现';
    if (!state.operational && session.timeline.position >= cosmicWebState.civilizationPlan.civilizationStartAt) {
      report = `星际文明活动已终止 · ${state.failed.length} 次航行失联记录`;
    } else if (state.operational && session.timeline.position >= cosmicWebState.civilizationPlan.civilizationStartAt) {
      report = `${summary.fleets} 艘舰队航行中 · ${state.arrived.length} 条航路通航 · ${state.failed.length} 次失联`;
      if (state.latestEvent) {
        const { route, type } = state.latestEvent;
        const eventLabel = type === 'departure' ? '启航' : type === 'arrival' ? '抵达' : '失联';
        const source = `G-${String(route.sourceIndex).padStart(5, '0')}`;
        const target = `G-${String(route.targetIndex).padStart(5, '0')}`;
        report += ` · ${route.modeLabel}${eventLabel} ${source} → ${target}`;
      }
    }
    explorer.renderPersistentTimelineEvent({
      key: `universe-${summary.civilizations}-${summary.occupiedGalaxies}-${summary.fleets}-${state.latestEvent?.route.id || 'none'}-${state.latestEvent?.type || 'none'}`,
      time: timeLabel,
      text: report
    }, force);
  }
  
  function restoreGalaxyCivilizationStatus() {
    $('#civilization-species-stat').title = '种群数量';
    $('#civilization-domain-stat').title = '星域数量';
    $('#civilization-population-stat').title = '人口数量';
    $('#toggle-civilizations').removeAttribute('aria-disabled');
    if (!civilizationRuntimeState.length) return;
    explorer.renderCivilizationRows({
      position: session.timeline.position,
      simulationState: session.timeline.lastCivilizationSnapshot,
      runtimeState: civilizationRuntimeState,
      civilizationData
    });
  }
  
  
  
  function toggleCivilizations() {
    if (session.mode !== 'explorer' || session.view.universeScale) return;
    const panel = $('#civilization-panel');
    const expanded = !panel.classList.contains('is-expanded');
    panel.classList.toggle('is-expanded', expanded);
    $('#toggle-civilizations').setAttribute('aria-expanded', String(expanded));
    $('#civilization-legend').setAttribute('aria-hidden', String(!expanded));
    if (expanded && civilizationRuntimeState.length) {
      explorer.renderCivilizationRows({
        position: session.timeline.position,
        simulationState: session.timeline.lastCivilizationSnapshot,
        runtimeState: civilizationRuntimeState,
        civilizationData
      });
      explorer.organizeCivilizationLegend(session.timeline.lastCivilizationSnapshot, civilizationData);
    }
  }
  
  function openCivilizationChronicle(speciesIndex) {
    if (!civilizationData[speciesIndex]) return;
    session.civilization.selectedChronicleIndex = speciesIndex;
    $('#star-inspector').classList.remove('is-open');
    document.body.classList.add('is-chronicle-open');
    renderCivilizationChronicle({
      speciesIndex,
      civilizationData,
      runtimeState: civilizationRuntimeState,
      cosmicEvents,
      universe,
      timeLabel: explorer.cosmicTimeLabel,
      localGroup: localGroupState.model,
      observation: civilizationObservation({
        observerSpeciesIndex: session.civilization.observerSpeciesIndex,
        targetSpeciesIndex: speciesIndex,
        position: session.timeline.position,
        civilizationSimulation,
        civilizationData,
        universe
      })
    });
    const observing = session.civilization.observerSpeciesIndex === speciesIndex;
    $('#observe-civilization').classList.toggle('is-active', observing);
    $('#observe-civilization').textContent = observing ? '退出观察者模式' : '以此文明观察';
  }
  
  function setGalaxyMenuOpen(open) {
    $('#galaxy-submenu').hidden = !open;
    $('#toggle-galaxy-menu').setAttribute('aria-expanded', String(open));
  }
  
  function fullscreenElement() {
    return document.fullscreenElement || document.webkitFullscreenElement;
  }
  
  function syncFullscreenState() {
    const enabled = Boolean(fullscreenElement());
    const button = $('#toggle-fullscreen');
    button.setAttribute('aria-pressed', String(enabled));
    button.textContent = enabled ? '退出全屏' : '全屏模式';
  }
  
  async function requestAppFullscreen() {
    if (fullscreenElement()) return true;
    const root = document.documentElement;
    const request = root.requestFullscreen || root.webkitRequestFullscreen;
    if (!request) return false;
    try {
      await request.call(root);
      syncFullscreenState();
      return true;
    } catch {
      syncFullscreenState();
      return false;
    }
  }
  
  async function toggleFullscreen() {
    setGalaxyMenuOpen(false);
    const exit = document.exitFullscreen || document.webkitExitFullscreen;
    try {
      if (fullscreenElement()) {
        if (exit) await exit.call(document);
      } else if (!await requestAppFullscreen()) {
        const button = $('#toggle-fullscreen');
        button.textContent = '无法进入全屏';
        window.setTimeout(syncFullscreenState, 1600);
        return;
      }
    } catch {
      const button = $('#toggle-fullscreen');
      button.textContent = '无法进入全屏';
      window.setTimeout(syncFullscreenState, 1600);
      return;
    }
    syncFullscreenState();
  }
  
  function clearImmersiveUiTimer() {
    if (immersiveUiTimer === null) return;
    window.clearTimeout(immersiveUiTimer);
    immersiveUiTimer = null;
  }
  
  function showImmersiveUi() {
    if (!session.view.immersive) return false;
    const wasHidden = document.body.classList.contains('is-immersive-ui-hidden');
    document.body.classList.remove('is-immersive-ui-hidden');
    clearImmersiveUiTimer();
    immersiveUiTimer = window.setTimeout(() => {
      immersiveUiTimer = null;
      setGalaxyMenuOpen(false);
      document.body.classList.add('is-immersive-ui-hidden');
    }, immersiveUiDelayMs);
    return wasHidden;
  }
  
  function setImmersiveMode(enabled) {
    session.view.immersive = Boolean(enabled && session.mode === 'explorer');
    document.body.classList.toggle('is-immersive-mode', session.view.immersive);
    document.body.classList.remove('is-immersive-ui-hidden');
    const button = $('#toggle-immersive');
    button.setAttribute('aria-pressed', String(session.view.immersive));
    button.textContent = session.view.immersive ? '退出沉浸模式' : '沉浸式模式';
    clearImmersiveUiTimer();
    setGalaxyMenuOpen(false);
    if (session.view.immersive) showImmersiveUi();
  }
  
  function toggleUniverseScaleView() {
    if (session.mode !== 'explorer'
      || !cosmicWebState.visual
      || (session.transition && !isUniverseScaleTransition())) return;
    session.view.universeScale = !session.view.universeScale;
    document.body.classList.toggle('is-universe-scale-view', session.view.universeScale);
    if (session.view.universeScale) {
      $('#civilization-panel').classList.remove('is-expanded');
      $('#toggle-civilizations').setAttribute('aria-expanded', 'false');
      $('#civilization-legend').setAttribute('aria-hidden', 'true');
    } else {
      restoreGalaxyCivilizationStatus();
    }
    $('#toggle-universe-scale').setAttribute('aria-pressed', String(session.view.universeScale));
    $('#toggle-universe-scale').textContent = session.view.universeScale ? '返回当前星系' : '查看整个宇宙';
    setGalaxyMenuOpen(false);
    const mixStart = THREE.MathUtils.clamp(cosmicWebState.visual.reveal, 0, 1);
    const mixEnd = session.view.universeScale ? 1 : 0;
    const cameraStart = camera.position.clone();
    const targetStart = controls.target.clone();
    if (session.view.universeScale && mixStart <= .001) {
      galaxyViewPose = {
        camera: cameraStart.clone(),
        target: targetStart.clone(),
        detailQuaternion: detailGroup.quaternion.clone()
      };
    }
    galaxyViewPose ||= {
      camera: new THREE.Vector3(0, 5.6, 23.3),
      target: new THREE.Vector3(),
      detailQuaternion: detailGroup.quaternion.clone()
    };
    updateCosmicWebMotion(performance.now(), true, false);
    const alignedCosmicPosition = cosmicWebAlignedPosition();
    if (session.view.universeScale && mixStart <= .001) {
      cosmicWebGroup.position.copy(alignedCosmicPosition);
      cosmicWebGroup.updateMatrixWorld(true);
      attachDetailGroupToCurrentGalaxy();
    }
    cosmicWebGroup.visible = true;
    controls.enabled = false;
    const baseDuration = session.view.universeScale ? 1600 : 1400;
    session.transition = {
      type: session.view.universeScale ? 'universe-out' : 'universe-in',
      start: performance.now(),
      duration: prefersReducedMotion
        ? 1
        : Math.max(260, baseDuration * Math.abs(mixEnd - mixStart)),
      mixStart,
      mixEnd,
      cameraStart,
      cameraEnd: session.view.universeScale
        ? new THREE.Vector3(0, 24, 112)
        : galaxyViewPose.camera.clone(),
      targetStart,
      targetEnd: session.view.universeScale
        ? new THREE.Vector3()
        : galaxyViewPose.target.clone(),
      cosmicPositionStart: cosmicWebGroup.position.clone(),
      cosmicPositionEnd: session.view.universeScale
        ? new THREE.Vector3()
        : alignedCosmicPosition
    };
    camera.far = 360;
    camera.updateProjectionMatrix();
    hideScaleIncompatibleMarkers();
    updateCosmicTime(session.timeline.position, true);
  }
  
  function closeCivilizationChronicle() {
    session.civilization.selectedChronicleIndex = null;
    document.body.classList.remove('is-chronicle-open');
    $('#civilization-chronicle').classList.remove('is-open');
  }
  
  function observerDelayForEvent(event) {
    if (session.civilization.observerSpeciesIndex === null || event.targetSpeciesIndex === null) return 0;
    if (event.targetSpeciesIndex === session.civilization.observerSpeciesIndex) return 0;
    const observerNode = civilizationData[session.civilization.observerSpeciesIndex]?.homeNodeIndex;
    const eventNode = event.targetNodeIndex;
    if (observerNode === undefined || eventNode === undefined) return 0;
    const positions = civilizationSimulation.habitatPositions;
    const observerOffset = observerNode * 3;
    const eventOffset = eventNode * 3;
    const state = session.timeline.lastCivilizationSnapshot;
    const driftOffsetForNode = (nodeIndex) => {
      const speciesIndex = civilizationData.findIndex((species) => species.homeNodeIndex === nodeIndex);
      if (speciesIndex < 0) return [0, 0, 0];
      const parsecs = state?.stellarDriftParsecs?.[speciesIndex] || 0;
      const directionOffset = speciesIndex * 3;
      const sceneDistance = Math.min(.5, parsecs / 320);
      return [
        (state?.stellarDriftDirections?.[directionOffset] || 0) * sceneDistance,
        (state?.stellarDriftDirections?.[directionOffset + 1] || 0) * sceneDistance,
        (state?.stellarDriftDirections?.[directionOffset + 2] || 0) * sceneDistance
      ];
    };
    const observerDrift = driftOffsetForNode(observerNode);
    const eventDrift = driftOffsetForNode(eventNode);
    const distance = Math.hypot(
      positions[observerOffset] + observerDrift[0] - positions[eventOffset] - eventDrift[0],
      positions[observerOffset + 1] + observerDrift[1] - positions[eventOffset + 1] - eventDrift[1],
      positions[observerOffset + 2] + observerDrift[2] - positions[eventOffset + 2] - eventDrift[2]
    );
    return lightTravelYearsForSceneDistance(distance, universe);
  }
  
  function observerCanSeeEvent(event, position = session.timeline.position) {
    return session.civilization.observerSpeciesIndex === null || explorer.timelinePositionToCosmicYears(position, universe)
      >= explorer.timelinePositionToCosmicYears(event.impactAt, universe) + observerDelayForEvent(event);
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
      const uncertain = session.civilization.observerSpeciesIndex !== null && !beyondLightcone && maximumDelay > 1e4;
      marker.classList.toggle('is-beyond-lightcone', beyondLightcone);
      marker.classList.toggle('is-partially-observed', partial);
      marker.classList.toggle('is-uncertain-observation', uncertain);
      marker.style.setProperty(
        '--observation-confidence',
        String(THREE.MathUtils.clamp(1 - maximumDelay / 5e5, .22, 1))
      );
    });
  }
  
  function toggleObserverMode() {
    if (session.civilization.selectedChronicleIndex === null) return;
    session.civilization.observerSpeciesIndex = session.civilization.observerSpeciesIndex === session.civilization.selectedChronicleIndex ? null : session.civilization.selectedChronicleIndex;
    $('#mode-label').textContent = session.civilization.observerSpeciesIndex === null
      ? '宇宙观测模式'
      : `${civilizationData[session.civilization.observerSpeciesIndex].name} · 有限光锥`;
    openCivilizationChronicle(session.civilization.selectedChronicleIndex);
    updateObserverMarkers();
    updateCosmicTime(session.timeline.position, true);
  }
  
  
  
  
  
  
  
  function timelineVisualContext() {
    if (!cachedTimelineVisualContext) {
      cachedTimelineVisualContext = {
        mode: session.mode,
        epochEffectsGroup, primordialParticles, primordialFactors, primordialDirections,
        expansionStreaks, expansionDirections, bangCore, shockwaves, renderer, scene,
        clickableStars, originalGalaxyPositions, stellarGravityState, universe,
        transition: session.transition,
        galaxyGroup,
        starDeathThresholds, originalGalaxyColors, stellarDawnModel, dawnGas, dawnSites,
        cosmicEvents, remnantGroup,
        stellarRemnants, originalRemnantPositions, remnantDynamics, blackHoleRemnants,
        heatDeathGroup, coldPhotons, originalPhotonPositions, originalPhotonColors,
        cosmicFateGroup, fateBubble, fateGlow, cosmicEventGroup
      };
    }
    cachedTimelineVisualContext.mode = session.mode;
    cachedTimelineVisualContext.transition = session.transition;
    return cachedTimelineVisualContext;
  }
  
  function applyCivilizationVisuals(runtimeState) {
    const fateFade = universe.cosmicFate.type === 'heat-death'
      ? 0
      : THREE.MathUtils.smoothstep(session.timeline.position, universe.cosmicFate.onsetAt, 995);
    runtimeState.forEach((state, index) => {
      const group = civilizationGroups[index];
      const species = civilizationData[index];
      group.visible = state.alive && state.count > 0;
      let observerOpacity = 1;
      if (session.civilization.observerSpeciesIndex !== null && index !== session.civilization.observerSpeciesIndex) {
        const observerState = runtimeState[session.civilization.observerSpeciesIndex];
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
    const activeRouteTraffic = [];
    logisticsGroups.forEach((network, speciesIndex) => {
      const species = civilizationData[speciesIndex];
      const civilization = civilizationGroups[speciesIndex];
      const ships = logisticsShipMarkers[speciesIndex] || [];
      const routeColonies = [];
      for (let colonyIndex = 0; colonyIndex < (species?.displayCount || 0); colonyIndex++) {
        const nodeIndex = species.hostNodeIndices[colonyIndex];
        if (nodeIndex === species.homeNodeIndex) continue;
        routeColonies.push({ colonyIndex, nodeIndex });
        if (routeColonies.length >= maxLogisticsRoutesPerSpecies) break;
      }
      const count = routeColonies.length;
      const linePositions = network.geometry.attributes.position.array;
      const colonyPositions = civilization.geometry.attributes.position.array;
      const routesExist = Boolean(simulationState?.active?.[speciesIndex] && count > 0);
      network.visible = showCivilizationLogistics && routesExist;
      if (!routesExist) {
        ships.forEach((ship) => {
          if (ship.userData.trafficActive) {
            beginShipDisappearance(ship, ship.userData.defaultDisappearance);
          }
          ship.userData.trafficActive = false;
          if (!ship.userData.disappearance) ship.visible = false;
        });
        network.geometry.setDrawRange(0, 0);
        return;
      }
      ships.forEach((ship) => {
        if (!ship.userData.disappearance) ship.visible = false;
      });
  
      for (let lineIndex = 0; lineIndex < count; lineIndex++) {
        const { colonyIndex } = routeColonies[lineIndex];
        const target = lineIndex * 6;
        linePositions[target] = species.home.x;
        linePositions[target + 1] = species.home.y;
        linePositions[target + 2] = species.home.z;
        linePositions[target + 3] = colonyPositions[colonyIndex * 3];
        linePositions[target + 4] = colonyPositions[colonyIndex * 3 + 1];
        linePositions[target + 5] = colonyPositions[colonyIndex * 3 + 2];
      }
      network.geometry.setDrawRange(0, count * 2);
      network.geometry.attributes.position.needsUpdate = true;
      const throughput = simulationState.logisticsThroughput?.[speciesIndex] || 0;
      network.material.opacity = .018 + throughput * .11;
      network.material.color.setHex(species.color);
      for (let routeIndex = 0; routeIndex < count; routeIndex++) {
        const { colonyIndex, nodeIndex } = routeColonies[routeIndex];
        activeRouteTraffic.push({
          key: `${speciesIndex}:${nodeIndex}`,
          speciesIndex,
          colonyIndex,
          trafficPhase: (
            (speciesIndex + 1) * .754877666
              + (nodeIndex + 1) * .569840291
          ) % 2,
          trafficSpeed: routeTrafficSpeedForIdentity(speciesIndex, nodeIndex)
        });
      }
    });
  
    logisticsRouteAssignments = stableRouteAssignments(
      activeRouteTraffic.map((traffic) => traffic.key),
      logisticsRouteAssignments,
      routesPerVisibleShip
    );
    const routeTrafficByKey = new Map(activeRouteTraffic.map((traffic) => [
      traffic.key,
      traffic
    ]));
    const usedShipsBySpecies = new Uint8Array(civilizationData.length);
    const navigationObstacles = activeBlackHoleNavigationObstacles();
    logisticsRouteAssignments.forEach((routeKey) => {
      const traffic = routeTrafficByKey.get(routeKey);
      if (!traffic) return;
      const speciesShipIndex = usedShipsBySpecies[traffic.speciesIndex]++;
      const ship = logisticsShipMarkers[traffic.speciesIndex]?.[speciesShipIndex];
      if (!ship) return;
      ship.userData.routeStart ||= new THREE.Vector3();
      ship.userData.routeEnd ||= new THREE.Vector3();
      ship.userData.routeKey = routeKey;
      ship.userData.speciesIndex = traffic.speciesIndex;
      ship.userData.colonyIndex = traffic.colonyIndex;
      ship.userData.trafficPhase = traffic.trafficPhase;
      ship.userData.trafficSpeed = traffic.trafficSpeed;
      ship.userData.isLost = false;
      if (!ship.userData.trafficActive || ship.userData.disappearanceComplete) {
        resetShipDisappearance(ship);
      }
      ship.userData.trafficActive = true;
      ship.visible = session.view.shipHighlight && session.mode === 'explorer' && !session.view.universeScale;
      ship.userData.navigationObstacles = navigationObstacles;
      updateLogisticsShipNavigationPath(ship);
      updateIntergalacticShipAppearance(ship);
    });
  }
  
  function updateKeyboardStarMarker() {
    if (!keyboardStarMarker || session.view.keyboardStarIndex < 0 || !clickableStars) return;
    if (session.timeline.position < stellarPopulation.birthAt[session.view.keyboardStarIndex]
      || session.timeline.position >= starDeathThresholds[session.view.keyboardStarIndex]) {
      keyboardStarMarker.visible = false;
      return;
    }
    const positions = clickableStars.geometry.attributes.position.array;
    keyboardStarMarker.position.fromArray(positions, session.view.keyboardStarIndex * 3);
    keyboardStarMarker.visible = session.mode === 'explorer' && !session.view.universeScale && session.timeline.position >= 250;
  }
  
  function updateIntergalacticShipNavigationPath(ship) {
    const targetGalaxy = ship.userData.targetGalaxy;
    if (!ship.visible || !targetGalaxy) return;
    shipRouteDirection.copy(targetGalaxy.galaxy.position).normalize();
    shipRouteStart.copy(shipRouteDirection).multiplyScalar(.8);
    shipRouteEnd.copy(targetGalaxy.galaxy.position).addScaledVector(
      shipRouteDirection,
      -Math.max(.7, ship.userData.targetRadius * 1.08)
    );
    assignShipNavigationPath(
      ship,
      shipRouteStart,
      shipRouteEnd,
      intergalacticNavigationObstacles(targetGalaxy),
      .8
    );
    updateIntergalacticShipPosition(ship);
  }
  
  function updateIntergalacticShipPosition(ship) {
    if (!ship.visible || !ship.userData.routeCurve) return;
    let progress = fleetProgress(
      session.timeline.position,
      ship.userData.fleetDepartureAt,
      ship.userData.fleetArrivalAt
    );
    let direction = 1;
    if (!ship.userData.isInitialFlight) {
      const traffic = shuttleTrafficAt(
        session.timeline.position,
        ship.userData.trafficPhase,
        ship.userData.trafficSpeed
      );
      progress = traffic.progress;
      direction = traffic.direction;
    }
    positionShipOnNavigationPath(ship, progress, direction);
  }
  
  function updateLogisticsShipNavigationPath(ship) {
    if (!ship.visible) return;
    const species = civilizationData[ship.userData.speciesIndex];
    const colonyPositions = civilizationGroups[
      ship.userData.speciesIndex
    ]?.geometry.attributes.position.array;
    if (!species || !colonyPositions) return;
    ship.userData.routeStart.copy(species.home);
    ship.userData.routeEnd.fromArray(colonyPositions, ship.userData.colonyIndex * 3);
    assignShipNavigationPath(
      ship,
      ship.userData.routeStart,
      ship.userData.routeEnd,
      ship.userData.navigationObstacles || [],
      .42
    );
    updateRouteTrafficShipPosition(ship);
  }
  
  function updateVisibleShipsForFrame(now) {
    if (session.view.shipHighlight && !session.view.universeScale) {
      explorer.syncCivilizationHosts({
        clickableStars,
        stellarRemnants,
        remnantDynamics,
        cosmicPosition: session.timeline.position,
        simulationState: session.timeline.lastCivilizationSnapshot,
        civilizationData,
        civilizationGroups
      });
    }
    localGroupState.shipMarkers.forEach((ships) => ships.forEach((ship) => {
      if (updateShipDisappearance(ship, now)) return;
      if (!ship.visible) return;
      updateIntergalacticShipPosition(ship);
      updateIntergalacticShipAppearance(ship);
    }));
    logisticsShipMarkers.forEach((ships) => ships.forEach((ship) => {
      if (updateShipDisappearance(ship, now)) return;
      if (!ship.visible) return;
      updateLogisticsShipNavigationPath(ship);
      updateIntergalacticShipAppearance(ship);
    }));
  }
  
  function updateRouteTrafficShipPosition(ship) {
    if (!ship.visible || !ship.userData.routeCurve) return;
    const traffic = shuttleTrafficAt(
      session.timeline.position,
      ship.userData.trafficPhase,
      ship.userData.trafficSpeed
    );
    positionShipOnNavigationPath(ship, traffic.progress, traffic.direction);
  }
  
  function updateIntergalacticShipAppearance(ship) {
    const targetMix = session.view.shipHighlight ? 1 : 0;
    const highlightMix = targetMix;
    const lost = ship.userData.isLost;
    const elapsed = session.timeline.position * .1;
    const enginePulse = prefersReducedMotion
      ? 1
      : .82 + Math.sin(elapsed * 4.2 + ship.userData.pulsePhase) * .18;
    const locatorPulse = prefersReducedMotion
      ? 1
      : .88 + Math.sin(elapsed * 2.8 + ship.userData.pulsePhase) * .12;
  
    ship.userData.highlightMix = highlightMix;
    ship.scale.setScalar(
      (ship.userData.baseScale || 1)
        * THREE.MathUtils.lerp(1, 2.25, ship.userData.highlightMix)
    );
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
  
  function updateCosmicTime(value, force = false) {
    session.timeline.eras ||= explorer.erasForUniverse(universe);
    const timelineState = explorer.createCosmicTimelineState(value, universe, session.timeline.eras);
    session.timeline.position = timelineState.position;
    explorer.renderTimelineHeader(timelineState, session.timeline.viewport);
  
    if (!clickableStars || session.hydration.hydratedSeed !== universe.seed) return;
  
    explorer.updateEpochVisuals(session.timeline.position, timelineVisualContext());
    const simulationState = explorer.civilizationSnapshotAt(civilizationSimulation, session.timeline.position);
    const civilizationSnapshotChanged = force || simulationState !== session.timeline.lastCivilizationSnapshot;
    if (civilizationSnapshotChanged) {
      session.timeline.lastCivilizationSnapshot = simulationState;
      explorer.applyCivilizationSnapshot(simulationState, {
        civilizationSimulation,
        civilizationData,
        civilizationGroups
      });
      civilizationRuntimeState = explorer.deriveCivilizationRuntime(
        session.timeline.position,
        simulationState,
        civilizationData,
        cosmicEvents
      );
      explorer.renderCivilizationRows({
        position: session.timeline.position,
        simulationState,
        runtimeState: civilizationRuntimeState,
        civilizationData
      });
      const civilizationPanelCollapsed = !$('#civilization-panel').classList.contains('is-expanded');
      if (!civilizationPanelCollapsed) explorer.organizeCivilizationLegend(simulationState, civilizationData);
      session.civilization.activeSpeciesCount = civilizationRuntimeState.filter((state) => state.alive).length;
      session.civilization.ascendedSpeciesCount = civilizationRuntimeState.filter((state) => state.ascended).length;
      session.civilization.activeRelationship = explorer.findDominantRelationship(
        simulationState,
        civilizationRuntimeState,
        civilizationData.length
      );
      if (session.civilization.selectedChronicleIndex !== null) openCivilizationChronicle(session.civilization.selectedChronicleIndex);
      if (session.civilization.observerSpeciesIndex !== null) updateObserverMarkers();
    }
    updateCosmicWebVisuals(session.timeline.position);
    explorer.syncCivilizationHosts({
      clickableStars,
      stellarRemnants,
      remnantDynamics,
      cosmicPosition: session.timeline.position,
      simulationState,
      civilizationData,
      civilizationGroups
    });
  
    applyCivilizationVisuals(civilizationRuntimeState);
    updateLogisticsVisuals(simulationState);
    updateKeyboardStarMarker();
    updateLocalGroupVisuals(simulationState);
    const activeEvent = explorer.updateCosmicEvents(session.timeline.position, timelineVisualContext());
    const observedEvent = activeEvent && observerCanSeeEvent(activeEvent) ? activeEvent : null;
    if (activeEvent && !observedEvent) activeEvent.group.visible = false;
    const narrative = explorer.selectTimelineNarrative({
      position: session.timeline.position,
      label: timelineState.label,
      universe,
      activeEvent: observedEvent,
      activeRelationship: session.civilization.activeRelationship,
      ascendedSpecies: session.civilization.ascendedSpeciesCount,
      activeSpecies: session.civilization.activeSpeciesCount,
      civilizationData
    });
    if (session.civilization.observerSpeciesIndex !== null && observedEvent && observedEvent.targetSpeciesIndex !== session.civilization.observerSpeciesIndex) {
      const confidence = Math.round(THREE.MathUtils.clamp(
        1 - observerDelayForEvent(observedEvent) / 5e5,
        .22,
        1
      ) * 100);
      narrative.text = `延迟观测 · 置信度 ${confidence}% · ${narrative.text}`;
    }
    if (session.view.universeScale) {
      renderUniverseScaleStatus(timelineState.label, force);
    } else {
      explorer.renderTimelineEvent(narrative, force);
    }
  }
  
  function selectKeyboardStar(direction) {
    if (session.mode !== 'explorer' || session.view.universeScale || !clickableStars || session.timeline.position < 250) return;
    const count = starDeathThresholds.length;
    let candidate = session.view.keyboardStarIndex < 0
      ? (direction < 0 ? count : -1)
      : session.view.keyboardStarIndex;
    for (let attempt = 0; attempt < count; attempt++) {
      candidate = (candidate + direction + count) % count;
      if (session.timeline.position >= stellarPopulation.birthAt[candidate]
        && session.timeline.position < starDeathThresholds[candidate]) break;
    }
    session.view.keyboardStarIndex = candidate;
    updateKeyboardStarMarker();
    $('#star-navigation-status').textContent = `恒星 RU-${String(candidate).padStart(5, '0')} 已获得键盘焦点，按回车查看详情。`;
  }
  
  function animate(now) {
    const delta = Math.min(0.05, (now - lastFrame) / 1000);
    lastFrame = now;
    updateTransition(now);
    smoothedPointer.lerp(pointer, 0.04);
  
    if (session.mode === 'generator' && universeGroup.visible && !prefersReducedMotion) {
      universeGroup.rotation.y += 0.00045;
      universeGroup.rotation.x = 0.15 + smoothedPointer.y * 0.045;
      universeGroup.position.x = smoothedPointer.x * 0.42;
      universeGroup.position.y = smoothedPointer.y * 0.25;
    }
    if (session.mode === 'explorer') {
      const timelineAdvancing = session.timeline.playing && !session.transition;
      const simulationMotionActive = !session.view.universeScale || timelineAdvancing;
      if (timelineAdvancing) {
        pulsarAnimationTimeMs += delta * 1000;
        advanceCosmicTime(delta);
        let reachedTimelineEnd = false;
        if (session.timeline.position >= 1000) {
          session.timeline.position = 1000;
          session.timeline.playing = false;
          syncTimelinePlaybackState();
          reachedTimelineEnd = true;
          $('#toggle-time').textContent = '▶';
          $('#toggle-time').setAttribute('aria-label', '播放时间');
        }
        if (reachedTimelineEnd || now - lastTimelineUpdateAt >= timelineUpdateIntervalMs) {
          lastTimelineUpdateAt = now;
          updateCosmicTime(session.timeline.position);
        }
      }
      if (simulationMotionActive) updateVisibleShipsForFrame(now);
      if (!isUniverseScaleTransition()) controls.update();
      epochEffectsGroup.position.set(0, 0, 0);
      if (heatDeathGroup.visible && !prefersReducedMotion && simulationMotionActive) {
        coldPhotons.rotation.y += .000035;
        coldPhotons.rotation.x += .000009;
      }
      if (cosmicFateGroup.visible && !prefersReducedMotion && simulationMotionActive) {
        fateBubble.rotation.y += .0014;
        fateBubble.rotation.x -= .0007;
        fateGlow.material.rotation = now * .00008;
      }
      if (!prefersReducedMotion && simulationMotionActive) {
        blackHoleRemnants.forEach((hole, index) => {
          if (!hole.visible) return;
          explorer.animateBlackHoleVisual(hole, now, hole.userData.spinDirection || (index % 2 ? -1 : 1));
          hole.userData.hawkingGlow.material.rotation = now * (.000025 + index * .000001);
        });
      }
      explorer.animateCosmicEvents(now, {
        cosmicEventGroup,
        prefersReducedMotion,
        cosmicEvents,
        camera,
        pulsarAnimationTimeMs,
        timelineAdvancing
      });
      if (!controls.enabled && !isUniverseScaleTransition() && simulationMotionActive) {
        galaxyGroup.rotation.y += 0.0003;
      }
      animateLocalGroupGalaxies(now, timelineAdvancing);
      if (session.view.universeScale
        && cosmicWebGroup.visible
        && !isUniverseScaleTransition()
        && !prefersReducedMotion) {
        updateCosmicWebMotion(now, false, timelineAdvancing);
      }
      if (session.view.universeScale
        && cosmicWebGroup.visible
        && !isUniverseScaleTransition()
        && !prefersReducedMotion
        && timelineAdvancing) {
        cosmicWebGroup.rotation.y += .000055;
        const locatorPulse = 3.2 + Math.sin(now * .0016) * .28;
        cosmicWebState.visual?.locator.scale.setScalar(locatorPulse);
        cosmicWebState.civilizationVisual?.travelPulses.forEach((pulse, index) => {
          if (!pulse.visible) return;
          const breath = 1 + Math.sin(now * .004 + index * .7) * .07;
          pulse.scale.setScalar((pulse.userData.baseScale || 1) * breath);
          pulse.material.rotation = now * .00018 * (index % 2 ? -1 : 1);
        });
      }
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
  
  const frameLoop = createFrameLoop(animate);
  
  function startAnimation() {
    if (pageDisposed) return;
    lastFrame = performance.now();
    frameLoop.start();
  }
  
  function stopAnimation() {
    frameLoop.stop();
  }
  
  function disposePageResources() {
    if (pageDisposed) return;
    pageDisposed = true;
    frameLoop.dispose();
    timelineController.dispose();
    if (timelineMarkerResizeFrame !== null) {
      cancelAnimationFrame(timelineMarkerResizeFrame);
      timelineMarkerResizeFrame = null;
    }
    controls?.dispose();
    clearImmersiveUiTimer();
    restoreDetailGroupToScene();
    [
      universeGroup,
      galaxyGroup,
      localGroupGroup,
      cosmicWebGroup,
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
    showImmersiveUi();
  });
  
  document.addEventListener('pointerdown', () => {
    if (!session.view.immersive) return;
    suppressImmersiveCanvasClick = showImmersiveUi();
  }, { capture: true });
  
  document.addEventListener('pointerup', () => {
    if (!suppressImmersiveCanvasClick) return;
    window.setTimeout(() => { suppressImmersiveCanvasClick = false; }, 0);
  }, { capture: true });
  
  document.addEventListener('pointercancel', () => {
    suppressImmersiveCanvasClick = false;
  }, { capture: true });
  
  window.addEventListener('resize', () => {
    camera.aspect = innerWidth / innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(innerWidth, innerHeight);
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
    cancelAnimationFrame(timelineMarkerResizeFrame);
    timelineMarkerResizeFrame = requestAnimationFrame(() => {
      if (session.mode === 'explorer' && cosmicEvents.length > 0) refreshTimelineViewport();
    });
  });
  
  canvas.addEventListener('click', (event) => {
    if (suppressImmersiveCanvasClick) {
      suppressImmersiveCanvasClick = false;
      return;
    }
    inspectStar(event);
  });
  canvas.addEventListener('keydown', (event) => {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End', 'Enter', ' '].includes(event.key)) return;
    if (session.mode !== 'explorer') return;
    event.preventDefault();
    event.stopPropagation();
    if (event.key === 'ArrowLeft') selectKeyboardStar(-1);
    if (event.key === 'ArrowRight') selectKeyboardStar(1);
    if (event.key === 'Home') { session.view.keyboardStarIndex = -1; selectKeyboardStar(1); }
    if (event.key === 'End') { session.view.keyboardStarIndex = 0; selectKeyboardStar(-1); }
    if ((event.key === 'Enter' || event.key === ' ') && session.view.keyboardStarIndex >= 0) showStarInspector(session.view.keyboardStarIndex);
  });
  $('#regenerate-top').addEventListener('click', regenerate);
  $('#enter-universe').addEventListener('click', enterUniverse);
  $('#compare-universes').addEventListener('click', () => toggleMultiverseLab());
  $('#close-multiverse').addEventListener('click', () => toggleMultiverseLab(false));
  $('#multiverse-list').addEventListener('click', (event) => {
    const candidate = event.target.closest('[data-seed]');
    if (!candidate || session.mode !== 'generator') return;
    toggleMultiverseLab(false);
    installUniverse(createUniverse(candidate.dataset.seed));
  });
  $('#close-inspector').addEventListener('click', () => $('#star-inspector').classList.remove('is-open'));
  $('#close-chronicle').addEventListener('click', closeCivilizationChronicle);
  $('#toggle-universe-scale').addEventListener('click', toggleUniverseScaleView);
  $('#universe-scale-back').addEventListener('click', toggleUniverseScaleView);
  $('#toggle-fullscreen').addEventListener('click', toggleFullscreen);
  $('#toggle-immersive').addEventListener('click', () => setImmersiveMode(!session.view.immersive));
  document.addEventListener('fullscreenchange', syncFullscreenState);
  document.addEventListener('webkitfullscreenchange', syncFullscreenState);
  $('#toggle-ship-highlight').addEventListener('click', (event) => {
    session.view.shipHighlight = !session.view.shipHighlight;
    event.currentTarget.classList.toggle('is-active', session.view.shipHighlight);
    event.currentTarget.setAttribute('aria-pressed', String(session.view.shipHighlight));
    updateLogisticsVisuals(session.timeline.lastCivilizationSnapshot);
    updateLocalGroupVisuals(session.timeline.lastCivilizationSnapshot);
    if (!session.view.shipHighlight) return;
    forEachShipMarker((ship) => {
      if (ship.visible) updateIntergalacticShipAppearance(ship);
    });
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
    bookmarks.unshift({ seed: universe.seed, position: Number(session.timeline.position.toFixed(3)), savedAt: new Date().toISOString() });
    localStorage.setItem(key, JSON.stringify(bookmarks.slice(0, 20)));
    $('#chronicle-status').textContent = '当前宇宙时刻已保存在本机';
  });
  $('#copy-universe-link').addEventListener('click', async () => {
    const url = new URL(window.location.href);
    url.searchParams.set('seed', universe.seed);
    url.searchParams.set('t', session.timeline.position.toFixed(3));
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
      localGroup: localGroupState.model,
      cosmicCivilizations: cosmicWebState.civilizationPlan
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
  $('#toggle-galaxy-menu').addEventListener('click', () => {
    setGalaxyMenuOpen($('#galaxy-submenu').hidden);
  });
  const timelineController = createTimelineController({
    compactLayout: compactCivilizationLayout,
    dom,
    getDependencies: () => explorer,
    getEvents: () => cosmicEvents,
    getUniverse: () => universe,
    onCloseDetail: closeTimelineEventDetail,
    onFilterChange: renderCosmicEventMarkers,
    onPlaybackChange: syncTimelinePlaybackState,
    onPlayStart: () => { lastTimelineUpdateAt = 0; },
    onPositionChange: updateCosmicTime,
    onViewportChange: refreshTimelineViewport,
    session,
    updateFilterToggle: updateTimelineFilterToggle
  });
  
  document.addEventListener('pointerdown', (event) => {
    if (!$('#galaxy-submenu').hidden && !event.target.closest('.galaxy-menu')) {
      setGalaxyMenuOpen(false);
    }
  });
  document.addEventListener('keydown', (event) => {
    if (session.view.immersive) showImmersiveUi();
    if (event.key.toLowerCase() === 'r' && session.mode === 'generator') regenerate();
    if (event.key === 'Escape' && session.mode === 'generator' && $('#multiverse-lab').classList.contains('is-open')) {
      toggleMultiverseLab(false);
      return;
    }
    if (event.key === 'Escape' && session.mode === 'explorer') {
      if (!$('#galaxy-submenu').hidden) {
        setGalaxyMenuOpen(false);
        $('#toggle-galaxy-menu').focus({ preventScroll: true });
        return;
      }
      if (session.view.immersive) {
        setImmersiveMode(false);
        $('#toggle-galaxy-menu').focus({ preventScroll: true });
        return;
      }
      if (timelineController.isFilterMenuOpen()) {
        timelineController.setFilterMenuOpen(false);
        $('#timeline-filter-toggle').focus({ preventScroll: true });
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
        $('#civilization-legend').setAttribute('aria-hidden', 'true');
        $('#toggle-civilizations').focus({ preventScroll: true });
      } else {
        leaveUniverse();
      }
    }
  });
  
  const requestedSeed = new URLSearchParams(window.location.search).get('seed');
  syncFullscreenState();
  universe = createUniverse(requestedSeed || undefined);
  syncUniverseUrl();
  updateUniverseData(universe);
  buildUniverseObject();
  startAnimation();
  scheduleGalaxyPreparation();
  
  return { dispose: disposePageResources };
}
