import React from 'react';
import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList(props) {

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
                {props.movies.length > 0 ?
                    props.movies.map((movie, i) => (
                        <MoviesCard
                            onCardLike={props.onCardLike}
                            onCardLikeRemove={props.onCardLikeRemove}
                            key={movie.id}
                            movie={movie}
                        />
                    )) : ""}
            </div>
            {props.movies.length > 0 ? <div className="movies-card-list__button-container">
                <button className="movies-card-list__button">Еще</button>
            </div> : ""}
        </section>
    );
}

export default MoviesCardList;