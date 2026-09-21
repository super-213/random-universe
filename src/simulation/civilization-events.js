import { stellarEndTimelinePosition } from '../domain/universe.js';
import { createSeededRandom, randomBetween } from '../domain/random.js';
import {
  cosmicYearsToTimelinePosition,
  timelinePositionToCosmicYears
} from '../domain/cosmic-time.js';

const clamp = (value, minimum, maximum) => Math.min(maximum, Math.max(minimum, value));

const civilizationMorphologies = [
  '生物共同体',
  '机器文明',
  '群体意识',
  '数字文明',
  '低可见度文明'
];

const fermiScenarios = [
  {
    id: 'great-filter',
    label: '大过滤器',
    description: '多数生物圈在跨入星际阶段前消失，幸存文明极为稀少'
  },
  {
    id: 'dark-forest',
    label: '静默博弈',
    description: '文明主动降低可见度，星际空间因此显得异常安静'
  },
  {
    id: 'rare-earth',
    label: '稀有生物圈',
    description: '复杂生命需要罕见的长期稳定条件，宜居世界并不等于有生命'
  },
  {
    id: 'zoo',
    label: '观察者隔离',
    description: '成熟文明可能限制对年轻文明的直接干预'
  },
  {
    id: 'brief-window',
    label: '短暂技术窗口',
    description: '文明可被探测的广播阶段远短于宇宙尺度的时间间隔'
  }
];

const eventDelayYears = {
  'first-signal': [2e7, 3e8],
  'self-replicating-probes': [5e7, 6e8],
  'stellar-megastructure': [1e8, 1.2e9],
  'civilization-fracture': [8e7, 1.5e9],
  'knowledge-ark': [4e7, 8e8],
  'uplift-experiment': [1e8, 1.8e9],
  'satellite-disruption': [2e7, 7e8],
  'terraforming-project': [8e7, 1.4e9],
  'digital-migration': [1e8, 1.6e9],
  'precursor-ruins': [5e7, 1e9],
  'information-plague': [8e7, 1.2e9],
  'relativistic-divergence': [3e8, 2.5e9],
  'galactic-encounter': [8e8, 6e9],
  'great-filter-crisis': [3e7, 8e8],
  'generation-ship': [1e8, 1.6e9],
  'stellar-engineering': [4e8, 3e9],
  'morphology-transition': [1e8, 1.8e9],
  'cosmic-archaeology': [6e7, 1.2e9],
  'intergalactic-diaspora': [1e9, 8e9],
  'black-hole-civilization': [8e8, 6e9],
  'universe-escape-project': [3e9, 2e10]
};

const eventCausalDurationYears = {
  'first-signal': 100,
  'self-replicating-probes': 2e6,
  'stellar-megastructure': 2e7,
  'civilization-fracture': 2e5,
  'knowledge-ark': 5e4,
  'uplift-experiment': 2e6,
  'satellite-disruption': 20,
  'terraforming-project': 1e8,
  'digital-migration': 2e4,
  'precursor-ruins': 500,
  'information-plague': 50,
  'relativistic-divergence': 1e7,
  'galactic-encounter': 2e8,
  'great-filter-crisis': 1e5,
  'generation-ship': 2e6,
  'stellar-engineering': 1e7,
  'morphology-transition': 1e5,
  'cosmic-archaeology': 500,
  'intergalactic-diaspora': 100,
  'black-hole-civilization': 1e6,
  'universe-escape-project': 1e6,
  'biosphere-transition': 1e8,
  'fermi-paradigm': 1e3,
  'ghost-signal': 100,
  'exposure-response': 1e3,
  'galactic-aftermath': 1e8
};

function timelineAfterYears(position, years, universe) {
  return cosmicYearsToTimelinePosition(
    timelinePositionToCosmicYears(position, universe) + Math.max(0, years),
    universe
  );
}

function timelineBeforeYears(position, years, universe) {
  return cosmicYearsToTimelinePosition(
    Math.max(0, timelinePositionToCosmicYears(position, universe) - Math.max(0, years)),
    universe
  );
}

