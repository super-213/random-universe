const NORMAL_JOURNEY_SECONDS = 35 * 60;
const SECONDS_PER_YEAR = 31557600;
const ULTRA_FUTURE_START = 950;
const ASYMPTOTIC_FUTURE_START = 995;
const ULTRA_FUTURE_END_EXPONENT = 1200;
const ASYMPTOTIC_EXPONENT_SPAN = 200;
const MAX_NUMERIC_YEAR_EXPONENT = Math.log10(Number.MAX_VALUE);

const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
const smoothstep = (value, min, max) => {
  const progress = clamp((value - min) / (max - min), 0, 1);
  return progress * progress * (3 - 2 * progress);
};

export function cosmicLogYearsToTimelinePosition(exponent, universe) {
  const presentAgeYears = universe?.presentAgeYears || 1.38e10;
  const milestones = universe?.cosmicMilestones || {};
  const recombinationYears = milestones.recombinationYears || 380000;
  const firstStarsYears = Math.max(recombinationYears * 1.1, milestones.firstStarsYears || 1.8e8);
  const matureGalaxiesYears = Math.max(firstStarsYears * 1.1, milestones.matureGalaxiesYears || 1e9);
  const clampedPresentYears = Math.max(matureGalaxiesYears * 1.1, presentAgeYears);
  const minimumExponent = Math.log10(.001 / SECONDS_PER_YEAR);
  const numericExponent = Number(exponent);
  const targetExponent = numericExponent === Infinity
    ? Infinity
    : Number.isFinite(numericExponent) ? Math.max(minimumExponent, numericExponent) : minimumExponent;
  const secondsExponent = targetExponent + Math.log10(SECONDS_PER_YEAR);
  const recombinationExponent = Math.log10(recombinationYears);
  const firstStarsExponent = Math.log10(firstStarsYears);
  const matureGalaxiesExponent = Math.log10(matureGalaxiesYears);
  const presentExponent = Math.log10(clampedPresentYears);

  if (secondsExponent < Math.log10(180)) {
    if (secondsExponent < 0) return clamp((secondsExponent + 3) / 3, 0, 1) * 18;
    return 18 + clamp(secondsExponent / Math.log10(180), 0, 1) * 37;
  }
  if (targetExponent < recombinationExponent) {
    return 55 + clamp(
      (targetExponent - Math.log10(180 / SECONDS_PER_YEAR))
        / (recombinationExponent - Math.log10(180 / SECONDS_PER_YEAR)),
      0,
      1
    ) * 90;
  }
  if (targetExponent < firstStarsExponent) {
    return 145 + (targetExponent - recombinationExponent)
      / (firstStarsExponent - recombinationExponent) * 100;
  }
  if (targetExponent < matureGalaxiesExponent) {
    return 245 + (targetExponent - firstStarsExponent)
      / (matureGalaxiesExponent - firstStarsExponent) * 95;
  }
  if (targetExponent < presentExponent) {
    return 340 + (targetExponent - matureGalaxiesExponent)
      / (presentExponent - matureGalaxiesExponent) * 130;
  }

  const fate = universe?.cosmicFate;
  if (fate && Number.isFinite(fate.outcomeYears)) {
    if (targetExponent >= fate.outcomeExponent) return 1000;
    const progress = (targetExponent - presentExponent)
      / (fate.outcomeExponent - presentExponent);
    return clamp(470 + progress * 530, 470, 1000);
  }
  if (targetExponent < 12) return 470 + (targetExponent - presentExponent) / (12 - presentExponent) * 100;
  if (targetExponent < 14) return 570 + (targetExponent - 12) / 2 * 80;
  if (targetExponent < 15) return 650 + (targetExponent - 14) * 30;
  if (targetExponent < 38) return 680 + (targetExponent - 15) / 23 * 165;
  const evaporationExponent = universe?.blackHoleEvaporationExponent || 100;
  if (targetExponent < evaporationExponent) {
    return 845 + (targetExponent - 38) / (evaporationExponent - 38) * 105;
  }
  if (targetExponent < ULTRA_FUTURE_END_EXPONENT) {
    return ULTRA_FUTURE_START
      + (targetExponent - evaporationExponent)
        / (ULTRA_FUTURE_END_EXPONENT - evaporationExponent)
        * (ASYMPTOTIC_FUTURE_START - ULTRA_FUTURE_START);
  }
  if (!Number.isFinite(targetExponent)) return 1000;
  const asymptoticProgress = (targetExponent - ULTRA_FUTURE_END_EXPONENT)
    / (targetExponent - (ULTRA_FUTURE_END_EXPONENT - ASYMPTOTIC_EXPONENT_SPAN));
  return clamp(
    ASYMPTOTIC_FUTURE_START + asymptoticProgress * (1000 - ASYMPTOTIC_FUTURE_START),
    ASYMPTOTIC_FUTURE_START,
    1000
  );
}

