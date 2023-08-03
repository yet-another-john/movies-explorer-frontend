import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
//import SavedMovies from '../SavedMovies/SavedMovies';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
//import MoviesCard from '../MoviesCard/MoviesCard ';
//import Preloader from '../Preloader/Preloader';

function Movies(props) {

    return (
        <section>
            <SearchForm getMovies={props.getMovies} />
            <FilterCheckbox />
            <MoviesCardList movies={props.movies} />
        </section>
    );
}

export default Movies;