function eventTiming(type, start, visualDuration, universe) {
  const physicalStartYears = timelinePositionToCosmicYears(start, universe);
  const physicalDurationYears = eventCausalDurationYears[type] || 1e4;
  return {
    physicalStartYears,
    physicalDurationYears,
    impactAt: cosmicYearsToTimelinePosition(physicalStartYears + physicalDurationYears, universe),
    visualImpactAt: start + visualDuration * .56
  };
}

const eventCatalog = [
  {
    type: 'first-signal',
    probability: .82,
    duration: 26,
    offset: [34, 82],
    color: '#79dfff',
    visual: 'signal-wave',
    label: '异常窄带信号'
  },
  {
    type: 'self-replicating-probes',
    probability: .66,
    duration: 32,
    offset: [58, 118],
    color: '#d8ff5f',
    visual: 'probe-swarm',
    label: '自复制探针扩散'
  },
  {
    type: 'stellar-megastructure',
    probability: .58,
    duration: 38,
    offset: [76, 142],
    color: '#ffd36b',
    visual: 'megastructure',
    label: '恒星巨构工程'
  },
  {
    type: 'civilization-fracture',
    probability: .46,
    duration: 30,
    offset: [92, 158],
    color: '#ff8b78',
    visual: 'civilization-fracture',
    label: '星际共同体分裂'
  },
  {
    type: 'knowledge-ark',
    probability: .64,
    duration: 28,
    offset: [48, 126],
    color: '#bca4ff',
    visual: 'knowledge-ark',
    label: '知识方舟封存'
  },
  {
    type: 'uplift-experiment',
    probability: .52,
    duration: 34,
    offset: [70, 146],
    color: '#67f0c4',
    visual: 'uplift',
    label: '提升物种实验'
  },
  {
    type: 'satellite-disruption',
    probability: .54,
    duration: 30,
    offset: [42, 104],
    color: '#ff9f76',
    visual: 'orbital-debris',
    label: '卫星解体与轨道撤离'
  },
  {
    type: 'terraforming-project',
    probability: .58,
    duration: 38,
    offset: [72, 148],
    color: '#75e8a8',
    visual: 'terraforming',
    label: '行星地球化工程'
  },
  {
    type: 'digital-migration',
    probability: .5,
    duration: 34,
    offset: [88, 164],
    color: '#72c7ff',
    visual: 'digital-migration',
    label: '数字意识迁移'
  },
  {
    type: 'precursor-ruins',
    probability: .56,
    duration: 32,
    offset: [52, 132],
    color: '#e7c1ff',
    visual: 'precursor-ruins',
    label: '先驱遗迹唤醒'
  },
  {
    type: 'information-plague',
    probability: .46,
    duration: 28,
    offset: [82, 156],
    color: '#ff668c',
    visual: 'information-plague',
    label: '信息瘟疫爆发'
  },
  {
    type: 'relativistic-divergence',
    probability: .48,
    duration: 36,
    offset: [94, 168],
    color: '#a7b9ff',
    visual: 'relativistic-divergence',
    label: '相对论殖民分化'
  },
  {
    type: 'galactic-encounter',
    probability: .42,
    duration: 50,
    offset: [108, 188],
    color: '#ffc46b',
    visual: 'galactic-encounter',
    label: '伴星系近掠',
    confidence: 'astrophysical-model'
  },
  {
    type: 'great-filter-crisis',
    probability: .58,
    duration: 34,
    offset: [46, 116],
    color: '#ff756f',
    visual: 'information-plague',
    label: '文明过滤器危机'
  },
  {
    type: 'generation-ship',
    probability: .56,
    duration: 40,
    offset: [54, 138],
    color: '#8bd8ff',
    visual: 'relativistic-divergence',
    label: '世代舰队远征'
  },
  {
    type: 'stellar-engineering',
    probability: .48,
    duration: 42,
    offset: [104, 182],
    color: '#ffe182',
    visual: 'stellar-engine',
    label: '恒星工程时代'
  },
  {
    type: 'morphology-transition',
    probability: .52,
    duration: 32,
    offset: [86, 158],
    color: '#80ffd9',
    visual: 'digital-migration',
    label: '文明形态分化'
  },
  {
    type: 'cosmic-archaeology',
    probability: .6,
    duration: 34,
    offset: [62, 146],
    color: '#d6b4ff',
    visual: 'precursor-ruins',
    label: '宇宙考古发现'
  },
  {
    type: 'intergalactic-diaspora',
    probability: .46,
    duration: 44,
    offset: [126, 204],
    color: '#93baff',
    visual: 'relativistic-divergence',
    label: '跨星系迁徙'
  },
  {
    type: 'black-hole-civilization',
    probability: .42,
    duration: 42,
    offset: [118, 198],
    color: '#ffc978',
    visual: 'stellar-engine',
    label: '黑洞能源文明'
  },
  {
    type: 'universe-escape-project',
    probability: .3,
    duration: 48,
    offset: [168, 248],
    color: '#e4c0ff',
    visual: 'light-cone',
    label: '母宇宙逃逸工程'
  }
];

