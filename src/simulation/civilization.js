import * as THREE from 'three';
import { stellarEndTimelinePosition } from '../domain/universe.js';
import { createSeededRandom, randomBetween } from '../domain/random.js';
import {
  advanceTechnologyTree,
  meetsEscapePrerequisites,
  technologyBits
} from './technology-tree.js';

const morphologyCodes = {
  '生物共同体': 1,
  '机器文明': 2,
  '群体意识': 3,
  '数字文明': 4,
  '低可见度文明': 5
};

const morphologyLabels = ['', '生物共同体', '机器文明', '群体意识', '数字文明', '低可见度文明'];

export function civilizationDeclineWindow(universe) {
  const stellarEnd = stellarEndTimelinePosition(universe);
  const finiteOutcome = universe.cosmicFate?.type !== 'heat-death';
  const stellarEndReached = !finiteOutcome
    || universe.cosmicFate.outcomeExponent > universe.lastStarDeathExponent;
  const energyStart = stellarEndReached ? Math.max(470, stellarEnd - 22) : Infinity;
  const energyEnd = stellarEndReached ? Math.min(1000, stellarEnd + 55) : Infinity;
  return {
    energyStart,
    energyEnd,
    fateStart: finiteOutcome ? universe.cosmicFate.onsetAt : Infinity,
    fateEnd: finiteOutcome ? 1000 : Infinity
  };
}

