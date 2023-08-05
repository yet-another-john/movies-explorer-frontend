import './AboutProject.css';
import React from 'react';

function AboutProject() {

    return (
        <section id="about-project" className="about-project">
            <p className="about-project__title">О проекте</p>
            <p className="about-project__line"></p>
            <div className="about-project__container">
                <div className="about-project__subcontainer">
                    <p className="about-project__subtitle">Дипломный проект включал 5 этапов</p>
                    <p className="about-project__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </div>
                <div className="about-project__subcontainer">
                    <p className="about-project__subtitle">На выполнение диплома ушло 5 недель</p>
                    <p className="about-project__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>
            <div className="about-project__container">
                <div className="about-project__subcontainer">
                    <p id="about-project__third-subtitle" className="about-project__subtitle">1 неделя</p>
                    <p id="about-project__third-text" className="about-project__text">Back-end</p>
                </div>
                <div id="about-project__subcontainer-last-of-type" className="about-project__subcontainer">
                    <p id="about-project__fourth-subtitle" className="about-project__subtitle">4 недели</p>
                    <p id="about-project__fourth-text" className="about-project__text">Front-end</p>
                </div>
            </div>
        </section >
    );
}

export default AboutProject;