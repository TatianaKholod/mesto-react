function ImagePopup(props) {
  return (
    <div className={`popup popup_form_image ${props.card ? "popup_opened" : ""}`}>
    <figure className="popup__container-image">
      <button name="close-button" className="popup__button-close button-hover" aria-label="Закрыть" type="button" onClick={props.onClose}></button>
      <img className="popup__image" src={props.card} alt="Изображение" />
      <figcaption className="popup__image-caption"></figcaption>
    </figure>
  </div>
  );
}

export default ImagePopup; 