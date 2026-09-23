import * as THREE from 'three';
import { getPointTexture } from '../textures.js';

function buildExplosiveTransientVisual({ data, explorer, group, random }) {
  const isNova = data.visual === 'nova';
  const isKilonova = data.visual === 'kilonova';
  const photosphereColor = isKilonova ? 0xb89dff : isNova ? 0xffe6ad : 0xffad63;
  const remnantColor = isKilonova ? 0xe0c8ff : isNova ? 0xf8fbff : 0xaed8ff;
  const innerFlash = new THREE.Sprite(new THREE.SpriteMaterial({ map: explorer.makeGlowTexture(), color: 0xffffff, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending }));
  const photosphere = new THREE.Sprite(new THREE.SpriteMaterial({ map: explorer.makeGlowTexture(), color: photosphereColor, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending }));
  const remnant = new THREE.Sprite(new THREE.SpriteMaterial({ map: getPointTexture(), color: remnantColor, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending }));
  remnant.scale.set(.16, .16, 1);

  const simulatedEjectaScale = THREE.MathUtils.clamp(
    Math.sqrt((data.simulation?.ejectaMass || (isNova ? .00002 : 8)) / (isNova ? .00002 : 8)),
    .7,
    1.65
  );
  const ejectaCount = Math.round((isNova ? 360 : 620) * simulatedEjectaScale);
  const ejectaPositions = new Float32Array(ejectaCount * 3);
  const ejectaColors = new Float32Array(ejectaCount * 3);
  const ejectaDirections = new Float32Array(ejectaCount * 3);
  const ejectaVelocity = new Float32Array(ejectaCount);
  const ejectaDelay = new Float32Array(ejectaCount);
  const hot = new THREE.Color(isKilonova ? 0xd9f3ff : isNova ? 0xfff8d8 : 0xfff0c7);
  const cool = new THREE.Color(isKilonova ? 0x8d4fd1 : isNova ? 0xffb568 : 0xff4b32);
  for (let i = 0; i < ejectaCount; i++) {
    const theta = random() * Math.PI * 2;
    const phi = Math.acos(2 * random() - 1);
    const clustered = 1 + Math.sin(theta * 5 + phi * 3) * .18 + (random() - .5) * .24;
    const direction = new THREE.Vector3(
      Math.sin(phi) * Math.cos(theta) * clustered,
      Math.cos(phi) * (isKilonova ? .34 : 1.08 + random() * .34),
      Math.sin(phi) * Math.sin(theta) * clustered
    ).normalize();
    ejectaDirections.set([direction.x, direction.y, direction.z], i * 3);
    const simulatedVelocityScale = isKilonova
      ? THREE.MathUtils.clamp((data.simulation?.ejectaVelocityC || .2) / .18, .72, 1.55)
      : isNova
        ? THREE.MathUtils.clamp((data.simulation?.ejectaVelocityKms || 1800) / 1800, .64, 1.7)
        : THREE.MathUtils.clamp((data.simulation?.ejectaVelocityKms || 9000) / 9000, .62, 1.72);
    const velocityScale = isNova ? .46 * simulatedVelocityScale : simulatedVelocityScale;
    ejectaVelocity[i] = (.38 + Math.pow(random(), .48) * 1.45 + Math.abs(direction.y) * .22) * velocityScale;
    ejectaDelay[i] = Math.pow(random(), 2.4) * .22;
    const color = hot.clone().lerp(cool, Math.pow(random(), .52));
    ejectaColors.set([color.r, color.g, color.b], i * 3);
  }
  const ejectaGeometry = new THREE.BufferGeometry();
  ejectaGeometry.setAttribute('position', new THREE.BufferAttribute(ejectaPositions, 3));
  ejectaGeometry.setAttribute('color', new THREE.BufferAttribute(ejectaColors, 3));
  const ejecta = new THREE.Points(ejectaGeometry, new THREE.PointsMaterial({ size: .1, map: getPointTexture(), alphaTest: .008, vertexColors: true, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending }));

  const shellCount = Math.round((isNova ? 160 : 280) * Math.min(1.45, simulatedEjectaScale));
  const shellPositions = new Float32Array(shellCount * 3);
  const shellDirections = new Float32Array(shellCount * 3);
  const shellNoise = new Float32Array(shellCount);
  for (let i = 0; i < shellCount; i++) {
    const theta = random() * Math.PI * 2;
    const y = 2 * random() - 1;
    const radius = Math.sqrt(1 - y * y);
    shellDirections.set([Math.cos(theta) * radius, y, Math.sin(theta) * radius], i * 3);
    shellNoise[i] = random() * Math.PI * 2;
  }
  const shellGeometry = new THREE.BufferGeometry();
  shellGeometry.setAttribute('position', new THREE.BufferAttribute(shellPositions, 3));
  const shellColor = isKilonova ? 0xa57cff : isNova ? 0xffe0a0 : 0xffd4a0;
  const shell = new THREE.Points(shellGeometry, new THREE.PointsMaterial({ color: shellColor, size: isNova ? .052 : .072, map: getPointTexture(), alphaTest: .01, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending }));

  let polarJets = null;
  let gravityWave = null;
  if (isKilonova) {
    const jetLength = 2.6 + (data.simulation?.ejectaVelocityC || .2) * 4.2;
    const jetGeometry = new THREE.BufferGeometry();
    jetGeometry.setAttribute('position', new THREE.Float32BufferAttribute([
      0, -.12, 0, 0, -jetLength, 0,
      0, .12, 0, 0, jetLength, 0
    ], 3));
    polarJets = new THREE.LineSegments(jetGeometry, new THREE.LineBasicMaterial({ color: 0xc9efff, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending }));
    gravityWave = new THREE.Sprite(new THREE.SpriteMaterial({ map: explorer.makeRingTexture(), color: 0xc4b4ff, transparent: true, opacity: 0, depthTest: false, depthWrite: false, blending: THREE.AdditiveBlending }));
  }

  group.add(photosphere, innerFlash, ejecta, shell, remnant);
  if (polarJets) group.add(polarJets);
  if (gravityWave) group.add(gravityWave);
  group.userData.effect = { innerFlash, photosphere, remnant, ejecta, ejectaDirections, ejectaVelocity, ejectaDelay, shell, shellDirections, shellNoise, polarJets, gravityWave };
}

