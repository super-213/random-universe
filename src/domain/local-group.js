import { createSeededRandom, gaussianRandom, randomBetween } from './random.js';

const companionNames = [
  '阿特拉斯矮星系', '回声云星系', '涅瑞伊德星系', '边界环星系',
  '奥尔特裂隙', '刻普勒伴星系', '赫卡忒星系', '余烬矮星系'
];

export function createLocalGalaxyGroup(seed, primaryName) {
  const random = createSeededRandom(seed, 7301);
  const companionCount = 4 + Math.floor(random() * 3);
  const companions = Array.from({ length: companionCount }, (_, index) => {
    const angle = index / companionCount * Math.PI * 2 + randomBetween(random, -.28, .28);
    const distance = randomBetween(random, 21, 34);
    return {
      index: index + 1,
      name: companionNames[(index + Math.floor(random() * companionNames.length)) % companionNames.length],
      type: random() < .58 ? '矮椭圆星系' : random() < .72 ? '不规则星系' : '小型螺旋星系',
      position: [
        Math.cos(angle) * distance,
        gaussianRandom(random) * 3.1,
        Math.sin(angle) * distance * .72
      ],
      radius: randomBetween(random, 1.25, 2.8),
      hue: (randomBetween(random, .5, .72) + index * .037) % 1
    };
  });
  return {
    primary: { index: 0, name: primaryName, position: [0, 0, 0] },
    companions
  };
}
