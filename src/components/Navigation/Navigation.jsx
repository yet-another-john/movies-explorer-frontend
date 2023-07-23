import './Navigation.css';
import icon from '../../images/icon.svg';

function Navigation() {
    return (
        <div className="navigation">
            <div className="navigation__container">
                <p className="navigation__text">Фильмы</p>
                <p className="navigation__text">Сохраненные фильмы</p>
            </div>
            <div className="navigation__container">
                <p className="navigation__text">Аккаунт</p>
                <div className="navigation__icon-container">
                    <img className="navigation__icon" src={icon} alt="Аватар." />
                </div>
            </div>
        </div>
    );
}

export default Navigation;