import './index.css';
import {configs, enableValidation} from '../components/validate.js';
import {getArrayCards, userId, getUserId} from '../components/card.js';
import {openEditAvatarButton} from '../components/modalEditAvatar.js';
import {openCardFormButton} from '../components/modalEditCards.js';
import {openEditFormButton} from '../components/modalEditProfile.js';
import {stopPropagation} from '../components/modal.js';
import {cards, user, getUserProfile} from '../components/api.js';
export {popupAvatarEdit, avatarImage, popupEdit, inputName, inputText, popupAddСard, placeInput, linkInput, popupPhoto, popupImage, popupFigcaption, 
  profileName, profileText, cardTemplate, templateImage, popupContainers, urlInput };

//  Попап редактирования аватарки
const popupAvatarEdit = document.querySelector('.popup_type_avatar');
const avatarImage = document.querySelector('.profile__image');
const urlInput = document.querySelector('.popup__item_el_url');
// Попап редактирования профиля
const popupEdit = document.querySelector('.popup_type_edit');
const inputName = popupEdit.querySelector('.popup__item_el_name');
const inputText = popupEdit.querySelector('.popup__item_el_text');
// Попап редактирования карточки
const popupAddСard = document.querySelector('.popup_type_addcard');
const placeInput = popupAddСard.querySelector('.popup__item_el_place');
const linkInput = popupAddСard.querySelector('.popup__item_el_link');
// Попап фотографии
const popupPhoto = document.querySelector('.popup_type_photo');
const popupImage = document.querySelector('.popup__image');
const popupFigcaption = document.querySelector('.popup__figcaption');
// Профиль
const profileName = document.querySelector('.profile__name');
const profileText = document.querySelector('.profile__text');
// Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;
// Картинка из темплейта
const templateImage = document.querySelector('.elements__image');
// Все контейнеры попапов
const popupContainers = document.querySelectorAll('.popup__container');




// Отрисовка профиля пользователя
const renderUserProfile = () => {
  getUserProfile()
    .then(res => {
      if(res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .then((res) => {
      getUserId(res._id);
      profileName.textContent = res.name;
      profileText.textContent = res.about;
      avatarImage.src = res.avatar;
    })
    .catch((err) => {
      console.log(err);
    })
}
// ОТрисовка профиля юзера
renderUserProfile();
// Остановка высплытия на форме
stopPropagation();
// Включение валидации
enableValidation(configs);
// Получение массива карточек с сервера и отрисовка
getArrayCards();
