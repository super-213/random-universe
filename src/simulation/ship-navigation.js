const clamp = (value, minimum, maximum) => Math.max(minimum, Math.min(maximum, value));

function perpendicularDirection(dx, dy, dz, obstacleIndex) {
  const useVerticalAxis = Math.abs(dy) < .82;
  const ax = useVerticalAxis ? 0 : 1;
  const ay = useVerticalAxis ? 1 : 0;
  const az = 0;
  let px = dy * az - dz * ay;
  let py = dz * ax - dx * az;
  let pz = dx * ay - dy * ax;
  const length = Math.max(1e-6, Math.hypot(px, py, pz));
  const direction = obstacleIndex % 2 ? -1 : 1;
  px = px / length * direction;
  py = py / length * direction;
  pz = pz / length * direction;
  return [px, py, pz];
}

export function obstacleAvoidingPathPoints(start, end, obstacles = [], {
  clearance = .35,
  endpointMargin = .08
} = {}) {
  const dx = end[0] - start[0];
  const dy = end[1] - start[1];
  const dz = end[2] - start[2];
  const lengthSquared = dx * dx + dy * dy + dz * dz;
  if (lengthSquared < 1e-8) return [start.slice(), end.slice()];

  const detours = [];
  obstacles.forEach((obstacle, obstacleIndex) => {
    const position = obstacle.position;
    const relativeX = position[0] - start[0];
    const relativeY = position[1] - start[1];
    const relativeZ = position[2] - start[2];
    const progress = clamp(
      (relativeX * dx + relativeY * dy + relativeZ * dz) / lengthSquared,
      0,
      1
    );
    if (progress <= endpointMargin || progress >= 1 - endpointMargin) return;

    const closestX = start[0] + dx * progress;
    const closestY = start[1] + dy * progress;
    const closestZ = start[2] + dz * progress;
    let awayX = closestX - position[0];
    let awayY = closestY - position[1];
    let awayZ = closestZ - position[2];
    const distance = Math.hypot(awayX, awayY, awayZ);
    const protectedRadius = Math.max(0, obstacle.radius || 0) + clearance;
    if (distance >= protectedRadius) return;

    if (distance < 1e-6) {
      [awayX, awayY, awayZ] = perpendicularDirection(dx, dy, dz, obstacleIndex);
    } else {
      awayX /= distance;
      awayY /= distance;
      awayZ /= distance;
    }
    const detourRadius = protectedRadius * 1.35;
    detours.push({
      progress,
      point: [
        position[0] + awayX * detourRadius,
        position[1] + awayY * detourRadius,
        position[2] + awayZ * detourRadius
      ]
    });
  });

  detours.sort((a, b) => a.progress - b.progress);
  return [start.slice(), ...detours.map((detour) => detour.point), end.slice()];
}
