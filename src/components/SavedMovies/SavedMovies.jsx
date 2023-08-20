import React from 'react';
import SavedMoviesSearchForm from '../SavedMoviesSearchForm/SavedMoviesSearchForm';
import SavedMoviesFilterCheckbox from '../SavedMoviesFilterCheckbox/SavedMoviesFilterCheckbox';
import SavedMoviesCardList from '../SavedMoviesCardList/SavedMoviesCardList';
import mainApi from '../../utils/MainApi';

function SavedMovies(props) {

    React.useEffect(() => {
        mainApi.getSavedMovies()
            .then((data) => {
                props.setSavedMovies(data.reverse());
                props.setSearchedMovies(data.reverse());
                console.log(data);
            })
            .catch((err) => {
                console.log(err);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <section>
            <SavedMoviesSearchForm
                setSavedMoviesSearchInputValue={props.setSavedMoviesSearchInputValue}
                searchSavedMovies={props.searchSavedMovies}
                savedMoviesCheckboxStatus={props.savedMoviesCheckboxStatus}
                setSearchedMovies={props.setSearchedMovies}
                searchedMovies={props.searchedMovies}
            />
            <SavedMoviesFilterCheckbox
                savedMoviesSearchInputValue={props.savedMoviesSearchInputValue}
                setSavedMoviesCheckboxStatus={props.setSavedMoviesCheckboxStatus}
                searchSavedMovies={props.searchSavedMovies}
                setSearchedMovies={props.setSearchedMovies}
                searchedMovies={props.searchedMovies}
            />
            <SavedMoviesCardList
                savedMovies={props.savedMovies}
                onCardDislike={props.onCardDislike}
                setSavedMovies={props.setSavedMovies}
                setSearchedMovies={props.setSearchedMovies}
                searchedMovies={props.searchedMovies}
            />
        </section>
    );
}

export default SavedMovies;