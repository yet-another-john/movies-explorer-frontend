import './Header.css';
import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';

function Header() {
  return (
    <header className="header">
      <img className="logo" src={logo} alt="Логотип." />
      {true ? <Navigation /> :
        <>
          <p className="header__signup">Регистрация</p>
          <p className="header__signin">Войти</p>
        </>}
      <button className="header__menu">
        <p className="header__menu-line"></p>
        <p className="header__menu-line"></p>
        <p className="header__menu-line"></p>
      </button>
    </header>
  );
}

export default Header;
