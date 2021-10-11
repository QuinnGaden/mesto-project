import {closePopup, openPopup} from './modal.js';
import {popupAddСard, placeInput, linkInput} from '../pages/index.js';
import {addCard} from './card.js';
import {disableSubmitBtn} from './validate.js';
export {openCardFormButton};

// Открытие попапа редактирования карточек
const openCardFormButton = document.querySelector('.profile__add-button');
openCardFormButton.addEventListener('click', function () {  
  openPopup(popupAddСard);
});
//Форма добавления карточки
const formAddPlace = document.querySelector('.popup__form_type_addcard');
formAddPlace.addEventListener('submit', () => {  
  const cardData = {
    name: placeInput.value,
    link: linkInput.value,
  };
  formAddPlace.reset(); 
  disableSubmitBtn(document.getElementById('editCardBtn'), 'popup__btn-save_type_disabled'); 
  addCard(cardData);
  closePopup(popupAddСard);
});