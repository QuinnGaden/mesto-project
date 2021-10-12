import {inactiveButtonClass} from './constants.js';
export {configs, enableValidation, disableSubmitBtn};

// включение валидации вызовом configs
// все настройки передаются при вызове
const configs = {
  popupSelector: '.popup',
  formSelector: '.popup__form',   
  inputSelector: '.popup__item',
  buttonSelector: '.popup__btn-save',
  errorInputSelector: 'popup__item_type_error',
  errorContainerSelector: 'popup__input-error_active'  
};
const showInputError = (inputSelector, errorInputSelector, errorContainerSelector) => {
  const errorContainer = document.getElementById(`${inputSelector.name}-error`);
  inputSelector.classList.add(configs.errorInputSelector);
  errorContainer.textContent = inputSelector.validationMessage;
  errorContainer.classList.add(configs.errorContainerSelector);
};
const hideInputError = (inputSelector, errorInputSelector, errorContainerSelector) => {
  const errorContainer = document.getElementById(`${inputSelector.name}-error`);
  inputSelector.classList.remove(configs.errorInputSelector);
  errorContainer.classList.remove(configs.errorContainerSelector);
  errorContainer.textContent = '';
};
//Проверка инпутов на валидность и выводит текст ошибки
const inputIsValid = (inputSelector, errorInputSelector, errorContainerSelector) => {
  // const errorContainer = document.getElementById(`${inputSelector.name}-error`);
  if (!inputSelector.validity.valid) {
    showInputError(inputSelector, errorInputSelector, errorContainerSelector);
    // inputSelector.classList.add('popup__item_type_error');
    // errorContainer.textContent = inputSelector.validationMessage;     
  } else {
    hideInputError(inputSelector, errorInputSelector, errorContainerSelector);
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