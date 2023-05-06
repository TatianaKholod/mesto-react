import { useState, useEffect } from 'react'
import logo from '../images/logo.svg';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

import api from '../utils/Api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({ name: '', link: '' });

  const [currentUser, setCurrentUser] = useState({ name: '', about: '', avatar: '' });

  useEffect(() => {
    api.getInitProfile()
      .then(userData => {
        setCurrentUser(userData);
      })
      .catch((err) => {
        console.log('Ошибка инициализации данных профиля' + err);
      });

  }, []);

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }
  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }
  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setSelectedCard({ name: '', link: '' });
  }
  function handleCardClick(card) {
    setSelectedCard(card);
  }
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <div className="page">
          <Header logo={logo} />
          <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick} />
          <Footer />
          <PopupWithForm title="Редактировать профиль" name="editProfile" textSubmit="Сохранить" onClose={closeAllPopups} isOpen={isEditProfilePopupOpen}>
            <input name="name" type="text" className="popup__input" placeholder="Имя" required minLength="2" maxLength="40" />
            <span className="popup__input-error name-error"></span>
            <input name="job" type="text" className="popup__input" placeholder="О себе" required minLength="2" maxLength="200" />
            <span className="popup__input-error job-error"></span>
          </PopupWithForm>
          <PopupWithForm title="Новое место" name="addCard" textSubmit="Создать" onClose={closeAllPopups} isOpen={isAddPlacePopupOpen}>
            <input name="name-card" type="text" className="popup__input" placeholder="Название" required minLength="2"
              maxLength="30" />
            <span className="popup__input-error name-card-error"></span>
            <input name="src-card" type="url" className="popup__input" placeholder="Ссылка на картинку" required />
            <span className="popup__input-error src-card-error"></span>
          </PopupWithForm>
          <PopupWithForm title="Обновить аватар" name="updateAvatar" textSubmit="Сохранить" onClose={closeAllPopups} isOpen={isEditAvatarPopupOpen}>
            <input name="src-avatar" type="url" className="popup__input" placeholder="Ссылка на аватар" required />
            <span className="popup__input-error src-avatar-error"></span>
          </PopupWithForm>
          <PopupWithForm title="Вы уверены?" name="delCard" textSubmit="Да" isOpen={false} onClose={closeAllPopups}>
          </PopupWithForm>
          <ImagePopup card={selectedCard} onClose={closeAllPopups} />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
