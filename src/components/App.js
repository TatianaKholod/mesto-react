import logo from '../images/logo.svg';

function App() {
  return (
    <div className="App">
      <div className="page">
      <header className="header">
        <img className="header__logo" alt="Логотип проекта - Место" src={logo} />
      </header>
      <main>
        <section className="profile common-section" aria-label="Профиль">
          <div className="profile__update-avatar"></div>
          <div className="profile__info-container">
            <div className="profile__info">
              <h1 className="profile__name">Жак-Ив Кусто</h1>
              <p className="profile__job">Исследователь океана</p>
            </div>
            <button name="edit-button" className="profile__edit-button button-hover" aria-label="Редактировать профиль"
              type="button"></button>
          </div>
          <button name="add-button" className="profile__add-button button-hover" aria-label="Добавить место"
            type="button"></button>
        </section>
        <section className="gallery common-section" aria-label="Галерея">
          <ul className="gallery__card-list"></ul>
        </section>
      </main>
      <footer className="footer common-section">
        <p className="footer__caption">&copy; 2020 Mesto Russia</p>
      </footer>
      <div className="popup popup_form_editProfile">
        <div className="popup__container">
          <button name="close-button" className="popup__button-close button-hover" aria-label="Закрыть" type="button"></button>
          <form name="form-profile-edit" className="popup__form" noValidate>
            <h2 className="popup__caption">Редактировать профиль</h2>
            <input name="name" type="text" className="popup__input" placeholder="Имя" required minLength="2" maxLength="40" />
            <span className="popup__input-error name-error"></span>
            <input name="job" type="text" className="popup__input" placeholder="О себе" required minLength="2" maxLength="200" />
            <span className="popup__input-error job-error"></span>
            <button name="save-button" type="submit" className="popup__button-save button-hover">Сохранить</button>
          </form>
        </div>
      </div>
      <div className="popup popup_form_addCard">
        <div className="popup__container">
          <button name="close-button" className="popup__button-close button-hover" aria-label="Закрыть" type="button"></button>
          <form name="form-card-add" className="popup__form" noValidate>
            <h2 className="popup__caption">Новое место</h2>
            <input name="name-card" type="text" className="popup__input" placeholder="Название" required minLength="2"
              maxLength="30" />
            <span className="popup__input-error name-card-error"></span>
            <input name="src-card" type="url" className="popup__input" placeholder="Ссылка на картинку" required />
            <span className="popup__input-error src-card-error"></span>
            <button name="creat-card-btn" type="submit" className="popup__button-save button-hover">Создать</button>
          </form>
        </div>
      </div>
      <div className="popup popup_form_updateAvatar">
        <div className="popup__container">
          <button name="close-button" className="popup__button-close button-hover" aria-label="Закрыть" type="button"></button>
          <form name="form-avatar-update" className="popup__form" noValidate>
            <h2 className="popup__caption">Обновить аватар</h2>
            <input name="src-avatar" type="url" className="popup__input" placeholder="Ссылка на аватар" required />
            <span className="popup__input-error src-avatar-error"></span>
            <button name="submit-avatar-btn" type="submit" className="popup__button-save button-hover">Сохранить</button>
          </form>
        </div>
      </div>
      <div className="popup popup_form_delCard">
        <div className="popup__container">
          <button name="close-button" className="popup__button-close button-hover" aria-label="Закрыть" type="button"></button>
          <form name="form-card-del" className="popup__form" noValidate>
            <h2 className="popup__caption popup__caption_margin_min">Вы уверены?</h2>
            <button name="del-card-btn" type="submit" className="popup__button-save button-hover">Да</button>
          </form>
        </div>
      </div>
      <div className="popup popup_form_image">
        <figure className="popup__container-image">
          <button name="close-button" className="popup__button-close button-hover" aria-label="Закрыть" type="button"></button>
          <img className="popup__image" alt="Изображение"/>
          <figcaption className="popup__image-caption"></figcaption>
        </figure>
      </div>
      </div>
    </div>
  );
}

export default App;
