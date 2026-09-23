import test from 'node:test';
import assert from 'node:assert/strict';
import {
  cosmicLogYearsToTimelinePosition,
  cosmicTimeLabel,
  cosmicYearsToTimelinePosition,
  referenceFutureYearsAtTimelinePosition,
  selectTimelineNarrative,
  timelinePositionToCosmicLogYears,
  timelinePositionToCosmicYears
} from '../src/domain/cosmic-time.js';
import { erasForUniverse } from '../src/domain/catalog.js';
import {
  createUniverse,
  estimatePresentAgeYears,
  stellarEndTimelinePosition,
  stellarFormationEndTimelinePosition
} from '../src/domain/universe.js';
import { createSeededRandom } from '../src/domain/random.js';
import { createLocalGalaxyGroup } from '../src/domain/local-group.js';
import {
  cosmicGalaxyPositionAt,
  createCosmicWebModel
} from '../src/domain/cosmic-web.js';
import {
  createStellarDawnModel,
  STELLAR_DAWN_END,
  STELLAR_DAWN_START
} from '../src/domain/stellar-dawn.js';
import {
  createStellarPopulation,
  galacticNuclearRisk
} from '../src/domain/stellar-population.js';
import { createStellarGravityState } from '../src/simulation/black-hole-gravity.js';
import {
  buildCivilizationSimulation,
  civilizationDeclineWindow
} from '../src/simulation/civilization.js';
import {
  civilizationEventTypes,
  createCivilizationEventPlan
} from '../src/simulation/civilization-events.js';
import {
  blackHoleEvaporationExponent,
  blackHoleMassFromSimulation,
  selectBlackHoleMergerPair,
  selectBlackHoleProgenitors
} from '../src/simulation/compact-objects.js';
import { expandEventSchedule } from '../src/simulation/event-occurrence.js';
import { createRareEventPlan, rareEventTypes } from '../src/simulation/rare-events.js';
import {
  blackHoleRecoilKms,
  createTransientSimulation,
  stellarCollapseVisualState,
  tidalDisruptionVisualState
} from '../src/simulation/transient-events.js';
import { blackHoleMergerVisualState } from '../src/simulation/black-hole-gravity.js';
import { civilizationHistory, historyExportPayload } from '../src/ui/civilization-chronicle.js';
import {
  clusterTimelineEvents,
  nearestTimelineEvent,
  timelineDetailWindow,
  timelinePercentAt,
  timelinePositionAtPercent,
  zoomTimelineViewport
} from '../src/ui/timeline-layout.js';
import { civilizationObservation } from '../src/simulation/observation.js';
import {
  fleetTravelDuration,
  fleetStates,
  intergalacticRouteOperational,
  routeTrafficProfile,
  routeTrafficSpeedForIdentity,
  shuttleTrafficAt,
  stableRouteAssignments,
  visibleShipCountForRoutes
} from '../src/simulation/intergalactic-travel.js';
import {
  cosmicCivilizationSummaryAt,
  cosmicCivilizationStateAt,
  createCosmicCivilizationPlan
} from '../src/simulation/cosmic-civilizations.js';
import { obstacleAvoidingPathPoints } from '../src/simulation/ship-navigation.js';
import { applyCivilizationSnapshot } from '../src/rendering/civilizations.js';
import {
  formatTimeSpeed,
  snapSpeedExponent,
  speedFromExponent
} from '../src/ui/speed-control.js';
import {
  advanceTechnologyTree,
  technologyBits,
  technologyPath
} from '../src/simulation/technology-tree.js';

const seedFor = (index) => index.toString(36).toUpperCase().padStart(16, '0');

test('cosmic web deterministically fills the observable volume with clusters and filaments', () => {
  const universe = createUniverse(seedFor(71));
  const options = { galaxyCount: 480, clusterCount: 14 };
  const first = createCosmicWebModel(universe, options);
  const second = createCosmicWebModel(universe, options);

  assert.deepEqual(first.positions, second.positions);
  assert.deepEqual(first.formationAt, second.formationAt);
  assert.deepEqual(first.flowVectors, second.flowVectors);
  assert.equal(first.morphology, second.morphology);
  assert.equal(first.currentGalaxyIndex, second.currentGalaxyIndex);
  assert.equal(first.galaxyCount, 480);
  assert.equal(first.clusterCount, 14);
  assert.ok(first.filamentCount >= first.clusterCount - 1);
  for (let index = 0; index < first.galaxyCount; index++) {
    const offset = index * 3;
    const radius = Math.hypot(
      first.positions[offset],
      first.positions[offset + 1],
      first.positions[offset + 2]
    );
    assert.ok(radius <= first.radius + 1e-5);
    assert.ok(first.formationAt[index] > 0);
    assert.ok(first.formationAt[index] < 1000);
  }
  const currentRadius = Math.hypot(...first.currentGalaxyPosition);
  const currentTransverseRadius = Math.hypot(
    first.currentGalaxyPosition[0],
    first.currentGalaxyPosition[1]
  );
  assert.ok(currentRadius >= first.radius * .26);
  assert.ok(currentRadius <= first.radius * .72);
  assert.ok(currentTransverseRadius >= first.radius * .32);
  const initialPosition = cosmicGalaxyPositionAt(first, first.currentGalaxyIndex, 0);
  const laterPosition = cosmicGalaxyPositionAt(first, first.currentGalaxyIndex, 18);
  assert.notDeepEqual(initialPosition, laterPosition);
  assert.deepEqual(
    laterPosition,
    cosmicGalaxyPositionAt(second, second.currentGalaxyIndex, 18)
  );
});

test('cosmic web seeds produce multiple deterministic large-scale morphologies', () => {
  const morphologies = new Set();
  for (let index = 0; index < 18; index++) {
    const universe = createUniverse(seedFor(200 + index));
    morphologies.add(createCosmicWebModel(universe, {
      galaxyCount: 120,
      clusterCount: 10
    }).morphology);
  }
  assert.ok(morphologies.size >= 3);
});

test('observable-universe civilizations always produce deterministic intergalactic travel', () => {
  const universe = createUniverse(seedFor(73));
  const web = createCosmicWebModel(universe, { galaxyCount: 720, clusterCount: 16 });
  const first = createCosmicCivilizationPlan(universe, web, { routeCount: 44 });
  const second = createCosmicCivilizationPlan(universe, web, { routeCount: 44 });

  assert.deepEqual(first, second);
  assert.equal(first.routes.length, 44);
  assert.ok(first.routes.every((route) => route.sourceIndex !== route.targetIndex));
  assert.ok(first.routes.every((route) => route.arrivalAt >= route.departureAt));
  assert.ok(first.routes.every((route) => route.trafficEndAt <= first.civilizationEndAt));
  assert.ok(first.civilizationDeclineAt < first.civilizationEndAt);
  const firstDeparture = Math.min(...first.routes.map((route) => route.departureAt));
  const initialActivity = cosmicCivilizationStateAt(first, firstDeparture + .5);
  assert.ok(initialActivity.active.length + initialActivity.arrived.length > 0);
  assert.equal(initialActivity.operational, true);
  const finalActivity = cosmicCivilizationStateAt(first, 1000);
  assert.equal(finalActivity.active.length, 0);
  assert.equal(finalActivity.arrived.length, 0);
  assert.equal(finalActivity.traffic.length, 0);
  assert.equal(finalActivity.pulses.length, 0);
  assert.equal(finalActivity.activityOpacity, 0);
  assert.equal(finalActivity.operational, false);
});

test('observable-universe summary reports civilizations, occupied galaxies, and active fleets', () => {
  const universe = createUniverse(seedFor(74));
  const web = createCosmicWebModel(universe, { galaxyCount: 720, clusterCount: 16 });
  const plan = createCosmicCivilizationPlan(universe, web, { routeCount: 44 });
  const firstDeparture = Math.min(...plan.routes.map((route) => route.departureAt));
  const active = cosmicCivilizationSummaryAt(plan, firstDeparture + .5);

  assert.ok(active.civilizations > 0);
  assert.ok(active.occupiedGalaxies >= active.civilizations);
  assert.equal(active.fleets, active.state.active.length + active.state.traffic.length);
  assert.deepEqual(cosmicCivilizationSummaryAt(plan, 1000), {
    civilizations: 0,
    occupiedGalaxies: 0,
    fleets: 0,
    state: cosmicCivilizationStateAt(plan, 1000)
  });
});

test('time speed uses a logarithmic range with deliberate snap points', () => {
  assert.equal(speedFromExponent(-2), .01);
  assert.equal(speedFromExponent(0), 1);
  assert.equal(speedFromExponent(2), 100);
  assert.equal(snapSpeedExponent(-.96), -1);
  assert.equal(snapSpeedExponent(.95), 1);
  assert.equal(snapSpeedExponent(.9), .9);
  assert.equal(formatTimeSpeed(.01), '0.01×');
  assert.equal(formatTimeSpeed(1), '1×');
  assert.equal(formatTimeSpeed(100), '100×');
});

test('intergalactic shuttle traffic eases between both ends of a route', () => {
  assert.deepEqual(shuttleTrafficAt(0, 0, 1), { progress: 0, direction: 1 });
  const outboundMidpoint = shuttleTrafficAt(.5, 0, 1);
  assert.ok(Math.abs(outboundMidpoint.progress - .5) < Number.EPSILON);
  assert.equal(outboundMidpoint.direction, 1);
  assert.deepEqual(shuttleTrafficAt(1, 0, 1), { progress: 1, direction: -1 });
  const returnMidpoint = shuttleTrafficAt(1.5, 0, 1);
  assert.ok(Math.abs(returnMidpoint.progress - .5) < Number.EPSILON);
  assert.equal(returnMidpoint.direction, -1);
  assert.deepEqual(shuttleTrafficAt(2, 0, 1), { progress: 0, direction: 1 });
});

test('intergalactic travel duration is measured in physical years', () => {
  assert.equal(fleetTravelDuration(2, .25), 8e6);
  assert.equal(fleetTravelDuration(2, .25, 2), 4e6);
});

