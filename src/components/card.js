import {cardTemplate} from './constants.js';
import {initialCards} from './initial-сards.js';
import {openPopupPhoto} from './modaImagePopup.js';
export {renderArrCards, addCard};
//Функция подгрузка карточек из массива
function renderArrCards() {
  initialCards.forEach((cardData) => {
    addCard(cardData);
  });
};
// Функция создания карточки
function createCard(cardData) {
  const cardElement = cardTemplate.querySelector('.elements__item').cloneNode(true);
  const imageTemplate = cardElement.querySelector('.elements__image');
  imageTemplate.src = `${cardData.link}`;
  imageTemplate.alt = `${cardData.name}`;
  cardElement.querySelector('.elements__name').textContent = `${cardData.name}`;
  cardElement.querySelector('.elements__vector').addEventListener('click', (evt) => {
    evt.target.classList.toggle('elements__vector_active');
  });
  cardElement.querySelector('.elements__trash').addEventListener('click', (evt) => {
    evt.target.closest('.elements__item').remove();
  });
  imageTemplate.addEventListener('click', () => openPopupPhoto(cardData));
  return cardElement;
}
// Функция добавление карточки
function addCard(cardData) {
  const cardContainer = document.querySelector('.elements__items');
  cardContainer.prepend(createCard(cardData));
};
