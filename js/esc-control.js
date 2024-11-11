import { isEscapeKey } from './util.js';

const modals = [];

let listener = null;

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    const lastIndex = modals.length - 1;
    if (modals[lastIndex].condition && !modals[lastIndex].condition()) {
      return;
    }

    modals[lastIndex].cb();
    modals.length = modals.length - 1;
    if (!modals.length) {
      document.removeEventListener('keydown', onDocumentKeydown);
    }
  }
};

const setEscControl = (closeModal, condition = null) => {
  modals.push({
    cb: closeModal,
    condition
  });
  if (!listener) {
    listener = document.addEventListener('keydown', onDocumentKeydown);
  }
};

const removeEscControl = () => {
  modals.length = modals.length - 1;
  if (!modals.length) {
    document.removeEventListener('keydown', onDocumentKeydown);
  }
};

export {
  setEscControl,
  removeEscControl
};