export function cosmicYearsToTimelinePosition(years, universe) {
  const numericYears = Number(years);
  const exponent = numericYears === Infinity
    ? Infinity
    : Math.log10(Math.max(.001 / SECONDS_PER_YEAR, numericYears || 0));
  return cosmicLogYearsToTimelinePosition(exponent, universe);
}

export function timelinePositionToCosmicLogYears(position, universe) {
  const target = clamp(Number(position) || 0, 0, 1000);
  const milestones = universe?.cosmicMilestones || {};
  const recombinationYears = milestones.recombinationYears || 380000;
  const firstStarsYears = Math.max(recombinationYears * 1.1, milestones.firstStarsYears || 1.8e8);
  const matureGalaxiesYears = Math.max(firstStarsYears * 1.1, milestones.matureGalaxiesYears || 1e9);
  const presentAgeYears = Math.max(matureGalaxiesYears * 1.1, universe?.presentAgeYears || 1.38e10);
  const interpolateExponent = (start, end, value) => (
    Math.log10(start) + (Math.log10(end) - Math.log10(start)) * clamp(value, 0, 1)
  );

  if (target < 18) return interpolateExponent(.001, 1, target / 18) - Math.log10(SECONDS_PER_YEAR);
  if (target < 55) return interpolateExponent(1, 180, (target - 18) / 37) - Math.log10(SECONDS_PER_YEAR);
  if (target < 145) return interpolateExponent(180 / SECONDS_PER_YEAR, recombinationYears, (target - 55) / 90);
  if (target < 245) return interpolateExponent(recombinationYears, firstStarsYears, (target - 145) / 100);
  if (target < 340) return interpolateExponent(firstStarsYears, matureGalaxiesYears, (target - 245) / 95);
  if (target < 470) return interpolateExponent(matureGalaxiesYears, presentAgeYears, (target - 340) / 130);

  const fate = universe?.cosmicFate;
  if (fate && Number.isFinite(fate.outcomeYears)) {
    return interpolateExponent(presentAgeYears, fate.outcomeYears, (target - 470) / 530);
  }
  if (target < 570) return interpolateExponent(presentAgeYears, 1e12, (target - 470) / 100);
  if (target < 650) return 12 + (target - 570) / 80 * 2;
  if (target < 680) return 14 + (target - 650) / 30;
  if (target < 845) return 15 + (target - 680) / 165 * 23;
  const evaporationExponent = universe?.blackHoleEvaporationExponent || 100;
  if (target < ULTRA_FUTURE_START) {
    return 38 + (target - 845) / 105 * (evaporationExponent - 38);
  }
  if (target < ASYMPTOTIC_FUTURE_START) {
    return evaporationExponent
      + (target - ULTRA_FUTURE_START)
        / (ASYMPTOTIC_FUTURE_START - ULTRA_FUTURE_START)
        * (ULTRA_FUTURE_END_EXPONENT - evaporationExponent);
  }
  if (target >= 1000) return Infinity;
  const asymptoticProgress = (target - ASYMPTOTIC_FUTURE_START)
    / (1000 - ASYMPTOTIC_FUTURE_START);
  return ULTRA_FUTURE_END_EXPONENT
    + ASYMPTOTIC_EXPONENT_SPAN * asymptoticProgress / (1 - asymptoticProgress);
}

export function timelinePositionToCosmicYears(position, universe) {
  const exponent = timelinePositionToCosmicLogYears(position, universe);
  if (!Number.isFinite(exponent) || exponent > MAX_NUMERIC_YEAR_EXPONENT) {
    return Number.MAX_VALUE;
  }
  return 10 ** exponent;
}

export function referenceFutureYearsAtTimelinePosition(position, universe) {
  return timelinePositionToCosmicYears(clamp(position, 470, 950), {
    ...universe,
    cosmicFate: null
  });
}

export function createCosmicTimelineState(value, universe, eras) {
  const position = clamp(Number(value), 0, 1000);
  const label = cosmicTimeLabel(position, universe);
  const foundEraIndex = eras.findIndex((era) => position < era.until);
  const eraIndex = foundEraIndex < 0 ? eras.length - 1 : foundEraIndex;
  return {
    position,
    label,
    eraIndex,
    era: eras[eraIndex],
    galaxyIdentityOpacity: smoothstep(position, 245, 325)
      * (1 - smoothstep(position, 820, 900))
  };
}

