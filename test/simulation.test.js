import test from 'node:test';
import assert from 'node:assert/strict';
import { cosmicTimeLabel, cosmicYearsToTimelinePosition } from '../src/domain/cosmic-time.js';
import { createUniverse } from '../src/domain/universe.js';
import { createSeededRandom } from '../src/domain/random.js';
import { createStellarGravityState } from '../src/simulation/black-hole-gravity.js';
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
