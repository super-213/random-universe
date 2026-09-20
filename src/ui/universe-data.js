import {
  formatArmStructure, formatCivilizations, formatGalaxyHue, formatProbability, formatStars
} from '../domain/universe.js';
import { galaxyRoots, galaxyTypes, notes } from '../domain/catalog.js';
import { formatOutcomeTime, formatVacuumState } from '../domain/cosmic-fate.js';

const $ = (selector) => document.querySelector(selector);

export function updateUniverseData(universe) {
  const fate = universe.cosmicFate;
  $('#universe-id').textContent = `#${universe.seed}`;
  $('#explore-id').textContent = `#${universe.seed}`;
  $('#speed-value').textContent = `${universe.speed.toFixed(2)} × 现实宇宙`;
  $('#gravity-value').textContent = `${universe.gravity.toFixed(2)} × 现实宇宙`;
  $('#fine-structure-value').textContent = `${universe.fineStructure.toFixed(3)} × 现实宇宙`;
  $('#mass-ratio-value').textContent = `${universe.massRatio.toFixed(3)} × 现实宇宙`;
  $('#expansion-value').textContent = `${universe.expansionRate.toFixed(2)} × 现实宇宙`;
  $('#dark-energy-value').textContent = `${(universe.darkEnergyDensity * 100).toFixed(1)}%`;
  $('#fluctuation-value').textContent = `${universe.primordialFluctuation.toFixed(2)} × 现实宇宙`;
  $('#cmb-value').textContent = `${universe.cmbTemperature.toFixed(2)} K`;
  $('#elements-value').textContent = `${universe.elements} 种`;
  $('#stars-value').textContent = formatStars(universe.stars);
  $('#life-probability-value').textContent = formatProbability(universe.lifeProbability);
  $('#civilizations-value').textContent = formatCivilizations(universe.civilizations);
  $('#galaxy-type-value').textContent = galaxyTypes[universe.galaxyType];
  $('#arm-count-value').textContent = formatArmStructure(universe.galaxyType, universe.armCount);
  $('#black-hole-value').textContent = universe.hasCentralBlackHole ? '存在' : '未形成';
  $('#nucleus-value').textContent = universe.hasCentralBlackHole ? (universe.activeNucleus ? '活动 · 吸积中' : '宁静') : '不适用';
  $('#stellar-window-value').textContent = fate.outcomeExponent <= universe.lastStarDeathExponent
    ? '结局前未抵达'
    : `约 10^${universe.lastStarDeathExponent.toFixed(1)} 年`;
  $('#galaxy-hue-value').textContent = formatGalaxyHue(universe.hue);
  $('#evaporation-value').textContent = fate.outcomeExponent < universe.blackHoleEvaporationExponent
    ? '结局前未抵达'
    : `约 10^${universe.blackHoleEvaporationExponent} 年`;
  $('#dark-energy-model-value').textContent = fate.modelLabel;
  $('#dark-energy-model-value').title = fate.modelDescription;
  $('#dark-energy-eos-value').textContent = `w₀ ${fate.w0.toFixed(2)} · wₐ ${fate.wa.toFixed(2)}`;
  $('#vacuum-value').textContent = formatVacuumState(fate);
  $('#lifetime-value').textContent = `${fate.label} · ${formatOutcomeTime(fate)}`;
  $('#timeline-stellar-label').textContent = fate.outcomeExponent <= universe.lastStarDeathExponent
    ? '暗能量分流'
    : '恒星熄灭';
  $('#timeline-late-label').textContent = fate.type === 'heat-death' ? '黑洞时代' : '临界阶段';
  $('#timeline-final-label').textContent = fate.shortLabel;
  $('#cosmic-timeline').setAttribute('aria-label', `从大爆炸到${fate.label}的宇宙时间`);
  $('#universe-note').textContent = notes[universe.seed % notes.length];
  $('#galaxy-name').textContent = `${galaxyRoots[universe.seed % galaxyRoots.length]}星系`;
  const diameter = (8 + universe.stars * 4.7).toFixed(1);
  $('#galaxy-meta').textContent = `${galaxyTypes[universe.galaxyType]} · 直径 ${diameter} 万光年`;
}
