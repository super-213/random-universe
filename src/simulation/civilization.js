import * as THREE from 'three';
import { mulberry32, randomBetween } from '../domain/random.js';

export function buildCivilizationSimulation({ universe, civilizationData, civilizationSimulation, cosmicEvents }) {
  if (!civilizationSimulation || civilizationData.length === 0) return;
  const simulation = civilizationSimulation;
  const random = mulberry32(universe.seed + 9241);
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

  const relationIndex = (a, b) => a * speciesCount + b;
  for (let a = 0; a < speciesCount; a++) {
    for (let b = a + 1; b < speciesCount; b++) {
      const speciesA = civilizationData[a];
      const speciesB = civilizationData[b];
      const affinity = (speciesA.cooperation + speciesB.cooperation) * .28
        - (speciesA.aggression + speciesB.aggression) * .24
        + randomBetween(random, -.16, .16);
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

  const removeTerritory = (speciesIndex, fraction, collapse, cause) => {
    const territory = [];
    for (let node = 0; node < nodeCount; node++) {
      if (owners[node] === speciesIndex) territory.push(node);
    }
    if (territory.length === 0) return;
    if (collapse) fraction = 1;
    for (let index = territory.length - 1; index > 0; index--) {
      const swap = Math.floor(random() * (index + 1));
      [territory[index], territory[swap]] = [territory[swap], territory[index]];
    }
    const losses = Math.min(territory.length, Math.max(collapse ? territory.length : 0, Math.round(territory.length * fraction * .62)));
    territory.forEach((node, order) => {
      if (order < losses) {
        owners[node] = -1;
        strength[node] = 0;
      } else {
        strength[node] *= Math.max(.18, 1 - fraction * .46);
      }
    });
    lastCauses[speciesIndex] = cause;
  };

  const events = cosmicEvents.slice().sort((a, b) => a.impactAt - b.impactAt);
  for (let time = simulation.start; time <= simulation.end; time += simulation.step) {
    civilizationData.forEach((species, speciesIndex) => {
      if (seeded[speciesIndex] || time < species.birth) return;
      seeded[speciesIndex] = 1;
      owners[species.homeNodeIndex] = speciesIndex;
      strength[species.homeNodeIndex] = .34;
      lastCauses[speciesIndex] = '母星文明进入星际阶段';
    });

    events.forEach((event) => {
      if (event.impactAt <= time - simulation.step || event.impactAt > time) return;
      event.civilizationImpacts.forEach((impact) => {
        const species = civilizationData[impact.speciesIndex];
        if (!species || (species.highDimensional && time >= species.ascensionAt)) return;
        removeTerritory(impact.speciesIndex, impact.lossFraction, impact.collapse, event.label);
      });
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
      const support = 1 + friendlyCounts[owner] * .045 - conflictCounts[owner] * .028;
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
      if (!seeded[speciesIndex] || territory.length === 0 || time >= 650) return;
      const attempts = 1 + Math.floor(species.expansionRate + friendlyCounts[speciesIndex] * .34);
      for (let attempt = 0; attempt < attempts; attempt++) {
        const frontier = [];
        territory.forEach((source) => {
          simulation.adjacency[source].forEach((target) => {
            if (owners[target] !== speciesIndex) frontier.push([source, target]);
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

    if (time >= 620) {
      const decline = THREE.MathUtils.smoothstep(time, 620, 710);
      for (let node = 0; node < nodeCount; node++) {
        const owner = owners[node];
        if (owner < 0 || civilizationData[owner].highDimensional && time >= civilizationData[owner].ascensionAt) continue;
        strength[node] -= .004 + decline * .052;
        if (strength[node] <= .035 || time >= 710) {
          owners[node] = -1;
          strength[node] = 0;
          lastCauses[owner] = '恒星能源枯竭';
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
      relations: relationStates.slice(),
      relationScores: relationScores.slice(),
      causes: lastCauses.slice()
    });
  }

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
    return {
      alive,
      ascended,
      count: simulationState?.counts[index] || 0,
      trend: simulationState?.trends[index] || 0,
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
