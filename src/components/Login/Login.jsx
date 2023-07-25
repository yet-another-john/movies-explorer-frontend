import React from 'react';
import logo from '../../images/logo.svg';
import './Login.css';
import '../Register/Register.css';

function Login() {

    return (
        <div className="register__form-container">
            <form className="register__form">
                <img className="logo" src={logo} alt="Логотип." />
                <h2 className="register__title">Рады видеть!</h2>
                <p className="register__imput-name">E-mail</p>
                <input className="register__imput" placeholder='pochta@yandex.ru' />
                <p className="register__line"></p>
                <p className="register__imput-name">Пароль</p>
                <input className="register__imput" />
                <p className="register__line-last-of-type"></p>
                <button className="login__submit-button" type="submit">Войти</button>
                <p className="register__signup-question">Ещё не зарегистрированы?
                    <span className="register__signin-link"> Регистрация</span></p>
            </form>
        </div>
    );
}

export default Login;