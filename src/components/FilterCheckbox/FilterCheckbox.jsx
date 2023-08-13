import './FilterCheckbox.css';
import React from 'react';
import { useState } from 'react';

function FilterCheckbox(props) {

    const [isChecked, setIsChecked] = useState(false);

    const handleChange = event => {
        if (event.target.checked) {
            props.setCheckboxStatus(true);
        } else {
            props.setCheckboxStatus(false);
        }
        setIsChecked(current => !current);
    };

    return (
        <>
            <div className="filter-checkbox">
                <label className="filter-checkbox__switch">
                    <input
                        id="checkbox"
                        className="filter-checkbox__input"
                        type="checkbox"
                        value={isChecked}
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