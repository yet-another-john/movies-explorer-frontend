import React from 'react';
import './MoviesCard.css'
import { Link } from 'react-router-dom';
import save_icon from '../../images/save-icon.svg';

function MoviesCard(props) {

    return (
        <div className="movies-card">
            <div className="movies-card__container">
                <div>
                    <p className="movies-card__title">{props.nameRU}</p>
                    <p className="movies-card__duration">{Math.floor(props.duration/60)}ч {props.duration%60}м</p>
                </div>
                <button className="movies-card__save-button">
                    <img className="movies-card__save-icon" src={save_icon} alt="save_icon" />
                </button>
            </div>
            <Link to={props.trailerLink} target="_blank"><img className="movies-card__image" src={`https://api.nomoreparties.co${props.image}`} alt="movie_image" /></Link>
        </div>
    );
}

export default MoviesCard;