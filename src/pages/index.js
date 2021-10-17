import './index.css';
import {configs, enableValidation} from '../components/validate.js';
import { userId, getUserId} from '../components/card.js';
import {openEditAvatarButton} from '../components/modalEditAvatar.js';
import {openCardFormButton} from '../components/modalEditCards.js';
import {openEditFormButton} from '../components/modalEditProfile.js';
import {stopPropagation} from '../components/modal.js';
import {cards, user, getUserProfile, getInitialCards} from '../components/api.js';
import {addInitialCards} from '../components/card.js';
export {popupAvatarEdit, avatarImage, popupEdit, inputName, inputText, popupAddСard, placeInput, linkInput, popupPhoto, popupImage, popupFigcaption, 
  profileName, profileText, cardTemplate, templateImage, popupContainers, editAvatarBtn, editProfileBtn, editCardBtn, urlInput};

//  Попап редактирования аватарки
const popupAvatarEdit = document.querySelector('.popup_type_avatar');
const avatarImage = document.querySelector('.profile__image');
const urlInput = document.querySelector('.popup__item_el_url');
const editAvatarBtn = document.getElementById('editAvatarBtn');
// Попап редактирования профиля
const popupEdit = document.querySelector('.popup_type_edit');
const inputName = popupEdit.querySelector('.popup__item_el_name');
const inputText = popupEdit.querySelector('.popup__item_el_text');
const editProfileBtn = document.getElementById('editProfileBtn');
// Попап редактирования карточки
const popupAddСard = document.querySelector('.popup_type_addcard');
const placeInput = popupAddСard.querySelector('.popup__item_el_place');
const linkInput = popupAddСard.querySelector('.popup__item_el_link');
const editCardBtn = document.getElementById('editCardBtn');
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

// Общий промис для загрузки профиля и карточек
const loadData = Promise.all([getUserProfile(), getInitialCards()])
  .then (data => {
    getUserId(data[0]._id);
    renderUserProfile(data[0].name, data[0].about, data[0].avatar)
    addInitialCards(data[1]);
  })
  .catch((err) => {
    console.log(err);
  });

// Отрисовка профиля пользователя
const renderUserProfile = (name, about, avatar) => {       
  profileName.textContent = name;
  profileText.textContent = about;
  avatarImage.src = avatar;     
}

// Остановка высплытия на форме
stopPropagation();
// Включение валидации
enableValidation(configs);

