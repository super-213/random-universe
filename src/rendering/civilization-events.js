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

function circlePoints(radius, count = 128) {
  return Array.from({ length: count + 1 }, (_, index) => {
    const angle = index / count * Math.PI * 2;
    return new THREE.Vector3(Math.cos(angle) * radius, Math.sin(angle) * radius, 0);
  });
}

function updateGatewaySuction(effect, timeSeconds) {
  const particlePositions = effect.suctionParticles.geometry.attributes.position.array;
  const particleColors = effect.suctionParticles.geometry.attributes.color.array;
  for (let index = 0; index < effect.suctionSeeds.length / 5; index++) {
    const seedOffset = index * 5;
    const pointOffset = index * 3;
    const baseAngle = effect.suctionSeeds[seedOffset];
    const phase = effect.suctionSeeds[seedOffset + 1];
    const speed = effect.suctionSeeds[seedOffset + 2];
    const outerRadius = effect.suctionSeeds[seedOffset + 3];
    const turns = effect.suctionSeeds[seedOffset + 4];
    const travel = (timeSeconds * speed + phase) % 1;
    const radius = .07 + (outerRadius - .07) * Math.pow(1 - travel, .72);
    const angle = baseAngle - travel * turns * Math.PI * 2;
    const brightness = Math.pow(Math.sin(travel * Math.PI), .42) * (.58 + index % 7 / 14);
    particlePositions[pointOffset] = Math.cos(angle) * radius;
    particlePositions[pointOffset + 1] = Math.sin(angle) * radius;
    particlePositions[pointOffset + 2] = .018 + Math.sin(angle * 2 + index) * .012;
    particleColors[pointOffset] = effect.suctionColor.r * brightness;
    particleColors[pointOffset + 1] = effect.suctionColor.g * brightness;
    particleColors[pointOffset + 2] = effect.suctionColor.b * brightness;
  }
  effect.suctionParticles.geometry.attributes.position.needsUpdate = true;
  effect.suctionParticles.geometry.attributes.color.needsUpdate = true;

  const trailPositions = effect.suctionTrails.geometry.attributes.position.array;
  for (let index = 0; index < effect.suctionTrailSeeds.length / 5; index++) {
    const seedOffset = index * 5;
    const pointOffset = index * 6;
    const baseAngle = effect.suctionTrailSeeds[seedOffset];
    const phase = effect.suctionTrailSeeds[seedOffset + 1];
    const speed = effect.suctionTrailSeeds[seedOffset + 2];
    const outerRadius = effect.suctionTrailSeeds[seedOffset + 3];
    const turns = effect.suctionTrailSeeds[seedOffset + 4];
    const travel = (timeSeconds * speed + phase) % 1;
    const tailTravel = Math.min(1, travel + .035);
    const radius = .08 + (outerRadius - .08) * Math.pow(1 - travel, .72);
    const tailRadius = .08 + (outerRadius - .08) * Math.pow(1 - tailTravel, .72);
    const angle = baseAngle - travel * turns * Math.PI * 2;
    const tailAngle = baseAngle - tailTravel * turns * Math.PI * 2;
    trailPositions[pointOffset] = Math.cos(angle) * radius;
    trailPositions[pointOffset + 1] = Math.sin(angle) * radius;
    trailPositions[pointOffset + 2] = .016;
    trailPositions[pointOffset + 3] = Math.cos(tailAngle) * tailRadius;
    trailPositions[pointOffset + 4] = Math.sin(tailAngle) * tailRadius;
    trailPositions[pointOffset + 5] = .016;
  }
  effect.suctionTrails.geometry.attributes.position.needsUpdate = true;
}

