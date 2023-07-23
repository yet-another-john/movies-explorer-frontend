import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
//import Preloader from '../Preloader/Preloader';
//import MoviesCardList from '../MoviesCardList/MoviesCardList ';
//import MoviesCard from '../MoviesCard/MoviesCard ';

function Movies() {

    return (
        <>
            <SearchForm />
            <FilterCheckbox />
        </>
    );
}

export default Movies;