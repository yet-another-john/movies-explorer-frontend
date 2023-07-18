import './NavTab.css';
import React from 'react';

function NavTab() {

    return (
        <div className="navtab">
            <p className="navtab__link">О проекте</p>
            <p className="navtab__link">Технологии</p>
            <p className="navtab__link">Студент</p>
        </div>
    );
}

export default NavTab;