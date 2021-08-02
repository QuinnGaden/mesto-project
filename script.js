let popup = document.querySelector ('.popup');
const cardTemplate = document.querySelector ('#card-template').content;
let popupEdit = document.querySelector ('.popup_edit');
let popupAddcards = document.querySelector ('.popup_addcard');
let profname = document.querySelector ('.profile__name');
let proftext = document.querySelector ('.profile__text');
let inputname = document.querySelector ('.popup__item_el_name');
let inputtext = document.querySelector ('.popup__item_el_text');

<<<<<<< Updated upstream
    
let editbtn = document.querySelector ('.profile__edit-button');
  editbtn.addEventListener ('click', function popupopen() {
    popup.classList.add ('popup_opened');    
=======
function openPopup (popup) {
  popup.classList.add ('popup_opened');
};

function closePopup (popup) {
  popup.classList.remove ('popup_opened');
};

function setEventListenerCloseBtn() {
  const popupCloseBtns = document.querySelectorAll(".popup__btn-close");
  popupCloseBtns.forEach(button => {
      button.addEventListener("click", (evt) => {
      evt.target.closest('.popup').classList.remove('popup_opened');
    }); 
  });
};

let editbtn = document.querySelector ('.profile__edit-button');
  editbtn.addEventListener('click', function () {
    openPopup(popupEdit);
>>>>>>> Stashed changes
    inputname.value = profname.innerText;
    inputtext.value = proftext.innerText;
  });

<<<<<<< Updated upstream
const addbtn = document.querySelector ('.profile__add-button');
  const popupAddCard = document.querySelector ('.popup-addcards');
  addbtn.addEventListener ('click', function popupopen(){
    popupAddCard.classList.add ('popup-addcards_opened');
  })  
=======
let addbtn = document.querySelector ('.profile__add-button');
  addbtn.addEventListener ('click', function () {
    openPopup(popupAddcards);
  });  
>>>>>>> Stashed changes

let closebtn = document.querySelector ('.popup__btn-close');
  closebtn.addEventListener ('click', function (){
    setEventListenerCloseBtn();
});

let savebtn = document.querySelector ('.popup__btn-save');
  savebtn.addEventListener ('click', function (){
    
});


const itemsElements = document.querySelector  ('.elements__items');
 

//Форма добавления карточки
let formAddPlace = document.querySelector ('.popup__form_addcard');
const formAddCard = formAddPlace;
const palceInput = formAddCard.querySelector ('.popup__item_el_place');
const linkInput = formAddCard.querySelector ('.popup__item_el_link');
function formSubmit (evt) {
  evt.preventDefault (); 
  const itemElement = cardTemplate.querySelector('.elements__item').cloneNode(true); 
  itemElement.querySelector ('.elements__image').src = linkInput.value;
  itemElement.querySelector ('.elements__name').textContent = palceInput.value;
  itemsElements.prepend(itemElement);
  
  closePopup (popupAddcards);
  
  
}

formAddCard.addEventListener('submit', formSubmit);

// Форма редактирования
let formedit = document.querySelector ('.popup__form_edit');
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
  closePopup (popupEdit);
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
function createcards () {
  for (let i = 0; i <= initialCards.length - 1; i++) {
    const itemElement = cardTemplate.querySelector('.elements__item').cloneNode(true);
    itemElement.querySelector ('.elements__image').src = initialCards[i].link;
    itemElement.querySelector ('.elements__name').textContent = initialCards[i].name;
    
    itemsElements.prepend(itemElement);
    
  } 
}
createcards ();

function createCard (cardData) {
  const cardElement = cardTemplate.querySelector ('.elements__item').cloneNode(true); 
  const elementImage = cardElement.querySelector ('.elements__image');
  const elementText = cardElement.querySelector ('.elements__name');
  const elementTrash = cardElement.querySelector ('.elements__trash');
  const elementLikebtn = cardElement.querySelector ('.elements__vector');
  
  elementImage.setAttribute('src', cardData.link);
  elementImage.setAttribute('alt', cardData.name);
  elementLikebtn.addEventListener ('click', () => {
    elementLikebtn.classList.toggle ('elements__vector_active');
  });

   return cardElement
   
}


function addCard(cardData, cardContainer) {
  const card = createCard(cardData);
  
  ...
}
formCards.addEventListener('submit', (evt) => {
  ...
  addCard({
    name: БЕРЕШЬ DOM-ELEMENT (НУЖНЫЙ INPUT В РАЗМЕТКЕ) И ВЫВОДИШЬ ЕГО VALUE,
    link: БЕРЕШЬ DOM-ELEMENT (НУЖНЫЙ INPUT В РАЗМЕТКЕ) И ВЫВОДИШЬ ЕГО VALUE
  }, cardsList);
  ...
})
initialCards.forEach ((item) => {
  ...
  addCard(item, cardsList)
})



// let likeBtns = document.querySelectorAll ('.elements__vector');
// likeBtns.forEach((button)=>{
//   button.addEventListener('click',()=>{
//       button.classList.toggle('elements__vector_active');
//   });
// });

<<<<<<< Updated upstream
let likeBtns = document.querySelectorAll ('.elements__vector');
console.log(likeBtns)
likeBtns.forEach((elem)=>{
  elem.addEventListener('click',()=>{
      elem.parentNode.querySelector('.elements__vector').classList.toggle('elements__vector_active');
  });
});
=======



>>>>>>> Stashed changes




 