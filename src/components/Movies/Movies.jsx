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
                getMovies={props.getMovies} />
            <FilterCheckbox
                setCheckboxStatus={props.setCheckboxStatus} />
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