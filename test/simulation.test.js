import test from 'node:test';
import assert from 'node:assert/strict';
import {
  cosmicTimeLabel,
  cosmicYearsToTimelinePosition,
  referenceFutureYearsAtTimelinePosition,
  selectTimelineNarrative
} from '../src/domain/cosmic-time.js';
import { erasForUniverse } from '../src/domain/catalog.js';
import {
  createUniverse,
  stellarEndTimelinePosition,
  stellarFormationEndTimelinePosition
} from '../src/domain/universe.js';
import { createSeededRandom } from '../src/domain/random.js';
import {
  createStellarDawnModel,
  STELLAR_DAWN_END,
  STELLAR_DAWN_START
} from '../src/domain/stellar-dawn.js';
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
  selectBlackHoleProgenitors
} from '../src/simulation/compact-objects.js';
import { expandEventSchedule } from '../src/simulation/event-occurrence.js';
import { blackHoleRecoilKms, createTransientSimulation } from '../src/simulation/transient-events.js';
import { civilizationHistory, historyExportPayload } from '../src/ui/civilization-chronicle.js';

const seedFor = (index) => index.toString(36).toUpperCase().padStart(16, '0');

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
  }
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
    assert.equal(universe.civilizations, Math.max(universe.estimatedCivilizations, universe.trackedSpeciesCount));
  }
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

test('speculative civilization event plans are seeded, conditional, and cover every event family', () => {
  const habitatPositions = new Float32Array(90 * 3);
  for (let index = 0; index < 90; index++) {
    habitatPositions[index * 3] = Math.cos(index * .71) * (2 + index * .03);
    habitatPositions[index * 3 + 1] = Math.sin(index * .19);
    habitatPositions[index * 3 + 2] = Math.sin(index * .71) * (2 + index * .03);
  }
  const seen = new Set();
  let foundConditionalAbsence = false;
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
      machineAutonomy: .2
    }));
    const first = createCivilizationEventPlan({ universe, civilizationData, habitatPositions });
    const second = createCivilizationEventPlan({ universe, civilizationData, habitatPositions });
    assert.deepEqual(first, second);
    assert.equal(first.speciesProfiles.length, civilizationData.length);
    assert.ok(first.speciesProfiles.every((profile) => profile.biospherePath.length >= 4));
    assert.ok(first.fermiScenario?.label);
    first.events.forEach((event) => seen.add(event.type));
    if (first.events.length < civilizationEventTypes().length) foundConditionalAbsence = true;
    first.childSpecies.forEach((child, index) => {
      assert.equal(first.events.some((event) => event.childSpeciesIndex === 6 + index), true);
      assert.ok(child.birth > civilizationData[child.parentSpeciesIndex].birth);
    });
  }
  assert.deepEqual([...seen].sort(), civilizationEventTypes().sort());
  assert.equal(foundConditionalAbsence, true);
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
    makeEvent('galactic-encounter', 470, 1, { encounterMode: 'starburst' })
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
  assert.equal(simulation.snapshots.some((item) => item.time >= 462 && item.active[4]), true);
  assert.ok(events.every((event) => event.outcome !== '事件仍在演化'));
});

test('causal evolution chains update biosphere, morphology, engineering, migration, and archaeology', () => {
  const universe = Array.from({ length: 200 }, (_, index) => createUniverse(seedFor(index)))
    .find((candidate) => candidate.cosmicFate.type === 'heat-death');
  const civilizationData = [
    { name: '甲', birth: 400, homeNodeIndex: 0, aggression: .2, cooperation: .8, expansionRate: 1.2, resilience: 1, technology: .5, visibility: .1, cohesion: .75, machineAutonomy: .2, morphology: '生物共同体', fermiScenario: '大过滤器' },
    { name: '乙', birth: 402, homeNodeIndex: 5, aggression: .25, cooperation: .75, expansionRate: 1.15, resilience: 1, technology: .5, visibility: .1, cohesion: .7, machineAutonomy: .2, morphology: '低可见度文明', fermiScenario: '大过滤器' },
    { name: '丙', birth: 404, homeNodeIndex: 10, aggression: .3, cooperation: .7, expansionRate: 1.1, resilience: 1, technology: .55, visibility: .1, cohesion: .7, machineAutonomy: .2, morphology: '生物共同体', fermiScenario: '大过滤器' },
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
    makeEvent('intergalactic-diaspora', 510, 1, { diasporaMode: '星系桥殖民地', diasporaSuccess: true }),
    makeEvent('black-hole-civilization', 520, 2, { blackHoleMethod: '旋转能提取', blackHoleStable: true }),
    makeEvent('universe-escape-project', 530, 3, { escapeMode: '人造婴儿宇宙', escapeSuccess: true })
  ];
  buildCivilizationSimulation({
    universe,
    civilizationData,
    civilizationSimulation: simulation,
    cosmicEvents: events
  });
  const snapshot = simulation.snapshots.find((item) => item.time === 540);
  assert.equal(snapshot.biosphereStages[0], 5);
  assert.equal(snapshot.filterStates[0], 1);
  assert.equal(snapshot.migrationModes[1], 1);
  assert.equal(snapshot.engineeringModes[2], 1);
  assert.equal(snapshot.morphologyModes[3], 4);
  assert.equal(snapshot.substrateModes[3], 1);
  assert.equal(snapshot.artifacts[0], 1);
  assert.equal(snapshot.signalDelays[1], 42);
  assert.equal(snapshot.causalResponses[2], 1);
  assert.equal(snapshot.diasporaModes[1], 1);
  assert.equal(snapshot.blackHoleHabitats[2], 1);
  assert.equal(snapshot.escapeProjects[3], 1);
  assert.equal(snapshot.energyTiers[2], 3);
  assert.equal(snapshot.energyTiers[3], 4);
  assert.ok(snapshot.fermiAwareness.some((value) => value === 1));
  assert.ok(events.every((event) => event.outcome !== '事件仍在演化'));
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
