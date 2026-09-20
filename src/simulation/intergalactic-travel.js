export const fleetStates = Object.freeze({
  none: 0,
  outbound: 1,
  arrived: 2,
  divided: 3,
  lost: -1,
  returned: -2
});

const fleetStateLabels = {
  [fleetStates.none]: '尚未启航',
  [fleetStates.outbound]: '航行中',
  [fleetStates.arrived]: '已抵达',
  [fleetStates.divided]: '途中分化',
  [fleetStates.lost]: '失联',
  [fleetStates.returned]: '返航'
};

export function fleetTravelDuration(distanceMly, speedFractionC) {
  return Math.round(Math.max(18, Math.min(96, distanceMly / Math.max(.04, speedFractionC) * 8)));
}

export function fleetProgress(time, departureAt, arrivalAt) {
  if (!Number.isFinite(departureAt) || !Number.isFinite(arrivalAt)) return 0;
  return Math.max(0, Math.min(1, (time - departureAt) / Math.max(1, arrivalAt - departureAt)));
}

export function fleetStateLabel(state) {
  return fleetStateLabels[state] || fleetStateLabels[0];
}
