import { useContext } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card({ card, onCardClick, onCardLike }) {
  const { _id: idUser } = useContext(CurrentUserContext);
  // Определяем, являемся ли мы владельцем текущей карточки
  const isOwn = (card.owner._id === idUser);
  // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
  const isLiked = card.likes.some(i => i._id === idUser);


  function handleCardClick() {
    onCardClick(card);
  }

  function handleLikeClick() {
    onCardLike(card)
  }

  return (
    <li className="gallery__card">
      <img className="gallery__card-image" src={card.link} alt={card.name} onClick={handleCardClick} />
      <button name="card-delete" className={`gallery__card-delete button-hover ${isOwn ? 'gallery__card-delete_visible' : ''}`} aria-label="Удалить карточку"
        type="button"></button>
      <div className="gallery__card-name">
        <h2 className="gallery__text-name">{card.name}</h2>
        <div className="gallery__like-container">
          <button name="like-toggle" className={`gallery__like-toggle button-hover ${isLiked ? 'gallery__like-toggle_on' : ''}`} onClick={handleLikeClick} aria-label="Нравится" type="button" >
          </button>
          <p className="gallery__like-counter">{card.likes.length}</p>
        </div>
      </div>
    </li>
  );
}

export default Card; 