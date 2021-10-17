import {closePopup, openPopup, renderLoad} from './modal.js';
import {popupAvatarEdit, avatarImage, urlInput, editAvatarBtn} from '../pages/index.js';
import {saveProfileAva} from '../components/api.js';
import {disableSubmitBtn} from './validate.js';
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
  disableSubmitBtn(editAvatarBtn, 'popup__btn-save_type_disabled');
})
// Форма изменения аватарки 
const editAvatar = () => {   
  renderLoad(editAvatarBtn, true);
  saveProfileAva(urlInput.value)    
    .then((res) => {
      avatarImage.src = `${res.avatar}`;  
      avatarForm.reset();       
      closePopup(popupAvatarEdit);      
    })
    .catch((err) => {
      console.log(err);      
    })
    .finally(() => {
      renderLoad(editAvatarBtn, false)      
    })

  // const formEditAvatarImage = document.querySelector('.popup__form_type_avatar');
  // formEditAvatarImage.addEventListener('submit', () => {
  //   avatarImage.src = urlInput.value;  
  //   closePopup(popupAvatarEdit);
  // });
}

