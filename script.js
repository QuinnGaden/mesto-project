let popup = document.querySelector ('.popup');
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

let closebtn = document.querySelector ('.popup__btn-close');
  closebtn.addEventListener ('click', function popupclose(){
  popup.classList.remove ('popup_opened');
});

let savebtn = document.querySelector ('.popup__btn-save');
  savebtn.addEventListener ('click', function popupclose(){
  popup.classList.remove ('popup_opened');
});
  
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
profname.innerHTML = nameInput.value;
proftext.innerHTML = jobInput.value;
// formname.textContent = nameInput.value;
// formtext.textContent = jobInput.value;
// Получите значение полей jobInput и nameInput из свойства value
 
// Выберите элементы, куда должны быть вставлены значения полей
  
// Вставьте новые значения с помощью textContent

}

// Прикрепляем обработчик к форме:

// он будет следить за событием “submit” - «отправка»

formElement.addEventListener('submit', formSubmitHandler);




