function PopupWithForm(props) {
  return (
    <div className={`popup popup_form_${props.name} ${props.isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <button name="close-button" className="popup__button-close button-hover" aria-label="Закрыть" type="button" onClick={props.onClose}></button>
        <form name={props.name} className="popup__form" >
          <h2 className="popup__caption">{props.title}</h2>
          {props.children}
          <button name="save-button" type="submit" className="popup__button-save button-hover">{props.textSubmit} </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm; 