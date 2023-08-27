import './NavTab.css';
import React from 'react';
import { HashLink } from 'react-router-hash-link';

function NavTab() {

    return (
        <div className="nav-tab">
            <HashLink className="nav-tab__link" to="#about-project" smooth>О проекте</HashLink>
            <HashLink className="nav-tab__link" to="#techs" smooth>Технологии</HashLink>
            <HashLink className="nav-tab__link" to="#about-me" smooth>Студент</HashLink>
        </div>
    );
}

export default NavTab;