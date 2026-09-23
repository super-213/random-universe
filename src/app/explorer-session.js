export function createExplorerSession() {
  return {
    mode: 'generator',
    transition: null,
    timeline: {
      position: 0,
      playing: false,
      speed: 10,
      viewport: { start: 0, end: 1000 },
      eventFilter: 'all',
      snapEnabled: true,
      eras: null,
      lastCivilizationSnapshot: null
    },
    civilization: {
      activeSpeciesCount: 0,
      ascendedSpeciesCount: 0,
      activeRelationship: null,
      selectedChronicleIndex: null,
      observerSpeciesIndex: null
    },
    view: {
      universeScale: false,
      shipHighlight: false,
      immersive: false,
      keyboardStarIndex: -1
    },
    hydration: {
      preparedSeed: null,
      hydratedSeed: null,
      buildVersion: 0
    }
  };
}
