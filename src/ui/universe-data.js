import {
  formatArmStructure, formatCivilizations, formatGalaxyHue, formatProbability, formatStars,
  stellarEndTimelinePosition
} from '../domain/universe.js';
import { galaxyRoots, galaxyTypes } from '../domain/catalog.js';
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
  $('#civilizations-value').title = `宏观估算值；时间轴固定跟踪 ${universe.trackedSpeciesCount} 个主要文明样本，以保证每个种子都有可观察的文明演化`;
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
  $('#dark-energy-model-value').textContent = fate.ripVariant === 'pseudo'
    ? `${fate.modelLabel} · 伪撕裂变体`
    : fate.modelLabel;
  $('#dark-energy-model-value').title = fate.modelDescription;
  const equationLabel = fate.model === 'little-rip'
    ? 'w→-1⁻ · 渐近模型'
    : fate.model === 'type-iii'
      ? `aₛ ${fate.singularityScaleFactor.toFixed(1)} · 有限尺度`
      : `w₀ ${fate.w0.toFixed(2)} · wₐ ${fate.wa.toFixed(2)} · 有界 BA`;
  $('#dark-energy-eos-value').textContent = equationLabel;
  $('#vacuum-value').textContent = formatVacuumState(fate);
  const ripCropped = fate.type === 'little-rip'
    && fate.ripOnsetExponent <= universe.protonDecayExponent;
  $('#baryon-fate-value').textContent = Number.isFinite(universe.protonDecayExponent)
    ? (fate.outcomeExponent <= universe.protonDecayExponent || ripCropped
        ? `质子衰变路径 · ${fate.type === 'little-rip' ? '撕裂前未抵达' : '终局前未发生'}`
        : `质子衰变路径 · 约 10^${universe.protonDecayExponent.toFixed(1)} 年`)
    : fate.type === 'little-rip'
      ? '质子稳定路径 · 超远未来事件按撕裂时间裁剪'
      : '质子稳定路径 · 黑矮星事件可发生';
  $('#lifetime-value').textContent = `${fate.label} · ${formatOutcomeTime(fate)}`;
  const equalityLabel = $('#timeline-equality-label');
  equalityLabel.title = `约 ${(universe.cosmicMilestones.matterRadiationEqualityYears / 1e4).toFixed(1)} 万年`;
  const stellarEnd = stellarEndTimelinePosition(universe);
  const stellarLabel = $('#timeline-stellar-label');
  const stellarEndReached = fate.type === 'heat-death' || stellarEnd < fate.onsetAt;
  stellarLabel.textContent = '恒星熄灭';
  stellarLabel.style.left = `${stellarEnd / 10}%`;
  stellarLabel.style.display = stellarEndReached ? '' : 'none';
  const lateLabel = $('#timeline-late-label');
  lateLabel.textContent = fate.type === 'heat-death'
    ? '黑洞时代'
    : fate.type === 'little-rip'
      ? '渐近解束缚'
      : fate.type === 'type-iii-singularity'
        ? '密度发散'
        : fate.cyclicBounce ? '坍缩—反弹' : '临界阶段';
  lateLabel.style.left = `${(fate.type === 'heat-death' ? 845 : fate.onsetAt) / 10}%`;
  $('#timeline-final-label').textContent = fate.shortLabel;
  $('#cosmic-timeline').setAttribute('aria-label', `从大爆炸到${fate.label}的宇宙时间`);
  $('#galaxy-name').textContent = `${galaxyRoots[universe.seedValue % galaxyRoots.length]}星系`;
  const diameter = (8 + universe.stars * 4.7).toFixed(1);
  $('#galaxy-meta').textContent = `${galaxyTypes[universe.galaxyType]} · 直径 ${diameter} 万光年`;
}
