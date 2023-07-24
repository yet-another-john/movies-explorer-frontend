import React from 'react';
import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList() {

    return (
        <>
            <div className="movies-card-list">
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
            </div>
            <div className="movies-card-list__button-container">
                <button className="movies-card-list__button">Еще</button>
            </div>
        </>
    );
}

export default MoviesCardList;