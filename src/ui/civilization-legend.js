let organizedLegendSnapshot = null;

const $ = (selector) => document.querySelector(selector);

export function resetCivilizationLegend() {
  organizedLegendSnapshot = null;
}

export function organizeCivilizationLegend(snapshot, civilizationData) {
  if (!snapshot || snapshot === organizedLegendSnapshot) return;
  organizedLegendSnapshot = snapshot;
  const legend = $('#civilization-legend');
  const speciesCount = civilizationData.length;
  const speciesRows = new Map(
    [...legend.querySelectorAll('.civilization-item')].map((row) => [Number(row.dataset.species), row])
  );
  legend.replaceChildren();
  const parent = Int16Array.from({ length: speciesCount }, (_, index) => index);
  const find = (index) => {
    let root = index;
    while (parent[root] !== root) root = parent[root];
    while (parent[index] !== index) {
      const next = parent[index];
      parent[index] = root;
      index = next;
    }
    return root;
  };
  const union = (a, b) => {
    const rootA = find(a);
    const rootB = find(b);
    if (rootA !== rootB) parent[Math.max(rootA, rootB)] = Math.min(rootA, rootB);
  };

  for (let a = 0; a < speciesCount; a++) {
    if (!snapshot.active[a] || snapshot.ascended[a]) continue;
    for (let b = a + 1; b < speciesCount; b++) {
      if (!snapshot.active[b] || snapshot.ascended[b]) continue;
      const relationIndex = a * speciesCount + b;
      if (snapshot.relations[relationIndex] > 0 && snapshot.relationScores[relationIndex] >= .52) union(a, b);
    }
  }

  const components = new Map();
  const inactive = [];
  const detached = [];
  for (let index = 0; index < speciesCount; index++) {
    if (!snapshot.active[index]) {
      inactive.push(index);
      continue;
    }
    if (snapshot.ascended[index]) {
      detached.push(index);
      continue;
    }
    const root = find(index);
    if (!components.has(root)) components.set(root, []);
    components.get(root).push(index);
  }
  const factions = [...components.values()];
  const factionStrength = (members) => members.reduce((sum, index) => sum + snapshot.counts[index], 0);
  const strongestRelation = (left, right) => {
    let strongest = { kind: 'neutral', state: 0, strength: 0 };
    left.forEach((a) => right.forEach((b) => {
      const index = a * speciesCount + b;
      const state = snapshot.relations[index];
      const strength = Math.abs(snapshot.relationScores[index]);
      if (state !== 0 && strength > strongest.strength) {
        strongest = { kind: state < 0 ? 'conflict' : 'friendly', state, strength };
      }
    }));
    return strongest;
  };
  factions.sort((a, b) => factionStrength(b) - factionStrength(a));
  const orderedFactions = factions.length ? [factions.shift()] : [];
  while (factions.length) {
    const previous = orderedFactions[orderedFactions.length - 1];
    let bestIndex = 0;
    let bestStrength = -1;
    factions.forEach((candidate, index) => {
      const strength = strongestRelation(previous, candidate).strength;
      if (strength > bestStrength) { bestStrength = strength; bestIndex = index; }
    });
    orderedFactions.push(factions.splice(bestIndex, 1)[0]);
  }

  const relationIcons = {
    conflict: '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 3l10 10M13 3L3 13"/><path d="M2 5l3-3M11 14l3-3"/></svg>',
    friendly: '<svg viewBox="0 0 16 16" aria-hidden="true"><circle cx="6" cy="8" r="3.5"/><circle cx="10" cy="8" r="3.5"/></svg>',
    neutral: '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M2.5 8h3M10.5 8h3"/><circle cx="8" cy="8" r="1.25"/></svg>'
  };
  const relationName = (kind) => kind === 'conflict' ? '冲突' : kind === 'friendly' ? '友好' : '中立';
  const factionAccent = (members) => {
    const representative = members.slice().sort((a, b) => snapshot.counts[b] - snapshot.counts[a])[0];
    return `#${civilizationData[representative].color.toString(16).padStart(6, '0')}`;
  };
  const factionMeta = orderedFactions.map((members, index) => ({
    members,
    number: String(index + 1).padStart(2, '0'),
    accent: factionAccent(members)
  }));

  factionMeta.forEach((faction, factionIndex) => {
    const block = document.createElement('section');
    block.className = 'faction-block';
    block.style.setProperty('--faction', faction.accent);
    block.setAttribute('aria-label', `阵营 ${faction.number}`);

    const header = document.createElement('div');
    header.className = 'faction-header';
    const identity = document.createElement('span');
    identity.className = 'faction-identity';
    identity.textContent = faction.number;
    identity.setAttribute('aria-hidden', 'true');
    header.appendChild(identity);

    const relations = document.createElement('div');
    relations.className = 'faction-relations';
    const relatedFactions = { conflict: [], friendly: [], neutral: [] };
    factionMeta.forEach((target, targetIndex) => {
      if (targetIndex === factionIndex) return;
      const relation = strongestRelation(faction.members, target.members);
      relatedFactions[relation.kind].push(target);
    });
    ['conflict', 'friendly', 'neutral'].forEach((kind) => {
      const targets = relatedFactions[kind];
      if (!targets.length) return;
      const relationSet = document.createElement('span');
      relationSet.className = `faction-relation is-${kind}`;
      const accessibleName = `阵营 ${faction.number}${relationName(kind)}：阵营 ${targets.map((target) => target.number).join('、')}`;
      relationSet.setAttribute('role', 'img');
      relationSet.setAttribute('aria-label', accessibleName);
      relationSet.title = accessibleName;
      relationSet.innerHTML = `${relationIcons[kind]}<span>${targets.map((target) => `<b style="--target-faction:${target.accent}">${target.number}</b>`).join('')}</span>`;
      relations.appendChild(relationSet);
    });
    header.appendChild(relations);
    block.appendChild(header);

    const members = document.createElement('div');
    members.className = 'faction-members';
    faction.members
      .slice()
      .sort((a, b) => (snapshot.counts[b] - snapshot.counts[a]) || a - b)
      .forEach((speciesIndex) => {
        const row = speciesRows.get(speciesIndex);
        if (row) members.appendChild(row);
      });
    block.appendChild(members);
    legend.appendChild(block);
  });

  if (detached.length) {
    const block = document.createElement('section');
    block.className = 'faction-block is-transcendent';
    block.setAttribute('aria-label', '升维种群');
    block.innerHTML = '<div class="faction-header"><span class="faction-identity" aria-hidden="true">◇</span></div>';
    const members = document.createElement('div');
    members.className = 'faction-members';
    detached.forEach((speciesIndex) => {
      const row = speciesRows.get(speciesIndex);
      if (row) members.appendChild(row);
    });
    block.appendChild(members);
    legend.appendChild(block);
  }

  if (inactive.length) {
    const inactiveGroup = document.createElement('div');
    inactiveGroup.className = 'faction-inactive';
    inactive.forEach((speciesIndex) => {
      const row = speciesRows.get(speciesIndex);
      if (row) inactiveGroup.appendChild(row);
    });
    legend.appendChild(inactiveGroup);
  }
}
