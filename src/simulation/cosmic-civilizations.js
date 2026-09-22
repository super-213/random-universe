import {
  cosmicYearsToTimelinePosition,
  timelinePositionToCosmicYears
} from '../domain/cosmic-time.js';
import { createSeededRandom, randomBetween } from '../domain/random.js';
import { stellarEndTimelinePosition } from '../domain/universe.js';
import { civilizationDeclineWindow } from './civilization.js';

const travelModes = [
  { id: 'generation-fleet', label: '世代舰队', speed: [.12, .62], color: 0xffd27d },
  { id: 'seed-probe', label: '自复制播种探针', speed: [.38, .96], color: 0x82e7ff },
  { id: 'spacetime-relay', label: '时空中继航行', speed: [1.4, 4.8], color: 0xe1a5ff }
];

function positionAt(model, index) {
  const offset = index * 3;
  return [
    model.positions[offset],
    model.positions[offset + 1],
    model.positions[offset + 2]
  ];
}

function distanceBetween(left, right) {
  return Math.hypot(
    left[0] - right[0],
    left[1] - right[1],
    left[2] - right[2]
  );
}

function selectDestination(random, model, sourceIndex) {
  const source = positionAt(model, sourceIndex);
  let bestIndex = sourceIndex;
  let bestDistance = Infinity;
  for (let attempt = 0; attempt < 56; attempt++) {
    const candidateIndex = Math.floor(random() * model.galaxyCount);
    if (candidateIndex === sourceIndex) continue;
    const distance = distanceBetween(source, positionAt(model, candidateIndex));
    const preferredDistance = 1.3 + random() * 2.8;
    const score = Math.abs(distance - preferredDistance) + distance * .08;
    if (score < bestDistance) {
      bestIndex = candidateIndex;
      bestDistance = score;
    }
  }
  return bestIndex;
}

function arcDirection(random, source, target) {
  const direction = target.map((value, axis) => value - source[axis]);
  const reference = Math.abs(direction[1]) < Math.abs(direction[0]) ? [0, 1, 0] : [1, 0, 0];
  const cross = [
    direction[1] * reference[2] - direction[2] * reference[1],
    direction[2] * reference[0] - direction[0] * reference[2],
    direction[0] * reference[1] - direction[1] * reference[0]
  ];
  const length = Math.hypot(...cross) || 1;
  const sign = random() < .5 ? -1 : 1;
  return cross.map((value) => value / length * sign);
}

export function createCosmicCivilizationPlan(universe, cosmicWebModel, {
  routeCount = Math.round(52 + universe.structureEfficiency * 18)
} = {}) {
  const random = createSeededRandom(universe.seed, 16301);
  const count = Math.max(36, Math.min(96, routeCount));
  const civilizationStartYears = Math.max(
    universe.cosmicMilestones.matureGalaxiesYears * 2.1,
    2.4e9
  );
  const civilizationStartAt = cosmicYearsToTimelinePosition(civilizationStartYears, universe);
  const stellarEnd = stellarEndTimelinePosition(universe);
  const fateBoundary = universe.cosmicFate.type === 'heat-death'
    ? 1000
    : universe.cosmicFate.onsetAt;
  const declineWindow = civilizationDeclineWindow(universe);
  const civilizationDeclineAt = Math.min(
    declineWindow.energyStart,
    declineWindow.fateStart
  );
  const civilizationEndAt = Math.min(
    declineWindow.energyEnd,
    declineWindow.fateEnd
  );
  const departureEndAt = Math.max(
    civilizationStartAt + 28,
    Math.min(760, stellarEnd - 12, fateBoundary - 36)
  );
  const routes = Array.from({ length: count }, (_, index) => {
    const sourceIndex = Math.floor(random() * cosmicWebModel.galaxyCount);
    const targetIndex = selectDestination(random, cosmicWebModel, sourceIndex);
    const source = positionAt(cosmicWebModel, sourceIndex);
    const target = positionAt(cosmicWebModel, targetIndex);
    const distanceSceneUnits = distanceBetween(source, target);
    const modeRoll = random();
    const mode = travelModes[modeRoll < .56 ? 0 : modeRoll < .9 ? 1 : 2];
    const departureProgress = (index + randomBetween(random, .08, .92)) / count;
    const departureAt = civilizationStartAt
      + (departureEndAt - civilizationStartAt) * departureProgress;
    const departureYears = timelinePositionToCosmicYears(departureAt, universe);
    const speedFractionC = randomBetween(random, mode.speed[0], mode.speed[1]);
    const distanceLightYears = distanceSceneUnits * 1e9;
    const travelYears = distanceLightYears / Math.max(.01, speedFractionC * universe.speed);
    const arrivalAt = cosmicYearsToTimelinePosition(departureYears + travelYears, universe);
    const failed = random() < (.08 + distanceSceneUnits * .014) && mode.id !== 'spacetime-relay';
    const failureAt = failed
      ? departureAt + (arrivalAt - departureAt) * randomBetween(random, .28, .88)
      : Infinity;
    const shutdownStartAt = Math.max(arrivalAt + 4, civilizationDeclineAt);
    const trafficEndAt = shutdownStartAt >= civilizationEndAt
      ? civilizationEndAt
      : shutdownStartAt
        + (civilizationEndAt - shutdownStartAt) * randomBetween(random, .08, .96);
    return {
      id: `cosmic-route-${index}`,
      sourceIndex,
      targetIndex,
      source,
      target,
      mode: mode.id,
      modeLabel: mode.label,
      color: mode.color,
      departureAt,
      arrivalAt,
      failureAt,
      trafficEndAt,
      distanceSceneUnits,
      distanceLightYears,
      speedFractionC,
      trafficPhase: random() * 2,
      trafficSpeed: randomBetween(random, .006, .014),
      arcDirection: arcDirection(random, source, target),
      arcHeight: Math.min(2.4, .28 + distanceSceneUnits * randomBetween(random, .08, .2))
    };
  });
  return {
    civilizationStartAt,
    civilizationDeclineAt,
    civilizationEndAt,
    fateBoundary,
    routes
  };
}