export function buildCivilizationSimulation({ universe, civilizationData, civilizationSimulation, cosmicEvents }) {
  if (!civilizationSimulation || civilizationData.length === 0) return;
  const simulation = civilizationSimulation;
  const random = createSeededRandom(universe.seed, 9241);
  const nodeCount = simulation.habitatRemnantIndices.length;
  const speciesCount = civilizationData.length;
  const neighborsPerNode = 6;

  for (let node = 0; node < nodeCount; node++) {
    const nearest = [];
    const source = node * 3;
    for (let candidate = 0; candidate < nodeCount; candidate++) {
      if (candidate === node) continue;
      const target = candidate * 3;
      const distance = Math.hypot(
        simulation.habitatPositions[source] - simulation.habitatPositions[target],
        simulation.habitatPositions[source + 1] - simulation.habitatPositions[target + 1],
        simulation.habitatPositions[source + 2] - simulation.habitatPositions[target + 2]
      );
      if (nearest.length < neighborsPerNode || distance < nearest[nearest.length - 1].distance) {
        nearest.push({ node: candidate, distance });
        nearest.sort((a, b) => a.distance - b.distance);
        if (nearest.length > neighborsPerNode) nearest.pop();
      }
    }
    simulation.adjacency[node] = Uint16Array.from(nearest.map((entry) => entry.node));
  }

  const owners = new Int16Array(nodeCount);
  owners.fill(-1);
  const strength = new Float32Array(nodeCount);
  const seeded = new Uint8Array(speciesCount);
  const relationScores = new Float32Array(speciesCount * speciesCount);
  const relationStates = new Int8Array(speciesCount * speciesCount);
  const reservedFor = new Int16Array(nodeCount);
  reservedFor.fill(-1);
  civilizationData.forEach((species, index) => { reservedFor[species.homeNodeIndex] = index; });
  const lastCounts = new Uint16Array(speciesCount);
  const lastCauses = Array(speciesCount).fill('自主扩张');
  const disabledNodes = new Uint8Array(nodeCount);
  const declineWindow = civilizationDeclineWindow(universe);
  const expansionEnd = Math.min(declineWindow.energyStart, declineWindow.fateStart);
  simulation.end = 1000;
  const events = cosmicEvents
    .filter((event) => event.category !== 'civilization')
    .sort((a, b) => a.impactAt - b.impactAt);
  const civilizationEvents = cosmicEvents
    .filter((event) => event.category === 'civilization')
    .sort((a, b) => a.impactAt - b.impactAt);
  const fermiParadigmAt = civilizationEvents.find((event) => event.type === 'fermi-paradigm')?.impactAt ?? Infinity;
  const eventImpactStats = new Map(events.map((event) => [event, new Map()]));
  const scheduledImpacts = events.flatMap((event) => {
    event.civilizationImpacts = [];
    return (event.civilizationNodeImpacts || []).map((impact) => ({ event, impact }));
  }).sort((a, b) => a.impact.at - b.impact.at || a.impact.nodeIndex - b.impact.nodeIndex);

  const relationIndex = (a, b) => a * speciesCount + b;
  const technology = new Float32Array(speciesCount);
  const visibility = new Float32Array(speciesCount);
  const cohesion = new Float32Array(speciesCount);
  const machineAutonomy = new Float32Array(speciesCount);
  const archives = new Uint8Array(speciesCount);
  const megastructures = new Uint8Array(speciesCount);
  const uplifts = new Uint8Array(speciesCount);
  const probeModes = new Int8Array(speciesCount);
  const terraforming = new Int8Array(speciesCount);
  const substrateModes = new Uint8Array(speciesCount);
  const precursorKnowledge = new Int8Array(speciesCount);
  const contamination = new Int8Array(speciesCount);
  const temporalDrift = new Uint8Array(speciesCount);
  const evacuations = new Uint8Array(speciesCount);
  const biosphereStages = new Uint8Array(speciesCount);
  const filterStates = new Int8Array(speciesCount);
  const migrationModes = new Int8Array(speciesCount);
  const engineeringModes = new Int8Array(speciesCount);
  const morphologyModes = new Uint8Array(speciesCount);
  const artifacts = new Int8Array(speciesCount);
  const signalDelays = new Uint8Array(speciesCount);
  const fermiAwareness = new Uint8Array(speciesCount);
  const causalResponses = new Int8Array(speciesCount);
  const diasporaModes = new Int8Array(speciesCount);
  const blackHoleHabitats = new Int8Array(speciesCount);
  const escapeProjects = new Int8Array(speciesCount);
  const technologyMasks = new Uint16Array(speciesCount);
  const internalPopulation = new Float32Array(speciesCount);
  const resources = new Float32Array(speciesCount);
  const energyReserves = new Float32Array(speciesCount);
  const governance = new Float32Array(speciesCount);
  const research = new Float32Array(speciesCount);
  const stability = new Float32Array(speciesCount);
  const externalGalaxyIndices = new Uint8Array(speciesCount);
  const externalPopulations = new Float32Array(speciesCount);
  const archiveReadyAt = new Float32Array(speciesCount);
  archiveReadyAt.fill(Infinity);
  civilizationData.forEach((species, index) => {
    technology[index] = species.technology ?? .25;
    visibility[index] = species.visibility ?? .08;
    cohesion[index] = species.cohesion ?? .6;
    machineAutonomy[index] = species.machineAutonomy ?? .18;
    morphologyModes[index] = morphologyCodes[species.morphology] || 1;
    resources[index] = THREE.MathUtils.clamp(.48 + species.resilience * .12 + randomBetween(random, -.05, .05), .3, .78);
    energyReserves[index] = THREE.MathUtils.clamp(.34 + technology[index] * .28, .25, .64);
    governance[index] = THREE.MathUtils.clamp(.24 + species.cooperation * .36 + cohesion[index] * .24, .22, .82);
    research[index] = THREE.MathUtils.clamp(.18 + technology[index] * .54, .18, .62);
    stability[index] = THREE.MathUtils.clamp(.26 + cohesion[index] * .58, .3, .84);
  });
  for (let a = 0; a < speciesCount; a++) {
    for (let b = a + 1; b < speciesCount; b++) {
      const speciesA = civilizationData[a];
      const speciesB = civilizationData[b];
      let affinity = (speciesA.cooperation + speciesB.cooperation) * .28
        - (speciesA.aggression + speciesB.aggression) * .24
        + randomBetween(random, -.16, .16);
      if (speciesA.parentSpeciesIndex === b || speciesB.parentSpeciesIndex === a) {
        const child = speciesA.parentSpeciesIndex === b ? speciesA : speciesB;
        affinity += child.originType === 'uplift' ? .44 : child.originType === 'relativistic' ? .08 : -.38;
      }
      relationScores[relationIndex(a, b)] = affinity;
      relationScores[relationIndex(b, a)] = affinity;
    }
  }

  const setRelation = (a, b, score, state) => {
    relationScores[relationIndex(a, b)] = score;
    relationScores[relationIndex(b, a)] = score;
    relationStates[relationIndex(a, b)] = state;
    relationStates[relationIndex(b, a)] = state;
  };

  const territoryCountFor = (speciesIndex) => {
    let count = 0;
    for (let node = 0; node < nodeCount; node++) {
      if (owners[node] === speciesIndex) count++;
    }
    return count;
  };

  const applyNodeImpact = (event, impact, time) => {
    const { nodeIndex, severity, permanent, destructionRoll, kind = 'damage' } = impact;
    if (permanent) disabledNodes[nodeIndex] = 1;
    const speciesIndex = owners[nodeIndex];
    if (speciesIndex < 0) return;
    const species = civilizationData[speciesIndex];
    if (species.highDimensional && time >= species.ascensionAt) return;
    if (kind === 'recovery') {
      if (!disabledNodes[nodeIndex]) {
        strength[nodeIndex] = Math.min(1.35, strength[nodeIndex] + severity);
        lastCauses[speciesIndex] = `${event.label} 后恢复`;
      }
      return;
    }

    const statsBySpecies = eventImpactStats.get(event);
    let stats = statsBySpecies.get(speciesIndex);
    if (!stats) {
      stats = {
        initialCount: territoryCountFor(speciesIndex),
        affectedNodes: new Set(),
        lostNodes: new Set(),
        weakenedNodes: new Set(),
        effectiveLoss: 0,
        collapse: false
      };
      statsBySpecies.set(speciesIndex, stats);
    }
    stats.affectedNodes.add(nodeIndex);

    const substrateResilience = substrateModes[speciesIndex] ? 1.3 : 1;
    const destructionChance = THREE.MathUtils.clamp(
      severity * .62 / Math.max(.65, species.resilience * substrateResilience),
      0,
      .9
    );
    const destroyed = permanent || destructionRoll < destructionChance;
    if (destroyed) {
      owners[nodeIndex] = -1;
      strength[nodeIndex] = 0;
      stats.lostNodes.add(nodeIndex);
      stats.weakenedNodes.delete(nodeIndex);
      stats.effectiveLoss += 1;
    } else {
      const strengthLoss = severity * .46;
      strength[nodeIndex] *= Math.max(.18, 1 - strengthLoss);
      if (!stats.lostNodes.has(nodeIndex)) stats.weakenedNodes.add(nodeIndex);
      stats.effectiveLoss += strengthLoss;
    }
    stats.collapse ||= territoryCountFor(speciesIndex) === 0;
    lastCauses[speciesIndex] = event.label;
  };

  const transferTerritory = (sourceSpeciesIndex, targetSpeciesIndex, fraction) => {
    const targetHome = civilizationData[targetSpeciesIndex].homeNodeIndex;
    const targetOffset = targetHome * 3;
    const candidates = [];
    for (let node = 0; node < nodeCount; node++) {
      if (owners[node] !== sourceSpeciesIndex || disabledNodes[node]) continue;
      const offset = node * 3;
      candidates.push({
        node,
        distance: Math.hypot(
          simulation.habitatPositions[offset] - simulation.habitatPositions[targetOffset],
          simulation.habitatPositions[offset + 1] - simulation.habitatPositions[targetOffset + 1],
          simulation.habitatPositions[offset + 2] - simulation.habitatPositions[targetOffset + 2]
        )
      });
    }
    candidates.sort((a, b) => a.distance - b.distance);
    const transferCount = Math.max(1, Math.floor(candidates.length * fraction));
    candidates.slice(0, transferCount).forEach(({ node }) => {
      owners[node] = targetSpeciesIndex;
      strength[node] = Math.max(.16, strength[node] * .76);
    });
    if (!disabledNodes[targetHome]) {
      owners[targetHome] = targetSpeciesIndex;
      strength[targetHome] = Math.max(.34, strength[targetHome]);
    }
    return transferCount;
  };

  const applyCivilizationEvent = (event, time) => {
    const targetIndex = event.targetSpeciesIndex;
    const target = civilizationData[targetIndex];
    if (event.type === 'biosphere-transition') {
      biosphereStages[targetIndex] = 5;
      event.outcome = `${target.name} 的生物圈跨过复杂生命门槛，并最终演化出技术物种`;
      return;
    }
    if (event.type === 'fermi-paradigm') {
      let observers = 0;
      civilizationData.forEach((species, speciesIndex) => {
        if (!seeded[speciesIndex] || territoryCountFor(speciesIndex) === 0) return;
        fermiAwareness[speciesIndex] = 1;
        observers++;
      });
      event.outcome = `${observers} 个存续文明开始用“${event.fermiScenario.label}”解释宇宙静默`;
      return;
    }
    if (event.type === 'galactic-aftermath') {
      let affected = 0;
      const disruptive = event.galacticStage.includes('熄灭') || event.galacticStage.includes('黑洞');
      civilizationData.forEach((species, speciesIndex) => {
        if (!seeded[speciesIndex] || territoryCountFor(speciesIndex) === 0) return;
        affected++;
        for (let node = 0; node < nodeCount; node++) {
          if (owners[node] !== speciesIndex) continue;
          if (disruptive && (node + speciesIndex) % 5 === 0) strength[node] *= .58;
          if (!disruptive) strength[node] = Math.min(1.35, strength[node] + .08);
        }
        lastCauses[speciesIndex] = event.galacticStage;
      });
      event.outcome = disruptive
        ? `${event.galacticStage}扰动 ${affected} 个文明的边缘疆域`
        : `${event.galacticStage}为 ${affected} 个文明打开新的恒星形成窗口`;
      return;
    }
    if (event.type === 'galactic-encounter') {
      let affected = 0;
      civilizationData.forEach((species, speciesIndex) => {
        if (!seeded[speciesIndex] || territoryCountFor(speciesIndex) === 0) return;
        affected++;
        if (event.encounterMode === 'starburst') {
          technology[speciesIndex] = Math.min(1, technology[speciesIndex] + .035);
          for (let node = 0; node < nodeCount; node++) {
            if (owners[node] === speciesIndex) strength[node] = Math.min(1.35, strength[node] + .14);
          }
          lastCauses[speciesIndex] = '近掠触发恒星形成潮';
        } else {
          for (let node = 0; node < nodeCount; node++) {
            if (owners[node] === speciesIndex && (node + speciesIndex) % 4 === 0) strength[node] *= .64;
          }
          cohesion[speciesIndex] = Math.max(0, cohesion[speciesIndex] - .045);
          lastCauses[speciesIndex] = '活动星系核反馈';
        }
      });
      event.outcome = event.encounterMode === 'starburst'
        ? `近掠压缩星际介质，${affected} 个文明获得短期能源与殖民窗口`
        : `核区反馈加热气体，${affected} 个文明的部分疆域供能下降`;
      return;
    }
    if (!target || !seeded[targetIndex] || territoryCountFor(targetIndex) === 0) {
      event.outcome = `${target?.name || '目标文明'} 已在事件生效前衰亡`;
      return;
    }

    if (event.type === 'first-signal') {
      const otherIndex = event.secondarySpeciesIndex;
      const other = civilizationData[otherIndex];
      visibility[targetIndex] = Math.min(1, visibility[targetIndex] + (event.decision === 'silence' ? .04 : .2));
      technology[targetIndex] = Math.min(1, technology[targetIndex] + .06);
      let score = relationScores[relationIndex(targetIndex, otherIndex)];
      if (event.decision === 'reply') score += .32;
      if (event.decision === 'deterrence') score -= .38;
      if (event.decision === 'silence') score -= .05;
      const state = score > .3 ? 1 : score < -.26 ? -1 : 0;
      setRelation(targetIndex, otherIndex, THREE.MathUtils.clamp(score, -.95, .95), state);
      lastCauses[targetIndex] = event.decision === 'silence' ? '信号静默协议' : '星际信号接触';
      event.outcome = event.decision === 'reply'
        ? `${target.name} 与 ${other.name} 建立脆弱通信链路`
        : event.decision === 'deterrence'
          ? `${target.name} 与 ${other.name} 进入互相威慑状态`
          : `${target.name} 降低广播功率，外部可见度受到控制`;
      return;
    }

    if (event.type === 'self-replicating-probes') {
      machineAutonomy[targetIndex] = Math.min(1, machineAutonomy[targetIndex] + .28);
      technology[targetIndex] = Math.min(1, technology[targetIndex] + .1);
      probeModes[targetIndex] = event.runaway ? -1 : 1;
      cohesion[targetIndex] = Math.max(0, cohesion[targetIndex] - (event.runaway ? .22 : .03));
      lastCauses[targetIndex] = event.runaway ? '自治探针失控' : '探针网络扩张';
      event.outcome = event.runaway
        ? '探针网络与创造者争夺物质，边缘疆域持续失联'
        : '无人探针建立航路，殖民前沿获得持续扩张加成';
      return;
    }

    if (event.type === 'stellar-megastructure') {
      if (event.unstable) {
        const targetNodes = [];
        for (let node = 0; node < nodeCount; node++) {
          if (owners[node] === targetIndex) targetNodes.push(node);
        }
        targetNodes.filter((_, index) => index % 5 === 0).forEach((node) => {
          strength[node] *= .42;
        });
        cohesion[targetIndex] = Math.max(0, cohesion[targetIndex] - .16);
        lastCauses[targetIndex] = '巨构轨道失稳';
        event.outcome = `${target.name} 的采能群发生碎片级联，多个恒星域受损`;
      } else {
        megastructures[targetIndex] = 1;
        technology[targetIndex] = Math.min(1, technology[targetIndex] + .14);
        lastCauses[targetIndex] = '恒星巨构供能';
        event.outcome = `${target.name} 获得恒星尺度能源，疆域恢复与防御能力上升`;
      }
      return;
    }

    if (event.type === 'civilization-fracture') {
      const childIndex = event.childSpeciesIndex;
      const transferred = transferTerritory(targetIndex, childIndex, .3);
      cohesion[targetIndex] = Math.max(0, cohesion[targetIndex] - .36);
      cohesion[childIndex] = Math.max(.28, cohesion[childIndex]);
      setRelation(targetIndex, childIndex, -.58, -1);
      lastCauses[targetIndex] = `${civilizationData[childIndex].name} 脱离`;
      lastCauses[childIndex] = '从母文明分裂独立';
      event.outcome = `${civilizationData[childIndex].name} 接管 ${transferred} 个疆域，并与母文明进入对峙`;
      return;
    }

    if (event.type === 'knowledge-ark') {
      archives[targetIndex] = 1;
      archiveReadyAt[targetIndex] = time + 18;
      lastCauses[targetIndex] = '分散式知识方舟';
      event.outcome = `${target.name} 建立可在文明崩溃后重新播种的档案网络`;
      return;
    }

    if (event.type === 'uplift-experiment') {
      const childIndex = event.childSpeciesIndex;
      const transferred = transferTerritory(targetIndex, childIndex, .08);
      uplifts[targetIndex] = 1;
      uplifts[childIndex] = 1;
      setRelation(targetIndex, childIndex, .62, 1);
      lastCauses[targetIndex] = '提升物种计划';
      lastCauses[childIndex] = '被定向演化为智慧物种';
      event.outcome = `${civilizationData[childIndex].name} 在 ${transferred} 个恒星域形成独立文明`;
      return;
    }

    if (event.type === 'satellite-disruption') {
      const targetNodes = [];
      for (let node = 0; node < nodeCount; node++) {
        if (owners[node] === targetIndex) targetNodes.push(node);
      }
      if (event.evacuationSuccess) {
        evacuations[targetIndex] = 1;
        targetNodes.filter((_, index) => index % 7 === 0).forEach((node) => { strength[node] *= .82; });
        cohesion[targetIndex] = Math.min(1, cohesion[targetIndex] + .04);
        lastCauses[targetIndex] = '完成轨道聚居带撤离';
        event.outcome = `${target.name} 保存大部分人口与档案，碎片带成为永久航行禁区`;
      } else {
        targetNodes.filter((_, index) => index % 4 === 0).forEach((node) => {
          owners[node] = -1;
          strength[node] = 0;
        });
        cohesion[targetIndex] = Math.max(0, cohesion[targetIndex] - .18);
        lastCauses[targetIndex] = '轨道撤离失败';
        event.outcome = `${target.name} 未能完成撤离，${Math.ceil(targetNodes.length / 4)} 个聚居域失联`;
      }
      return;
    }

    if (event.type === 'terraforming-project') {
      terraforming[targetIndex] = event.terraformingSuccess ? 1 : -1;
      if (event.terraformingSuccess) {
        technology[targetIndex] = Math.min(1, technology[targetIndex] + .08);
        cohesion[targetIndex] = Math.min(1, cohesion[targetIndex] + .06);
        lastCauses[targetIndex] = '地球化生物圈稳定';
        event.outcome = `${target.name} 建立自维持生物圈，宜居前沿与人口承载力上升`;
      } else {
        for (let node = 0; node < nodeCount; node++) {
          if (owners[node] === targetIndex && node % 6 === targetIndex % 6) strength[node] *= .68;
        }
        cohesion[targetIndex] = Math.max(0, cohesion[targetIndex] - .1);
        lastCauses[targetIndex] = '地球化生态崩溃';
        event.outcome = `${target.name} 的人工生物圈进入不可逆失衡，边境殖民地被迫撤出`;
      }
      return;
    }

    if (event.type === 'digital-migration') {
      if (event.migrationStable) {
        substrateModes[targetIndex] = 1;
        technology[targetIndex] = Math.min(1, technology[targetIndex] + .12);
        machineAutonomy[targetIndex] = Math.min(1, machineAutonomy[targetIndex] + .18);
        lastCauses[targetIndex] = '数字基质迁移';
        event.outcome = `${target.name} 形成可迁移的分布式心智，辐射韧性与能源效率上升`;
      } else {
        contamination[targetIndex] = 1;
        cohesion[targetIndex] = Math.max(0, cohesion[targetIndex] - .24);
        lastCauses[targetIndex] = '人格分叉失控';
        event.outcome = `${target.name} 无法解决副本权利与身份一致性，网络陷入持续分裂`;
      }
      return;
    }

    if (event.type === 'precursor-ruins') {
      precursorKnowledge[targetIndex] = event.precursorHazard ? -1 : 1;
      if (event.precursorHazard) {
        for (let node = 0; node < nodeCount; node++) {
          if (owners[node] === targetIndex && node % 5 === 0) strength[node] *= .52;
        }
        visibility[targetIndex] = Math.min(1, visibility[targetIndex] + .16);
        lastCauses[targetIndex] = '先驱遗迹防御苏醒';
        event.outcome = `${target.name} 触发遗迹防御协议，解码站与邻近航路受损`;
      } else {
        technology[targetIndex] = Math.min(1, technology[targetIndex] + .16);
        lastCauses[targetIndex] = '获得先驱工程知识';
        event.outcome = `${target.name} 解码部分先驱工程学，获得跨代技术跃迁`;
      }
      return;
    }

    if (event.type === 'information-plague') {
      contamination[targetIndex] = event.contained ? -1 : 1;
      if (event.contained) {
        technology[targetIndex] = Math.min(1, technology[targetIndex] + .04);
        lastCauses[targetIndex] = '信息瘟疫隔离';
        event.outcome = `${target.name} 切断感染网络并建立可验证通信协议`;
      } else {
        cohesion[targetIndex] = Math.max(0, cohesion[targetIndex] - .3);
        machineAutonomy[targetIndex] = Math.min(1, machineAutonomy[targetIndex] + .12);
        for (let node = 0; node < nodeCount; node++) {
          if (owners[node] === targetIndex) strength[node] *= .84;
        }
        for (let otherIndex = 0; otherIndex < speciesCount; otherIndex++) {
          if (relationStates[relationIndex(targetIndex, otherIndex)] > 0) contamination[otherIndex] = 1;
        }
        lastCauses[targetIndex] = '信息瘟疫扩散';
        event.outcome = `${target.name} 的认知网络失去一致性，感染沿友好通信链路传播`;
      }
      return;
    }

    if (event.type === 'relativistic-divergence') {
      const childIndex = event.childSpeciesIndex;
      const transferred = transferTerritory(targetIndex, childIndex, .14);
      temporalDrift[targetIndex] = 1;
      temporalDrift[childIndex] = 1;
      setRelation(targetIndex, childIndex, .08, 0);
      lastCauses[targetIndex] = '相对论远征队归来';
      lastCauses[childIndex] = '经历独立的相对论历史';
      event.outcome = `${civilizationData[childIndex].name} 接管 ${transferred} 个恒星域，与母文明保持疏远中立`;
      return;
    }

    if (event.type === 'great-filter-crisis') {
      if (event.filterOutcome === '跨越过滤器') {
        filterStates[targetIndex] = 1;
        cohesion[targetIndex] = Math.min(1, cohesion[targetIndex] + .12);
        technology[targetIndex] = Math.min(1, technology[targetIndex] + .08);
        lastCauses[targetIndex] = '跨越文明过滤器';
        event.outcome = `${target.name} 建立长期风险治理体系，跨越本轮文明过滤器`;
      } else if (event.filterOutcome === '制度重构') {
        filterStates[targetIndex] = 2;
        cohesion[targetIndex] = Math.max(.35, cohesion[targetIndex] - .06);
        for (let node = 0; node < nodeCount; node++) {
          if (owners[node] === targetIndex && node % 6 === 0) strength[node] *= .7;
        }
        lastCauses[targetIndex] = '过滤器后制度重构';
        event.outcome = `${target.name} 失去部分增长能力，但通过制度重构避免系统性灭亡`;
      } else {
        filterStates[targetIndex] = -1;
        let lost = 0;
        for (let node = 0; node < nodeCount; node++) {
          if (owners[node] === targetIndex && (node + targetIndex) % 3 === 0) {
            owners[node] = -1;
            strength[node] = 0;
            lost++;
          }
        }
        cohesion[targetIndex] = Math.max(0, cohesion[targetIndex] - .32);
        lastCauses[targetIndex] = '文明过滤器崩溃';
        event.outcome = `${target.name} 在复合危机中失去 ${lost} 个疆域，进入长期衰退`;
      }
      return;
    }

    if (event.type === 'generation-ship') {
      if (event.migrationOutcome === '建立远端殖民地') {
        migrationModes[targetIndex] = 1;
        const homeOffset = target.homeNodeIndex * 3;
        let destination = -1;
        let greatestDistance = -1;
        for (let node = 0; node < nodeCount; node++) {
          if (owners[node] >= 0 || disabledNodes[node]) continue;
          const offset = node * 3;
          const distance = Math.hypot(
            simulation.habitatPositions[offset] - simulation.habitatPositions[homeOffset],
            simulation.habitatPositions[offset + 1] - simulation.habitatPositions[homeOffset + 1],
            simulation.habitatPositions[offset + 2] - simulation.habitatPositions[homeOffset + 2]
          );
          if (distance > greatestDistance) { destination = node; greatestDistance = distance; }
        }
        if (destination >= 0) {
          owners[destination] = targetIndex;
          strength[destination] = .26;
        }
        lastCauses[targetIndex] = '世代舰队建立远端殖民地';
        event.outcome = `${target.name} 的世代舰队抵达远端恒星域，建立不连续疆域`;
      } else if (event.migrationOutcome === '形成流浪舰队') {
        migrationModes[targetIndex] = 2;
        cohesion[targetIndex] = Math.min(1, cohesion[targetIndex] + .04);
        lastCauses[targetIndex] = '流浪舰队保持自治';
        event.outcome = `${target.name} 的舰队放弃固定目的地，形成可迁移的深空社会`;
      } else {
        migrationModes[targetIndex] = -1;
        cohesion[targetIndex] = Math.max(0, cohesion[targetIndex] - .08);
        lastCauses[targetIndex] = '世代舰队失联';
        event.outcome = `${target.name} 再未收到舰队遥测，只留下持续衰减的导航信标`;
      }
      return;
    }

    if (event.type === 'stellar-engineering') {
      if (event.engineeringStable) {
        engineeringModes[targetIndex] = event.engineeringMode === '恒星抬升'
          ? 1
          : event.engineeringMode === '套娃脑' ? 2 : 3;
        technology[targetIndex] = Math.min(1, technology[targetIndex] + .14);
        visibility[targetIndex] = Math.min(1, visibility[targetIndex] + .12);
        lastCauses[targetIndex] = `${event.engineeringMode}稳定运行`;
        event.outcome = `${target.name} 完成${event.engineeringMode}，延长能源窗口并获得恒星尺度基础设施`;
      } else {
        engineeringModes[targetIndex] = -1;
        for (let node = 0; node < nodeCount; node++) {
          if (owners[node] === targetIndex && node % 7 === 0) strength[node] *= .46;
        }
        lastCauses[targetIndex] = `${event.engineeringMode}失稳`;
        event.outcome = `${target.name} 的${event.engineeringMode}出现反馈失稳，多个恒星域进入紧急停机`;
      }
      return;
    }

    if (event.type === 'morphology-transition') {
      morphologyModes[targetIndex] = morphologyCodes[event.newMorphology] || morphologyModes[targetIndex];
      if (event.newMorphology === '机器文明' || event.newMorphology === '数字文明') {
        substrateModes[targetIndex] = 1;
        machineAutonomy[targetIndex] = Math.min(1, machineAutonomy[targetIndex] + .24);
      }
      if (event.newMorphology === '群体意识') cohesion[targetIndex] = Math.min(1, cohesion[targetIndex] + .18);
      if (event.newMorphology === '低可见度文明') visibility[targetIndex] = Math.max(0, visibility[targetIndex] - .22);
      lastCauses[targetIndex] = `转化为${event.newMorphology}`;
      event.outcome = `${target.name} 完成形态分化，扩张、通信与灾害响应规则随之改变`;
      return;
    }

    if (event.type === 'cosmic-archaeology') {
      if (event.artifactOutcome === '继承') {
        artifacts[targetIndex] = 1;
        technology[targetIndex] = Math.min(1, technology[targetIndex] + .13);
        lastCauses[targetIndex] = '继承灭亡文明遗产';
        event.outcome = `${target.name} 验证遗产来源并安全继承其中的工程知识`;
      } else if (event.artifactOutcome === '误读') {
        artifacts[targetIndex] = 2;
        cohesion[targetIndex] = Math.max(0, cohesion[targetIndex] - .07);
        lastCauses[targetIndex] = '误读宇宙遗产';
        event.outcome = `${target.name} 将残缺记录误读为完整历史，社会路线因此分裂`;
      } else {
        artifacts[targetIndex] = -1;
        contamination[targetIndex] = 1;
        lastCauses[targetIndex] = '唤醒古代自治系统';
        event.outcome = `${target.name} 唤醒休眠自治系统，遗迹转变为持续风险源`;
      }
      return;
    }

    if (event.type === 'ghost-signal') {
      signalDelays[targetIndex] = Math.min(255, event.delayUnits);
      technology[targetIndex] = Math.min(1, technology[targetIndex] + .035);
      lastCauses[targetIndex] = '接收光锥幽灵信号';
      event.outcome = `${target.name} 只能重建发信文明的过去，无法确认其现在是否仍然存在`;
      return;
    }

    if (event.type === 'exposure-response') {
      if (event.responsePolicy === '跨文明验证协议') {
        causalResponses[targetIndex] = 1;
        cohesion[targetIndex] = Math.min(1, cohesion[targetIndex] + .07);
        technology[targetIndex] = Math.min(1, technology[targetIndex] + .05);
      } else if (event.responsePolicy === '深空威慑部署') {
        causalResponses[targetIndex] = -1;
        visibility[targetIndex] = Math.min(1, visibility[targetIndex] + .16);
        cohesion[targetIndex] = Math.max(0, cohesion[targetIndex] - .06);
      } else {
        causalResponses[targetIndex] = 2;
        visibility[targetIndex] = Math.max(0, visibility[targetIndex] - .2);
      }
      lastCauses[targetIndex] = event.responsePolicy;
      event.outcome = `${target.name} 的${event.responsePolicy}成为早期接触事件的长期制度后果`;
      return;
    }

    if (event.type === 'intergalactic-diaspora') {
      const canCrossGalaxies = Boolean(technologyMasks[targetIndex] & technologyBits.stellarEngine);
      if (event.diasporaSuccess && canCrossGalaxies) {
        diasporaModes[targetIndex] = event.diasporaMode === '星系桥殖民地' ? 1 : 2;
        externalGalaxyIndices[targetIndex] = event.targetCompanionIndex || targetIndex % 5 + 1;
        externalPopulations[targetIndex] = Math.max(.18, internalPopulation[targetIndex] * .08);
        technology[targetIndex] = Math.min(1, technology[targetIndex] + .1);
        visibility[targetIndex] = event.diasporaMode === '星系际流浪社会'
          ? Math.max(0, visibility[targetIndex] - .08)
          : Math.min(1, visibility[targetIndex] + .04);
        lastCauses[targetIndex] = event.diasporaMode;
        event.outcome = `${target.name} 成功越过星系边界，${event.diasporaMode}开始独立存续`;
      } else {
        diasporaModes[targetIndex] = -1;
        cohesion[targetIndex] = Math.max(0, cohesion[targetIndex] - .09);
        lastCauses[targetIndex] = '跨星系舰队失联';
        event.outcome = canCrossGalaxies
          ? `${target.name} 的跨星系舰队越过观测极限后失联，只剩引力助推记录`
          : `${target.name} 尚未完成恒星推进器前置技术，跨星系航线无法建立`;
      }
      return;
    }

    if (event.type === 'black-hole-civilization') {
      const canHarvestBlackHole = Boolean(technologyMasks[targetIndex] & technologyBits.stellarEngine);
      if (event.blackHoleStable && canHarvestBlackHole) {
        blackHoleHabitats[targetIndex] = 1;
        technology[targetIndex] = Math.min(1, technology[targetIndex] + .16);
        visibility[targetIndex] = Math.min(1, visibility[targetIndex] + .08);
        lastCauses[targetIndex] = event.blackHoleMethod;
        event.outcome = `${target.name} 建成稳定的${event.blackHoleMethod}网络，进入黑洞能源阶段`;
      } else {
        blackHoleHabitats[targetIndex] = -1;
        for (let node = 0; node < nodeCount; node++) {
          if (owners[node] === targetIndex && (node + targetIndex) % 8 === 0) strength[node] *= .4;
        }
        lastCauses[targetIndex] = '黑洞能源站失稳';
        event.outcome = canHarvestBlackHole
          ? `${target.name} 的黑洞能源站出现吸积反馈，多处设施被迫抛离`
          : `${target.name} 缺少恒星推进基础设施，黑洞采能网络未能进入施工阶段`;
      }
      return;
    }

    if (event.type === 'universe-escape-project') {
      if (event.escapeSuccess && meetsEscapePrerequisites(technologyMasks[targetIndex])) {
        escapeProjects[targetIndex] = 1;
        technology[targetIndex] = 1;
        visibility[targetIndex] = 0;
        lastCauses[targetIndex] = `通过${event.escapeMode}脱离母宇宙`;
        event.outcome = `${target.name} 的${event.escapeMode}形成不可回传的逃逸通道，母宇宙只能记录其消失`;
      } else {
        escapeProjects[targetIndex] = -1;
        cohesion[targetIndex] = Math.max(0, cohesion[targetIndex] - .14);
        technology[targetIndex] = Math.max(.18, technology[targetIndex] - .06);
        lastCauses[targetIndex] = `${event.escapeMode}失败`;
        event.outcome = meetsEscapePrerequisites(technologyMasks[targetIndex])
          ? `${target.name} 未能稳定${event.escapeMode}，工程被终止并留下长期资源赤字`
          : `${target.name} 尚未完成黑洞采能前置技术，${event.escapeMode}在点火前终止`;
      }
    }
  };

  let scheduledImpactIndex = 0;
  let civilizationEventIndex = 0;
  while (scheduledImpactIndex < scheduledImpacts.length
    && scheduledImpacts[scheduledImpactIndex].impact.at < simulation.start) {
    const { impact } = scheduledImpacts[scheduledImpactIndex];
    if (impact.kind !== 'recovery' && impact.permanent) disabledNodes[impact.nodeIndex] = 1;
    scheduledImpactIndex++;
  }

  for (let time = simulation.start; time <= simulation.end; time += simulation.step) {
    civilizationData.forEach((species, speciesIndex) => {
      if (seeded[speciesIndex] || time < species.birth) return;
      seeded[speciesIndex] = 1;
      biosphereStages[speciesIndex] = Math.max(5, biosphereStages[speciesIndex]);
      if (time >= fermiParadigmAt) fermiAwareness[speciesIndex] = 1;
      if (disabledNodes[species.homeNodeIndex]) {
        lastCauses[speciesIndex] = '母星在文明诞生前失去宜居条件';
        return;
      }
      owners[species.homeNodeIndex] = speciesIndex;
      strength[species.homeNodeIndex] = .34;
      internalPopulation[speciesIndex] = .55 + technology[speciesIndex] * .9;
      lastCauses[speciesIndex] = '母星文明进入星际阶段';
    });

    while (scheduledImpactIndex < scheduledImpacts.length
      && scheduledImpacts[scheduledImpactIndex].impact.at <= time) {
      const { event, impact } = scheduledImpacts[scheduledImpactIndex];
      applyNodeImpact(event, impact, time);
      scheduledImpactIndex++;
    }
    while (civilizationEventIndex < civilizationEvents.length
      && civilizationEvents[civilizationEventIndex].impactAt <= time) {
      applyCivilizationEvent(civilizationEvents[civilizationEventIndex], time);
      civilizationEventIndex++;
    }

    civilizationData.forEach((species, speciesIndex) => {
      const advancement = advanceTechnologyTree({
        mask: technologyMasks[speciesIndex],
        active: seeded[speciesIndex] && territoryCountFor(speciesIndex) > 0,
        technology: technology[speciesIndex],
        research: research[speciesIndex],
        resources: resources[speciesIndex],
        energy: energyReserves[speciesIndex],
        hasCentralBlackHole: universe.hasCentralBlackHole,
        megastructure: megastructures[speciesIndex],
        engineeringMode: engineeringModes[speciesIndex],
        blackHoleHabitat: blackHoleHabitats[speciesIndex],
        escapeProject: escapeProjects[speciesIndex]
      });
      if (advancement.mask === technologyMasks[speciesIndex]) return;
      technologyMasks[speciesIndex] = advancement.mask;
      resources[speciesIndex] = Math.max(.03, resources[speciesIndex] - advancement.cost.resources);
      energyReserves[speciesIndex] = Math.max(.03, energyReserves[speciesIndex] - advancement.cost.energy);
      stability[speciesIndex] = Math.max(.08, stability[speciesIndex] - advancement.cost.stability);
      lastCauses[speciesIndex] = `${advancement.unlocked.at(-1)} 技术节点解锁`;
    });

    const friendlyCounts = new Uint8Array(speciesCount);
    const conflictCounts = new Uint8Array(speciesCount);
    for (let a = 0; a < speciesCount; a++) {
      for (let b = a + 1; b < speciesCount; b++) {
        const state = relationStates[relationIndex(a, b)];
        if (state > 0) { friendlyCounts[a]++; friendlyCounts[b]++; }
        if (state < 0) { conflictCounts[a]++; conflictCounts[b]++; }
      }
    }

    for (let node = 0; node < nodeCount; node++) {
      const owner = owners[node];
      if (owner < 0) continue;
      const species = civilizationData[owner];
      const infrastructure = 1 + megastructures[owner] * .34 + technology[owner] * .16
        + terraforming[owner] * .1 + substrateModes[owner] * .12 + precursorKnowledge[owner] * .08
        + Math.max(0, engineeringModes[owner]) * .1 + Math.max(0, artifacts[owner]) * .045
        + Math.max(0, blackHoleHabitats[owner]) * .28;
      const socialStability = .82 + cohesion[owner] * .3;
      const morphologySupport = morphologyModes[owner] === 2 || morphologyModes[owner] === 4
        ? 1.08
        : morphologyModes[owner] === 3 ? 1.05 : 1;
      const support = (1 + friendlyCounts[owner] * .045 - conflictCounts[owner] * .028)
        * infrastructure * socialStability * morphologySupport
        * (.72 + energyReserves[owner] * .28)
        * (.76 + resources[owner] * .24)
        * (.74 + stability[owner] * .26)
        * (contamination[owner] > 0 ? .72 : 1) * (filterStates[owner] < 0 ? .78 : 1);
      strength[node] += (.032 + species.resilience * .018) * support * (1 - strength[node]);
      strength[node] = THREE.MathUtils.clamp(strength[node], 0, 1.35);
    }

    const contact = new Uint8Array(speciesCount * speciesCount);
    for (let node = 0; node < nodeCount; node++) {
      const owner = owners[node];
      if (owner < 0) continue;
      simulation.adjacency[node].forEach((neighbor) => {
        const other = owners[neighbor];
        if (other < 0 || other === owner) return;
        contact[relationIndex(owner, other)] = 1;
        contact[relationIndex(other, owner)] = 1;
      });
    }

    for (let a = 0; a < speciesCount; a++) {
      for (let b = a + 1; b < speciesCount; b++) {
        let score = relationScores[relationIndex(a, b)];
        let state = relationStates[relationIndex(a, b)];
        if (contact[relationIndex(a, b)]) {
          const speciesA = civilizationData[a];
          const speciesB = civilizationData[b];
          score += ((speciesA.cooperation + speciesB.cooperation) - 1) * .026;
          score -= ((speciesA.aggression + speciesB.aggression) - .82) * .023;
          score += randomBetween(random, -.012, .012);
          if (state === 0 && score > .3) state = 1;
          if (state === 0 && score < -.26) state = -1;
          if (state === 1 && score < .08) state = 0;
          if (state === -1 && score > -.04) state = 0;
        } else {
          score *= .992;
          if (state === 1 && score < .1) state = 0;
          if (state === -1 && score > -.08) state = 0;
        }
        setRelation(a, b, THREE.MathUtils.clamp(score, -.95, .95), state);
      }
    }

    const ownedBySpecies = Array.from({ length: speciesCount }, () => []);
    for (let node = 0; node < nodeCount; node++) {
      if (owners[node] >= 0) ownedBySpecies[owners[node]].push(node);
    }
    civilizationData.forEach((species, speciesIndex) => {
      const territory = ownedBySpecies[speciesIndex];
      if (!seeded[speciesIndex] || territory.length === 0 || time >= expansionEnd) return;
      const probeBonus = probeModes[speciesIndex] > 0 ? .8 : 0;
      const frontierBonus = terraforming[speciesIndex] > 0 ? .48 : 0;
      const substrateBonus = substrateModes[speciesIndex] ? .28 : 0;
      const precursorBonus = precursorKnowledge[speciesIndex] > 0 ? .32 : 0;
      const migrationBonus = migrationModes[speciesIndex] > 0 ? .34 : 0;
      const engineeringBonus = engineeringModes[speciesIndex] > 0 ? .38 : 0;
      const diasporaBonus = diasporaModes[speciesIndex] > 0 ? .42 : 0;
      const attempts = 1 + Math.floor(
        species.expansionRate + friendlyCounts[speciesIndex] * .34 + probeBonus + frontierBonus
          + substrateBonus + precursorBonus + migrationBonus + engineeringBonus + diasporaBonus
          + technology[speciesIndex] * .28 + resources[speciesIndex] * .25
          + energyReserves[speciesIndex] * .24 + research[speciesIndex] * .2
          + governance[speciesIndex] * .12 + stability[speciesIndex] * .14
      );
      for (let attempt = 0; attempt < attempts; attempt++) {
        const frontier = [];
        territory.forEach((source) => {
          simulation.adjacency[source].forEach((target) => {
            if (!disabledNodes[target] && owners[target] !== speciesIndex) frontier.push([source, target]);
          });
        });
        if (frontier.length === 0) break;
        const [source, target] = frontier[Math.floor(random() * frontier.length)];
        const defender = owners[target];
        if (defender < 0) {
          if (reservedFor[target] >= 0 && reservedFor[target] !== speciesIndex && !seeded[reservedFor[target]]) continue;
          if (random() < .18 + species.expansionRate * .19 + friendlyCounts[speciesIndex] * .025) {
            owners[target] = speciesIndex;
            strength[target] = Math.max(.14, strength[source] * .34);
            territory.push(target);
            lastCauses[speciesIndex] = friendlyCounts[speciesIndex] > 0 ? '协作网络推动殖民' : '殖民前沿扩张';
          }
          continue;
        }
        const state = relationStates[relationIndex(speciesIndex, defender)];
        if (state > 0) {
          strength[source] = Math.min(1.35, strength[source] + .018);
          strength[target] = Math.min(1.35, strength[target] + .012);
          lastCauses[speciesIndex] = `与${civilizationData[defender].name}交流`;
          lastCauses[defender] = `与${species.name}交流`;
          continue;
        }
        if (state < 0) {
          const attack = strength[source] * (.72 + species.aggression * .76 + random() * .35)
            * (.72 + energyReserves[speciesIndex] * .18 + research[speciesIndex] * .1);
          const defense = strength[target] * (.84 + civilizationData[defender].resilience * .52 + random() * .28)
            * (.7 + resources[defender] * .12 + governance[defender] * .08 + stability[defender] * .1);
          if (attack > defense) {
            owners[target] = speciesIndex;
            strength[target] = Math.max(.08, Math.min(.48, (attack - defense) * .5));
            lastCauses[speciesIndex] = `与${civilizationData[defender].name}争夺边界`;
            lastCauses[defender] = `边界被${species.name}突破`;
          } else {
            strength[source] *= .84;
            strength[target] *= .92;
            lastCauses[speciesIndex] = `对${civilizationData[defender].name}的进攻受挫`;
          }
        } else if (random() < species.aggression * .035) {
          const lowered = relationScores[relationIndex(speciesIndex, defender)] - .055;
          setRelation(speciesIndex, defender, lowered, lowered < -.26 ? -1 : 0);
        }
      }
    });

    civilizationData.forEach((species, speciesIndex) => {
      if (probeModes[speciesIndex] >= 0 || time % 17 !== speciesIndex % 17) return;
      const frontierNodes = [];
      for (let node = 0; node < nodeCount; node++) {
        if (owners[node] === speciesIndex) frontierNodes.push(node);
      }
      if (frontierNodes.length <= 1) return;
      const lostNode = frontierNodes[Math.floor(random() * frontierNodes.length)];
      owners[lostNode] = -1;
      strength[lostNode] = 0;
      lastCauses[speciesIndex] = '失控探针吞噬边缘基础设施';
    });

    civilizationData.forEach((species, speciesIndex) => {
      if (!archives[speciesIndex] || time < archiveReadyAt[speciesIndex] || time >= expansionEnd) return;
      if (territoryCountFor(speciesIndex) > 0) return;
      let revivalNode = species.homeNodeIndex;
      if (disabledNodes[revivalNode] || owners[revivalNode] >= 0) {
        revivalNode = -1;
        for (let node = 0; node < nodeCount; node++) {
          if (!disabledNodes[node] && owners[node] < 0) { revivalNode = node; break; }
        }
      }
      if (revivalNode < 0) return;
      owners[revivalNode] = speciesIndex;
      strength[revivalNode] = .28;
      archives[speciesIndex] = 0;
      technology[speciesIndex] *= .82;
      cohesion[speciesIndex] = Math.max(.42, cohesion[speciesIndex]);
      lastCauses[speciesIndex] = '知识方舟完成文明复兴';
    });

    if (time >= Math.min(declineWindow.energyStart, declineWindow.fateStart)) {
      const energyDecline = THREE.MathUtils.smoothstep(
        time,
        declineWindow.energyStart,
        declineWindow.energyEnd
      );
      const fateDecline = Number.isFinite(declineWindow.fateStart)
        ? THREE.MathUtils.smoothstep(time, declineWindow.fateStart, declineWindow.fateEnd)
        : 0;
      const decline = Math.max(energyDecline, fateDecline);
      const declineFinished = time >= declineWindow.energyEnd || time >= declineWindow.fateEnd;
      const declineCause = fateDecline > energyDecline
        ? universe.cosmicFate.label
        : '恒星能源枯竭';
      for (let node = 0; node < nodeCount; node++) {
        const owner = owners[node];
        if (owner < 0 || civilizationData[owner].highDimensional && time >= civilizationData[owner].ascensionAt) continue;
        if (escapeProjects[owner] > 0) continue;
        const lateEnergyRefuge = (substrateModes[owner] || engineeringModes[owner] > 0) && fateDecline === 0;
        const refugeFactor = substrateModes[owner] && engineeringModes[owner] > 0
          ? .28
          : substrateModes[owner] ? .38 : engineeringModes[owner] > 0 ? .62 : 1;
        const declineLoss = (.004 + decline * .052) * refugeFactor;
        const ownerDeclineFinished = declineFinished && (!lateEnergyRefuge
          || time >= Math.min(1000, declineWindow.energyEnd + 70));
        strength[node] -= declineLoss;
        if (strength[node] <= .035 || ownerDeclineFinished) {
          owners[node] = -1;
          strength[node] = 0;
          lastCauses[owner] = declineCause;
        }
      }
    }

    const counts = new Uint16Array(speciesCount);
    const infrastructureCapacity = new Float32Array(speciesCount);
    for (let node = 0; node < nodeCount; node++) {
      const owner = owners[node];
      if (owner < 0) continue;
      counts[owner]++;
      infrastructureCapacity[owner] += strength[node];
    }
    const trends = new Int8Array(speciesCount);
    const active = new Uint8Array(speciesCount);
    const ascended = new Uint8Array(speciesCount);
    const energyTiers = new Uint8Array(speciesCount);
    for (let speciesIndex = 0; speciesIndex < speciesCount; speciesIndex++) {
      trends[speciesIndex] = Math.sign(counts[speciesIndex] - lastCounts[speciesIndex]);
      active[speciesIndex] = seeded[speciesIndex] && counts[speciesIndex] > 0 ? 1 : 0;
      ascended[speciesIndex] = civilizationData[speciesIndex].highDimensional && time >= civilizationData[speciesIndex].ascensionAt ? 1 : 0;
      energyTiers[speciesIndex] = !active[speciesIndex]
        ? 0
        : technologyMasks[speciesIndex] & technologyBits.universeEscape
          ? 4
          : technologyMasks[speciesIndex] & technologyBits.blackHoleEnergy
            ? 3
            : technologyMasks[speciesIndex] & technologyBits.dysonSwarm ? 2 : 1;

      if (active[speciesIndex]) {
        const species = civilizationData[speciesIndex];
        const conflictPressure = conflictCounts[speciesIndex] / Math.max(1, speciesCount - 1);
        const capacity = Math.max(1.2, infrastructureCapacity[speciesIndex] * 2.4
          * (terraforming[speciesIndex] > 0 ? 1.24 : 1)
          * (substrateModes[speciesIndex] ? 1.34 : 1));
        const targetEnergy = THREE.MathUtils.clamp(
          .26 + technology[speciesIndex] * .28 + energyTiers[speciesIndex] * .14
            + megastructures[speciesIndex] * .1 - counts[speciesIndex] * .0007,
          .1,
          1
        );
        energyReserves[speciesIndex] += (targetEnergy - energyReserves[speciesIndex]) * .075;
        const targetResources = THREE.MathUtils.clamp(
          .32 + Math.min(.34, counts[speciesIndex] / 150) + terraforming[speciesIndex] * .08
            - internalPopulation[speciesIndex] / capacity * .12 - conflictPressure * .16,
          .08,
          1
        );
        resources[speciesIndex] += (targetResources - resources[speciesIndex]) * .055;
        const targetGovernance = THREE.MathUtils.clamp(
          .22 + species.cooperation * .26 + cohesion[speciesIndex] * .34
            + causalResponses[speciesIndex] * .04 - conflictPressure * .18,
          .08,
          1
        );
        governance[speciesIndex] += (targetGovernance - governance[speciesIndex]) * .045;
        const targetResearch = THREE.MathUtils.clamp(
          .18 + technology[speciesIndex] * .38 + energyReserves[speciesIndex] * .16
            + Math.max(0, precursorKnowledge[speciesIndex]) * .14 + artifacts[speciesIndex] * .06,
          .08,
          1
        );
        research[speciesIndex] += (targetResearch - research[speciesIndex]) * .05;
        const targetStability = THREE.MathUtils.clamp(
          .16 + cohesion[speciesIndex] * .42 + governance[speciesIndex] * .2
            + resources[speciesIndex] * .16 + energyReserves[speciesIndex] * .1
            - conflictPressure * .22 - Math.max(0, contamination[speciesIndex]) * .16,
          .04,
          1
        );
        stability[speciesIndex] += (targetStability - stability[speciesIndex]) * .07;
        const growth = .018 * resources[speciesIndex] * energyReserves[speciesIndex]
          * stability[speciesIndex] * (1 - internalPopulation[speciesIndex] / capacity);
        internalPopulation[speciesIndex] = Math.max(.02, internalPopulation[speciesIndex] * (1 + growth));
        technology[speciesIndex] = Math.min(1, technology[speciesIndex] + research[speciesIndex] * .00034);
        if (externalGalaxyIndices[speciesIndex]) {
          externalPopulations[speciesIndex] = Math.min(
            Math.max(.2, capacity * .32),
            Math.max(.02, externalPopulations[speciesIndex] * (1 + growth * .72))
          );
        }
      } else {
        internalPopulation[speciesIndex] *= .72;
        externalPopulations[speciesIndex] *= escapeProjects[speciesIndex] > 0 ? 1 : .92;
        stability[speciesIndex] *= .9;
      }
      lastCounts[speciesIndex] = counts[speciesIndex];
    }
    simulation.snapshots.push({
      time,
      owners: owners.slice(),
      counts,
      populations: internalPopulation.slice(),
      infrastructureCapacity,
      resources: resources.slice(),
      energyReserves: energyReserves.slice(),
      governance: governance.slice(),
      research: research.slice(),
      stability: stability.slice(),
      trends,
      active,
      ascended,
      technology: technology.slice(),
      visibility: visibility.slice(),
      cohesion: cohesion.slice(),
      machineAutonomy: machineAutonomy.slice(),
      archives: archives.slice(),
      megastructures: megastructures.slice(),
      uplifts: uplifts.slice(),
      probeModes: probeModes.slice(),
      terraforming: terraforming.slice(),
      substrateModes: substrateModes.slice(),
      precursorKnowledge: precursorKnowledge.slice(),
      contamination: contamination.slice(),
      temporalDrift: temporalDrift.slice(),
      evacuations: evacuations.slice(),
      biosphereStages: biosphereStages.slice(),
      filterStates: filterStates.slice(),
      migrationModes: migrationModes.slice(),
      engineeringModes: engineeringModes.slice(),
      morphologyModes: morphologyModes.slice(),
      artifacts: artifacts.slice(),
      signalDelays: signalDelays.slice(),
      fermiAwareness: fermiAwareness.slice(),
      causalResponses: causalResponses.slice(),
      diasporaModes: diasporaModes.slice(),
      blackHoleHabitats: blackHoleHabitats.slice(),
      escapeProjects: escapeProjects.slice(),
      technologyMasks: technologyMasks.slice(),
      externalGalaxyIndices: externalGalaxyIndices.slice(),
      externalPopulations: externalPopulations.slice(),
      energyTiers,
      relations: relationStates.slice(),
      relationScores: relationScores.slice(),
      causes: lastCauses.slice()
    });
  }

  events.forEach((event) => {
    const impacts = Array.from(eventImpactStats.get(event).entries()).map(([speciesIndex, stats]) => ({
      speciesIndex,
      lossFraction: THREE.MathUtils.clamp(stats.effectiveLoss / Math.max(1, stats.initialCount), 0, 1),
      collapse: stats.collapse,
      affectedDomains: stats.affectedNodes.size,
      lostDomains: stats.lostNodes.size,
      weakenedDomains: stats.weakenedNodes.size
    }));
    event.civilizationImpacts = impacts;
    const civilizationSummary = impacts.length
      ? impacts.map((impact) => {
          const name = civilizationData[impact.speciesIndex].name;
          if (impact.collapse) return `${name} 灭绝`;
          if (impact.lostDomains > 0) {
            return impact.weakenedDomains > 0
              ? `${name} 损失 ${impact.lostDomains} 个疆域，另有 ${impact.weakenedDomains} 个受损`
              : `${name} 损失 ${impact.lostDomains} 个疆域`;
          }
          return `${name} 的 ${impact.weakenedDomains} 个疆域受损`;
        }).join('，')
      : '未波及当时存在的文明疆域';
    event.outcome = `${event.systemOutcome}；${civilizationSummary}`;
  });

}

