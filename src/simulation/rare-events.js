import {
  cosmicLogYearsToTimelinePosition,
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

function nearestGalacticCenterIndex(positions) {
  let selected = 0;
  let nearestDistance = Infinity;
  for (let index = 0; index < positions.length / 3; index++) {
    const offset = index * 3;
    const distance = positions[offset] ** 2
      + positions[offset + 1] ** 2
      + positions[offset + 2] ** 2;
    if (distance < nearestDistance) {
      selected = index;
      nearestDistance = distance;
    }
  }
  return selected;
}

function firstCompatibleSource(stellarPopulation, random, start, remnantTypes) {
  return choose(random, stellarCandidates(stellarPopulation, (index) => (
    remnantTypes.includes(stellarPopulation.remnantTypes[index])
      && stellarPopulation.deathAt[index] <= start
  )));
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
  const galacticCenterIndex = nearestGalacticCenterIndex(starPositions);

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
    const collision = createMarker({
      universe,
      type: 'galaxy-collision',
      label: directCollision ? '星系盘碰撞' : '伴星系潮汐瓦解',
      visual: 'galactic-encounter',
      color: '#f4c879',
      start: encounterStart,
      duration: 48,
      physicalDurationYears: 4e8,
      sourceIndex: galacticCenterIndex,
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
    });
    add(collision);

    const starburstStart = collision.impactAt + 3;
    const starFormationBoost = clamp(
      1.5 + encounter.encounter.tidalStrength * 18 + encounter.encounter.massRatio * 2.5,
      1.8,
      8.5
    );
    add(createMarker({
      universe,
      type: 'galaxy-starburst',
      label: '星系星暴期',
      visual: 'galactic-encounter',
      color: '#ffb76f',
      start: starburstStart,
      duration: 34,
      physicalDurationYears: randomBetween(random, 3e7, 2.2e8),
      category: 'civilization',
      sourceIndex: galacticCenterIndex,
      sourceEventId: collision.id,
      causalRootId: collision.id,
      starFormationBoost,
      message: '近掠压缩分子气体，紫外与红外亮度同步升高，新生大质量恒星迅速增加',
      outcome: `恒星形成率短暂升至静息期的 ${starFormationBoost.toFixed(1)} 倍；随后超新星反馈会加热并吹散部分冷气体`
    }));
  }

  if (universe.hasCentralBlackHole) {
    const jetStart = futurePosition(500 + random() * 54, universe);
    const jetTurnDeg = randomBetween(random, 12, 78);
    const beamedTowardObserver = random() < .14;
    const jetEvent = createMarker({
      universe,
      type: 'agn-jet-reorientation',
      label: beamedTowardObserver ? '活动星系核喷流指向观测者' : '活动星系核喷流转向',
      visual: 'signal-wave',
      color: '#78cfff',
      start: jetStart,
      duration: 28,
      physicalDurationYears: randomBetween(random, 4e4, 2e6),
      sourceIndex: galacticCenterIndex,
      jetTurnDeg,
      beamedTowardObserver,
      message: `中心吸积流角动量改变，双极喷流轴偏转约 ${jetTurnDeg.toFixed(0)}°`,
      outcome: beamedTowardObserver
        ? '喷流短暂进入视线方向，观测亮度因相对论束射显著增强，但星系核的本征功率并未同比上升'
        : '喷流扫过新的核外气体区，形成弯折射电叶与不同年龄的冲击结'
    });
    add(jetEvent);

    const windVelocityKms = randomBetween(random, 450, 2600);
    add(createMarker({
      universe,
      type: 'galactic-wind-outflow',
      label: '星系风爆发',
      visual: 'galactic-encounter',
      color: '#8bded7',
      start: jetEvent.impactAt + randomBetween(random, 4, 14),
      duration: 36,
      physicalDurationYears: randomBetween(random, 8e6, 9e7),
      category: 'civilization',
      sourceIndex: galacticCenterIndex,
      sourceEventId: jetEvent.id,
      causalRootId: jetEvent.id,
      windVelocityKms,
      message: '活动星系核反馈将核区气体沿双极方向吹出，形成跨越星系晕的高温气泡',
      outcome: `外流速度约 ${Math.round(windVelocityKms)} km/s；气体外排会抑制后续恒星形成，也可能压缩远端云团`
    }));
  }

  const ramPressureChance = clamp(.1 + universe.structureEfficiency * .12, .1, .42);
  if (random() < ramPressureChance) {
    const strippingStart = futurePosition(525 + random() * 54, universe);
    const gasLossFraction = randomBetween(random, .18, .72);
    add(createMarker({
      universe,
      type: 'ram-pressure-stripping',
      label: '星系团冲压剥离',
      visual: 'galactic-encounter',
      color: '#8ccfe0',
      start: strippingStart,
      duration: 42,
      physicalDurationYears: randomBetween(random, 1.5e8, 9e8),
      category: 'civilization',
      sourceIndex: galacticCenterIndex,
      gasLossFraction,
      message: '主星系穿过高温稀薄介质，迎风侧冷气体被剥离并拖出单侧电离尾迹',
      outcome: `约 ${(gasLossFraction * 100).toFixed(0)}% 的可形成恒星气体离开盘面，外盘恒星形成逐步停止`
    }));
  }

  const protostarStart = 270 + random() * 42;
  const protostarSource = choose(random, stellarCandidates(stellarPopulation, (index) => (
    stellarPopulation.birthAt[index] <= protostarStart
      && protostarStart < stellarPopulation.birthAt[index] + 12
      && stellarPopulation.deathAt[index] > protostarStart
  )));
  if (protostarSource !== null) {
    const jetVelocityKms = randomBetween(random, 80, 420);
    add(createMarker({
      universe,
      type: 'protostar-jet',
      label: '恒星诞生与原恒星喷流',
      visual: 'signal-wave',
      color: '#8bd6ff',
      start: protostarStart,
      duration: 24,
      physicalDurationYears: randomBetween(random, 8e4, 6e5),
      sourceIndex: protostarSource,
      jetVelocityKms,
      message: '分子云核心坍缩形成原恒星，磁化吸积盘沿自转轴发射双极喷流',
      outcome: `喷流速度约 ${Math.round(jetVelocityKms)} km/s，逐步清理包层并暴露新生恒星；其余气体可能继续形成行星盘`
    }));
  }

  const commonEnvelopeStart = futurePosition(478 + random() * 42, universe);
  const commonEnvelopeSource = choose(random, stellarCandidates(stellarPopulation, (index) => (
    stellarPopulation.massSolar[index] > 1.1
      && stellarPopulation.massSolar[index] < 12
      && stellarPopulation.birthAt[index] < commonEnvelopeStart
      && stellarPopulation.deathAt[index] > commonEnvelopeStart + 20
  )));
  if (commonEnvelopeSource !== null) {
    const inspiralFraction = randomBetween(random, .52, .94);
    const merges = random() < .38;
    const commonEnvelope = createMarker({
      universe,
      type: 'common-envelope-event',
      label: '公共包层事件',
      visual: 'orbital-debris',
      color: '#ffb984',
      start: commonEnvelopeStart,
      duration: 27,
      physicalDurationYears: randomBetween(random, .2, 18),
      sourceIndex: commonEnvelopeSource,
      inspiralFraction,
      merges,
      message: '膨胀恒星吞没伴星，两颗核心在共享包层中因阻力快速损失轨道能量',
      outcome: merges
        ? `轨道收缩约 ${(inspiralFraction * 100).toFixed(0)}% 后两颗核心合并，包层被部分抛出`
        : `轨道收缩约 ${(inspiralFraction * 100).toFixed(0)}%，包层成功抛离并留下紧密双星`
    });
    add(commonEnvelope);
    if (merges) {
      add(createMarker({
        universe,
        type: 'luminous-red-nova',
        label: '亮红新星',
        visual: 'orbital-debris',
        color: '#ff936b',
        start: commonEnvelope.impactAt + 2,
        duration: 24,
        physicalDurationYears: randomBetween(random, .15, 2.2),
        sourceIndex: commonEnvelopeSource,
        sourceEventId: commonEnvelope.id,
        causalRootId: commonEnvelope.id,
        message: '普通恒星合并释放介于新星和超新星之间的红色瞬变，冷却抛射物迅速形成尘埃',
        outcome: '合并体膨胀后逐渐冷却，红外余辉比光学峰值持续更久，并留下富尘外流'
      }));
    }
  }

  const heliumCandidates = stellarCandidates(stellarPopulation, (index) => (
    stellarPopulation.massSolar[index] >= .8
      && stellarPopulation.massSolar[index] <= 2.1
      && stellarPopulation.deathAt[index] > 520
      && stellarPopulation.deathAt[index] < stellarEnd
  ));
  const heliumFlashSource = choose(random, heliumCandidates);
  if (heliumFlashSource !== null) {
    const heliumFlashStart = Math.max(
      stellarPopulation.birthAt[heliumFlashSource] + 18,
      stellarPopulation.deathAt[heliumFlashSource] - 22
    );
    add(createMarker({
      universe,
      type: 'red-giant-helium-flash',
      label: '红巨星氦闪',
      visual: 'last-star',
      color: '#ffc895',
      start: heliumFlashStart,
      duration: 18,
      physicalDurationYears: randomBetween(random, 2e3, 2e5),
      sourceIndex: heliumFlashSource,
      message: '简并氦核内部突然点火并解除简并，但释放能量主要用于膨胀和重排恒星内部',
      outcome: '核心状态发生剧烈变化，表面光度却只缓慢调整；该事件明确区分模拟真值与可观测信号'
    }));
  }

  const planetaryNebulaSource = choose(random, stellarCandidates(stellarPopulation, (index) => (
    stellarPopulation.remnantTypes[index] === 1
      && stellarPopulation.deathAt[index] > 500
      && stellarPopulation.deathAt[index] < stellarEnd - 18
  )));
  if (planetaryNebulaSource !== null) {
    const nebulaStart = stellarPopulation.deathAt[planetaryNebulaSource] - 7;
    add(createMarker({
      universe,
      type: 'planetary-nebula-formation',
      label: '行星状星云形成',
      visual: 'waste-heat',
      color: '#77e6d0',
      start: nebulaStart,
      duration: 28,
      physicalDurationYears: randomBetween(random, 8e3, 4e4),
      sourceIndex: planetaryNebulaSource,
      message: '类太阳恒星抛出外层包层，逐渐暴露的炽热核心电离膨胀气体',
      outcome: '彩色气壳继续扩散并变暗，中心留下白矮星；名称中的“行星”只描述早期望远镜外观'
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

  const xrayStart = futurePosition(505 + random() * 62, universe);
  const xraySource = firstCompatibleSource(stellarPopulation, random, xrayStart, [2, 3]);
  if (xraySource !== null) {
    const compactType = stellarPopulation.remnantTypes[xraySource] === 3 ? '黑洞' : '中子星';
    const peakLuminosityErgS = 10 ** randomBetween(random, 36.5, 39.2);
    add(createMarker({
      universe,
      type: 'x-ray-binary-outburst',
      label: 'X 射线双星爆发',
      visual: 'signal-wave',
      color: '#8bdcff',
      start: xrayStart,
      duration: 24,
      physicalDurationYears: randomBetween(random, 12, 240) / 365.25,
      sourceIndex: xraySource,
      compactType,
      peakLuminosityErgS,
      message: `${compactType}吸积盘发生热黏滞不稳定，X 射线光度迅速上升并伴随短暂射电喷流`,
      outcome: `峰值光度约 10^${Math.log10(peakLuminosityErgS).toFixed(1)} erg/s；伴星供质仍在，因此系统可在未来再次爆发`
    }));
  }

  const nullingStart = futurePosition(536 + random() * 54, universe);
  const nullingSource = firstCompatibleSource(stellarPopulation, random, nullingStart, [2]);
  if (nullingSource !== null && random() < .58) {
    const quietYears = randomBetween(random, .08, 8);
    add(createMarker({
      universe,
      type: 'pulsar-nulling',
      label: '脉冲星停止与重新启动',
      visual: 'signal-silence',
      color: '#82b5d4',
      start: nullingStart,
      duration: 26,
      physicalDurationYears: quietYears,
      sourceIndex: nullingSource,
      quietYears,
      message: '稳定脉冲突然降到探测阈值以下，定时阵列暂时无法确认磁层是否仍在放电',
      outcome: `${quietYears.toFixed(2)} 年后脉冲恢复；自转能量并未消失，静默来自磁层发射状态切换`
    }));
  }

  if (universe.hasCentralBlackHole) {
    const stateStart = futurePosition(552 + random() * 46, universe);
    const eddingtonRatio = randomBetween(random, .025, .82);
    add(createMarker({
      universe,
      type: 'black-hole-state-transition',
      label: '黑洞吸积态转换',
      visual: 'waste-heat',
      color: '#9fc8ff',
      start: stateStart,
      duration: 28,
      physicalDurationYears: randomBetween(random, .02, 2.5),
      sourceIndex: galacticCenterIndex,
      eddingtonRatio,
      message: '吸积流由低亮度硬态转为热盘主导的软态，X 射线谱变软且稳态喷流受到抑制',
      outcome: `峰值吸积率约为爱丁顿率的 ${(eddingtonRatio * 100).toFixed(1)}%；光谱与喷流同步变化支持同一吸积态转换`
    }));

    const photonRingStart = stateStart + 32 + random() * 18;
    const orbitalPeaks = 2 + Math.floor(random() * 4);
    add(createMarker({
      universe,
      type: 'black-hole-photon-ring-flare',
      label: '黑洞光子环耀斑',
      visual: 'microlensing',
      color: '#f1d2a1',
      start: photonRingStart,
      duration: 22,
      physicalDurationYears: randomBetween(random, 2, 36) / 8766,
      sourceIndex: galacticCenterIndex,
      peakMagnification: randomBetween(random, 1.35, 2.8),
      orbitalPeaks,
      message: `吸积盘热点绕黑洞运行，引力透镜与光行时延产生 ${orbitalPeaks} 个重复亮度峰`,
      outcome: '重复峰间隔随热点轨道逐圈漂移，可用于约束黑洞质量、自旋与内盘倾角'
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

  if (engineeringEvent) {
    const engineer = civilizationData[engineeringEvent.targetSpeciesIndex];
    const occultationStart = engineeringEvent.impactAt + randomBetween(random, 14, 38);
    add(createMarker({
      universe,
      type: 'megastructure-occultation',
      label: '巨型工程遮蔽事件',
      visual: 'transit-curve',
      color: '#eadcaa',
      start: occultationStart,
      duration: 31,
      physicalDurationYears: randomBetween(random, .2, 12),
      category: 'civilization',
      confidence: 'astrobiology-model',
      targetNodeIndex: engineer.homeNodeIndex,
      targetSpeciesIndex: engineeringEvent.targetSpeciesIndex,
      sourceEventId: engineeringEvent.id,
      causalRootId: engineeringEvent.id,
      transitDepth: randomBetween(random, .04, .31),
      asymmetry: randomBetween(random, .45, .92),
      message: `${engineer.name} 的恒星工程产生多层、周期性但非行星形状的遮光结构`,
      outcome: '复杂遮挡与中红外废热互相加强技术解释，但碎片盘和尘埃弧仍需共同排除'
    }));
  }

  const signalEvent = civilizationEvents.find((event) => event.type === 'first-signal');
  if (signalEvent) {
    const transmitter = civilizationData[signalEvent.targetSpeciesIndex];
    const driftRateHzS = randomBetween(random, -.18, .18);
    add(createMarker({
      universe,
      type: 'narrowband-signal-drift',
      label: '窄带信号漂移',
      visual: 'signal-wave',
      color: '#74d8ff',
      start: signalEvent.impactAt + randomBetween(random, 2, 12),
      duration: 24,
      physicalDurationYears: randomBetween(random, .02, 2),
      category: 'civilization',
      confidence: 'astrobiology-model',
      targetNodeIndex: transmitter.homeNodeIndex,
      targetSpeciesIndex: signalEvent.targetSpeciesIndex,
      sourceEventId: signalEvent.id,
      causalRootId: signalEvent.id,
      driftRateHzS,
      message: `窄带载波以 ${driftRateHzS.toFixed(3)} Hz/s 漂移，需要同时拟合发射源轨道、接收机运动与本地干扰`,
      outcome: '漂移在多台独立设备中重复出现后仍只能提高人工源可信度，不能单独完成确认'
    }));

    if (transmitter.technology >= .42 || random() < .34) {
      const pulseInterval = 2 + Math.floor(random() * 17);
      add(createMarker({
        universe,
        type: 'optical-laser-beacon',
        label: '短脉冲激光信标',
        visual: 'signal-wave',
        color: '#b9f5ff',
        start: signalEvent.impactAt + randomBetween(random, 16, 36),
        duration: 22,
        physicalDurationYears: randomBetween(random, .01, .6),
        category: 'civilization',
        confidence: 'astrobiology-model',
        targetNodeIndex: transmitter.homeNodeIndex,
        targetSpeciesIndex: signalEvent.targetSpeciesIndex,
        sourceEventId: signalEvent.id,
        causalRootId: signalEvent.id,
        pulseInterval,
        message: `光学波段出现纳秒级重复脉冲，间隔按质数 ${pulseInterval} 编码`,
        outcome: '脉冲宽度和间隔难以由恒星活动产生；仍需异地复现以排除仪器串扰和近地光源'
      }));
    }
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

  const fleetEvent = civilizationEvents
    .filter((event) => event.type === 'intergalactic-diaspora')
    .sort((left, right) => left.impactAt - right.impactAt)[0];
  if (fleetEvent) {
    const fleetOwner = civilizationData[fleetEvent.targetSpeciesIndex];
    add(createMarker({
      universe,
      type: 'relativistic-fleet-trail',
      label: '相对论舰队尾迹',
      visual: 'relativistic-divergence',
      color: '#8ce7ff',
      start: fleetEvent.impactAt + randomBetween(random, 6, 20),
      duration: 30,
      physicalDurationYears: randomBetween(random, 2e3, 8e5),
      category: 'civilization',
      confidence: 'science-fiction',
      targetNodeIndex: fleetOwner.homeNodeIndex,
      targetSpeciesIndex: fleetEvent.targetSpeciesIndex,
      sourceEventId: fleetEvent.id,
      causalRootId: fleetEvent.causalRootId || fleetEvent.id,
      fleetSpeed: fleetEvent.fleetSpeed || randomBetween(random, .12, .62),
      message: '舰体无法直接分辨，但高能粒子前驱、星际介质冲击波与异常红移沿航向形成线性关联',
      outcome: '尾迹只提供运动方向和最低能量预算；将其解释为舰队属于明确的科幻假设层'
    }));
  }

  const biosphereTarget = civilizationData.length
    ? civilizationData[Math.floor(random() * civilizationData.length)]
    : null;
  const biosphereTargetIndex = biosphereTarget ? civilizationData.indexOf(biosphereTarget) : -1;
  if (biosphereTarget && Number.isInteger(biosphereTarget.homeNodeIndex)) {
    const oxygenationStart = clamp(biosphereTarget.birth - randomBetween(random, 34, 58), 352, 610);
    const oxygenRise = randomBetween(random, .08, .34);
    add(createMarker({
      universe,
      type: 'great-oxygenation',
      label: '生物大氧化事件',
      visual: 'biosphere-chain',
      color: '#7ddcca',
      start: oxygenationStart,
      duration: 30,
      physicalDurationYears: randomBetween(random, 8e7, 6e8),
      category: 'observation',
      confidence: 'astrobiology-model',
      targetNodeIndex: biosphereTarget.homeNodeIndex,
      targetSpeciesIndex: biosphereTargetIndex,
      oxygenRise,
      message: '光合生物的氧产量长期超过地表与海洋还原物质的消耗，大气氧与臭氧特征逐步增强',
      outcome: `氧体积分数上升到约 ${(oxygenRise * 100).toFixed(0)}%；它提高复杂生命的能量上限，但不等同于智慧生命已经出现`
    }));

    const impactStart = biosphereTarget.birth + randomBetween(random, 15, 42);
    const impactSeverity = randomBetween(random, .12, .68);
    const impact = createMarker({
      universe,
      type: 'planetary-impact',
      label: '大型小行星撞击',
      visual: 'orbital-debris',
      color: '#ffb266',
      start: impactStart,
      duration: 25,
      physicalDurationYears: randomBetween(random, .02, 2),
      category: 'civilization',
      confidence: 'astrobiology-model',
      targetNodeIndex: biosphereTarget.homeNodeIndex,
      targetSpeciesIndex: biosphereTargetIndex,
      impactSeverity,
      message: '撞击产生短促红外闪光，尘埃进入高层大气并改变反射光谱与季节性生物信号',
      outcome: `撞击严重度 ${(impactSeverity * 100).toFixed(0)}%；生物圈损失与文明后果由目标当时的疆域和韧性共同决定`
    });
    add(impact);

    const climateStart = impact.impactAt + randomBetween(random, 18, 42);
    const runaway = random() < .46;
    const thawed = !runaway && random() < .74;
    const climate = createMarker({
      universe,
      type: runaway ? 'runaway-greenhouse' : 'snowball-climate-cycle',
      label: runaway ? '失控温室效应' : (thawed ? '全球冰封与解冻' : '全球冰封'),
      visual: 'terraforming',
      color: runaway ? '#ff9a68' : '#9ad8ff',
      start: climateStart,
      duration: 34,
      physicalDurationYears: runaway
        ? randomBetween(random, 2e6, 8e7)
        : randomBetween(random, 4e6, 3e8),
      category: 'civilization',
      confidence: 'astrobiology-model',
      targetNodeIndex: biosphereTarget.homeNodeIndex,
      targetSpeciesIndex: biosphereTargetIndex,
      sourceEventId: impact.id,
      causalRootId: impact.id,
      runaway,
      thawed,
      message: runaway
        ? '水蒸气反馈持续增强，海洋蒸发并推动高层大气失水，宜居窗口快速收窄'
        : '冰雪反照率反馈将行星推入全球冰封，火山逸气随后缓慢积累温室气体',
      outcome: runaway
        ? '表面液态水长期消失，母世界承载力发生不可逆下降'
        : thawed
          ? '二氧化碳积累最终触发解冻，生物圈经历强烈瓶颈后恢复'
          : '温室气体尚未跨过解冻阈值，开放海洋与季节性植被信号继续衰减'
    });
    add(climate);

    const biosignatureStart = climate.impactAt + randomBetween(random, 12, 28);
    add(createMarker({
      universe,
      type: 'biosignature-loss',
      label: '生物信号突然消失',
      visual: 'signal-silence',
      color: '#789aa6',
      start: biosignatureStart,
      duration: 28,
      physicalDurationYears: randomBetween(random, 8, 800),
      category: 'civilization',
      confidence: 'astrobiology-model',
      targetNodeIndex: biosphereTarget.homeNodeIndex,
      targetSpeciesIndex: biosphereTargetIndex,
      sourceEventId: climate.id,
      causalRootId: impact.id,
      signalLossFraction: randomBetween(random, .42, .92),
      message: '氧气、甲烷不平衡或季节性反射边缘在后续观测中降到显著性阈值以下',
      outcome: '气候跃迁、生态崩溃与观测系统误差仍然简并；仅凭信号消失不能立即判定灭绝'
    }));
  }

  if (universe.cosmicFate.type === 'heat-death') {
    const whiteDwarfStart = futurePosition(704 + random() * 46, universe);
    const whiteDwarfSource = firstCompatibleSource(stellarPopulation, random, whiteDwarfStart, [1]);
    if (whiteDwarfSource !== null) {
      add(createMarker({
        universe,
        type: 'white-dwarf-collision',
        label: '白矮星碰撞',
        visual: 'orbital-debris',
        color: '#f2e0bd',
        start: whiteDwarfStart,
        duration: 30,
        physicalDurationYears: randomBetween(random, .2, 4),
        sourceIndex: whiteDwarfSource,
        message: '简并时代的多体近遇让两颗白矮星失去轨道能并发生碰撞',
        outcome: '总质量与点火位置决定其形成更重残骸还是发生延迟热核爆炸；事件率远低于恒星时代'
      }));
    }

    const protonDecayStart = cosmicYearsToTimelinePosition(10 ** randomBetween(random, 33.5, 36), universe);
    add(createMarker({
      universe,
      type: 'proton-decay-era',
      label: '质子衰变时代开始',
      visual: 'signal-silence',
      color: '#8490a6',
      start: protonDecayStart,
      duration: 30,
      physicalDurationYears: 10 ** randomBetween(random, 32, 34),
      sourceIndex: galacticCenterIndex,
      message: '若质子不稳定，重子物质开始在极长时间尺度上转化为轻子与辐射',
      outcome: '这是依赖粒子物理参数的条件分支；若质子稳定，白矮星与中子物质将沿另一条远未来路径存留'
    }));

    const evaporationStart = futurePosition(812 + random() * 22, universe);
    add(createMarker({
      universe,
      type: 'galactic-evaporation',
      label: '星系引力蒸发',
      visual: 'galactic-encounter',
      color: '#879bb8',
      start: evaporationStart,
      duration: 34,
      physicalDurationYears: 10 ** randomBetween(random, 18, 20),
      sourceIndex: galacticCenterIndex,
      message: '长期多体近遇把少数残骸加速到逃逸速度，剩余成员逐步向中央致密天体沉降',
      outcome: '星系不再保持连续可辨的引力结构，只留下稀疏逃逸残骸与核区束缚成员'
    }));

    const rogueFlybyStart = futurePosition(858 + random() * 34, universe);
    const rogueBlackHole = firstCompatibleSource(stellarPopulation, random, rogueFlybyStart, [3]);
    if (rogueBlackHole !== null) {
      add(createMarker({
        universe,
        type: 'rogue-black-hole-flyby',
        label: '流浪黑洞近距离掠过',
        visual: 'microlensing',
        color: '#c4d3e8',
        start: rogueFlybyStart,
        duration: 26,
        physicalDurationYears: randomBetween(random, 2e3, 2e6),
        sourceIndex: rogueBlackHole,
        peakMagnification: randomBetween(random, 1.2, 3.4),
        message: '被早期引力近遇抛出的恒星级黑洞穿过一处残骸系统，产生透镜增亮与轨道扰动',
        outcome: '黑洞本身几乎不可见，其质量由透镜时标与受扰残骸的加速度共同约束'
      }));
    }

    const hawkingImpactAt = clamp(942 + random() * 6, 942, 948);
    add(createMarker({
      universe,
      type: 'hawking-final-burst',
      label: '黑洞霍金辐射末期爆发',
      visual: 'waste-heat',
      color: '#d4e9ff',
      start: hawkingImpactAt - 12,
      duration: 16,
      physicalDurationYears: 1 / 31557600,
      physicalStartYears: 10 ** universe.blackHoleEvaporationExponent,
      impactAt: hawkingImpactAt,
      visualImpactAt: hawkingImpactAt - 2,
      sourceIndex: galacticCenterIndex,
      message: '最后一批长寿黑洞进入温度急剧上升阶段，剩余质量在极短时间内转化为高能粒子',
      outcome: `在约 10^${universe.blackHoleEvaporationExponent} 年附近出现最后的局域高能瞬变，随后不再有黑洞可提供可用能量梯度`
    }));

    if (whiteDwarfSource !== null) {
      const blackDwarfExponent = randomBetween(random, 1080, 1120);
      const blackDwarfImpactAt = cosmicLogYearsToTimelinePosition(blackDwarfExponent, universe);
      add(createMarker({
        universe,
        type: 'black-dwarf-supernova',
        label: '黑矮星超新星',
        visual: 'orbital-debris',
        color: '#b7c7e8',
        start: blackDwarfImpactAt - 1.4,
        duration: 2.8,
        physicalDurationYears: randomBetween(random, .2, 3),
        physicalStartYears: Number.MAX_VALUE,
        physicalStartLogYears: blackDwarfExponent,
        impactAt: blackDwarfImpactAt,
        visualImpactAt: blackDwarfImpactAt - .25,
        sourceIndex: whiteDwarfSource,
        confidence: 'astrophysical-model',
        message: '若质子长期稳定，量子隧穿可能让极冷黑矮星在超远未来重新点燃核反应并发生爆炸',
        outcome: `事件被安排在约 10^${blackDwarfExponent.toFixed(0)} 年；其发生机制和时间尺度高度推测，不代表标准宇宙学的确定预言`
      }));
    }

    const lastSignalExponent = 1600;
    const lastSignalImpactAt = cosmicLogYearsToTimelinePosition(lastSignalExponent, universe);
    add(createMarker({
      universe,
      type: 'last-observable-signal',
      label: '最后一个可探测信号离开观测视界',
      visual: 'signal-silence',
      color: '#68788f',
      start: lastSignalImpactAt - 1.2,
      duration: 2.1,
      physicalDurationYears: 10 ** 6,
      physicalStartYears: Number.MAX_VALUE,
      physicalStartLogYears: lastSignalExponent,
      impactAt: lastSignalImpactAt,
      visualImpactAt: lastSignalImpactAt - .25,
      sourceIndex: galacticCenterIndex,
      message: '加速膨胀与持续红移让最后一束外来信息降到任何有限探测器的能量分辨率以下',
      outcome: '信号不是在某个绝对边界处熄灭，而是其波长与到达率渐近超出可观测范围'
    }));
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
  'galaxy-starburst',
  'agn-jet-reorientation',
  'galactic-wind-outflow',
  'ram-pressure-stripping',
  'protostar-jet',
  'red-giant-helium-flash',
  'common-envelope-event',
  'luminous-red-nova',
  'planetary-nebula-formation',
  'fast-radio-burst',
  'x-ray-binary-outburst',
  'black-hole-state-transition',
  'pulsar-nulling',
  'black-hole-photon-ring-flare',
  'gravitational-microlensing',
  'failed-supernova',
  'anomalous-transit',
  'infrared-waste-heat',
  'civilization-signal-silence',
  'narrowband-signal-drift',
  'optical-laser-beacon',
  'megastructure-occultation',
  'relativistic-fleet-trail',
  'great-oxygenation',
  'planetary-impact',
  'runaway-greenhouse',
  'snowball-climate-cycle',
  'biosignature-loss',
  'white-dwarf-collision',
  'proton-decay-era',
  'galactic-evaporation',
  'rogue-black-hole-flyby',
  'hawking-final-burst',
  'black-dwarf-supernova',
  'last-observable-signal',
  'last-star-extinction'
];