export function timelineUnitsPerSecond(position) {
  // Keep the whole 1× journey at roughly 35 minutes while deliberately
  // lingering in the hot beginning and the final approach to heat death.
  const weightedUnits = 145 / .42 + (930 - 145) / 1.25 + (1000 - 930) / .42;
  const baseRate = weightedUnits / NORMAL_JOURNEY_SECONDS;
  if (position < 145 || position >= 930) return baseRate * .42;
  return baseRate * 1.25;
}

export function selectTimelineNarrative({
  position,
  label,
  universe,
  activeEvent,
  activeRelationship,
  ascendedSpecies,
  activeSpecies,
  civilizationData
}) {
  const fate = universe?.cosmicFate;
  if (fate && fate.type !== 'heat-death' && position >= fate.onsetAt) {
    if (fate.type === 'vacuum-decay') {
      const terminal = position >= 995;
      return {
        key: `fate-vacuum-${terminal ? 'terminal' : 'bubble'}`,
        time: label,
        text: terminal
          ? '低能真空泡已经穿过可观测区域，原有粒子与相互作用不再适用'
          : '量子隧穿产生了低能真空泡，泡壁以接近光速向外扩张'
      };
    }
    if (fate.type === 'big-rip') {
      const terminal = position >= 995;
      return {
        key: `fate-rip-${terminal ? 'terminal' : 'unbinding'}`,
        time: label,
        text: terminal
          ? '膨胀率在有限时间内发散，局部束缚结构相继失效'
          : '幽灵暗能量密度持续上升，星系团与星系开始逐层解束缚'
      };
    }
    const terminal = position >= 995;
    return {
      key: `fate-crunch-${terminal ? 'terminal' : 'turnaround'}`,
      time: label,
      text: terminal
        ? '坍缩使物质与辐射密度急剧升高，经典演化在高曲率阶段失效'
        : '宇宙膨胀已经停止，大尺度距离开始反向缩小'
    };
  }
  if (activeEvent) {
    const impacted = position >= activeEvent.impactAt;
    const aftermath = impacted ? `；${activeEvent.outcome}` : '';
    const confidence = activeEvent.confidence === 'science-fiction'
      ? '科幻假设 · '
      : activeEvent.confidence === 'astrophysical-model'
        ? '天体演化模型 · '
        : activeEvent.confidence === 'astrobiology-model' ? '天体生物学模型 · ' : '';
    return {
      key: `${activeEvent.id}-${impacted ? 'aftermath' : 'forming'}`,
      time: label,
      text: `${confidence}${activeEvent.label}：${activeEvent.message}${aftermath}`
    };
  }
  if (activeRelationship) {
    const a = civilizationData[activeRelationship.speciesA];
    const b = civilizationData[activeRelationship.speciesB];
    const text = activeRelationship.relationship === 'conflict'
      ? `${a.name} 与 ${b.name} 的边界冲突正在削减双方疆域`
      : `${a.name} 与 ${b.name} 建立友好共存区，共享资源与航路`;
    return {
      key: `relation-${activeRelationship.relationship}-${activeRelationship.speciesA}-${activeRelationship.speciesB}`,
      time: label,
      text
    };
  }
  if (ascendedSpecies > 0) return { key: `ascended-${ascendedSpecies}`, time: label, text: `${ascendedSpecies} 个种群已转化为高维生命，脱离恒星与黑洞的普通物质演化` };
  if (position < 55) return { key: 'bang', time: 'T+0', text: '整个可观测区域处于超高温、高密度状态，空间本身在膨胀' };
  if (position < 145) return { key: 'plasma', time: label, text: '光子在等离子体中不断散射，宇宙随膨胀持续冷却' };
  if (position < 245) return { key: 'dark', time: label, text: '复合后宇宙变得透明；微弱云团表示中性气体密度，此时尚没有恒星光' };
  if (position < 270) return { key: 'stars-first-light', time: label, text: '最早的高密度气体云发生坍缩，第一代大质量恒星在少数区域点燃' };
  if (position < 312) return { key: 'stars-ionization', time: label, text: '年轻恒星的紫外辐射正在吹出电离泡，原星系仍处于成团与坍缩中' };
  if (position < 340) return { key: 'stars-overlap', time: label, text: '不断扩张的电离区开始交叠，星系结构逐渐稳定，星系际中性氢比例快速下降' };
  if (activeSpecies > 0) return { key: `life-${activeSpecies}`, time: label, text: `${activeSpecies} 个主要文明种群正在跨越恒星系扩张` };
  if (position < 430) return { key: 'chemistry', time: label, text: '重元素丰度上升，宜居行星开始形成' };
  if (position < Math.min(...civilizationData.map((species) => species.birth), 620)) return { key: 'waiting-life', time: label, text: '宜居世界正在积累复杂化学反应，智慧生命尚未出现' };
  const stellarFormationEnd = cosmicYearsToTimelinePosition(10 ** universe.stellarFormationEndExponent, universe);
  const stellarEnd = cosmicYearsToTimelinePosition(10 ** universe.lastStarDeathExponent, universe);
  if (position < stellarFormationEnd) return { key: 'silence', time: label, text: '文明信号已经沉寂，恒星形成率仍在持续下降' };
  if (position < stellarEnd) return { key: 'last-stars', time: label, text: '恒星形成已经停止，最后的低质量红矮星仍在极缓慢地消耗燃料' };
  if (position < 845) return { key: 'evaporation', time: label, text: '长期引力近遇持续重分配能量，少数残骸逐个逃离，极少数落向星系中心' };
  if (position < 950) return { key: 'holes', time: label, text: '黑洞通过霍金辐射缓慢蒸发' };
  if (position < 995) return { key: 'ultra-future', time: label, text: '黑洞时代已经结束；极少数简并残骸仍可能经历高度推测的量子与引力事件' };
  return { key: 'heatdeath', time: label, text: '最后的黑洞已经蒸发，残余光子持续红移并稀释，可用能量梯度趋近于零' };
}

