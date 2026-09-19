const $ = (selector) => document.querySelector(selector);

let lastEventKey = '';
let eventFadeTimer = null;

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
