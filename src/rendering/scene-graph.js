import * as THREE from 'three';

export function createSceneGraph(scene) {
  const universeGroup = new THREE.Group();
  const detailGroup = new THREE.Group();
  const galaxyGroup = new THREE.Group();
  const epochEffectsGroup = new THREE.Group();
  const remnantGroup = new THREE.Group();
  const heatDeathGroup = new THREE.Group();
  const cosmicFateGroup = new THREE.Group();
  const cosmicEventGroup = new THREE.Group();
  const localGroupGroup = new THREE.Group();
  const cosmicWebGroup = new THREE.Group();

  detailGroup.add(
    galaxyGroup,
    localGroupGroup,
    epochEffectsGroup,
    remnantGroup,
    heatDeathGroup,
    cosmicFateGroup,
    cosmicEventGroup
  );
  scene.add(universeGroup, detailGroup, cosmicWebGroup);

  return {
    cosmicEventGroup,
    cosmicFateGroup,
    cosmicWebGroup,
    detailGroup,
    epochEffectsGroup,
    galaxyGroup,
    heatDeathGroup,
    localGroupGroup,
    remnantGroup,
    universeGroup
  };
}
