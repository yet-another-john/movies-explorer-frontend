import './Portfolio.css';
import React from 'react';
import link from '../../images/link.svg'

function Portfolio() {

    return (
        <section className="portfolio">
            <p className="portfolio__title">Портфолио</p>
            <a className="portfolio__container" href="https://github.com/stoliarovea/how-to-learn" target="_blank" rel="noreferrer">
                <p className="portfolio__text">Статичный сайт</p>
                <img className="portfolio__image" src={link} alt="Ссылка." />
            </a>
            <p className="portfolio__line"></p>
            <a className="portfolio__container" href="https://github.com/stoliarovea/russian-travel" target="_blank" rel="noreferrer">
                <p className="portfolio__text">Адаптивный сайт</p>
                <img className="portfolio__image" src={link} alt="Ссылка." />
            </a>
            <p className="portfolio__line"></p>
            <a className="portfolio__container" href="https://github.com/stoliarovea/react-mesto-api-full-gha" target="_blank" rel="noreferrer">
                <p className="portfolio__text">Одностраничное приложение</p>
                <img className="portfolio__image" src={link} alt="Ссылка." />
            </a>
        </section>
    );
}

export default Portfolio;