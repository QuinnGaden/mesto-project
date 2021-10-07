import { popupAvatarEdit, avatarImage, popupEdit, inputName, inputText, popupAddСard, linkInput, popupPhoto, popupImage, popupFigcaption, 
  profileName, profileText, popupContainers
} from './constants.js';
// Функция открытия попапа
function openPopup(popup) {
  popup.classList.add('popup_opened'); 
  document.addEventListener('keydown', closePopoupEsc); 
  popup.addEventListener('mousedown', closeOpenedPopup);
};
// Функция закрытия попапа
function closePopup(popup) {  
  popup.classList.remove('popup_opened');  
  document.addEventListener('keydown', closePopoupEsc); 
  popup.addEventListener('mousedown', closeOpenedPopup);
};
// функция закрытия popup по нажатию esc
function closePopoupEsc(evt) {  
  if (evt.key === 'Escape') {    
    closeOpenedPopup();
  };
};
//Функция закрытия уже открытого popup
function closeOpenedPopup() {
  const popupActive = document.querySelector('.popup_opened');  
    closePopup(popupActive);    
}  
// Остановили всплытие на попап контейнере, чтобы при клике на форму она не закрывалась
popupContainers.forEach((container) => {
  container.addEventListener('mousedown', (evt) => {
    evt.stopPropagation();
  });
});
// Функция закрытия крестиком
function setEventListenerCloseBtn() {
  const popupCloseBtns = document.querySelectorAll('.popup__btn-close');
  popupCloseBtns.forEach(button => { 
    button.addEventListener("click", (evt) => {    
      const closestPopup = evt.target.closest('.popup');
      closePopup(closestPopup);      
    });
  });  
};
setEventListenerCloseBtn();
// Функция открытия попапа картинки
function openPopupPhoto(cardData) {
  popupImage.src = `${cardData.link}`;
  popupImage.alt = `${cardData.name}`;
  popupFigcaption.textContent = `${cardData.name}`;
  openPopup(popupPhoto);  
}
// Открытие попапа редактирования аватарки
const openEditAvatarButton = document.querySelector('.profile__image-button');
openEditAvatarButton.addEventListener('click', () =>{
  openPopup(popupAvatarEdit);
});
// Открытие попапа с заполнением инпутов
const openEditFormButton = document.querySelector('.profile__edit-button');
openEditFormButton.addEventListener('click', function () {  
  openPopup(popupEdit);
  inputName.value = profileName.textContent;
  inputText.value = profileText.textContent;  
});
// Открытие попапа редактирования карточек
const openCardFormButton = document.querySelector('.profile__add-button');
openCardFormButton.addEventListener('click', function () {  
  openPopup(popupAddСard);
});
// Форма изменения аватарки
const formEditAvatarImage = document.querySelector('.popup__form_type_avatar');
formEditAvatarImage.addEventListener('submit', () => {
  avatarImage.src = linkInput.value;
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