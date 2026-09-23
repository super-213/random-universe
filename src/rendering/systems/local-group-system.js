import * as THREE from 'three';
import { createLocalGalaxyGroup } from '../../domain/local-group.js';
import { createSeededRandom } from '../../domain/random.js';
import {
  fleetStates,
  intergalacticRouteOperational,
  routeTrafficSpeedForIdentity,
  stableRouteAssignments
} from '../../simulation/intergalactic-travel.js';
import { getPointTexture } from '../textures.js';

export function createLocalGroupSystem({
  beginShipDisappearance,
  createTravelShip,
  disposeGroup,
  getCivilizationData,
  getDependencies,
  getFateBubble,
  getMode,
  getSession,
  getUniverse,
  group,
  isUniverseScaleTransition,
  prefersReducedMotion,
  query,
  resetShipDisappearance,
  routesPerVisibleShip,
  state,
  updateIntergalacticShipAppearance,
  updateIntergalacticShipNavigationPath
}) {
  function buildLocalGroupMap() {
    const universe = getUniverse();
    const civilizationData = getCivilizationData();
    disposeGroup(group);
    group.rotation.set(0, 0, 0);
    state.routes = [];
    state.shipMarkers = [];
    state.routeAssignments = [];
    state.galaxies = [];
    state.model = createLocalGalaxyGroup(universe.seed, query('#galaxy-name').textContent);
    const random = createSeededRandom(universe.seed, 7317);
    state.model.companions.forEach((companion) => {
      const galaxy = new THREE.Group();
      galaxy.position.fromArray(companion.position);
      galaxy.rotation.set(
        getDependencies().randomBetween(random, -.18, .18),
        getDependencies().randomBetween(random, -.4, .4),
        getDependencies().randomBetween(random, -.12, .12)
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
      for (let index = 0; index < count; index++) {
        const offset = index * 3;
        const radius = Math.pow(random(), .78) * companion.radius;
        const angle = isSpiral
          ? (index % 2) * Math.PI + radius * 1.55 + getDependencies().gaussianRandom(random) * .3
          : random() * Math.PI * 2;
        const vertical = getDependencies().gaussianRandom(random) * companion.radius * (isIrregular ? .3 : .16);
        radii[index] = radius;
        angles[index] = angle;
        verticals[index] = vertical;
        phases[index] = random() * Math.PI * 2;
        formationRadii[index] = radius * getDependencies().randomBetween(random, 1.28, 1.62)
          + random() * companion.radius * .16;
        formationAngles[index] = angle + getDependencies().gaussianRandom(random) * .34;
        formationVerticals[index] = vertical * getDependencies().randomBetween(random, 1.8, 2.5)
          + getDependencies().gaussianRandom(random) * companion.radius * .18;
        positions[offset] = Math.cos(angle) * radius;
        positions[offset + 1] = vertical;
        positions[offset + 2] = Math.sin(angle) * radius * flattening;
      }
      const companionPopulation = getDependencies().createStellarPopulation(universe, positions, {
        namespace: 7400 + companion.index
      });
      birthAt.set(companionPopulation.birthAt);
      deathAt.set(companionPopulation.deathAt);
      const galaxyBirthStart = Math.min(...birthAt);
      for (let index = 0; index < count; index++) {
        const offset = index * 3;
        baseColors[offset] = companionPopulation.colors[offset] * .82 + tint.r * .18;
        baseColors[offset + 1] = companionPopulation.colors[offset + 1] * .82 + tint.g * .18;
        baseColors[offset + 2] = companionPopulation.colors[offset + 2] * .82 + tint.b * .18;
        colors[offset] = baseColors[offset];
        colors[offset + 1] = baseColors[offset + 1];
        colors[offset + 2] = baseColors[offset + 2];
        remnantStrength[index] = companionPopulation.remnantTypes[index] > 1
          ? getDependencies().randomBetween(random, .1, .24)
          : random() < .22 ? getDependencies().randomBetween(random, .04, .12) : 0;
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
        map: getDependencies().makeGlowTexture(),
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
        map: getDependencies().makeGlowTexture(),
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
      group.add(galaxy);
      state.galaxies.push({
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

    civilizationData.forEach((species) => {
      const destination = state.model.companions[species.color % state.model.companions.length];
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
      group.add(line);
      state.routes.push(line);

      const ships = Array.from({ length: 1 }, (_, shipIndex) => {
        const ship = createTravelShip(random, species.color);
        ship.userData.trafficPhase = (ship.userData.trafficPhase + shipIndex) % 2;
        ship.userData.shipContext = 'local-group';
        group.add(ship);
        return ship;
      });
      state.shipMarkers.push(ships);
    });
    group.visible = false;
  }


  function updateLocalGroupVisuals(simulationState) {
    const universe = getUniverse();
    const civilizationData = getCivilizationData();
    if (!state.model) return;
    const visible = getMode() === 'explorer' && getSession().timeline.position >= 205;
    const routesFormed = visible && getSession().timeline.position >= getDependencies().STELLAR_DAWN_END;
    group.visible = visible;
    const viewBoost = getSession().view.universeScale ? 1 : .34;
    const stellarEnd = getDependencies().stellarEndTimelinePosition(universe);
    const remapReferencePosition = (referencePosition) => getDependencies().cosmicYearsToTimelinePosition(
      getDependencies().referenceFutureYearsAtTimelinePosition(referencePosition, universe),
      universe
    );
    const remnantFadeStart = remapReferencePosition(845);
    const remnantFadeEnd = remapReferencePosition(930);
    const remnantPersistence = remnantFadeStart >= 999
      ? 1
      : 1 - THREE.MathUtils.smoothstep(
          getSession().timeline.position,
          remnantFadeStart,
          Math.max(remnantFadeStart + 1, remnantFadeEnd)
        );
    const stellarPopulation = 1 - THREE.MathUtils.smoothstep(
      getSession().timeline.position,
      stellarEnd - 75,
      stellarEnd + 10
    );
    const fate = universe.cosmicFate;
    const finiteOutcome = fate?.type && fate.type !== 'heat-death';
    const fatePhase = finiteOutcome
      ? THREE.MathUtils.smoothstep(getSession().timeline.position, fate.onsetAt, 1000)
      : 0;
    const bouncePhase = fate.cyclicBounce
      ? THREE.MathUtils.smoothstep(getSession().timeline.position, fate.bounceAt, 1000)
      : 0;
    const crunchPhase = fate.cyclicBounce
      ? THREE.MathUtils.smoothstep(getSession().timeline.position, fate.onsetAt, fate.bounceAt)
      : fatePhase;
    const ripStrength = fate.type === 'little-rip' ? fate.ripStrength ?? 1 : 1;

    state.galaxies.forEach((companion) => {
      let fateSurvival = 1;
      companion.galaxy.position.fromArray(companion.basePosition);
      companion.galaxy.scale.setScalar(1);
      if (fatePhase > 0 && (fate.type === 'big-rip' || fate.type === 'little-rip')) {
        const separation = 1 + Math.pow(fatePhase, 1.7) * 3.2 * ripStrength;
        companion.galaxy.position.multiplyScalar(separation);
        companion.galaxy.scale.setScalar(1 + Math.pow(fatePhase, 1.7) * 2.5 * ripStrength);
        fateSurvival = Math.pow(1 - fatePhase * ripStrength, .72);
      } else if (fatePhase > 0 && fate.type === 'big-crunch') {
        const collapsed = Math.max(.012, 1 - Math.pow(crunchPhase, 1.35) * .988);
        const contraction = fate.cyclicBounce
          ? THREE.MathUtils.lerp(collapsed, .72, Math.pow(bouncePhase, .68))
          : collapsed;
        companion.galaxy.position.multiplyScalar(contraction);
        companion.galaxy.scale.setScalar(contraction);
      } else if (fatePhase > 0 && fate.type === 'type-iii-singularity') {
        const finiteExpansion = 1 + Math.log2(fate.singularityScaleFactor || 2) * .14 * fatePhase;
        companion.galaxy.position.multiplyScalar(finiteExpansion);
        companion.galaxy.scale.setScalar(1 + fatePhase * .18);
      } else if (fatePhase > 0 && fate.type === 'vacuum-decay') {
        const bubbleRadius = .18 + Math.pow(fatePhase, .58) * 36;
        const bubblePosition = getFateBubble()?.position || new THREE.Vector3();
        const distance = companion.galaxy.position.distanceTo(bubblePosition);
        fateSurvival = THREE.MathUtils.smoothstep(bubbleRadius - 1.2, bubbleRadius + .4, distance);
      }

      const gasReveal = THREE.MathUtils.smoothstep(
        getSession().timeline.position,
        companion.galaxyBirthStart - 38,
        companion.galaxyBirthStart - 12
      );
      const gasIonized = THREE.MathUtils.smoothstep(
        getSession().timeline.position,
        companion.galaxyBirthStart + 22,
        getDependencies().STELLAR_DAWN_END
      );
      const colorArray = companion.points.geometry.attributes.color.array;
      for (let index = 0; index < companion.birthAt.length; index++) {
        const offset = index * 3;
        const born = THREE.MathUtils.smoothstep(
          getSession().timeline.position,
          companion.birthAt[index],
          companion.birthAt[index] + 5.5
        );
        const alive = 1 - THREE.MathUtils.smoothstep(
          getSession().timeline.position,
          companion.deathAt[index],
          companion.deathAt[index] + 22
        );
        const young = 1 - THREE.MathUtils.smoothstep(
          getSession().timeline.position,
          companion.birthAt[index] + 3,
          companion.birthAt[index] + 18
        );
        const remnant = THREE.MathUtils.smoothstep(
          getSession().timeline.position,
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
          colorArray[offset] *= 1 + crunchPhase * 1.4 + bouncePhase * 1.8;
          colorArray[offset + 1] *= 1 - crunchPhase * .5 + bouncePhase * 1.25;
          colorArray[offset + 2] *= 1 - crunchPhase * .72 + bouncePhase * 2.2;
        } else if (fate.type === 'type-iii-singularity' && fatePhase > 0) {
          const energyRise = Math.pow(fatePhase, 2.4);
          colorArray[offset] *= 1 + energyRise * 4.8;
          colorArray[offset + 1] *= 1 + energyRise * 2.8;
          colorArray[offset + 2] *= 1 + energyRise * 1.2;
        }
      }
      companion.points.geometry.attributes.color.needsUpdate = true;
      companion.points.material.opacity = companion.points.material.userData.baseOpacity
        * viewBoost
        * fateSurvival;

      companion.gas.material.opacity = gasReveal * (1 - gasIonized) * .38 * viewBoost * fateSurvival;
      companion.gas.scale.setScalar(companion.radius * THREE.MathUtils.lerp(4.4, 3.2, gasIonized));
      const assembled = THREE.MathUtils.smoothstep(
        getSession().timeline.position,
        companion.galaxyBirthStart + 20,
        getDependencies().STELLAR_DAWN_END + 8
      );
      companion.coreEvolutionOpacity = companion.core.material.userData.baseOpacity
        * viewBoost
        * assembled
        * stellarPopulation
        * fateSurvival;
      companion.core.material.opacity = companion.coreEvolutionOpacity;
      if (prefersReducedMotion || !getSession().view.universeScale) {
        updateLocalGalaxyParticlePositions(companion, performance.now(), false);
      }
    });

    const activeRouteTraffic = [];
    civilizationData.forEach((species, speciesIndex) => {
      const route = state.routes[speciesIndex];
      const ships = state.shipMarkers[speciesIndex];
      if (!route || !ships) return;
      const externalIndex = simulationState?.externalGalaxyIndices?.[speciesIndex] || 0;
      const externalPopulation = simulationState?.externalPopulations?.[speciesIndex] || 0;
      const fleetState = simulationState?.fleetStates?.[speciesIndex] || 0;
      const fleetTarget = simulationState?.fleetTargetGalaxyIndices?.[speciesIndex] || 0;
      const routeIndex = externalIndex || fleetTarget;
      const companion = routeIndex
        ? state.model.companions[(routeIndex - 1) % state.model.companions.length]
        : null;
      const routeActive = intergalacticRouteOperational({
        hasDestination: Boolean(companion),
        civilizationActive: Boolean(simulationState?.active?.[speciesIndex]),
        fleetState,
        externalPopulation,
        routesFormed,
        fatePhase
      });
      route.visible = false;
      if (!routeActive) {
        ships.forEach((ship) => {
          if (ship.userData.trafficActive) {
            const disappearanceMode = fleetState === fleetStates.lost
              ? 'explosion'
              : ship.userData.defaultDisappearance;
            const targetProgress = fleetState === fleetStates.returned ? 0 : null;
            beginShipDisappearance(ship, disappearanceMode, targetProgress);
          }
          ship.userData.trafficActive = false;
          if (!ship.userData.disappearance) ship.visible = false;
        });
        return;
      }
      ships.forEach((ship) => {
        if (!ship.userData.disappearance) ship.visible = false;
      });
      const recordedProgress = simulationState.fleetProgress?.[speciesIndex] || 0;
      const targetGalaxy = state.galaxies.find((item) => (
        item.galaxy.userData.companionIndex === companion.index
        || item.points.userData.companionIndex === companion.index
      ));
      const initialFlight = externalPopulation <= .01;
      activeRouteTraffic.push({
        key: speciesIndex,
        ship: ships[0],
        targetGalaxy,
        targetRadius: companion.radius,
        fleetProgress: recordedProgress,
        fleetDepartureAt: simulationState.fleetDepartureAt?.[speciesIndex] || 0,
        fleetArrivalAt: simulationState.fleetArrivalAt?.[speciesIndex] || 0,
        initialFlight,
        isLost: fleetState === -1 && externalPopulation <= .01,
        trafficSpeed: routeTrafficSpeedForIdentity(speciesIndex, 997)
      });
    });
    state.routeAssignments = stableRouteAssignments(
      activeRouteTraffic.map((traffic) => traffic.key),
      state.routeAssignments,
      routesPerVisibleShip
    );
    const routeTrafficByKey = new Map(activeRouteTraffic.map((traffic) => [
      traffic.key,
      traffic
    ]));
    state.routeAssignments.forEach((routeKey) => {
      const traffic = routeTrafficByKey.get(routeKey);
      if (!traffic) return;
      const { ship } = traffic;
      ship.userData.targetGalaxy = traffic.targetGalaxy;
      ship.userData.targetRadius = traffic.targetRadius;
      ship.userData.fleetProgress = traffic.fleetProgress;
      ship.userData.fleetDepartureAt = traffic.fleetDepartureAt;
      ship.userData.fleetArrivalAt = traffic.fleetArrivalAt;
      ship.userData.isInitialFlight = traffic.initialFlight;
      ship.userData.isLost = traffic.isLost;
      ship.userData.trafficSpeed = traffic.trafficSpeed;
      if (!ship.userData.trafficActive || ship.userData.disappearanceComplete) {
        resetShipDisappearance(ship);
      }
      ship.userData.trafficActive = true;
      ship.visible = getSession().view.shipHighlight && getSession().view.universeScale;
      updateIntergalacticShipNavigationPath(ship);
      updateIntergalacticShipAppearance(ship);
    });
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
        getSession().timeline.position,
        companion.birthAt[index] - 7,
        Math.min(getDependencies().STELLAR_DAWN_END, companion.birthAt[index] + 38)
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

  function animateLocalGroupGalaxies(now, motionActive = true) {
    if (!motionActive
      || !getSession().view.universeScale
      || isUniverseScaleTransition()
      || !group.visible) return;
    const elapsed = now * .001;
    if (!prefersReducedMotion) {
      state.galaxies.forEach((companion) => {
        updateLocalGalaxyParticlePositions(companion, now, true);
        const pulse = 1 + Math.sin(elapsed * .72 + companion.pulsePhase) * .035;
        companion.core.scale.setScalar(companion.radius * 1.68 * pulse);
        companion.core.material.opacity = (companion.coreEvolutionOpacity || 0)
          * (.92 + Math.sin(elapsed * .72 + companion.pulsePhase) * .08);
        companion.gas.material.rotation = elapsed * companion.rotationSpeed * .08;
      });
    }
  }


  return {
    animate: animateLocalGroupGalaxies,
    build: buildLocalGroupMap,
    updateVisuals: updateLocalGroupVisuals
  };
}
