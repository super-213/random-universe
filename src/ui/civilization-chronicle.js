import { technologyPath } from '../simulation/technology-tree.js';
import { fleetStateLabel } from '../simulation/intergalactic-travel.js';
import { renderCausalGraph } from './causal-graph.js';

const energyTierLabels = ['', '行星能源', '恒星能源', '黑洞能源', '熵管理'];

const metricDefinitions = [
  ['population', '人口', (value) => `${value.toFixed(2)} 万亿`],
  ['materials', '物质', (value) => `${Math.round(value * 100)}%`],
  ['energy', '能源', (value) => `${Math.round(value * 100)}%`],
  ['compute', '算力', (value) => `${Math.round(value * 100)}%`],
  ['biosphere', '承载力', (value) => `${Math.round(value * 100)}%`],
  ['logistics', '物流', (value) => `${Math.round(value * 100)}%`],
  ['governance', '治理', (value) => `${Math.round(value * 100)}%`],
  ['research', '科研', (value) => `${Math.round(value * 100)}%`],
  ['stability', '稳定', (value) => `${Math.round(value * 100)}%`]
];

function renderInternalMetrics(container, state) {
  container.replaceChildren();
  metricDefinitions.forEach(([key, label, formatter]) => {
    const row = document.createElement('div');
    const value = state?.[key] || 0;
    const normalized = key === 'population' ? Math.min(1, value / 18) : value;
    row.innerHTML = `<span>${label}</span><i style="--metric:${Math.round(normalized * 100)}%"></i><b>${formatter(value)}</b>`;
    container.appendChild(row);
  });
}

function renderObservation(container, observation, timeLabel, universe) {
  container.replaceChildren();
  if (!observation) return;
  const delayLabel = observation.delay >= 1e6
    ? `${(observation.delay / 1e6).toFixed(2)} 百万年`
    : observation.delay >= 1e3
      ? `${(observation.delay / 1e3).toFixed(1)} 千年`
      : `${Math.round(observation.delay)} 年`;
  const modeLabel = observation.mode === 'omniscient'
    ? '玩家真值视角'
    : observation.mode === 'direct' ? '文明本地遥测' : `延迟 ${delayLabel}`;
  const heading = document.createElement('p');
  heading.className = 'observation-summary';
  heading.textContent = observation.mode === 'delayed'
    ? `${modeLabel} · 置信度 ${Math.round(observation.confidence * 100)}% · 信号时刻 ${timeLabel(observation.observedAt, universe)}`
    : `${modeLabel} · 无光锥延迟`;
  container.appendChild(heading);
  const comparison = document.createElement('div');
  comparison.className = 'observation-comparison';
  [
    ['真实状态', observation.actual],
    ['文明观测', observation.observed],
    ['玩家推测', observation.inferred]
  ].forEach(([label, metrics]) => {
    const column = document.createElement('div');
    const uncertainty = label === '玩家推测' && observation.uncertainty
      ? ` ±${Math.round(observation.uncertainty * 100)}%`
      : '';
    column.innerHTML = `<span>${label}</span><b>${metrics.population.toFixed(2)} 万亿</b><small>稳定 ${Math.round(metrics.stability * 100)}%${uncertainty}</small>`;
    comparison.appendChild(column);
  });
  container.appendChild(comparison);
}

function eventRole(event, speciesIndex) {
  if (event.targetSpeciesIndex === speciesIndex) return '主体';
  if (event.secondarySpeciesIndex === speciesIndex) return '接触方';
  if (event.childSpeciesIndex === speciesIndex) return '继承者';
  return null;
}

export function civilizationHistory(speciesIndex, cosmicEvents) {
  return cosmicEvents
    .map((event) => ({ event, role: eventRole(event, speciesIndex) }))
    .filter(({ role }) => role)
    .sort((a, b) => a.event.impactAt - b.event.impactAt);
}

