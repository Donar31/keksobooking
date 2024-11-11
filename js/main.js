import { getData } from './api.js';
import { showAlert, debounce } from './util.js';
import { getMap, renderMarkers } from './map.js';
import {disableForm, activateForm } from './form.js';
import { disableFilters, activateFilters, checkAllFilters, addFilterMap } from './filters.js';

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
        addFilterMap(debounce(() => checkAllFilters(data), TIMEOUT_DELAY));
      })
      .catch((message) => {
        showAlert(`Что-то пошло не так... ${message}`);
      });
  });
