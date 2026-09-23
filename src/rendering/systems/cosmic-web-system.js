import * as THREE from 'three';
import { cosmicGalaxyPositionAt, createCosmicWebModel } from '../../domain/cosmic-web.js';
import {
  cosmicCivilizationStateAt,
  createCosmicCivilizationPlan
} from '../../simulation/cosmic-civilizations.js';
import { getPointTexture } from '../textures.js';

export function createCosmicWebSystem({
  camera,
  compactLayout,
  cosmicWebGroup,
  disposeGroup,
  getActiveSpeciesCount,
  getDependencies,
  getPosition,
  getUniverse,
  prefersReducedMotion,
  query,
  renderer,
  restoreDetailGroupToScene,
  scene,
  state
}) {
  function buildCosmicWebMap() {
    const universe = getUniverse();
    restoreDetailGroupToScene();
    disposeGroup(cosmicWebGroup);
    cosmicWebGroup.rotation.set(.12, -.22, .04);
    state.model = createCosmicWebModel(universe);
    const { positions, luminosity, colorMix } = state.model;
    const galaxyPositions = positions.slice();
    const colors = new Float32Array(positions.length);
    const baseColors = new Float32Array(positions.length);
    const cool = new THREE.Color().setHSL(universe.hue, .58, .69);
    const warm = new THREE.Color(0xffd6a1);
    const color = new THREE.Color();
    for (let index = 0; index < luminosity.length; index++) {
      color.copy(cool).lerp(warm, colorMix[index]);
      const offset = index * 3;
      baseColors[offset] = color.r * luminosity[index];
      baseColors[offset + 1] = color.g * luminosity[index];
      baseColors[offset + 2] = color.b * luminosity[index];
    }

    const galaxyGeometry = new THREE.BufferGeometry();
    galaxyGeometry.setAttribute('position', new THREE.BufferAttribute(galaxyPositions, 3));
    galaxyGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    const galaxyMaterial = new THREE.PointsMaterial({
      size: compactLayout.matches ? 1.65 : 1.25,
      sizeAttenuation: false,
      map: getPointTexture(),
      alphaTest: .012,
      vertexColors: true,
      transparent: true,
      opacity: 0,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });
    const galaxies = new THREE.Points(galaxyGeometry, galaxyMaterial);
    cosmicWebGroup.add(galaxies);

    const clusterGlows = state.model.clusters
      .slice()
      .sort((left, right) => right.mass - left.mass)
      .slice(0, 12)
      .map((cluster) => {
        const glowMaterial = new THREE.SpriteMaterial({
          map: getDependencies().makeGlowTexture(),
          color: cool,
          transparent: true,
          opacity: 0,
          depthWrite: false,
          blending: THREE.AdditiveBlending
        });
        const glow = new THREE.Sprite(glowMaterial);
        glow.position.fromArray(cluster.position);
        glow.scale.setScalar(2.2 + cluster.mass * 2.1);
        cosmicWebGroup.add(glow);
        return glow;
      });

    const locatorMaterial = new THREE.SpriteMaterial({
      map: getDependencies().makeRingTexture(),
      color: 0xd8ff5f,
      transparent: true,
      opacity: 0,
      depthTest: false,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });
    const locator = new THREE.Sprite(locatorMaterial);
    const initialLocatorPosition = cosmicGalaxyPositionAt(
      state.model,
      state.model.currentGalaxyIndex,
      0
    );
    const currentGalaxyAnchor = new THREE.Group();
    currentGalaxyAnchor.position.fromArray(initialLocatorPosition);
    locator.scale.setScalar(3.2);
    locator.renderOrder = 8;
    currentGalaxyAnchor.add(locator);
    cosmicWebGroup.add(currentGalaxyAnchor);

    state.civilizationPlan = createCosmicCivilizationPlan(universe, state.model);
    const routeCapacity = state.civilizationPlan.routes.length;
    const travelerPositions = new Float32Array(routeCapacity * 3);
    const travelerColors = new Float32Array(routeCapacity * 3);
    const travelerGeometry = new THREE.BufferGeometry();
    travelerGeometry.setAttribute('position', new THREE.BufferAttribute(travelerPositions, 3));
    travelerGeometry.setAttribute('color', new THREE.BufferAttribute(travelerColors, 3));
    travelerGeometry.setDrawRange(0, 0);
    const travelers = new THREE.Points(travelerGeometry, new THREE.PointsMaterial({
      size: compactLayout.matches ? 5.2 : 4.1,
      sizeAttenuation: false,
      map: getPointTexture(),
      alphaTest: .008,
      vertexColors: true,
      transparent: true,
      opacity: 0,
      depthTest: false,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    }));
    travelers.renderOrder = 7;
    cosmicWebGroup.add(travelers);

    const settlementPositions = new Float32Array(routeCapacity * 3);
    const settlementColors = new Float32Array(routeCapacity * 3);
    const settlementGeometry = new THREE.BufferGeometry();
    settlementGeometry.setAttribute('position', new THREE.BufferAttribute(settlementPositions, 3));
    settlementGeometry.setAttribute('color', new THREE.BufferAttribute(settlementColors, 3));
    settlementGeometry.setDrawRange(0, 0);
    const settlements = new THREE.Points(settlementGeometry, new THREE.PointsMaterial({
      size: compactLayout.matches ? 3.4 : 2.6,
      sizeAttenuation: false,
      map: getPointTexture(),
      alphaTest: .01,
      vertexColors: true,
      transparent: true,
      opacity: 0,
      depthTest: false,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    }));
    settlements.renderOrder = 6;
    cosmicWebGroup.add(settlements);

    const travelPulses = Array.from({ length: 12 }, () => {
      const pulse = new THREE.Sprite(new THREE.SpriteMaterial({
        map: getDependencies().makeRingTexture(),
        color: 0xd8ff5f,
        transparent: true,
        opacity: 0,
        depthTest: false,
        depthWrite: false,
        blending: THREE.AdditiveBlending
      }));
      pulse.visible = false;
      pulse.renderOrder = 9;
      cosmicWebGroup.add(pulse);
      return pulse;
    });

    state.visual = {
      galaxies,
      clusterGlows,
      currentGalaxyAnchor,
      locator,
      baseColors,
      galaxyPositions,
      reveal: 0
    };
    state.civilizationVisual = {
      travelers,
      settlements,
      travelPulses,
      travelerPositions,
      travelerColors,
      settlementPositions,
      settlementColors
    };
    cosmicWebGroup.visible = false;
    state.flowTime = 0;
    state.lastFlowUpdateAt = 0;
    state.shadersWarmed = false;
    query('#universe-scale-structure').textContent = `${state.model.morphologyLabel} · ${state.model.clusterCount} 个超星系团节点 · 当前星系已标记`;
  }

  async function warmUniverseScaleShaders() {
    if (state.shadersWarmed || !state.visual || !renderer.compileAsync) return;
    const wasVisible = cosmicWebGroup.visible;
    cosmicWebGroup.visible = true;
    try {
      const compilation = renderer.compileAsync(scene, camera);
      cosmicWebGroup.visible = wasVisible;
      await compilation;
      state.shadersWarmed = true;
    } finally {
      cosmicWebGroup.visible = wasVisible;
    }
  }

  function applyCosmicWebOpacity() {
    if (!state.visual) return;
    const opacity = state.visual.reveal * state.visual.epochOpacity * state.visual.fateOpacity;
    state.visual.galaxies.material.opacity = opacity * .96;
    state.visual.clusterGlows.forEach((glow) => {
      glow.material.opacity = opacity * .1;
    });
    state.visual.locator.material.opacity = opacity * .92;
    if (state.civilizationVisual) {
      const activityOpacity = state.civilizationVisual.activityOpacity ?? 1;
      state.civilizationVisual.travelers.material.opacity = opacity * activityOpacity;
      state.civilizationVisual.settlements.material.opacity = opacity * activityOpacity * .82;
      state.civilizationVisual.travelPulses.forEach((pulse) => {
        pulse.material.opacity = (pulse.userData.baseOpacity || 0) * opacity * activityOpacity;
      });
    }
  }

  function writeRouteColor(array, offset, color, brightness = 1) {
    array[offset] = ((color >> 16) & 255) / 255 * brightness;
    array[offset + 1] = ((color >> 8) & 255) / 255 * brightness;
    array[offset + 2] = (color & 255) / 255 * brightness;
  }

  const cosmicRouteSourcePosition = [0, 0, 0];
  const cosmicRouteTargetPosition = [0, 0, 0];

  function movingCosmicRouteEndpoint(route, endpoint, target) {
    if (!state.model) {
      const position = route[endpoint === 'sourceIndex' ? 'source' : 'target'];
      target[0] = position[0];
      target[1] = position[1];
      target[2] = position[2];
      return target;
    }
    return cosmicGalaxyPositionAt(
      state.model,
      route[endpoint],
      state.flowTime,
      target
    );
  }

  function positionAlongCosmicRoute(route, progress, target) {
    const source = movingCosmicRouteEndpoint(
      route,
      'sourceIndex',
      cosmicRouteSourcePosition
    );
    const destination = movingCosmicRouteEndpoint(
      route,
      'targetIndex',
      cosmicRouteTargetPosition
    );
    const arc = Math.sin(progress * Math.PI) * route.arcHeight;
    target[0] = THREE.MathUtils.lerp(source[0], destination[0], progress)
      + route.arcDirection[0] * arc;
    target[1] = THREE.MathUtils.lerp(source[1], destination[1], progress)
      + route.arcDirection[1] * arc;
    target[2] = THREE.MathUtils.lerp(source[2], destination[2], progress)
      + route.arcDirection[2] * arc;
    return target;
  }

  function updateCosmicCivilizationVisuals(
    position,
    updateReadout = true,
    civilizationsActive = getActiveSpeciesCount() > 0
  ) {
    if (!state.civilizationPlan || !state.civilizationVisual) return;
    const civilizationState = cosmicCivilizationStateAt(state.civilizationPlan, position);
    const renderActivity = civilizationState.operational && civilizationsActive;
    const active = renderActivity ? civilizationState.active : [];
    const arrived = renderActivity ? civilizationState.arrived : [];
    const traffic = renderActivity ? civilizationState.traffic : [];
    const visibleTravel = [...active, ...traffic];
    const travelPosition = [0, 0, 0];
    state.civilizationVisual.activityOpacity = renderActivity ? civilizationState.activityOpacity : 0;

    visibleTravel.forEach(({ route, progress }, index) => {
      const offset = index * 3;
      positionAlongCosmicRoute(route, progress, travelPosition);
      state.civilizationVisual.travelerPositions.set(travelPosition, offset);
      writeRouteColor(state.civilizationVisual.travelerColors, offset, route.color, 1.28);
    });
    state.civilizationVisual.travelers.geometry.setDrawRange(0, visibleTravel.length);
    state.civilizationVisual.travelers.geometry.attributes.position.needsUpdate = true;
    state.civilizationVisual.travelers.geometry.attributes.color.needsUpdate = true;

    arrived.forEach((route, index) => {
      const offset = index * 3;
      movingCosmicRouteEndpoint(route, 'targetIndex', travelPosition);
      state.civilizationVisual.settlementPositions.set(travelPosition, offset);
      writeRouteColor(state.civilizationVisual.settlementColors, offset, route.color, .9);
    });
    state.civilizationVisual.settlements.geometry.setDrawRange(0, arrived.length);
    state.civilizationVisual.settlements.geometry.attributes.position.needsUpdate = true;
    state.civilizationVisual.settlements.geometry.attributes.color.needsUpdate = true;

    state.civilizationVisual.travelPulses.forEach((pulse, index) => {
      const data = renderActivity ? civilizationState.pulses[index] : null;
      if (!data) {
        pulse.visible = false;
        pulse.userData.baseOpacity = 0;
        return;
      }
      const { route, type, strength } = data;
      pulse.visible = true;
      pulse.material.color.setHex(type === 'failure' ? 0xff705c : route.color);
      if (type === 'departure') {
        movingCosmicRouteEndpoint(route, 'sourceIndex', travelPosition);
        pulse.position.fromArray(travelPosition);
      } else if (type === 'arrival') {
        movingCosmicRouteEndpoint(route, 'targetIndex', travelPosition);
        pulse.position.fromArray(travelPosition);
      } else {
        const failureProgress = (route.failureAt - route.departureAt)
          / Math.max(1e-6, route.arrivalAt - route.departureAt);
        positionAlongCosmicRoute(route, failureProgress, travelPosition);
        pulse.position.fromArray(travelPosition);
      }
      pulse.userData.baseScale = .8 + (1 - strength) * 2.8;
      pulse.scale.setScalar(pulse.userData.baseScale);
      pulse.userData.baseOpacity = strength * .72;
    });
    applyCosmicWebOpacity();

    if (!updateReadout) return;

    if (position < state.civilizationPlan.civilizationStartAt) {
      query('#universe-scale-activity').textContent = '全宇宙文明航行尚未出现';
      query('#universe-scale-event').textContent = '';
      return;
    }
    if (!renderActivity || (visibleTravel.length === 0 && civilizationState.latestEvent)) {
      query('#universe-scale-activity').textContent = '星系际文明活动已终止 · 无在途航行器';
      query('#universe-scale-event').textContent = '';
      return;
    }
    query('#universe-scale-activity').textContent = `${visibleTravel.length} 艘星系际航行器在途 · ${arrived.length} 条航路持续通航 · ${civilizationState.failed.length} 次失联`;
    const event = civilizationState.latestEvent;
    if (!event) {
      query('#universe-scale-event').textContent = '等待第一批跨星系文明完成启航条件';
      return;
    }
    const source = `G-${String(event.route.sourceIndex).padStart(5, '0')}`;
    const target = `G-${String(event.route.targetIndex).padStart(5, '0')}`;
    const eventLabel = event.type === 'departure'
      ? '启航'
      : event.type === 'arrival' ? '抵达' : '失联';
    query('#universe-scale-event').textContent = `最近事件 · ${event.route.modeLabel} ${eventLabel} · ${source} → ${target}`;
  }

  function updateCosmicWebMotion(now, force = false) {
    if (!state.model || !state.visual) return;
    if (!force && now - state.lastFlowUpdateAt < 50) return;
    const elapsed = state.lastFlowUpdateAt > 0 ? now - state.lastFlowUpdateAt : 0;
    state.lastFlowUpdateAt = now;
    if (!prefersReducedMotion) state.flowTime += Math.min(.12, elapsed * .001);
    for (let index = 0; index < state.model.galaxyCount; index++) {
      cosmicGalaxyPositionAt(
        state.model,
        index,
        state.flowTime,
        state.visual.galaxyPositions,
        index * 3
      );
    }
    state.visual.galaxies.geometry.attributes.position.needsUpdate = true;
    const locatorPosition = cosmicGalaxyPositionAt(
      state.model,
      state.model.currentGalaxyIndex,
      state.flowTime
    );
    state.visual.currentGalaxyAnchor.position.fromArray(locatorPosition);
    updateCosmicCivilizationVisuals(getPosition(), false);
  }

  function updateCosmicWebVisuals(position) {
    const universe = getUniverse();
    if (!state.visual || !state.model) return;
    const colors = state.visual.galaxies.geometry.attributes.color.array;
    const stellarEnd = getDependencies().stellarEndTimelinePosition(universe);
    const stellarLight = 1 - THREE.MathUtils.smoothstep(position, stellarEnd - 75, stellarEnd + 12);
    const remnantLight = THREE.MathUtils.smoothstep(position, stellarEnd - 24, stellarEnd + 18)
      * (1 - THREE.MathUtils.smoothstep(position, 900, 985));
    let formedCount = 0;
    for (let index = 0; index < state.model.galaxyCount; index++) {
      const born = THREE.MathUtils.smoothstep(
        position,
        state.model.formationAt[index],
        state.model.formationAt[index] + 18
      );
      if (position >= state.model.formationAt[index]) formedCount++;
      const brightness = born * (stellarLight + remnantLight * .075);
      const offset = index * 3;
      colors[offset] = state.visual.baseColors[offset] * brightness;
      colors[offset + 1] = state.visual.baseColors[offset + 1] * brightness;
      colors[offset + 2] = state.visual.baseColors[offset + 2] * brightness;
    }
    state.visual.galaxies.geometry.attributes.color.needsUpdate = true;

    const fate = universe.cosmicFate;
    const finiteOutcome = fate.type !== 'heat-death';
    const fatePhase = finiteOutcome
      ? THREE.MathUtils.smoothstep(position, fate.onsetAt, 1000)
      : 0;
    state.visual.epochOpacity = THREE.MathUtils.smoothstep(position, 195, 330);
    state.visual.fateOpacity = fate.type === 'vacuum-decay'
      ? 1 - fatePhase
      : fate.type === 'big-rip'
        ? Math.pow(1 - fatePhase, .42)
        : 1;
    if (fate.type === 'big-rip') {
      cosmicWebGroup.scale.setScalar(1 + Math.pow(fatePhase, 1.45) * 1.8);
    } else if (fate.type === 'big-crunch') {
      cosmicWebGroup.scale.setScalar(Math.max(.015, 1 - Math.pow(fatePhase, 1.28) * .985));
    } else {
      cosmicWebGroup.scale.setScalar(1);
    }
    applyCosmicWebOpacity();

    const countLabel = formedCount === 0
      ? '宇宙网尚未形成'
      : `${formedCount.toLocaleString('zh-CN')} / ${state.model.galaxyCount.toLocaleString('zh-CN')} 个代表性星系`;
    query('#universe-scale-count').textContent = countLabel;
    let eraLabel = '等待第一批星系形成';
    if (formedCount > 0) eraLabel = `可观测直径约 ${state.model.observableDiameterBillionLightYears.toFixed(0)}0 亿光年 · 宇宙网形成中`;
    if (formedCount === state.model.galaxyCount) eraLabel = `可观测直径约 ${state.model.observableDiameterBillionLightYears.toFixed(0)}0 亿光年 · 宇宙网已形成`;
    if (stellarLight < .08) eraLabel = '恒星时代结束 · 星系只剩致密残骸';
    if (finiteOutcome && fatePhase > 0) eraLabel = `${fate.label}正在改变整个可观测尺度`;
    query('#universe-scale-era').textContent = eraLabel;
    updateCosmicCivilizationVisuals(position);
  }


  return {
    applyOpacity: applyCosmicWebOpacity,
    build: buildCosmicWebMap,
    updateMotion: updateCosmicWebMotion,
    updateVisuals: updateCosmicWebVisuals,
    warmShaders: warmUniverseScaleShaders
  };
}