export function civilizationSnapshotAt(civilizationSimulation, position) {
  if (!civilizationSimulation?.snapshots.length) return null;
  const simulation = civilizationSimulation;
  const index = THREE.MathUtils.clamp(
    Math.floor((position - simulation.start) / simulation.step),
    0,
    simulation.snapshots.length - 1
  );
  return simulation.snapshots[index];
}

export function civilizationConsequencesAt(position, speciesIndex, civilizationData, cosmicEvents) {
  let capacityFactor = 1;
  let collapsedAt = Infinity;
  const causes = [];
  const species = civilizationData[speciesIndex];
  cosmicEvents.forEach((event) => {
    if (position < event.impactAt) return;
    if (species?.highDimensional && event.impactAt >= species.ascensionAt) return;
    const impact = event.civilizationImpacts.find((item) => item.speciesIndex === speciesIndex);
    if (!impact) return;
    capacityFactor *= 1 - impact.lossFraction;
    if (impact.collapse) collapsedAt = Math.min(collapsedAt, event.impactAt);
    causes.push(event.label);
  });
  return { capacityFactor, collapsedAt, lossFraction: 1 - capacityFactor, causes };
}

export function deriveCivilizationRuntime(position, simulationState, civilizationData, cosmicEvents) {
  return civilizationData.map((species, index) => {
    const eventState = civilizationConsequencesAt(position, index, civilizationData, cosmicEvents);
    const alive = Boolean(simulationState?.active[index]);
    const ascended = Boolean(simulationState?.ascended[index]) && alive;
    const friendlyNames = [];
    const conflictNames = [];
    civilizationData.forEach((other, otherIndex) => {
      if (otherIndex === index || !simulationState?.active[otherIndex]) return;
      const relation = simulationState.relations[index * civilizationData.length + otherIndex];
      if (relation > 0) friendlyNames.push(other.name);
      if (relation < 0) conflictNames.push(other.name);
    });
    const statuses = [];
    if (simulationState?.megastructures[index]) statuses.push('巨构供能');
    if (simulationState?.probeModes[index] > 0) statuses.push('探针网络');
    if (simulationState?.probeModes[index] < 0) statuses.push('探针失控');
    if (simulationState?.archives[index]) statuses.push('方舟就绪');
    if (simulationState?.uplifts[index]) statuses.push(species.originType === 'uplift' ? '提升文明' : '提升计划');
    if (simulationState?.terraforming[index] > 0) statuses.push('地球化成功');
    if (simulationState?.terraforming[index] < 0) statuses.push('地球化失败');
    if (simulationState?.substrateModes[index]) statuses.push('数字载体');
    if (simulationState?.precursorKnowledge[index] > 0) statuses.push('先驱技术');
    if (simulationState?.precursorKnowledge[index] < 0) statuses.push('遗迹损伤');
    if (simulationState?.contamination[index] > 0) statuses.push('信息瘟疫');
    if (simulationState?.contamination[index] < 0) statuses.push('验证网络');
    if (simulationState?.temporalDrift[index]) statuses.push('相对论分支');
    if (simulationState?.evacuations[index]) statuses.push('轨道避难');
    if (simulationState?.filterStates[index] === 1) statuses.push('跨越过滤器');
    if (simulationState?.filterStates[index] === 2) statuses.push('过滤器重构');
    if (simulationState?.filterStates[index] < 0) statuses.push('过滤器衰退');
    if (simulationState?.migrationModes[index] === 1) statuses.push('远端舰队');
    if (simulationState?.migrationModes[index] === 2) statuses.push('流浪舰队');
    if (simulationState?.migrationModes[index] < 0) statuses.push('舰队失联');
    if (simulationState?.engineeringModes[index] > 0) {
      statuses.push(['', '恒星抬升', '套娃脑', '恒星推进器'][simulationState.engineeringModes[index]]);
    }
    if (simulationState?.engineeringModes[index] < 0) statuses.push('恒星工程失稳');
    if (simulationState?.artifacts[index] === 1) statuses.push('遗产继承');
    if (simulationState?.artifacts[index] === 2) statuses.push('遗产误读');
    if (simulationState?.artifacts[index] < 0) statuses.push('遗迹风险');
    if (simulationState?.signalDelays[index]) statuses.push('幽灵信号');
    if (simulationState?.causalResponses[index] === 1) statuses.push('验证协议');
    if (simulationState?.causalResponses[index] === -1) statuses.push('深空威慑');
    if (simulationState?.causalResponses[index] === 2) statuses.push('全域静默');
    const morphology = morphologyLabels[simulationState?.morphologyModes[index]] || species.morphology;
    if (morphology) statuses.push(morphology);
    if (simulationState?.biosphereStages[index] >= 5) statuses.push('复杂生物圈');
    if (simulationState?.fermiAwareness[index]) statuses.push(`费米：${species.fermiScenario}`);
    if (simulationState?.diasporaModes[index] === 1) statuses.push('星系桥殖民地');
    if (simulationState?.diasporaModes[index] === 2) statuses.push('星系际流浪');
    if (simulationState?.diasporaModes[index] < 0) statuses.push('跨星系失联');
    if (simulationState?.blackHoleHabitats[index] > 0) statuses.push('黑洞能源');
    if (simulationState?.blackHoleHabitats[index] < 0) statuses.push('黑洞设施失稳');
    if (simulationState?.escapeProjects[index] > 0) statuses.push('母宇宙外存续');
    if (simulationState?.escapeProjects[index] < 0) statuses.push('逃逸工程失败');
    return {
      alive,
      ascended,
      escaped: simulationState?.escapeProjects[index] > 0,
      count: simulationState?.counts[index] || 0,
      trend: simulationState?.trends[index] || 0,
      technology: simulationState?.technology[index] || 0,
      visibility: simulationState?.visibility[index] || 0,
      cohesion: simulationState?.cohesion[index] || 0,
      machineAutonomy: simulationState?.machineAutonomy[index] || 0,
      energyTier: simulationState?.energyTiers[index] || 0,
      technologyMask: simulationState?.technologyMasks?.[index] || 0,
      population: simulationState?.populations?.[index] || 0,
      resources: simulationState?.resources?.[index] || 0,
      energy: simulationState?.energyReserves?.[index] || 0,
      governance: simulationState?.governance?.[index] || 0,
      research: simulationState?.research?.[index] || 0,
      stability: simulationState?.stability?.[index] || 0,
      externalGalaxyIndex: simulationState?.externalGalaxyIndices?.[index] || 0,
      externalPopulation: simulationState?.externalPopulations?.[index] || 0,
      statuses,
      eventState,
      friendlyNames,
      conflictNames
    };
  });
}

export function findDominantRelationship(simulationState, runtimeState, speciesCount) {
  if (!simulationState) return null;
  let activeRelationship = null;
  let relationshipPriority = -1;
  for (let a = 0; a < speciesCount; a++) {
    for (let b = a + 1; b < speciesCount; b++) {
      const stateA = runtimeState[a];
      const stateB = runtimeState[b];
      if (!stateA?.alive || !stateB?.alive || stateA.ascended || stateB.ascended) continue;
      const relationState = simulationState.relations[a * speciesCount + b];
      if (relationState === 0) continue;
      const score = Math.abs(simulationState.relationScores[a * speciesCount + b]);
      const priority = score + (relationState < 0 ? 2 : 0);
      if (priority <= relationshipPriority) continue;
      relationshipPriority = priority;
      activeRelationship = {
        speciesA: a,
        speciesB: b,
        relationship: relationState < 0 ? 'conflict' : 'coexistence'
      };
    }
  }
  return activeRelationship;
}