export function cosmicCivilizationStateAt(plan, position) {
  const active = [];
  const arrived = [];
  const traffic = [];
  const failed = [];
  const pulses = [];
  let latestEvent = null;
  const fadeRange = Math.max(1e-6, plan.civilizationEndAt - plan.civilizationDeclineAt);
  const fadeProgress = Math.max(0, Math.min(1,
    (position - plan.civilizationDeclineAt) / fadeRange
  ));
  const smoothFade = fadeProgress * fadeProgress * (3 - 2 * fadeProgress);
  const activityOpacity = 1 - smoothFade;
  const operational = position < plan.civilizationEndAt;

  if (!operational) {
    plan.routes.forEach((route) => {
      if (Number.isFinite(route.failureAt)
        && route.failureAt < plan.civilizationEndAt
        && position >= route.failureAt) failed.push(route);
    });
    return {
      active,
      arrived,
      traffic,
      failed,
      pulses,
      latestEvent,
      activityOpacity: 0,
      operational: false
    };
  }

  plan.routes.forEach((route) => {
    if (position < route.departureAt) return;
    const eventAt = Number.isFinite(route.failureAt) && position >= route.failureAt
      ? route.failureAt
      : position >= route.arrivalAt ? route.arrivalAt : route.departureAt;
    if (!latestEvent || eventAt > latestEvent.at) {
      latestEvent = {
        at: eventAt,
        type: eventAt === route.departureAt ? 'departure' : eventAt === route.arrivalAt ? 'arrival' : 'failure',
        route
      };
    }
    const departurePulse = Math.max(0, 1 - Math.abs(position - route.departureAt) / 9);
    if (departurePulse > 0) pulses.push({ route, type: 'departure', strength: departurePulse });
    if (Number.isFinite(route.failureAt) && position >= route.failureAt) {
      failed.push(route);
      const failurePulse = Math.max(0, 1 - Math.abs(position - route.failureAt) / 10);
      if (failurePulse > 0) pulses.push({ route, type: 'failure', strength: failurePulse });
      return;
    }
    if (position >= route.arrivalAt) {
      if (position >= route.trafficEndAt) return;
      arrived.push(route);
      const cycle = ((position * route.trafficSpeed + route.trafficPhase) % 2 + 2) % 2;
      const outbound = cycle < 1;
      const linearProgress = outbound ? cycle : 2 - cycle;
      traffic.push({
        route,
        progress: .5 - Math.cos(linearProgress * Math.PI) * .5,
        direction: outbound ? 1 : -1
      });
      const arrivalPulse = Math.max(0, 1 - Math.abs(position - route.arrivalAt) / 10);
      if (arrivalPulse > 0) pulses.push({ route, type: 'arrival', strength: arrivalPulse });
      return;
    }
    active.push({
      route,
      progress: Math.max(0, Math.min(1,
        (position - route.departureAt) / Math.max(1e-6, route.arrivalAt - route.departureAt)
      ))
    });
  });

  return {
    active,
    arrived,
    traffic,
    failed,
    pulses,
    latestEvent,
    activityOpacity,
    operational
  };
}
