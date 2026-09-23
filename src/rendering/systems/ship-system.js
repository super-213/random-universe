import * as THREE from 'three';
import { obstacleAvoidingPathPoints } from '../../simulation/ship-navigation.js';

export function createShipSystem({
  getDependencies,
  getState,
  getBlackHoleRemnants,
  getLocalGroupGalaxies,
  getShipCollections,
  galaxyGroup,
  remnantGroup,
  prefersReducedMotion
}) {
  const forward = new THREE.Vector3(1, 0, 0);
  const routeDirection = new THREE.Vector3();
  const routeStartArray = [0, 0, 0];
  const routeEndArray = [0, 0, 0];

  function createTravelShip(random, color, size = 1) {
    const dependencies = getDependencies();
    const ship = new THREE.Group();
    const hullMaterial = new THREE.MeshBasicMaterial({
      color,
      transparent: true,
      opacity: 0,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });
    const hull = new THREE.Mesh(new THREE.ConeGeometry(.12, .48, 3), hullMaterial);
    hull.rotation.z = -Math.PI / 2;
    ship.add(hull);

    const highlightMaterial = new THREE.SpriteMaterial({
      map: dependencies.makeRingTexture(),
      color,
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
      map: dependencies.makeGlowTexture(),
      color,
      transparent: true,
      opacity: 0,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });
    const engine = new THREE.Sprite(engineMaterial);
    engine.position.x = -.28;
    engine.scale.set(.42, .24, 1);
    ship.add(engine);

    const explosionMaterial = new THREE.SpriteMaterial({
      map: dependencies.makeGlowTexture(),
      color: 0xff8a42,
      transparent: true,
      opacity: 0,
      depthTest: false,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });
    const explosion = new THREE.Sprite(explosionMaterial);
    explosion.scale.setScalar(.1);
    explosion.renderOrder = 8;
    ship.add(explosion);

    const explosionRingMaterial = new THREE.SpriteMaterial({
      map: dependencies.makeRingTexture(),
      color: 0xffd27a,
      transparent: true,
      opacity: 0,
      depthTest: false,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });
    const explosionRing = new THREE.Sprite(explosionRingMaterial);
    explosionRing.scale.setScalar(.1);
    explosionRing.renderOrder = 9;
    ship.add(explosionRing);

    ship.visible = false;
    ship.renderOrder = 5;
    Object.assign(ship.userData, {
      hullMaterial,
      engineMaterial,
      highlightMaterial,
      highlightSprite: highlight,
      explosionMaterial,
      explosionSprite: explosion,
      explosionRingMaterial,
      explosionRing,
      highlightMix: getState().shipHighlight ? 1 : 0,
      trafficPhase: random() * 2,
      trafficSpeed: dependencies.randomBetween(random, .008, .028),
      pulsePhase: random() * Math.PI * 2,
      baseScale: size,
      defaultDisappearance: null,
      trafficActive: false,
      disappearance: null,
      disappearanceComplete: false
    });
    // Preserve the original seeded branch: it was based on pulsePhase, not on
    // a second random draw.
    ship.userData.defaultDisappearance = ship.userData.pulsePhase < Math.PI * .58
      ? 'explosion'
      : 'arrival';
    return ship;
  }

  function forEachShipMarker(callback) {
    getShipCollections().forEach((collection) => {
      collection.forEach((ships) => ships.forEach(callback));
    });
  }

  function assignShipNavigationPath(ship, start, end, obstacles, clearance) {
    start.toArray(routeStartArray);
    end.toArray(routeEndArray);
    const navigationPoints = obstacleAvoidingPathPoints(
      routeStartArray,
      routeEndArray,
      obstacles,
      { clearance }
    );
    const currentCurve = ship.userData.routeCurve;
    if (navigationPoints.length === 2) {
      if (currentCurve?.isLineCurve3) {
        currentCurve.v1.fromArray(navigationPoints[0]);
        currentCurve.v2.fromArray(navigationPoints[1]);
        return;
      }
      ship.userData.routePoints = null;
      ship.userData.routeCurve = new THREE.LineCurve3(
        new THREE.Vector3().fromArray(navigationPoints[0]),
        new THREE.Vector3().fromArray(navigationPoints[1])
      );
      return;
    }

    let routePoints = ship.userData.routePoints;
    if (!currentCurve?.isCatmullRomCurve3 || routePoints?.length !== navigationPoints.length) {
      routePoints = navigationPoints.map((point) => new THREE.Vector3().fromArray(point));
      ship.userData.routePoints = routePoints;
      ship.userData.routeCurve = new THREE.CatmullRomCurve3(routePoints, false, 'centripetal');
      return;
    }
    navigationPoints.forEach((point, index) => routePoints[index].fromArray(point));
  }

  function positionShipOnNavigationPath(ship, progress, direction) {
    const routeCurve = ship.userData.routeCurve;
    if (!routeCurve) return;
    const normalizedProgress = THREE.MathUtils.clamp(progress, 0, 1);
    ship.userData.routeProgress = normalizedProgress;
    ship.userData.routeDirection = direction;
    routeCurve.getPoint(normalizedProgress, ship.position);
    routeCurve.getTangent(normalizedProgress, routeDirection).multiplyScalar(direction);
    ship.quaternion.setFromUnitVectors(forward, routeDirection.normalize());
  }

  function resetShipDisappearance(ship) {
    ship.userData.disappearance = null;
    ship.userData.disappearanceComplete = false;
    ship.userData.explosionMaterial.opacity = 0;
    ship.userData.explosionRingMaterial.opacity = 0;
    ship.userData.explosionSprite.scale.setScalar(.1);
    ship.userData.explosionRing.scale.setScalar(.1);
  }

  function beginShipDisappearance(ship, disappearanceMode, targetProgress = null) {
    if (!ship.visible || ship.userData.disappearance || ship.userData.disappearanceComplete) return;
    const routeProgress = ship.userData.routeProgress ?? 0;
    const routeDirectionValue = ship.userData.routeDirection || 1;
    ship.userData.disappearance = {
      mode: disappearanceMode,
      startedAt: performance.now(),
      duration: prefersReducedMotion ? 280 : disappearanceMode === 'explosion' ? 920 : 1250,
      startProgress: routeProgress,
      targetProgress: targetProgress ?? (routeDirectionValue >= 0 ? 1 : 0),
      startScale: ship.scale.x,
      hullOpacity: ship.userData.hullMaterial.opacity,
      engineOpacity: ship.userData.engineMaterial.opacity,
      highlightOpacity: ship.userData.highlightMaterial.opacity
    };
  }

  function updateShipDisappearance(ship, now) {
    const disappearance = ship.userData.disappearance;
    if (!disappearance) return false;
    const phase = THREE.MathUtils.clamp(
      (now - disappearance.startedAt) / disappearance.duration,
      0,
      1
    );
    const state = getState();
    const correctView = ship.userData.shipContext === 'local-group'
      ? state.universeScale
      : !state.universeScale;
    ship.visible = state.shipHighlight && state.mode === 'explorer' && correctView;

    if (disappearance.mode === 'explosion') {
      const flash = Math.sin(phase * Math.PI);
      const hullFade = 1 - THREE.MathUtils.smoothstep(phase, .08, .42);
      ship.userData.hullMaterial.opacity = disappearance.hullOpacity * hullFade;
      ship.userData.engineMaterial.opacity = disappearance.engineOpacity * hullFade;
      ship.userData.highlightMaterial.opacity = disappearance.highlightOpacity * hullFade;
      ship.userData.explosionMaterial.opacity = flash * .95;
      ship.userData.explosionRingMaterial.opacity = (1 - phase) * .72;
      ship.userData.explosionSprite.scale.setScalar(.25 + phase * 3.8);
      ship.userData.explosionRing.scale.setScalar(.2 + phase * 5.2);
      ship.scale.setScalar(disappearance.startScale);
    } else {
      const arrival = 1 - Math.pow(1 - phase, 3);
      const landingProgress = THREE.MathUtils.lerp(
        disappearance.startProgress,
        disappearance.targetProgress,
        arrival
      );
      positionShipOnNavigationPath(
        ship,
        prefersReducedMotion ? disappearance.targetProgress : landingProgress,
        disappearance.targetProgress >= disappearance.startProgress ? 1 : -1
      );
      const fade = THREE.MathUtils.smoothstep(phase, .64, 1);
      ship.userData.hullMaterial.opacity = disappearance.hullOpacity * (1 - fade);
      ship.userData.engineMaterial.opacity = disappearance.engineOpacity * (1 - fade);
      ship.userData.highlightMaterial.opacity = disappearance.highlightOpacity * (1 - fade);
      ship.scale.setScalar(disappearance.startScale * (1 - fade * .76));
    }

    if (phase < 1) return true;
    ship.visible = false;
    ship.userData.disappearance = null;
    ship.userData.disappearanceComplete = true;
    ship.userData.explosionMaterial.opacity = 0;
    ship.userData.explosionRingMaterial.opacity = 0;
    return true;
  }

  function activeBlackHoleNavigationObstacles() {
    remnantGroup.updateWorldMatrix(true, false);
    galaxyGroup.updateWorldMatrix(true, false);
    return getBlackHoleRemnants()
      .filter((hole) => hole.visible)
      .map((hole) => {
        const position = hole.getWorldPosition(new THREE.Vector3());
        galaxyGroup.worldToLocal(position);
        return {
          position: position.toArray(),
          radius: hole.userData.isCentral
            ? 1.45
            : .55 + THREE.MathUtils.clamp(Math.log10(1 + hole.userData.massSolar) * .08, 0, .5)
        };
      });
  }

  function intergalacticNavigationObstacles(targetGalaxy) {
    return getLocalGroupGalaxies()
      .filter((candidate) => candidate !== targetGalaxy)
      .map((candidate) => ({
        position: candidate.galaxy.position.toArray(),
        radius: Math.max(1, candidate.radius * 1.35)
      }));
  }

  return {
    activeBlackHoleNavigationObstacles,
    assignShipNavigationPath,
    beginShipDisappearance,
    createTravelShip,
    forEachShipMarker,
    intergalacticNavigationObstacles,
    positionShipOnNavigationPath,
    resetShipDisappearance,
    updateShipDisappearance
  };
}