test('ship traffic is limited to one visible ship per five routes', () => {
  assert.deepEqual(routeTrafficProfile({ established: false }), {
    cyclesPerTimelineUnit: 0
  });

  const quietRoute = routeTrafficProfile({ established: true });
  const busyRoute = routeTrafficProfile({
    established: true,
    throughput: 1,
    population: 10,
    stability: 1,
    technology: 1
  });
  assert.ok(busyRoute.cyclesPerTimelineUnit > quietRoute.cyclesPerTimelineUnit);
  assert.equal(
    routeTrafficSpeedForIdentity(4, 12),
    routeTrafficSpeedForIdentity(4, 12)
  );
  assert.notEqual(
    routeTrafficSpeedForIdentity(4, 12),
    routeTrafficSpeedForIdentity(4, 13)
  );
  assert.ok(routeTrafficSpeedForIdentity(4, 12) >= .006);
  assert.ok(routeTrafficSpeedForIdentity(4, 12) <= .014);
  assert.equal(visibleShipCountForRoutes(0), 0);
  assert.equal(visibleShipCountForRoutes(1), 1);
  assert.equal(visibleShipCountForRoutes(5), 1);
  assert.equal(visibleShipCountForRoutes(6), 2);
  assert.equal(visibleShipCountForRoutes(10), 2);
  assert.equal(visibleShipCountForRoutes(12), 3);
});

test('ship traffic keeps stable route assignments as routes change', () => {
  const initialRoutes = Array.from({ length: 12 }, (_, index) => `route-${index}`);
  const initialAssignments = stableRouteAssignments(initialRoutes, [], 5);
  assert.deepEqual(initialAssignments, ['route-0', 'route-5', 'route-10']);

  const reorderedRoutes = [
    'route-new',
    ...initialRoutes.filter((key) => key !== 'route-3')
  ];
  assert.deepEqual(
    stableRouteAssignments(reorderedRoutes, initialAssignments, 5),
    initialAssignments
  );

  const removedAssignedRoute = reorderedRoutes.filter((key) => key !== 'route-5');
  const replacementAssignments = stableRouteAssignments(
    removedAssignedRoute,
    initialAssignments,
    5
  );
  assert.deepEqual(replacementAssignments.slice(0, 2), ['route-0', 'route-10']);
  assert.equal(replacementAssignments.length, 3);
  assert.ok(removedAssignedRoute.includes(replacementAssignments[2]));
});

test('intergalactic ships disappear when their civilization is extinct', () => {
  const activeRoute = {
    hasDestination: true,
    civilizationActive: true,
    fleetState: fleetStates.arrived,
    externalPopulation: 2.4,
    routesFormed: true,
    fatePhase: 0
  };

  assert.equal(intergalacticRouteOperational(activeRoute), true);
  assert.equal(intergalacticRouteOperational({
    ...activeRoute,
    civilizationActive: false
  }), false);
  assert.equal(intergalacticRouteOperational({
    ...activeRoute,
    civilizationActive: false,
    fleetState: fleetStates.outbound
  }), false);
  assert.equal(intergalacticRouteOperational({
    ...activeRoute,
    fleetState: fleetStates.lost,
    externalPopulation: 0
  }), false);
});

test('civilization rendering preserves permanent node identities for ship routes', () => {
  const civilizationData = Array.from({ length: 2 }, () => ({
    displayCount: 0,
    hostNodeIndices: new Uint16Array(4),
    hostRemnantIndices: new Uint16Array(4)
  }));
  const drawRanges = [];
  const civilizationGroups = Array.from({ length: 2 }, (_, index) => ({
    geometry: {
      setDrawRange(start, count) {
        drawRanges[index] = [start, count];
      }
    }
  }));

  applyCivilizationSnapshot(
    { owners: new Int16Array([0, -1, 1, 0]) },
    {
      civilizationSimulation: {
        habitatRemnantIndices: new Uint16Array([10, 11, 12, 13])
      },
      civilizationData,
      civilizationGroups
    }
  );

  assert.deepEqual([...civilizationData[0].hostNodeIndices.slice(0, 2)], [0, 3]);
  assert.deepEqual([...civilizationData[0].hostRemnantIndices.slice(0, 2)], [10, 13]);
  assert.deepEqual([...civilizationData[1].hostNodeIndices.slice(0, 1)], [2]);
  assert.deepEqual(drawRanges, [[0, 2], [0, 1]]);
});

test('ship navigation adds deterministic detours around simulated obstacles', () => {
  const start = [-4, 0, 0];
  const end = [4, 0, 0];
  const obstacle = { position: [0, 0, 0], radius: 1 };
  const clearPath = obstacleAvoidingPathPoints(start, end, []);
  const detourPath = obstacleAvoidingPathPoints(start, end, [obstacle], { clearance: .5 });

  assert.deepEqual(clearPath, [start, end]);
  assert.equal(detourPath.length, 3);
  assert.deepEqual(
    detourPath,
    obstacleAvoidingPathPoints(start, end, [obstacle], { clearance: .5 })
  );
  assert.ok(Math.hypot(...detourPath[1]) > obstacle.radius + .5);
});

test('timeline events cluster by rendered pixel distance using their impact time', () => {
  const events = [
    { id: 'a', start: 40, impactAt: 100, duration: 80 },
    { id: 'b', start: 90, impactAt: 106, duration: 30 },
    { id: 'c', start: 260, impactAt: 300, duration: 60 }
  ];
  const groups = clusterTimelineEvents(events, 1000, 14);

  assert.deepEqual(groups.map((group) => group.entries.map((entry) => entry.event.id)), [
    ['a', 'b'],
    ['c']
  ]);
  assert.equal(groups[0].position, 103);
  assert.ok(groups[1].x - groups[0].x >= 14);
});

test('timeline detail windows include event duration and impact with usable padding', () => {
  const window = timelineDetailWindow([
    { start: 100, duration: 20, impactAt: 114 },
    { start: 108, duration: 40, impactAt: 126 }
  ]);

  assert.ok(window.start < 100);
  assert.ok(window.end > 148);
  assert.equal(window.span, window.end - window.start);
});

test('timeline viewport zoom preserves its pointer anchor and clamps at boundaries', () => {
  const centered = zoomTimelineViewport({ start: 0, end: 1000 }, 400, .5);
  assert.deepEqual(centered, { start: 200, end: 700 });
  assert.equal(timelinePercentAt(400, centered), 40);
  assert.equal(timelinePositionAtPercent(40, centered), 400);

  const nearStart = zoomTimelineViewport({ start: 0, end: 200 }, 10, .1, 60);
  assert.equal(nearStart.end - nearStart.start, 60);
  assert.ok(nearStart.start >= 0);

  const reset = zoomTimelineViewport(centered, 400, 100);
  assert.deepEqual(reset, { start: 0, end: 1000 });
});

test('timeline snapping selects only an event inside the release tolerance', () => {
  const events = [
    { start: 120, impactAt: 125 },
    { start: 148 },
    { start: 190, impactAt: 175 }
  ];
  assert.deepEqual(nearestTimelineEvent(events, 170, 8), {
    event: events[2],
    index: 2,
    position: 175,
    distance: 5
  });
  assert.equal(nearestTimelineEvent(events, 160, 8), null);
});

test('finite cosmic outcomes map continuously through the full future timeline', () => {
  const universe = Array.from({ length: 200 }, (_, index) => createUniverse(seedFor(index)))
    .find((candidate) => Number.isFinite(candidate.cosmicFate.outcomeYears));
  assert.ok(universe);
  const { cosmicFate } = universe;
  const nearOutcomeYears = cosmicFate.outcomeYears * (1 - 1e-9);
  const nearOutcomePosition = cosmicYearsToTimelinePosition(nearOutcomeYears, universe);
  assert.ok(nearOutcomePosition > cosmicFate.onsetAt);
  assert.ok(nearOutcomePosition < 1000);
  assert.equal(cosmicYearsToTimelinePosition(cosmicFate.outcomeYears, universe), 1000);
  assert.notEqual(
    cosmicTimeLabel(cosmicFate.onsetAt, universe),
    cosmicTimeLabel(998, universe)
  );
});

test('derived cosmic milestones remain ordered and react to generated constants', () => {
  for (let index = 0; index < 1000; index++) {
    const universe = createUniverse(seedFor(index));
    const milestones = universe.cosmicMilestones;
    assert.ok(milestones.matterRadiationEqualityYears > 180 / 31557600);
    assert.ok(milestones.matterRadiationEqualityYears < milestones.recombinationYears);
    assert.ok(milestones.recombinationYears < milestones.firstStarsYears);
    assert.ok(milestones.firstStarsYears < milestones.matureGalaxiesYears);
    assert.ok(milestones.matureGalaxiesYears < milestones.presentAgeYears);
    assert.ok(Number.isFinite(universe.cosmicFate.outcomeYears)
      ? universe.cosmicFate.outcomeYears > universe.presentAgeYears
      : true);
  }
});

test('physical milestones and their timeline positions round-trip across the early universe', () => {
  for (let index = 0; index < 100; index++) {
    const universe = createUniverse(seedFor(index));
    assert.ok(Math.abs(cosmicYearsToTimelinePosition(
      universe.cosmicMilestones.matterRadiationEqualityYears,
      universe
    ) - 115) < 1e-8);
    assert.ok(Math.abs(cosmicYearsToTimelinePosition(
      universe.cosmicMilestones.recombinationYears,
      universe
    ) - 145) < 1e-8);
    assert.ok(Math.abs(cosmicYearsToTimelinePosition(
      universe.cosmicMilestones.firstStarsYears,
      universe
    ) - 245) < 1e-8);
    assert.ok(Math.abs(cosmicYearsToTimelinePosition(
      universe.cosmicMilestones.matureGalaxiesYears,
      universe
    ) - 340) < 1e-8);
    assert.ok(Math.abs(cosmicYearsToTimelinePosition(universe.presentAgeYears, universe) - 470) < 1e-8);
    [0, 18, 55, 115, 145, 245, 340, 390, 470, 520, 650, 845, 950].forEach((position) => {
      const years = timelinePositionToCosmicYears(position, universe);
      const roundTrip = cosmicYearsToTimelinePosition(years, universe);
      assert.ok(Math.abs(roundTrip - position) < 1e-5, `${position} round-tripped to ${roundTrip}`);
    });
  }
});

test('the heat-death timeline expands beyond black-hole evaporation in log-year space', () => {
  const universe = Array.from({ length: 200 }, (_, index) => createUniverse(seedFor(index)))
    .find((candidate) => candidate.cosmicFate.type === 'heat-death');
  assert.ok(universe);
  assert.equal(timelinePositionToCosmicLogYears(845, universe), 40);
  assert.equal(timelinePositionToCosmicLogYears(950, universe), universe.blackHoleEvaporationExponent);
  assert.equal(timelinePositionToCosmicLogYears(995, universe), 1200);
  assert.equal(timelinePositionToCosmicLogYears(1000, universe), Infinity);
  const eraNames = erasForUniverse(universe).map((era) => era.name);
  assert.ok(eraNames.includes('暗时代 · 热寂趋近'));
  assert.equal(eraNames.includes('超远未来'), false);

  [100, 308, 1100, 1200, 1600, 5000].forEach((exponent) => {
    const position = cosmicLogYearsToTimelinePosition(exponent, universe);
    const roundTrip = timelinePositionToCosmicLogYears(position, universe);
    assert.ok(Math.abs(roundTrip - exponent) < 1e-7, `${exponent} round-tripped to ${roundTrip}`);
  });
  assert.match(cosmicTimeLabel(cosmicLogYearsToTimelinePosition(1100, universe), universe), /10\^1100 yr/);
  assert.equal(cosmicTimeLabel(1000, universe), 'T→∞ · 渐近热寂');
});

