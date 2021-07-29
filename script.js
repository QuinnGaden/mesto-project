let popup = document.querySelector ('.popup');
let popupAddCards = document.querySelector ('.popup-addcards');
let profname = document.querySelector ('.profile__name');
let proftext = document.querySelector ('.profile__text');
let inputname = document.querySelector ('.popup__item_el_name');
let inputtext = document.querySelector ('.popup__item_el_text');
 
let editbtn = document.querySelector ('.profile__edit-button');
  editbtn.addEventListener ('click', function popupopen() {
    popup.classList.add ('popup_opened');    
    inputname.value = profname.innerText;
    inputtext.value = proftext.innerText;
  });

const addbtn = document.querySelector ('.profile__add-button');
  const popupAddCard = document.querySelector ('.popup-addcards');
  addbtn.addEventListener ('click', function popupopen(){
    popupAddCard.classList.add ('popup-addcards_opened');
  })  

let closebutton = document.querySelector ('.popup-addcards__btn-close');
  closebutton.addEventListener ('click', function popupclose(){
  popupAddCards.classList.remove ('popup-addcards_opened');
});  

let closebtn = document.querySelector ('.popup__btn-close');
  closebtn.addEventListener ('click', function popupclose(){
  popup.classList.remove ('popup_opened');
});

let savebtn = document.querySelector ('.popup__btn-save');
  savebtn.addEventListener ('click', function popupclose(){
  popup.classList.remove ('popup_opened');
});

let createbtn = document.querySelector ('.popup-addcards__btn-create');
createbtn.addEventListener ('click', function popupclose(){
  popupAddCards.classList.remove ('popup-addcards_opened');
});  

//Форма добавления карточки
let formAddPlace = document.querySelector ('.popup-addcards__form');
const formAddCard = formAddPlace;
const palceInput = formAddCard.querySelector ('.popup-addcards__item_el_place');
const linkInput = formAddCard.querySelector ('.popup-addcards__item_el_link');
function formSubmit (evt) {
  evt.preventDefault (); 
  const cardTemplate  = document.querySelector ('#card-template').content;
  const itemsElements = document.querySelector  ('.elements__items');
  const itemElement = cardTemplate.querySelector('.elements__item').cloneNode(true);
  itemElement.querySelector ('.elements__image').src = linkInput.value;
  itemElement.querySelector ('.elements__name').textContent = palceInput.value;
  itemsElements.prepend(itemElement);
 
}


formAddCard.addEventListener('submit', formSubmit);




// Форма редактирования
let formedit = document.querySelector ('.popup__form');
const formElement = formedit;
// Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
const nameInput = formElement.querySelector ('.popup__item_el_name');
// Воспользуйтесь инструментом .querySelector()
const jobInput = formElement.querySelector ('.popup__item_el_text');
// Воспользуйтесь инструментом .querySelector()
// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
  evt.preventDefault(); 
// Эта строчка отменяет стандартную отправку формы.  
// Так мы можем определить свою логику отправки.                       
// О том, как это делать, расскажем позже.
  profname.textContent = nameInput.value;
  proftext.innerHTML = jobInput.value;
// Получите значение полей jobInput и nameInput из свойства value
// Выберите элементы, куда должны быть вставлены значения полей
// Вставьте новые значения с помощью textContent

}
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»

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
for (let i = 0; i <= initialCards.length - 1; i++) {
  const cardTemplate  = document.querySelector ('#card-template').content;
  const itemsElements = document.querySelector  ('.elements__items');
  const itemElement = cardTemplate.querySelector('.elements__item').cloneNode(true);
  itemElement.querySelector ('.elements__image').src = initialCards[i].link;
  itemElement.querySelector ('.elements__name').textContent = initialCards[i].name;
  itemsElements.prepend(itemElement);
} 

 