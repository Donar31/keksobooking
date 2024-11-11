import { renderMarkers, clearMarkers } from './map.js';
import { MAX_MARKER } from './const.js';

const mapFilters = document.querySelector('.map__filters');
const mapFiltersList = mapFilters.children;
const filterType = mapFilters.querySelector('#housing-type');
const filterPrice = mapFilters.querySelector('#housing-price');
const filterRooms = mapFilters.querySelector('#housing-rooms');
const filterGuest = mapFilters.querySelector('#housing-guests');

const DEFAULT_FILTER = 'any';
const PRICE_FILTER_VALUE = {
  low: {
    start: 0,
    end: 10000,
  },
  middle: {
    start: 10000,
    end: 50000,
  },
  high: {
    start: 50000,
    end: 100000,
  },
};

const checkType = (data) => filterType.value === data.offer.type || filterType.value === DEFAULT_FILTER;
const checkPrice = (data) => filterPrice.value === DEFAULT_FILTER || (data.offer.price >= PRICE_FILTER_VALUE[filterPrice.value].start && data.offer.price <= PRICE_FILTER_VALUE[filterPrice.value].end);
const checkRooms = (data) => +filterRooms.value === data.offer.rooms || filterRooms.value === DEFAULT_FILTER;
const checkGuest = (data) => +filterGuest.value === data.offer.guests || filterGuest.value === DEFAULT_FILTER;

const checkFeatures = (data) => {
  const filtersFeatures = [];
  const checkedFilters = mapFilters.querySelectorAll('input:checked');
  checkedFilters.forEach((elem) => filtersFeatures.push(elem.value));
  if (data.offer.features){
    return filtersFeatures.every((feature) => data.offer.features.includes(feature));
  }
  return false;
};

const checkAllFilters = (data) => {
  const localData = [];
  for (let i = 0; i < data.length; i++) {
    const elem = data[i];
    if (
      checkType(elem) &&
      checkPrice(elem) &&
      checkRooms(elem) &&
      checkGuest(elem) &&
      checkFeatures(elem)
    ) {
      localData.push(elem);
      renderMarkers(localData);
    }
    if (localData.length === MAX_MARKER) {
      break;
    }
  }
  return localData;
};
const addFilterMap = (cb) => {
  mapFilters.addEventListener('change', () => {
    clearMarkers();
    cb();
  });
};

const disableFilters = () => {
  mapFilters.classList.add('map__filters--disabled');
  for (const element of mapFiltersList) {
    element.setAttribute('disabled', 'disabled');
  }
};

const activateFilters = () => {
  mapFilters.classList.remove('map__filters--disabled');
  for (const element of mapFiltersList) {
    element.removeAttribute('disabled', 'disabled');
  }
};

export {
  disableFilters,
  activateFilters,
  checkAllFilters,
  addFilterMap
};
