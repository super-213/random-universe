import { timelinePercentAt } from './timeline-layout.js';

const $ = (selector) => document.querySelector(selector);

let lastEventKey = '';
let eventFadeTimer = null;
let civilizationRows = [];
const energyTierLabels = ['', '行星能源', '恒星能源', '黑洞能源', '熵管理'];

const ui = {};
const cachedElement = (key, selector) => {
  if (!ui[key]?.isConnected) ui[key] = $(selector);
  return ui[key];
};
const setText = (element, value) => {
  if (element && element.textContent !== value) element.textContent = value;
};
const setStyle = (element, property, value) => {
  if (element && element.style[property] !== value) element.style[property] = value;
};

const timelineSegments = [
  [0, 18],
  [18, 55],
  [55, 145],
  [145, 245],
  [245, 340],
  [340, 470]
];

function addScaleMark(container, position, kind, viewport) {
  const percent = timelinePercentAt(position, viewport);
  if (percent < 0 || percent > 100) return;
  const marker = document.createElement('i');
  marker.className = `scale-${kind}`;
  marker.style.left = `${percent}%`;
  marker.dataset.position = position.toFixed(3);
  container.appendChild(marker);
}

export function renderTimelineScale(universe, viewport) {
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

    if (segmentIndex > 0) addScaleMark(container, start, 'break', viewport);
    for (let cell = 0; cell < cellCount; cell++) {
      const cellStart = start + cell * cellWidth;
      if (segmentIndex === 0 || cell > 0) {
        addScaleMark(container, cellStart, 'tick scale-tick--major', viewport);
      }
      if (cellWidth < 20) continue;
      for (let mantissa = 2; mantissa <= 9; mantissa++) {
        const position = cellStart + Math.log10(mantissa) * cellWidth;
        const kind = mantissa === 2 || mantissa === 5
          ? 'tick scale-tick--mid'
          : 'tick scale-tick--minor';
        addScaleMark(container, position, kind, viewport);
      }
    }
  });
  addScaleMark(container, 1000, 'tick scale-tick--major', viewport);
}

export function restartTimelineScaleIntro() {
  const scale = $('#timeline-scale');
  if (!scale) return;
  scale.classList.remove('is-entering');
  void scale.offsetWidth;
  scale.classList.add('is-entering');
}

export function focusTimelineScale(position, viewport) {
  const scale = $('#timeline-scale');
  if (!scale || scale.clientWidth === 0) return;
  const focusX = timelinePercentAt(position, viewport) / 100 * scale.clientWidth;
  const radius = Math.min(58, scale.clientWidth * .09);

  scale.querySelectorAll('.scale-tick').forEach((tick) => {
    const tickX = timelinePercentAt(Number(tick.dataset.position), viewport) / 100 * scale.clientWidth;
    const distance = tickX - focusX;
    const proximity = Math.max(0, 1 - Math.abs(distance) / radius);
    const shift = Math.sign(distance) * proximity * radius * .34;
    const stretch = 1 + proximity * 1.35;
    tick.style.transform = `translateX(calc(-50% + ${shift.toFixed(2)}px)) scaleY(${stretch.toFixed(3)})`;
  });

  const eventTrack = $('#cosmic-event-markers');
  if (!eventTrack || eventTrack.clientWidth === 0) return;
  const eventRadius = Math.min(92, eventTrack.clientWidth * .12);
  eventTrack.querySelectorAll('.event-marker').forEach((marker) => {
    const markerX = timelinePercentAt(Number(marker.dataset.position), viewport) / 100 * eventTrack.clientWidth;
    const distance = markerX - focusX;
    const proximity = Math.max(0, 1 - Math.abs(distance) / eventRadius);
    const shift = Math.sign(distance) * proximity * eventRadius * .52;
    marker.style.setProperty('--timeline-focus-shift', `${shift.toFixed(2)}px`);
    marker.style.setProperty('--timeline-focus-growth', (proximity * .16).toFixed(3));
  });
}

export function resetTimelineScaleFocus() {
  $('#timeline-scale')?.querySelectorAll('.scale-tick').forEach((tick) => {
    tick.style.transform = '';
  });
  $('#cosmic-event-markers')?.querySelectorAll('.event-marker').forEach((marker) => {
    marker.style.removeProperty('--timeline-focus-shift');
    marker.style.removeProperty('--timeline-focus-growth');
  });
}

