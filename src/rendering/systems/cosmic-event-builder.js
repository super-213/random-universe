import * as THREE from 'three';
import { createSeededRandom } from '../../domain/random.js';
import { eventVisualFamily } from '../event-visual-registry.js';
import { buildCosmicEventVisual } from './cosmic-event-family-builders.js';

export function createCosmicEventBuilder({
  addBlackHoleRemnant,
  blackHoleBaseScale,
  blackHoleDisplayScaleAt,
  blackHolePositionAt,
  cosmicEventGroup,
  galaxyGroup,
  getBlackHoleRemnants,
  getCivilizationData,
  getCivilizationEvents,
  getCivilizationSimulation,
  getDependencies,
  getLocalGroup,
  getRemnantDynamics,
  getStarDeathThresholds,
  getStellarPopulation,
  getUniverse,
  stellarPositionAt
}) {
  function buildCosmicEvents(starPositions) {
    const explorer = getDependencies();
    const universe = getUniverse();
    const stellarPopulation = getStellarPopulation();
    const starDeathThresholds = getStarDeathThresholds();
    const blackHoleRemnants = getBlackHoleRemnants();
    const civilizationData = getCivilizationData();
    const civilizationEvents = getCivilizationEvents();
    const civilizationSimulation = getCivilizationSimulation();
    const localGroup = getLocalGroup();
    const remnantDynamics = getRemnantDynamics();
    const cosmicEvents = [];
    const random = createSeededRandom(universe.seed, 1447);
    const centralBlackHole = blackHoleRemnants.find((hole) => hole.userData.isCentral) || null;
    const stellarEnd = explorer.stellarEndTimelinePosition(universe);
    const finiteOutcome = universe.cosmicFate.type !== 'heat-death';
    const eventBoundary = finiteOutcome ? universe.cosmicFate.onsetAt : 1000;
    const remapEventStart = (position) => position < 470
      ? position
      : explorer.cosmicYearsToTimelinePosition(
          explorer.referenceFutureYearsAtTimelinePosition(position, universe),
          universe
        );
    const persistentEpochEnd = Math.min(eventBoundary, remapEventStart(845));
    const livingStarEvents = new Set([
      'pair-instability-supernova', 'young-pulsar-birth', 'classical-nova',
      'type-ia-supernova', 'red-dwarf-superflare', 'gamma-ray-burst',
      'neutron-star-kilonova', 'quasar-awakening', 'magnetar-flare',
      'tidal-disruption-event', 'core-collapse-supernova', 'pulsar-glitch',
      'superluminous-supernova', 'failed-supernova'
    ]);
    const transientDurationYears = {
      'pair-instability-supernova': 2,
      'young-pulsar-birth': 10,
      'classical-nova': .4,
      'type-ia-supernova': 2,
      'red-dwarf-superflare': 3 / 365.25,
      'gamma-ray-burst': 1 / 365.25,
      'neutron-star-kilonova': 3,
      'quasar-awakening': 8e6,
      'magnetar-flare': 1 / 365.25,
      'tidal-disruption-event': 4,
      'core-collapse-supernova': 2,
      'pulsar-glitch': 1 / 365.25,
      'superluminous-supernova': 5,
      'failed-supernova': 3,
      'stellar-black-hole-merger': 1,
      'late-black-hole-merger': 1
    };

    const nucleusEvent = universe.hasCentralBlackHole
      ? {
          type: 'quasar-awakening', visual: 'pulsar', label: '类星体短暂苏醒',
          message: '中心黑洞吸积率骤升，相对论喷流穿过星系核', preferCenter: true,
          start: 480 + random() * 16, duration: 30, color: '#8dd9ff',
          occurrenceModel: 'bernoulli',
          occurrenceProbability: universe.activeNucleus ? .78 : .24,
          maximumOccurrences: 1
        }
      : {
          type: 'magnetar-flare', visual: 'pulsar', label: '磁星巨型耀斑',
          message: '磁壳重排释放高能辐射，脉冲扫过邻近恒星系',
          start: 480 + random() * 16, duration: 26, color: '#7dcaff',
          occurrenceModel: 'renewal', occurrenceProbability: .54,
          repeatProbability: .34, maximumOccurrences: 2
        };

    const baseSchedule = [
      {
        type: 'pair-instability-supernova', visual: 'supernova', label: '成对不稳定超新星',
        message: '第一代巨星被完全撕碎，重元素云向外扩散',
        start: 258 + random() * 18, duration: 28, color: '#ffb36b',
        occurrenceModel: 'bernoulli',
        occurrenceProbability: THREE.MathUtils.clamp(.18 + universe.structureEfficiency * .12, .16, .52),
        maximumOccurrences: 1
      },
      {
        type: 'young-pulsar-birth', visual: 'pulsar', label: '年轻脉冲星诞生',
        message: '新生中子星高速自转，双极束流开始扫掠星际介质',
        start: 302 + random() * 18, duration: 27, color: '#68c8ff',
        occurrenceModel: 'poisson', expectedOccurrences: .72, maximumOccurrences: 2
      },
      {
        type: 'classical-nova', visual: 'nova', label: '经典新星爆发',
        message: '白矮星表面的吸积氢发生热核失控，抛出明亮但低质量的壳层',
        start: 336 + random() * 12, duration: 20, color: '#ffe4a8',
        occurrenceModel: 'renewal', occurrenceProbability: .76,
        repeatProbability: .52, maximumOccurrences: 3
      },
      {
        type: 'type-ia-supernova', visual: 'supernova', label: 'Ia 型超新星爆发',
        message: '白矮星发生热核失控，将铁族元素抛入星际空间',
        start: 368 + random() * 22, duration: 25, color: '#ffd08a',
        occurrenceModel: 'poisson', expectedOccurrences: .82, maximumOccurrences: 3
      },
      {
        type: 'red-dwarf-superflare', visual: 'stellar-flare', label: '红矮星超级耀斑',
        message: '磁场突然重联，高能辐射与带电粒子冲击近轨行星',
        start: 396 + random() * 12, duration: 21, color: '#ffcb72',
        occurrenceModel: 'renewal', occurrenceProbability: .82,
        repeatProbability: .58, maximumOccurrences: 3
      },
      {
        type: 'gamma-ray-burst', visual: 'pulsar', label: '长伽马射线暴',
        message: '垂死巨星坍缩，狭窄高能喷流贯穿恒星外层',
        start: 420 + random() * 20, duration: 24, color: '#89b9ff',
        occurrenceModel: 'bernoulli',
        occurrenceProbability: THREE.MathUtils.clamp(.12 + universe.structureEfficiency * .1, .1, .38),
        maximumOccurrences: 1
      },
      {
        type: 'neutron-star-kilonova', visual: 'kilonova', label: '中子星并合千新星',
        message: '双中子星旋近并合，短伽马射线束与富含重元素的抛射物同时释放',
        start: 450 + random() * 12, duration: 25, color: '#caa5ff',
        occurrenceModel: 'bernoulli', occurrenceProbability: .3, maximumOccurrences: 1
      },
      nucleusEvent,
      {
        type: 'tidal-disruption-event', visual: 'tidal-disruption', label: '潮汐瓦解事件',
        message: '恒星掠过中央黑洞的潮汐半径，被拉成长流并逐步吸积', preferCenter: true,
        requiresCentralBlackHole: true,
        hostBlackHoleId: 'central',
        start: 502 + random() * 10, duration: 30, color: '#72e4ff',
        occurrenceModel: 'bernoulli', occurrenceProbability: .32,
        repeatSpacing: 40, maximumOccurrences: 1
      },
      {
        type: 'core-collapse-supernova', visual: 'supernova', label: '核坍缩超新星',
        message: '恒星核心坍缩，冲击波把新合成元素送入星际云',
        start: 518 + random() * 20, duration: 27, color: '#ff875c',
        occurrenceModel: 'poisson', expectedOccurrences: 1.05, maximumOccurrences: 3
      },
      {
        type: 'pulsar-glitch', visual: 'pulsar', label: '脉冲星自转突变',
        message: '中子星内部角动量重分配，脉冲节律突然跃迁',
        start: 548 + random() * 18, duration: 22, color: '#8ba8ff',
        occurrenceModel: 'renewal', occurrenceProbability: .62,
        repeatProbability: .5, maximumOccurrences: 3
      },
      {
        type: 'superluminous-supernova', visual: 'supernova', label: '超亮超新星',
        message: '磁星引擎持续注入能量，爆发亮度超过普通超新星',
        start: 552 + random() * 16, duration: 26, color: '#ff6b52',
        occurrenceModel: 'bernoulli', occurrenceProbability: .24, maximumOccurrences: 1
      },
      {
        type: 'failed-supernova', visual: 'stellar-collapse', label: '恒星无爆发消失',
        message: '冲击波未能掀开恒星外层，亮度短暂上升后整体坍缩为黑洞',
        start: 586 + random() * 14, duration: 29, color: '#b87958',
        occurrenceModel: 'bernoulli', maximumOccurrences: 1,
        occurrenceProbability: THREE.MathUtils.clamp(
          .12 + universe.structureEfficiency * .13 + universe.gravity * .07,
          .14,
          .52
        )
      },
      {
        type: 'stellar-black-hole-merger', visual: 'black-hole-merger', label: '双黑洞合并',
        message: '两颗既有黑洞近距离相遇并被彼此引力俘获，旋近啁啾达到峰值', preferCenter: true,
        start: 616 + random() * 18, duration: 38, persistUntil: persistentEpochEnd,
        persistenceFadeDuration: 24, color: '#c897ff',
        occurrenceModel: 'poisson', expectedOccurrences: .48, maximumOccurrences: 2
      },
      {
        type: 'late-black-hole-merger', visual: 'black-hole-merger', label: '孤立黑洞捕获合并',
        message: '两个存续至简并时代的黑洞近遇后被引力束缚，最终完成并合', preferCenter: true,
        start: 872 + random() * 18, duration: 42, persistUntil: Math.min(eventBoundary, remapEventStart(950)),
        persistenceFadeDuration: 18, color: '#9bb8ff',
        occurrenceModel: 'bernoulli', occurrenceProbability: .26, maximumOccurrences: 1
      }
    ].filter((event) => (!event.requiresCentralBlackHole || universe.hasCentralBlackHole)
      && (event.type !== 'late-black-hole-merger'
        || universe.cosmicFate.type === 'heat-death'
        || universe.cosmicFate.outcomeExponent > 45))
      .map((event) => {
        const requiresLivingStar = livingStarEvents.has(event.type);
        const start = remapEventStart(event.start);
        const latestStart = Math.min(
          eventBoundary - event.duration,
          requiresLivingStar ? stellarEnd - event.duration : Infinity
        );
        return { ...event, start, latestStart, requiresLivingStar };
      });
    const schedule = explorer.expandEventSchedule(baseSchedule, universe, random)
      .map((event) => {
        const endBoundary = Math.min(
          eventBoundary,
          event.requiresLivingStar ? stellarEnd : Infinity
        );
        return {
          ...event,
          duration: Math.min(event.duration, endBoundary - event.start)
        };
      })
      .filter((event) => event.duration >= 1)
      .map((event, eventIndex) => {
        const simulation = explorer.createTransientSimulation(event, universe, eventIndex);
        const physicalStartYears = explorer.timelinePositionToCosmicYears(event.start, universe);
        const physicalDurationYears = transientDurationYears[event.type] || 1;
        const impactAt = explorer.cosmicYearsToTimelinePosition(
          physicalStartYears + physicalDurationYears,
          universe
        );
        const simulatedEvent = {
          ...event,
          simulation,
          physicalStartYears,
          physicalDurationYears,
          impactAt
        };
        if (simulation?.model === 'black-hole-binary') {
          simulatedEvent.gasRich = simulation.gasRich;
          simulatedEvent.radiatedMassFraction = simulation.radiatedMassFraction;
          simulatedEvent.recoilKms = simulation.recoilKms;
        }
        if (!simulation?.persistentRemnant) return simulatedEvent;
        simulatedEvent.persistUntil = event.type === 'late-black-hole-merger'
          ? Math.min(eventBoundary, remapEventStart(950))
          : persistentEpochEnd;
        simulatedEvent.persistenceFadeDuration = 24;
        return simulatedEvent;
      });

    const impactProfiles = {
      'pair-instability-supernova': { radius: .55, maxStars: 5, sourceDim: .02, neighborDim: .96, kick: .018, civilization: .08, range: 2.4 },
      'young-pulsar-birth': { radius: .42, maxStars: 2, sourceDim: .12, neighborDim: .99, kick: .01, civilization: .035, range: 1.8, directional: true, beamAngle: .12 },
      'classical-nova': { radius: .18, maxStars: 1, sourceDim: 1, neighborDim: 1, kick: 0, civilization: .012, range: .75, maxSpecies: 1 },
      'type-ia-supernova': { radius: .48, maxStars: 4, sourceDim: .02, neighborDim: .97, kick: .012, civilization: .06, range: 2.1 },
      'red-dwarf-superflare': { radius: .22, maxStars: 1, sourceDim: 1, neighborDim: 1, kick: 0, civilization: .09, range: 1.15, maxSpecies: 1 },
      'gamma-ray-burst': { radius: 7.5, maxStars: 46, sourceDim: .025, neighborDim: .82, kick: 0, civilization: .42, range: 12, maxSpecies: 1, directional: true, beamAngle: .1 },
      'neutron-star-kilonova': { radius: 4.8, maxStars: 24, sourceDim: .03, neighborDim: .9, kick: .006, civilization: .24, range: 8.5, maxSpecies: 1, directional: true, beamAngle: .14 },
      'quasar-awakening': { radius: 8.5, maxStars: 60, sourceDim: .95, neighborDim: .96, kick: 0, civilization: .16, range: 14, maxSpecies: 2, directional: true, beamAngle: .16 },
      'magnetar-flare': { radius: 1.1, maxStars: 8, sourceDim: .82, neighborDim: .94, kick: 0, civilization: .12, range: 3.2, maxSpecies: 1 },
      'tidal-disruption-event': { radius: .32, maxStars: 2, sourceDim: .015, neighborDim: .995, kick: .008, civilization: .075, range: 2.8, maxSpecies: 1 },
      'core-collapse-supernova': { radius: .5, maxStars: 4, sourceDim: .025, neighborDim: .97, kick: .014, civilization: .06, range: 2.2 },
      'pulsar-glitch': { radius: .01, maxStars: 1, sourceDim: .985, neighborDim: 1, kick: 0, civilization: 0, range: 0, maxSpecies: 0 },
      'superluminous-supernova': { radius: .62, maxStars: 6, sourceDim: .02, neighborDim: .95, kick: .02, civilization: .09, range: 2.8, maxSpecies: 1 },
      'failed-supernova': { radius: .24, maxStars: 2, sourceDim: .008, neighborDim: .995, kick: .003, civilization: .025, range: 1.25, maxSpecies: 1 },
      'stellar-black-hole-merger': { radius: .08, maxStars: 1, sourceDim: .06, neighborDim: 1, kick: 0, civilization: 0, range: 0, maxSpecies: 0 },
      'late-black-hole-merger': { radius: .08, maxStars: 1, sourceDim: .04, neighborDim: 1, kick: 0, civilization: 0, range: 0, maxSpecies: 0 }
    };

    const compactSourceTypes = {
      'classical-nova': 1,
      'type-ia-supernova': 1,
      'neutron-star-kilonova': 2,
      'magnetar-flare': 2,
      'pulsar-glitch': 2
    };
    const minimumSourceMasses = {
      'pair-instability-supernova': 40,
      'young-pulsar-birth': 8,
      'gamma-ray-burst': 20,
      'core-collapse-supernova': 8,
      'superluminous-supernova': 20,
      'failed-supernova': 25
    };
    const pickPosition = (data) => {
      const preferCenter = data.preferCenter;
      const compactType = compactSourceTypes[data.type];
      const minimumMass = minimumSourceMasses[data.type] || 0;
      const candidates = [];
      const maxRadius = preferCenter ? 2.8 : 6.2;
      for (let candidate = 0; candidate < starPositions.length / 3; candidate++) {
        const born = stellarPopulation.birthAt[candidate] <= data.start;
        const alive = starDeathThresholds[candidate] > data.impactAt;
        if (!born) continue;
        if (compactType) {
          if (stellarPopulation.remnantTypes[candidate] !== compactType
            || starDeathThresholds[candidate] > data.start) continue;
        } else if (data.requiresLivingStar && !alive) {
          continue;
        }
        const mass = stellarPopulation.massSolar[candidate];
        if (minimumMass && mass < minimumMass) continue;
        if (data.type === 'red-dwarf-superflare' && mass >= .6) continue;
        const offset = candidate * 3;
        if (Math.hypot(starPositions[offset], starPositions[offset + 1], starPositions[offset + 2]) < maxRadius) {
          candidates.push(candidate);
        }
      }
      if (!candidates.length) return null;
      const source = candidates[Math.floor(random() * candidates.length)];
      return {
        index: source,
        position: new THREE.Vector3(starPositions[source * 3], starPositions[source * 3 + 1], starPositions[source * 3 + 2])
      };
    };

    const deriveConsequences = (data, location) => {
      const profile = explorer.applyTransientImpactScales(impactProfiles[data.type], data.simulation, universe);
      const impactPhases = {
        supernova: .08,
        nova: .14,
        kilonova: .22,
        pulsar: .46,
        'stellar-flare': .38,
        'tidal-disruption': .58,
        'stellar-collapse': .64,
        'black-hole-merger': .68
      };
      const impactPhase = impactPhases[data.visual] ?? .5;
      const visualImpactAt = data.start + data.duration * impactPhase;
      const impactAt = data.impactAt ?? visualImpactAt;
      const nearbyStars = [];
      for (let index = 0; index < starPositions.length / 3; index++) {
        const offset = index * 3;
        const distance = Math.hypot(
          starPositions[offset] - location.position.x,
          starPositions[offset + 1] - location.position.y,
          starPositions[offset + 2] - location.position.z
        );
        if (distance > profile.radius) continue;
        if (profile.directional && data.beamDirection && distance > .001) {
          const direction = new THREE.Vector3(
            starPositions[offset] - location.position.x,
            starPositions[offset + 1] - location.position.y,
            starPositions[offset + 2] - location.position.z
          ).normalize();
          if (Math.abs(direction.dot(data.beamDirection)) < Math.cos(profile.beamAngle)) continue;
        }
        nearbyStars.push({ index, distance });
      }
      nearbyStars.sort((a, b) => a.distance - b.distance);
      const starImpacts = nearbyStars.slice(0, profile.maxStars).map(({ index, distance }, order) => {
        const offset = index * 3;
        const proximity = 1 - Math.min(1, distance / profile.radius);
        let dx = starPositions[offset] - location.position.x;
        let dy = starPositions[offset + 1] - location.position.y;
        let dz = starPositions[offset + 2] - location.position.z;
        const length = Math.hypot(dx, dy, dz);
        if (length < .001) {
          const theta = random() * Math.PI * 2;
          const z = random() * 2 - 1;
          const radial = Math.sqrt(1 - z * z);
          dx = Math.cos(theta) * radial; dy = z; dz = Math.sin(theta) * radial;
        } else {
          dx /= length; dy /= length; dz /= length;
        }
        const kick = profile.kick * (.2 + proximity * .8) * (.72 + random() * .5);
        return {
          index,
          dimFactor: order === 0 ? profile.sourceDim : 1 - (1 - profile.neighborDim) * proximity,
          kick: [dx * kick, dy * kick, dz * kick]
        };
      });

      const sourceOutcomes = {
        'pair-instability-supernova': '爆发源完全解体且没有致密残骸',
        'classical-nova': '白矮星保留下来，重新开始从伴星吸积物质',
        'type-ia-supernova': '白矮星被热核爆炸完全摧毁',
        'red-dwarf-superflare': '宿主恒星保持完整，但近轨行星大气受到高能粒子冲击',
        'neutron-star-kilonova': '并合形成大质量中子星或黑洞，并把重元素抛入星际空间',
        'tidal-disruption-event': '恒星被撕碎，部分物质形成吸积流，部分沿轨道逃逸',
        'core-collapse-supernova': '坍缩核心留下中子星或恒星级黑洞',
        'superluminous-supernova': '恒星外层被大规模抛射，中心结局仍不确定',
        'failed-supernova': '恒星几乎没有明亮爆炸便消失，留下新生黑洞'
      };
      const simulatedOutcome = explorer.describeTransientSimulation(data);
      const systemSummary = simulatedOutcome
        ? simulatedOutcome
        : data.visual === 'black-hole-merger'
          ? `约 ${(data.radiatedMassFraction * 100).toFixed(1)}% 总质量以引力波带走，残余黑洞以约 ${data.recoilKms} km/s 反冲${data.gasRich ? '，周围气体受热形成短暂余辉' : '；真空环境中没有超新星式爆炸'}`
          : data.type === 'pulsar-glitch'
            ? '自转频率发生微小跃变，没有可见的大规模破坏'
          : sourceOutcomes[data.type]
            ? `${sourceOutcomes[data.type]}，${Math.max(0, starImpacts.length - 1)} 个邻近恒星系受影响`
          : data.visual === 'pulsar'
            ? `${starImpacts.length} 个位于辐射束或近场内的恒星系受到影响`
            : `爆发源发生结构性改变，${Math.max(0, starImpacts.length - 1)} 个邻近恒星系受冲击`;
      return { impactAt, visualImpactAt, impactPhase, starImpacts, systemOutcome: systemSummary };
    };

    const deriveCivilizationNodeImpacts = (data, location, consequences, gravityField, eventIndex) => {
      if (!civilizationSimulation || !remnantDynamics) return [];
      const profile = explorer.applyTransientImpactScales(impactProfiles[data.type], data.simulation, universe);
      const impactRandom = createSeededRandom(universe.seed, 6203 + eventIndex * 131);
      const impactMap = new Map();
      const addImpact = (nodeIndex, at, severity, permanent = false, kind = 'damage') => {
        const key = `${kind}:${nodeIndex}:${at.toFixed(4)}`;
        const existing = impactMap.get(key);
        if (existing) {
          existing.severity = 1 - (1 - existing.severity) * (1 - severity);
          existing.permanent ||= permanent;
          return;
        }
        impactMap.set(key, {
          nodeIndex,
          at,
          severity: THREE.MathUtils.clamp(severity, 0, 1),
          permanent,
          kind,
          destructionRoll: impactRandom()
        });
      };

      if (profile.civilization > 0 && profile.range > 0) {
        for (let nodeIndex = 0; nodeIndex < civilizationSimulation.habitatPositions.length / 3; nodeIndex++) {
          const offset = nodeIndex * 3;
          const dx = civilizationSimulation.habitatPositions[offset] - location.position.x;
          const dy = civilizationSimulation.habitatPositions[offset + 1] - location.position.y;
          const dz = civilizationSimulation.habitatPositions[offset + 2] - location.position.z;
          const distance = Math.hypot(dx, dy, dz);
          if (distance > profile.range) continue;
          if (profile.directional && data.beamDirection && distance > .001) {
            const inverseDistance = 1 / distance;
            const alignment = Math.abs(
              dx * inverseDistance * data.beamDirection.x
              + dy * inverseDistance * data.beamDirection.y
              + dz * inverseDistance * data.beamDirection.z
            );
            if (alignment < Math.cos(profile.beamAngle)) continue;
          }
          const proximity = Math.max(.08, 1 - distance / profile.range);
          const severity = THREE.MathUtils.clamp(
            profile.civilization * (.62 + proximity * .48) * (.84 + impactRandom() * .3),
            0,
            .58
          );
          const pulsePhases = data.simulation?.pulsePhases;
          if (pulsePhases?.length) {
            pulsePhases.forEach((pulsePhase, pulseIndex) => {
              const weight = data.simulation.pulseWeights?.[pulseIndex] ?? 1;
              addImpact(nodeIndex, consequences.impactAt, severity * weight);
            });
          } else {
            addImpact(nodeIndex, consequences.impactAt, severity);
          }
          if (data.simulation?.recoveryDuration && data.simulation.recoveryFraction > 0) {
            const lastPulsePhase = pulsePhases?.length ? Math.max(...pulsePhases) : consequences.impactPhase;
            const recoveryAt = data.start + data.duration * lastPulsePhase + data.simulation.recoveryDuration;
            addImpact(nodeIndex, recoveryAt, severity * data.simulation.recoveryFraction, false, 'recovery');
          }
        }
      }

      const starImpacts = new Map(consequences.starImpacts.map((impact) => [impact.index, impact]));
      const capturedStars = new Map();
      if (gravityField) {
        for (let sample = 0; sample < gravityField.indices.length; sample++) {
          if (gravityField.restDistances[sample] >= gravityField.captureRadius) continue;
          capturedStars.set(gravityField.indices[sample], gravityField.restDistances[sample]);
        }
      }

      for (let nodeIndex = 0; nodeIndex < civilizationSimulation.habitatRemnantIndices.length; nodeIndex++) {
        const remnantIndex = civilizationSimulation.habitatRemnantIndices[nodeIndex];
        const sourceStarIndex = remnantDynamics.sourceIndices[remnantIndex];
        const stellarImpact = starImpacts.get(sourceStarIndex);
        if (stellarImpact) {
          const stellarDamage = 1 - stellarImpact.dimFactor;
          if (stellarDamage > .001) {
            addImpact(nodeIndex, consequences.impactAt, stellarDamage, stellarImpact.dimFactor <= .15);
          }
        }
        const captureDistance = capturedStars.get(sourceStarIndex);
        if (captureDistance !== undefined) {
          const captureDelay = captureDistance / gravityField.captureRadius * 11;
          addImpact(nodeIndex, consequences.impactAt + captureDelay + 13, 1, true);
        }
      }

      return Array.from(impactMap.values()).sort((a, b) => a.at - b.at || a.nodeIndex - b.nodeIndex);
    };

    const buildWaveSamples = (data, location, eventIndex) => {
      const isKilonova = data.visual === 'kilonova';
      if (data.visual !== 'black-hole-merger' && !isKilonova) return null;
      const waveRadius = isKilonova ? 6.4 : data.type === 'late-black-hole-merger' ? 7.2 : 8.8;
      const candidates = [];
      for (let index = 0; index < starPositions.length / 3; index++) {
        const offset = index * 3;
        const dx = starPositions[offset] - location.position.x;
        const dy = starPositions[offset + 1] - location.position.y;
        const dz = starPositions[offset + 2] - location.position.z;
        const distance = Math.hypot(dx, dy, dz);
        if (distance > .12 && distance <= waveRadius) candidates.push({ index, dx, dy, dz, distance });
      }

      const sampleRandom = createSeededRandom(universe.seed, 9107 + eventIndex * 97);
      const sampleCount = Math.min(isKilonova ? 900 : 1800, candidates.length);
      const stride = candidates.length / Math.max(1, sampleCount);
      const indices = new Uint16Array(sampleCount);
      const distances = new Float32Array(sampleCount);
      const transverse = new Float32Array(sampleCount * 3);
      const polarities = new Float32Array(sampleCount);
      for (let sample = 0; sample < sampleCount; sample++) {
        const start = sample * stride;
        const candidate = candidates[Math.min(candidates.length - 1, Math.floor(start + sampleRandom() * stride))];
        const inverseDistance = 1 / candidate.distance;
        const nx = candidate.dx * inverseDistance;
        const ny = candidate.dy * inverseDistance;
        const nz = candidate.dz * inverseDistance;
        let tx = -nz;
        let ty = 0;
        let tz = nx;
        const tangentLength = Math.hypot(tx, ty, tz);
        if (tangentLength < .04) {
          tx = 1; ty = 0; tz = 0;
        } else {
          tx /= tangentLength; ty /= tangentLength; tz /= tangentLength;
        }
        indices[sample] = candidate.index;
        distances[sample] = candidate.distance;
        transverse.set([tx, ty, tz], sample * 3);
        polarities[sample] = Math.cos(Math.atan2(nz, nx) * 2) * (.72 + sampleRandom() * .28);
      }
      const waveAmplitude = isKilonova
        ? THREE.MathUtils.clamp((data.simulation?.radiatedMassFraction || .025) / .04, .38, 1)
        : THREE.MathUtils.clamp((data.simulation?.radiatedMassFraction || .045) / .045, .62, 1.8);
      return { waveRadius, waveAmplitude, indices, distances, transverse, polarities };
    };

    schedule.forEach((scheduledData, index) => {
      let data = scheduledData;
      let mergerPair = null;
      let mergerAnchors = null;
      if (data.visual === 'black-hole-merger') {
        const candidates = blackHoleRemnants.map((hole, holeIndex) => ({
          id: hole.userData.originEventId || `primordial-remnant-${holeIndex}`,
          hole,
          birthAt: hole.userData.birthAt,
          evaporationAt: hole.userData.evaporationAt,
          consumedAt: hole.userData.handoffAt ?? hole.userData.consumedAt,
          isCentral: hole.userData.isCentral,
          massSolar: hole.userData.massSolar,
          position: blackHolePositionAt(hole, data.start).toArray()
        }));
        mergerPair = explorer.selectBlackHoleMergerPair(candidates, {
          at: data.start,
          maximumSeparation: data.type === 'late-black-hole-merger' ? 8.2 : 5.4
        });
        // A scheduled narrative beat is discarded when the extant compact-object
        // population has no close encounter. This keeps the event causal rather
        // than manufacturing a binary merely because the timeline reached a date.
        if (!mergerPair) return;

        const pairMasses = [mergerPair.left.massSolar, mergerPair.right.massSolar];
        const totalMass = pairMasses[0] + pairMasses[1];
        const center = new THREE.Vector3()
          .fromArray(mergerPair.left.position)
          .multiplyScalar(pairMasses[0] / totalMass)
          .addScaledVector(
            new THREE.Vector3().fromArray(mergerPair.right.position),
            pairMasses[1] / totalMass
          );
        const anchorEntries = [mergerPair.left.hole, mergerPair.right.hole].flatMap((hole) => {
          const anchors = hole.userData.anchorSourceIndices;
          const weights = hole.userData.anchorWeights;
          if (!anchors?.length) {
            return Number.isInteger(hole.userData.sourceIndex)
              ? [{ index: hole.userData.sourceIndex, weight: hole.userData.massSolar }]
              : [];
          }
          const existingTotal = weights?.reduce((sum, weight) => sum + weight, 0) || anchors.length;
          return anchors.map((anchorIndex, anchorIndexInHole) => ({
            index: anchorIndex,
            weight: (weights?.[anchorIndexInHole] ?? 1) / existingTotal * hole.userData.massSolar
          }));
        });
        const combinedAnchors = new Map();
        anchorEntries.forEach(({ index: anchorIndex, weight }) => {
          combinedAnchors.set(anchorIndex, (combinedAnchors.get(anchorIndex) || 0) + weight);
        });
        mergerAnchors = {
          indices: Array.from(combinedAnchors.keys()),
          weights: Array.from(combinedAnchors.values())
        };
        data = {
          ...data,
          blackHoleMasses: pairMasses,
          triggerSeparation: mergerPair.separation,
          message: `两颗已存在的黑洞相距 ${mergerPair.separation.toFixed(2)} 个星系尺度单位，近遇后被彼此引力俘获`,
          mergerStartScales: [
            blackHoleDisplayScaleAt(mergerPair.left.hole, data.start),
            blackHoleDisplayScaleAt(mergerPair.right.hole, data.start)
          ],
          mergerStartOffsets: [
            new THREE.Vector3().fromArray(mergerPair.left.position).sub(center).toArray(),
            new THREE.Vector3().fromArray(mergerPair.right.position).sub(center).toArray()
          ],
          mergerAnchorSourceIndices: mergerAnchors.indices,
          mergerAnchorWeights: mergerAnchors.weights
        };
        data.simulation = explorer.createTransientSimulation(data, universe, index);
        data.mergerRemnantScale = blackHoleBaseScale(data.simulation.remnantMass);
        data.gasRich = data.simulation.gasRich;
        data.radiatedMassFraction = data.simulation.radiatedMassFraction;
        data.recoilKms = data.simulation.recoilKms;
      }
      const group = new THREE.Group();
      const sourceLocation = mergerPair ? null : pickPosition(data);
      const location = mergerPair
        ? {
            index: mergerAnchors.indices[0],
            position: new THREE.Vector3()
              .fromArray(mergerPair.left.position)
              .multiplyScalar(mergerPair.left.massSolar / (mergerPair.left.massSolar + mergerPair.right.massSolar))
              .addScaledVector(
                new THREE.Vector3().fromArray(mergerPair.right.position),
                mergerPair.right.massSolar / (mergerPair.left.massSolar + mergerPair.right.massSolar)
              )
          }
        : sourceLocation;
      if (!location) return;
      if (data.hostBlackHoleId === 'central' && centralBlackHole) {
        data.tidalApproachOffset = stellarPositionAt(location.index, data.start).toArray();
        group.position.copy(blackHolePositionAt(centralBlackHole, data.start));
      } else {
        group.position.copy(location.position);
      }
      group.visible = false;
      cosmicEventGroup.add(group);
      const profile = impactProfiles[data.type];
      if (profile.directional) {
        data.beamDirection = new THREE.Vector3(explorer.gaussianRandom(random), explorer.gaussianRandom(random), explorer.gaussianRandom(random)).normalize();
        group.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), data.beamDirection);
      }

      const visualFamily = eventVisualFamily(data);
      buildCosmicEventVisual(visualFamily, { data, explorer, group, random });
      const consequences = deriveConsequences(data, location);
      const waveSamples = buildWaveSamples(data, location, index);
      const gravityField = data.visual === 'black-hole-merger'
        ? explorer.createMergerGravityField(starPositions, location.position, {
            seedValue: universe.seedValue,
            eventIndex: index
          })
        : null;
      const transientGravityField = explorer.createTransientGravityField(
        starPositions,
        location.position,
        data.simulation,
        universe.seedValue,
        index
      );
      const civilizationNodeImpacts = deriveCivilizationNodeImpacts(
        data,
        location,
        consequences,
        gravityField,
        index
      );
      const id = `${data.type}-${index}-${universe.seed}`;
      const blackHoleMass = explorer.blackHoleMassFromSimulation(data.simulation);
      if (mergerPair) {
        [mergerPair.left.hole, mergerPair.right.hole].forEach((hole) => {
          hole.userData.handoffStartAt = data.start;
          hole.userData.handoffAt = data.start + data.duration * .08;
          hole.userData.consumedAt = consequences.impactAt;
          hole.userData.mergerEventId = id;
        });
      }
      const sourceDestroyed = profile.sourceDim <= .15
        && data.visual !== 'black-hole-merger';
      if (sourceDestroyed) {
        starDeathThresholds[location.index] = Math.min(
          starDeathThresholds[location.index],
          consequences.impactAt
        );
        if (stellarPopulation) {
          stellarPopulation.deathAt[location.index] = starDeathThresholds[location.index];
          stellarPopulation.deathYears[location.index] = Math.min(
            stellarPopulation.deathYears[location.index],
            explorer.timelinePositionToCosmicYears(consequences.impactAt, universe)
          );
        }
        civilizationSimulation?.habitatStarIndices?.forEach((starIndex, nodeIndex) => {
          if (starIndex === location.index) {
            civilizationSimulation.habitatDeathAt[nodeIndex] = starDeathThresholds[location.index];
          }
        });
        for (let remnantIndex = 0; remnantIndex < remnantDynamics.sourceIndices.length; remnantIndex++) {
          if (remnantDynamics.sourceIndices[remnantIndex] !== location.index) continue;
          // The event owns its explicit compact-remnant visual. Suppress the
          // sampled population point for the same source to avoid a duplicate.
          remnantDynamics.birthAt[remnantIndex] = 1001;
        }
      }
      if (blackHoleMass) {
        // Hand the compact remnant from the short-lived event visual to the
        // long-lived population. Scrubbing now reconstructs the same object on
        // both sides of the event instead of inventing it in the black-hole era.
        data.persistUntil = data.start + data.duration;
        data.persistenceFadeDuration = 8;
        const persistentOffset = mergerPair
          ? group.userData.effect.recoilVector.clone().multiplyScalar(THREE.MathUtils.clamp(
              (data.simulation?.recoilKms || data.recoilKms || 500) / 720,
              .22,
              2.2
            )).toArray()
          : null;
        addBlackHoleRemnant({
          random,
          massSolar: blackHoleMass,
          birthAt: consequences.impactAt,
          visibleAt: mergerPair
            ? data.start + data.duration
            : consequences.visualImpactAt,
          formationDuration: mergerPair ? data.persistenceFadeDuration : 8,
          sourceIndex: mergerPair ? null : location.index,
          anchorSourceIndices: mergerPair ? mergerAnchors.indices : null,
          anchorWeights: mergerPair ? mergerAnchors.weights : null,
          positionOffset: persistentOffset,
          originEventId: id
        });
      }

      cosmicEvents.push({
        ...data,
        ...consequences,
        civilizationNodeImpacts,
        civilizationImpacts: [],
        outcome: consequences.systemOutcome,
        waveSamples,
        gravityField,
        transientGravityField,
        group,
        sourceIndex: location.index,
        id,
        label: data.label
      });
    });
    let galacticCenterSourceIndex = 0;
    let galacticCenterDistance = Infinity;
    for (let starIndex = 0; starIndex < starPositions.length / 3; starIndex++) {
      const offset = starIndex * 3;
      const distance = starPositions[offset] ** 2 + starPositions[offset + 1] ** 2 + starPositions[offset + 2] ** 2;
      if (distance < galacticCenterDistance) {
        galacticCenterDistance = distance;
        galacticCenterSourceIndex = starIndex;
      }
    }
    const rareEvents = explorer.createRareEventPlan({
      universe,
      localGroup,
      stellarPopulation,
      starPositions,
      civilizationData,
      civilizationEvents
    });
    civilizationEvents.push(...rareEvents);
    civilizationEvents.sort((left, right) => left.start - right.start);
    civilizationEvents.forEach((data) => {
      const remnantIndex = Number.isInteger(data.targetNodeIndex)
        ? civilizationSimulation.habitatRemnantIndices[data.targetNodeIndex]
        : null;
      const sourceIndex = Number.isInteger(data.sourceIndex)
        ? data.sourceIndex
        : data.visual === 'galactic-encounter'
          ? galacticCenterSourceIndex
          : remnantDynamics.sourceIndices[remnantIndex];
      if (!Number.isInteger(sourceIndex)) return;
      const sourceOffset = sourceIndex * 3;
      const group = explorer.createCivilizationEventVisual(data);
      group.position.set(
        starPositions[sourceOffset],
        starPositions[sourceOffset + 1],
        starPositions[sourceOffset + 2]
      );
      group.visible = false;
      cosmicEventGroup.add(group);
      cosmicEvents.push({
        ...data,
        group,
        sourceIndex,
        impactPhase: ((data.visualImpactAt ?? data.impactAt) - data.start) / data.duration,
        starImpacts: [],
        waveSamples: null,
        gravityField: null,
        transientGravityField: null
      });
    });
    cosmicEvents.sort((a, b) => a.start - b.start);
    remnantDynamics.firstBirthAt = Math.min(...remnantDynamics.birthAt);

    cosmicEventGroup.rotation.copy(galaxyGroup.rotation);
    cosmicEventGroup.visible = false;
    return cosmicEvents;
  }

  return { buildCosmicEvents };
}