export function cosmicTimeLabel(position, universe) {
  const logLerp = (start, end, value) => 10 ** (Math.log10(start) + (Math.log10(end) - Math.log10(start)) * value);
  const formatYears = (years) => {
    if (years < 1) {
      const seconds = years * 31557600;
      if (seconds < 3600) return `${Math.round(seconds / 60)} min`;
      if (seconds < 86400) return `${(seconds / 3600).toFixed(1)} h`;
      return `${(seconds / 86400).toFixed(1)} d`;
    }
    if (years < 1e3) return `${Math.max(1, Math.round(years))} yr`;
    if (years < 1e6) return `${(years / 1e3).toFixed(years < 1e5 ? 1 : 0)} kyr`;
    if (years < 1e9) return `${(years / 1e6).toFixed(years < 1e8 ? 1 : 0)} Myr`;
    if (years < 1e12) return `${(years / 1e9).toFixed(1)} Gyr`;
    return `10^${Math.log10(years).toFixed(1)} yr`;
  };
  if (position < 18) return `T+${Math.max(.001, logLerp(.001, 1, position / 18)).toFixed(3)} s`;
  if (position < 55) return `T+${Math.max(1, Math.round(logLerp(1, 180, (position - 18) / 37)))} s`;
  const milestones = universe?.cosmicMilestones || {};
  const recombinationYears = milestones.recombinationYears || 380000;
  const firstStarsYears = Math.max(recombinationYears * 1.1, milestones.firstStarsYears || 1.8e8);
  const matureGalaxiesYears = Math.max(firstStarsYears * 1.1, milestones.matureGalaxiesYears || 1e9);
  const presentAgeYears = Math.max(matureGalaxiesYears * 1.1, universe?.presentAgeYears || 1.38e10);
  if (position < 145) return `T+${formatYears(logLerp(180 / 31557600, recombinationYears, (position - 55) / 90))}`;
  if (position < 245) return `T+${formatYears(logLerp(recombinationYears, firstStarsYears, (position - 145) / 100))}`;
  if (position < 340) return `T+${formatYears(logLerp(firstStarsYears, matureGalaxiesYears, (position - 245) / 95))}`;
  if (position < 470) return `T+${formatYears(logLerp(matureGalaxiesYears, presentAgeYears, (position - 340) / 130))}`;
  const fate = universe?.cosmicFate;
  if (fate && Number.isFinite(fate.outcomeYears)) {
    if (position >= 1000) return fate.label;
    const progress = clamp((position - 470) / 530, 0, 1);
    const years = logLerp(presentAgeYears, fate.outcomeYears, progress);
    return `T+${formatYears(years)}`;
  }
  if (position < 570) return `T+${formatYears(logLerp(presentAgeYears, 1e12, (position - 470) / 100))}`;
  if (position < 650) return `T+10^${(12 + (position - 570) / 80 * 2).toFixed(1)} yr`;
  if (position < 680) return `T+10^${(14 + (position - 650) / 30).toFixed(1)} yr`;
  if (position < 845) return `T+10^${Math.round(15 + (position - 680) / 165 * 23)} yr`;
  if (position < 950) return `T+10^${Math.round(38 + (position - 845) / 105 * (universe.blackHoleEvaporationExponent - 38))} yr`;
  if (position >= 1000) return 'T→∞ · 渐近热寂';
  const exponent = timelinePositionToCosmicLogYears(position, universe);
  const exponentLabel = exponent < 1000 ? exponent.toFixed(0) : String(Math.round(exponent));
  return position < 995
    ? `T+10^${exponentLabel} yr`
    : `T+10^${exponentLabel} yr · 渐近`;
}
