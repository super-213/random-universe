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
import { createStellarGravityState } from '../src/simulation/black-hole-gravity.js';
import { civilizationDeclineWindow } from '../src/simulation/civilization.js';
import {
  blackHoleEvaporationExponent,
  blackHoleMassFromSimulation,
  selectBlackHoleProgenitors
} from '../src/simulation/compact-objects.js';
import { expandEventSchedule } from '../src/simulation/event-occurrence.js';
import { blackHoleRecoilKms, createTransientSimulation } from '../src/simulation/transient-events.js';

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