test('stellar entities share formation, lifetime, spectrum, planets, and remnants', () => {
  const universe = Array.from({ length: 200 }, (_, index) => createUniverse(seedFor(index)))
    .find((candidate) => candidate.cosmicFate.type === 'heat-death');
  const positions = new Float32Array(5000 * 3);
  for (let index = 0; index < positions.length / 3; index++) {
    const angle = index * .73;
    const radius = 1 + index % 140 / 10;
    positions[index * 3] = Math.cos(angle) * radius;
    positions[index * 3 + 2] = Math.sin(angle) * radius;
  }
  const first = createStellarPopulation(universe, positions);
  const second = createStellarPopulation(universe, positions);
  const stellarEraDeadline = 10 ** universe.lastStarDeathExponent;

  assert.deepEqual(first.birthAt, second.birthAt);
  assert.deepEqual(first.massSolar, second.massSolar);
  assert.ok(Math.max(...first.birthYears) > 10 ** (universe.stellarFormationEndExponent - .5));
  assert.ok(Math.max(...first.birthAt) > 322);
  for (let index = 0; index < first.birthAt.length; index++) {
    assert.ok(first.deathYears[index] > first.birthYears[index]);
    assert.ok(first.deathYears[index] <= stellarEraDeadline * (1 + Number.EPSILON * 4));
    assert.ok(first.deathAt[index] >= first.birthAt[index]);
    assert.ok(first.temperatureK[index] >= 2300 && first.temperatureK[index] <= 42000);
    assert.ok(first.planetCounts[index] > 0 || first.lifeSignals[index] === 0);
    const expectedRemnant = first.massSolar[index] < 8 ? 1 : first.massSolar[index] < 25 ? 2 : 3;
    assert.equal(first.remnantTypes[index], expectedRemnant);
  }
});

test('galactic nuclear risk falls with distance and expands for an active nucleus', () => {
  const distances = [0, .5, 1, 2, 4.2, 8];
  const quietRisk = distances.map((distance) => galacticNuclearRisk(distance, false));
  const activeRisk = distances.map((distance) => galacticNuclearRisk(distance, true));

  assert.ok(quietRisk[0] > .98);
  assert.equal(activeRisk[0], 1);
  assert.equal(quietRisk.at(-1), 0);
  assert.equal(activeRisk.at(-1), 0);
  for (let index = 1; index < distances.length; index++) {
    assert.ok(quietRisk[index] <= quietRisk[index - 1]);
    assert.ok(activeRisk[index] <= activeRisk[index - 1]);
  }
  assert.ok(activeRisk[1] > quietRisk[1]);
  assert.ok(activeRisk[2] > quietRisk[2]);
  assert.ok(activeRisk[3] > quietRisk[3]);
});

test('stellar habitability includes deterministic galactic nuclear risk', () => {
  const universe = createUniverse(seedFor(318));
  const positions = new Float32Array([
    0, 0, 0,
    .5, 0, 0,
    1, 0, 0,
    2, 0, 0,
    4.2, 0, 0,
    8, 0, 0
  ]);
  const quiet = createStellarPopulation({ ...universe, activeNucleus: false }, positions);
  const active = createStellarPopulation({ ...universe, activeNucleus: true }, positions);

  assert.ok(quiet.nuclearRisk[0] > .98);
  assert.equal(active.nuclearRisk[0], 1);
  assert.equal(active.habitability[0], 0);
  for (let index = 0; index < active.habitability.length; index++) {
    assert.ok(active.habitability[index] <= quiet.habitability[index]);
  }
  assert.equal(active.nuclearRisk.at(-1), 0);
  assert.equal(active.habitability.at(-1), quiet.habitability.at(-1));
});

test('dynamic dark energy participates in the calculated present age', () => {
  const lambdaAge = estimatePresentAgeYears(1, .685, { w0: -1, wa: 0 });
  const quintessenceAge = estimatePresentAgeYears(1, .685, { w0: -.8, wa: 0 });
  const phantomAge = estimatePresentAgeYears(1, .685, { w0: -1.2, wa: 0 });
  assert.ok(Math.abs(lambdaAge - 1.38e10) < 1e6);
  assert.ok(quintessenceAge < lambdaAge);
  assert.ok(phantomAge > lambdaAge);
});

test('black-hole era duration reflects whether a central black hole exists', () => {
  let foundCentral = false;
  let foundStellarOnly = false;
  for (let index = 0; index < 500 && (!foundCentral || !foundStellarOnly); index++) {
    const universe = createUniverse(seedFor(index));
    if (universe.hasCentralBlackHole) {
      foundCentral = true;
      assert.ok(universe.blackHoleEvaporationExponent >= 97);
      assert.ok(universe.blackHoleEvaporationExponent <= 100);
    } else {
      foundStellarOnly = true;
      assert.ok(universe.blackHoleEvaporationExponent >= 67);
      assert.ok(universe.blackHoleEvaporationExponent <= 70);
    }
  }
  assert.equal(foundCentral, true);
  assert.equal(foundStellarOnly, true);
});

test('early-era descriptions use each universe physical milestones', () => {
  const first = createUniverse(seedFor(1));
  const second = Array.from({ length: 100 }, (_, index) => createUniverse(seedFor(index + 2)))
    .find((candidate) => Math.abs(
      candidate.cosmicMilestones.recombinationYears
        - first.cosmicMilestones.recombinationYears
    ) > 1e5);
  assert.ok(second);
  assert.notEqual(erasForUniverse(first)[2].description, erasForUniverse(second)[2].description);
  assert.notEqual(erasForUniverse(first)[3].description, erasForUniverse(second)[3].description);
  assert.equal(erasForUniverse(first)[3].name, '恒星时代 · 宇宙黎明');
});

test('proton decay and stable-proton futures are deterministic exclusive branches', () => {
  const universes = Array.from({ length: 500 }, (_, index) => createUniverse(seedFor(index)));
  const decayUniverses = universes.filter((universe) => Number.isFinite(universe.protonDecayExponent));
  const stableUniverses = universes.filter((universe) => !Number.isFinite(universe.protonDecayExponent));
  assert.ok(decayUniverses.length > 0);
  assert.ok(stableUniverses.length > 0);
  assert.ok(decayUniverses.every((universe) => (
    universe.protonDecayExponent >= 34.5 && universe.protonDecayExponent <= 49
  )));
  assert.equal(
    createUniverse(decayUniverses[0].seed).protonDecayExponent,
    decayUniverses[0].protonDecayExponent
  );
});

test('stellar dawn ignites deterministically from staggered local sites', () => {
  const positions = new Float32Array(600 * 3);
  for (let index = 0; index < 600; index++) {
    const radius = 1 + index / 600 * 12;
    const angle = index * .73;
    positions[index * 3] = Math.cos(angle) * radius;
    positions[index * 3 + 1] = Math.sin(index * .19) * .8;
    positions[index * 3 + 2] = Math.sin(angle) * radius;
  }

  const first = createStellarDawnModel('TESTDAWN00000000', positions);
  const second = createStellarDawnModel('TESTDAWN00000000', positions);
  assert.deepEqual(first.birthAt, second.birthAt);
  assert.deepEqual(first.formationOrigins, second.formationOrigins);
  assert.deepEqual(first.sites, second.sites);
  assert.ok(Math.min(...first.birthAt) > STELLAR_DAWN_START);
  assert.ok(Math.max(...first.birthAt) < STELLAR_DAWN_END);
  assert.ok(Math.max(...first.birthAt) - Math.min(...first.birthAt) > 30);
  assert.ok(first.sites.length > 1);
});

test('generated stellar and fate eras stay ordered without fixed-era gaps', () => {
  for (let index = 0; index < 1000; index++) {
    const universe = createUniverse(seedFor(index));
    const formationEnd = stellarFormationEndTimelinePosition(universe);
    const stellarEnd = stellarEndTimelinePosition(universe);
    assert.ok(formationEnd <= stellarEnd);
    const boundaries = erasForUniverse(universe).map((era) => era.until);
    assert.ok(boundaries.every((boundary, eraIndex) => (
      eraIndex === 0 || boundary > boundaries[eraIndex - 1]
    )));
    assert.equal(boundaries.at(-1), 1001);
  }
});

test('far-future processes are remapped from physical years in finite universes', () => {
  const heatDeathUniverse = Array.from({ length: 200 }, (_, index) => createUniverse(seedFor(index)))
    .find((candidate) => candidate.cosmicFate.type === 'heat-death');
  [500, 620, 710, 845, 930].forEach((position) => {
    const years = referenceFutureYearsAtTimelinePosition(position, heatDeathUniverse);
    assert.ok(Math.abs(cosmicYearsToTimelinePosition(years, heatDeathUniverse) - position) < 1e-8);
  });

  const finiteUniverse = Array.from({ length: 200 }, (_, index) => createUniverse(seedFor(index)))
    .find((candidate) => candidate.cosmicFate.outcomeExponent < 19);
  assert.ok(finiteUniverse);
  const degenerateProcessYears = referenceFutureYearsAtTimelinePosition(710, finiteUniverse);
  assert.equal(cosmicYearsToTimelinePosition(degenerateProcessYears, finiteUniverse), 1000);
});

test('civilizations decline when stellar energy ends even if a finite fate comes later', () => {
  const universe = Array.from({ length: 5000 }, (_, index) => createUniverse(seedFor(index)))
    .find((candidate) => (
      candidate.cosmicFate.type !== 'heat-death'
      && candidate.cosmicFate.onsetAt > stellarEndTimelinePosition(candidate) + 10
    ));
  assert.ok(universe);
  const window = civilizationDeclineWindow(universe);
  assert.ok(window.energyStart < window.fateStart);
  assert.ok(window.energyEnd < 1000);
});

test('stellar exhaustion does not run before an earlier finite outcome', () => {
  const universe = Array.from({ length: 500 }, (_, index) => createUniverse(seedFor(index)))
    .find((candidate) => (
      candidate.cosmicFate.type !== 'heat-death'
      && candidate.cosmicFate.outcomeExponent <= candidate.lastStarDeathExponent
    ));
  assert.ok(universe);
  const window = civilizationDeclineWindow(universe);
  assert.equal(window.energyStart, Infinity);
  assert.equal(window.energyEnd, Infinity);
  assert.ok(Number.isFinite(window.fateStart));
});

