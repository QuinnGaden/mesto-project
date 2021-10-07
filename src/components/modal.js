import { popupContainers } from './constants.js';
export {closePopup, openPopup};
// Функция открытия попапа
const openPopup = (popup) => {
  popup.classList.add('popup_opened'); 
  document.addEventListener('keydown', closePopoupEsc); 
  popup.addEventListener('mousedown', closeOpenedPopup);
};
// Функция закрытия попапа
const closePopup = (popup) => {   
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