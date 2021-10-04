//  Попап редактирования аватарки
const popupAvatarEdit = document.querySelector('.popup_type_avatar');
const avatarImage = document.querySelectorAll('.profile__image');
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

//Форма добавления карточки
const formAddPlace = document.querySelector('.popup__form_type_addcard');
formAddPlace.addEventListener('submit', () => {  
  const cardData = {
    name: placeInput.value,
    link: linkInput.value,
  };
  formAddPlace.reset();
  addCard(cardData);
  closePopup(popupAddСard);
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
//Функция подгрузка карточек из массива
function renderArrCards() {
  initialCards.forEach((cardData) => {
    addCard(cardData);
  });
};
renderArrCards();
// Функция создания карточки
function createCard(cardData) {
  const cardElement = cardTemplate.querySelector('.elements__item').cloneNode(true);
  const imageTemplate = cardElement.querySelector('.elements__image');
  imageTemplate.src = `${cardData.link}`;
  imageTemplate.alt = `${cardData.name}`;
  cardElement.querySelector('.elements__name').textContent = `${cardData.name}`;
  cardElement.querySelector('.elements__vector').addEventListener('click', (evt) => {
    evt.target.classList.toggle('elements__vector_active');
  });
  cardElement.querySelector('.elements__trash').addEventListener('click', (evt) => {
    evt.target.closest('.elements__item').remove();
  });
  imageTemplate.addEventListener('click', () => openPopupPhoto(cardData));
  return cardElement;
}
// Функция добавление карточки
function addCard(cardData) {
  const cardContainer = document.querySelector('.elements__items');
  cardContainer.prepend(createCard(cardData));
};
// включение валидации вызовом configs
// все настройки передаются при вызове
const configs = {
  popupSelector: '.popup',
  formSelector: '.popup__form',   
  inputSelector: '.popup__item',
  buttonSelector: '.popup__btn-save'
};
//Проверка инпутов на валидность и выводит текст ошибки
const inputIsValid = (input) => {
  const errorContainer = document.getElementById(`${input.name}-error`);
  if (!input.validity.valid) {
    input.classList.add('popup__item_type_error');
    errorContainer.textContent = input.validationMessage;    
  } else {
    input.classList.remove('popup__item_type_error');
    errorContainer.textContent = '';    
  } 
};
// Включает кнопку если форма валидна
const enableButtonIfFormIsValid = (form, inputs, buttonSelector) => {
  const button = form.querySelector(buttonSelector);
  const formIsValid = inputs.every(input => input.validity.valid);
  if (formIsValid) {
    button.removeAttribute('disabled');
  } else {
    button.setAttribute('disabled', 'disabled');
  }
};
// Включение валидации
const enableValidation = (config) => {
  const forms = Array.from(document.querySelectorAll(config.formSelector));
  forms.forEach((form) => {
    form.addEventListener('submit', (eve)=> {      
      eve.preventDefault();            
    });
    const inputs = Array.from(form.querySelectorAll(config.inputSelector));
    inputs.forEach (input => {
      input.addEventListener('input', () => {
        inputIsValid(input);
        enableButtonIfFormIsValid(form, inputs, config.buttonSelector);
      });
    });
  });  
};
enableValidation(configs);
