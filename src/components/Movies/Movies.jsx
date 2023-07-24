import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
//import MoviesCard from '../MoviesCard/MoviesCard ';
//import Preloader from '../Preloader/Preloader';

function Movies() {

    return (
        <>
            <SearchForm />
            <FilterCheckbox />
            <MoviesCardList />
        </>
    );
}

export default Movies;