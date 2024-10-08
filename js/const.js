const GET_URL = 'https://28.javascript.htmlacademy.pro/keksobooking/data';

const POST_URL = 'https://28.javascript.htmlacademy.pro/keksobooking';

const ZOOM = 12;

const CENTER_TOKYO = {
  lat: 35.69034,
  lng: 139.75175,
};

const IMG_DEFAULT = 'img/muffin-grey.svg';

const MARKER_ICON = L.icon({
  iconUrl: 'img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52]
});

const MIN_MARKER_ICON = L.icon({
  iconUrl: 'img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

export {
  GET_URL,
  POST_URL,
  ZOOM,
  CENTER_TOKYO,
  IMG_DEFAULT,
  MARKER_ICON,
  MIN_MARKER_ICON
};
