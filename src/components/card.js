import {cardTemplate} from '../pages/index.js';
// import {initialCards} from './initial-сards.js';
import {openPopupPhoto} from './modaImagePopup.js';
import {getInitialCards, toggleLikeCard, deleteCard} from './api.js'
export {addCard, userId, getUserId, addInitialCards };
let userId = '';
const getUserId = (id) => {
  userId = id;
}
const cardContainer = document.querySelector('.elements__items');
// //Функция подгрузка карточек из массива
// function renderArrCards() {
//   initialCards.forEach((cardData) => {
//     addCard(cardData);
//   });
// }
// Функция создания карточки
function createCard(cardData) {
  const cardElement = cardTemplate.querySelector('.elements__item').cloneNode(true);
  const imageTemplate = cardElement.querySelector('.elements__image');
  imageTemplate.src = `${cardData.link}`;
  imageTemplate.alt = `${cardData.name}`;
  cardElement.querySelector('.elements__name').textContent = `${cardData.name}`;
  cardElement.querySelector('.elements__vector').addEventListener('click', (evt) => likeCard (evt, cardData));
  cardElement.querySelector('.elements__trash').addEventListener('click', (evt) => {
    deleteCard(cardData)
    .then(() => {
      evt.target.closest('.elements__item').remove();
    })
    .catch((err) => {
      console.log(err);
    });
    
  });
  if (cardData.owner._id === userId) {
    cardElement.querySelector('.elements__trash').classList.add('elements__trash_type_active');
  }
  cardElement.querySelector('.elements__counter').textContent = cardData.likes.length;

  imageTemplate.addEventListener('click', () => openPopupPhoto(cardData));
  return cardElement;
}
// Функция добавление карточки
function addCard(cardData) {  
  cardContainer.prepend(createCard(cardData));
}
// функция отрисовки карточек с свервера
const addInitialCards = (cardData) => {
  cardData.forEach((item) => {
    addCard(item)
  })
}
// Лайк карточки
function likeCard (evt, cardData) {
  toggleLikeCard(evt, cardData)    
    .then((res) => {
      evt.target.classList.toggle('elements__vector_active');
      evt.target.parentNode.querySelector('.elements__counter').textContent = res.likes.length;
    })
    .catch((err) => {
      console.log(err);
    });
}