function chooseSpecies(random, civilizationData, predicate = () => true) {
  const candidates = civilizationData
    .map((species, index) => ({ species, index }))
    .filter(({ species, index }) => !species.originType && predicate(species, index));
  if (candidates.length === 0) return null;
  return candidates[Math.floor(random() * candidates.length)];
}

function createSpeciesProfiles(universe, civilizationData) {
  const random = createSeededRandom(universe.seed, 13722);
  const fermiScenario = fermiScenarios[universe.seedValue % fermiScenarios.length];
  const speciesProfiles = civilizationData.map((species, index) => {
    const setback = random() < .42
      ? ['雪球期', '大灭绝', '海洋酸化', '恒星耀斑期'][Math.floor(random() * 4)]
      : null;
    const morphology = civilizationMorphologies[Math.floor(random() * civilizationMorphologies.length)];
    const biospherePath = [
      '原始生命',
      random() < .5 ? '光合作用扩张' : '化能生态扩张',
      setback,
      '复杂多细胞生命',
      '技术物种'
    ].filter(Boolean);
    return {
      morphology,
      biospherePath,
      biosphereOriginAt: Math.max(350, species.birth - Math.round(randomBetween(random, 34, 72))),
      fermiScenario: fermiScenario.label,
      filterResilience: clamp(
        species.resilience * .38 + species.cooperation * .28 + randomBetween(random, .06, .3),
        0,
        1
      ),
      profileIndex: index
    };
  });
  return { speciesProfiles, fermiScenario };
}

function chooseLineageHome(random, parent, civilizationData, habitatPositions, preferNear) {
  const occupiedHomes = new Set(civilizationData.map((species) => species.homeNodeIndex));
  const parentOffset = parent.homeNodeIndex * 3;
  let selected = null;
  for (let attempt = 0; attempt < 120; attempt++) {
    const nodeIndex = Math.floor(random() * habitatPositions.length / 3);
    if (occupiedHomes.has(nodeIndex)) continue;
    const offset = nodeIndex * 3;
    const distance = Math.hypot(
      habitatPositions[offset] - habitatPositions[parentOffset],
      habitatPositions[offset + 1] - habitatPositions[parentOffset + 1],
      habitatPositions[offset + 2] - habitatPositions[parentOffset + 2]
    );
    if (!selected || (preferNear ? distance < selected.distance : distance > selected.distance)) {
      selected = { nodeIndex, distance };
    }
  }
  return selected?.nodeIndex ?? ((parent.homeNodeIndex + 1) % (habitatPositions.length / 3));
}

