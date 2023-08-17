import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import SavedMoviesCardList from '../SavedMoviesCardList/SavedMoviesCardList';
import mainApi from '../../utils/MainApi';

function SavedMovies(props) {

    React.useEffect(() => {
        mainApi.getSavedMovies()
            .then((data) => {
                props.setSavedMovies(data);
                console.log(data);
            })
            .catch((err) => {
                console.log(err);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <section>
            <SearchForm />
            <FilterCheckbox />
            <SavedMoviesCardList
                savedMovies={props.savedMovies}
            />
        </section>
    );
}

export default SavedMovies;