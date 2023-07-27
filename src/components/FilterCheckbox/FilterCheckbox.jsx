import './FilterCheckbox.css';
import React from 'react';

function FilterCheckbox() {

    return (
        <>
            <div className="filter-checkbox">
                <label className="filter-checkbox__switch">
                    <input className="filter-checkbox__input" type="checkbox" />
                    <span className="filter-checkbox__slider"></span>
                </label>
                <p className="filter-checkbox__text">Короткометражки</p>
            </div>
            <p className="filter-checkbox__line"></p>
        </>
    );
}

export default FilterCheckbox;