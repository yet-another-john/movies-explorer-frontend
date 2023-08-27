import React from 'react';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import './Profile.css';
import '../Register/Register.css';

function Profile(props) {

    const currentUser = React.useContext(CurrentUserContext);

    const [values, setValues] = React.useState({});
    const [errors, setErrors] = React.useState({});
    const [isValid, setIsValid] = React.useState(false);

    React.useEffect(() => {
        if (currentUser) {
            setValues(currentUser);
        }
    }, [currentUser]);

    const handleChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        setValues({ ...values, [name]: value });
        setErrors({ ...errors, [name]: target.validationMessage });
        setIsValid(target.closest("form").checkValidity());
        if (value === currentUser.name || value === currentUser.email) {
            setIsValid(false);
        }
    };

    function handleSubmit(e) {
        e.preventDefault();
        props.onEditProfile(values);
    };

    console.log(currentUser.name);
    console.log(currentUser.email);
    console.log(values.name);
    console.log(values.email);

    return (
        <section className="profile">
            <p className="profile__title">Привет, {props.currentUser.name}!</p>
            <form onSubmit={handleSubmit}>
                <div className="profile__name-container">
                    <p className="profile__name">Имя</p>
                    <input
                        className="profile__input"
                        name='name'
                        value={values.name || ''}
                        onChange={handleChange}
                        pattern="^[A-Za-zА-Яа-яЁё\s\-]+$"
                        required
                    />
                </div>
                <p className="profile__line"></p>
                <p className="profile__validation-error-text">{errors.name}</p>
                <div className="profile__email-container">
                    <p className="profile__email">E-mail</p>
                    <input
                        className="profile__input"
                        name='email'
                        value={values.email || ''}
                        onChange={handleChange}
                        pattern="^[^@]+@[^@]+\.[^@]+$"
                        required
                    />
                </div>
                <p className="profile__line"></p>
                <p className="profile__validation-error-text">{errors.email}</p>
                <p className="register__reg-error-text">{props.editProfileRequestResult ? props.editProfileRequestResult : ''}</p>
                <div className="profile__button-container">
                    <button className={`profile__edit ${!isValid ? 'profile__submit-button_disabled' : ''}`} type="submit" disabled={!isValid}>Редактировать</button>
                    <button className="profile__exit" onClick={props.onLogout}>Выйти из аккаунта</button>
                </div>
            </form>
        </section>
    );
}

export default Profile;