import './AboutMe.css';
import React from 'react';
import student from '../../images/student.svg';
import { Link } from "react-router-dom";

function AboutMe() {

    return (
        <section id="about-me" className="about-me">
            <p className="about-me__title">Студент</p>
            <p className="about-me__line"></p>
            <div className="about-me__container">
                <div className="about-me__subcontainer">
                    <p className="about-me__subtitle">Виталий</p>
                    <p className="about-me__status">Фронтенд-разработчик, 30 лет</p>
                    <p className="about-me__text">Я родился и живу в Саратове, закончил факультет экономики СГУ.
                        У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить.
                        С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке,
                        начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
                    <p className="about-me__link"><Link className='about-me__link-link' to="https://github.com/" target="_blank">GitHub</Link></p>
                </div>
                <div className="about-me__subcontainer">
                    <img className="about-me__image" src={student} alt="Фото студента." />
                </div>
            </div>
        </section>
    );
}

export default AboutMe;