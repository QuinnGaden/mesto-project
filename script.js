// Попап редактирования профиля
let popupEdit = document.querySelector ('.popup_edit');
let inputname = popupEdit.querySelector ('.popup__item_el_name');
let inputtext = popupEdit.querySelector ('.popup__item_el_text');

// Попап редактирования карточки
let popupAddcards = document.querySelector ('.popup_addcard');
let palceInput = popupAddcards.querySelector ('.popup__item_el_place');
let linkInput = popupAddcards.querySelector ('.popup__item_el_link');

// Попап фотографии
let popupPhoto = document.querySelector ('.popup_photo');
let popupImage = document.querySelector ('.popup__image');
let popupFigcaption = document.querySelector ('.popup__figcaption');

// Профиль
let profname = document.querySelector ('.profile__name');
let proftext = document.querySelector ('.profile__text');

// Функция открытия попапа
function openPopup (popup) {
  popup.classList.add ('popup_opened');
};

// Функция закрытия попапа
function closePopup (popup) {
  popup.classList.remove ('popup_opened');
};

// Функция закрытия крестиком
function setEventListenerCloseBtn() {
  const popupCloseBtns = document.querySelectorAll(".popup__btn-close");
  popupCloseBtns.forEach(button => {
      button.addEventListener("click", (evt) => {
      evt.target.closest('.popup').classList.remove('popup_opened');
    }); 
  });
};

// Функция открытия попапа картинки
function openPopupPhoto (cardData) {
  popupImage.src = `${cardData.link}`;
  popupFigcaption.textContent = `${cardData.name}`;
  openPopup (popupPhoto);
}

// Открытие попапа с заполнением инпутов
let editbtn = document.querySelector ('.profile__edit-button');
  editbtn.addEventListener('click', function () {
    openPopup(popupEdit);
    inputname.value = profname.innerText;
    inputtext.value = proftext.innerText;
  });

// Открытие попапа редактирования карточек
let addbtn = document.querySelector ('.profile__add-button');
  addbtn.addEventListener ('click', function () {
    openPopup(popupAddcards);
  }); 

// Закрытие попапов с крестика
let closebtn = document.querySelector ('.popup__btn-close');
  closebtn.addEventListener ('click', function (){
    setEventListenerCloseBtn();
});

//Форма добавления карточки
let formAddPlace = document.querySelector ('.popup__form_addcard');
const formAddCard = formAddPlace;
formAddCard.addEventListener ('submit', (evt) => {
  evt.preventDefault ();
  const cardData = { 
    name: palceInput.value, 
    link: linkInput.value, 
  };
  formAddCard.reset ();
  addCard (cardData);
  closePopup (popupAddcards);
});

// Форма редактирования профиля
let formedit = document.querySelector ('.popup__form_edit');
const formElement = formedit;
const nameInput = formElement.querySelector ('.popup__item_el_name');
const jobInput = formElement.querySelector ('.popup__item_el_text');
function formSubmitHandler (evt) {
  evt.preventDefault(); 
  profname.textContent = nameInput.value;
  proftext.innerHTML = jobInput.value;
  closePopup (popupEdit);
};
formElement.addEventListener('submit', formSubmitHandler);

// Массив с готовым содержимым карточек
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

// Подгрузка карточек из массива
function createcards () {
  initialCards.forEach ( (cardData) => {
    addCard(cardData);
  });     
}; 
createcards ();

function createCard (cardData) {
  const cardTemplate = document.querySelector ('#card-template').content;
  const cardElement = cardTemplate.querySelector ('.elements__item').cloneNode(true); 
  cardElement.querySelector ('.elements__image').src = `${cardData.link}`;
  cardElement.querySelector ('.elements__name').textContent = `${cardData.name}`;

  cardElement.querySelector ('.elements__vector').addEventListener ('click', (evt) => {
    evt.target.classList.toggle ('elements__vector_active');
  });

  cardElement.querySelector ('.elements__trash').addEventListener('click', (evt) => {
    evt.target.closest ('.elements__item').remove ()
  });

  cardElement.querySelector ('.elements__image').addEventListener('click', () => openPopupPhoto (cardData));

  return cardElement
   
}

function addCard(cardData) {
  const card = document.querySelector ('.elements__items');
  card.prepend (createCard (cardData));
  
};
 