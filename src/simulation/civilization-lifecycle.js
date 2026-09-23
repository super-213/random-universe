import { stellarEndTimelinePosition } from '../domain/universe.js';

export function civilizationDeclineWindow(universe) {
  const stellarEnd = stellarEndTimelinePosition(universe);
  const finiteOutcome = universe.cosmicFate?.type !== 'heat-death';
  const stellarEndReached = !finiteOutcome
    || universe.cosmicFate.outcomeExponent > universe.lastStarDeathExponent;
  const energyStart = stellarEndReached ? Math.max(470, stellarEnd - 22) : Infinity;
  const energyEnd = stellarEndReached ? Math.min(1000, stellarEnd + 55) : Infinity;
  return {
    energyStart,
    energyEnd,
    fateStart: finiteOutcome ? universe.cosmicFate.onsetAt : Infinity,
    fateEnd: finiteOutcome ? 1000 : Infinity
  };
}
