import { getData } from './api.js';
import { showAlert, debounce } from './util.js';
import { disableForm } from './form.js';
import { disableFilters } from './filters.js';
import { getMap, renderMarkers } from './map.js';
import { activateForm } from './form.js';
import { activateFilters, checkAllFilters, addFilterMap } from './filters.js';

const TIMEOUT_DELAY = 500;

disableForm();
disableFilters();

getMap()
  .then(() => {
    activateForm();
    getData()
      .then((data) => {
        activateFilters();
        checkAllFilters(data);
        // renderMarkers(data);
        addFilterMap(debounce(() => checkAllFilters(data), TIMEOUT_DELAY));
      })
      .catch((message) => {
        showAlert(`Что-то пошло не так... ${message}`);
      });
  });
