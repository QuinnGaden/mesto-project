import {profileName, profileText, avatarImage} from '../pages/index.js';
export {getInitialCards, config};

const config = {
  baseUrl: 'https://mesto.nomoreparties.co/v1/plus-cohort-2',
  headers: {
    authorization: '0c2cab2b-faf8-4ab5-8a1f-3a0ce4776b46',
    'Content-Type': 'application/json'
  }
}

// Запрос объекта с карточками
const getInitialCards = () => {
  return fetch(`${config.baseUrl}/cards`, {
    headers: {
      authorization: `${config.headers.authorization}`
    }
  })     
}

// Запрос юзера и заполнение данных профиля с сервера
const getUser = () => {
  fetch(`${config.baseUrl}/users/me`, {
    method: 'GET',
    headers: {
      authorization: `${config.headers.authorization}`
    }
  })
    .then(res => res.json())
    .then((user) => {
      profileName.textContent = user.name;
      profileText.textContent = user.about;
      avatarImage.src = user.avatar;
      console.log(user);
    }); 
} 
getUser();   