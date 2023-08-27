import React from "react";
import { Link } from "react-router-dom";
import logo from '../../images/logo.svg';
import './Login.css';
import '../Register/Register.css';

function Login(props) {

    const [values, setValues] = React.useState({});
    const [errors, setErrors] = React.useState({});
    const [isValid, setIsValid] = React.useState(false)

    function handleSubmit(e) {
        e.preventDefault();
        props.onSingIn(values.email, values.password);
    }

    const handleChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        setValues({ ...values, [name]: value });
        setErrors({ ...errors, [name]: target.validationMessage });
        setIsValid(target.closest("form").checkValidity());
    };

    return (
        <section className="register__form-container">
            <form className="register__form" onSubmit={handleSubmit}>
                <Link className="register__logo" to="/"><img src={logo} alt="Логотип." /></Link>
                <h2 className="register__title">Рады видеть!</h2>
                <p className="register__imput-name">E-mail</p>
                <input className="register__imput" name='email' onChange={handleChange} type='email' pattern="^[^@]+@[^@]+\.[^@]+$" required />
                <p className="register__line"></p>
                <p className="register__validation-error-text">{errors.email}</p>
                <p className="register__imput-name">Пароль</p>
                <input className="register__imput" name='password' onChange={handleChange} type='password' minLength={8} required />
                <p className="register__line-last-of-type"></p>
                <p className="register__validation-error-text">{errors.password}</p>
                <p className="register__reg-error-text">{props.signInRequestError ? props.signInRequestError : ''}</p>
                <button className={`login__submit-button ${!isValid ? 'login__submit-button_disabled' : ''}`} type="submit" disabled={!isValid}>Войти</button>
                <p className="register__signup-question">Ещё не зарегистрированы?
                    <Link className="register__signin-link" to="/signup"> Регистрация</Link></p>
            </form>
        </section>
    );
}

export default Login;