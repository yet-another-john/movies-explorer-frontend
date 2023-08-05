import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

function Movies(props) {

    return (
        <section>
            <SearchForm getMovies={props.getMovies} />
            <FilterCheckbox />
            {props.preloader ? <Preloader /> : <MoviesCardList movies={props.movies} />}
            
        </section>
    );
}

export default Movies;