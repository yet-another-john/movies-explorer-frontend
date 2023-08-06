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
            {props.preloader ? <Preloader /> :
                <MoviesCardList
                    movies={props.movies}
                    requestError={props.requestError}
                    notFoundError={props.notFoundError}
                />}
        </section>
    );
}

export default Movies;