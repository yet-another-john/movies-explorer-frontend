import React from 'react';
import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList(props) {

    return (
        <section>
            <div className="movies-card-list">
                {props.movies.map((movie, i) => (
                    <MoviesCard
                        key={movie.id}
                        nameRU={movie.nameRU}
                        duration={movie.duration}
                        image={movie.image.url}
                        trailerLink={movie.trailerLink}
                    />
                ))}
            </div>
            <div className="movies-card-list__button-container">
                <button className="movies-card-list__button">Еще</button>
            </div>
        </section>
    );
}

export default MoviesCardList;