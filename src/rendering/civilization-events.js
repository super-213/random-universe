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
  } else if (event.visual === 'orbital-debris') {
    const count = 120;
    const positions = new Float32Array(count * 3);
    const debrisDirections = new Float32Array(count * 3);
    for (let index = 0; index < count; index++) {
      const angle = index / count * Math.PI * 2 + (index % 9) * .026;
      const radius = .48 + (index % 13) / 13 * .3;
      debrisDirections.set([
        Math.cos(angle) * radius,
        ((index * 17) % 23) / 23 * .22 - .11,
        Math.sin(angle) * radius
      ], index * 3);
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const debris = new THREE.Points(geometry, new THREE.PointsMaterial({
      color,
      size: .045,
      map: getPointTexture(),
      alphaTest: .01,
      transparent: true,
      opacity: 0,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    }));
    debris.rotation.x = .42;
    group.add(debris);
    effect.debris = debris;
    effect.debrisDirections = debrisDirections;
  } else if (event.visual === 'terraforming') {
    const planet = new THREE.LineSegments(
      new THREE.EdgesGeometry(new THREE.SphereGeometry(.34, 14, 9)),
      new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0, depthWrite: false })
    );
    const atmosphere = new THREE.Sprite(additiveMaterial({ map: makeGlowTexture(), color }));
    atmosphere.scale.setScalar(.9);
    group.add(atmosphere, planet);
    effect.planet = planet;
    effect.atmosphere = atmosphere;
  } else if (event.visual === 'digital-migration') {
    const lattice = new THREE.LineSegments(
      new THREE.EdgesGeometry(new THREE.BoxGeometry(.72, .72, .72, 2, 2, 2)),
      new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending })
    );
    const innerLattice = new THREE.LineSegments(
      new THREE.EdgesGeometry(new THREE.OctahedronGeometry(.28, 0)),
      lattice.material.clone()
    );
    group.add(lattice, innerLattice);
    effect.lattice = lattice;
    effect.innerLattice = innerLattice;
  } else if (event.visual === 'precursor-ruins') {
    const ruin = new THREE.LineSegments(
      new THREE.EdgesGeometry(new THREE.TetrahedronGeometry(.52, 1)),
      new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending })
    );
    ruin.scale.set(1, 1.6, 1);
    group.add(ruin);
    effect.ruin = ruin;
  } else if (event.visual === 'information-plague') {
    const positions = [];
    for (let index = 0; index < 20; index++) {
      const angle = index / 20 * Math.PI * 2;
      const nextAngle = ((index * 7 + 3) % 20) / 20 * Math.PI * 2;
      positions.push(
        Math.cos(angle) * .62,
        Math.sin(angle * 3) * .24,
        Math.sin(angle) * .62,
        Math.cos(nextAngle) * .62,
        Math.sin(nextAngle * 3) * .24,
        Math.sin(nextAngle) * .62
      );
    }
    const networkGeometry = new THREE.BufferGeometry();
    networkGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    const infectedNetwork = new THREE.LineSegments(networkGeometry, new THREE.LineBasicMaterial({
      color,
      transparent: true,
      opacity: 0,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    }));
    group.add(infectedNetwork);
    effect.infectedNetwork = infectedNetwork;
  } else if (event.visual === 'relativistic-divergence') {
    const trails = [-1, 1].map((side) => {
      const points = [];
      for (let index = 0; index <= 40; index++) {
        const progress = index / 40;
        points.push(new THREE.Vector3(
          side * progress * 1.25,
          Math.sin(progress * Math.PI * 3) * .1,
          (progress - .5) * .28
        ));
      }
      const trail = new THREE.Line(
        new THREE.BufferGeometry().setFromPoints(points),
        new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending })
      );
      group.add(trail);
      return trail;
    });
    effect.relativisticTrails = trails;
  } else if (event.visual === 'biosphere-chain') {
    const biosphereShells = [0, 1, 2, 3].map((index) => {
      const shell = new THREE.LineSegments(
        new THREE.EdgesGeometry(new THREE.SphereGeometry(.2 + index * .1, 10 + index * 2, 6)),
        new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending })
      );
      shell.userData.stage = index;
      group.add(shell);
      return shell;
    });
    effect.biosphereShells = biosphereShells;
  } else if (event.visual === 'light-cone') {
    const lightCones = [-1, 1].map((direction) => {
      const cone = new THREE.LineSegments(
        new THREE.EdgesGeometry(new THREE.ConeGeometry(.62, 1.7, 18, 1, true)),
        new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending })
      );
      cone.position.y = direction * .82;
      cone.rotation.z = direction < 0 ? Math.PI : 0;
      group.add(cone);
      return cone;
    });
    effect.lightCones = lightCones;
  } else if (event.visual === 'stellar-engine') {
    const engineRings = [0, 1].map((index) => {
      const engineRing = new THREE.LineSegments(
        new THREE.EdgesGeometry(new THREE.TorusGeometry(.48 + index * .2, .018, 4, 72)),
        new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending })
      );
      engineRing.rotation.set(.45 + index * .4, index * .7, .2);
      group.add(engineRing);
      return engineRing;
    });
    const beamGeometry = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(-1.5, 0, 0),
      new THREE.Vector3(1.5, 0, 0),
      new THREE.Vector3(0, -1.5, 0),
      new THREE.Vector3(0, 1.5, 0)
    ]);
    const engineBeams = new THREE.LineSegments(beamGeometry, new THREE.LineBasicMaterial({
      color,
      transparent: true,
      opacity: 0,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    }));
    group.add(engineBeams);
    effect.engineRings = engineRings;
    effect.engineBeams = engineBeams;
  } else if (event.visual === 'galactic-encounter') {
    const companion = new THREE.Sprite(additiveMaterial({ map: makeGlowTexture(), color }));
    const tidalRing = new THREE.Sprite(additiveMaterial({ map: makeRingTexture(), color }));
    companion.position.set(4.2, .5, -1.6);
    companion.scale.setScalar(2.4);
    tidalRing.scale.setScalar(9);
    group.add(companion, tidalRing);
    effect.companion = companion;
    effect.tidalRing = tidalRing;
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
  if (effect.debris) {
    const positions = effect.debris.geometry.attributes.position.array;
    const disruption = .25 + reveal * 1.25;
    for (let index = 0; index < effect.debrisDirections.length / 3; index++) {
      const offset = index * 3;
      positions[offset] = effect.debrisDirections[offset] * disruption;
      positions[offset + 1] = effect.debrisDirections[offset + 1] * disruption;
      positions[offset + 2] = effect.debrisDirections[offset + 2] * disruption;
    }
    effect.debris.geometry.attributes.position.needsUpdate = true;
    effect.debris.material.opacity = intensity * .82;
  }
  if (effect.planet) {
    effect.planet.material.opacity = intensity * .7;
    effect.planet.scale.setScalar(.72 + reveal * .28);
    effect.atmosphere.material.opacity = intensity * .34;
  }
  if (effect.lattice) {
    effect.lattice.material.opacity = intensity * .58;
    effect.innerLattice.material.opacity = intensity * .85;
    effect.lattice.scale.setScalar(.5 + reveal * .5);
  }
  if (effect.ruin) {
    effect.ruin.material.opacity = intensity * .72;
    effect.ruin.scale.setScalar(.52 + reveal * .48);
    effect.ruin.scale.y *= 1.6;
  }
  if (effect.infectedNetwork) {
    effect.infectedNetwork.material.opacity = intensity * (.32 + Math.sin(phase * Math.PI * 7) * .2);
    effect.infectedNetwork.scale.setScalar(.35 + reveal * .85);
  }
  if (effect.relativisticTrails) {
    effect.relativisticTrails.forEach((trail) => {
      trail.material.opacity = intensity * .72;
      trail.scale.setScalar(.32 + reveal * .68);
    });
  }
  if (effect.biosphereShells) {
    effect.biosphereShells.forEach((shell, index) => {
      const stageReveal = THREE.MathUtils.smoothstep(phase, index * .16, index * .16 + .22);
      shell.material.opacity = stageReveal * fade * (.62 - index * .08);
      shell.scale.setScalar(.58 + stageReveal * .42);
    });
  }
  if (effect.lightCones) {
    effect.lightCones.forEach((cone) => {
      cone.material.opacity = intensity * .34;
      cone.scale.setScalar(.3 + reveal * .7);
    });
  }
  if (effect.engineRings) {
    effect.engineRings.forEach((engineRing, index) => {
      engineRing.material.opacity = Math.max(persistence * .42, intensity * (.68 - index * .14));
      engineRing.scale.setScalar(.45 + reveal * .55);
    });
    effect.engineBeams.material.opacity = intensity * .44;
    effect.engineBeams.scale.setScalar(.4 + reveal * .6);
  }
  if (effect.companion) {
    effect.glow.scale.setScalar(6 + phase * 5);
    effect.glow.material.opacity = intensity * .16;
    effect.ring.scale.setScalar(4 + phase * 8);
    effect.ring.material.opacity = intensity * .16;
    effect.companion.material.opacity = intensity * .42;
    effect.tidalRing.material.opacity = intensity * .2;
    effect.tidalRing.scale.setScalar(5 + reveal * 7);
    effect.companion.position.x = 5.2 - phase * 3.8;
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
  if (effect.debris) effect.debris.rotation.y = now * .00022;
  if (effect.planet) effect.planet.rotation.y = now * .00018;
  if (effect.lattice) {
    effect.lattice.rotation.x = now * .00016;
    effect.lattice.rotation.y = now * .00024;
    effect.innerLattice.rotation.y = now * -.00032;
  }
  if (effect.ruin) effect.ruin.rotation.y = now * .0002;
  if (effect.infectedNetwork) effect.infectedNetwork.rotation.y = now * -.00026;
  effect.relativisticTrails?.forEach((trail, index) => {
    trail.rotation.z = Math.sin(now * .0008 + index * Math.PI) * .08;
  });
  effect.biosphereShells?.forEach((shell, index) => {
    shell.rotation.y = now * (.00012 + index * .00004) * (index % 2 ? -1 : 1);
  });
  effect.lightCones?.forEach((cone, index) => {
    cone.rotation.y = now * (index ? -.00014 : .00014);
  });
  effect.engineRings?.forEach((engineRing, index) => {
    engineRing.rotation.y += .0028 + index * .0014;
  });
  if (effect.engineBeams) effect.engineBeams.rotation.z = now * .00018;
  if (effect.tidalRing) effect.tidalRing.material.rotation = now * .00004;
}
