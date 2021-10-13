const cards = () => {
  fetch('https://mesto.nomoreparties.co/v1/plus-cohort-2/cards', {
    method: 'GET',
    headers: {
      authorization: '0c2cab2b-faf8-4ab5-8a1f-3a0ce4776b46'
    }
  })
    .then(res => res.json())
    .then((result) => {
      console.log(result);
    }); 
} 
cards(); 

const user = () => {
  fetch('https://mesto.nomoreparties.co/v1/plus-cohort-2/users/me', {
    method: 'GET',
    headers: {
      authorization: '0c2cab2b-faf8-4ab5-8a1f-3a0ce4776b46'
    }
  })
    .then(res => res.json())
    .then((result) => {
      console.log(result);
    }); 
} 
user();  
export {cards, user};   