import {closePopup, openPopup, renderLoad} from './modal.js';
import {popupAvatarEdit, avatarImage, urlInput} from '../pages/index.js';
import {saveProfileAva} from '../components/api.js';
export {openEditAvatarButton};
const avatarForm = document.querySelector('.popup__form_type_avatar');
// Открытие попапа редактирования аватарки
const openEditAvatarButton = document.querySelector('.profile__image-button');
openEditAvatarButton.addEventListener('click', () =>{
  openPopup(popupAvatarEdit);
});
// Работоспособность кнопки сохранить на форме редактированиря аватарки
avatarForm.addEventListener('submit', () => {
  editAvatar();
  avatarForm.reset();
})

// Форма изменения аватарки 
const editAvatar = () => {   
  renderLoad(true);
  saveProfileAva(urlInput.value)
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`ошибка: ${res.status}`);
    })
    .then((res) => {
      avatarImage.src = `url('${res.avatar}'')`;
      closePopup(popupAvatarEdit);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      renderLoad(false)
    })

  // const formEditAvatarImage = document.querySelector('.popup__form_type_avatar');
  // formEditAvatarImage.addEventListener('submit', () => {
  //   avatarImage.src = urlInput.value;  
  //   closePopup(popupAvatarEdit);
  // });
}

