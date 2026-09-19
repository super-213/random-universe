const NORMAL_JOURNEY_SECONDS = 35 * 60;

const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
const smoothstep = (value, min, max) => {
  const progress = clamp((value - min) / (max - min), 0, 1);
  return progress * progress * (3 - 2 * progress);
};

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
  activeEvent,
  activeRelationship,
  ascendedSpecies,
  activeSpecies,
  civilizationData
}) {
  if (activeEvent) {
    const impacted = position >= activeEvent.impactAt;
    const aftermath = impacted ? `；${activeEvent.outcome}` : '';
    return {
      key: `${activeEvent.id}-${impacted ? 'aftermath' : 'forming'}`,
      time: label,
      text: `${activeEvent.label}：${activeEvent.message}${aftermath}`
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
  if (position < 245) return { key: 'dark', time: label, text: '复合后宇宙变得透明，但尚没有恒星光' };
  if (position < 340) return { key: 'stars', time: label, text: '第一代恒星与星系点亮，再电离逐渐开始' };
  if (activeSpecies > 0) return { key: `life-${activeSpecies}`, time: label, text: `${activeSpecies} 个主要文明种群正在跨越恒星系扩张` };
  if (position < 430) return { key: 'chemistry', time: label, text: '重元素丰度上升，宜居行星开始形成' };
  if (position < Math.min(...civilizationData.map((species) => species.birth), 620)) return { key: 'waiting-life', time: label, text: '宜居世界正在积累复杂化学反应，智慧生命尚未出现' };
  if (position < 620) return { key: 'silence', time: label, text: '文明信号已经沉寂，只剩无人维护的轨道遗迹' };
  if (position < 650) return { key: 'last-stars', time: label, text: '恒星形成早已停止，最后的低质量红矮星仍在极缓慢地消耗燃料' };
  if (position < 710) return { key: 'degenerate', time: label, text: '最后一批红矮星熄灭，恒星残骸仍被星系引力束缚并长期绕核运行' };
  if (position < 845) return { key: 'evaporation', time: label, text: '长期引力近遇持续重分配能量，少数残骸逐个逃离，极少数落向星系中心' };
  if (position < 950) return { key: 'holes', time: label, text: '黑洞通过霍金辐射缓慢蒸发' };
  return { key: 'heatdeath', time: label, text: '最后的黑洞已经蒸发，残余光子持续红移并稀释，可用能量梯度趋近于零' };
}

export function cosmicTimeLabel(position, universe) {
  const logLerp = (start, end, value) => 10 ** (Math.log10(start) + (Math.log10(end) - Math.log10(start)) * value);
  const formatYears = (years) => {
    if (years < 1) {
      const seconds = years * 31557600;
      if (seconds < 3600) return `${Math.round(seconds / 60)} 分钟`;
      if (seconds < 86400) return `${(seconds / 3600).toFixed(1)} 小时`;
      return `${(seconds / 86400).toFixed(1)} 天`;
    }
    if (years < 1e4) return `${Math.max(1, Math.round(years))} 年`;
    if (years < 1e8) return `${(years / 1e4).toFixed(years < 1e6 ? 1 : 0)} 万年`;
    if (years < 1e12) return `${(years / 1e8).toFixed(years < 1e9 ? 2 : 1)} 亿年`;
    return `10^${Math.log10(years).toFixed(1)} 年`;
  };
  if (position < 18) return `T+${Math.max(.001, logLerp(.001, 1, position / 18)).toFixed(3)} 秒`;
  if (position < 55) return `T+${Math.max(1, Math.round(logLerp(1, 180, (position - 18) / 37)))} 秒`;
  if (position < 145) return `T+${formatYears(logLerp(180 / 31557600, 380000, (position - 55) / 90))}`;
  if (position < 245) return `T+${formatYears(logLerp(380000, 1.8e8, (position - 145) / 100))}`;
  if (position < 340) return `T+${formatYears(logLerp(1.8e8, 1e9, (position - 245) / 95))}`;
  if (position < 470) return `T+${formatYears(logLerp(1e9, 1.38e10, (position - 340) / 130))}`;
  if (position < 570) return `T+${formatYears(logLerp(1.38e10, 1e12, (position - 470) / 100))}`;
  if (position < 650) return `T+10^${(12 + (position - 570) / 80 * 2).toFixed(1)} 年`;
  if (position < 680) return `T+10^${(14 + (position - 650) / 30).toFixed(1)} 年`;
  if (position < 845) return `T+10^${Math.round(15 + (position - 680) / 165 * 23)} 年`;
  if (position < 950) return `T+10^${Math.round(38 + (position - 845) / 105 * (universe.blackHoleEvaporationExponent - 38))} 年`;
  return position < 999 ? `T+10^${universe.blackHoleEvaporationExponent} 年以后` : '趋近热寂';
}
