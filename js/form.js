const adForm = document.querySelector('.ad-form');
const adFormList = adForm.children;
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

export {
  disableForm,
  activateForm,
  resetButtonForm,
  submitButtonForm
};
