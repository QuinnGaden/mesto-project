import {closePopup, openPopup, renderLoad} from './modal.js';
import {popupAddСard, placeInput, linkInput} from '../pages/index.js';
import {addCard} from './card.js';
import {disableSubmitBtn} from './validate.js';
import {addNewCard} from './api.js';
export {openCardFormButton};

// Открытие попапа редактирования карточек
const openCardFormButton = document.querySelector('.profile__add-button');
openCardFormButton.addEventListener('click', function () {  
  openPopup(popupAddСard);
});
// Добавление новой карточки пользователя на сервер
function addNewUserCard() {
  renderLoad(true);
  addNewCard(placeInput.value, linkInput.value)
  .then(res => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`ошибка: ${res.status}`);
  })
  .then((res) => {
    addCard(res)
    closePopup(popupAddСard);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    renderLoad(false);
  });
  formAddPlace.reset();
}

// Форма добавления карточки
const formAddPlace = document.querySelector('.popup__form_type_addcard');
formAddPlace.addEventListener('submit', () => {  
  // const cardData = {
  //   name: placeInput.value,
  //   link: linkInput.value,
  // };
  addNewUserCard();
  // formAddPlace.reset(); 
  disableSubmitBtn(document.getElementById('editCardBtn'), 'popup__btn-save_type_disabled'); 
  // addCard(cardData);
  // closePopup(popupAddСard);
});