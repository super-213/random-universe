const clamp = (value, min = 0, max = 1) => Math.max(min, Math.min(max, value));

export function createCosmicAudio() {
  let context = null;
  let master = null;
  let drone = null;
  let overtone = null;
  let filter = null;
  let enabled = false;
  let lastEventId = null;
  let suspendTimer = null;

  function ensureContext() {
    if (context) return;
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    context = new AudioContext();
    master = context.createGain();
    master.gain.value = 0;
    filter = context.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 420;
    drone = context.createOscillator();
    overtone = context.createOscillator();
    const droneGain = context.createGain();
    const overtoneGain = context.createGain();
    drone.type = 'sine';
    overtone.type = 'triangle';
    drone.frequency.value = 42;
    overtone.frequency.value = 63;
    droneGain.gain.value = .72;
    overtoneGain.gain.value = .18;
    drone.connect(droneGain).connect(filter);
    overtone.connect(overtoneGain).connect(filter);
    filter.connect(master).connect(context.destination);
    drone.start();
    overtone.start();
  }

  async function setEnabled(nextEnabled) {
    ensureContext();
    enabled = Boolean(nextEnabled && context);
    if (!context) return false;
    if (suspendTimer !== null) {
      window.clearTimeout(suspendTimer);
      suspendTimer = null;
    }
    if (enabled) await context.resume();
    master.gain.cancelScheduledValues(context.currentTime);
    master.gain.linearRampToValueAtTime(enabled ? .032 : 0, context.currentTime + .45);
    if (!enabled) {
      suspendTimer = window.setTimeout(() => {
        suspendTimer = null;
        context?.suspend();
      }, 560);
    }
    return enabled;
  }

  function dispose() {
    enabled = false;
    if (suspendTimer !== null) window.clearTimeout(suspendTimer);
    suspendTimer = null;
    try { drone?.stop(); } catch {}
    try { overtone?.stop(); } catch {}
    drone?.disconnect();
    overtone?.disconnect();
    filter?.disconnect();
    master?.disconnect();
    context?.close();
    context = null;
    master = null;
    drone = null;
    overtone = null;
    filter = null;
  }

  function pulse(kind = 'event', intensity = .5) {
    if (!enabled || !context) return;
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    const now = context.currentTime;
    oscillator.type = kind === 'civilization' ? 'sine' : 'triangle';
    oscillator.frequency.setValueAtTime(kind === 'civilization' ? 286 : 92, now);
    oscillator.frequency.exponentialRampToValueAtTime(kind === 'civilization' ? 412 : 54, now + .9);
    gain.gain.setValueAtTime(0, now);
    gain.gain.linearRampToValueAtTime(.018 * clamp(intensity, .2, 1), now + .035);
    gain.gain.exponentialRampToValueAtTime(.0001, now + 1.15);
    oscillator.connect(gain).connect(master);
    oscillator.start(now);
    oscillator.stop(now + 1.2);
  }

  function update({ position = 0, activeEvent = null, activeSpecies = 0 }) {
    if (!enabled || !context) return;
    const normalized = clamp(position / 1000);
    const now = context.currentTime;
    const baseFrequency = 34 + Math.sin(normalized * Math.PI) * 22 + activeSpecies * 1.8;
    drone.frequency.setTargetAtTime(baseFrequency, now, .8);
    overtone.frequency.setTargetAtTime(baseFrequency * (normalized > .78 ? 1.33 : 1.5), now, .8);
    filter.frequency.setTargetAtTime(180 + (1 - normalized) * 520 + activeSpecies * 18, now, 1.2);
    const eventId = activeEvent?.id || null;
    if (eventId && eventId !== lastEventId) {
      pulse(activeEvent.category === 'civilization' ? 'civilization' : 'event', .45 + activeSpecies * .05);
    }
    lastEventId = eventId;
  }

  return {
    get enabled() { return enabled; },
    get supported() { return Boolean(window.AudioContext || window.webkitAudioContext); },
    dispose,
    pulse,
    setEnabled,
    update
  };
}
