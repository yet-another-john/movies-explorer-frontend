import React from 'react';
import './SavedMoviesCard.css'
import { Link } from 'react-router-dom';
import delete_icon from '../../images/delete-icon.svg';

function SavedMoviesCard(props) {

    function handleCardClick() {
        props.onCardDislike(props.movie);
    };

    return (
        <div className="movies-card">
            <div className="movies-card__container">
                <div>
                    <p className="movies-card__title">{props.movie.nameRU}</p>
                    <p className="movies-card__duration">{Math.floor(props.movie.duration / 60)}ч {props.movie.duration % 60}м</p>
                </div>
                <button className="movies-card__save-button" onClick={handleCardClick}>
                    <img className="movies-card__save-icon" src={delete_icon} alt="save_icon" />
                </button>
            </div>
            <Link to={props.movie.trailerLink} target="_blank"><img className="movies-card__image" src={props.movie.image} alt="movie_image" /></Link>
        </div>
    );
}

export default SavedMoviesCard;