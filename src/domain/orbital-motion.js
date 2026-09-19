const ORBIT_FORMATION_START = 220;
const ORBIT_FORMATION_END = 340;

// Integrate a smoothstep onset so both orbital phase and angular velocity are
// continuous while the first galaxies form. After formation, one timeline
// unit contributes one unit of visual orbital phase.
export function orbitalTimelinePhase(position) {
  if (position <= ORBIT_FORMATION_START) return 0;

  const duration = ORBIT_FORMATION_END - ORBIT_FORMATION_START;
  if (position < ORBIT_FORMATION_END) {
    const progress = (position - ORBIT_FORMATION_START) / duration;
    return duration * (progress ** 3 - .5 * progress ** 4);
  }

  return duration * .5 + position - ORBIT_FORMATION_END;
}

export function orbitalAngleAt(position, orbitRate) {
  return orbitalTimelinePhase(position) * orbitRate;
}
