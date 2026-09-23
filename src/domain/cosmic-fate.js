import { createSeededRandom, randomBetween } from './random.js';

const HUBBLE_TIME_YEARS = 1.45e10;
const INTEGRATION_STEP = .012;

const clamp = (value, minimum, maximum) => Math.min(maximum, Math.max(minimum, value));

function finiteFuturePosition(years, presentAgeYears, outcomeYears) {
  const presentExponent = Math.log10(presentAgeYears);
  const outcomeExponent = Math.log10(outcomeYears);
  const exponent = Math.log10(clamp(years, presentAgeYears, outcomeYears));
  return 470 + (exponent - presentExponent) / (outcomeExponent - presentExponent) * 530;
}

const modelCatalog = {
  lambda: {
    label: '宇宙学常数',
    description: '暗能量密度保持不变，加速膨胀持续'
  },
  quintessence: {
    label: '演化标量场',
    description: '暗能量状态方程随尺度因子缓慢演化'
  },
  phantom: {
    label: '幽灵暗能量',
    description: '有效状态方程低于 -1，暗能量密度随膨胀增长'
  },
  'little-rip': {
    label: '渐近幽灵能量',
    description: '状态方程从 -1 下方渐近真空值，不在有限时间形成奇点'
  },
  'type-iii': {
    label: 'III 型奇异流体',
    description: '暗能量密度与压力在有限时间、有限尺度因子下发散'
  },
  recollapsing: {
    label: '反转势能',
    description: '标量场势能在远未来跨过零点，膨胀最终停止'
  }
};

const outcomeCatalog = {
  'heat-death': {
    label: '渐近热寂',
    shortLabel: '热寂',
    description: '膨胀持续，可用能量梯度逐渐消失'
  },
  'big-rip': {
    label: '大撕裂',
    shortLabel: '大撕裂',
    description: '加速膨胀最终克服星系、恒星系与局部束缚'
  },
  'little-rip': {
    label: '小撕裂',
    shortLabel: '小撕裂',
    description: '膨胀率只在无限远未来发散，束缚结构仍会逐层解体'
  },
  'type-iii-singularity': {
    label: 'III 型有限尺度奇点',
    shortLabel: 'III 型奇点',
    description: '尺度因子保持有限，能量密度、压力与时空曲率在有限时间发散'
  },
  'big-crunch': {
    label: '大坍缩',
    shortLabel: '大坍缩',
    description: '膨胀反转后，尺度因子在有限时间内回落'
  },
  'vacuum-decay': {
    label: '真空衰变',
    shortLabel: '真空衰变',
    description: '低能真空泡成核，泡壁以近光速扩张'
  }
};

export function darkEnergyEquationOfState(scaleFactor, w0, wa, model = '', ripVariant = 'little') {
  // Barboza-Alcaniz-style bounded w0/wa evolution written in scale factor.
  // It keeps w(a=1)=w0 and the same local slope as CPL without diverging in
  // either the early universe or the far future.
  if (model === 'little-rip' && scaleFactor > 1) {
    const relaxation = 1 + Math.log(scaleFactor);
    const power = ripVariant === 'pseudo' ? 2 : 1;
    return -1 - Math.abs(1 + w0) / relaxation ** power;
  }
  const denominator = scaleFactor * scaleFactor + (1 - scaleFactor) ** 2;
  return w0 + wa * (1 - scaleFactor) / denominator;
}

function integrateContraction({
  scaleFactor,
  darkEnergyEvolution,
  rateSquared,
  ageYears,
  w0,
  wa,
  expansionRate,
  darkEnergyDensity,
  omegaMatter,
  turnScale,
  history
}) {
  let currentScale = scaleFactor;
  let currentDarkEnergy = darkEnergyEvolution;
  let currentRateSquared = rateSquared;
  let currentAge = ageYears;

  for (let step = 1; step <= 3200; step++) {
    const nextScale = currentScale * Math.exp(-INTEGRATION_STEP);
    const midpointScale = Math.sqrt(currentScale * nextScale);
    const midpointW = darkEnergyEquationOfState(midpointScale, w0, wa);
    const nextDarkEnergy = currentDarkEnergy * Math.exp(3 * (1 + midpointW) * INTEGRATION_STEP);
    const negativePotential = .22 * darkEnergyDensity * Math.pow(nextScale / turnScale, 2.35);
    const nextRateSquared = omegaMatter / Math.pow(nextScale, 3)
      + darkEnergyDensity * nextDarkEnergy
      - negativePotential;
    const rate = Math.sqrt(Math.max(1e-18, (currentRateSquared + nextRateSquared) * .5));
    currentAge += HUBBLE_TIME_YEARS / expansionRate * INTEGRATION_STEP / rate;
    currentScale = nextScale;
    currentDarkEnergy = nextDarkEnergy;
    currentRateSquared = nextRateSquared;
    if (step % 80 === 0) {
      history.push({
        ageYears: currentAge,
        scaleFactor: currentScale,
        expansionRatio: -Math.sqrt(Math.max(0, currentRateSquared)),
        w: midpointW,
        phase: 'contraction'
      });
    }
    if (currentScale < 1e-8) break;
  }

  return currentAge;
}

