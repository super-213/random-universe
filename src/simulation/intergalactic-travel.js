export const fleetStates = Object.freeze({
  none: 0,
  outbound: 1,
  arrived: 2,
  divided: 3,
  lost: -1,
  returned: -2
});

const fleetStateLabels = {
  [fleetStates.none]: '尚未启航',
  [fleetStates.outbound]: '航行中',
  [fleetStates.arrived]: '已抵达',
  [fleetStates.divided]: '途中分化',
  [fleetStates.lost]: '失联',
  [fleetStates.returned]: '返航'
};

export function fleetTravelDuration(distanceMly, speedFractionC, speedOfLightScale = 1) {
  const effectiveSpeed = Math.max(.01, speedFractionC * speedOfLightScale);
  return Math.max(1, distanceMly * 1e6 / effectiveSpeed);
}

export function fleetProgress(time, departureAt, arrivalAt) {
  if (!Number.isFinite(departureAt) || !Number.isFinite(arrivalAt)) return 0;
  return Math.max(0, Math.min(1, (time - departureAt) / Math.max(1, arrivalAt - departureAt)));
}

export function shuttleTrafficAt(simulationTime, phase = 0, cyclesPerTimeUnit = .025) {
  const cycle = ((simulationTime * cyclesPerTimeUnit + phase) % 2 + 2) % 2;
  const outbound = cycle < 1;
  const linearProgress = outbound ? cycle : 2 - cycle;
  return {
    progress: .5 - Math.cos(linearProgress * Math.PI) * .5,
    direction: outbound ? 1 : -1
  };
}

export function routeTrafficProfile({
  established = true,
  throughput = 0,
  population = 0,
  stability = 0,
  technology = 0
} = {}) {
  if (!established) return { cyclesPerTimelineUnit: 0 };

  const populationSignal = Math.max(0, Math.min(1, Math.log10(1 + Math.max(0, population))));
  const activity = Math.max(0, Math.min(1,
    throughput * .46
      + stability * .2
      + technology * .2
      + populationSignal * .14
  ));
  return {
    cyclesPerTimelineUnit: .008 + activity * .02
  };
}

export function routeTrafficSpeedForIdentity(primaryId, secondaryId = 0) {
  const variation = ((
    (Number(primaryId) + 1) * .61803398875
      + (Number(secondaryId) + 1) * .41421356237
  ) % 1 + 1) % 1;
  return .006 + variation * .008;
}

export function intergalacticRouteOperational({
  hasDestination = false,
  civilizationActive = false,
  fleetState = fleetStates.none,
  externalPopulation = 0,
  routesFormed = false,
  fatePhase = 0
} = {}) {
  return Boolean(
    hasDestination
      && civilizationActive
      && (fleetState === fleetStates.outbound || externalPopulation > .01)
      && routesFormed
      && fatePhase < .08
  );
}

export function visibleShipCountForRoutes(routeCount, routesPerShip = 5) {
  if (!Number.isFinite(routeCount) || routeCount <= 0) return 0;
  return Math.ceil(routeCount / Math.max(1, routesPerShip));
}

export function stableRouteAssignments(
  activeRouteKeys,
  previousAssignments = [],
  routesPerShip = 5
) {
  const targetCount = visibleShipCountForRoutes(activeRouteKeys.length, routesPerShip);
  if (!targetCount) return [];

  const activeKeys = new Set(activeRouteKeys);
  const assignments = previousAssignments
    .filter((key) => activeKeys.has(key))
    .slice(0, targetCount);
  const assignedKeys = new Set(assignments);
  const preferredKeys = activeRouteKeys.filter((_, index) => index % routesPerShip === 0);

  for (const key of [...preferredKeys, ...activeRouteKeys]) {
    if (assignments.length >= targetCount) break;
    if (assignedKeys.has(key)) continue;
    assignments.push(key);
    assignedKeys.add(key);
  }
  return assignments;
}

export function fleetStateLabel(state) {
  return fleetStateLabels[state] || fleetStateLabels[0];
}
