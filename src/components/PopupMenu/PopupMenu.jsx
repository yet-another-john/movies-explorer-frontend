import { Link } from "react-router-dom";
import icon from '../../images/icon.svg';
import './PopupMenu.css';
import closeIcon from '../../images/close-icon.svg';

function PopupMenu(props) {

    function handlePopupCloseClick() {
        props.setPopupOpen(false);
      };

    return (
        <section className={`popup ${props.isOpen ? 'popup_opened' : ''}`}>
            <div className="popup__container">
                <img className="popup__close-icon" src={closeIcon} onClick={handlePopupCloseClick} alt="Закрыть меню." />
                <Link className="popup__link" to="/" onClick={handlePopupCloseClick}>Главная</Link>
                <Link className="popup__link" to="/movies" onClick={handlePopupCloseClick}>Фильмы</Link>
                <Link className="popup__link" to="/saved-movies" onClick={handlePopupCloseClick}>Сохраненные фильмы</Link>
                <div className="popup__account-container">
                    <Link className="popup__navigation-text" to="/profile" onClick={handlePopupCloseClick}>Аккаунт</Link>
                    <Link to="/profile"><div className="popup__navigation-icon-container" onClick={handlePopupCloseClick}>
                        <img className="popup__navigation-icon" src={icon} alt="Аватар." />
                    </div></Link>
                </div>
            </div>
        </section>
    );
}

export default PopupMenu;