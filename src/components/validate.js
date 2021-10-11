import {inactiveButtonClass} from './constants.js';
export {configs, enableValidation, disableSubmitBtn};

// включение валидации вызовом configs
// все настройки передаются при вызове
const configs = {
  popupSelector: '.popup',
  formSelector: '.popup__form',   
  inputSelector: '.popup__item',
  buttonSelector: '.popup__btn-save'
};
const showInputError = (inputSelector) => {
  const errorContainer = document.getElementById(`${inputSelector.name}-error`);
  inputSelector.classList.add('form__input_type_error');
  errorContainer.textContent = inputSelector.validationMessage;
  errorContainer.classList.add('form__input-error_active');
};
const hideInputError = (inputSelector) => {
  const errorContainer = document.getElementById(`${inputSelector.name}-error`);
  inputSelector.classList.remove('form__input_type_error');
  errorContainer.classList.remove('form__input-error_active');
  errorContainer.textContent = '';
};
//Проверка инпутов на валидность и выводит текст ошибки
const inputIsValid = (inputSelector) => {
  // const errorContainer = document.getElementById(`${inputSelector.name}-error`);
  if (!inputSelector.validity.valid) {
    showInputError(inputSelector);
    // inputSelector.classList.add('popup__item_type_error');
    // errorContainer.textContent = inputSelector.validationMessage;     
  } else {
    hideInputError(inputSelector);
    // inputSelector.classList.remove('popup__item_type_error');
    // errorContainer.textContent = '';    
  } 
};
// Включение сабмит кнопки
const enableSubmitBtn = (buttonSelector, inactiveButtonClass) => {
  buttonSelector.classList.remove(inactiveButtonClass);
  buttonSelector.disabled = false;
};
// Отключение сабмит кнопки
const disableSubmitBtn = (buttonSelector, inactiveButtonClass) => {
  buttonSelector.classList.add(inactiveButtonClass);
  buttonSelector.disabled = true;
};
// Включает кнопку если форма валидна
const enableButtonIfFormIsValid = (form, inputs, buttonSelector, ) => {
  const button = form.querySelector(buttonSelector);
  const formIsValid = inputs.every(inputSelector => inputSelector.validity.valid);
  if (formIsValid) {  
    enableSubmitBtn(button, inactiveButtonClass);  
    // button.removeAttribute('disabled');
    // button.classList.remove('popup__btn-save_type_disabled');
  } else {   
    disableSubmitBtn(button, inactiveButtonClass); 
    // button.setAttribute('disabled', 'disabled');
    // button.classList.add('popup__btn-save_type_disabled');
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