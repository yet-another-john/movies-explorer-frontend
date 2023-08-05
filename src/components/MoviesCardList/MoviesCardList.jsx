import React from 'react';
import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList(props) {

    return (
        <section>
            {1 ? "" : <p className="movies-card-list__not-found">Ничего не найдено.</p>}
            {1 ? "" : <p className="movies-card-list__not-found">
                Во время запроса произошла ошибка.
                <br/>
                Возможно, проблема с соединением или сервер недоступен.
                <br/>
                Подождите немного и попробуйте ещё раз.</p>}
            <div className="movies-card-list">
                {1 ?
                    props.movies.map((movie, i) => (
                        <MoviesCard
                            key={movie.id}
                            nameRU={movie.nameRU}
                            duration={movie.duration}
                            image={movie.image.url}
                            trailerLink={movie.trailerLink}
                        />
                    )) : ""}
            </div>
            {0 ? <div className="movies-card-list__button-container">
                <button className="movies-card-list__button">Еще</button>
            </div> :
                ""}
        </section>
    );
}

export default MoviesCardList;