const errorBlock = document.querySelector('#error').content.querySelector('.error');
const isEscapeKey = (evt) => evt.key === 'Escape';

const showAlert = (message, time = 5000) => {
  const alertContainer = errorBlock.cloneNode(true);
  alertContainer.querySelector('.error__message').textContent = message;

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