function integrateExpansion({
  model,
  ripVariant,
  w0,
  wa,
  expansionRate,
  darkEnergyDensity,
  turnScale,
  presentAgeYears
}) {
  const omegaMatter = Math.max(.06, 1 - darkEnergyDensity);
  let scaleFactor = 1;
  let darkEnergyEvolution = 1;
  let ageYears = presentAgeYears;
  let previousRateSquared = 1;
  const history = [{ ageYears, scaleFactor, expansionRatio: 1, w: w0, phase: 'expansion' }];

  for (let step = 1; step <= 2400; step++) {
    const previousScaleFactor = scaleFactor;
    const nextScaleFactor = scaleFactor * Math.exp(INTEGRATION_STEP);
    const midpointScaleFactor = Math.sqrt(scaleFactor * nextScaleFactor);
    const w = darkEnergyEquationOfState(midpointScaleFactor, w0, wa, model, ripVariant);
    const nextDarkEnergyEvolution = darkEnergyEvolution * Math.exp(-3 * (1 + w) * INTEGRATION_STEP);
    const negativePotential = model === 'recollapsing'
      ? .22 * darkEnergyDensity * Math.pow(nextScaleFactor / turnScale, 2.35)
      : 0;
    const rateSquared = omegaMatter / Math.pow(nextScaleFactor, 3)
      + darkEnergyDensity * nextDarkEnergyEvolution
      - negativePotential;

    if (rateSquared <= 0) {
      const turnaroundYears = ageYears;
      const crunchYears = integrateContraction({
        scaleFactor: previousScaleFactor,
        darkEnergyEvolution,
        rateSquared: previousRateSquared,
        ageYears,
        w0,
        wa,
        expansionRate,
        darkEnergyDensity,
        omegaMatter,
        turnScale,
        history
      });
      return { history, turnaroundYears, crunchYears, finalRateSquared: rateSquared };
    }

    const rate = Math.sqrt((previousRateSquared + rateSquared) * .5);
    ageYears += HUBBLE_TIME_YEARS / expansionRate * INTEGRATION_STEP / Math.max(rate, 1e-12);
    scaleFactor = nextScaleFactor;
    darkEnergyEvolution = nextDarkEnergyEvolution;
    previousRateSquared = rateSquared;
    if (step % 80 === 0) {
      history.push({ ageYears, scaleFactor, expansionRatio: Math.sqrt(rateSquared), w, phase: 'expansion' });
    }
  }

  let asymptoticYears = ageYears;
  if (model === 'phantom') {
    const remainingYears = HUBBLE_TIME_YEARS / expansionRate
      * 2 / (3 * Math.abs(1 + w0))
      / Math.sqrt(darkEnergyDensity * darkEnergyEvolution);
    asymptoticYears += remainingYears;
  }
  return { history, asymptoticYears, finalRateSquared: previousRateSquared };
}

function selectDarkEnergyModel(random) {
  const roll = random();
  if (roll < .34) return { model: 'lambda', w0: -1, wa: 0, turnScale: Infinity };
  if (roll < .62) return {
    model: 'quintessence',
    w0: randomBetween(random, -.96, -.76),
    wa: randomBetween(random, -.1, .1),
    turnScale: Infinity
  };
  if (roll < .82) {
    if (random() < .6) return {
      model: 'phantom',
      w0: randomBetween(random, -1.22, -1.035),
      wa: randomBetween(random, .015, .14),
      turnScale: Infinity
    };
    const ripVariant = random() < .28 ? 'pseudo' : 'little';
    return {
      model: 'little-rip',
      w0: randomBetween(random, -1.08, -1.015),
      wa: randomBetween(random, -.035, .08),
      turnScale: Infinity,
      ripVariant,
      ripStrength: ripVariant === 'pseudo' ? randomBetween(random, .55, .86) : 1,
      ripOnsetExponent: ripVariant === 'pseudo'
        ? randomBetween(random, 18, 38)
        : randomBetween(random, 12, 30)
    };
  }
  if (random() < 1 / 3) return {
    model: 'type-iii',
    w0: randomBetween(random, -1.08, -.9),
    wa: randomBetween(random, -.16, .16),
    turnScale: Infinity,
    singularityDelayHubbleTimes: randomBetween(random, 1.4, 18),
    singularityScaleFactor: randomBetween(random, 2.2, 14)
  };
  return {
    model: 'recollapsing',
    w0: randomBetween(random, -.98, -.78),
    wa: randomBetween(random, -.08, .08),
    turnScale: randomBetween(random, 3.2, 11)
  };
}

export function darkEnergyModelForSeed(seed) {
  return selectDarkEnergyModel(createSeededRandom(seed, 6029));
}

