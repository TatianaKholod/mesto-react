

function Card({card, onCardClick}) {
  function handleCardClick() {
    onCardClick(card);
  }
   return (
    <li className="gallery__card">
    <img className="gallery__card-image" src={card.link} alt={card.name} onClick={handleCardClick} />
    <button name="card-delete" className="gallery__card-delete button-hover" aria-label="Удалить карточку"
      type="button"></button>
    <div className="gallery__card-name">
      <h2 className="gallery__text-name">{card.name}</h2>
      <div className="gallery__like-container">
        <button name="like-toggle" className="gallery__like-toggle button-hover" aria-label="Нравится" type="button">
        </button>
        <p className="gallery__like-counter"></p>
      </div>
    </div>
  </li>
  );
}

export default Card; 