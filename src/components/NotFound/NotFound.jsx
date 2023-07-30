import React from 'react';
import './NotFound.css'

function NotFound() {

    return (
        <section className="not-found">
            <p className="not-found__title">404</p>
            <p className="not-found__subtitle">Страница не найдена</p>
            <p className="not-found__link">Назад</p>
        </section>
    );
}

export default NotFound;