import { cosmicYearsToTimelinePosition } from './cosmic-time.js';

export const galaxyRoots = ['赫利俄斯', '弥涅耳瓦', '伊奥', '俄耳甫斯', '忒弥斯', '厄里倪厄斯', '欧律狄刻', '阿斯忒里亚'];

export const galaxyTypes = ['棒旋星系', '絮状螺旋星系', '环状星系', '椭圆星系', '不规则星系'];

export const speciesNames = [
  '赛里安共同体', '洛珂蜂群', '弧光联盟', '静默者', '澄海文明',
  '铸星者', '织光议会', '塔乌林协约', '奈落合众体', '远潮群落',
  '镜海联邦', '巡星庭', '赤纬公社', '无昼同盟', '尘环智群'
];

export const speciesColors = [
  0xd8ff5f, 0xff7b6b, 0x69b8ff, 0xe78cff, 0xffc65c,
  0x62e6cf, 0xff8dc7, 0xa6a0ff, 0xf29d55, 0x73e46c,
  0x5ed8ff, 0xffe67b, 0xc38cff, 0xff6666, 0x90b8ff
];
// The early eras expand the conventional thermal history while the far future
// follows the approximate Adams–Laughlin logarithmic-era scheme. Far-future
// boundaries are explicitly conditional.

export const eras = [
  { until: 55, name: '早期热大爆炸', description: '时间轴从大爆炸后 1 毫秒开始；高温粒子汤膨胀冷却，并在最初数分钟完成原初核合成。' },
  { until: 145, name: '光子—等离子体时代', description: '原初核合成结束后，光子仍被自由电子频繁散射，直至复合使宇宙变得透明。' },
  { until: 245, name: '宇宙黑暗时代', description: '38 万年后宇宙变得透明，但第一代恒星尚未点亮。' },
  { until: 340, name: '宇宙黎明', description: '约 1～2 亿年后，第一代恒星与星系开始形成并推动再电离。' },
  { until: 650, name: '成熟恒星时代', description: '恒星、星系与重元素持续演化；生命与文明属于未证实的模型层。' },
  { until: 845, name: '简并时代', description: '恒星残骸继续经历长期引力演化；质子是否稳定将决定重子物质的最终路径。' },
  { until: 950, name: '黑洞时代', description: '若霍金辐射的标准推断适用，孤立黑洞在极漫长时间中逐个蒸发。' },
  { until: 995, name: '超远未来', description: '黑洞已经蒸发；时间轴继续展开到 10^1200 年，以容纳依赖质子稳定性的高度推测事件。' },
  { until: 1001, name: '渐近暗时代', description: '时间坐标趋向无限远，辐射持续红移与稀释，可用能量梯度趋近于零。' }
];

function formatEraYears(years) {
  if (years < 1e6) return `${(years / 1e4).toFixed(years < 1e5 ? 1 : 0)} 万年`;
  if (years < 1e9) return `${(years / 1e8).toFixed(years < 1e8 ? 2 : 1)} 亿年`;
  return `${(years / 1e9).toFixed(1)} Gyr`;
}

function earlyErasForUniverse(universe) {
  const milestones = universe?.cosmicMilestones || {};
  const recombinationYears = milestones.recombinationYears || 380000;
  const firstStarsYears = milestones.firstStarsYears || 1.8e8;
  const matureGalaxiesYears = milestones.matureGalaxiesYears || 1e9;
  return [
    eras[0],
    eras[1],
    {
      until: 245,
      name: '宇宙黑暗时代',
      description: `${formatEraYears(recombinationYears)}时复合使宇宙变得透明；直到${formatEraYears(firstStarsYears)}时，第一代恒星才开始点亮。`
    },
    {
      until: 340,
      name: '宇宙黎明',
      description: `第一代恒星从${formatEraYears(firstStarsYears)}左右开始形成，并持续推动再电离与星系组装；约${formatEraYears(matureGalaxiesYears)}后进入成熟恒星时代。`
    }
  ];
}

export function erasForUniverse(universe) {
  const fate = universe?.cosmicFate;
  const stellarEnd = cosmicYearsToTimelinePosition(10 ** universe.lastStarDeathExponent, universe);
  const earlyEras = earlyErasForUniverse(universe);
  const stellarEra = {
    until: Math.min(stellarEnd, fate?.type === 'heat-death' ? stellarEnd : fate?.onsetAt ?? stellarEnd),
    name: '成熟恒星时代',
    description: '恒星、星系与重元素持续演化；生命与文明属于未证实的模型层。'
  };
  if (!fate || fate.type === 'heat-death') {
    return [
      ...earlyEras,
      stellarEra,
      ...eras.slice(5)
    ];
  }

  const shared = [...earlyEras, stellarEra];
  const preFate = fate.onsetAt > stellarEnd
    ? [{
        until: fate.onsetAt,
        name: '简并时代',
        description: '恒星已经熄灭，白矮星、中子星与黑洞继续经历长期引力演化。'
      }]
    : [];
  if (fate.type === 'big-rip') {
    return [
      ...shared,
      ...preFate,
      { until: 1001, name: '大撕裂 · 条件结局', description: '在 w < -1 持续成立的假设下，局部引力与微观束缚将被逐层克服。' }
    ];
  }
  if (fate.type === 'big-crunch') {
    return [
      ...shared,
      ...preFate,
      { until: 1001, name: '大坍缩 · 条件结局', description: '尺度因子反向演化，物质与辐射密度在有限时间内快速上升。' }
    ];
  }
  return [
    ...shared,
    ...preFate,
    { until: 1001, name: '真空衰变 · 条件结局', description: '随机量子隧穿产生低能真空泡，泡壁以近光速改写局部基态。' }
  ];
}
