import React from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import './NotFound.css'

function NotFound() {

    const navigate = useNavigate();

    return (
        <section className="not-found">
            <p className="not-found__title">404</p>
            <p className="not-found__subtitle">Страница не найдена</p>
            <Link className="not-found__link" to={navigate(-1)}>Назад</Link>
        </section>
    );
}

export default NotFound;