export function createCosmicFate(seed, cosmology) {
  const random = createSeededRandom(seed, 6029);
  const generatedDarkEnergy = selectDarkEnergyModel(random);
  const darkEnergy = cosmology.darkEnergy || generatedDarkEnergy;
  const expansion = integrateExpansion({
    ...darkEnergy,
    expansionRate: cosmology.expansionRate,
    darkEnergyDensity: cosmology.darkEnergyDensity,
    presentAgeYears: cosmology.presentAgeYears
  });

  let baseType = 'heat-death';
  let baseOutcomeYears = Infinity;
  if (darkEnergy.model === 'phantom') {
    baseType = 'big-rip';
    baseOutcomeYears = Math.max(cosmology.presentAgeYears * 1.05, expansion.asymptoticYears);
  } else if (darkEnergy.model === 'recollapsing') {
    baseType = 'big-crunch';
    baseOutcomeYears = expansion.crunchYears;
  } else if (darkEnergy.model === 'little-rip') {
    baseType = 'little-rip';
  } else if (darkEnergy.model === 'type-iii') {
    baseType = 'type-iii-singularity';
    baseOutcomeYears = cosmology.presentAgeYears
      + HUBBLE_TIME_YEARS / cosmology.expansionRate * darkEnergy.singularityDelayHubbleTimes;
  }

  const metastableVacuum = random() < .16;
  const vacuumDecayExponent = metastableVacuum ? randomBetween(random, 10.55, 92) : Infinity;
  const vacuumDecayYears = 10 ** Math.min(vacuumDecayExponent, 300);
  const vacuumWins = metastableVacuum && vacuumDecayYears < baseOutcomeYears;
  const type = vacuumWins ? 'vacuum-decay' : baseType;
  const outcomeYears = vacuumWins ? vacuumDecayYears : baseOutcomeYears;
  const cyclicBounce = type === 'big-crunch' && random() < .28;
  const modelInfo = modelCatalog[darkEnergy.model];
  const outcomeInfo = outcomeCatalog[type];
  let onsetYears = Infinity;
  if (type === 'big-crunch') {
    onsetYears = expansion.turnaroundYears || outcomeYears;
  } else if (type === 'big-rip') {
    const presentExponent = Math.log10(cosmology.presentAgeYears);
    const outcomeExponent = Math.log10(outcomeYears);
    onsetYears = 10 ** (presentExponent + (outcomeExponent - presentExponent) * .9);
  } else if (type === 'vacuum-decay') {
    const presentExponent = Math.log10(cosmology.presentAgeYears);
    const outcomeExponent = Math.log10(outcomeYears);
    onsetYears = 10 ** (presentExponent + (outcomeExponent - presentExponent) * .97);
  } else if (type === 'type-iii-singularity') {
    const presentExponent = Math.log10(cosmology.presentAgeYears);
    const outcomeExponent = Math.log10(outcomeYears);
    onsetYears = 10 ** (presentExponent + (outcomeExponent - presentExponent) * .82);
  } else if (type === 'little-rip') {
    onsetYears = 10 ** darkEnergy.ripOnsetExponent;
  }
  let onsetAt = 930;
  if (type === 'little-rip') {
    const exponent = darkEnergy.ripOnsetExponent;
    onsetAt = exponent < 14
      ? 570 + (exponent - 12) / 2 * 80
      : exponent < 15
        ? 650 + (exponent - 14) * 30
        : 680 + (exponent - 15) / 25 * 165;
    onsetAt = clamp(onsetAt, 570, 840);
  } else if (Number.isFinite(onsetYears)) {
    onsetAt = clamp(finiteFuturePosition(onsetYears, cosmology.presentAgeYears, outcomeYears), 480, 997);
  }

  const label = cyclicBounce ? '大坍缩 · 循环反弹' : outcomeInfo.label;
  const shortLabel = cyclicBounce ? '循环反弹' : outcomeInfo.shortLabel;

  return {
    ...darkEnergy,
    modelLabel: modelInfo.label,
    modelDescription: modelInfo.description,
    expansionHistory: expansion.history,
    turnaroundYears: expansion.turnaroundYears || null,
    cyclicBounce,
    bounceAt: cyclicBounce ? 992 : null,
    metastableVacuum,
    vacuumDecayExponent,
    type,
    label,
    shortLabel,
    description: outcomeInfo.description,
    outcomeYears,
    outcomeExponent: Number.isFinite(outcomeYears) ? Math.log10(outcomeYears) : Infinity,
    onsetYears,
    onsetAt
  };
}

export function formatOutcomeTime(fate) {
  if (!Number.isFinite(fate.outcomeYears)) {
    if (fate.type === 'little-rip') {
      return fate.ripVariant === 'pseudo'
        ? 'T→∞ · 伪撕裂渐近上限'
        : 'T→∞ · 无有限时间奇点';
    }
    return '渐近 · 无有限终点';
  }
  if (fate.outcomeYears < 1e12) return `T+${(fate.outcomeYears / 1e8).toFixed(0)} 亿年`;
  return `T+10^${fate.outcomeExponent.toFixed(1)} 年`;
}

export function formatVacuumState(fate) {
  if (!fate.metastableVacuum) return '未设定可见衰变';
  return `亚稳态 · 假设寿命 10^${fate.vacuumDecayExponent.toFixed(1)} 年`;
}
