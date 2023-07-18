import './Header.css';
import logo from '../../images/logo.svg';

function Header() {
  return (
    <header className="header">
      <img className="logo" src={logo} alt="Логотип." />
      <p className="header__signup">Регистрация</p>
      <p className="header__signin">Войти</p>
    </header>
  );
}

export default Header;