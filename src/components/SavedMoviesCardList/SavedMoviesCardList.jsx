import React from 'react';
import './SavedMoviesCardList.css'
import SavedMoviesCard from '../SavedMoviesCard/SavedMoviesCard';

function SavedMoviesCardList(props) {

    const [filteredMovies, setFilteredMovies] = React.useState([]);

    React.useEffect(() => {
        if (!props.savedMoviesSearchInputValue) {
            setFilteredMovies(() => {
                if (props.savedMovies.length !== 0) {
                    return props.savedMovies.filter(function (movie) {
                        return movie.duration <= 40;
                    });
                }
            });
        } else {
            setFilteredMovies(() => {
                if (props.searchedMovies.length !== 0) {
                    return props.searchedMovies.filter(function (movie) {
                        return movie.duration <= 40;
                    });
                }
            });
        }
        console.log(props.savedMovies);
        console.log(props.searchedMovies);
        console.log(props.savedMoviesSearchInputValue);
        console.log(props.savedMoviesCheckboxStatus);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.savedMovies, props.savedMoviesCheckboxStatus]);

    return (
        <section>
            {props.notFoundError ? <p className="movies-card-list__not-found">Ничего не найдено.</p> : ""}
            {props.requestError ? <p className="movies-card-list__not-found">
                Во время запроса произошла ошибка.
                <br />
                Возможно, проблема с соединением или сервер недоступен.
                <br />
                Подождите немного и попробуйте ещё раз.</p> : ""}
            <div className="movies-card-list">
                {(props.savedMovies.length > 0) && (!props.savedMoviesCheckboxStatus) ?
                    props.searchedMovies.map((movie, i) => (
                        <SavedMoviesCard
                            onCardLike={props.onCardLike}
                            onCardDislike={props.onCardDislike}
                            key={movie._id}
                            movie={movie}
                            setSavedMovies={props.setSavedMovies}
                        />
                    )) : ""}

                {(props.savedMovies.length > 0) && props.savedMoviesCheckboxStatus ?
                    filteredMovies.map((movie, i) => (
                        <SavedMoviesCard
                            onCardLike={props.onCardLike}
                            onCardDislike={props.onCardDislike}
                            key={movie._id}
                            movie={movie}
                            setSavedMovies={props.setSavedMovies}
                        />
                    )) : ""}
            </div>
        </section>
    );
}

export default SavedMoviesCardList;