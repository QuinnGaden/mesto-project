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
  savebtn.addEventListener ('click', function (){
    profname.value = inputname.innerText;
    proftext.value = inputtext.innerText;
    popupclose()
  });

let formedit = document.querySelector ('.popup__form');

const formElement = document.querySelector ('.popup__profile-info');
// Воспользуйтесь методом querySelector()

// Находим поля формы в DOM

const nameInput = formElement.querySelector ('.popup__item_el_name');
// Воспользуйтесь инструментом .querySelector()

const jobInput = formElement.querySelector ('.popup__item_el_text');
// Воспользуйтесь инструментом .querySelector()

formElement.addEventListener('submit', function () {
  console.log('Форма отправлена')});
// Обработчик «отправки» формы, хотя пока

// она никуда отправляться не будет

function formSubmitHandler (evt) {
  evt.preventDefault(); 
// Эта строчка отменяет стандартную отправку формы.

                        
// Так мы можем определить свою логику отправки.

                        
// О том, как это делать, расскажем позже.


formname.textContent = popup__item_el_name.value;
formtext.textContent = popup__item_el_text.value;
// Получите значение полей jobInput и nameInput из свойства value

 
// Выберите элементы, куда должны быть вставлены значения полей
  
// Вставьте новые значения с помощью textContent

}
console.log (profname);
console.log (proftext);
// Прикрепляем обработчик к форме:

// он будет следить за событием “submit” - «отправка»

formElement.addEventListener('submit', formSubmitHandler);



