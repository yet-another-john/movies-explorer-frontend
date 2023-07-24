import './FilterCheckbox.css';
import React from 'react';

function FilterCheckbox() {

    return (
        <div className="filter-checkbox">
            <label class="filter-checkbox__switch">
                <input class="filter-checkbox__input" type="checkbox" />
                <span class="filter-checkbox__slider"></span>
            </label>
            <p className="filter-checkbox__text">Короткометражки</p>
        </div>
    );
}

export default FilterCheckbox;