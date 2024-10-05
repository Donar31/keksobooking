import { getData } from './api.js';
import { showAlert } from './util.js';
import { disableForm } from './form.js';
import { disableFilters } from './filters.js';
import { getMap } from './map.js';

disableForm();
disableFilters();
getMap();

getData()
  .then((data) => {
    console.log(data);
  })
  .catch((message) => {
    showAlert(`Что-то пошло не так... ${message}`);
  });
