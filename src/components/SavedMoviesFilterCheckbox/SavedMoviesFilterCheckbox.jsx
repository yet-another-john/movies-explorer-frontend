import './SavedMoviesFilterCheckbox.css';
import React from 'react';

function SavedMoviesFilterCheckbox(props) {

    const handleChange = event => {
        if (props.savedMoviesSearchInputValue) {
            props.setSavedMoviesCheckboxStatus(event.target.checked);
            props.setSearchedMovies(props.searchSavedMovies(event.target.checked));
            console.log(props.searchSavedMovies(event.target.checked));
        }
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