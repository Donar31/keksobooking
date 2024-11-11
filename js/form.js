import { isValid, resetValidation } from './validation.js';
import { getData, postData } from './api.js';
import { IMG_DEFAULT, TYPE_PRICE } from './const.js';
import { renderMarkers, resetMarker, resetMap } from './map.js';
import { showPopup } from './popup.js';
import { removeEscControl, setEscControl } from './esc-control.js';
import { slider } from './slider.js';

const adForm = document.querySelector('.ad-form');
const adFormList = adForm.children;
const mapFilters = document.querySelector('.map__filters');
const priceForm = adForm.querySelector('#price');
const roomsForm = adForm.querySelector('#room_number');
const guestsForm = adForm.querySelector('#capacity');
const typeForm = adForm.querySelector('#type');
const timeInForm = adForm.querySelector('#timein');
const timeOutForm = adForm.querySelector('#timeout');
const avatarForm = adForm.querySelector('#avatar');
const previewForm = adForm.querySelector('.ad-form-header__preview');
const avatarImgForm = previewForm.querySelector('img');
const photosForm = adForm.querySelector('#images');
const photosContainerForm = adForm.querySelector('.ad-form__photo-container');
const resetButtonForm = adForm.querySelector('.ad-form__reset');
const submitButtonForm = adForm.querySelector('.ad-form__submit');

timeInForm.addEventListener('change', () => {
  timeOutForm.value = timeInForm.value;
});

timeOutForm.addEventListener('change', () => {
  timeInForm.value = timeOutForm.value;
});

const createAvatar = (file) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => {
    avatarImgForm.src = reader.result;
  });
  if (file) {
    reader.readAsDataURL(file);
  }
  avatarImgForm.src = IMG_DEFAULT;
};

const createImage = (files) => {
  const reader = new FileReader();
  const div = document.createElement('div');
  const photo = document.createElement('img');
  div.classList.add('ad-form__photo');
  div.classList.add('img');
  reader.addEventListener('load', () => {
    photo.src = reader.result;
    div.append(photo);
    photosContainerForm.append(div);
  });
  if (files) {
    return reader.readAsDataURL(files);
  }
  photo.src = IMG_DEFAULT;
};

const changeAvatar = (evt) => {
  const file = evt.target.files[0];
  createAvatar(file);
};

const changeImage = (evt) => {
  const files = evt.target.files;
  for (let i = 0; i <= files.length; i++) {
    createImage(files[i]);
  }
};

typeForm.addEventListener('change', () => {
  priceForm.placeholder = TYPE_PRICE[typeForm.value];
  priceForm.min = TYPE_PRICE[typeForm.value];
  slider.value = priceForm.placeholder;
});

const disableForm = () => {
  adForm.classList.add('ad-form--disabled');
  for (const element of adFormList) {
    element.setAttribute('disabled', 'disabled');
  }
};

const activateForm = () => {
  adForm.classList.remove('ad-form--disabled');
  for (const element of adFormList) {
    element.removeAttribute('disabled', 'disabled');
  }
};

const blockSubmitButton = () => {
  submitButtonForm.disabled = true;
  submitButtonForm.textContent = 'Отправляю...';
};

const unblockSubmitButton = () => {
  submitButtonForm.disabled = false;
  submitButtonForm.textContent = 'Опубликовать';
};

const onResetButtonClick = () => {
  adForm.reset();
  avatarForm.files.value = IMG_DEFAULT;
  avatarImgForm.src = IMG_DEFAULT;
  photosForm.files.value = '';
  const userPhotos = document.querySelectorAll('.photo');
  userPhotos.forEach((element) => element.remove());
  resetMarker();
  mapFilters.reset();
  getData((data) => renderMarkers(data));
  slider.noUiSlider.reset();
  resetMap();
};

resetButtonForm.addEventListener('click', onResetButtonClick);
avatarForm.addEventListener('change', changeAvatar, false);
photosForm.addEventListener('change', changeImage, false);

adForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if (isValid()) {
    blockSubmitButton();
    postData(new FormData(adForm))
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        removeEscControl();
        showPopup('success');
      })
      .catch(() => {
        showPopup('error');
      })
      .finally(() => {
        unblockSubmitButton();
      });
  }
});
export {
  disableForm,
  activateForm,
  resetButtonForm,
  submitButtonForm,
  onResetButtonClick
};