test('finite cosmic decline overcomes recovery before the final timeline frame', () => {
  const universe = createUniverse('0000-0000-0000-000E');
  assert.equal(universe.cosmicFate.type, 'big-crunch');
  const habitatCount = 48;
  const habitatPositions = new Float32Array(habitatCount * 3);
  for (let index = 0; index < habitatCount; index++) {
    habitatPositions[index * 3] = Math.cos(index / habitatCount * Math.PI * 2) * 4;
    habitatPositions[index * 3 + 2] = Math.sin(index / habitatCount * Math.PI * 2) * 4;
  }
  const simulation = {
    start: 390,
    end: 1000,
    step: 1,
    habitatRemnantIndices: Uint16Array.from(
      { length: habitatCount },
      (_, index) => index
    ),
    habitatPositions,
    adjacency: [],
    snapshots: []
  };
  buildCivilizationSimulation({
    universe,
    civilizationData: [
      {
        name: '脆弱文明', birth: 400, homeNodeIndex: 0,
        aggression: 0, cooperation: 1, expansionRate: 1, resilience: .68,
        technology: .4, visibility: .1, cohesion: .8, machineAutonomy: .2,
        morphology: '生物共同体'
      },
      {
        name: '韧性文明', birth: 400, homeNodeIndex: 24,
        aggression: 0, cooperation: 1, expansionRate: 1, resilience: 1.32,
        technology: .4, visibility: .1, cohesion: .8, machineAutonomy: .2,
        morphology: '生物共同体'
      }
    ],
    civilizationSimulation: simulation,
    cosmicEvents: []
  });

  const declineWindow = civilizationDeclineWindow(universe);
  const onset = simulation.snapshots.find((snapshot) => (
    snapshot.time === Math.ceil(declineWindow.fateStart)
  ));
  const declining = simulation.snapshots.find((snapshot) => snapshot.time === 925);
  const fragileLastActive = simulation.snapshots.filter((snapshot) => snapshot.active[0]).at(-1);
  const resilientLastActive = simulation.snapshots.filter((snapshot) => snapshot.active[1]).at(-1);
  assert.equal(onset.active[0], 1);
  assert.ok(declining.infrastructureCapacity[0] < onset.infrastructureCapacity[0]);
  assert.ok(declining.energyReserves[0] < onset.energyReserves[0]);
  assert.ok(fragileLastActive.time > declineWindow.fateStart);
  assert.ok(resilientLastActive.time > fragileLastActive.time);
  assert.ok(resilientLastActive.time < 1000);
  assert.equal(simulation.snapshots.at(-2).active[0], 0);
  assert.equal(simulation.snapshots.at(-2).active[1], 0);
});

test('a colony is removed when its host star reaches the shared death time', () => {
  const universe = Array.from({ length: 200 }, (_, index) => createUniverse(seedFor(index)))
    .find((candidate) => candidate.cosmicFate.type === 'heat-death');
  const simulation = {
    start: 390,
    end: 420,
    step: 1,
    habitatRemnantIndices: new Uint16Array([0]),
    habitatStarIndices: new Uint16Array([7]),
    habitatBirthAt: new Float32Array([300]),
    habitatDeathAt: new Float32Array([405]),
    habitatPositions: new Float32Array([0, 0, 0]),
    adjacency: [],
    snapshots: []
  };
  buildCivilizationSimulation({
    universe,
    civilizationData: [{
      name: '宿主测试文明',
      birth: 390,
      homeNodeIndex: 0,
      aggression: .2,
      cooperation: .8,
      expansionRate: 1,
      resilience: 1,
      technology: .5,
      visibility: .1,
      cohesion: .7,
      machineAutonomy: .2,
      morphology: '生物共同体',
      fermiScenario: '稀有生物圈'
    }],
    civilizationSimulation: simulation,
    cosmicEvents: []
  });

  assert.equal(simulation.snapshots.find((snapshot) => snapshot.time === 404).owners[0], 0);
  const expired = simulation.snapshots.find((snapshot) => snapshot.time === 405);
  assert.equal(expired.owners[0], -1);
  assert.equal(expired.causes[0], '宿主恒星寿命终结');
});

test('finite fate narrative overrides local events after the terminal phase begins', () => {
  const universe = Array.from({ length: 200 }, (_, index) => createUniverse(seedFor(index)))
    .find((candidate) => candidate.cosmicFate.type !== 'heat-death');
  const narrative = selectTimelineNarrative({
    position: universe.cosmicFate.onsetAt + 1,
    label: '终局',
    universe,
    activeEvent: {
      id: 'late-event', impactAt: 0, label: '局部事件', message: '不应覆盖终局', outcome: '结束'
    },
    activeRelationship: null,
    ascendedSpecies: 0,
    activeSpecies: 0,
    civilizationData: []
  });
  assert.ok(narrative.key.startsWith('fate-'));
});

test('tracked civilization samples are explicit and never exceed the estimate floor', () => {
  for (let index = 0; index < 1000; index++) {
    const universe = createUniverse(seedFor(index));
    assert.ok(universe.trackedSpeciesCount >= 5 && universe.trackedSpeciesCount <= 15);
    assert.equal(universe.trackedSpeciesCount, universe.speciesCount);
    assert.equal(universe.civilizations, Math.max(
      universe.estimatedCivilizations,
      universe.trackedSpeciesCount
    ));
  }
});

test('event occurrence models can produce zero counts without forcing a Poisson process', () => {
  const universe = createUniverse('EVNTMODL00000001');
  const neverRandom = () => .999999;
  const absent = expandEventSchedule([
    {
      type: 'independent', label: '独立稀有事件', start: 400, duration: 10,
      occurrenceModel: 'poisson', expectedOccurrences: 0, maximumOccurrences: 3
    },
    {
      type: 'conditional', label: '条件事件', start: 420, duration: 10,
      occurrenceModel: 'bernoulli', occurrenceProbability: .2
    },
    {
      type: 'renewal', label: '有恢复期事件', start: 440, duration: 10,
      occurrenceModel: 'renewal', occurrenceProbability: .2,
      repeatProbability: .8, maximumOccurrences: 3
    }
  ], universe, neverRandom);
  assert.deepEqual(absent, []);

  const deterministic = expandEventSchedule([
    {
      type: 'milestone', label: '状态里程碑', start: 500, duration: 10,
      occurrenceModel: 'deterministic'
    }
  ], universe, neverRandom);
  assert.equal(deterministic.length, 1);
});

test('event occurrence sampling preserves one required occurrence and bounded repeats', () => {
  const universe = createUniverse('EVNT-RATE-0000-0001');
  const schedule = expandEventSchedule([
    { type: 'nova', label: '新星', start: 300, duration: 20, repeatRate: 10, maximumOccurrences: 3 },
    { type: 'rare', label: '稀有事件', start: 500, duration: 20 }
  ], universe, createSeededRandom(universe.seed, 999));
  const novaEvents = schedule.filter((event) => event.type === 'nova');
  const rareEvents = schedule.filter((event) => event.type === 'rare');
  assert.ok(novaEvents.length >= 1 && novaEvents.length <= 3);
  assert.equal(rareEvents.length, 1);
  assert.ok(schedule.every((event) => event.start + event.duration <= 998));
});

test('optional events can be absent without changing required event behavior', () => {
  const universe = createUniverse('EVNT-OPTL-0000-0001');
  const schedule = expandEventSchedule([
    { type: 'never', label: '不发生', start: 420, duration: 20, occurrenceProbability: 0 },
    { type: 'required', label: '必然事件', start: 460, duration: 20 }
  ], universe, createSeededRandom(universe.seed, 1002));
  assert.deepEqual(schedule.map((event) => event.type), ['required']);
});

