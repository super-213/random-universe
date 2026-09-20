import * as THREE from 'three';
import { getPointTexture, makeGlowTexture, makeRingTexture } from './textures.js';

const additiveMaterial = (options) => new THREE.SpriteMaterial({
  transparent: true,
  opacity: 0,
  depthWrite: false,
  blending: THREE.AdditiveBlending,
  ...options
});

function createProbeSwarm(color) {
  const count = 180;
  const positions = new Float32Array(count * 3);
  const directions = new Float32Array(count * 3);
  for (let index = 0; index < count; index++) {
    const angle = index * 2.399963 + (index % 7) * .07;
    const vertical = ((index * 37) % count) / (count - 1) * 2 - 1;
    const radial = Math.sqrt(1 - vertical * vertical);
    directions.set([Math.cos(angle) * radial, vertical, Math.sin(angle) * radial], index * 3);
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  const swarm = new THREE.Points(geometry, new THREE.PointsMaterial({
    color,
    size: .055,
    map: getPointTexture(),
    alphaTest: .008,
    transparent: true,
    opacity: 0,
    depthWrite: false,
    blending: THREE.AdditiveBlending
  }));
  return { swarm, directions };
}

export function createCivilizationEventVisual(event) {
  const group = new THREE.Group();
  const color = new THREE.Color(event.color);
  const glow = new THREE.Sprite(additiveMaterial({ map: makeGlowTexture(), color }));
  const ring = new THREE.Sprite(additiveMaterial({ map: makeRingTexture(), color }));
  group.add(glow, ring);
  const effect = { glow, ring };

  if (event.visual === 'signal-wave') {
    const echoRings = [0, 1, 2].map((index) => {
      const echo = new THREE.Sprite(additiveMaterial({ map: makeRingTexture(), color }));
      echo.userData.offset = index / 3;
      group.add(echo);
      return echo;
    });
    effect.echoRings = echoRings;
  } else if (event.visual === 'probe-swarm') {
    const { swarm, directions } = createProbeSwarm(color);
    group.add(swarm);
    effect.swarm = swarm;
    effect.directions = directions;
  } else if (event.visual === 'megastructure') {
    const shells = [
      { radius: .34, tilt: [.28, .1, 0] },
      { radius: .48, tilt: [-.36, .42, .18] },
      { radius: .63, tilt: [.14, -.48, -.22] }
    ].map(({ radius, tilt }) => {
      const shell = new THREE.LineSegments(
        new THREE.EdgesGeometry(new THREE.TorusGeometry(radius, .012, 3, 72)),
        new THREE.LineBasicMaterial({
          color,
          transparent: true,
          opacity: 0,
          depthWrite: false,
          blending: THREE.AdditiveBlending
        })
      );
      shell.rotation.set(...tilt);
      group.add(shell);
      return shell;
    });
    effect.shells = shells;
  } else if (event.visual === 'civilization-fracture') {
    const geometry = new THREE.BufferGeometry();
    const positions = [];
    for (let index = 0; index < 14; index++) {
      const angle = index / 14 * Math.PI * 2;
      positions.push(0, 0, 0, Math.cos(angle) * .9, Math.sin(angle * 3) * .24, Math.sin(angle) * .9);
    }
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    const fractures = new THREE.LineSegments(geometry, new THREE.LineBasicMaterial({
      color,
      transparent: true,
      opacity: 0,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    }));
    group.add(fractures);
    effect.fractures = fractures;
  } else if (event.visual === 'knowledge-ark') {
    const archive = new THREE.IcosahedronGeometry(.24, 1);
    const archiveCore = new THREE.LineSegments(
      new THREE.EdgesGeometry(archive),
      new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0, depthWrite: false })
    );
    group.add(archiveCore);
    effect.archiveCore = archiveCore;
  } else if (event.visual === 'uplift') {
    const strands = [-1, 1].map((side) => {
      const points = [];
      for (let index = 0; index <= 64; index++) {
        const progress = index / 64;
        const angle = progress * Math.PI * 4 + (side < 0 ? Math.PI : 0);
        points.push(new THREE.Vector3(
          Math.cos(angle) * .24,
          (progress - .5) * 1.25,
          Math.sin(angle) * .24
        ));
      }
      const strand = new THREE.Line(
        new THREE.BufferGeometry().setFromPoints(points),
        new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending })
      );
      group.add(strand);
      return strand;
    });
    effect.strands = strands;
  }

  group.userData.effect = effect;
  return group;
}

export function updateCivilizationEventVisual(event, phase, persistence = 0) {
  const effect = event.group.userData.effect;
  const reveal = THREE.MathUtils.smoothstep(phase, 0, .12);
  const fade = 1 - THREE.MathUtils.smoothstep(phase, .78, 1);
  const intensity = Math.max(persistence, reveal * fade);
  effect.glow.material.opacity = intensity * .48;
  effect.glow.scale.setScalar(.38 + phase * 1.5 + persistence * .7);
  effect.ring.material.opacity = intensity * .32;
  effect.ring.scale.setScalar(.34 + Math.pow(Math.max(0, phase), .7) * 2.2);

  if (effect.echoRings) {
    effect.echoRings.forEach((ring, index) => {
      const travel = Math.max(0, Math.min(1, phase * 1.45 - index * .16));
      ring.scale.setScalar(.2 + travel * 4.8);
      ring.material.opacity = Math.sin(travel * Math.PI) * .2;
    });
  }
  if (effect.swarm) {
    const positions = effect.swarm.geometry.attributes.position.array;
    const spread = .08 + Math.pow(Math.max(0, phase), .72) * 2.3;
    for (let index = 0; index < effect.directions.length / 3; index++) {
      const offset = index * 3;
      const stagger = .34 + (index % 17) / 17 * .66;
      positions[offset] = effect.directions[offset] * spread * stagger;
      positions[offset + 1] = effect.directions[offset + 1] * spread * stagger;
      positions[offset + 2] = effect.directions[offset + 2] * spread * stagger;
    }
    effect.swarm.geometry.attributes.position.needsUpdate = true;
    effect.swarm.material.opacity = intensity * .84;
  }
  if (effect.shells) {
    effect.shells.forEach((shell, index) => {
      shell.material.opacity = Math.max(persistence * .38, reveal * (.34 - index * .055));
      shell.scale.setScalar(.5 + reveal * .5);
    });
  }
  if (effect.fractures) {
    effect.fractures.material.opacity = intensity * .58;
    effect.fractures.scale.setScalar(.25 + phase * 1.35);
  }
  if (effect.archiveCore) {
    effect.archiveCore.material.opacity = Math.max(persistence * .55, intensity * .8);
    effect.archiveCore.scale.setScalar(.55 + reveal * .45);
  }
  if (effect.strands) {
    effect.strands.forEach((strand) => { strand.material.opacity = intensity * .64; });
    effect.strands[0].scale.setScalar(.7 + reveal * .3);
    effect.strands[1].scale.setScalar(.7 + reveal * .3);
  }
}

export function animateCivilizationEventVisual(event, now) {
  const effect = event.group.userData.effect;
  effect.ring.material.rotation = now * .00012;
  if (effect.swarm) effect.swarm.rotation.y = now * .00024;
  effect.shells?.forEach((shell, index) => {
    shell.rotation.y += .0025 + index * .0011;
  });
  if (effect.archiveCore) {
    effect.archiveCore.rotation.x = now * .00019;
    effect.archiveCore.rotation.y = now * .00027;
  }
  effect.strands?.forEach((strand, index) => {
    strand.rotation.y = now * (index ? -.00034 : .00034);
  });
}
