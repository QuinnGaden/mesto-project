import {closePopup, openPopup} from './modal.js';
import {popupAvatarEdit, avatarImage, urlInput} from './constants.js';
export {openEditAvatarButton};

// Открытие попапа редактирования аватарки
const openEditAvatarButton = document.querySelector('.profile__image-button');
openEditAvatarButton.addEventListener('click', () =>{
  openPopup(popupAvatarEdit);
});
// Форма изменения аватарки
const formEditAvatarImage = document.querySelector('.popup__form_type_avatar');
formEditAvatarImage.addEventListener('submit', () => {
  avatarImage.src = urlInput.value;
  closePopup(popupAvatarEdit);
});