test('rare observations are seeded and require simulated sources or causal precursors', () => {
  const seen = new Set();
  let foundIncompleteUniverse = false;
  for (let seedIndex = 0; seedIndex < 180; seedIndex++) {
    const universe = createUniverse(seedFor(seedIndex + 2400));
    const starCount = 2200;
    const positions = new Float32Array(starCount * 3);
    for (let index = 0; index < starCount; index++) {
      const angle = index * 2.399963;
      const radius = .1 + 9 * Math.sqrt((index + .5) / starCount);
      positions[index * 3] = Math.cos(angle) * radius;
      positions[index * 3 + 1] = Math.sin(index * .17) * .3;
      positions[index * 3 + 2] = Math.sin(angle) * radius;
    }
    const population = createStellarPopulation(universe, positions);
    const civilizationData = [{
      name: '测试文明',
      birth: 400,
      technology: .5,
      visibility: .08,
      fermiScenario: '短暂技术窗口',
      homeNodeIndex: 0
    }];
    const civilizationEvents = [
      {
        id: 'stable-engineering', type: 'stellar-engineering', impactAt: 500,
        targetSpeciesIndex: 0, engineeringStable: true
      },
      { id: 'known-signal', type: 'first-signal', impactAt: 490, targetSpeciesIndex: 0 },
      {
        id: 'known-fleet', type: 'intergalactic-diaspora', impactAt: 540,
        targetSpeciesIndex: 0, fleetSpeed: .32
      },
      {
        id: 'stable-digital', type: 'digital-migration', impactAt: 510,
        targetSpeciesIndex: 0, migrationStable: true
      }
    ];
    const input = {
      universe,
      localGroup: createLocalGalaxyGroup(universe.seed, '测试主星系'),
      stellarPopulation: population,
      starPositions: positions,
      civilizationData,
      civilizationEvents,
      civilizationSimulation: {
        habitatRemnantIndices: Uint16Array.from({ length: 12 }, (_, index) => index),
        habitatPositions: positions.slice(0, 36)
      }
    };
    const first = createRareEventPlan(input);
    const second = createRareEventPlan(input);
    assert.deepEqual(first, second);
    const generatedTypes = new Set(first.map((event) => event.type));
    if (universe.cosmicFate.type === 'heat-death') {
      assert.equal(
        generatedTypes.has('proton-decay-era'),
        Number.isFinite(universe.protonDecayExponent)
      );
      assert.equal(
        generatedTypes.has('proton-decay-era') && generatedTypes.has('black-dwarf-supernova'),
        false
      );
    }
    if (first.length < rareEventTypes.length) foundIncompleteUniverse = true;
    first.forEach((event) => {
      seen.add(event.type);
      assert.equal(event.markerVisual, true);
      assert.ok(event.start + event.duration < (
        universe.cosmicFate.type === 'heat-death' ? 1000 : universe.cosmicFate.onsetAt
      ));
      if (event.type === 'fast-radio-burst') {
        assert.equal(population.remnantTypes[event.sourceIndex], 2);
        assert.ok(population.deathAt[event.sourceIndex] <= event.start);
      } else if (event.type === 'x-ray-binary-outburst') {
        assert.ok([2, 3].includes(population.remnantTypes[event.sourceIndex]));
        assert.ok(population.deathAt[event.sourceIndex] <= event.start);
      } else if (event.type === 'pulsar-nulling') {
        assert.equal(population.remnantTypes[event.sourceIndex], 2);
        assert.ok(population.deathAt[event.sourceIndex] <= event.start);
      } else if (event.type === 'white-dwarf-collision') {
        assert.equal(population.remnantTypes[event.sourceIndex], 1);
        assert.ok(population.deathAt[event.sourceIndex] <= event.start);
      } else if (event.type === 'gravitational-microlensing') {
        assert.ok(population.remnantTypes[event.sourceIndex] > 0);
        assert.ok(Number.isInteger(event.backgroundSourceIndex));
        assert.ok(event.projectedSeparation < .055);
      } else if (event.type === 'rogue-planet-microlensing') {
        assert.ok(event.lensMassEarth > 0);
        assert.ok(event.durationHours >= 1.5);
        assert.ok(event.peakMagnification > 1);
      } else if (event.type === 'interstellar-object-flyby') {
        assert.ok(event.eccentricity > 1);
        assert.ok(event.speedKms > 0);
      } else if (event.type === 'cosmic-string-lensing-candidate') {
        assert.equal(event.confidence, 'cosmology-hypothesis');
        assert.ok(event.imageSeparationArcsec > 0);
      } else if (event.type === 'anomalous-transit') {
        assert.ok(population.planetCounts[event.sourceIndex] >= 3);
      } else if (event.type === 'infrared-waste-heat') {
        assert.equal(event.sourceEventId, 'stable-engineering');
      } else if (event.type === 'megastructure-occultation') {
        assert.equal(event.sourceEventId, 'stable-engineering');
      } else if (event.type === 'civilization-signal-silence') {
        assert.equal(event.sourceEventId, 'known-signal');
      } else if (['narrowband-signal-drift', 'optical-laser-beacon'].includes(event.type)) {
        assert.equal(event.sourceEventId, 'known-signal');
      } else if (event.type === 'relativistic-fleet-trail') {
        assert.equal(event.sourceEventId, 'known-fleet');
      } else if (event.type === 'deep-time-memory-reunion') {
        assert.equal(event.sourceEventId, 'known-fleet');
        assert.ok(event.memoryConflictFraction > 0);
      } else if (event.type === 'stellar-engine-proper-motion') {
        assert.equal(event.sourceEventId, 'stable-engineering');
        assert.equal(event.confidence, 'science-fiction');
        assert.ok(Math.abs(Math.hypot(...event.driftDirection) - 1) < 1e-9);
      } else if (event.type === 'planetary-impact') {
        assert.equal(event.targetSpeciesIndex, 0);
        assert.equal(event.targetNodeIndex, 0);
      } else if (['runaway-greenhouse', 'snowball-climate-cycle'].includes(event.type)) {
        assert.match(event.sourceEventId, /^rare-planetary-impact-/);
        assert.equal(event.targetSpeciesIndex, 0);
      } else if (event.type === 'biosignature-loss') {
        assert.match(event.sourceEventId, /^rare-(runaway-greenhouse|snowball-climate-cycle)-/);
      } else if (event.type === 'lithopanspermia-transfer') {
        assert.match(event.sourceEventId, /^rare-planetary-impact-/);
        assert.equal(event.confidence, 'astrobiology-model');
        assert.equal(event.category, 'civilization');
        assert.notEqual(event.targetNodeIndex, event.originNodeIndex);
        assert.equal(typeof event.landingViable, 'boolean');
      } else if (event.type === 'aestivation-awakening') {
        assert.equal(event.sourceEventId, 'stable-digital');
        assert.equal(universe.cosmicFate.type, 'heat-death');
        assert.ok(event.dormancyAt > civilizationEvents[3].impactAt);
        assert.ok(event.dormancyAt < event.start);
      } else if (['proton-decay-era', 'galactic-evaporation', 'hawking-final-burst', 'black-dwarf-supernova', 'last-observable-signal'].includes(event.type)) {
        assert.equal(universe.cosmicFate.type, 'heat-death');
        if (event.type === 'proton-decay-era') {
          assert.ok(Math.abs(
            Math.log10(event.physicalStartYears) - universe.protonDecayExponent
          ) < 1e-8);
        } else if (event.type === 'hawking-final-burst' && !universe.hasCentralBlackHole) {
          assert.equal(population.remnantTypes[event.sourceIndex], 3);
        } else if (event.type === 'black-dwarf-supernova') {
          assert.equal(Number.isFinite(universe.protonDecayExponent), false);
          assert.ok(event.physicalStartLogYears >= 1080);
          assert.ok(event.physicalStartLogYears <= 1120);
        }
      } else if (['agn-jet-reorientation', 'black-hole-state-transition', 'black-hole-photon-ring-flare'].includes(event.type)) {
        assert.equal(universe.hasCentralBlackHole, true);
      } else if (event.type === 'last-star-extinction') {
        assert.ok(universe.cosmicFate.type === 'heat-death'
          || 10 ** universe.lastStarDeathExponent < universe.cosmicFate.onsetYears);
      }
    });
  }

  rareEventTypes.filter((type) => type !== 'failed-supernova').forEach((type) => {
    assert.equal(seen.has(type), true, `${type} should occur for at least one compatible seed`);
  });
  assert.equal(foundIncompleteUniverse, true);
  assert.equal(rareEventTypes.includes('failed-supernova'), true);
});

test('speculative civilization event plans are seeded, conditional, and cover every event family', () => {
  const habitatPositions = new Float32Array(90 * 3);
  for (let index = 0; index < 90; index++) {
    habitatPositions[index * 3] = Math.cos(index * .71) * (2 + index * .03);
    habitatPositions[index * 3 + 1] = Math.sin(index * .19);
    habitatPositions[index * 3 + 2] = Math.sin(index * .71) * (2 + index * .03);
  }
  const seen = new Set();
  const fleetOutcomes = new Set();
  let gatewayEvents = 0;
  let foundConditionalAbsence = false;
  let totalPlannedEvents = 0;
  for (let seedIndex = 0; seedIndex < 300; seedIndex++) {
    const universe = createUniverse(seedFor(seedIndex));
    const civilizationData = Array.from({ length: 6 }, (_, index) => ({
      name: `文明${index}`,
      homeNodeIndex: index * 10,
      birth: 404 + index * 8,
      aggression: .15 + index * .1,
      cooperation: .8 - index * .09,
      expansionRate: .9 + index * .03,
      resilience: .9 + index * .04,
      technology: .3 + index * .02,
      visibility: .08,
      cohesion: .62,
      machineAutonomy: .2,
      highDimensional: index === 0,
      ascensionAt: index === 0 ? 520 : Infinity
    }));
    const first = createCivilizationEventPlan({ universe, civilizationData, habitatPositions });
    const second = createCivilizationEventPlan({ universe, civilizationData, habitatPositions });
    assert.deepEqual(first, second);
    totalPlannedEvents += first.events.length;
    assert.equal(first.speciesProfiles.length, civilizationData.length);
    assert.ok(first.speciesProfiles.every((profile) => profile.biospherePath.length >= 4));
    assert.ok(first.fermiScenario?.label);
    first.events.forEach((event) => {
      seen.add(event.type);
      if (event.type === 'intergalactic-diaspora') {
        fleetOutcomes.add(event.fleetOutcome);
        assert.ok(event.fleetDistanceMly > 1);
        assert.ok(event.fleetSpeed > 0 && event.fleetSpeed < 1);
        assert.ok(event.fleetPopulation > 0);
        assert.ok(event.fleetSupplies > 0 && event.fleetSupplies <= 1);
      } else if (event.type === 'interuniversal-gateway') {
        gatewayEvents++;
        const declineWindow = civilizationDeclineWindow(universe);
        const declineStart = Math.min(declineWindow.energyStart, declineWindow.fateStart);
        assert.equal(civilizationData[event.targetSpeciesIndex].highDimensional, true);
        assert.ok(event.start >= civilizationData[event.targetSpeciesIndex].ascensionAt);
        assert.ok(event.start >= declineStart);
        assert.equal(event.markerVisual, true);
        assert.equal(event.persistentUntil, 1000);
      }
    });
    if (first.events.length < civilizationEventTypes().length) foundConditionalAbsence = true;
    first.childSpecies.forEach((child, index) => {
      assert.equal(first.events.some((event) => event.childSpeciesIndex === 6 + index), true);
      assert.ok(child.birth > civilizationData[child.parentSpeciesIndex].birth);
    });
  }
  assert.deepEqual([...seen].sort(), civilizationEventTypes().sort());
  assert.deepEqual([...fleetOutcomes].sort(), ['arrived', 'divided', 'lost', 'returned']);
  assert.equal(foundConditionalAbsence, true);
  assert.ok(gatewayEvents / 300 > .18 && gatewayEvents / 300 < .32);
  assert.ok(totalPlannedEvents / 300 > 10 && totalPlannedEvents / 300 < 18);
});