function buildTidalDisruptionVisual({ data, explorer, group, random }) {
  const starCore = new THREE.Sprite(new THREE.SpriteMaterial({ map: getPointTexture(), color: 0xfff1c9, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending }));
  starCore.scale.set(.28, .28, 1);
  const flare = new THREE.Sprite(new THREE.SpriteMaterial({ map: explorer.makeGlowTexture(), color: 0x8eeaff, transparent: true, opacity: 0, depthTest: false, depthWrite: false, blending: THREE.AdditiveBlending }));
  const disk = new THREE.Sprite(new THREE.SpriteMaterial({ map: explorer.makeRingTexture(), color: 0x6bdcff, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending, rotation: random() * Math.PI }));
  disk.scale.set(1.5, .48, 1);

  const debrisCount = 480;
  const debrisPositions = new Float32Array(debrisCount * 3);
  const debrisOffsets = new Float32Array(debrisCount);
  const debrisNoise = new Float32Array(debrisCount);
  const debrisColors = new Float32Array(debrisCount * 3);
  const debrisHot = new THREE.Color(0xf9f1c7);
  const debrisCool = new THREE.Color(0x55cfff);
  for (let i = 0; i < debrisCount; i++) {
    const bound = random() < (data.simulation?.boundFraction || .5);
    debrisOffsets[i] = bound ? -random() : random();
    debrisNoise[i] = random() * Math.PI * 2;
    const color = debrisHot.clone().lerp(debrisCool, Math.pow(random(), .62));
    debrisColors.set([color.r, color.g, color.b], i * 3);
  }
  const debrisGeometry = new THREE.BufferGeometry();
  debrisGeometry.setAttribute('position', new THREE.BufferAttribute(debrisPositions, 3));
  debrisGeometry.setAttribute('color', new THREE.BufferAttribute(debrisColors, 3));
  const debris = new THREE.Points(debrisGeometry, new THREE.PointsMaterial({ size: .075, map: getPointTexture(), alphaTest: .008, vertexColors: true, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending }));

  group.add(flare, disk, debris, starCore);
  group.userData.effect = { starCore, flare, disk, debris, debrisOffsets, debrisNoise };
}

