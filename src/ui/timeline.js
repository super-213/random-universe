const $ = (selector) => document.querySelector(selector);

let lastEventKey = '';
let eventFadeTimer = null;

const timelineSegments = [
  [0, 18],
  [18, 55],
  [55, 145],
  [145, 245],
  [245, 340],
  [340, 470]
];

function addScaleMark(container, position, kind) {
  const marker = document.createElement('i');
  marker.className = `scale-${kind}`;
  marker.style.left = `${position / 10}%`;
  marker.dataset.position = position.toFixed(3);
  container.appendChild(marker);
}

export function renderTimelineScale(universe) {
  const container = $('#timeline-scale');
  if (!container) return;

  const fate = universe?.cosmicFate;
  const fateOnset = Math.min(999, Math.max(471, fate?.onsetAt || 850));
  const futureSegments = fate?.type === 'heat-death'
    ? [[470, 570], [570, 650], [650, 680], [680, 845], [845, 950], [950, 1000]]
    : [[470, fateOnset], [fateOnset, 1000]];
  const segments = [...timelineSegments, ...futureSegments]
    .filter(([start, end]) => end > start);

  container.replaceChildren();
  segments.forEach(([start, end], segmentIndex) => {
    const span = end - start;
    const cellCount = Math.max(1, Math.min(4, Math.round(span / 48)));
    const cellWidth = span / cellCount;

    if (segmentIndex > 0) addScaleMark(container, start, 'break');
    for (let cell = 0; cell < cellCount; cell++) {
      const cellStart = start + cell * cellWidth;
      if (segmentIndex === 0 || cell > 0) addScaleMark(container, cellStart, 'tick scale-tick--major');
      if (cellWidth < 20) continue;
      for (let mantissa = 2; mantissa <= 9; mantissa++) {
        const position = cellStart + Math.log10(mantissa) * cellWidth;
        const kind = mantissa === 2 || mantissa === 5
          ? 'tick scale-tick--mid'
          : 'tick scale-tick--minor';
        addScaleMark(container, position, kind);
      }
    }
  });
  addScaleMark(container, 1000, 'tick scale-tick--major');
}

export function restartTimelineScaleIntro() {
  const scale = $('#timeline-scale');
  if (!scale) return;
  scale.classList.remove('is-entering');
  void scale.offsetWidth;
  scale.classList.add('is-entering');
}

export function focusTimelineScale(position) {
  const scale = $('#timeline-scale');
  if (!scale || scale.clientWidth === 0) return;
  const focusX = position / 1000 * scale.clientWidth;
  const radius = Math.min(58, scale.clientWidth * .09);

  scale.querySelectorAll('.scale-tick').forEach((tick) => {
    const tickX = Number(tick.dataset.position) / 1000 * scale.clientWidth;
    const distance = tickX - focusX;
    const proximity = Math.max(0, 1 - Math.abs(distance) / radius);
    const shift = Math.sign(distance) * proximity * radius * .34;
    const stretch = 1 + proximity * 1.35;
    tick.style.transform = `translateX(calc(-50% + ${shift.toFixed(2)}px)) scaleY(${stretch.toFixed(3)})`;
  });
}

export function resetTimelineScaleFocus() {
  $('#timeline-scale')?.querySelectorAll('.scale-tick').forEach((tick) => {
    tick.style.transform = '';
  });
}

export function renderTimelineHeader(state) {
  $('#cosmic-timeline').value = state.position;
  $('#time-progress').style.width = `${state.position / 10}%`;
  $('#timeline-value').textContent = state.label;
  $('#era-number').textContent = String(state.eraIndex + 1).padStart(2, '0');
  $('#era-name').textContent = state.era.name;
  $('#cosmic-time').textContent = state.label.replace('T+', '');
  $('#era-description').textContent = state.era.description;
  $('.explorer-title').style.setProperty('--cosmic-opacity', state.galaxyIdentityOpacity.toFixed(3));
}

export function renderCivilizationRows({ position, simulationState, runtimeState, civilizationData }) {
  runtimeState.forEach((state, index) => {
    const species = civilizationData[index];
    const row = document.querySelector(`[data-species="${index}"]`);
    if (!row) return;
    row.style.opacity = state.alive ? '1' : '.18';
    row.classList.toggle('is-impacted', state.alive && state.eventState.causes.length > 0);
    row.classList.toggle('is-ascended', state.ascended);
    const details = [];
    if (simulationState?.causes[index]) details.push(simulationState.causes[index]);
    if (state.friendlyNames.length) details.push(`与 ${state.friendlyNames.join('、')} 友好交流`);
    if (state.conflictNames.length) details.push(`与 ${state.conflictNames.join('、')} 冲突`);
    if (state.eventState.causes.length) details.push(`受 ${state.eventState.causes.join('、')} 影响`);
    row.title = state.ascended ? '1% 概率的高维转化：已脱离普通物质宿主' : details.join('；');
    row.querySelector('b').textContent = state.alive
      ? (state.ascended ? '超维存续' : `${state.count} 域${state.trend > 0 ? ' ↑' : state.trend < 0 ? ' ↓' : ''}`)
      : position < species.birth ? '未诞生' : '衰亡';
  });
  const activeSpecies = runtimeState.filter((state) => state.alive).length;
  const occupiedDomains = runtimeState.reduce(
    (total, state) => total + (state.alive && !state.ascended ? state.count : 0),
    0
  );
  $('#civilization-panel').style.setProperty('--cosmic-opacity', activeSpecies > 0 ? '1' : '0');
  $('#civilization-summary').textContent = activeSpecies > 0
    ? `${activeSpecies} 种 · ${occupiedDomains} 域`
    : '尚未出现';
}

export function renderTimelineEvent(event, force = false) {
  if (event.key === lastEventKey && !force) return;
  lastEventKey = event.key;
  $('#event-year').textContent = event.time;
  $('#event-text').textContent = event.text;
  const feed = $('#event-feed');
  feed.classList.remove('is-visible');
  requestAnimationFrame(() => feed.classList.add('is-visible'));
  clearTimeout(eventFadeTimer);
  eventFadeTimer = setTimeout(() => feed.classList.remove('is-visible'), 3200);
}