function lineageTraits(random, parent, originType) {
  const cooperative = originType === 'uplift';
  const relativistic = originType === 'relativistic';
  return {
    aggression: clamp(parent.aggression + randomBetween(random, cooperative ? -.22 : relativistic ? -.12 : -.06, cooperative ? .08 : relativistic ? .16 : .3), 0, 1),
    cooperation: clamp(parent.cooperation + randomBetween(random, cooperative ? .08 : relativistic ? -.14 : -.3, cooperative ? .3 : relativistic ? .14 : .05), 0, 1),
    expansionRate: clamp(parent.expansionRate * randomBetween(random, relativistic ? .72 : .84, 1.12), .62, 1.48),
    resilience: clamp(parent.resilience * randomBetween(random, .88, relativistic ? 1.2 : 1.12), .62, 1.42),
    technology: clamp(parent.technology * randomBetween(random, relativistic ? .88 : .76, relativistic ? 1.08 : .96), .12, .96),
    visibility: clamp(parent.visibility + randomBetween(random, -.04, .1), 0, 1),
    cohesion: cooperative
      ? randomBetween(random, .58, .78)
      : randomBetween(random, relativistic ? .46 : .34, relativistic ? .68 : .56),
    machineAutonomy: clamp(parent.machineAutonomy + randomBetween(random, -.08, .08), 0, 1)
  };
}

function eventMessage(event, target, secondary, child) {
  if (event.type === 'first-signal') {
    const action = event.decision === 'reply'
      ? '选择以低功率数学序列回应'
      : event.decision === 'deterrence'
        ? '把信号视为潜在威胁并建立威慑协议'
        : '停止主动广播，转入长期静默监听';
    return `${target.name} 截获来自 ${secondary.name} 方向的人工信号，${action}`;
  }
  if (event.type === 'self-replicating-probes') {
    return event.runaway
      ? `${target.name} 的自治探针越过任务边界，开始争夺恒星系资源`
      : `${target.name} 向殖民前沿释放可利用当地资源复制的无人探针`;
  }
  if (event.type === 'stellar-megastructure') {
    return event.unstable
      ? `${target.name} 的恒星采能阵列出现轨道级联失稳`
      : `${target.name} 开始用分布式采能群截获母恒星辐射`;
  }
  if (event.type === 'civilization-fracture') {
    return `${target.name} 的远端殖民地脱离共同网络，形成 ${child.name}`;
  }
  if (event.type === 'knowledge-ark') {
    return `${target.name} 将生物谱系、工程知识与历史档案写入分散式长期存储`;
  }
  if (event.type === 'uplift-experiment') {
    return `${target.name} 对本土智慧前生命实施定向演化，${child.name} 开始形成独立文化`;
  }
  if (event.type === 'satellite-disruption') {
    return `${target.name} 的人口密集卫星进入潮汐解体区，轨道聚居带启动紧急撤离`;
  }
  if (event.type === 'terraforming-project') {
    return `${target.name} 尝试跨世代重塑一颗边境行星的大气、海洋与生物圈`;
  }
  if (event.type === 'digital-migration') {
    return `${target.name} 将部分人口迁移到分布式计算基质，重新定义个体与疆域`;
  }
  if (event.type === 'precursor-ruins') {
    return `${target.name} 在无主恒星域发现早于本纪元的休眠结构并尝试解码`;
  }
  if (event.type === 'information-plague') {
    return `${target.name} 的通信网络出现能改写认知与自治系统的自传播信息结构`;
  }
  if (event.type === 'relativistic-divergence') {
    return `${target.name} 的高速远征队在巨大时间差后归来，${child.name} 已形成独立历史`;
  }
  if (event.type === 'great-filter-crisis') {
    return `${target.name} 同时遭遇生态、资源与自治系统压力，进入决定能否长期存续的过滤器阶段`;
  }
  if (event.type === 'generation-ship') {
    return `${target.name} 派出无法在单一生命期内抵达目的地的世代舰队`;
  }
  if (event.type === 'stellar-engineering') {
    return `${target.name} 开始实施${event.engineeringMode}，主动改变恒星的物质与能量流`;
  }
  if (event.type === 'morphology-transition') {
    return `${target.name} 从${event.previousMorphology}分化出${event.newMorphology}社会`;
  }
  if (event.type === 'cosmic-archaeology') {
    return `${target.name} 在失活恒星域发现一处灭亡文明留下的${event.artifactType}`;
  }
  if (event.type === 'biosphere-transition') {
    return `${target.name} 的母世界经历${event.biospherePath.join(' → ')}`;
  }
  if (event.type === 'fermi-paradigm') {
    return `${event.fermiScenario.label}成为本宇宙的主导解释：${event.fermiScenario.description}`;
  }
  if (event.type === 'ghost-signal') {
    const delay = event.delayYears >= 1e6
      ? `${(event.delayYears / 1e6).toFixed(2)} 百万年`
      : `${Math.round(event.delayYears || event.delayUnits * 1e3)} 年`;
    return `${target.name} 收到延迟 ${delay} 的旧广播；发信文明当前状态已无法由信号确认`;
  }
  if (event.type === 'exposure-response') {
    return `${target.name} 根据早期信号接触结果启动${event.responsePolicy}`;
  }
  if (event.type === 'galactic-aftermath') {
    return `伴星系近掠继续演化为${event.galacticStage}，改变星系的恒星形成与轨道环境`;
  }
  if (event.type === 'intergalactic-diaspora') {
    return `${target.name} 将航行范围推进到星系引力边界之外，尝试建立${event.diasporaMode}`;
  }
  if (event.type === 'black-hole-civilization') {
    return `${target.name} 围绕黑洞建设${event.blackHoleMethod}能源网络`;
  }
  if (event.type === 'universe-escape-project') {
    return `${target.name} 尝试通过${event.escapeMode}摆脱母宇宙的终局约束`;
  }
  return event.encounterMode === 'agn-feedback'
    ? '伴星系近掠扰动核区气体，活动星系核反馈开始压制恒星形成'
    : '伴星系近掠压缩气体云，星系尺度的恒星形成潮被触发';
}

