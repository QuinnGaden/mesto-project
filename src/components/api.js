import {profileName, profileText, avatarImage} from '../pages/index.js';
export {getInitialCards, saveProfileData, saveProfileAva, addNewCard, getUserProfile, toggleLikeCard, config};

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

// Запрос юзера
const getUserProfile = () => {
  return fetch(`${config.baseUrl}/users/me`, {
    method: 'GET',
    headers: {
      authorization: `${config.headers.authorization}`      
    }    
  })   
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

// Запрос на снятие и установку лайка карточки
const toggleLikeCard = (evt, cardData) => {
  if (!evt.target.classList.contains('elements__vector_active')) {
    return fetch(`${config.baseUrl}/cards/likes/${cardData._id}`, {
      method: 'DELETE',
      headers: {
        authorization: `${config.headers.authorization}`,
        'Content-Type': 'application/json'
      },
    });
  } else {
    return fetch(`${config.baseUrl}/cards/likes/${cardData._id}`, {
      method: 'PUT',
      headers: {
        authorization: `${config.headers.authorization}`,
        'Content-Type': 'application/json'
      }
    });
  }
}