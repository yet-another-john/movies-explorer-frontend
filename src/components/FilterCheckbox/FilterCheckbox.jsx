import './FilterCheckbox.css';
import React from 'react';

function FilterCheckbox(props) {

    const handleChange = event => {
        props.setCheckboxStatus(event.target.checked);
        localStorage.setItem('checkboxStatus', event.target.checked || false);
    };

    return (
        <>
            <div className="filter-checkbox">
                <label className="filter-checkbox__switch">
                    <input
                        id="checkbox"
                        className="filter-checkbox__input"
                        type="checkbox"
                        checked={(localStorage.getItem('checkboxStatus') === "true") || ''}
                        onChange={handleChange}
                        required />
                    <span className="filter-checkbox__slider"></span>
                </label>
                <p className="filter-checkbox__text">Короткометражки</p>
            </div>
            <p className="filter-checkbox__line"></p>
        </>
    );
}

export default FilterCheckbox;