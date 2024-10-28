const errorBlock = document.querySelector('#data-error').content.querySelector('.data-error');
const isEscapeKey = (evt) => evt.key === 'Escape';

const showAlert = (message, time = 5000) => {
  const alertContainer = errorBlock.cloneNode(true);
  alertContainer.querySelector('.data-error__title').textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, time);
};

const debounce = (callback, timeoutDelay = 400) => {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

export { isEscapeKey, showAlert, debounce };
