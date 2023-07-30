import React from 'react';
import './MoviesCard.css'
import movie_image from '../../images/movie-image.svg';
import save_icon from '../../images/save-icon.svg';

function MoviesCard() {

    return (
        <div className="movies-card">
            <div className="movies-card__container">
                <div>
                    <p className="movies-card__title">33 слова о дизайне</p>
                    <p className="movies-card__duration">1ч 47м</p>
                </div>
                <button className="movies-card__save-button">
                    <img className="movies-card__save-icon" src={save_icon} alt="save_icon" />
                </button>
            </div>
            <img className="movies-card__image" src={movie_image} alt="movie_image" />
        </div>
    );
}

export default MoviesCard;