function createGatewaySuction(color) {
  const suctionField = new THREE.Group();
  const particleCount = 260;
  const particlePositions = new Float32Array(particleCount * 3);
  const particleColors = new Float32Array(particleCount * 3);
  const suctionSeeds = new Float32Array(particleCount * 5);
  for (let index = 0; index < particleCount; index++) {
    const offset = index * 5;
    suctionSeeds[offset] = index * 2.399963 + Math.sin(index * 1.17) * .3;
    suctionSeeds[offset + 1] = (index * 67 % particleCount) / particleCount;
    suctionSeeds[offset + 2] = .0225 + index % 11 * .00105;
    suctionSeeds[offset + 3] = 2.7 + index % 19 / 19 * .7;
    suctionSeeds[offset + 4] = 1.15 + index % 13 / 13 * .85;
  }
  const particleGeometry = new THREE.BufferGeometry();
  particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
  particleGeometry.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));
  const suctionParticles = new THREE.Points(particleGeometry, new THREE.PointsMaterial({
    color: 0xffffff,
    vertexColors: true,
    size: .052,
    map: getPointTexture(),
    alphaTest: .008,
    transparent: true,
    opacity: 0,
    depthTest: false,
    depthWrite: false,
    blending: THREE.AdditiveBlending
  }));
  suctionParticles.renderOrder = 4;

  const trailCount = 72;
  const trailPositions = new Float32Array(trailCount * 6);
  const suctionTrailSeeds = new Float32Array(trailCount * 5);
  for (let index = 0; index < trailCount; index++) {
    const offset = index * 5;
    suctionTrailSeeds[offset] = index / trailCount * Math.PI * 2 + Math.sin(index * 2.31) * .2;
    suctionTrailSeeds[offset + 1] = (index * 29 % trailCount) / trailCount;
    suctionTrailSeeds[offset + 2] = .027 + index % 9 * .00135;
    suctionTrailSeeds[offset + 3] = 2.85 + index % 7 * .08;
    suctionTrailSeeds[offset + 4] = 1.2 + index % 8 * .1;
  }
  const trailGeometry = new THREE.BufferGeometry();
  trailGeometry.setAttribute('position', new THREE.BufferAttribute(trailPositions, 3));
  const suctionTrails = new THREE.LineSegments(trailGeometry, new THREE.LineBasicMaterial({
    color: new THREE.Color(0xc6b3ff).lerp(color, .22),
    transparent: true,
    opacity: 0,
    depthTest: false,
    depthWrite: false,
    blending: THREE.AdditiveBlending
  }));
  suctionTrails.renderOrder = 4;
  suctionField.add(suctionParticles, suctionTrails);

  const effect = {
    suctionField,
    suctionParticles,
    suctionTrails,
    suctionSeeds,
    suctionTrailSeeds,
    suctionColor: new THREE.Color(0xd6e2ff).lerp(color, .18)
  };
  updateGatewaySuction(effect, 0);
  return effect;
}

