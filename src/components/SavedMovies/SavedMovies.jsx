import React from 'react';
import '../MoviesCardList/MoviesCardList.css';
import './SavedMovies.css'
import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import MoviesCard from '../MoviesCard/MoviesCard';

function SavedMovies() {

    return (
        <>
            <SearchForm />
            <FilterCheckbox />
            <div className="movies-card-list">
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
            </div>
            <div className="saved-movies__container">
            </div>
        </>
    );
}

export default SavedMovies;