var miradorInstance = Mirador.viewer({
  id: "mirador",
  selectedTheme: "light",
  language: "en",
  windows: [{
    loadedManifest: "https://nyu-dss.github.io/black-solidarity-day/img/derivatives/iiif/blacksolidarityday_paradephoto_1972_4/manifest.json",
  }],
  window: {
    allowClose: false,
    allowMaximize:  true,
    defaultSideBarPanel: "info",
    sideBarOpenByDefault: true,
    defaultView: "book"
  },
  workspace: {
    type: "mosaic", // Which workspace type to load by default. Other possible values are "elastic"
  },
  thumbnailNavigation: {
    defaultPosition: "off"
  },
  workspaceControlPanel: {
    enabled: false,
  }
});