export function renderTimelineHeader(state, viewport) {
  const timeline = cachedElement('timeline', '#cosmic-timeline');
  const timelineValue = String(state.position);
  if (timeline?.value !== timelineValue) timeline.value = timelineValue;
  if (timeline?.getAttribute('aria-valuetext') !== state.label) {
    timeline?.setAttribute('aria-valuetext', state.label);
  }
  const viewportPercent = Math.max(0, Math.min(100, timelinePercentAt(state.position, viewport)));
  setStyle(cachedElement('progress', '#time-progress'), 'width', `${viewportPercent}%`);
  setText(cachedElement('timelineValue', '#timeline-value'), state.label);
  const scrubValue = cachedElement('timelineScrubValue', '#timeline-scrub-value');
  setText(scrubValue, state.label);
  setStyle(scrubValue, 'left', `${viewportPercent}%`);
  scrubValue?.classList.toggle('is-at-start', viewportPercent < 5.5);
  scrubValue?.classList.toggle('is-at-end', viewportPercent > 94.5);
  document.querySelectorAll('.timeline-marks [data-position]').forEach((mark) => {
    const percent = timelinePercentAt(Number(mark.dataset.position), viewport);
    mark.hidden = percent < 0 || percent > 100;
    mark.style.left = `${percent}%`;
  });
  setText(cachedElement('eraName', '#era-name'), state.era.name);
  setText(cachedElement('cosmicTime', '#cosmic-time'), state.label.replace('T+', ''));
  setText(cachedElement('eraDescription', '#era-description'), state.era.description);
  const opacity = state.galaxyIdentityOpacity.toFixed(3);
  const title = cachedElement('explorerTitle', '.explorer-title');
  if (title?.style.getPropertyValue('--cosmic-opacity') !== opacity) {
    title.style.setProperty('--cosmic-opacity', opacity);
  }
}

export function renderCivilizationRows({ position, simulationState, runtimeState, civilizationData }) {
  const activeSpecies = runtimeState.filter((state) => state.alive).length;
  const occupiedDomains = runtimeState.reduce(
    (total, state) => total + (state.alive && !state.ascended ? state.count : 0),
    0
  );
  const totalPopulation = runtimeState.reduce((total, state) => total + (state.alive ? state.population : 0), 0);
  const panel = cachedElement('civilizationPanel', '#civilization-panel');
  const opacity = activeSpecies > 0 ? '1' : '0';
  if (panel?.style.getPropertyValue('--cosmic-opacity') !== opacity) {
    panel.style.setProperty('--cosmic-opacity', opacity);
  }
  setText(cachedElement('civilizationSpeciesCount', '#civilization-species-count'), `${activeSpecies} 种`);
  setText(cachedElement('civilizationDomainCount', '#civilization-domain-count'), `${occupiedDomains} 域`);
  setText(cachedElement('civilizationPopulationCount', '#civilization-population-count'), `${totalPopulation.toFixed(1)} 万亿`);
  const toggle = cachedElement('civilizationToggle', '#toggle-civilizations');
  toggle?.setAttribute(
    'aria-label',
    activeSpecies > 0
      ? `主要文明样本，${activeSpecies} 个种群，${occupiedDomains} 个星域，人口 ${totalPopulation.toFixed(1)} 万亿`
      : '主要文明样本，尚未出现'
  );

  if (!panel?.classList.contains('is-expanded')) return;
  if (civilizationRows.length !== civilizationData.length || !civilizationRows[0]?.isConnected) {
    civilizationRows = civilizationData.map((_, index) => document.querySelector(`[data-species="${index}"]`));
  }
  runtimeState.forEach((state, index) => {
    const species = civilizationData[index];
    const row = civilizationRows[index];
    if (!row) return;
    setStyle(row, 'opacity', state.alive ? '1' : '.18');
    row.classList.toggle('is-impacted', state.alive && state.eventState.causes.length > 0);
    row.classList.toggle('is-ascended', state.ascended);
    const details = [];
    if (simulationState?.causes[index]) details.push(simulationState.causes[index]);
    if (state.friendlyNames.length) details.push(`与 ${state.friendlyNames.join('、')} 友好交流`);
    if (state.conflictNames.length) details.push(`与 ${state.conflictNames.join('、')} 冲突`);
    if (state.eventState.causes.length) details.push(`受 ${state.eventState.causes.join('、')} 影响`);
    if (state.statuses.length) details.push(state.statuses.join('、'));
    if (state.alive) {
      details.push(`${energyTierLabels[state.energyTier] || '前工业能源'} · 人口 ${state.population.toFixed(2)} 万亿 · 物质 ${(state.materials * 100).toFixed(0)} · 能源 ${(state.energy * 100).toFixed(0)} · 算力 ${(state.compute * 100).toFixed(0)} · 承载力 ${(state.biosphere * 100).toFixed(0)} · 物流 ${(state.logistics * 100).toFixed(0)} · 治理 ${(state.governance * 100).toFixed(0)} · 科研 ${(state.research * 100).toFixed(0)} · 稳定 ${(state.stability * 100).toFixed(0)}`);
    }
    const title = state.ascended ? '1% 概率的高维转化：已脱离普通物质宿主' : details.join('；');
    if (row.title !== title) row.title = title;
    setText(row.querySelector('b'), state.alive
      ? (state.ascended
          ? '超维存续'
          : state.escaped
            ? '母宇宙外存续'
          : `${state.count} 域 · ${state.population.toFixed(1)} 万亿${state.trend > 0 ? ' ↑' : state.trend < 0 ? ' ↓' : ''}${state.externalGalaxyIndex ? ' · 外星系' : ''}`)
      : position < species.birth ? '未诞生' : '衰亡');
  });
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
