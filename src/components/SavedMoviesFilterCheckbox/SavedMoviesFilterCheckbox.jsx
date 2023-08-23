import './SavedMoviesFilterCheckbox.css';
import React from 'react';

function SavedMoviesFilterCheckbox(props) {

    const handleChange = event => {
        console.log(props.setSavedMoviesCheckboxStatus(event.target.checked));
    };

    return (
        <>
            <div className="filter-checkbox">
                <label className="filter-checkbox__switch">
                    <input
                        id="checkbox"
                        className="filter-checkbox__input"
                        type="checkbox"
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

export default SavedMoviesFilterCheckbox;