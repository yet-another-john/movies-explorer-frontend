import './NavTab.css';
import React from 'react';

function NavTab() {

    return (
        <div className="nav-tab">
            <p className="nav-tab__link">О проекте</p>
            <p className="nav-tab__link">Технологии</p>
            <p className="nav-tab__link">Студент</p>
        </div>
    );
}

export default NavTab;