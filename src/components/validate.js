// включение валидации вызовом configs
// все настройки передаются при вызове
const configs = {
  popupSelector: '.popup',
  formSelector: '.popup__form',   
  inputSelector: '.popup__item',
  buttonSelector: '.popup__btn-save'
};
//Проверка инпутов на валидность и выводит текст ошибки
const inputIsValid = (input) => {
  const errorContainer = document.getElementById(`${input.name}-error`);
  if (!input.validity.valid) {
    input.classList.add('popup__item_type_error');
    errorContainer.textContent = input.validationMessage;    
  } else {
    input.classList.remove('popup__item_type_error');
    errorContainer.textContent = '';    
  } 
};
// Включает кнопку если форма валидна
const enableButtonIfFormIsValid = (form, inputs, buttonSelector) => {
  const button = form.querySelector(buttonSelector);
  const formIsValid = inputs.every(input => input.validity.valid);
  if (formIsValid) {
    button.removeAttribute('disabled');
  } else {
    button.setAttribute('disabled', 'disabled');
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
// enableValidation(configs);
export {configs, enableValidation};