test('civilization events change snapshots and create active successor cultures', () => {
  const universe = Array.from({ length: 200 }, (_, index) => createUniverse(seedFor(index)))
    .find((candidate) => candidate.cosmicFate.type === 'heat-death');
  const civilizationData = [
    { name: '甲', birth: 400, homeNodeIndex: 0, aggression: .2, cooperation: .8, expansionRate: 1.2, resilience: 1, technology: .4, visibility: .1, cohesion: .7, machineAutonomy: .2 },
    { name: '乙', birth: 402, homeNodeIndex: 2, aggression: .3, cooperation: .7, expansionRate: 1.1, resilience: 1, technology: .35, visibility: .1, cohesion: .7, machineAutonomy: .2 },
    { name: '丙', birth: 404, homeNodeIndex: 4, aggression: .4, cooperation: .6, expansionRate: 1.1, resilience: 1, technology: .38, visibility: .1, cohesion: .7, machineAutonomy: .2 },
    { name: '丁', birth: 406, homeNodeIndex: 6, aggression: .2, cooperation: .8, expansionRate: 1.2, resilience: 1, technology: .42, visibility: .1, cohesion: .7, machineAutonomy: .2 },
    { name: '甲·远枝', birth: 448, homeNodeIndex: 8, aggression: .45, cooperation: .35, expansionRate: 1, resilience: 1, technology: .3, visibility: .1, cohesion: .45, machineAutonomy: .2, originType: 'fragment', parentSpeciesIndex: 0 },
    { name: '丁·新生群', birth: 458, homeNodeIndex: 10, aggression: .15, cooperation: .85, expansionRate: 1, resilience: 1, technology: .3, visibility: .1, cohesion: .65, machineAutonomy: .2, originType: 'uplift', parentSpeciesIndex: 3 }
  ];
  const habitatPositions = new Float32Array(12 * 3);
  for (let index = 0; index < 12; index++) {
    habitatPositions[index * 3] = Math.cos(index / 12 * Math.PI * 2) * 4;
    habitatPositions[index * 3 + 2] = Math.sin(index / 12 * Math.PI * 2) * 4;
  }
  const simulation = {
    start: 390,
    end: 1000,
    step: 1,
    habitatRemnantIndices: Uint16Array.from({ length: 12 }, (_, index) => index),
    habitatPositions,
    adjacency: [],
    snapshots: []
  };
  const makeEvent = (type, impactAt, targetSpeciesIndex, extra = {}) => ({
    id: type,
    type,
    label: type,
    category: 'civilization',
    impactAt,
    targetSpeciesIndex,
    civilizationImpacts: [],
    outcome: '事件仍在演化',
    ...extra
  });
  const events = [
    makeEvent('first-signal', 420, 0, { secondarySpeciesIndex: 1, decision: 'reply' }),
    makeEvent('self-replicating-probes', 428, 1, { runaway: false }),
    makeEvent('stellar-megastructure', 436, 2, { unstable: false }),
    makeEvent('knowledge-ark', 442, 3, { archiveReliability: .8 }),
    makeEvent('civilization-fracture', 448, 0, { childSpeciesIndex: 4 }),
    makeEvent('uplift-experiment', 458, 3, { childSpeciesIndex: 5 })
  ];
  buildCivilizationSimulation({
    universe,
    civilizationData,
    civilizationSimulation: simulation,
    cosmicEvents: events
  });
  const snapshot = simulation.snapshots.find((item) => item.time === 470);
  assert.equal(snapshot.probeModes[1], 1);
  assert.equal(snapshot.megastructures[2], 1);
  assert.equal(snapshot.archives[3], 1);
  assert.equal(snapshot.uplifts[5], 1);
  assert.equal(simulation.snapshots.some((item) => item.time >= 448 && item.active[4]), true);
  assert.equal(simulation.snapshots.some((item) => item.time >= 458 && item.active[5]), true);
  assert.ok(events.every((event) => event.outcome !== '事件仍在演化'));
});

test('an ascended civilization completes its interuniversal gateway', () => {
  const universe = createUniverse('0000-0000-0000-0001');
  const civilizationData = [{
    name: '高维测试文明',
    birth: 400,
    homeNodeIndex: 0,
    aggression: 0,
    cooperation: 1,
    expansionRate: 1,
    resilience: 1,
    technology: .8,
    visibility: .1,
    cohesion: .9,
    machineAutonomy: .2,
    highDimensional: true,
    ascensionAt: 410
  }];
  const simulation = {
    start: 400,
    end: 430,
    step: 1,
    habitatRemnantIndices: Uint16Array.from([0]),
    habitatPositions: new Float32Array([0, 0, 0]),
    adjacency: [],
    snapshots: []
  };
  const gateway = {
    id: 'gateway-test',
    type: 'interuniversal-gateway',
    label: '泽利宇宙环建造',
    category: 'civilization',
    impactAt: 420,
    targetSpeciesIndex: 0,
    gatewayDiameterLightYears: 2.4e6,
    civilizationImpacts: [],
    outcome: '事件仍在演化'
  };
  buildCivilizationSimulation({
    universe,
    civilizationData,
    civilizationSimulation: simulation,
    cosmicEvents: [gateway]
  });

  const snapshot = simulation.snapshots.find((item) => item.time === 421);
  assert.equal(snapshot.dimensionalGateways[0], 1);
  assert.match(gateway.outcome, /通往其他宇宙/);
});

test('second-wave civilization events persist outcomes and relativistic lineages', () => {
  const universe = Array.from({ length: 200 }, (_, index) => createUniverse(seedFor(index)))
    .find((candidate) => candidate.cosmicFate.type === 'heat-death');
  const civilizationData = [
    { name: '甲', birth: 400, homeNodeIndex: 0, aggression: .2, cooperation: .8, expansionRate: 1.2, resilience: 1, technology: .5, visibility: .1, cohesion: .75, machineAutonomy: .2 },
    { name: '乙', birth: 402, homeNodeIndex: 3, aggression: .3, cooperation: .7, expansionRate: 1.1, resilience: 1, technology: .5, visibility: .1, cohesion: .7, machineAutonomy: .2 },
    { name: '丙', birth: 404, homeNodeIndex: 6, aggression: .25, cooperation: .75, expansionRate: 1.1, resilience: 1, technology: .5, visibility: .1, cohesion: .7, machineAutonomy: .2 },
    { name: '丁', birth: 406, homeNodeIndex: 9, aggression: .35, cooperation: .65, expansionRate: 1.1, resilience: 1, technology: .5, visibility: .1, cohesion: .7, machineAutonomy: .2 },
    { name: '甲·迟归者', birth: 462, homeNodeIndex: 12, aggression: .25, cooperation: .65, expansionRate: 1, resilience: 1.1, technology: .48, visibility: .1, cohesion: .58, machineAutonomy: .2, originType: 'relativistic', parentSpeciesIndex: 0 }
  ];
  const habitatPositions = new Float32Array(18 * 3);
  for (let index = 0; index < 18; index++) {
    habitatPositions[index * 3] = Math.cos(index / 18 * Math.PI * 2) * (4 + index * .08);
    habitatPositions[index * 3 + 1] = Math.sin(index * .4) * .3;
    habitatPositions[index * 3 + 2] = Math.sin(index / 18 * Math.PI * 2) * (4 + index * .08);
  }
  const simulation = {
    start: 390,
    end: 1000,
    step: 1,
    habitatRemnantIndices: Uint16Array.from({ length: 18 }, (_, index) => index),
    habitatPositions,
    adjacency: [],
    snapshots: []
  };
  const makeEvent = (type, impactAt, targetSpeciesIndex, extra = {}) => ({
    id: type,
    type,
    label: type,
    category: 'civilization',
    impactAt,
    targetSpeciesIndex,
    civilizationImpacts: [],
    outcome: '事件仍在演化',
    ...extra
  });
  const events = [
    makeEvent('satellite-disruption', 422, 0, { evacuationSuccess: true }),
    makeEvent('terraforming-project', 432, 1, { terraformingSuccess: true }),
    makeEvent('digital-migration', 442, 2, { migrationStable: true }),
    makeEvent('precursor-ruins', 452, 3, { precursorHazard: false }),
    makeEvent('information-plague', 458, 0, { contained: true }),
    makeEvent('relativistic-divergence', 462, 0, { childSpeciesIndex: 4 }),
    makeEvent('infrared-waste-heat', 464, 0, {
      luminosityFraction: .5, wasteHeatKelvin: 280
    }),
    makeEvent('civilization-signal-silence', 466, 0),
    makeEvent('galaxy-collision', 468, null, {
      category: 'observation', markerVisual: true, label: '伴星系潮汐瓦解',
      tidalStrength: .08, outcome: '伴星系形成潮汐尾'
    }),
    makeEvent('galactic-encounter', 470, 1, { encounterMode: 'starburst' }),
    makeEvent('galaxy-starburst', 471, null, {
      starFormationBoost: 3.2, outcome: '恒星形成率升高'
    }),
    makeEvent('ram-pressure-stripping', 472, null, {
      gasLossFraction: .5, outcome: '外盘气体被剥离'
    }),
    makeEvent('planetary-impact', 473, 1, { impactSeverity: .5 }),
    makeEvent('runaway-greenhouse', 474, 1),
    makeEvent('biosignature-loss', 475, 1, { signalLossFraction: .7 })
  ];
  buildCivilizationSimulation({
    universe,
    civilizationData,
    civilizationSimulation: simulation,
    cosmicEvents: events
  });
  const snapshot = simulation.snapshots.find((item) => item.time === 480);
  assert.equal(snapshot.evacuations[0], 1);
  assert.equal(snapshot.terraforming[1], 1);
  assert.equal(snapshot.substrateModes[2], 1);
  assert.equal(snapshot.precursorKnowledge[3], 1);
  assert.equal(snapshot.contamination[0], -1);
  assert.equal(snapshot.temporalDrift[0], 1);
  assert.equal(snapshot.temporalDrift[4], 1);
  assert.ok(snapshot.visibility[0] < .1);
  assert.equal(snapshot.climateStates[1], -2);
  assert.equal(snapshot.biosignatureStates[1], -1);
  assert.ok(snapshot.biosphereCapacity[1] < snapshot.biosphereCapacity[0]);
  assert.equal(simulation.snapshots.some((item) => item.time >= 462 && item.active[4]), true);
  assert.match(events.find((event) => event.type === 'galaxy-collision').outcome, /当时存续文明/);
  assert.ok(events.every((event) => event.outcome !== '事件仍在演化'));
});

