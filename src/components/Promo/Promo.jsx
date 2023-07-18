import './Promo.css';
import React from 'react';
import NavTab from '../NavTab/NavTab'

function Promo() {

    return (
        <div className="promo">
            <p className="promo__title">Учебный проект студента факультета Веб-разработки.</p>
            <NavTab />
        </div>
    );
}

export default Promo;