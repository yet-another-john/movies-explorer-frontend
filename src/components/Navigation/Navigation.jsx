import { Link } from "react-router-dom";
import './Navigation.css';
import icon from '../../images/icon.svg';

function Navigation() {
    return (
        <div className="navigation">
            <div className="navigation__container">
                <Link className="navigation__text" to="/movies">Фильмы</Link>
                <Link className="navigation__text" to="/saved-movies">Сохраненные фильмы</Link>
            </div>
            <div className="navigation__container">
                <Link className="navigation__text" to="/profile">Аккаунт</Link>
                <Link to="/profile"><div className="navigation__icon-container">
                <img className="navigation__icon" src={icon} alt="Аватар." />
                </div></Link>
            </div>
        </div>
    );
}

export default Navigation;