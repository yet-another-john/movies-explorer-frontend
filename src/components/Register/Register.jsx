import React from 'react';
import { Link } from "react-router-dom";
import logo from '../../images/logo.svg';
import './Register.css';

function Register() {

    return (
        <section className="register__form-container">
            <form className="register__form">
                <img className="register__logo" src={logo} alt="Логотип." />
                <h2 className="register__title">Добро пожаловать!</h2>
                <p className="register__imput-name">Имя</p>
                <input className="register__imput" placeholder='Виталий' required/>
                <p className="register__line"></p>
                <p className="register__imput-name">E-mail</p>
                <input className="register__imput" placeholder='pochta@yandex.ru' required/>
                <p className="register__line"></p>
                <p className="register__imput-name">Пароль</p>
                <input className="register__imput" placeholder='••••••••••••••' required/>
                <p className="register__line-last-of-type"></p>
                <p className="register__validation-error-text">Что-то пошло не так...</p>
                <button className="register__submit-button" type="submit">Зарегистрироваться</button>
                <p className="register__signup-question">Уже зарегистрированы?
                    <Link className="register__signin-link" to="/signin"> Войти</Link></p>
            </form>
        </section>
    );
}

export default Register;