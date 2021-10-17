import {popupContainers} from '../pages/index.js';
import {configs} from './validate.js';
export {closePopup, openPopup, stopPropagation, renderLoad};
     
// Функция открытия попапа
const openPopup = (popup) => {  
  popup.classList.add('popup_opened'); 
  document.addEventListener('keydown', closePopoupEsc); 
  popup.addEventListener('mousedown', closeOpenedPopup);  
};
// Остановили всплытие на попап контейнере, чтобы при клике на форму она не закрывалась
const stopPropagation = () => {
popupContainers.forEach((container) => {
  container.addEventListener('mousedown', (evt) => {
    evt.stopPropagation();
  });
});
}
// Функция закрытия попапа
const closePopup = (popup) => {   
  popup.classList.remove('popup_opened');  
  document.removeEventListener('keydown', closePopoupEsc); 
  popup.removeEventListener('mousedown', closeOpenedPopup);
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

// Функция изменениея кнопки в момент сохранения
function renderLoad(activeBtn, isLoading) { 
  if (isLoading) {
    activeBtn.textContent = 'Сохранение...';
  } else {
    activeBtn.textContent = 'Создать';
  }
}