function PopupWithForm({ isOpen, name, title, textSubmit, children, onClose }) {
  return (
    <div className={`popup popup_form_${name} ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <button name="close-button" className="popup__button-close button-hover" aria-label="Закрыть" type="button" onClick={onClose} />
        <form name={name} className="popup__form" >
          <h2 className="popup__caption">{title}</h2>
          {children}
          <button name="save-button" type="submit" className="popup__button-save button-hover">{textSubmit} </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm; 