import {
  formatTimeSpeed,
  snapSpeedExponent,
  speedExponentMax,
  speedExponentMin,
  speedFromExponent
} from '../../ui/speed-control.js';

const clamp = (value, minimum, maximum) => Math.min(maximum, Math.max(minimum, value));

export function createTimelineController({
  compactLayout,
  dom,
  getDependencies,
  getEvents,
  getUniverse,
  onCloseDetail,
  onFilterChange,
  onPlayStart,
  onPositionChange,
  onViewportChange,
  session,
  updateFilterToggle
}) {
  const abortController = new AbortController();
  const { signal } = abortController;
  const query = dom.query;
  const timelineInput = dom.byId['cosmic-timeline'];
  const timelineWrap = timelineInput.closest('.range-wrap');
  const timelineFilterToggle = dom.byId['timeline-filter-toggle'];
  const timelineFilterMenu = dom.byId['timeline-filter-menu'];
  const speedControl = dom.byId['speed-control'];
  const speedToggle = dom.byId['speed-toggle'];
  const speedInput = dom.byId['time-speed'];
  let timelinePointerId = null;
  let timelineSnapTarget = null;

  function listen(target, eventName, listener, options = {}) {
    target.addEventListener(eventName, listener, { ...options, signal });
  }

  function filteredEvents() {
    return getEvents().filter((event) => {
      const filter = session.timeline.eventFilter;
      if (filter === 'astro') return event.category !== 'civilization';
      if (filter === 'civilization') return event.category === 'civilization';
      if (filter === 'speculative') return event.confidence === 'science-fiction';
      return true;
    });
  }

  function isViewportZoomed() {
    return session.timeline.viewport.end - session.timeline.viewport.start < 999.5;
  }

  function setFilterMenuOpen(open) {
    timelineFilterMenu.hidden = !open;
    timelineFilterToggle.setAttribute('aria-expanded', String(open));
    if (open) {
      onCloseDetail();
      timelineFilterMenu.querySelector('[aria-checked="true"]')?.focus({ preventScroll: true });
    }
  }

  function pause() {
    session.timeline.playing = false;
    query('#toggle-time').textContent = '▶';
    query('#toggle-time').setAttribute('aria-label', '播放时间');
  }

  function resetSnapTarget() {
    timelineSnapTarget = null;
    dom.queryAll('.event-marker.is-snap-target').forEach((marker) => {
      marker.classList.remove('is-snap-target');
    });
  }

  function updateSnapTarget(position, trackWidth) {
    resetSnapTarget();
    const dependencies = getDependencies();
    if (!session.timeline.snapEnabled || !dependencies?.nearestTimelineEvent) return null;
    const tolerance = (session.timeline.viewport.end - session.timeline.viewport.start)
      / Math.max(1, trackWidth)
      * (compactLayout.matches ? 18 : 12);
    timelineSnapTarget = dependencies.nearestTimelineEvent(filteredEvents(), position, tolerance);
    if (!timelineSnapTarget) return null;
    const eventIndex = getEvents().indexOf(timelineSnapTarget.event);
    dom.queryAll('.event-marker').forEach((marker) => {
      const indices = marker.dataset.eventIndices
        ? marker.dataset.eventIndices.split(',').map(Number)
        : [Number(marker.dataset.eventIndex)];
      if (indices.includes(eventIndex)) marker.classList.add('is-snap-target');
    });
    return timelineSnapTarget;
  }

  function beginFocus() {
    timelineWrap.classList.add('is-scrubbing');
    getDependencies().focusTimelineScale(
      Number(timelineInput.value),
      session.timeline.viewport
    );
  }

  function endFocus() {
    if (!timelineWrap.classList.contains('is-scrubbing')) return;
    timelineWrap.classList.remove('is-scrubbing');
    getDependencies().resetTimelineScaleFocus();
  }

  function updateFromPointer(event) {
    const bounds = timelineWrap.getBoundingClientRect();
    if (bounds.width <= 0) return null;
    const dependencies = getDependencies();
    const progress = clamp((event.clientX - bounds.left) / bounds.width, 0, 1);
    const position = Math.round(
      dependencies.timelinePositionAtPercent(progress * 100, session.timeline.viewport) * 10
    ) / 10;
    onPositionChange(position, true);
    dependencies.focusTimelineScale(position, session.timeline.viewport);
    const snapTarget = updateSnapTarget(position, bounds.width);
    if (snapTarget) {
      query('#timeline-scrub-value').textContent = `吸附 · ${dependencies.cosmicTimeLabel(snapTarget.position, getUniverse())}`;
    }
    return snapTarget;
  }

  function beginScrub(event) {
    if (event.button !== 0 || event.target.closest('.event-marker, [data-timeline-control]')) return;
    event.preventDefault();
    onCloseDetail();
    timelinePointerId = event.pointerId;
    timelineWrap.setPointerCapture(event.pointerId);
    timelineInput.focus({ preventScroll: true });
    timelineWrap.classList.remove('is-keyboard-focus');
    pause();
    beginFocus();
    updateFromPointer(event);
  }

  function moveScrub(event) {
    if (event.pointerId === timelinePointerId) updateFromPointer(event);
  }

  function endScrub(event, allowSnap = true) {
    if (event.pointerId !== timelinePointerId) return;
    const snapTarget = allowSnap ? updateFromPointer(event) : null;
    if (snapTarget) onPositionChange(snapTarget.position, true);
    timelinePointerId = null;
    if (timelineWrap.hasPointerCapture(event.pointerId)) {
      timelineWrap.releasePointerCapture(event.pointerId);
    }
    resetSnapTarget();
    endFocus();
  }

  function updateSpeedToggleLabel() {
    const action = speedControl.classList.contains('is-collapsed') ? '展开' : '收起';
    const currentSpeed = query('#time-speed-value').textContent.slice(0, -1);
    speedToggle.setAttribute('aria-label', `${action}时间倍率调节，当前 ${currentSpeed} 倍`);
  }

  function setSpeedControlOpen(open, restoreFocus = false) {
    speedControl.classList.toggle('is-collapsed', !open);
    speedToggle.setAttribute('aria-expanded', String(open));
    query('#speed-slider-panel').setAttribute('aria-hidden', String(!open));
    updateSpeedToggleLabel();
    if (open) speedInput.focus({ preventScroll: true });
    if (!open && restoreFocus) speedToggle.focus({ preventScroll: true });
  }

  function updateSpeed(exponent, snap = true) {
    const nextExponent = clamp(
      snap ? snapSpeedExponent(exponent) : Number(exponent),
      speedExponentMin,
      speedExponentMax
    );
    session.timeline.speed = speedFromExponent(nextExponent);
    const label = formatTimeSpeed(session.timeline.speed);
    speedInput.value = String(nextExponent);
    speedInput.style.setProperty(
      '--speed-progress',
      `${(nextExponent - speedExponentMin) / (speedExponentMax - speedExponentMin) * 100}%`
    );
    speedInput.setAttribute('aria-valuetext', `${label.slice(0, -1)} 倍`);
    query('#time-speed-value').textContent = label;
    updateSpeedToggleLabel();
    speedControl.querySelectorAll('[data-speed-label-exponent]').forEach((marker) => {
      marker.classList.toggle('is-active', Number(marker.dataset.speedLabelExponent) === nextExponent);
    });
  }

  listen(query('#close-timeline-event-detail'), 'click', onCloseDetail);
  listen(query('#toggle-time'), 'click', () => {
    const willPlay = !session.timeline.playing;
    if (willPlay && isViewportZoomed()) {
      session.timeline.viewport = { start: 0, end: 1000 };
      onViewportChange();
    }
    if (session.timeline.position >= 1000) onPositionChange(0, true);
    session.timeline.playing = !session.timeline.playing;
    if (session.timeline.playing) onPlayStart();
    query('#toggle-time').textContent = session.timeline.playing ? 'Ⅱ' : '▶';
    query('#toggle-time').setAttribute('aria-label', session.timeline.playing ? '暂停时间' : '播放时间');
  });
  listen(timelineFilterToggle, 'click', () => setFilterMenuOpen(timelineFilterMenu.hidden));
  listen(document, 'pointerdown', (event) => {
    if (!timelineFilterMenu.hidden && !event.target.closest('.timeline-filter')) {
      setFilterMenuOpen(false);
    }
  });
  timelineFilterMenu.querySelectorAll('[data-event-filter]').forEach((button) => {
    listen(button, 'click', () => {
      session.timeline.eventFilter = button.dataset.eventFilter;
      timelineFilterMenu.querySelectorAll('[data-event-filter]').forEach((item) => {
        item.setAttribute('aria-checked', String(item === button));
      });
      updateFilterToggle(session.timeline.eventFilter);
      setFilterMenuOpen(false);
      onFilterChange();
      timelineFilterToggle.focus({ preventScroll: true });
    });
  });
  listen(query('#toggle-timeline-snap'), 'click', (event) => {
    session.timeline.snapEnabled = !session.timeline.snapEnabled;
    event.currentTarget.classList.toggle('is-active', session.timeline.snapEnabled);
    event.currentTarget.setAttribute('aria-pressed', String(session.timeline.snapEnabled));
  });
  listen(query('#timeline-zoom-reset'), 'click', () => {
    session.timeline.viewport = { start: 0, end: 1000 };
    onViewportChange();
  });
  listen(timelineWrap, 'pointerdown', beginScrub);
  listen(timelineWrap, 'pointermove', moveScrub);
  listen(timelineWrap, 'pointerup', endScrub);
  listen(timelineWrap, 'pointercancel', (event) => endScrub(event, false));
  listen(timelineWrap, 'lostpointercapture', (event) => {
    if (event.pointerId !== timelinePointerId) return;
    timelinePointerId = null;
    resetSnapTarget();
    endFocus();
  });
  listen(timelineWrap, 'wheel', (event) => {
    if (event.target.closest('[data-timeline-control]')) return;
    event.preventDefault();
    onCloseDetail();
    const dependencies = getDependencies();
    const bounds = timelineWrap.getBoundingClientRect();
    const percent = clamp((event.clientX - bounds.left) / bounds.width, 0, 1) * 100;
    const anchor = dependencies.timelinePositionAtPercent(percent, session.timeline.viewport);
    const scale = Math.exp(clamp(event.deltaY, -240, 240) * .0024);
    session.timeline.viewport = dependencies.zoomTimelineViewport(
      session.timeline.viewport,
      anchor,
      scale,
      compactLayout.matches ? 80 : 55
    );
    onViewportChange();
  }, { passive: false });
  listen(timelineWrap, 'dblclick', (event) => {
    if (event.target.closest('[data-timeline-control], .event-marker')) return;
    session.timeline.viewport = { start: 0, end: 1000 };
    onViewportChange();
  });
  listen(timelineInput, 'focus', () => {
    if (timelinePointerId === null) timelineWrap.classList.add('is-keyboard-focus');
  });
  listen(timelineInput, 'keydown', (event) => {
    if (['ArrowLeft', 'ArrowRight', 'Home', 'End', 'PageUp', 'PageDown'].includes(event.key)) {
      beginFocus();
    }
  });
  listen(timelineInput, 'keyup', endFocus);
  listen(timelineInput, 'blur', () => {
    timelineWrap.classList.remove('is-keyboard-focus');
    endFocus();
  });
  listen(timelineInput, 'input', (event) => {
    pause();
    onPositionChange(event.target.value, true);
    if (timelineWrap.classList.contains('is-scrubbing')) {
      getDependencies().focusTimelineScale(Number(event.target.value), session.timeline.viewport);
    }
  });
  listen(speedToggle, 'click', () => {
    const open = speedControl.classList.contains('is-collapsed');
    setSpeedControlOpen(open, !open);
  });
  listen(speedInput, 'input', (event) => updateSpeed(event.target.value));
  listen(speedInput, 'keydown', (event) => {
    if (event.key === 'Escape') {
      event.stopPropagation();
      setSpeedControlOpen(false, true);
    }
  });
  speedControl.querySelectorAll('[data-speed-exponent]').forEach((marker) => {
    listen(marker, 'click', () => {
      updateSpeed(marker.dataset.speedExponent, false);
      speedInput.focus({ preventScroll: true });
    });
  });
  updateSpeed(speedInput.value, false);

  return {
    dispose: () => abortController.abort(),
    isFilterMenuOpen: () => !timelineFilterMenu.hidden,
    isViewportZoomed,
    pause,
    setFilterMenuOpen
  };
}
