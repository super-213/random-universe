import * as THREE from 'three';
import { stellarEndTimelinePosition } from '../domain/universe.js';
import { createSeededRandom, randomBetween } from '../domain/random.js';

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
  const archiveReadyAt = new Float32Array(speciesCount);
  archiveReadyAt.fill(Infinity);
  civilizationData.forEach((species, index) => {
    technology[index] = species.technology ?? .25;
    visibility[index] = species.visibility ?? .08;
    cohesion[index] = species.cohesion ?? .6;
    machineAutonomy[index] = species.machineAutonomy ?? .18;
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
        affinity += child.originType === 'uplift' ? .44 : -.38;
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

    const destructionChance = THREE.MathUtils.clamp(
      severity * .62 / Math.max(.65, species.resilience),
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
      if (disabledNodes[species.homeNodeIndex]) {
        lastCauses[speciesIndex] = '母星在文明诞生前失去宜居条件';
        return;
      }
      owners[species.homeNodeIndex] = speciesIndex;
      strength[species.homeNodeIndex] = .34;
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
      const infrastructure = 1 + megastructures[owner] * .34 + technology[owner] * .16;
      const socialStability = .82 + cohesion[owner] * .3;
      const support = (1 + friendlyCounts[owner] * .045 - conflictCounts[owner] * .028)
        * infrastructure * socialStability;
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
      const attempts = 1 + Math.floor(
        species.expansionRate + friendlyCounts[speciesIndex] * .34 + probeBonus + technology[speciesIndex] * .28
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
          const attack = strength[source] * (.72 + species.aggression * .76 + random() * .35);
          const defense = strength[target] * (.84 + civilizationData[defender].resilience * .52 + random() * .28);
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
        strength[node] -= .004 + decline * .052;
        if (strength[node] <= .035 || declineFinished) {
          owners[node] = -1;
          strength[node] = 0;
          lastCauses[owner] = declineCause;
        }
      }
    }

    const counts = new Uint16Array(speciesCount);
    const populations = new Float32Array(speciesCount);
    for (let node = 0; node < nodeCount; node++) {
      const owner = owners[node];
      if (owner < 0) continue;
      counts[owner]++;
      populations[owner] += strength[node];
    }
    const trends = new Int8Array(speciesCount);
    const active = new Uint8Array(speciesCount);
    const ascended = new Uint8Array(speciesCount);
    for (let speciesIndex = 0; speciesIndex < speciesCount; speciesIndex++) {
      trends[speciesIndex] = Math.sign(counts[speciesIndex] - lastCounts[speciesIndex]);
      active[speciesIndex] = seeded[speciesIndex] && counts[speciesIndex] > 0 ? 1 : 0;
      ascended[speciesIndex] = civilizationData[speciesIndex].highDimensional && time >= civilizationData[speciesIndex].ascensionAt ? 1 : 0;
      lastCounts[speciesIndex] = counts[speciesIndex];
    }
    simulation.snapshots.push({
      time,
      owners: owners.slice(),
      counts,
      populations,
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
    return {
      alive,
      ascended,
      count: simulationState?.counts[index] || 0,
      trend: simulationState?.trends[index] || 0,
      technology: simulationState?.technology[index] || 0,
      visibility: simulationState?.visibility[index] || 0,
      cohesion: simulationState?.cohesion[index] || 0,
      machineAutonomy: simulationState?.machineAutonomy[index] || 0,
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
