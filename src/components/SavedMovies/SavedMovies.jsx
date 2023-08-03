import React from 'react';
import '../MoviesCardList/MoviesCardList.css';
import './SavedMovies.css'
import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import MoviesCard from '../MoviesCard/MoviesCard';

function SavedMovies() {

    return (
        <section>
            <SearchForm />
            <FilterCheckbox />
            <div className="movies-card-list">

            </div>
            <div className="saved-movies__container">
            </div>
        </section>
    );
}

export default SavedMovies;