import { stellarEndTimelinePosition } from '../domain/universe.js';
import { createSeededRandom, randomBetween } from '../domain/random.js';

const clamp = (value, minimum, maximum) => Math.min(maximum, Math.max(minimum, value));

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
  }
];

function chooseSpecies(random, civilizationData, predicate = () => true) {
  const candidates = civilizationData
    .map((species, index) => ({ species, index }))
    .filter(({ species, index }) => !species.originType && predicate(species, index));
  if (candidates.length === 0) return null;
  return candidates[Math.floor(random() * candidates.length)];
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
  return event.encounterMode === 'agn-feedback'
    ? '伴星系近掠扰动核区气体，活动星系核反馈开始压制恒星形成'
    : '伴星系近掠压缩气体云，星系尺度的恒星形成潮被触发';
}

export function createCivilizationEventPlan({ universe, civilizationData, habitatPositions }) {
  const random = createSeededRandom(universe.seed, 13721);
  const events = [];
  const childSpecies = [];
  const baseSpeciesCount = civilizationData.length;
  const fateBoundary = universe.cosmicFate.type === 'heat-death' ? 760 : universe.cosmicFate.onsetAt - 12;
  const eventBoundary = Math.min(760, stellarEndTimelinePosition(universe) - 18, fateBoundary);

  eventCatalog.forEach((definition, catalogIndex) => {
    if (random() > definition.probability) return;
    const targetEntry = chooseSpecies(random, civilizationData, (species) => (
      definition.type !== 'stellar-megastructure' || species.technology >= .24
    ));
    if (!targetEntry) return;
    const target = targetEntry.species;
    const start = target.birth + randomBetween(random, definition.offset[0], definition.offset[1]);
    const impactAt = start + definition.duration * .56;
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
      impactAt,
      targetSpeciesIndex: targetEntry.index,
      secondarySpeciesIndex: secondaryEntry?.index ?? null,
      targetNodeIndex: target.homeNodeIndex,
      civilizationImpacts: [],
      outcome: '事件仍在演化'
    };
    if (definition.type === 'stellar-megastructure' || definition.type === 'knowledge-ark') {
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

  events.sort((a, b) => a.start - b.start);
  return { events, childSpecies };
}

export function civilizationEventTypes() {
  return eventCatalog.map((event) => event.type);
}
