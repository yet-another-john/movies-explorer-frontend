import React from 'react';
import './MoviesCard.css'
import { Link } from 'react-router-dom';
import save_icon from '../../images/save-icon.svg';
import save_icon_active from '../../images/save-icon-active.svg';

function MoviesCard(props) {

    const [isLiked, setisLiked] = React.useState(false);

    function handleCardClick() {
        if (isLiked) {
            props.onCardLikeRemove(props.savedMovies.find(i => i.movieId === props.movie.id));
        } else {
            props.onCardLike(props.movie);
        }
        setisLiked(!isLiked);
    };

    React.useEffect(() => {
        if (props.savedMovies.some(i => i.movieId === props.movie.id)) {
            setisLiked(true);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="movies-card">
            <div className="movies-card__container">
                <div>
                    <p className="movies-card__title">{props.movie.nameRU}</p>
                    <p className="movies-card__duration">{Math.floor(props.movie.duration / 60)}ч {props.movie.duration % 60}м</p>
                </div>
                <button className="movies-card__save-button" onClick={handleCardClick}>
                    <img className="movies-card__save-icon" src={isLiked ? save_icon_active : save_icon} alt="save_icon" />
                </button>
            </div>
            <Link to={props.movie.trailerLink} target="_blank"><img className="movies-card__image" src={`https://api.nomoreparties.co${props.movie.image.url}`} alt="movie_image" /></Link>
        </div>
    );
}

export default MoviesCard;