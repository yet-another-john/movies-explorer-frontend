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
                savedMoviesCheckboxStatus={props.savedMoviesCheckboxStatus}
                setSavedMoviesCheckboxStatus={props.setSavedMoviesCheckboxStatus}
                setSavedMoviesSearchInputValue={props.setSavedMoviesSearchInputValue}
                searchSavedMovies={props.searchSavedMovies}
                setSearchedMovies={props.setSearchedMovies}
                searchedMovies={props.searchedMovies}
                savedMovies={props.savedMovies}
            />
            <SavedMoviesFilterCheckbox
                savedMoviesCheckboxStatus={props.savedMoviesCheckboxStatus}
                setSavedMoviesCheckboxStatus={props.setSavedMoviesCheckboxStatus}
                savedMoviesSearchInputValue={props.savedMoviesSearchInputValue}
                searchSavedMovies={props.searchSavedMovies}
                setSearchedMovies={props.setSearchedMovies}
                searchedMovies={props.searchedMovies}
            />
            <SavedMoviesCardList
                savedMoviesCheckboxStatus={props.savedMoviesCheckboxStatus}
                setSavedMoviesCheckboxStatus={props.setSavedMoviesCheckboxStatus}
                savedMovies={props.savedMovies}
                onCardDislike={props.onCardDislike}
                setSavedMovies={props.setSavedMovies}
                setSearchedMovies={props.setSearchedMovies}
                searchedMovies={props.searchedMovies}
                savedMoviesSearchInputValue={props.savedMoviesSearchInputValue}
                searchSavedMovies={props.searchSavedMovies}
            />
        </section>
    );
}

export default SavedMovies;