function buildStellarFlareVisual({ data, explorer, group, random }) {
  const starCore = new THREE.Sprite(new THREE.SpriteMaterial({ map: getPointTexture(), color: 0xffb75a, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending }));
  const halo = new THREE.Sprite(new THREE.SpriteMaterial({ map: explorer.makeGlowTexture(), color: 0xff7a32, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending }));
  const shock = new THREE.Sprite(new THREE.SpriteMaterial({ map: explorer.makeRingTexture(), color: 0xffd27b, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending }));
  starCore.scale.set(.25, .25, 1);

  const loops = [];
  for (let loopIndex = 0; loopIndex < 3; loopIndex++) {
    const points = [];
    for (let i = 0; i <= 72; i++) {
      const angle = i / 72 * Math.PI;
      points.push(new THREE.Vector3(
        Math.cos(angle) * (.42 + loopIndex * .16),
        Math.sin(angle) * (.68 + loopIndex * .18),
        Math.sin(angle * 2) * .06
      ));
    }
    const loop = new THREE.Line(new THREE.BufferGeometry().setFromPoints(points), new THREE.LineBasicMaterial({ color: loopIndex === 1 ? 0xfff0a3 : 0xff9b52, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending }));
    loop.rotation.y = loopIndex * 1.86 + random() * .35;
    loops.push(loop);
  }

  const particleCount = 320;
  const particlePositions = new Float32Array(particleCount * 3);
  const particleDirections = new Float32Array(particleCount * 3);
  for (let i = 0; i < particleCount; i++) {
    const theta = random() * Math.PI * 2;
    const y = explorer.randomBetween(random, -.28, 1);
    const radial = Math.sqrt(1 - Math.min(1, y * y));
    particleDirections.set([Math.cos(theta) * radial, y, Math.sin(theta) * radial], i * 3);
  }
  const particleGeometry = new THREE.BufferGeometry();
  particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
  const particles = new THREE.Points(particleGeometry, new THREE.PointsMaterial({ color: 0xffc970, size: .06, map: getPointTexture(), alphaTest: .008, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending }));

  group.add(halo, shock, starCore, particles, ...loops);
  group.userData.effect = { starCore, halo, shock, loops, particles, particleDirections };
}

function buildStellarCollapseVisual({ data, explorer, group, random }) {
  const starCore = new THREE.Sprite(new THREE.SpriteMaterial({ map: getPointTexture(), color: 0xffa45b, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending }));
  const shroud = new THREE.Sprite(new THREE.SpriteMaterial({ map: explorer.makeGlowTexture(), color: 0x9a5538, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending }));
  const remnantHole = explorer.createBlackHoleVisual({
    color: 0x9d6b58,
    tilt: -.18,
    phase: random() * Math.PI * 2,
    visualScale: .72,
    intensity: 0
  });
  remnantHole.userData.spinDirection = -1;
  remnantHole.visible = false;

  const dustCount = Math.round(180 + (data.simulation?.ejectedEnvelopeFraction || .08) * 920);
  const dustPositions = new Float32Array(dustCount * 3);
  const dustDirections = new Float32Array(dustCount * 3);
  for (let i = 0; i < dustCount; i++) {
    const theta = random() * Math.PI * 2;
    const y = random() * 2 - 1;
    const radial = Math.sqrt(1 - y * y);
    dustDirections.set([Math.cos(theta) * radial, y, Math.sin(theta) * radial], i * 3);
  }
  const dustGeometry = new THREE.BufferGeometry();
  dustGeometry.setAttribute('position', new THREE.BufferAttribute(dustPositions, 3));
  const dust = new THREE.Points(dustGeometry, new THREE.PointsMaterial({ color: 0x8c533b, size: .065, map: getPointTexture(), alphaTest: .008, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending }));

  group.add(shroud, dust, starCore, remnantHole);
  group.userData.effect = { starCore, shroud, remnantHole, dust, dustDirections };
}

