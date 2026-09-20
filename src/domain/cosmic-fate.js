import { createSeededRandom, randomBetween } from './random.js';

const PRESENT_AGE_YEARS = 1.38e10;
const HUBBLE_TIME_YEARS = 1.45e10;
const INTEGRATION_STEP = .012;

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

export function darkEnergyEquationOfState(scaleFactor, w0, wa) {
  // Bounded future extension of the common w0/wa idea. It agrees with w(a=1)=w0
  // without letting a linear CPL extrapolation diverge as a approaches infinity.
  return w0 + wa * (1 - scaleFactor) / (1 + scaleFactor);
}

function integrateExpansion({ model, w0, wa, expansionRate, darkEnergyDensity, turnScale }) {
  const omegaMatter = Math.max(.06, 1 - darkEnergyDensity);
  let scaleFactor = 1;
  let darkEnergyEvolution = 1;
  let ageYears = PRESENT_AGE_YEARS;
  let previousRateSquared = 1;
  const history = [{ ageYears, scaleFactor, expansionRatio: 1, w: w0 }];

  for (let step = 1; step <= 2400; step++) {
    const w = darkEnergyEquationOfState(scaleFactor, w0, wa);
    darkEnergyEvolution *= Math.exp(-3 * (1 + w) * INTEGRATION_STEP);
    scaleFactor *= Math.exp(INTEGRATION_STEP);
    const negativePotential = model === 'recollapsing'
      ? .22 * darkEnergyDensity * Math.pow(scaleFactor / turnScale, 2.35)
      : 0;
    const rateSquared = omegaMatter / Math.pow(scaleFactor, 3)
      + darkEnergyDensity * darkEnergyEvolution
      - negativePotential;

    if (rateSquared <= 0) {
      return { history, turnaroundYears: ageYears, finalRateSquared: rateSquared };
    }

    const rate = Math.sqrt((previousRateSquared + rateSquared) * .5);
    ageYears += HUBBLE_TIME_YEARS / expansionRate * INTEGRATION_STEP / Math.max(rate, 1e-12);
    previousRateSquared = rateSquared;
    if (step % 80 === 0) history.push({ ageYears, scaleFactor, expansionRatio: Math.sqrt(rateSquared), w });
  }

  return { history, asymptoticYears: ageYears, finalRateSquared: previousRateSquared };
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
  if (roll < .82) return {
    model: 'phantom',
    w0: randomBetween(random, -1.22, -1.035),
    wa: randomBetween(random, .015, .14),
    turnScale: Infinity
  };
  return {
    model: 'recollapsing',
    w0: randomBetween(random, -.98, -.78),
    wa: randomBetween(random, -.08, .08),
    turnScale: randomBetween(random, 3.2, 11)
  };
}

export function createCosmicFate(seed, cosmology) {
  const random = createSeededRandom(seed, 6029);
  const darkEnergy = selectDarkEnergyModel(random);
  const expansion = integrateExpansion({
    ...darkEnergy,
    expansionRate: cosmology.expansionRate,
    darkEnergyDensity: cosmology.darkEnergyDensity
  });

  let baseType = 'heat-death';
  let baseOutcomeYears = Infinity;
  if (darkEnergy.model === 'phantom') {
    baseType = 'big-rip';
    baseOutcomeYears = Math.max(PRESENT_AGE_YEARS * 1.05, expansion.asymptoticYears);
  } else if (darkEnergy.model === 'recollapsing') {
    baseType = 'big-crunch';
    const expansionDuration = Math.max(1e9, expansion.turnaroundYears - PRESENT_AGE_YEARS);
    baseOutcomeYears = expansion.turnaroundYears + expansionDuration * randomBetween(random, .78, 1.08);
  }

  const metastableVacuum = random() < .16;
  const vacuumDecayExponent = metastableVacuum ? randomBetween(random, 10.55, 92) : Infinity;
  const vacuumDecayYears = 10 ** Math.min(vacuumDecayExponent, 300);
  const vacuumWins = metastableVacuum && vacuumDecayYears < baseOutcomeYears;
  const type = vacuumWins ? 'vacuum-decay' : baseType;
  const outcomeYears = vacuumWins ? vacuumDecayYears : baseOutcomeYears;
  const modelInfo = modelCatalog[darkEnergy.model];
  const outcomeInfo = outcomeCatalog[type];

  return {
    ...darkEnergy,
    modelLabel: modelInfo.label,
    modelDescription: modelInfo.description,
    expansionHistory: expansion.history,
    turnaroundYears: expansion.turnaroundYears || null,
    metastableVacuum,
    vacuumDecayExponent,
    type,
    label: outcomeInfo.label,
    shortLabel: outcomeInfo.shortLabel,
    description: outcomeInfo.description,
    outcomeYears,
    outcomeExponent: Number.isFinite(outcomeYears) ? Math.log10(outcomeYears) : Infinity,
    onsetAt: type === 'big-crunch' ? 790 : type === 'big-rip' ? 820 : type === 'vacuum-decay' ? 875 : 930
  };
}

export function formatOutcomeTime(fate) {
  if (!Number.isFinite(fate.outcomeYears)) return '渐近 · 无有限终点';
  if (fate.outcomeYears < 1e12) return `T+${(fate.outcomeYears / 1e8).toFixed(0)} 亿年`;
  return `T+10^${fate.outcomeExponent.toFixed(1)} 年`;
}

export function formatVacuumState(fate) {
  if (!fate.metastableVacuum) return '未设定可见衰变';
  return `亚稳态 · 假设寿命 10^${fate.vacuumDecayExponent.toFixed(1)} 年`;
}
