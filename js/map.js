import { ZOOM, CENTER_TOKYO, MARKER_ICON, MIN_MARKER_ICON } from './const.js';
import { renderBaloon } from './baloon.js';

const LeafletParameters = {
  TILE_LAYER: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  ATTRIBUTION: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
};

const map = L.map('map-canvas');
const layer = L.layerGroup().addTo(map);

const getMap = () => new Promise((resolve, reject) => {
  map.on('load', () => {
    resolve(true)
  })
    .setView(CENTER_TOKYO, ZOOM);
  L.tileLayer(
    LeafletParameters.TILE_LAYER, {
      attribution: LeafletParameters.ATTRIBUTION,
    },
  ).addTo(map);
});

const marker = L.marker(
  CENTER_TOKYO, {
    draggable: true,
    icon: MARKER_ICON
  }
);

marker.addTo(map);

const markerCoordinates = () => marker.on('moveend', (evt) => {
  const newCoordinates = evt.target.getLatLng();
});

const markerGroup = L.layerGroup().addTo(map);

const renderMarkers = (data) => {
  data.forEach((elem) => {
    const {lat, lng} = elem.location;
    const marker = L.marker(
      {
        lat,
        lng,
      },
      {
        icon: MIN_MARKER_ICON,
      },
    );

    marker
      .addTo(markerGroup)
      .bindPopup(renderBaloon(elem));
  });
};

const resetMarker = () => {
  marker.setLatLng(CENTER_TOKYO, ZOOM);
};

const resetMap = () => {
  map.setView(CENTER_TOKYO, ZOOM);
};

const clearMarkers = () => markerGroup.clearLayers();

function updateCoordinates() {
  const lat = marker.getLatLng().lat;
  const lng = marker.getLatLng().lng;
  document.getElementById('address').value = `${lat.toFixed(6)}, ${lng.toFixed(6)}`;
}

marker.on('drag', updateCoordinates);

export { getMap, renderMarkers, clearMarkers, resetMarker, resetMap };