function buildPulsarVisual({ data, explorer, group, random }) {
  const core = new THREE.Sprite(new THREE.SpriteMaterial({ map: getPointTexture(), color: 0xf4fbff, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending }));
  const halo = new THREE.Sprite(new THREE.SpriteMaterial({ map: explorer.makeGlowTexture(), color: 0x4bb9ff, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending }));
  const nebula = new THREE.Sprite(new THREE.SpriteMaterial({ map: explorer.makeGlowTexture(), color: 0x1676b8, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending, rotation: random() * Math.PI }));
  const sweepGlow = new THREE.Sprite(new THREE.SpriteMaterial({ map: explorer.makeGlowTexture(), color: 0xc9edff, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending }));
  core.scale.set(.18, .18, 1);
  nebula.scale.set(1.45, .58, 1);

  const rotor = new THREE.Group();
  rotor.rotation.z = .58 + random() * .32;
  const jetPowerScale = data.simulation?.model === 'collapsar-jet'
    ? THREE.MathUtils.clamp(data.simulation.lorentzFactor / 260, .7, 1.75)
    : data.simulation?.model === 'quasar-duty-cycle'
      ? THREE.MathUtils.clamp(data.simulation.jetLorentzFactor / 8, .7, 1.7)
      : 1;
  const jetCount = Math.round(420 * jetPowerScale);
  const jetPositions = new Float32Array(jetCount * 3);
  const jetColors = new Float32Array(jetCount * 3);
  for (let i = 0; i < jetCount; i++) {
    const side = i % 2 ? 1 : -1;
    const distance = .1 + Math.pow(random(), .66) * 2.6 * jetPowerScale;
    const width = .012 + distance * .014;
    const angle = random() * Math.PI * 2;
    jetPositions[i * 3] = Math.cos(angle) * width * random();
    jetPositions[i * 3 + 1] = side * distance;
    jetPositions[i * 3 + 2] = Math.sin(angle) * width * random();
    const brightness = .35 + Math.pow(1 - distance / 2.8, .45) * .65;
    jetColors.set([.38 * brightness, .76 * brightness, brightness], i * 3);
  }
  const jetGeometry = new THREE.BufferGeometry();
  jetGeometry.setAttribute('position', new THREE.BufferAttribute(jetPositions, 3));
  jetGeometry.setAttribute('color', new THREE.BufferAttribute(jetColors, 3));
  const jets = new THREE.Points(jetGeometry, new THREE.PointsMaterial({ size: .09, map: getPointTexture(), alphaTest: .008, vertexColors: true, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending }));
  rotor.add(jets);

  const fieldLines = [];
  for (let lineIndex = 0; lineIndex < 4; lineIndex++) {
    const points = [];
    const stretch = .5 + lineIndex * .18;
    for (let i = 0; i <= 80; i++) {
      const angle = i / 80 * Math.PI * 2;
      points.push(new THREE.Vector3(Math.cos(angle) * stretch, Math.sin(angle) * stretch * .34, Math.sin(angle * 2) * .08));
    }
    const field = new THREE.Line(new THREE.BufferGeometry().setFromPoints(points), new THREE.LineBasicMaterial({ color: 0x72cfff, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending }));
    field.rotation.set(random() * Math.PI, random() * Math.PI, random() * Math.PI);
    fieldLines.push(field);
    rotor.add(field);
  }

  const knots = [];
  for (let i = 0; i < 8; i++) {
    const knot = new THREE.Sprite(new THREE.SpriteMaterial({ map: getPointTexture(), color: 0x9bddff, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending }));
    knot.scale.set(.11, .11, 1);
    knot.userData.offset = i / 8;
    knot.userData.side = i % 2 ? 1 : -1;
    knots.push(knot);
    rotor.add(knot);
  }
  group.add(nebula, halo, sweepGlow, core, rotor);
  group.userData.effect = { core, halo, nebula, sweepGlow, rotor, jets, fieldLines, knots, jetPowerScale };
}

