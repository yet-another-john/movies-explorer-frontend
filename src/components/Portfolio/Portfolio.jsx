import './Portfolio.css';
import React from 'react';
import link from '../../images/link.svg'

function Portfolio() {

    return (
        <div className="portfolio">
            <p className="portfolio__title">Портфолио</p>
            <div className="portfolio__container">
                <p className="portfolio__text">Статичный сайт</p>
                <img className="portfolio__image" src={link} alt="Ссылка."/>
            </div>
            <p className="portfolio__line"></p>
            <div className="portfolio__container">
                <p className="portfolio__text">Адаптивный сайт</p>
                <img className="portfolio__image" src={link} alt="Ссылка."/>
            </div>
            <p className="portfolio__line"></p>
            <div className="portfolio__container">
                <p className="portfolio__text">Одностраничное приложение</p>
                <img className="portfolio__image" src={link} alt="Ссылка."/>
            </div>
        </div>
    );
}

export default Portfolio;