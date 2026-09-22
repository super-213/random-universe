import {
  cosmicYearsToTimelinePosition,
  referenceFutureYearsAtTimelinePosition,
  timelinePositionToCosmicYears
} from '../domain/cosmic-time.js';
import { createSeededRandom, randomBetween } from '../domain/random.js';
import { stellarEndTimelinePosition } from '../domain/universe.js';

const clamp = (value, minimum, maximum) => Math.min(maximum, Math.max(minimum, value));

const futurePosition = (referencePosition, universe) => (
  cosmicYearsToTimelinePosition(
    referenceFutureYearsAtTimelinePosition(referencePosition, universe),
    universe
  )
);

function eventTiming(start, duration, physicalDurationYears, universe) {
  const physicalStartYears = timelinePositionToCosmicYears(start, universe);
  return {
    physicalStartYears,
    physicalDurationYears,
    impactAt: cosmicYearsToTimelinePosition(physicalStartYears + physicalDurationYears, universe),
    visualImpactAt: start + duration * .56
  };
}

function choose(random, candidates) {
  if (!candidates.length) return null;
  return candidates[Math.floor(random() * candidates.length)];
}

function stellarCandidates(stellarPopulation, predicate) {
  const candidates = [];
  for (let index = 0; index < stellarPopulation.massSolar.length; index++) {
    if (predicate(index)) candidates.push(index);
  }
  return candidates;
}

function createMarker({
  universe,
  type,
  label,
  visual,
  color,
  start,
  duration,
  physicalDurationYears,
  category = 'observation',
  confidence = 'astrophysical-model',
  ...details
}) {
  return {
    id: `rare-${type}-${universe.seed}`,
    type,
    label,
    visual,
    color,
    start,
    duration,
    category,
    confidence,
    markerVisual: true,
    civilizationImpacts: [],
    ...eventTiming(start, duration, physicalDurationYears, universe),
    ...details
  };
}

function findMicrolensAlignment(random, stellarPopulation, positions, start) {
  const lenses = stellarCandidates(stellarPopulation, (index) => (
    stellarPopulation.deathAt[index] <= start
      && stellarPopulation.remnantTypes[index] > 0
      && Math.hypot(
        positions[index * 3],
        positions[index * 3 + 1],
        positions[index * 3 + 2]
      ) < 4.2
  ));
  if (!lenses.length) return null;

  const attempts = Math.min(72, lenses.length);
  for (let attempt = 0; attempt < attempts; attempt++) {
    const lensIndex = lenses[Math.floor(random() * lenses.length)];
    const lensOffset = lensIndex * 3;
    const lensX = positions[lensOffset];
    const lensY = positions[lensOffset + 1];
    const lensZ = positions[lensOffset + 2];
    let bestSourceIndex = -1;
    let bestProjectedSeparation = Infinity;
    for (let sourceIndex = 0; sourceIndex < stellarPopulation.massSolar.length; sourceIndex++) {
      if (sourceIndex === lensIndex
        || stellarPopulation.birthAt[sourceIndex] > start
        || stellarPopulation.deathAt[sourceIndex] <= start) continue;
      const sourceOffset = sourceIndex * 3;
      if (positions[sourceOffset + 2] <= lensZ + .35) continue;
      const projectedSeparation = Math.hypot(
        positions[sourceOffset] - lensX,
        positions[sourceOffset + 1] - lensY
      );
      if (projectedSeparation < bestProjectedSeparation) {
        bestProjectedSeparation = projectedSeparation;
        bestSourceIndex = sourceIndex;
      }
    }
    if (bestSourceIndex >= 0 && bestProjectedSeparation < .055) {
      return { lensIndex, sourceIndex: bestSourceIndex, projectedSeparation: bestProjectedSeparation };
    }
  }
  return null;
}

