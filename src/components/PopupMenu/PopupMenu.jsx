import { Link } from "react-router-dom";
import '../Navigation/Navigation.css';
import icon from '../../images/icon.svg';
import './PopupMenu.css';
import closeIcon from '../../images/close-icon.svg';

function PopupMenu(props) {
    return (
        <div className={`popup ${props.isOpen ? 'popup_opened' : ''}`}>
            <div className="popup__container">
                <img className="popup__close-icon" src={closeIcon} alt="Закрыть меню." />
                <Link className="popup__link" to="/">Главная</Link>
                <Link className="popup__link" to="/movies">Фильмы</Link>
                <Link className="popup__link" to="/saved-movies">Сохраненные фильмы</Link>
                <div className="account__container">
                    <Link className="navigation__text" to="/profile">Аккаунт</Link>
                    <Link to="/profile"><div className="navigation__icon-container">
                        <img className="navigation__icon" src={icon} alt="Аватар." />
                    </div></Link>
                </div>
            </div>
        </div>
    );
}

export default PopupMenu;

<Link className="navigation__text" to="/saved-movies">Сохраненные фильмы</Link>