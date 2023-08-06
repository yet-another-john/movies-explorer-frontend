import { Link } from "react-router-dom";
import './Header.css';
import logo from '../../images/logo.svg';
import Navigation from '../Navigation/Navigation';

function Header(props) {
  return (
    <header className="header">
      <Link className="logo" to="/"><img src={logo} alt="Логотип." /></Link>
      {props.loggedIn ? <Navigation /> :
        <>
          <Link className="header__signup" to="/signup">Регистрация</Link>
          <Link className="header__signin" to="/signin">Войти</Link>
        </>}
      {props.loggedIn ?
        <>
          <button className="header__menu">
            <p className="header__menu-line"></p>
            <p className="header__menu-line"></p>
            <p className="header__menu-line"></p>
          </button>
        </>
        : ""}
    </header>
  );
}

export default Header;