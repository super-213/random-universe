import assert from 'node:assert/strict';
import test from 'node:test';
import {
  allTimelineEventFiltersSelected,
  timelineEventFilterFor,
  timelineEventFilterKeys,
  timelineEventMatchesFilters,
  toggleTimelineEventFilter
} from '../../src/ui/timeline-filters.js';

test('timeline event filters classify every event into one distinct type', () => {
  assert.equal(timelineEventFilterFor({ category: 'astronomy' }), 'astro');
  assert.equal(timelineEventFilterFor({ category: 'civilization' }), 'civilization');
  assert.equal(timelineEventFilterFor({
    category: 'civilization',
    confidence: 'science-fiction'
  }), 'speculative');
});

test('timeline event filters begin fully selected and toggle independently', () => {
  const defaults = [...timelineEventFilterKeys];
  assert.equal(allTimelineEventFiltersSelected(defaults), true);

  const withoutCivilization = toggleTimelineEventFilter(defaults, 'civilization');
  assert.deepEqual(withoutCivilization, ['astro', 'speculative']);
  assert.equal(timelineEventMatchesFilters({ category: 'civilization' }, withoutCivilization), false);
  assert.equal(timelineEventMatchesFilters({ category: 'astronomy' }, withoutCivilization), true);

  assert.deepEqual(
    toggleTimelineEventFilter(withoutCivilization, 'civilization'),
    defaults
  );
});
