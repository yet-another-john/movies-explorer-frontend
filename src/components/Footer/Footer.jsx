import './Footer.css';
import React from 'react';
import { Link } from "react-router-dom";

function Footer() {

    return (
        <footer className="footer">
            <p className="footer__text">Учебный проект
                <Link className="footer__text" to="https://practicum.yandex.ru/" target="_blank"> Яндекс.Практикум</Link> х
                <Link className="footer__text" to="https://beatfilmfestival.ru/" target="_blank"> BeatFilm</Link>.</p>
            <p className="footer__line"></p>
            <div className="footer__container">
                <p className="footer__year">© 2023</p>
                <div className="footer__links">
                    <Link className="footer__link" to="https://practicum.yandex.ru/" target="_blank">Яндекс.Практикум</Link>
                    <Link className="footer__link" to="https://github.com/" target="_blank">GitHub</Link>
                </div>
            </div>
        </footer>
    );
}

export default Footer;