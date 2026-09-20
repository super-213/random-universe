const energyTierLabels = ['', '行星能源', '恒星能源', '黑洞能源', '熵管理'];

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
  timeLabel
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
  panel.classList.add('is-open');
}

export function historyExportPayload({ universe, civilizationData, cosmicEvents }) {
  return {
    format: 'random-universe-history-v1',
    seed: universe.seed,
    fate: universe.cosmicFate,
    civilizations: civilizationData.map((species, speciesIndex) => ({
      name: species.name,
      morphology: species.morphology,
      biospherePath: species.biospherePath,
      fermiScenario: species.fermiScenario,
      birth: species.birth,
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
