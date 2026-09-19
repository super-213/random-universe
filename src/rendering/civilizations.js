import * as THREE from 'three';

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
  stellarRemnants,
  remnantDynamics,
  cosmicPosition,
  civilizationData,
  civilizationGroups
}) {
  if (!stellarRemnants) return;
  const remnantPositions = stellarRemnants.geometry.attributes.position.array;
  const rotatedOffset = new THREE.Vector3();
  const rotateOffsetWithHost = (hostIndex, x, y, z, target) => {
    const offset = hostIndex * 3;
    const samplePosition = Math.min(cosmicPosition, remnantDynamics.escapeAt[hostIndex]);
    const angle = Math.max(0, samplePosition - 570) * remnantDynamics.orbitRates[hostIndex];
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
      const source = hostIndex * 3;
      const target = colonyIndex * 3;
      rotateOffsetWithHost(
        hostIndex,
        species.hostOffsets[target],
        species.hostOffsets[target + 1],
        species.hostOffsets[target + 2],
        rotatedOffset
      );
      colonyPositions[target] = remnantPositions[source] + rotatedOffset.x;
      colonyPositions[target + 1] = remnantPositions[source + 1] + rotatedOffset.y;
      colonyPositions[target + 2] = remnantPositions[source + 2] + rotatedOffset.z;
      if (species.highDimensional && cosmicPosition >= species.ascensionAt) {
        const projection = THREE.MathUtils.smoothstep(cosmicPosition, species.ascensionAt, species.ascensionAt + 34);
        const phase = colonyIndex * 1.618 + cosmicPosition * .035;
        colonyPositions[target] += Math.sin(phase) * projection * .7;
        colonyPositions[target + 1] += Math.cos(phase * .73) * projection * .42;
        colonyPositions[target + 2] += Math.sin(phase * .51 + 2.1) * projection * .7;
      }
    }
    civilization.geometry.attributes.position.needsUpdate = true;

    const homeOffset = species.homeRemnantIndex * 3;
    rotateOffsetWithHost(
      species.homeRemnantIndex,
      species.homeOffset.x,
      species.homeOffset.y,
      species.homeOffset.z,
      rotatedOffset
    );
    species.home.set(
      remnantPositions[homeOffset] + rotatedOffset.x,
      remnantPositions[homeOffset + 1] + rotatedOffset.y,
      remnantPositions[homeOffset + 2] + rotatedOffset.z
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
