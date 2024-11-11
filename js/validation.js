import { TYPE_PRICE, MIN_ROOMS, MAX_ROOMS } from './const.js';

const adForm = document.querySelector('.ad-form');
const accommodationType = document.querySelector('#type');
const priceForm = document.querySelector('#price');
const roomsForm = document.querySelector('#room_number');
const guestsForm = document.querySelector('#capacity');

const pristine = new Pristine(adForm, {
  classTo: 'ad-form__element',
  errorTextParent: 'ad-form__element',
  errorTextClass: 'ad-form__error-text',
}, false);

const validatePrice = () => priceForm.value >= TYPE_PRICE[accommodationType.value];

const validateRoomsAndGuests = () => Number(roomsForm.value) === MAX_ROOMS && Number(guestsForm.value) === MIN_ROOMS || Number(guestsForm.value) <= Number(roomsForm.value) && Number(roomsForm.value) !== MAX_ROOMS && Number(guestsForm.value) !== MIN_ROOMS;

const showPriceValidationError = () => `Минимальная цена должна быть больше ${TYPE_PRICE[accommodationType.value]}`;

pristine.addValidator(priceForm, validatePrice, showPriceValidationError);

pristine.addValidator(
  roomsForm,
  validateRoomsAndGuests,
  'Количество комнат должно быть меньше или равно количеству гостей'
);

pristine.addValidator(
  guestsForm,
  validateRoomsAndGuests,
  'Количество гостей должно быть меньше или равно количеству комнат'
);
export const isValid = () => pristine.validate();

export const resetValidation = () => pristine.reset();
