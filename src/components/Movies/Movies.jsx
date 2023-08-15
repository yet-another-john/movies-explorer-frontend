import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

function Movies(props) {

    return (
        <section>
            <SearchForm
                setMoviesSearchInputValue={props.setMoviesSearchInputValue}
                checkboxStatus={props.checkboxStatus}
                getMovies={props.getMovies} />
            <FilterCheckbox
                movies={props.movies}
                setCheckboxStatus={props.setCheckboxStatus}
                moviesSearchInputValue={props.moviesSearchInputValue}
                getMovies={props.getMovies} />
            {props.preloader ? <Preloader /> :
                <MoviesCardList
                    movies={props.movies}
                    savedMovies={props.savedMovies}
                    requestError={props.requestError}
                    notFoundError={props.notFoundError}
                    onCardLike={props.onCardLike}
                    onCardLikeRemove={props.onCardLikeRemove}
                />}
        </section>
    );
}

export default Movies;