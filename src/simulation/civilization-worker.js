import { buildCivilizationSimulation } from './civilization.js';

function collectTransferables(value, buffers = new Set()) {
  if (!value || typeof value !== 'object') return buffers;
  if (ArrayBuffer.isView(value)) buffers.add(value.buffer);
  else if (value instanceof ArrayBuffer) buffers.add(value);
  else Object.values(value).forEach((entry) => collectTransferables(entry, buffers));
  return buffers;
}

self.addEventListener('message', (message) => {
  const payload = message.data;
  try {
    buildCivilizationSimulation(payload);
    const result = {
      simulation: payload.civilizationSimulation,
      eventUpdates: payload.cosmicEvents.map((event) => ({
        id: event.id,
        outcome: event.outcome,
        civilizationImpacts: event.civilizationImpacts || []
      }))
    };
    self.postMessage(result, [...collectTransferables(result)]);
  } catch (error) {
    self.postMessage({ error: error?.message || String(error) });
  }
});
