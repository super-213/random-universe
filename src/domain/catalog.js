export const notes = [
  '一次偶然涨落，一组全新的自然法则。',
  '这里的星光，以陌生的速度穿过真空。',
  '引力写下结构，时间负责把它读完。',
  '一个从未存在过，也不会再次出现的宇宙。',
  '尘埃正在聚集，第一颗恒星即将点亮。'
];

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
// The boundaries follow the conventional thermal history and the long-term
// Adams–Laughlin era scheme. Far-future boundaries are explicitly conditional.

export const eras = [
  { until: 55, name: '炽热大爆炸', description: '整个可观测区域同时处于高温、高密度状态；这不是物质从某个中心炸开。' },
  { until: 145, name: '等离子体时代', description: '宇宙膨胀并冷却，原初核合成后，光子仍被自由电子频繁散射。' },
  { until: 245, name: '宇宙黑暗时代', description: '38 万年后宇宙变得透明，但第一代恒星尚未点亮。' },
  { until: 340, name: '宇宙黎明', description: '约 1～2 亿年后，第一代恒星与星系开始形成并推动再电离。' },
  { until: 650, name: '恒星时代', description: '恒星、星系与重元素持续演化；生命与文明属于未证实的模型层。' },
  { until: 845, name: '简并时代 · 假说', description: '若质子衰变等标准长期假说成立，恒星残骸绕核运行，并在近遇中逐个逃离或落入黑洞。' },
  { until: 950, name: '黑洞时代 · 假说', description: '若霍金辐射的标准推断适用，孤立黑洞在极漫长时间中逐个蒸发。' },
  { until: 1001, name: '暗时代 · 渐近', description: '宇宙继续膨胀，辐射红移与稀释，可用能量梯度趋近于零，而非发生一次全局终结。' }
];

export function erasForUniverse(universe) {
  const fate = universe?.cosmicFate;
  if (!fate || fate.type === 'heat-death') return eras;

  const shared = eras.slice(0, 5);
  if (fate.type === 'big-rip') {
    return [
      ...shared,
      { until: 850, name: '幽灵能量时代 · 假说', description: '暗能量密度随膨胀增长，宇宙在有限时间内加速趋向失稳。' },
      { until: 1001, name: '大撕裂 · 条件结局', description: '在 w < -1 持续成立的假设下，局部引力与微观束缚将被逐层克服。' }
    ];
  }
  if (fate.type === 'big-crunch') {
    return [
      ...shared,
      { until: 850, name: '膨胀反转 · 假说', description: '动态暗能量的有效势能跨过零点，哈勃参数逐步降低至零。' },
      { until: 1001, name: '大坍缩 · 条件结局', description: '尺度因子反向演化，物质与辐射密度在有限时间内快速上升。' }
    ];
  }
  return [
    ...shared,
    { until: 875, name: '亚稳真空 · 假说', description: '真空仍位于寿命未知的局部能量最低点，未发生可见跃迁。' },
    { until: 1001, name: '真空衰变 · 条件结局', description: '随机量子隧穿产生低能真空泡，泡壁以近光速改写局部基态。' }
  ];
}