function createInteruniversalGateway(color) {
  const assembly = new THREE.Group();
  const segmentCount = 16;
  const segmentArc = Math.PI * 2 / segmentCount * .76;
  const segmentGeometry = new THREE.TorusGeometry(4.15, .095, 6, 18, segmentArc);
  const segments = Array.from({ length: segmentCount }, (_, index) => {
    const segment = new THREE.Mesh(segmentGeometry, new THREE.MeshBasicMaterial({
      color: index % 3 === 0 ? 0xf5efff : color,
      wireframe: true,
      transparent: true,
      opacity: 0,
      depthTest: false,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    }));
    segment.rotation.z = index / segmentCount * Math.PI * 2;
    segment.userData.assemblyIndex = index;
    segment.renderOrder = 5;
    assembly.add(segment);
    return segment;
  });

  const railMaterial = new THREE.LineBasicMaterial({
    color,
    transparent: true,
    opacity: 0,
    depthTest: false,
    depthWrite: false,
    blending: THREE.AdditiveBlending
  });
  const rails = [3.86, 4.44].map((radius) => {
    const rail = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(circlePoints(radius)),
      railMaterial.clone()
    );
    rail.geometry.setDrawRange(0, 0);
    rail.renderOrder = 4;
    assembly.add(rail);
    return rail;
  });

  const aperture = new THREE.Mesh(
    new THREE.CircleGeometry(3.72, 96),
    new THREE.MeshBasicMaterial({
      color: 0x010008,
      transparent: true,
      opacity: 0,
      depthTest: false,
      depthWrite: false,
      side: THREE.DoubleSide
    })
  );
  aperture.position.z = -.035;
  aperture.renderOrder = 1;

  const starCount = 220;
  const starPositions = new Float32Array(starCount * 3);
  for (let index = 0; index < starCount; index++) {
    const angle = index * 2.399963 + Math.sin(index * 1.71) * .18;
    const radius = Math.sqrt((index + .5) / starCount) * 3.48;
    starPositions.set([
      Math.cos(angle) * radius,
      Math.sin(angle) * radius,
      .012 + index % 5 * .004
    ], index * 3);
  }
  const starGeometry = new THREE.BufferGeometry();
  starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
  const portalStars = new THREE.Points(starGeometry, new THREE.PointsMaterial({
    color: 0xc9d8ff,
    size: .035,
    map: getPointTexture(),
    alphaTest: .008,
    transparent: true,
    opacity: 0,
    depthTest: false,
    depthWrite: false,
    blending: THREE.AdditiveBlending
  }));
  portalStars.renderOrder = 2;

  const energyRings = [4.02, 4.28].map((radius, index) => {
    const energyRing = new THREE.LineLoop(
      new THREE.BufferGeometry().setFromPoints(circlePoints(radius, 160).slice(0, -1)),
      new THREE.LineBasicMaterial({
        color: index ? 0x9ddcff : 0xf2dcff,
        transparent: true,
        opacity: 0,
        depthTest: false,
        depthWrite: false,
        blending: THREE.AdditiveBlending
      })
    );
    energyRing.position.z = .04 + index * .018;
    energyRing.renderOrder = 6;
    assembly.add(energyRing);
    return energyRing;
  });

  const builderCount = 180;
  const builderPositions = new Float32Array(builderCount * 3);
  const builderOrigins = new Float32Array(builderCount * 3);
  const builderTargets = new Float32Array(builderCount * 3);
  for (let index = 0; index < builderCount; index++) {
    const angle = index * 2.399963;
    const originRadius = 5.8 + index % 17 * .15;
    const targetRadius = 4.15 + Math.sin(index * 1.37) * .13;
    const origin = [
      Math.cos(angle) * originRadius,
      Math.sin(angle) * originRadius,
      Math.sin(index * .73) * 1.7
    ];
    const target = [
      Math.cos(angle) * targetRadius,
      Math.sin(angle) * targetRadius,
      Math.sin(index * .73) * .08
    ];
    builderOrigins.set(origin, index * 3);
    builderTargets.set(target, index * 3);
    builderPositions.set(origin, index * 3);
  }
  const builderGeometry = new THREE.BufferGeometry();
  builderGeometry.setAttribute('position', new THREE.BufferAttribute(builderPositions, 3));
  const builders = new THREE.Points(builderGeometry, new THREE.PointsMaterial({
    color: 0xe8f4ff,
    size: .065,
    map: getPointTexture(),
    alphaTest: .008,
    transparent: true,
    opacity: 0,
    depthTest: false,
    depthWrite: false,
    blending: THREE.AdditiveBlending
  }));
  builders.renderOrder = 7;

  const apertureHalo = new THREE.Sprite(additiveMaterial({
    map: makeRingTexture(),
    color: 0xc8a8ff,
    depthTest: false
  }));
  apertureHalo.scale.setScalar(9.8);
  apertureHalo.renderOrder = 3;

  const suction = createGatewaySuction(color);
  assembly.add(aperture, portalStars, suction.suctionField, builders, apertureHalo);
  assembly.rotation.x = -.08;
  assembly.scale.setScalar(1.45);
  return {
    assembly,
    segments,
    rails,
    aperture,
    portalStars,
    energyRings,
    builders,
    builderOrigins,
    builderTargets,
    apertureHalo,
    ...suction
  };
}