test('causal evolution chains update biosphere, morphology, engineering, migration, and archaeology', () => {
  const universe = createUniverse('0000000000000005');
  assert.equal(universe.cosmicFate.type, 'heat-death');
  assert.equal(universe.hasCentralBlackHole, true);
  const civilizationData = [
    { name: '甲', birth: 400, homeNodeIndex: 0, aggression: .2, cooperation: .8, expansionRate: 1.2, resilience: 1, technology: .5, visibility: .1, cohesion: .75, machineAutonomy: .2, morphology: '生物共同体', fermiScenario: '大过滤器' },
    { name: '乙', birth: 402, homeNodeIndex: 5, aggression: .25, cooperation: .75, expansionRate: 1.15, resilience: 1, technology: .5, visibility: .1, cohesion: .7, machineAutonomy: .2, morphology: '低可见度文明', fermiScenario: '大过滤器' },
    { name: '丙', birth: 404, homeNodeIndex: 10, aggression: .3, cooperation: .7, expansionRate: 1.1, resilience: 1.2, technology: .9, visibility: .1, cohesion: .78, machineAutonomy: .2, morphology: '生物共同体', fermiScenario: '大过滤器' },
    { name: '丁', birth: 406, homeNodeIndex: 15, aggression: .25, cooperation: .75, expansionRate: 1.1, resilience: 1, technology: .5, visibility: .1, cohesion: .7, machineAutonomy: .2, morphology: '群体意识', fermiScenario: '大过滤器' }
  ];
  const habitatPositions = new Float32Array(24 * 3);
  for (let index = 0; index < 24; index++) {
    habitatPositions[index * 3] = Math.cos(index / 24 * Math.PI * 2) * (4 + index * .05);
    habitatPositions[index * 3 + 1] = Math.sin(index * .31) * .3;
    habitatPositions[index * 3 + 2] = Math.sin(index / 24 * Math.PI * 2) * (4 + index * .05);
  }
  const simulation = {
    start: 390,
    end: 1000,
    step: 1,
    habitatRemnantIndices: Uint16Array.from({ length: 24 }, (_, index) => index),
    habitatPositions,
    adjacency: [],
    snapshots: []
  };
  const makeEvent = (type, impactAt, targetSpeciesIndex, extra = {}) => ({
    id: type,
    type,
    label: type,
    category: 'civilization',
    impactAt,
    targetSpeciesIndex,
    civilizationImpacts: [],
    outcome: '事件仍在演化',
    ...extra
  });
  const events = [
    makeEvent('biosphere-transition', 395, 0, { biospherePath: ['原始生命', '复杂生命', '技术物种'] }),
    makeEvent('fermi-paradigm', 410, 0, { fermiScenario: { label: '大过滤器' } }),
    makeEvent('great-filter-crisis', 420, 0, { filterOutcome: '跨越过滤器' }),
    makeEvent('generation-ship', 430, 1, { migrationOutcome: '建立远端殖民地' }),
    makeEvent('stellar-engineering', 440, 2, { engineeringMode: '恒星抬升', engineeringStable: true }),
    makeEvent('morphology-transition', 450, 3, { previousMorphology: '群体意识', newMorphology: '数字文明' }),
    makeEvent('cosmic-archaeology', 460, 0, { artifactType: '星图档案', artifactOutcome: '继承' }),
    makeEvent('ghost-signal', 470, 1, { delayUnits: 42 }),
    makeEvent('exposure-response', 480, 2, { responsePolicy: '跨文明验证协议' }),
    makeEvent('galactic-aftermath', 490, 3, { galacticStage: '潮汐尾与恒星形成潮' }),
    makeEvent('intergalactic-diaspora', 510, 2, { diasporaMode: '星系桥殖民地', diasporaSuccess: true }),
    makeEvent('black-hole-civilization', 520, 2, { blackHoleMethod: '旋转能提取', blackHoleStable: true }),
    makeEvent('universe-escape-project', 530, 2, { escapeMode: '人造婴儿宇宙', escapeSuccess: true })
  ];
  buildCivilizationSimulation({
    universe,
    civilizationData,
    civilizationSimulation: simulation,
    cosmicEvents: events
  });
  const snapshot = simulation.snapshots.find((item) => item.time === 540);
  const arrivalSnapshot = simulation.snapshots.find((item) => item.time === 600);
  assert.equal(snapshot.biosphereStages[0], 5);
  assert.equal(snapshot.filterStates[0], 1);
  assert.equal(snapshot.migrationModes[1], 1);
  assert.equal(snapshot.engineeringModes[2], 1);
  assert.equal(snapshot.morphologyModes[3], 4);
  assert.equal(snapshot.substrateModes[3], 1);
  assert.equal(snapshot.artifacts[0], 1);
  assert.equal(snapshot.signalDelays[1], 42);
  assert.equal(snapshot.causalResponses[2], 1);
  assert.equal(snapshot.fleetStates[2], 2);
  assert.equal(snapshot.fleetProgress[2], 1);
  assert.equal(snapshot.diasporaModes[2], 1);
  assert.equal(arrivalSnapshot.diasporaModes[2], 1);
  assert.equal(snapshot.blackHoleHabitats[2], 1);
  assert.equal(snapshot.escapeProjects[2], 1);
  assert.equal(snapshot.energyTiers[2], 4);
  assert.ok(snapshot.populations[2] > 0);
  assert.ok(snapshot.resources[2] > 0);
  assert.ok(snapshot.energyReserves[2] > 0);
  assert.ok(snapshot.governance[2] > 0);
  assert.ok(snapshot.research[2] > 0);
  assert.ok(snapshot.stability[2] > 0);
  assert.ok(snapshot.technologyMasks[2] & technologyBits.universeEscape);
  assert.ok(arrivalSnapshot.externalGalaxyIndices[2] > 0);
  assert.ok(arrivalSnapshot.externalPopulations[2] > 0);
  assert.ok(snapshot.materials[2] > 0);
  assert.ok(snapshot.compute[2] > 0);
  assert.ok(snapshot.biosphereCapacity[2] > 0);
  assert.ok(snapshot.logisticsThroughput[2] > 0);
  assert.ok(snapshot.fermiAwareness.some((value) => value === 1));
  assert.ok(events.every((event) => event.outcome !== '事件仍在演化'));
});

test('rare causal events feed back into biospheres, stellar motion, dormancy, and memory', () => {
  const universe = createUniverse('0000000000000005');
  const civilizationData = [{
    name: '回声文明',
    birth: 390,
    homeNodeIndex: 0,
    aggression: .1,
    cooperation: .9,
    expansionRate: 1.1,
    resilience: 1.2,
    technology: .88,
    visibility: .12,
    cohesion: .78,
    machineAutonomy: .35,
    morphology: '数字文明',
    fermiScenario: '短暂技术窗口'
  }];
  const habitatPositions = new Float32Array(12 * 3);
  for (let index = 0; index < 12; index++) {
    habitatPositions[index * 3] = Math.cos(index / 12 * Math.PI * 2) * 5;
    habitatPositions[index * 3 + 2] = Math.sin(index / 12 * Math.PI * 2) * 5;
  }
  const simulation = {
    start: 380,
    end: 500,
    step: 1,
    habitatRemnantIndices: Uint16Array.from({ length: 12 }, (_, index) => index),
    habitatPositions,
    adjacency: [],
    snapshots: []
  };
  const makeEvent = (type, impactAt, extra = {}) => ({
    id: type,
    type,
    label: type,
    category: 'civilization',
    impactAt,
    targetSpeciesIndex: 0,
    civilizationImpacts: [],
    outcome: '事件仍在演化',
    ...extra
  });
  const events = [
    makeEvent('digital-migration', 405, { migrationStable: true }),
    makeEvent('stellar-engineering', 410, {
      engineeringMode: '恒星推进器', engineeringStable: true
    }),
    makeEvent('lithopanspermia-transfer', 420, {
      targetNodeIndex: 4, landingViable: true, viableFraction: 1e-5
    }),
    makeEvent('stellar-engine-proper-motion', 425, {
      driftParsecs: 64, driftDirection: [0, .6, .8]
    }),
    makeEvent('deep-time-memory-reunion', 430, {
      archiveCount: 720, memoryConflictFraction: .12
    }),
    makeEvent('aestivation-awakening', 470, {
      dormancyAt: 440, computationGainExponent: 24
    })
  ];

  buildCivilizationSimulation({
    universe,
    civilizationData,
    civilizationSimulation: simulation,
    cosmicEvents: events
  });

  const dormant = simulation.snapshots.find((snapshot) => snapshot.time === 450);
  const awakened = simulation.snapshots.find((snapshot) => snapshot.time === 480);
  assert.equal(dormant.seededBiosphereNodes[4], 1);
  assert.equal(dormant.biosphereSeedCounts[0], 1);
  assert.equal(dormant.stellarDriftParsecs[0], 64);
  assert.ok(Math.abs(dormant.stellarDriftDirections[0]) < 1e-6);
  assert.ok(Math.abs(dormant.stellarDriftDirections[1] - .6) < 1e-6);
  assert.ok(Math.abs(dormant.stellarDriftDirections[2] - .8) < 1e-6);
  assert.equal(dormant.memoryReunions[0], 720);
  assert.ok(dormant.memoryIntegrity[0] < 1);
  assert.equal(dormant.dormancyModes[0], 1);
  assert.equal(awakened.dormancyModes[0], 2);
  assert.ok(awakened.compute[0] > dormant.compute[0]);
  assert.match(events.find((event) => event.type === 'lithopanspermia-transfer').outcome, /微生物生态/);
  assert.match(events.find((event) => event.type === 'stellar-engine-proper-motion').outcome, /64 pc/);
  assert.match(events.find((event) => event.type === 'deep-time-memory-reunion').outcome, /720 组/);
  assert.match(events.find((event) => event.type === 'aestivation-awakening').outcome, /恢复/);
});

test('civilization chronicles preserve roles and causal event links for export', () => {
  const universe = createUniverse('CHRONICLETEST001');
  const civilizations = [
    { name: '甲', birth: 400, morphology: '生物共同体', biospherePath: ['原始生命', '技术物种'], fermiScenario: '大过滤器' },
    { name: '乙', birth: 410, morphology: '机器文明', biospherePath: ['化能生态', '技术物种'], fermiScenario: '短暂技术窗口' }
  ];
  const events = [
    { id: 'signal', type: 'first-signal', label: '信号', impactAt: 430, targetSpeciesIndex: 0, secondarySpeciesIndex: 1, outcome: '建立链路' },
    { id: 'response', sourceEventId: 'signal', causalRootId: 'signal', type: 'exposure-response', label: '响应', impactAt: 450, targetSpeciesIndex: 0, outcome: '建立验证协议' }
  ];
  const history = civilizationHistory(0, events);
  assert.deepEqual(history.map(({ role }) => role), ['主体', '主体']);
  assert.equal(history[1].event.sourceEventId, 'signal');
  const exported = historyExportPayload({ universe, civilizationData: civilizations, cosmicEvents: events });
  assert.equal(exported.format, 'random-universe-history-v1');
  assert.equal(exported.civilizations[0].history[1].causalRootId, 'signal');
  assert.equal(exported.civilizations[1].history[0].role, '接触方');
});

test('technology tree enforces prerequisites and charges civilization costs', () => {
  const blocked = advanceTechnologyTree({
    mask: 0,
    active: true,
    technology: 1,
    research: 1,
    resources: 1,
    energy: 1,
    hasCentralBlackHole: false,
    megastructure: true,
    engineeringMode: 3,
    blackHoleHabitat: 1,
    escapeProject: 1
  });
  assert.ok(blocked.mask & technologyBits.stellarEngine);
  assert.equal(Boolean(blocked.mask & technologyBits.blackHoleEnergy), false);
  assert.equal(Boolean(blocked.mask & technologyBits.universeEscape), false);

  const completed = advanceTechnologyTree({
    mask: 0,
    active: true,
    technology: 1,
    research: 1,
    resources: 1,
    energy: 1,
    hasCentralBlackHole: true,
    megastructure: true,
    engineeringMode: 3,
    blackHoleHabitat: 1,
    escapeProject: 1
  });
  assert.equal(technologyPath(completed.mask).every((node) => node.unlocked), true);
  assert.ok(completed.cost.resources > .8);
  assert.ok(completed.cost.energy > .5);
  assert.ok(completed.cost.stability > .2);
});

