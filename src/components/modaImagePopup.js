import {openPopup} from './modal.js';
import {popupImage, popupFigcaption, popupPhoto} from './constants.js';
export {openPopupPhoto};
// Функция открытия попапа картинки
function openPopupPhoto(cardData) {
  popupImage.src = `${cardData.link}`;
  popupImage.alt = `${cardData.name}`;
  popupFigcaption.textContent = `${cardData.name}`;
  openPopup(popupPhoto);  
}