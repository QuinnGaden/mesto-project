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
// Функция открытия попапа
function openPopup(popup) {
  popup.classList.add('popup_opened');
};
// Функция закрытия попапа
function closePopup(popup) {
  popup.classList.remove('popup_opened');
};
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
//Форма добавления карточки
const formAddPlace = document.querySelector('.popup__form_type_addcard');
formAddPlace.addEventListener('submit', (evt) => {
  evt.preventDefault();
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
function handlerProfileFormSubmit(evt) {
  evt.preventDefault();
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
