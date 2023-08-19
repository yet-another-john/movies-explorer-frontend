import React from 'react';
import './SavedMoviesCardList.css'
import SavedMoviesCard from '../SavedMoviesCard/SavedMoviesCard';

function SavedMoviesCardList(props) {

    React.useEffect(() => {
        
    }, [props.savedMovies]);

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
                {props.savedMovies.length > 0 ?
                    props.savedMovies.map((movie, i) => (
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