export function createCivilizationEventPlan({ universe, civilizationData, habitatPositions }) {
  const random = createSeededRandom(universe.seed, 13721);
  const events = [];
  const childSpecies = [];
  const { speciesProfiles, fermiScenario } = createSpeciesProfiles(universe, civilizationData);
  const baseSpeciesCount = civilizationData.length;
  const fateBoundary = universe.cosmicFate.type === 'heat-death' ? 760 : universe.cosmicFate.onsetAt - 12;
  const eventBoundary = Math.min(760, stellarEndTimelinePosition(universe) - 18, fateBoundary);

  eventCatalog.forEach((definition, catalogIndex) => {
    if (definition.type === 'black-hole-civilization' && !universe.hasCentralBlackHole) return;
    if (random() > definition.probability) return;
    const targetEntry = chooseSpecies(random, civilizationData, (species) => (
      (definition.type !== 'stellar-megastructure' || species.technology >= .24)
      && (definition.type !== 'stellar-engineering' || species.technology >= .28)
      && (definition.type !== 'universe-escape-project' || species.technology >= .3)
    ));
    if (!targetEntry) return;
    const target = targetEntry.species;
    const delayRange = eventDelayYears[definition.type] || [1e7, 1e9];
    const start = timelineAfterYears(
      target.birth,
      randomBetween(random, delayRange[0], delayRange[1]),
      universe
    );
    const timing = eventTiming(definition.type, start, definition.duration, universe);
    const { impactAt } = timing;
    if (impactAt >= eventBoundary) return;
    let secondaryEntry = null;
    if (definition.type === 'first-signal') {
      secondaryEntry = chooseSpecies(random, civilizationData, (species, index) => (
        index !== targetEntry.index && species.birth <= impactAt
      ));
      if (!secondaryEntry) return;
    }
    const event = {
      ...definition,
      id: `civilization-${definition.type}-${catalogIndex}-${universe.seed}`,
      category: 'civilization',
      confidence: definition.confidence || 'science-fiction',
      start,
      ...timing,
      targetSpeciesIndex: targetEntry.index,
      secondarySpeciesIndex: secondaryEntry?.index ?? null,
      targetNodeIndex: target.homeNodeIndex,
      civilizationImpacts: [],
      outcome: '事件仍在演化'
    };
    if (definition.type === 'stellar-megastructure'
      || definition.type === 'knowledge-ark'
      || definition.type === 'stellar-engineering') {
      event.persistentUntil = eventBoundary;
      event.persistenceFadeDuration = 20;
    }

    if (definition.type === 'first-signal') {
      event.decision = target.cooperation > target.aggression + .08
        ? 'reply'
        : target.aggression > .7 ? 'deterrence' : 'silence';
    } else if (definition.type === 'self-replicating-probes') {
      event.runaway = random() < .14 + target.machineAutonomy * .34;
    } else if (definition.type === 'stellar-megastructure') {
      event.unstable = random() > .54 + target.resilience * .22 + target.technology * .14;
    } else if (definition.type === 'knowledge-ark') {
      event.archiveReliability = randomBetween(random, .58, .94);
    } else if (definition.type === 'satellite-disruption') {
      event.evacuationSuccess = random() < .38 + target.resilience * .28 + target.technology * .24;
    } else if (definition.type === 'terraforming-project') {
      event.terraformingSuccess = random() < .34 + target.technology * .38 + target.resilience * .18;
    } else if (definition.type === 'digital-migration') {
      event.migrationStable = random() > .16 + target.machineAutonomy * .18 - target.cohesion * .12;
    } else if (definition.type === 'precursor-ruins') {
      event.precursorHazard = random() < .34 - target.technology * .14 + target.aggression * .12;
    } else if (definition.type === 'information-plague') {
      event.contained = random() < .28 + target.cohesion * .34 + target.technology * .24;
    } else if (definition.type === 'galactic-encounter') {
      event.encounterMode = universe.hasCentralBlackHole && random() < .46
        ? 'agn-feedback'
        : 'starburst';
    } else if (definition.type === 'great-filter-crisis') {
      const resilience = speciesProfiles[targetEntry.index].filterResilience;
      event.filterOutcome = resilience > .62
        ? '跨越过滤器'
        : resilience > .38 ? '制度重构' : '系统性崩溃';
    } else if (definition.type === 'generation-ship') {
      const roll = random() + target.resilience * .22 + target.cooperation * .12;
      event.migrationOutcome = roll > 1.05 ? '建立远端殖民地' : roll > .58 ? '形成流浪舰队' : '舰队失联';
    } else if (definition.type === 'stellar-engineering') {
      event.engineeringMode = ['恒星抬升', '套娃脑', '恒星推进器'][Math.floor(random() * 3)];
      event.engineeringStable = random() < .44 + target.technology * .36 + target.resilience * .16;
    } else if (definition.type === 'morphology-transition') {
      event.previousMorphology = speciesProfiles[targetEntry.index].morphology;
      const alternatives = civilizationMorphologies.filter((item) => item !== event.previousMorphology);
      event.newMorphology = alternatives[Math.floor(random() * alternatives.length)];
    } else if (definition.type === 'cosmic-archaeology') {
      event.artifactType = ['巨构残骸', '休眠探针', '星图档案', '污染隔离区'][Math.floor(random() * 4)];
      const roll = random() + target.technology * .3 - target.aggression * .12;
      event.artifactOutcome = roll > .78 ? '继承' : roll > .38 ? '误读' : '唤醒';
    } else if (definition.type === 'intergalactic-diaspora') {
      event.diasporaMode = random() < .54 ? '星系桥殖民地' : '星系际流浪社会';
      event.diasporaSuccess = random() < .38 + target.resilience * .3 + target.technology * .22;
      event.targetCompanionIndex = 1 + Math.floor(random() * 4);
      event.fleetDistanceMly = randomBetween(random, 1.35, 3.1);
      event.fleetSpeed = randomBetween(random, .12, .62);
      event.fleetPopulation = randomBetween(random, .08, .42);
      event.fleetSupplies = randomBetween(random, .58, .98);
      const fleetRoll = random() + target.resilience * .22 + target.cohesion * .12;
      event.fleetOutcome = !event.diasporaSuccess || fleetRoll < .46
        ? 'lost'
        : fleetRoll < .7 ? 'returned' : fleetRoll < 1.04 ? 'divided' : 'arrived';
    } else if (definition.type === 'black-hole-civilization') {
      event.blackHoleMethod = ['吸积盘采能', '旋转能提取', '霍金辐射收集'][Math.floor(random() * 3)];
      event.blackHoleStable = random() < .42 + target.technology * .34 + target.resilience * .18;
    } else if (definition.type === 'universe-escape-project') {
      event.escapeMode = ['人造婴儿宇宙', '真空工程', '时空捷径', '因果闭环计算'][Math.floor(random() * 4)];
      event.escapeSuccess = random() < .12 + target.technology * .42 + target.cohesion * .16;
    } else if (definition.type === 'civilization-fracture'
      || definition.type === 'uplift-experiment'
      || definition.type === 'relativistic-divergence') {
      const originType = definition.type === 'civilization-fracture'
        ? 'fragment'
        : definition.type === 'uplift-experiment' ? 'uplift' : 'relativistic';
      const childIndex = baseSpeciesCount + childSpecies.length;
      const childName = originType === 'fragment'
        ? `${target.name}·远枝`
        : originType === 'uplift' ? `${target.name}·新生群` : `${target.name}·迟归者`;
      const child = {
        name: childName,
        originType,
        parentSpeciesIndex: targetEntry.index,
        homeNodeIndex: chooseLineageHome(
          random,
          target,
          [...civilizationData, ...childSpecies],
          habitatPositions,
          originType !== 'uplift'
        ),
        birth: Math.ceil(impactAt),
        colorShift: originType === 'fragment' ? .08 : originType === 'uplift' ? -.1 : .18,
        morphology: originType === 'uplift'
          ? '生物共同体'
          : speciesProfiles[targetEntry.index].morphology,
        biospherePath: speciesProfiles[targetEntry.index].biospherePath,
        fermiScenario: fermiScenario.label,
        ...lineageTraits(random, target, originType)
      };
      childSpecies.push(child);
      event.childSpeciesIndex = childIndex;
      event.targetNodeIndex = child.homeNodeIndex;
    }

    const secondary = secondaryEntry?.species;
    const child = childSpecies.find((_, index) => baseSpeciesCount + index === event.childSpeciesIndex);
    event.message = eventMessage(event, target, secondary, child);
    events.push(event);
  });

  const appendDerivedEvent = ({
    type,
    label,
    visual,
    color,
    start,
    duration,
    targetSpeciesIndex,
    confidence = 'science-fiction',
    ...details
  }) => {
    const timing = eventTiming(type, start, duration, universe);
    const { impactAt } = timing;
    if (impactAt >= eventBoundary) return null;
    const target = civilizationData[targetSpeciesIndex];
    const event = {
      id: `civilization-${type}-derived-${universe.seed}`,
      type,
      label,
      visual,
      color,
      start,
      duration,
      ...timing,
      category: 'civilization',
      confidence,
      targetSpeciesIndex,
      secondarySpeciesIndex: null,
      targetNodeIndex: target.homeNodeIndex,
      civilizationImpacts: [],
      outcome: '事件仍在演化',
      ...details
    };
    event.message = eventMessage(event, target, null, null);
    events.push(event);
    return event;
  };

  const earliestSpeciesIndex = civilizationData.reduce((selected, species, index) => (
    species.birth < civilizationData[selected].birth ? index : selected
  ), 0);
  const earliestSpecies = civilizationData[earliestSpeciesIndex];
  const earliestProfile = speciesProfiles[earliestSpeciesIndex];
  appendDerivedEvent({
    type: 'biosphere-transition',
    label: '复杂生物圈形成',
    visual: 'biosphere-chain',
    color: '#7ee7a8',
    start: Math.max(372, timelineBeforeYears(earliestSpecies.birth, 1.2e9, universe)),
    duration: 20,
    targetSpeciesIndex: earliestSpeciesIndex,
    confidence: 'astrobiology-model',
    biospherePath: earliestProfile.biospherePath
  });
  appendDerivedEvent({
    type: 'fermi-paradigm',
    label: `费米情景：${fermiScenario.label}`,
    visual: 'signal-wave',
    color: '#c7e6ff',
    start: timelineAfterYears(earliestSpecies.birth, 5e7, universe),
    duration: 24,
    targetSpeciesIndex: earliestSpeciesIndex,
    confidence: 'astrobiology-model',
    fermiScenario
  });

  const signalEvent = events.find((event) => event.type === 'first-signal');
  if (signalEvent) {
    const ghostTargetIndex = signalEvent.secondarySpeciesIndex ?? signalEvent.targetSpeciesIndex;
    const senderOffset = civilizationData[signalEvent.targetSpeciesIndex].homeNodeIndex * 3;
    const receiverOffset = civilizationData[ghostTargetIndex].homeNodeIndex * 3;
    const signalDistance = Math.hypot(
      habitatPositions[senderOffset] - habitatPositions[receiverOffset],
      habitatPositions[senderOffset + 1] - habitatPositions[receiverOffset + 1],
      habitatPositions[senderOffset + 2] - habitatPositions[receiverOffset + 2]
    );
    const galaxyDiameterLightYears = (8 + universe.stars * 4.7) * 1e4;
    const lightConeDelayYears = signalDistance / 28
      * galaxyDiameterLightYears
      / Math.max(.01, universe.speed);
    const ghostSignal = appendDerivedEvent({
      type: 'ghost-signal',
      label: '光锥中的幽灵信号',
      visual: 'light-cone',
      color: '#8adfff',
      start: timelineAfterYears(signalEvent.impactAt, lightConeDelayYears, universe),
      duration: 28,
      targetSpeciesIndex: ghostTargetIndex,
      delayUnits: Math.max(1, Math.round(lightConeDelayYears / 1e3)),
      delayYears: lightConeDelayYears,
      signalDistance,
      sourceEventId: signalEvent.id,
      causalRootId: signalEvent.id
    });
    if (ghostSignal) {
      appendDerivedEvent({
        type: 'exposure-response',
        label: '信号暴露后续',
        visual: 'signal-wave',
        color: '#ffb36b',
        start: timelineAfterYears(
          ghostSignal.impactAt,
          randomBetween(random, 1e4, 5e5),
          universe
        ),
        duration: 30,
        targetSpeciesIndex: signalEvent.targetSpeciesIndex,
        responsePolicy: signalEvent.decision === 'reply'
          ? '跨文明验证协议'
          : signalEvent.decision === 'deterrence' ? '深空威慑部署' : '全域静默工程',
        sourceEventId: ghostSignal.id,
        causalRootId: signalEvent.id
      });
    }
  }

  const galacticEncounter = events.find((event) => event.type === 'galactic-encounter');
  if (galacticEncounter) {
    appendDerivedEvent({
      type: 'galactic-aftermath',
      label: '星系近掠后续演化',
      visual: 'galactic-encounter',
      color: '#ffcf7b',
      start: timelineAfterYears(galacticEncounter.impactAt, 1e8, universe),
      duration: 46,
      targetSpeciesIndex: galacticEncounter.targetSpeciesIndex,
      confidence: 'astrophysical-model',
      galacticStage: galacticEncounter.encounterMode === 'starburst'
        ? (random() < .55 ? '潮汐尾与恒星形成潮' : '流浪恒星与核区增亮')
        : (random() < .5 ? '气体加热与恒星形成熄灭' : '流浪黑洞扰动'),
      sourceEventId: galacticEncounter.id,
      causalRootId: galacticEncounter.id
    });
  }

  events.sort((a, b) => a.start - b.start);
  return { events, childSpecies, speciesProfiles, fermiScenario };
}

export function civilizationEventTypes() {
  return [
    ...eventCatalog.map((event) => event.type),
    'biosphere-transition',
    'fermi-paradigm',
    'ghost-signal',
    'exposure-response',
    'galactic-aftermath'
  ];
}
