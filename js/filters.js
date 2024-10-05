const mapFilters = document.querySelector('.map__filters');
const mapFiltersList = mapFilters.children;

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
  activateFilters
};