export function createCivilizationEventVisual(event) {
  const group = new THREE.Group();
  const color = new THREE.Color(event.color);
  const glow = new THREE.Sprite(additiveMaterial({ map: makeGlowTexture(), color }));
  const ring = new THREE.Sprite(additiveMaterial({ map: makeRingTexture(), color }));
  group.add(glow, ring);
  const effect = { glow, ring };

  if (event.visual === 'interuniversal-gateway') {
    Object.assign(effect, createInteruniversalGateway(color));
    group.add(effect.assembly);
  } else if (event.visual === 'signal-wave') {
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
  } else if (event.visual === 'microlensing') {
    const source = new THREE.Sprite(additiveMaterial({ map: getPointTexture(), color: 0xf7fbff }));
    const einsteinRing = new THREE.Sprite(additiveMaterial({ map: makeRingTexture(), color }));
    const imageA = new THREE.Sprite(additiveMaterial({ map: getPointTexture(), color: 0xffffff }));
    const imageB = new THREE.Sprite(additiveMaterial({ map: getPointTexture(), color: 0xbad8ff }));
    source.scale.setScalar(.22);
    imageA.scale.setScalar(.11);
    imageB.scale.setScalar(.08);
    group.add(einsteinRing, source, imageA, imageB);
    effect.lensSource = source;
    effect.einsteinRing = einsteinRing;
    effect.lensImages = [imageA, imageB];
  } else if (event.visual === 'transit-curve') {
    const points = [];
    for (let index = 0; index <= 96; index++) {
      const progress = index / 96;
      const ingress = Math.exp(-(((progress - .43) / .075) ** 2));
      const egress = Math.exp(-(((progress - .57) / (.11 + (event.asymmetry || .4) * .05)) ** 2));
      const depth = Math.min(.58, .16 + (event.transitDepth || .04) * 2.2);
      points.push(new THREE.Vector3(
        (progress - .5) * 2.6,
        .24 - Math.max(ingress, egress * .82) * depth,
        0
      ));
    }
    const curve = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(points),
      new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending })
    );
    const scanner = new THREE.Sprite(additiveMaterial({ map: getPointTexture(), color: 0xffffff }));
    scanner.scale.setScalar(.12);
    group.add(curve, scanner);
    effect.transitCurve = curve;
    effect.transitScanner = scanner;
  } else if (event.visual === 'waste-heat') {
    const star = new THREE.Sprite(additiveMaterial({ map: getPointTexture(), color: 0xfff2c4 }));
    const infraredShells = [0, 1, 2].map((index) => {
      const shell = new THREE.Sprite(additiveMaterial({ map: makeRingTexture(), color }));
      shell.userData.offset = index / 3;
      group.add(shell);
      return shell;
    });
    star.scale.setScalar(.2);
    group.add(star);
    effect.wasteHeatStar = star;
    effect.infraredShells = infraredShells;
  } else if (event.visual === 'signal-silence') {
    const fadingRings = [0, 1, 2, 3].map((index) => {
      const echo = new THREE.Sprite(additiveMaterial({ map: makeRingTexture(), color }));
      echo.userData.offset = index / 4;
      group.add(echo);
      return echo;
    });
    const breakGeometry = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(-.16, -.42, 0),
      new THREE.Vector3(.08, -.1, 0),
      new THREE.Vector3(-.08, .12, 0),
      new THREE.Vector3(.16, .42, 0)
    ]);
    const signalBreak = new THREE.Line(
      breakGeometry,
      new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0, depthWrite: false })
    );
    group.add(signalBreak);
    effect.fadingSignalRings = fadingRings;
    effect.signalBreak = signalBreak;
  } else if (event.visual === 'last-star') {
    const finalStar = new THREE.Sprite(additiveMaterial({ map: getPointTexture(), color: 0xffd79a }));
    const coolingHalo = new THREE.Sprite(additiveMaterial({ map: makeGlowTexture(), color: 0x7790ad }));
    finalStar.scale.setScalar(.24);
    group.add(coolingHalo, finalStar);
    effect.finalStar = finalStar;
    effect.coolingHalo = coolingHalo;
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

  if (effect.segments) {
    const construction = THREE.MathUtils.smoothstep(phase, 0, .92);
    const portalOpen = Math.max(persistence, THREE.MathUtils.smoothstep(phase, .58, 1));
    const builderFade = 1 - THREE.MathUtils.smoothstep(phase, .74, 1);
    effect.ring.material.opacity = 0;
    effect.glow.material.opacity = (.08 + portalOpen * .2) * Math.max(reveal, persistence);
    effect.glow.scale.setScalar(7.6 + portalOpen * 3.2);
    effect.segments.forEach((segment, index) => {
      const delay = index / effect.segments.length * .7;
      const segmentReveal = Math.max(
        persistence,
        THREE.MathUtils.smoothstep(phase, delay, Math.min(1, delay + .22))
      );
      segment.material.opacity = segmentReveal * (.5 + (index % 3 === 0 ? .24 : 0));
      segment.scale.setScalar(.82 + segmentReveal * .18);
    });
    effect.rails.forEach((rail, index) => {
      const points = rail.geometry.attributes.position.count;
      rail.geometry.setDrawRange(0, Math.max(2, Math.floor(points * construction)));
      rail.material.opacity = Math.max(persistence * .42, construction * (.34 - index * .06));
    });
    effect.energyRings.forEach((energyRing, index) => {
      energyRing.material.opacity = portalOpen * (.44 - index * .12);
      energyRing.scale.setScalar(.94 + portalOpen * .06);
    });
    effect.aperture.material.opacity = portalOpen * .97;
    effect.portalStars.material.opacity = portalOpen * .82;
    effect.portalStars.scale.setScalar(.32 + portalOpen * .68);
    effect.suctionField.scale.setScalar(.26 + portalOpen * .74);
    effect.suctionParticles.material.opacity = portalOpen * .46;
    effect.suctionTrails.material.opacity = portalOpen * .2;
    effect.apertureHalo.material.opacity = portalOpen * .4;
    effect.apertureHalo.scale.setScalar(7.8 + portalOpen * 2.6);
    const builderPositions = effect.builders.geometry.attributes.position.array;
    for (let index = 0; index < builderPositions.length; index++) {
      builderPositions[index] = THREE.MathUtils.lerp(
        effect.builderOrigins[index],
        effect.builderTargets[index],
        construction
      );
    }
    effect.builders.geometry.attributes.position.needsUpdate = true;
    effect.builders.material.opacity = reveal * builderFade * .86;
  }

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
  if (effect.einsteinRing) {
    const alignment = Math.sin(Math.min(1, phase) * Math.PI);
    const magnification = Math.min(2.2, event.peakMagnification || 1.4);
    effect.lensSource.material.opacity = intensity * (.32 + alignment * .68);
    effect.lensSource.scale.setScalar(.16 + alignment * .12 * magnification);
    effect.einsteinRing.material.opacity = alignment * intensity * .58;
    effect.einsteinRing.scale.setScalar(.28 + alignment * (1.15 + magnification * .18));
    effect.lensImages.forEach((image, index) => {
      const side = index ? -1 : 1;
      image.position.x = side * (.14 + alignment * .34);
      image.material.opacity = alignment * intensity * (index ? .48 : .72);
    });
  }
  if (effect.transitCurve) {
    effect.transitCurve.material.opacity = intensity * .76;
    const scan = THREE.MathUtils.clamp(phase, 0, 1);
    effect.transitScanner.position.x = THREE.MathUtils.lerp(-1.3, 1.3, scan);
    const dip = Math.exp(-(((scan - .5) / .12) ** 2)) * (.22 + (event.transitDepth || .04));
    effect.transitScanner.position.y = .24 - dip;
    effect.transitScanner.material.opacity = intensity;
  }
  if (effect.infraredShells) {
    effect.wasteHeatStar.material.opacity = intensity * .68;
    effect.infraredShells.forEach((shell, index) => {
      const travel = (Math.max(0, phase) * .72 + shell.userData.offset) % 1;
      shell.scale.setScalar(.42 + travel * 2.3);
      shell.material.opacity = intensity * Math.sin(travel * Math.PI) * (.34 - index * .055);
    });
  }
  if (effect.fadingSignalRings) {
    const silence = THREE.MathUtils.smoothstep(phase, .28, .78);
    effect.fadingSignalRings.forEach((echo, index) => {
      const travel = THREE.MathUtils.clamp(phase * 1.1 - index * .1, 0, 1);
      echo.scale.setScalar(.25 + travel * 3.4);
      echo.material.opacity = intensity * (1 - silence) * Math.sin(travel * Math.PI) * .3;
    });
    effect.signalBreak.material.opacity = intensity * silence * .68;
    effect.signalBreak.scale.setScalar(.5 + silence * .5);
  }
  if (effect.finalStar) {
    const extinction = THREE.MathUtils.smoothstep(phase, .3, .82);
    effect.finalStar.material.opacity = intensity * (1 - extinction);
    effect.finalStar.scale.setScalar(.2 * (1 - extinction * .82));
    effect.coolingHalo.material.opacity = intensity * extinction * (1 - phase) * .28;
    effect.coolingHalo.scale.setScalar(.4 + extinction * 2.4);
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
  if (effect.einsteinRing) effect.einsteinRing.material.rotation = now * .00006;
  if (effect.infraredShells) {
    effect.infraredShells.forEach((shell, index) => {
      shell.material.rotation = now * (.000025 + index * .000012) * (index % 2 ? -1 : 1);
    });
  }
  if (effect.segments) {
    effect.assembly.rotation.y = Math.sin(now * .00008) * .045;
    effect.energyRings.forEach((energyRing, index) => {
      energyRing.rotation.z = now * (.00007 + index * .00004) * (index ? -1 : 1);
    });
    effect.portalStars.rotation.z = now * -.000012;
    updateGatewaySuction(effect, now * .001);
    effect.builders.rotation.z = now * .000035;
    effect.apertureHalo.material.rotation = now * .000025;
  }
}
