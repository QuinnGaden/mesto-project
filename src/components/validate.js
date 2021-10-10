
export {configs, enableValidation, disableSubmitBtn};

// включение валидации вызовом configs
// все настройки передаются при вызове
const configs = {
  popupSelector: '.popup',
  formSelector: '.popup__form',   
  inputSelector: '.popup__item',
  buttonSelector: '.popup__btn-save'
};
//Проверка инпутов на валидность и выводит текст ошибки
const inputIsValid = (inputSelector) => {
  const errorContainer = document.getElementById(`${inputSelector.name}-error`);
  if (!inputSelector.validity.valid) {
    inputSelector.classList.add('popup__item_type_error');
    errorContainer.textContent = inputSelector.validationMessage;     
  } else {
    inputSelector.classList.remove('popup__item_type_error');
    errorContainer.textContent = '';    
  } 
};
// Включает кнопку если форма валидна
const enableButtonIfFormIsValid = (form, inputs, buttonSelector, ) => {
  const button = form.querySelector(buttonSelector);
  const formIsValid = inputs.every(inputSelector => inputSelector.validity.valid);
  if (formIsValid) {    
    button.removeAttribute('disabled');
    button.classList.remove('popup__btn-save_type_disabled');
  } else {    
    button.setAttribute('disabled', 'disabled');
    button.classList.add('popup__btn-save_type_disabled');
  }  
};
// Отключение сабмит кнопки
const disableSubmitBtn = (buttonSelector, inactiveButtonClass) => {
  buttonSelector.classList.add(inactiveButtonClass);
  buttonSelector.disabled = true;
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