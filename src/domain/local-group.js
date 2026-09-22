import { createSeededRandom, gaussianRandom, randomBetween } from './random.js';

const companionNames = [
  '阿特拉斯矮星系', '回声云星系', '涅瑞伊德星系', '边界环星系',
  '奥尔特裂隙', '刻普勒伴星系', '赫卡忒星系', '余烬矮星系'
];

export function createLocalGalaxyGroup(seed, primaryName) {
  const random = createSeededRandom(seed, 7301);
  const encounterRandom = createSeededRandom(seed, 7311);
  const companionCount = 4 + Math.floor(random() * 3);
  const companions = Array.from({ length: companionCount }, (_, index) => {
    const angle = index / companionCount * Math.PI * 2 + randomBetween(random, -.28, .28);
    const distance = randomBetween(random, 21, 34);
    const name = companionNames[(index + Math.floor(random() * companionNames.length)) % companionNames.length];
    const type = random() < .58 ? '矮椭圆星系' : random() < .72 ? '不规则星系' : '小型螺旋星系';
    const position = [
      Math.cos(angle) * distance,
      gaussianRandom(random) * 3.1,
      Math.sin(angle) * distance * .72
    ];
    const radius = randomBetween(random, 1.25, 2.8);
    const hue = (randomBetween(random, .5, .72) + index * .037) % 1;
    const massRatio = randomBetween(encounterRandom, .008, .24) * (radius / 2.1) ** 1.8;
    const radialVelocityKms = randomBetween(encounterRandom, -260, 130);
    const tangentialVelocityKms = randomBetween(encounterRandom, 24, 190);
    const inboundSpeed = Math.max(18, -radialVelocityKms);
    const angularMomentumFraction = tangentialVelocityKms
      / Math.hypot(tangentialVelocityKms, inboundSpeed);
    const pericenter = distance * angularMomentumFraction * randomBetween(encounterRandom, .42, .82);
    const bound = radialVelocityKms < -24 && tangentialVelocityKms < 158;
    const encounterYears = randomBetween(encounterRandom, .7e9, 7.5e9)
      * distance / 27
      * 120 / inboundSpeed;
    const tidalStrength = massRatio * (8 / Math.max(1, pericenter)) ** 3;
    return {
      index: index + 1,
      name,
      type,
      position,
      radius,
      hue,
      encounter: {
        bound,
        massRatio,
        radialVelocityKms,
        tangentialVelocityKms,
        pericenter,
        encounterYears,
        tidalStrength
      }
    };
  });
  return {
    primary: { index: 0, name: primaryName, position: [0, 0, 0] },
    companions
  };
}
