import api from '../utils/Api';
import { useState, useEffect } from 'react';
import Card from './Card';

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    //if (!userName)
    api.getInitProfile()
      .then(userData => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
      })
      .catch((err) => {
        console.log('Ошибка инициализации данных профиля' + err);
      });

  }, []);

  useEffect(() => {
    //if (!cards.length)
    api.getInitialCards()
      .then(dataCards => setCards(dataCards))
      .catch((err) => {
        console.log('Ошибка инициализации данных карточек' + err);
      });
  }, []);


  return (
    <main>
      <section className="profile common-section" aria-label="Профиль">
        <div className="profile__avatar" style={{ backgroundImage: `url(${userAvatar})` }} alt="Аватар пользователя"></div>
        <button name="update-avatar" aria-label="Обновить аватар" className="profile__update-avatar" type="button" onClick={onEditAvatar}></button>
        <div className="profile__info-container">
          <div className="profile__info">
            <h1 className="profile__name">{userName}</h1>
            <p className="profile__job">{userDescription}</p>
          </div>
          <button name="edit-button" className="profile__edit-button button-hover" aria-label="Редактировать профиль"
            type="button" onClick={onEditProfile}></button>
        </div>
        <button name="add-button" className="profile__add-button button-hover" aria-label="Добавить место"
          type="button" onClick={onAddPlace}></button>
      </section>
      <section className="gallery common-section" aria-label="Галерея">
        <ul className="gallery__card-list">
          {cards.map(cardItem => <Card key={cardItem._id} card={cardItem} onCardClick={onCardClick} />
          )}
        </ul>
      </section>
    </main>

  );
}

export default Main; 