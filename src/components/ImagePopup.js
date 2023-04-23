function ImagePopup(props) {
  return (
    <div className={`popup popup_form_image ${props.card.link ? "popup_opened" : ""}`}>
      <figure className="popup__container-image">
        <button name="close-button" className="popup__button-close button-hover" aria-label="Закрыть" type="button" onClick={props.onClose}></button>
        <img className="popup__image" src={props.card.link} alt={props.card.name} />
        <figcaption className="popup__image-caption">{props.card.name}</figcaption>
      </figure>
    </div>
  );
}

export default ImagePopup; 