export function renderCivilizationChronicle({
  speciesIndex,
  civilizationData,
  runtimeState,
  cosmicEvents,
  universe,
  timeLabel,
  observation,
  localGroup
}) {
  const panel = document.querySelector('#civilization-chronicle');
  const species = civilizationData[speciesIndex];
  const state = runtimeState[speciesIndex];
  if (!panel || !species) return;

  panel.dataset.species = String(speciesIndex);
  panel.style.setProperty('--chronicle-color', `#${species.color.toString(16).padStart(6, '0')}`);
  panel.querySelector('#chronicle-name').textContent = species.name;
  panel.querySelector('#chronicle-form').textContent = state?.escaped
    ? '母宇宙外存续'
    : `${species.morphology || '生物共同体'} · ${energyTierLabels[state?.energyTier || 1]}`;
  panel.querySelector('#chronicle-biosphere').textContent = (species.biospherePath || []).join(' → ') || '未记录';
  panel.querySelector('#chronicle-fermi').textContent = species.fermiScenario || '未形成主导解释';
  const externalGalaxy = localGroup?.companions?.find((candidate) => candidate.index === state?.externalGalaxyIndex);
  panel.querySelector('#chronicle-reach').textContent = externalGalaxy
    ? `${externalGalaxy.name} · 外域人口 ${state.externalPopulation.toFixed(2)} 万亿`
    : '母星系内部';
  renderInternalMetrics(panel.querySelector('#chronicle-internal-metrics'), state);
  const fleetTarget = localGroup?.companions?.find((candidate) => candidate.index === state?.fleetTargetGalaxyIndex);
  const flight = panel.querySelector('#chronicle-flight');
  if (state?.fleetState) {
    flight.innerHTML = `
      <b>${fleetStateLabel(state.fleetState)} · ${fleetTarget?.name || '未知目标'}</b>
      <span>航程 ${state.fleetDistance.toFixed(2)} Mly · ${Math.round(state.fleetSpeed * 100)}% c</span>
      <span>人口 ${state.fleetPopulation.toFixed(2)} 万亿 · 补给 ${Math.round(state.fleetSupplies * 100)}%</span>
      <i style="--flight-progress:${Math.round(state.fleetProgress * 100)}%"></i>
    `;
  } else {
    flight.textContent = '尚未建立跨星系航线';
  }
  renderObservation(panel.querySelector('#chronicle-observation'), observation, timeLabel, universe);

  const technologyList = panel.querySelector('#chronicle-technology');
  technologyList.replaceChildren();
  technologyPath(state?.technologyMask || 0).forEach((node) => {
    const item = document.createElement('li');
    item.className = node.unlocked ? 'is-unlocked' : '';
    item.title = `资源成本 ${Math.round(node.cost.resources * 100)} · 能源成本 ${Math.round(node.cost.energy * 100)} · 稳定成本 ${Math.round(node.cost.stability * 100)}`;
    item.innerHTML = `<i></i><span>${node.label}</span><small>${node.unlocked ? '已完成' : '待解锁'}</small>`;
    technologyList.appendChild(item);
  });

  const history = civilizationHistory(speciesIndex, cosmicEvents);
  const list = panel.querySelector('#chronicle-events');
  list.replaceChildren();
  history.forEach(({ event, role }) => {
    const item = document.createElement('li');
    item.dataset.eventId = event.id;
    if (event.sourceEventId) item.dataset.sourceEventId = event.sourceEventId;
    const linked = Boolean(event.sourceEventId);
    const header = document.createElement('div');
    const when = document.createElement('time');
    when.textContent = timeLabel(event.impactAt, universe);
    const label = document.createElement('b');
    label.textContent = `${linked ? '↳ ' : ''}${event.label}`;
    header.append(when, label);
    const detail = document.createElement('p');
    detail.textContent = `${role} · ${event.outcome || event.message}`;
    item.append(header, detail);
    list.appendChild(item);
  });
  if (history.length === 0) {
    const empty = document.createElement('li');
    empty.className = 'is-empty';
    empty.textContent = '尚无可记录事件';
    list.appendChild(empty);
  }
  renderCausalGraph(panel.querySelector('#causal-graph'), history, timeLabel, universe);
  panel.classList.add('is-open');
}

