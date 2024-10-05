const adForm = document.querySelector('.ad-form');
const adFormList = adForm.children;

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
  activateForm
};
