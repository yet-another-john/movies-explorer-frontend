import React from "react";
import { Link } from "react-router-dom";
import logo from '../../images/logo.svg';
import './Register.css';

function Register(props) {

    const [values, setValues] = React.useState({});
    const [errors, setErrors] = React.useState({});
    const [isValid, setIsValid] = React.useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        props.onSingUp(values.email, values.password, values.name);
    }

    const handleChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        setValues({ ...values, [name]: value });
        setErrors({ ...errors, [name]: target.validationMessage });
        setIsValid(target.closest("form").checkValidity());
    };

    React.useEffect(() => {
        if (props.registered) {
            props.onSingIn(values.email, values.password);
        }
    }, [props.registered]);

    return (
        <section className="register__form-container">
            <form className="register__form" onSubmit={handleSubmit}>
                <Link className="register__logo" to="/"><img src={logo} alt="Логотип." /></Link>
                <h2 className="register__title">Добро пожаловать!</h2>
                <p className="register__imput-name">Имя</p>
                <input className="register__imput" name='name' onChange={handleChange} type='text' pattern="^[A-Za-zА-Яа-яЁё\s\-]+$" required />
                <p className="register__line"></p>
                <p className="register__validation-error-text">{errors.name}</p>
                <p className="register__imput-name">E-mail</p>
                <input className="register__imput" name='email' onChange={handleChange} type='email' pattern="^[^@]+@[^@]+\.[^@]+$" required />
                <p className="register__line"></p>
                <p className="register__validation-error-text">{errors.email}</p>
                <p className="register__imput-name">Пароль</p>
                <input className="register__imput" name='password' onChange={handleChange} type='password' minLength={8} required />
                <p className="register__line-last-of-type"></p>
                <p className="register__validation-error-text">{errors.password}</p>
                <p className="register__reg-error-text">{props.signUpRequestError ? props.signUpRequestError : ''}</p>
                <button className={`register__submit-button ${!isValid ? 'register__submit-button_disabled' : ''}`} type="submit" disabled={!isValid}>Зарегистрироваться</button>
                <p className="register__signup-question">Уже зарегистрированы?
                    <Link className="register__signin-link" to="/signin"> Войти</Link></p>
            </form>
        </section>
    );
}

export default Register;