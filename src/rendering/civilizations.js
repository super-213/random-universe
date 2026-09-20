import * as THREE from 'three';
import { orbitalAngleAt } from '../domain/orbital-motion.js';

export function applyCivilizationSnapshot(snapshot, {
  civilizationSimulation,
  civilizationData,
  civilizationGroups
}) {
  if (!snapshot || !civilizationSimulation) return;
  const writeCounts = new Uint16Array(civilizationData.length);
  snapshot.owners.forEach((owner, node) => {
    if (owner < 0) return;
    const target = writeCounts[owner]++;
    civilizationData[owner].hostRemnantIndices[target] = civilizationSimulation.habitatRemnantIndices[node];
  });
  civilizationData.forEach((species, index) => {
    species.displayCount = writeCounts[index];
    civilizationGroups[index].geometry.setDrawRange(0, writeCounts[index]);
  });
}

export function syncCivilizationHosts({
  clickableStars,
  stellarRemnants,
  remnantDynamics,
  cosmicPosition,
  civilizationData,
  civilizationGroups
}) {
  if (!stellarRemnants) return;
  const remnantPositions = stellarRemnants.geometry.attributes.position.array;
  const stellarPositions = clickableStars?.geometry.attributes.position.array;
  const hostPositionFor = (hostIndex) => {
    const remnantBorn = cosmicPosition >= remnantDynamics.birthAt[hostIndex];
    if (!stellarPositions || remnantBorn) {
      return { positions: remnantPositions, offset: hostIndex * 3 };
    }
    return {
      positions: stellarPositions,
      offset: remnantDynamics.sourceIndices[hostIndex] * 3
    };
  };
  const rotatedOffset = new THREE.Vector3();
  const rotateOffsetWithHost = (hostIndex, x, y, z, target) => {
    const offset = hostIndex * 3;
    const samplePosition = Math.min(cosmicPosition, remnantDynamics.escapeAt[hostIndex]);
    const angle = orbitalAngleAt(samplePosition, remnantDynamics.orbitRates[hostIndex]);
    const cosine = Math.cos(angle);
    const sine = Math.sin(angle);
    const ax = remnantDynamics.axes[offset];
    const ay = remnantDynamics.axes[offset + 1];
    const az = remnantDynamics.axes[offset + 2];
    const dot = ax * x + ay * y + az * z;
    target.set(
      x * cosine + (ay * z - az * y) * sine + ax * dot * (1 - cosine),
      y * cosine + (az * x - ax * z) * sine + ay * dot * (1 - cosine),
      z * cosine + (ax * y - ay * x) * sine + az * dot * (1 - cosine)
    );
  };
  civilizationData.forEach((species, speciesIndex) => {
    const civilization = civilizationGroups[speciesIndex];
    if (!civilization) return;
    const colonyPositions = civilization.geometry.attributes.position.array;
    for (let colonyIndex = 0; colonyIndex < species.displayCount; colonyIndex++) {
      const hostIndex = species.hostRemnantIndices[colonyIndex];
      const host = hostPositionFor(hostIndex);
      const target = colonyIndex * 3;
      rotateOffsetWithHost(
        hostIndex,
        species.hostOffsets[target],
        species.hostOffsets[target + 1],
        species.hostOffsets[target + 2],
        rotatedOffset
      );
      colonyPositions[target] = host.positions[host.offset] + rotatedOffset.x;
      colonyPositions[target + 1] = host.positions[host.offset + 1] + rotatedOffset.y;
      colonyPositions[target + 2] = host.positions[host.offset + 2] + rotatedOffset.z;
      if (species.highDimensional && cosmicPosition >= species.ascensionAt) {
        const projection = THREE.MathUtils.smoothstep(cosmicPosition, species.ascensionAt, species.ascensionAt + 34);
        const phase = colonyIndex * 1.618 + cosmicPosition * .035;
        colonyPositions[target] += Math.sin(phase) * projection * .7;
        colonyPositions[target + 1] += Math.cos(phase * .73) * projection * .42;
        colonyPositions[target + 2] += Math.sin(phase * .51 + 2.1) * projection * .7;
      }
    }
    civilization.geometry.attributes.position.needsUpdate = true;

    const homeHost = hostPositionFor(species.homeRemnantIndex);
    rotateOffsetWithHost(
      species.homeRemnantIndex,
      species.homeOffset.x,
      species.homeOffset.y,
      species.homeOffset.z,
      rotatedOffset
    );
    species.home.set(
      homeHost.positions[homeHost.offset] + rotatedOffset.x,
      homeHost.positions[homeHost.offset + 1] + rotatedOffset.y,
      homeHost.positions[homeHost.offset + 2] + rotatedOffset.z
    );
    if (species.highDimensional && cosmicPosition >= species.ascensionAt) {
      const projection = THREE.MathUtils.smoothstep(cosmicPosition, species.ascensionAt, species.ascensionAt + 34);
      const phase = speciesIndex * 2.17 + cosmicPosition * .035;
      species.home.x += Math.sin(phase) * projection * .7;
      species.home.y += Math.cos(phase * .73) * projection * .42;
      species.home.z += Math.sin(phase * .51 + 2.1) * projection * .7;
    }
  });

}