export function historyExportPayload({
  universe,
  civilizationData,
  cosmicEvents,
  runtimeState = [],
  localGroup = null,
  cosmicCivilizations = null
}) {
  return {
    format: 'random-universe-history-v1',
    seed: universe.seed,
    fate: universe.cosmicFate,
    localGroup,
    cosmicCivilizations: cosmicCivilizations ? {
      civilizationStartAt: cosmicCivilizations.civilizationStartAt,
      fateBoundary: cosmicCivilizations.fateBoundary,
      routes: cosmicCivilizations.routes.map((route) => ({
        id: route.id,
        sourceIndex: route.sourceIndex,
        targetIndex: route.targetIndex,
        mode: route.mode,
        departureAt: route.departureAt,
        arrivalAt: route.arrivalAt,
        failureAt: Number.isFinite(route.failureAt) ? route.failureAt : null,
        distanceLightYears: route.distanceLightYears,
        speedFractionC: route.speedFractionC,
        trafficPhase: route.trafficPhase,
        trafficSpeed: route.trafficSpeed
      }))
    } : null,
    civilizations: civilizationData.map((species, speciesIndex) => ({
      name: species.name,
      morphology: species.morphology,
      biospherePath: species.biospherePath,
      fermiScenario: species.fermiScenario,
      birth: species.birth,
      internalState: runtimeState[speciesIndex] ? {
        population: runtimeState[speciesIndex].population,
        resources: runtimeState[speciesIndex].resources,
        materials: runtimeState[speciesIndex].materials,
        energy: runtimeState[speciesIndex].energy,
        compute: runtimeState[speciesIndex].compute,
        biosphere: runtimeState[speciesIndex].biosphere,
        logistics: runtimeState[speciesIndex].logistics,
        governance: runtimeState[speciesIndex].governance,
        research: runtimeState[speciesIndex].research,
        stability: runtimeState[speciesIndex].stability,
        technologyMask: runtimeState[speciesIndex].technologyMask,
        externalGalaxyIndex: runtimeState[speciesIndex].externalGalaxyIndex,
        externalPopulation: runtimeState[speciesIndex].externalPopulation,
        fleet: {
          state: runtimeState[speciesIndex].fleetState,
          targetGalaxyIndex: runtimeState[speciesIndex].fleetTargetGalaxyIndex,
          speed: runtimeState[speciesIndex].fleetSpeed,
          population: runtimeState[speciesIndex].fleetPopulation,
          supplies: runtimeState[speciesIndex].fleetSupplies,
          distanceMly: runtimeState[speciesIndex].fleetDistance,
          progress: runtimeState[speciesIndex].fleetProgress
        }
      } : null,
      history: civilizationHistory(speciesIndex, cosmicEvents).map(({ event, role }) => ({
        id: event.id,
        sourceEventId: event.sourceEventId || null,
        causalRootId: event.causalRootId || null,
        role,
        type: event.type,
        label: event.label,
        impactAt: event.impactAt,
        outcome: event.outcome
      }))
    }))
  };
}

export function renderMultiverseComparison(universes) {
  const container = document.querySelector('#multiverse-list');
  if (!container) return;
  container.replaceChildren();
  universes.forEach((candidate, index) => {
    const row = document.createElement('button');
    row.type = 'button';
    row.dataset.seed = candidate.seed;
    row.setAttribute('aria-label', `载入对比宇宙 ${candidate.seed}`);
    const identity = document.createElement('span');
    identity.textContent = index === 0 ? '当前' : `变体 ${String(index).padStart(2, '0')}`;
    const seed = document.createElement('b');
    seed.textContent = candidate.seed;
    const facts = document.createElement('small');
    facts.textContent = `${candidate.galaxyTypeLabel} · ${candidate.speciesCount} 文明样本 · ${candidate.cosmicFate.label}`;
    row.append(identity, seed, facts);
    container.appendChild(row);
  });
}
