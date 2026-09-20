export const technologyBits = {
  planetaryIndustry: 1 << 0,
  dysonSwarm: 1 << 1,
  stellarEngine: 1 << 2,
  blackHoleEnergy: 1 << 3,
  universeEscape: 1 << 4
};

export const technologyTree = [
  {
    id: 'planetary-industry',
    label: '行星工业',
    bit: technologyBits.planetaryIndustry,
    prerequisite: null,
    cost: { resources: .05, energy: .03, stability: 0 }
  },
  {
    id: 'dyson-swarm',
    label: '戴森群',
    bit: technologyBits.dysonSwarm,
    prerequisite: technologyBits.planetaryIndustry,
    cost: { resources: .18, energy: .08, stability: .04 }
  },
  {
    id: 'stellar-engine',
    label: '恒星推进器',
    bit: technologyBits.stellarEngine,
    prerequisite: technologyBits.dysonSwarm,
    cost: { resources: .16, energy: .12, stability: .05 }
  },
  {
    id: 'black-hole-energy',
    label: '黑洞采能',
    bit: technologyBits.blackHoleEnergy,
    prerequisite: technologyBits.stellarEngine,
    cost: { resources: .22, energy: .1, stability: .06 }
  },
  {
    id: 'universe-escape',
    label: '宇宙逃逸',
    bit: technologyBits.universeEscape,
    prerequisite: technologyBits.blackHoleEnergy,
    cost: { resources: .35, energy: .28, stability: .12 }
  }
];

const has = (mask, bit) => (mask & bit) === bit;

export function technologyPath(mask) {
  return technologyTree.map((node) => ({ ...node, unlocked: has(mask, node.bit) }));
}

export function advanceTechnologyTree({
  mask,
  active,
  technology,
  research,
  resources,
  energy,
  hasCentralBlackHole,
  megastructure,
  engineeringMode,
  blackHoleHabitat,
  escapeProject
}) {
  if (!active) return { mask, unlocked: [], cost: { resources: 0, energy: 0, stability: 0 } };
  let nextMask = mask;
  const unlocked = [];
  const cost = { resources: 0, energy: 0, stability: 0 };
  const unlock = (node) => {
    if (has(nextMask, node.bit)) return;
    nextMask |= node.bit;
    unlocked.push(node.id);
    cost.resources += node.cost.resources;
    cost.energy += node.cost.energy;
    cost.stability += node.cost.stability;
  };

  unlock(technologyTree[0]);
  if (has(nextMask, technologyBits.planetaryIndustry)
    && (megastructure || technology >= .52 && research >= .42 && resources >= .34 && energy >= .38)) {
    unlock(technologyTree[1]);
  }
  if (has(nextMask, technologyBits.dysonSwarm)
    && (engineeringMode > 0 || technology >= .68 && research >= .58 && resources >= .42 && energy >= .56)) {
    unlock(technologyTree[2]);
  }
  if (has(nextMask, technologyBits.stellarEngine) && hasCentralBlackHole
    && (blackHoleHabitat > 0 || technology >= .82 && research >= .72 && resources >= .48 && energy >= .68)) {
    unlock(technologyTree[3]);
  }
  if (has(nextMask, technologyBits.blackHoleEnergy) && escapeProject > 0) {
    unlock(technologyTree[4]);
  }
  return { mask: nextMask, unlocked, cost };
}

export function meetsEscapePrerequisites(mask) {
  return has(mask, technologyBits.blackHoleEnergy);
}
