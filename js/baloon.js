import { TYPES_OF_HOUSING } from './const.js';

const template = document.querySelector('#card').content.querySelector('.popup');

const getRooms = (roomCount) => {
  switch (roomCount) {
    case 1:
      return 'комната';
    case 2:
    case 3:
    case 4:
      return 'комнаты';
    default:
      return 'комнат';
  }
};

const getGuests = (count) => {
  if (count === 0) {
    return 'не для гостей';
  }
  if (count > 1) {
    return `для ${count} гостей`;
  }
  return `для ${count} гостя`;
};

const renderBaloon = (data) => {
  const { title, address, price, type, rooms, guests, checkin, checkout, description } = data.offer;
  const { avatar } = data.author;
  const element = template.cloneNode(true);
  element.querySelector('.popup__avatar').src = avatar || '';
  element.querySelector('.popup__title').textContent = title || '';
  element.querySelector('.popup__text--address').textContent = address || '';
  element.querySelector('.popup__text--price').textContent = `${price} ₽/ночь` || '';
  element.querySelector('.popup__type').textContent = TYPES_OF_HOUSING[type] || '';
  element.querySelector('.popup__text--capacity').textContent = (!rooms || !Number.isInteger(guests)) ? '' : `${rooms} ${getRooms(rooms)} ${getGuests(guests)}`;
  element.querySelector('.popup__text--time').textContent = (!checkin || !checkout) ? '' : `Заезд после ${checkin}, выезд до ${checkout}`;
  element.querySelector('.popup__description').textContent = description || '';
  // const photoPopup = element.querySelector('.popup__photo');
  // photoPopup.src = photos || '';
  return element;
};

export { renderBaloon };
