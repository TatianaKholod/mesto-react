import api from '../utils/Api';
import { useState, useEffect, useContext } from 'react';
import Card from './Card';

import { CurrentUserContext } from '../contexts/CurrentUserContext';


function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  const { name, about, avatar, _id: idUser } = useContext(CurrentUserContext);
  const [cards, setCards] = useState([]);

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === idUser);

    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      // Формируем новый массив на основе имеющегося, подставляя в него новую карточку
      const newCards = cards.map((c) => c._id === card._id ? newCard : c);
      // Обновляем стейт
      setCards(newCards);
    });
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id);
    // Формируем новый массив на основе имеющегося, без удаленной карточки
    const newCards = cards.filter((c) => c._id !== card._id );
    // Обновляем стейт
    setCards(newCards);

  }

  useEffect(() => {
    api.getInitialCards()
      .then(dataCards => setCards(dataCards))
      .catch((err) => {
        console.log('Ошибка инициализации данных карточек' + err);
      });
  }, []);


  return (
    <main>
      <section className="profile common-section" aria-label="Профиль">
        <div className="profile__avatar" style={{ backgroundImage: `url(${avatar})` }} ></div>
        <button name="update-avatar" aria-label="Обновить аватар" className="profile__update-avatar" type="button" onClick={onEditAvatar}></button>
        <div className="profile__info-container">
          <div className="profile__info">
            <h1 className="profile__name">{name}</h1>
            <p className="profile__job">{about}</p>
          </div>
          <button name="edit-button" className="profile__edit-button button-hover" aria-label="Редактировать профиль"
            type="button" onClick={onEditProfile}></button>
        </div>
        <button name="add-button" className="profile__add-button button-hover" aria-label="Добавить место"
          type="button" onClick={onAddPlace}></button>
      </section>
      <section className="gallery common-section" aria-label="Галерея">
        <ul className="gallery__card-list">
          {cards.map(cardItem => <Card key={cardItem._id} card={cardItem} onCardClick={onCardClick} onCardLike={handleCardLike} onCardDelete={handleCardDelete} />
          )}
        </ul>
      </section>
    </main>

  );
}

export default Main; 