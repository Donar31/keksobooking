import { activateForm } from './form.js';
import { activateFilters } from './filters.js';
import { ZOOM, CENTER_TOKYO, MARKER_ICON } from './const.js';

const LeafletParameters = {
  TILE_LAYER: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  ATTRIBUTION: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
};

const map = L.map('map-canvas');
const getMap = () => {
  map.on('load', () => {
    activateForm(),
    activateFilters();
})
    .setView(CENTER_TOKYO, ZOOM);
  L.tileLayer(
    LeafletParameters.TILE_LAYER, {
      attribution: LeafletParameters.ATTRIBUTION,
    },
  ).addTo(map);
};

const marker = L.marker (
  CENTER_TOKYO, {
    draggable: true,
    icon: MARKER_ICON
  }
);

marker.addTo(map);

export { getMap };