test('local galaxy groups and delayed observations are deterministic', () => {
  const first = createLocalGalaxyGroup('LOCALGROUP000001', '主星系');
  const second = createLocalGalaxyGroup('LOCALGROUP000001', '主星系');
  assert.deepEqual(first, second);
  assert.ok(first.companions.length >= 4 && first.companions.length <= 6);
  assert.ok(first.companions.every((galaxy) => Math.hypot(...galaxy.position) > 18));

  const snapshots = Array.from({ length: 41 }, (_, time) => ({
    time,
    populations: Float32Array.from([1, 1 + time / 10]),
    resources: Float32Array.from([.7, .4 + time / 100]),
    energyReserves: Float32Array.from([.8, .5]),
    governance: Float32Array.from([.7, .6]),
    research: Float32Array.from([.7, .65]),
    stability: Float32Array.from([.8, .3 + time / 100]),
    visibility: Float32Array.from([.1, .2]),
    trends: Int8Array.from([0, 1])
  }));
  const observation = civilizationObservation({
    observerSpeciesIndex: 0,
    targetSpeciesIndex: 1,
    position: 40,
    civilizationSimulation: {
      start: 0,
      step: 1,
      snapshots,
      habitatPositions: Float32Array.from([0, 0, 0, 10, 0, 0])
    },
    civilizationData: [{ homeNodeIndex: 0 }, { homeNodeIndex: 1 }],
    universe: { speed: 1 }
  });
  assert.ok(observation.delay > 30);
  assert.ok(observation.observed.population < observation.actual.population);
  assert.ok(observation.confidence < 1);
  assert.ok(observation.uncertainty > 0);
});

test('event repeats respect a universe-specific latest start boundary', () => {
  const universe = createUniverse('EVNTBOUND0000001');
  const schedule = expandEventSchedule([
    {
      type: 'late-stellar-event', label: '晚期恒星事件', start: 580, duration: 20,
      latestStart: 605, repeatRate: 10, maximumOccurrences: 5
    }
  ], universe, createSeededRandom(universe.seed, 1001));
  assert.ok(schedule.length >= 1);
  assert.ok(schedule.every((event) => event.start <= 605));
});

test('repeated tidal disruptions can be scheduled without visual overlap', () => {
  const universe = createUniverse('TIDALSPACING0001');
  const schedule = expandEventSchedule([{
    type: 'tidal-disruption-event',
    label: '潮汐瓦解事件',
    start: 500,
    duration: 30,
    repeatRate: 100,
    repeatSpacing: 40,
    maximumOccurrences: 2
  }], universe, createSeededRandom(universe.seed, 1447));

  assert.equal(schedule.length, 2);
  assert.ok(schedule[1].start >= schedule[0].start + schedule[0].duration);
});

test('tidal disruption visuals enter continuously before accretion peaks', () => {
  const simulation = { pulsePhases: [.58, .74], fallbackExponent: -5 / 3 };
  const start = tidalDisruptionVisualState(0, simulation);
  const entering = tidalDisruptionVisualState(.05, simulation);
  const active = tidalDisruptionVisualState(.58, simulation);
  const ended = tidalDisruptionVisualState(1, simulation);

  assert.equal(start.onset, 0);
  assert.equal(start.centralAccretionBoost, 0);
  assert.ok(entering.onset > 0 && entering.onset < 1);
  assert.ok(active.fallbackLuminosity > 0);
  assert.ok(active.centralAccretionBoost > entering.centralAccretionBoost);
  assert.equal(ended.fade, 0);
  assert.equal(ended.centralAccretionBoost, 0);
});

test('stellar-collapse remnants fade in instead of crossing a bright visibility threshold', () => {
  const hidden = stellarCollapseVisualState(.5);
  const entering = stellarCollapseVisualState(.6);
  const formed = stellarCollapseVisualState(.68);

  assert.equal(hidden.remnantReveal, 0);
  assert.ok(entering.remnantReveal > 0 && entering.remnantReveal < 1);
  assert.equal(formed.remnantReveal, 1);
  assert.ok(entering.remnantIntensity > 0);
});

test('black-hole merger visuals cross-fade at acquisition and coalescence', () => {
  const acquired = blackHoleMergerVisualState(.04);
  const coalescing = blackHoleMergerVisualState(.68);
  const remnant = blackHoleMergerVisualState(1, .35);

  assert.ok(acquired.handoffReveal > 0 && acquired.handoffReveal < 1);
  assert.ok(coalescing.progenitorVisibility > 0);
  assert.ok(coalescing.remnantVisibility > 0);
  assert.equal(remnant.progenitorVisibility, 0);
  assert.equal(remnant.remnantVisibility, .35);
});

test('transient stellar models conserve their declared mass budget', () => {
  const types = [
    'pair-instability-supernova',
    'core-collapse-supernova',
    'superluminous-supernova',
    'neutron-star-kilonova',
    'failed-supernova'
  ];
  for (let index = 0; index < 1000; index++) {
    const universe = createUniverse(seedFor(index));
    types.forEach((type, eventIndex) => {
      const simulation = createTransientSimulation({ type }, universe, eventIndex);
      if (type === 'pair-instability-supernova') {
        assert.ok(Math.abs(simulation.progenitorMass - simulation.ejectaMass - simulation.radiatedMass) < 1e-9);
      } else if (type === 'core-collapse-supernova') {
        assert.ok(Math.abs(
          simulation.progenitorMass - simulation.ejectaMass
          - simulation.remnantMass - simulation.neutrinoMassLoss
        ) < 1e-9);
      } else if (type === 'superluminous-supernova') {
        assert.ok(Math.abs(
          simulation.progenitorMass - simulation.ejectaMass
          - simulation.remnantMass - simulation.radiatedMass
        ) < 1e-9);
      } else if (type === 'neutron-star-kilonova') {
        assert.ok(Math.abs(
          simulation.massA + simulation.massB - simulation.ejectaMass
          - simulation.remnantMass - simulation.radiatedMassFraction * (simulation.massA + simulation.massB)
        ) < 1e-9);
      } else {
        assert.ok(Math.abs(
          simulation.progenitorMass * (1 - simulation.ejectedEnvelopeFraction)
          - simulation.neutrinoMassLoss - simulation.remnantMass
        ) < 1e-9);
      }
    });
  }
});

test('black-hole recoil vanishes in the exactly symmetric limit', () => {
  assert.equal(blackHoleRecoilKms({
    massA: 30,
    massB: 30,
    alignedSpinA: .4,
    alignedSpinB: .4,
    inPlaneSpinA: .2,
    inPlaneSpinB: .2
  }), 0);
});

test('black-hole merger physics uses the selected extant objects', () => {
  const universe = createUniverse('EXTANTBHMERGER01');
  const simulation = createTransientSimulation({
    type: 'stellar-black-hole-merger',
    blackHoleMasses: [12, 37]
  }, universe, 4);

  assert.equal(simulation.massA, 37);
  assert.equal(simulation.massB, 12);
  assert.ok(Math.abs(
    simulation.remnantMass
      - (simulation.massA + simulation.massB) * (1 - simulation.radiatedMassFraction)
  ) < 1e-9);
});

test('outer galactic potential approaches a flat rotation curve', () => {
  const universe = createUniverse('ORBT-FLAT-0000-0001');
  const positions = new Float32Array([8, 0, 0, 16, 0, 0]);
  const dynamics = createStellarGravityState(positions, universe);
  const innerVelocity = dynamics.orbitRates[0] * 8;
  const outerVelocity = dynamics.orbitRates[1] * 16;
  assert.ok(outerVelocity / innerVelocity > .75);
  assert.ok(outerVelocity / innerVelocity < 1.4);
});

test('black-hole progenitors inherit real stellar death times', () => {
  const deathThresholds = new Float32Array([640, 510, 590, 530, 620, 550, 570, 610]);
  const selected = selectBlackHoleProgenitors(
    deathThresholds,
    3,
    createSeededRandom('BHPROGENITOR0001', 17)
  );
  assert.equal(selected.length, 3);
  assert.equal(new Set(selected).size, selected.length);
  assert.ok(selected.every((index) => deathThresholds[index] <= 570));
});

test('only simulations that form black holes enter the long-lived population', () => {
  assert.equal(blackHoleMassFromSimulation({
    model: 'failed-collapse',
    remnantType: 'black-hole',
    remnantMass: 18
  }), 18);
  assert.equal(blackHoleMassFromSimulation({
    model: 'core-collapse',
    remnantType: 'neutron-star',
    remnantMass: 1.6
  }), null);
  assert.equal(blackHoleMassFromSimulation({
    model: 'quasar-duty-cycle',
    blackHoleMass: 1e8
  }), null);
});

test('more massive black holes evaporate later without exceeding the universe ceiling', () => {
  const stellar = blackHoleEvaporationExponent(10, 100);
  const intermediate = blackHoleEvaporationExponent(1e4, 100);
  const central = blackHoleEvaporationExponent(1e9, 100);
  assert.equal(stellar, 67);
  assert.ok(intermediate > stellar);
  assert.ok(central > intermediate);
  assert.ok(central <= 100);
});

test('black-hole mergers select an already existing close pair', () => {
  const pair = selectBlackHoleMergerPair([
    { id: 'old-a', birthAt: 410, evaporationAt: 900, position: [1, 0, 0] },
    { id: 'old-b', birthAt: 430, evaporationAt: 910, position: [1.7, .1, 0] },
    { id: 'far', birthAt: 390, evaporationAt: 920, position: [8, 0, 0] },
    { id: 'future', birthAt: 650, evaporationAt: 940, position: [1.2, 0, 0] },
    { id: 'used', birthAt: 380, evaporationAt: 940, consumedAt: 600, position: [1.05, 0, 0] }
  ], { at: 620, maximumSeparation: 2 });

  assert.equal(pair.left.id, 'old-a');
  assert.equal(pair.right.id, 'old-b');
  assert.ok(pair.separation < 1);
});

test('black-hole mergers do not manufacture a pair outside capture range', () => {
  const pair = selectBlackHoleMergerPair([
    { id: 'a', birthAt: 410, evaporationAt: 900, position: [0, 0, 0] },
    { id: 'b', birthAt: 430, evaporationAt: 910, position: [6, 0, 0] }
  ], { at: 620, maximumSeparation: 2 });

  assert.equal(pair, null);
});
