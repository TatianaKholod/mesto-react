import PopupWithForm from './PopupWithForm';
import { useState } from 'react';

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const [name, setName] = useState('');
  const [link, setLink] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    onAddPlace({
      name: name,
      link: link
    });
  }

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeLink(e) {
    setLink(e.target.value);
  }

  return (
    <PopupWithForm title="Новое место" name="addCard" textSubmit="Создать" onClose={onClose} isOpen={isOpen} onSubmit={handleSubmit} >
      <input name="name-card" value={name} onChange={handleChangeName} type="text" className="popup__input" placeholder="Название" required minLength="2"
        maxLength="30" />
      <span className="popup__input-error name-card-error"></span>
      <input name="src-card" value={link} onChange={handleChangeLink} type="url" className="popup__input" placeholder="Ссылка на картинку" required />
      <span className="popup__input-error src-card-error"></span>
    </PopupWithForm>
  );

}

export default AddPlacePopup;