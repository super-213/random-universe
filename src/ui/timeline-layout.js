const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

const eventPosition = (event) => clamp(
  Number.isFinite(event?.impactAt) ? event.impactAt : Number(event?.start) || 0,
  0,
  1000
);

export function clusterTimelineEvents(events, trackWidth, minimumGap = 14) {
  const width = Math.max(1, Number(trackWidth) || 1);
  const gap = Math.max(1, Number(minimumGap) || 1);
  const entries = events
    .map((event, index) => {
      const position = eventPosition(event);
      return { event, index, position, x: position / 1000 * width };
    })
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
