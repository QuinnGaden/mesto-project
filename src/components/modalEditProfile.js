import {openPopup, closePopup, renderLoad} from './modal.js';
import {popupEdit, inputName, inputText, profileName, profileText, editProfileBtn} from '../pages/index.js';
import {saveProfileData} from './api.js';
export {openEditFormButton};
// Открытие попапа с заполнением инпутов
const openEditFormButton = document.querySelector('.profile__edit-button');
openEditFormButton.addEventListener('click', function () {  
  openPopup(popupEdit);
  inputName.value = profileName.textContent;
  inputText.value = profileText.textContent;  
});
// Форма редактирования профиля
const formEdit = document.querySelector('.popup__form_type_edit');
const nameInput = formEdit .querySelector('.popup__item_el_name');
const jobInput = formEdit .querySelector('.popup__item_el_text');
// функция редактирования профиля
function handlerProfileFormSubmit() {   
  renderLoad(editProfileBtn, true);
  saveProfileData(nameInput.value, jobInput.value)    
    .then((res) => {
      profileName.textContent = res.name;
      profileText.textContent = res.about;
      closePopup(popupEdit);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      renderLoad(editProfileBtn, false);      
    });
};
formEdit.addEventListener('submit', handlerProfileFormSubmit);