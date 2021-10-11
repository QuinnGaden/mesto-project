import {openPopup, closePopup} from './modal.js';
import {popupEdit, inputName, inputText, profileName, profileText} from '../pages/index.js';
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
function handlerProfileFormSubmit() {  
  profileName.textContent = nameInput.value;
  profileText.textContent = jobInput.value;
  closePopup(popupEdit);
};
formEdit.addEventListener('submit', handlerProfileFormSubmit);