import { TYPES_OF_HOUSING } from './const.js';

const template = document.querySelector('#card').content.querySelector('.popup');

// const getRooms = (roomCount) => {
//   switch (roomCount) {
//     case 1:
//       return 'комната';
//     case 2:
//     case 3:
//     case 4:
//       return 'комнаты';
//     default:
//       return 'комнат';
//   }
// };

// const getGuests = (count) => {
//   if (count === 0) {
//     return 'не для гостей';
//   }
//   if (count > 1) {
//     return `для ${count} гостей`;
//   }
//   return `для ${count} гостя`;
// };


const numWordGuest = (value) => {
  const wordsGuests = [`для ${value} гостя`, `для ${value} гостей`, 'не для гостей'];
  value = Math.abs(value) % 100;
  const num = value % 10;
  if (value > 10 && value < 20) {
    return wordsGuests[2];
  }
  if (num > 1 && num < 5) {
    return wordsGuests[1];
  }
  if (num === 1) {
    return wordsGuests[0];
  }
  return wordsGuests[2];
};

const numWordRooms = (value) => {
  const wordsRooms = ['комната', 'комнаты', 'комнат'];
  value = Math.abs(value) % 100;
  const num = value % 10;
  if (value > 10 && value < 20) {
    return wordsRooms[2];
  }
  if (num > 1 && num < 5) {
    return wordsRooms[1];
  }
  if (num === 1) {
    return wordsRooms[0];
  }
  return wordsRooms[2];
};

const renderBaloon = (data) => {
  const { title, address, price, type, rooms, guests, checkin, checkout, description, photos, features } = data.offer;
  const { avatar } = data.author;
  const element = template.cloneNode(true);
  element.querySelector('.popup__avatar').src = avatar || '';
  element.querySelector('.popup__title').textContent = title || '';
  element.querySelector('.popup__text--address').textContent = address || '';
  element.querySelector('.popup__text--price').textContent = `${price} ₽/ночь` || '';
  element.querySelector('.popup__type').textContent = TYPES_OF_HOUSING[type] || '';
  element.querySelector('.popup__text--capacity').textContent = (!rooms || !Number.isInteger(guests)) ? '' : `${rooms} ${numWordRooms(rooms)} ${numWordGuest(guests)}`;
  element.querySelector('.popup__text--time').textContent = (!checkin || !checkout) ? '' : `Заезд после ${checkin}, выезд до ${checkout}`;
  element.querySelector('.popup__description').textContent = description || '';
  if (Array.isArray(photos) && photos.length) {
    const photoContainer = element.querySelector('.popup__photos');
    const photoPopupTemplate = element.querySelector('.popup__photo');
    photoContainer.innerHTML = '';
    photos.forEach((photoItem) => {
      const photo = photoPopupTemplate.cloneNode('true');
      photo.src = photoItem;
      photoContainer.append(photo);
    });
  } else {
    element.querySelector('.popup__photos').remove();
  }
  const featuresContainer = element.querySelector('.popup__features');
  const featureList = featuresContainer.querySelectorAll('.popup__feature');
  const item = data.offer.features;
  if (item) {
    featureList.forEach((featureListItem) => {
      const checkFeatures = features.some(
        (feature) => featureListItem.classList.contains(`popup__feature--${feature}`)
      );
      if (!checkFeatures) {
        featureListItem.remove();
      }
    });
  } else {
    featuresContainer.remove();
  }

  return element;
};

export { renderBaloon };
