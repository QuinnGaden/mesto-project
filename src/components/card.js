import {popupAddСard, placeInput, linkInput, cardTemplate} from './constants.js';
//Форма добавления карточки
const formAddPlace = document.querySelector('.popup__form_type_addcard');
formAddPlace.addEventListener('submit', () => {  
  const cardData = {
    name: placeInput.value,
    link: linkInput.value,
  };
  formAddPlace.reset();
  addCard(cardData);
  closePopup(popupAddСard);
});
//Функция подгрузка карточек из массива
function renderArrCards() {
  initialCards.forEach((cardData) => {
    addCard(cardData);
  });
};
renderArrCards();
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
