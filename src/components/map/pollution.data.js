import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import GroupLayer from "@arcgis/core/layers/GroupLayer";
// air quality
var airNowLayer = new FeatureLayer({
  title: "Air Now",
  portalItem: {
    id: "2d718d2733a74d1689d72b922c0ac4f4",
  },
});

var esriAirLayer = new FeatureLayer({
  title: "OpenAQ",
  portalItem: {
    id: "8dcf5d4e124f480fa8c529fbe25ba04e",
  },
});

var wildFireLayer = new FeatureLayer({
  title: "Prescribed Fires and Wild Fires",
  portalItem: {
    id: "d957997ccee7408287a963600a77f61f",
  },
});

// causes
var minesLayer = new FeatureLayer({
  visible: false,
  portalItem: {
    id: "368568f04b9e4769a6658c878cda4d84",
  },
});

var manufacturingLayer = new FeatureLayer({
  visible: false,
  portalItem: {
    id: "5bfd934ad91941199a7d54a99e9917fc",
  },
});

var rubbishLayer = new FeatureLayer({
  visible: false,
  portalItem: {
    id: "6cd482cfc86941c7b74ce04753321135",
  },
});

var powerPlantLayer = new FeatureLayer({
  visible: false,
  portalItem: {
    id: "fcf25278a0994542ab283ffc9f51ae6d",
  },
});

var electricalLayer = new FeatureLayer({
  visible: false,
  portalItem: {
    id: "f31f182abdf74962a435d48835105e8a",
  },
});

var oilFieldLayer = new FeatureLayer({
  visible: false,
  portalItem: {
    id: "7763f14b5acd40ad97616c4984944cf3",
  },
});

var oilRefineriesLayer = new FeatureLayer({
  visible: false,
  portalItem: {
    id: "c91d46f7424a46ed92cfa865ef31b73c",
  },
});

var hazardLayer = new FeatureLayer({
  visible: false,
  portalItem: {
    id: "625d8930c0114b4a8ec70ab04195af3b",
  },
});

var busLayer = new FeatureLayer({
  visible: false,
  portalItem: {
    id: "bac2fc5be2b94eae90d5987952c0e405",
  },
});

//conditions

var heartMortality = new FeatureLayer({
  title: "Density of Asthma Per Census Tract (OEHHA)",
  url: 'https://services1.arcgis.com/PCHfdHz4GlDNAhBb/ArcGIS/rest/services/CES3FINAL_AGOL/FeatureServer/1'
});

var infrastructureGroupLayer = new GroupLayer({
  title: "Infrastructure",
  visible: true,
  visibilityMode: "inherited",
  layers: [
    minesLayer,
    manufacturingLayer,
    rubbishLayer,
    powerPlantLayer,
    electricalLayer,
  ],
  index: 2
  
});

var hazardsGroupLayer = new GroupLayer({
  title: "Hazards",
  visible: true,
  visibilityMode: "inherited",
  layers: [oilFieldLayer, oilRefineriesLayer, hazardLayer],
  index: 1
});

var transportationGroupLayer = new GroupLayer({
  title: "Transportation",
  visible: true,
  visibilityMode: "inherited",
  layers: [busLayer],
  index: 0
});

const POLLUTION_DATA = [
  {
    id: 1,
    layers: [airNowLayer, wildFireLayer, esriAirLayer],
  },
  {
    id: 2,
    layers: [
      transportationGroupLayer,
      infrastructureGroupLayer,
      hazardsGroupLayer,
      
    ],
  },
  {
    id:3,
    layers: [heartMortality]
  }
];

export default POLLUTION_DATA;