export function createRareEventPlan({
  universe,
  localGroup,
  stellarPopulation,
  starPositions,
  civilizationData,
  civilizationEvents
}) {
  const random = createSeededRandom(universe.seed, 19183);
  const events = [];
  const fateBoundary = universe.cosmicFate.type === 'heat-death'
    ? 1000
    : universe.cosmicFate.onsetAt;
  const stellarEnd = stellarEndTimelinePosition(universe);
  const withinBoundary = (event) => event
    && event.start + event.duration < fateBoundary
    && event.start < 998;
  const add = (event) => {
    if (withinBoundary(event)) events.push(event);
  };

  const encounter = localGroup?.companions
    ?.filter((companion) => companion.encounter?.bound
      && companion.encounter.pericenter < 5
      && companion.encounter.tidalStrength > .02)
    .sort((left, right) => left.encounter.encounterYears - right.encounter.encounterYears)[0];
  if (encounter) {
    const encounterStart = cosmicYearsToTimelinePosition(
      universe.presentAgeYears + encounter.encounter.encounterYears,
      universe
    );
    const directCollision = encounter.encounter.pericenter < 3.8;
    add(createMarker({
      universe,
      type: 'galaxy-collision',
      label: directCollision ? '星系盘碰撞' : '伴星系潮汐瓦解',
      visual: 'galactic-encounter',
      color: '#f4c879',
      start: encounterStart,
      duration: 48,
      physicalDurationYears: 4e8,
      sourceIndex: null,
      companionIndex: encounter.index,
      pericenter: encounter.encounter.pericenter,
      massRatio: encounter.encounter.massRatio,
      tidalStrength: encounter.encounter.tidalStrength,
      message: directCollision
        ? `${encounter.name} 的轨道穿过主星系盘面，恒星本身很少相撞，但气体与恒星轨道被整体重排`
        : `${encounter.name} 在近心点被主星系潮汐场剥离，形成恒星流与弥散潮汐尾`,
      outcome: directCollision
        ? `质量比约 1:${Math.round(1 / encounter.encounter.massRatio)}，近心距 ${encounter.encounter.pericenter.toFixed(1)} 个星系尺度单位；结果是形态重塑而非整座星系瞬时爆炸`
        : `约 ${(clamp(encounter.encounter.tidalStrength * 8, .08, .86) * 100).toFixed(0)}% 的伴星系外层物质进入潮汐尾，致密核心可能继续存留`
    }));
  }

  const frbStart = futurePosition(492 + random() * 86, universe);
  const neutronStars = stellarCandidates(stellarPopulation, (index) => (
    stellarPopulation.remnantTypes[index] === 2
      && stellarPopulation.deathAt[index] <= frbStart
      && frbStart < stellarEnd
  ));
  const frbChance = clamp(.1 + universe.structureEfficiency * .1 + universe.gravity * .06, .12, .42);
  const frbSource = random() < frbChance ? choose(random, neutronStars) : null;
  if (frbSource !== null) {
    const energyErg = 10 ** randomBetween(random, 38.2, 41.6);
    const durationMs = 10 ** randomBetween(random, -.35, 1.05);
    const repeater = random() < .34;
    const pulseCount = repeater ? 2 + Math.floor(random() * 5) : 1;
    add(createMarker({
      universe,
      type: 'fast-radio-burst',
      label: repeater ? '重复快速射电暴' : '快速射电暴',
      visual: 'signal-wave',
      color: '#72d9ff',
      start: frbStart,
      duration: 22,
      physicalDurationYears: durationMs / 1000 / 31557600,
      sourceIndex: frbSource,
      energyErg,
      durationMs,
      dispersionMeasure: randomBetween(random, 90, 1800),
      pulseCount,
      message: `一颗已形成的中子星释放 ${pulseCount} 个毫秒级相干射电脉冲；传播色散符合穿过星系际等离子体的路径`,
      outcome: `各向同性等效能量约 10^${Math.log10(energyErg).toFixed(1)} erg，持续 ${durationMs.toFixed(2)} ms；该事件只记录被观测波束扫中的爆发，不对整个星系施加破坏`
    }));
  }

  const lensStart = futurePosition(510 + random() * 82, universe);
  const opticalDepth = clamp(universe.stars * universe.structureEfficiency / 22, .015, .34);
  const alignment = random() < opticalDepth
    ? findMicrolensAlignment(random, stellarPopulation, starPositions, lensStart)
    : null;
  if (alignment) {
    const lensMass = stellarPopulation.remnantTypes[alignment.lensIndex] === 3
      ? randomBetween(random, 4.5, 18)
      : stellarPopulation.remnantTypes[alignment.lensIndex] === 2
        ? randomBetween(random, 1.15, 2.2)
        : randomBetween(random, .45, 1.25);
    const impactParameter = randomBetween(random, .08, .88);
    const peakMagnification = (impactParameter ** 2 + 2)
      / (impactParameter * Math.sqrt(impactParameter ** 2 + 4));
    add(createMarker({
      universe,
      type: 'gravitational-microlensing',
      label: '引力微透镜增亮',
      visual: 'microlensing',
      color: '#d8e8ff',
      start: lensStart,
      duration: 28,
      physicalDurationYears: randomBetween(random, 12, 240) / 365.25,
      sourceIndex: alignment.lensIndex,
      backgroundSourceIndex: alignment.sourceIndex,
      projectedSeparation: alignment.projectedSeparation,
      lensMass,
      impactParameter,
      peakMagnification,
      message: '一颗致密残骸恰好掠过背景恒星视线，背景光度呈对称、无色的短暂增亮',
      outcome: `${lensMass.toFixed(2)} M☉ 透镜的峰值放大约 ${peakMagnification.toFixed(2)}×；事件来自真实前后景对齐，不改变两颗天体本身`
    }));
  }

  const transitStart = futurePosition(486 + random() * 96, universe);
  const observer = civilizationData
    .map((species, index) => ({ species, index }))
    .filter(({ species }) => species.technology >= .25 && species.birth <= transitStart)
    .sort((left, right) => right.species.technology - left.species.technology)[0];
  const transitCandidates = observer
    ? stellarCandidates(stellarPopulation, (index) => (
        stellarPopulation.planetCounts[index] >= 3
          && stellarPopulation.birthAt[index] <= transitStart
          && stellarPopulation.deathAt[index] > transitStart
      ))
    : [];
  const transitSource = random() < clamp(.08 + universe.chemistryStability * .2, .08, .28)
    ? choose(random, transitCandidates)
    : null;
  if (transitSource !== null) {
    const depth = randomBetween(random, .006, .19);
    const asymmetry = randomBetween(random, .18, .82);
    add(createMarker({
      universe,
      type: 'anomalous-transit',
      label: '异常凌日曲线',
      visual: 'transit-curve',
      color: '#f0e7bd',
      start: transitStart,
      duration: 30,
      physicalDurationYears: randomBetween(random, .02, 1.8),
      sourceIndex: transitSource,
      targetSpeciesIndex: observer?.index ?? null,
      transitDepth: depth,
      asymmetry,
      message: `${observer.species.name} 记录到不对称且周期不稳定的凌日遮光，常规单行星模型无法完全拟合`,
      outcome: `最大遮光深度 ${(depth * 100).toFixed(1)}%，曲线不对称度 ${(asymmetry * 100).toFixed(0)}%；彗星群、尘埃结构和人造遮光体仍是并列解释`
    }));
  }

  const engineeringEvent = civilizationEvents
    .filter((event) => (
      (event.type === 'stellar-megastructure' && !event.unstable)
        || (event.type === 'stellar-engineering' && event.engineeringStable)
    ))
    .sort((left, right) => left.impactAt - right.impactAt)[0];
  if (engineeringEvent && random() < .58) {
    const target = civilizationData[engineeringEvent.targetSpeciesIndex];
    const wasteHeatStartYears = timelinePositionToCosmicYears(engineeringEvent.impactAt, universe)
      + randomBetween(random, 2e7, 3e8);
    const wasteHeatStart = cosmicYearsToTimelinePosition(wasteHeatStartYears, universe);
    const wasteHeatKelvin = randomBetween(random, 120, 480);
    const luminosityFraction = randomBetween(random, .08, .72) * target.technology;
    add(createMarker({
      universe,
      type: 'infrared-waste-heat',
      label: '红外废热过量',
      visual: 'waste-heat',
      color: '#ff9d68',
      start: wasteHeatStart,
      duration: 34,
      physicalDurationYears: 5e5,
      category: 'civilization',
      confidence: 'astrobiology-model',
      sourceIndex: null,
      targetNodeIndex: target.homeNodeIndex,
      targetSpeciesIndex: engineeringEvent.targetSpeciesIndex,
      sourceEventId: engineeringEvent.id,
      causalRootId: engineeringEvent.id,
      wasteHeatKelvin,
      luminosityFraction,
      message: `${target.name} 的恒星工程之后，系统出现无法由天然尘埃完全解释的中红外连续谱`,
      outcome: `约 ${(luminosityFraction * 100).toFixed(0)}% 恒星光度在 ${Math.round(wasteHeatKelvin)} K 附近重新辐射；这是条件满足后的技术迹象候选，而非确定的外星巨构判决`
    }));
  }

  const signalEvent = civilizationEvents.find((event) => event.type === 'first-signal');
  if (signalEvent) {
    const transmitter = civilizationData[signalEvent.targetSpeciesIndex];
    const silenceChance = clamp(
      .12 + (1 - transmitter.visibility) * .24 + (transmitter.fermiScenario === '短暂技术窗口' ? .24 : 0),
      .12,
      .52
    );
    if (random() < silenceChance) {
      const silenceStartYears = timelinePositionToCosmicYears(signalEvent.impactAt, universe)
        + randomBetween(random, 2e5, 8e7);
      const silenceStart = cosmicYearsToTimelinePosition(silenceStartYears, universe);
      add(createMarker({
        universe,
        type: 'civilization-signal-silence',
        label: '文明信号静默',
        visual: 'signal-silence',
        color: '#7892a8',
        start: silenceStart,
        duration: 32,
        physicalDurationYears: randomBetween(random, 20, 2e4),
        category: 'civilization',
        confidence: 'astrobiology-model',
        sourceIndex: null,
        targetNodeIndex: transmitter.homeNodeIndex,
        targetSpeciesIndex: signalEvent.targetSpeciesIndex,
        sourceEventId: signalEvent.id,
        causalRootId: signalEvent.id,
        message: `${transmitter.name} 的已知窄带信号降到探测阈值以下，重复巡天未再确认载波`,
        outcome: '静默只表示可探测发射终止；主动隐匿、通信技术迁移、衰退或灭绝都仍与观测相容'
      }));
    }
  }

  const lastStarIndex = stellarPopulation.deathYears.reduce((selected, deathYears, index) => (
    deathYears > stellarPopulation.deathYears[selected] ? index : selected
  ), 0);
  const lastStarYears = 10 ** universe.lastStarDeathExponent;
  const fateAllowsLastStar = universe.cosmicFate.type === 'heat-death'
    || lastStarYears < universe.cosmicFate.onsetYears;
  if (fateAllowsLastStar) {
    const lastStarStart = stellarEndTimelinePosition(universe);
    add(createMarker({
      universe,
      type: 'last-star-extinction',
      label: '最后一颗恒星熄灭',
      visual: 'last-star',
      color: '#aab9cf',
      start: lastStarStart - 18,
      duration: 17,
      physicalDurationYears: 1e7,
      physicalStartYears: lastStarYears,
      impactAt: lastStarStart,
      visualImpactAt: lastStarStart - 8,
      sourceIndex: lastStarIndex,
      message: '恒星形成早已停止，寿命最长的低质量恒星终于耗尽可持续聚变的燃料',
      outcome: `约 10^${universe.lastStarDeathExponent.toFixed(2)} 年后恒星时代结束；此后模型只保留白矮星、中子星、黑洞与缓慢的引力演化`
    }));
  }

  return events.sort((left, right) => left.start - right.start);
}

export const rareEventTypes = [
  'galaxy-collision',
  'fast-radio-burst',
  'gravitational-microlensing',
  'failed-supernova',
  'anomalous-transit',
  'infrared-waste-heat',
  'civilization-signal-silence',
  'last-star-extinction'
];
