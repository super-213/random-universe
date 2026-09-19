import {
  formatArmStructure, formatCivilizations, formatGalaxyHue, formatProbability, formatStars
} from '../domain/universe.js';
import { galaxyRoots, galaxyTypes, notes } from '../domain/catalog.js';

const $ = (selector) => document.querySelector(selector);

export function updateUniverseData(universe) {
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
  $('#stellar-window-value').textContent = `约 10^${universe.stellarFormationEndExponent.toFixed(1)} 年`;
  $('#galaxy-hue-value').textContent = formatGalaxyHue(universe.hue);
  $('#evaporation-value').textContent = `约 10^${universe.blackHoleEvaporationExponent} 年`;
  $('#lifetime-value').textContent = '渐近 · 无有限终点';
  $('#universe-note').textContent = notes[universe.seed % notes.length];
  $('#galaxy-name').textContent = `${galaxyRoots[universe.seed % galaxyRoots.length]}星系`;
  const diameter = (8 + universe.stars * 4.7).toFixed(1);
  $('#galaxy-meta').textContent = `${galaxyTypes[universe.galaxyType]} · 直径 ${diameter} 万光年`;
}
