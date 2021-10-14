import {profileName, profileText, avatarImage} from '../pages/index.js';
export {getInitialCards, saveProfileData, saveProfileAva, addNewCard, getUserProfile, config};

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
const getUserProfile = () => {
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


// Редактирование данных пользователя на сервере
const saveProfileData = (name, about) => {
  return fetch(`${config.baseUrl}/users/me`, {
    method: 'PATCH',
    headers: {
      authorization: `${config.headers.authorization}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: name,
      about: about
    })
  });
}

// Редактирование аватара пользователя
const saveProfileAva = (avatar) => {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: 'PATCH',
    headers: {
      authorization: `${config.headers.authorization}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      avatar: avatar
    })
  });
}

// Добавление карточки на сервер
const addNewCard = (name, link) => {
  return fetch(`${config.baseUrl}/cards`, {
    method: 'POST',
    headers: {
      authorization: `${config.headers.authorization}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: name,
      link: link
    })  
  });
}