function buildBlackHoleMergerVisual({ data, explorer, group, random }) {
  const makeHole = (color, direction) => {
    const hole = explorer.createBlackHoleVisual({
      color,
      tilt: explorer.randomBetween(random, -.28, .28),
      phase: random() * Math.PI * 2,
      visualScale: 1,
      intensity: 0
    });
    hole.userData.spinDirection = direction;
    return hole;
  };
  const orbitalPlane = new THREE.Group();
  const usesExistingPair = Boolean(data.mergerStartOffsets);
  if (!usesExistingPair) orbitalPlane.rotation.set(.76, .18, .24);
  const holeA = makeHole(0xffba70, 1);
  const holeB = makeHole(0xa7d7ff, -1);
  const remnantHole = makeHole(0xffd9ad, 1);
  holeA.scale.setScalar(data.mergerStartScales?.[0] ?? 1);
  holeB.scale.setScalar(data.mergerStartScales?.[1] ?? 1);
  remnantHole.scale.setScalar(data.mergerRemnantScale ?? 1);
  remnantHole.visible = false;

  const makeTrail = (color) => {
    const positions = new Float32Array(84 * 3);
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return new THREE.Line(geometry, new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending }));
  };
  const trailA = makeTrail(0xff9b55);
  const trailB = makeTrail(0x79bfff);
  orbitalPlane.add(trailA, trailB, holeA, holeB, remnantHole);

  const mergerGlow = new THREE.Sprite(new THREE.SpriteMaterial({ map: explorer.makeGlowTexture(), color: data.gasRich ? 0xffe2b5 : 0xdceaff, transparent: true, opacity: 0, depthTest: false, depthWrite: false, blending: THREE.AdditiveBlending }));
  const gasEcho = new THREE.Sprite(new THREE.SpriteMaterial({ map: explorer.makeRingTexture(), color: 0xffb46f, transparent: true, opacity: 0, depthTest: false, depthWrite: false, blending: THREE.AdditiveBlending }));
  gasEcho.visible = data.gasRich;
  const waveHalos = [0x9bc8ff, 0xd2b9ff, 0x79b7ff].map((color) => new THREE.Sprite(new THREE.SpriteMaterial({
    map: explorer.makeRingTexture(),
    color,
    transparent: true,
    opacity: 0,
    depthTest: false,
    depthWrite: false,
    blending: THREE.AdditiveBlending
  })));
  const wavefronts = [];
  for (let waveIndex = 0; waveIndex < 6; waveIndex++) {
    const points = [];
    for (let i = 0; i < 160; i++) {
      const angle = i / 160 * Math.PI * 2;
      const quadrupole = 1 + Math.cos(angle * 2 + waveIndex * .7) * .065;
      points.push(new THREE.Vector3(Math.cos(angle) * quadrupole, Math.sin(angle) * quadrupole, Math.sin(angle * 2 + waveIndex) * .055));
    }
    const wave = new THREE.LineLoop(new THREE.BufferGeometry().setFromPoints(points), new THREE.LineBasicMaterial({ color: waveIndex % 3 === 1 ? 0xd8c3ff : 0x8fc6ff, transparent: true, opacity: 0, depthTest: false, depthWrite: false, blending: THREE.AdditiveBlending }));
    wave.rotation.set(.34 + waveIndex * .47, .2 + waveIndex * .39, waveIndex * .76);
    wavefronts.push(wave);
    group.add(wave);
  }

  const waveParticleCount = 520;
  const waveParticles = new Float32Array(waveParticleCount * 3);
  const waveDirections = new Float32Array(waveParticleCount * 3);
  const waveColors = new Float32Array(waveParticleCount * 3);
  const coolWave = new THREE.Color(0x79bfff);
  const warmWave = new THREE.Color(0xe0cbff);
  for (let particle = 0; particle < waveParticleCount; particle++) {
    const azimuth = random() * Math.PI * 2;
    const vertical = explorer.randomBetween(random, -1, 1);
    const horizontal = Math.sqrt(1 - vertical * vertical);
    waveDirections.set([Math.cos(azimuth) * horizontal, vertical, Math.sin(azimuth) * horizontal], particle * 3);
    const particleColor = coolWave.clone().lerp(warmWave, random());
    waveColors.set([particleColor.r, particleColor.g, particleColor.b], particle * 3);
  }
  const waveParticleGeometry = new THREE.BufferGeometry();
  waveParticleGeometry.setAttribute('position', new THREE.BufferAttribute(waveParticles, 3));
  waveParticleGeometry.setAttribute('color', new THREE.BufferAttribute(waveColors, 3));
  const waveDust = new THREE.Points(waveParticleGeometry, new THREE.PointsMaterial({ size: .075, map: getPointTexture(), alphaTest: .008, vertexColors: true, transparent: true, opacity: 0, depthTest: false, depthWrite: false, blending: THREE.AdditiveBlending }));

  const recoilGeometry = new THREE.BufferGeometry();
  recoilGeometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(6), 3));
  const recoilTrail = new THREE.Line(recoilGeometry, new THREE.LineBasicMaterial({ color: 0xffd4aa, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending }));
  const recoilVector = new THREE.Vector3(explorer.gaussianRandom(random), explorer.gaussianRandom(random) * .45, explorer.gaussianRandom(random)).normalize();
  group.add(waveDust, ...waveHalos, gasEcho, orbitalPlane, mergerGlow, recoilTrail);
  group.userData.effect = {
    orbitalPlane, holeA, holeB, remnantHole, trailA, trailB,
    mergerGlow, gasEcho, waveHalos, wavefronts, waveDust,
    waveDirections, recoilTrail, recoilVector, gasRich: data.gasRich,
    mergerStartOffsets: data.mergerStartOffsets,
    remnantScale: data.mergerRemnantScale
  };
}

export const cosmicEventVisualBuilderRegistry = new Map([
  ['explosive-transient', buildExplosiveTransientVisual],
  ['tidal-disruption', buildTidalDisruptionVisual],
  ['stellar-flare', buildStellarFlareVisual],
  ['stellar-collapse', buildStellarCollapseVisual],
  ['pulsar', buildPulsarVisual],
  ['black-hole-merger', buildBlackHoleMergerVisual]
]);

export function buildCosmicEventVisual(family, context) {
  cosmicEventVisualBuilderRegistry.get(family)?.(context);
}

