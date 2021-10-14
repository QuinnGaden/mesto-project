import {cardTemplate} from '../pages/index.js';
// import {initialCards} from './initial-сards.js';
import {openPopupPhoto} from './modaImagePopup.js';
import {getInitialCards, toggleLikeCard} from './api.js'
export {addCard, getArrayCards, userId, getUserId};
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
    evt.target.closest('.elements__item').remove();
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
// Получение массива карточек с сервера и отрисовка
const getArrayCards = () => {
  getInitialCards()
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })  
    .then((cards) => {    
      addInitialCards(cards)
    })
    .catch((err) => {
      console.log(err);
    });
}

// 
function likeCard (evt, cardData) {
  evt.target.classList.toggle('elements__vector_active');
  toggleLikeCard(evt, cardData)
    .then(res => {
      if(res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .then((res) => {
      evt.target.parentNode.querySelector('.elements__counter').textContent = res.likes.length;
    })
    .catch((err) => {
      console.log(err);
    });
}

