import './index.css';
import {configs, enableValidation} from '../components/validate.js';
import {renderArrCards} from '../components/card.js';
import {openEditAvatarButton} from '../components/modalEditAvatar.js';
import {openCardFormButton} from '../components/modalEditCards.js';
import {openEditFormButton} from '../components/modalEditProfile.js';
renderArrCards();
enableValidation(configs);
