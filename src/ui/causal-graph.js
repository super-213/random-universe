const svgNamespace = 'http://www.w3.org/2000/svg';
const graphStates = new WeakMap();

function svgElement(name, attributes = {}) {
  const element = document.createElementNS(svgNamespace, name);
  Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value));
  return element;
}

function graphLayout(history) {
  const rootOrder = [];
  const rootFor = new Map();
  history.forEach(({ event }) => {
    const root = event.causalRootId || event.sourceEventId || event.id;
    rootFor.set(event.id, root);
    if (!rootOrder.includes(root)) rootOrder.push(root);
  });
  return history.map(({ event, role }, index) => ({
    event,
    role,
    x: 70 + index * 118,
    y: 42 + rootOrder.indexOf(rootFor.get(event.id)) * 66
  }));
}

function applyTransform(container) {
  const state = graphStates.get(container);
  if (!state?.viewport) return;
  state.viewport.setAttribute('transform', `translate(${state.x} ${state.y}) scale(${state.scale})`);
  container.querySelector('[data-graph-scale]').textContent = `${Math.round(state.scale * 100)}%`;
}

export function renderCausalGraph(container, history, timeLabel, universe) {
  if (!container) return;
  const previous = graphStates.get(container) || { scale: 1, x: 0, y: 0 };
  container.replaceChildren();
  const controls = document.createElement('div');
  controls.className = 'causal-graph-controls';
  controls.innerHTML = '<button type="button" data-graph-zoom="out" aria-label="缩小因果图">−</button><span data-graph-scale>100%</span><button type="button" data-graph-zoom="in" aria-label="放大因果图">＋</button><button type="button" data-graph-reset>复位</button>';
  const svg = svgElement('svg', { role: 'img', 'aria-label': '文明事件因果图', viewBox: '0 0 620 300' });
  const viewport = svgElement('g');
  svg.appendChild(viewport);
  container.append(controls, svg);
  graphStates.set(container, {
    scale: previous.scale,
    x: previous.x,
    y: previous.y,
    viewport,
    dragging: false,
    pointerX: 0,
    pointerY: 0
  });

  const nodes = graphLayout(history);
  const positionsById = new Map(nodes.map((node) => [node.event.id, node]));
  nodes.forEach((node) => {
    if (!node.event.sourceEventId || !positionsById.has(node.event.sourceEventId)) return;
    const source = positionsById.get(node.event.sourceEventId);
    viewport.appendChild(svgElement('path', {
      d: `M${source.x + 18},${source.y} C${source.x + 68},${source.y} ${node.x - 50},${node.y} ${node.x - 18},${node.y}`,
      class: 'causal-edge'
    }));
  });
  nodes.forEach((node) => {
    const group = svgElement('g', { class: 'causal-node', 'data-event-id': node.event.id, tabindex: '0', role: 'button' });
    group.appendChild(svgElement('circle', { cx: node.x, cy: node.y, r: 17 }));
    const label = svgElement('text', { x: node.x, y: node.y + 33, 'text-anchor': 'middle' });
    label.textContent = node.event.label.length > 8 ? `${node.event.label.slice(0, 8)}…` : node.event.label;
    const time = svgElement('text', { x: node.x, y: node.y - 27, 'text-anchor': 'middle', class: 'causal-time' });
    time.textContent = timeLabel(node.event.impactAt, universe);
    const role = svgElement('text', { x: node.x, y: node.y + 3, 'text-anchor': 'middle', class: 'causal-role' });
    role.textContent = node.role.slice(0, 1);
    group.append(time, label, role);
    viewport.appendChild(group);
  });
  if (nodes.length === 0) {
    const empty = svgElement('text', { x: 310, y: 150, 'text-anchor': 'middle', class: 'causal-empty' });
    empty.textContent = '尚无可绘制的因果事件';
    viewport.appendChild(empty);
  }

  controls.addEventListener('click', (event) => {
    const state = graphStates.get(container);
    if (event.target.closest('[data-graph-reset]')) Object.assign(state, { scale: 1, x: 0, y: 0 });
    const zoom = event.target.closest('[data-graph-zoom]')?.dataset.graphZoom;
    if (zoom) state.scale = Math.max(.65, Math.min(2.4, state.scale * (zoom === 'in' ? 1.18 : .85)));
    applyTransform(container);
  });
  svg.addEventListener('wheel', (event) => {
    event.preventDefault();
    const state = graphStates.get(container);
    state.scale = Math.max(.65, Math.min(2.4, state.scale * (event.deltaY < 0 ? 1.08 : .92)));
    applyTransform(container);
  }, { passive: false });
  svg.addEventListener('pointerdown', (event) => {
    if (event.target.closest('[data-event-id]')) return;
    const state = graphStates.get(container);
    Object.assign(state, { dragging: true, pointerX: event.clientX, pointerY: event.clientY });
    svg.setPointerCapture(event.pointerId);
  });
  svg.addEventListener('pointermove', (event) => {
    const state = graphStates.get(container);
    if (!state.dragging) return;
    state.x += event.clientX - state.pointerX;
    state.y += event.clientY - state.pointerY;
    state.pointerX = event.clientX;
    state.pointerY = event.clientY;
    applyTransform(container);
  });
  svg.addEventListener('pointerup', () => { graphStates.get(container).dragging = false; });
  svg.addEventListener('pointercancel', () => { graphStates.get(container).dragging = false; });
  applyTransform(container);
}
