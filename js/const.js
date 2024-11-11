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

const TYPES_KEYS = {
  flat: 'flat',
  bungalow: 'bungalow',
  house: 'house',
  palace: 'palace',
  hotel: 'hotel'
};

const TYPES_OF_HOUSING = {
  [TYPES_KEYS.flat]: 'Квартира',
  [TYPES_KEYS.bungalow]: 'Бунгало',
  [TYPES_KEYS.house]: 'Дом',
  [TYPES_KEYS.palace]: 'Дворец',
  [TYPES_KEYS.hotel]: 'Отель'
};

const MAX_MARKER = 10;

const TYPE_PRICE = {
  [TYPES_KEYS.flat]: 1000,
  [TYPES_KEYS.bungalow]: 0,
  [TYPES_KEYS.house]: 5000,
  [TYPES_KEYS.palace]: 10000,
  [TYPES_KEYS.hotel]: 3000
};

const MAX_ROOMS = 100;
const MIN_ROOMS = 0;

export {
  GET_URL,
  POST_URL,
  ZOOM,
  CENTER_TOKYO,
  IMG_DEFAULT,
  MARKER_ICON,
  MIN_MARKER_ICON,
  TYPES_OF_HOUSING,
  MAX_MARKER,
  TYPE_PRICE,
  MAX_ROOMS,
  MIN_ROOMS
};
