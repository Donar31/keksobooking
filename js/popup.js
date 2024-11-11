import { setEscControl, removeEscControl } from './esc-control.js';

const successTemplate = document.querySelector('#success').content.querySelector('.success');
const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const templates = {
  success: successTemplate,
  error: errorTemplate
};

export const showPopup = (variant) => {
  const popup = templates[variant].cloneNode(true);
  popup.addEventListener('click', ({ target }) => {
    if (target.classList.contains(`${variant}__button`) || target.classList.contains(variant)) {
      popup.remove();
      removeEscControl();
    }
  });
  setEscControl(() => {
    popup.remove();
  });
  document.body.append(popup);
};
