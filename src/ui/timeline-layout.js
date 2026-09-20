const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

const eventPosition = (event) => clamp(
  Number.isFinite(event?.impactAt) ? event.impactAt : Number(event?.start) || 0,
  0,
  1000
);

export function normalizeTimelineViewport(viewport = {}) {
  const rawStart = Number(viewport.start);
  const rawEnd = Number(viewport.end);
  const start = clamp(Number.isFinite(rawStart) ? rawStart : 0, 0, 999);
  const end = clamp(Number.isFinite(rawEnd) ? rawEnd : 1000, start + 1, 1000);
  return { start, end, span: end - start };
}

export function timelinePercentAt(position, viewport) {
  const normalized = normalizeTimelineViewport(viewport);
  return (position - normalized.start) / normalized.span * 100;
}

export function timelinePositionAtPercent(percent, viewport) {
  const normalized = normalizeTimelineViewport(viewport);
  return normalized.start + clamp(percent, 0, 100) / 100 * normalized.span;
}

export function zoomTimelineViewport(viewport, anchor, scale, minimumSpan = 60) {
  const current = normalizeTimelineViewport(viewport);
  const nextSpan = clamp(current.span * scale, minimumSpan, 1000);
  const clampedAnchor = clamp(anchor, current.start, current.end);
  const anchorRatio = (clampedAnchor - current.start) / current.span;
  let start = clampedAnchor - nextSpan * anchorRatio;
  start = clamp(start, 0, 1000 - nextSpan);
  return { start, end: start + nextSpan };
}

export function nearestTimelineEvent(events, position, maximumDistance = Infinity) {
  let nearest = null;
  events.forEach((event, index) => {
    const eventAt = eventPosition(event);
    const distance = Math.abs(eventAt - position);
    if (distance > maximumDistance || (nearest && distance >= nearest.distance)) return;
    nearest = { event, index, position: eventAt, distance };
  });
  return nearest;
}

export function clusterTimelineEvents(events, trackWidth, minimumGap = 14, viewport) {
  const width = Math.max(1, Number(trackWidth) || 1);
  const gap = Math.max(1, Number(minimumGap) || 1);
  const normalized = normalizeTimelineViewport(viewport);
  const entries = events
    .map((event, index) => {
      const position = eventPosition(event);
      return {
        event,
        index,
        position,
        x: (position - normalized.start) / normalized.span * width
      };
    })
    .filter((entry) => entry.position >= normalized.start && entry.position <= normalized.end)
    .sort((a, b) => a.x - b.x || a.index - b.index);

  const groups = [];
  entries.forEach((entry) => {
    const current = groups.at(-1);
    if (!current || entry.x - current.x >= gap) {
      groups.push({ entries: [entry], x: entry.x, position: entry.position });
      return;
    }
    current.entries.push(entry);
    current.x = current.entries.reduce((total, item) => total + item.x, 0) / current.entries.length;
    current.position = current.entries.reduce(
      (total, item) => total + item.position,
      0
    ) / current.entries.length;
  });

  return groups;
}

export function timelineDetailWindow(events) {
  const first = Math.min(...events.map((event) => Math.min(event.start, eventPosition(event))));
  const last = Math.max(...events.map((event) => Math.max(
    event.start + Math.max(0, event.duration || 0),
    eventPosition(event)
  )));
  const contentSpan = Math.max(1, last - first);
  const padding = Math.max(2, contentSpan * .1);
  const start = clamp(first - padding, 0, 1000);
  const end = clamp(last + padding, 0, 1000);

  if (end - start >= 6) return { start, end, span: end - start };
  const center = (start + end) / 2;
  const adjustedStart = clamp(center - 3, 0, 994);
  return { start: adjustedStart, end: adjustedStart + 6, span: 6 };
}
