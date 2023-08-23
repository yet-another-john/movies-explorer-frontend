import React from 'react';
import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList(props) {

    const [counter, setCounter] = React.useState(0);
    const [filteredMovies, setFilteredMovies] = React.useState([]);

    function handleButtonClick() {
        if (window.innerWidth >= 1280) {
            setCounter(counter + 3);
        } else if (window.innerWidth >= 768 && window.innerWidth < 1280) {
            setCounter(counter + 2);
        } else if (window.innerWidth < 768) {
            setCounter(counter + 2);
        }
    }

    window.addEventListener('resize', function (event) {
        if (window.innerWidth >= 1280) {
            setCounter(12);
        } else if (window.innerWidth >= 768 && window.innerWidth < 1280) {
            setCounter(8);
        } else if (window.innerWidth < 768) {
            setCounter(5);
        }
    });

    React.useEffect(() => {
        setCounter(0);
        if (window.innerWidth >= 1280) {
            setCounter(12);
        } else if (window.innerWidth >= 768 && window.innerWidth < 1280) {
            setCounter(8);
        } else if (window.innerWidth < 768) {
            setCounter(5);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.checkboxStatus]);

    React.useEffect(() => {
        setFilteredMovies(() => {
            if (props.movies.length !== 0) {
                return props.movies.filter(function (movie) {
                    return movie.duration <= 40;
                });
            }
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.movies, props.checkboxStatus]);

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
                {(props.movies.length > 0) && (!props.checkboxStatus) ?
                    props.movies.slice(0, counter).map((movie, i) => (
                        <MoviesCard
                            onCardLike={props.onCardLike}
                            onCardLikeRemove={props.onCardLikeRemove}
                            key={movie.id}
                            movie={movie}
                            savedMovies={props.savedMovies}
                        />
                    )) : ""}

                {(props.movies.length > 0) && props.checkboxStatus ?
                    filteredMovies.slice(0, counter).map((movie, i) => (
                        <MoviesCard
                            onCardLike={props.onCardLike}
                            onCardLikeRemove={props.onCardLikeRemove}
                            key={movie.id}
                            movie={movie}
                            savedMovies={props.savedMovies}
                        />
                    )) : ""}
            </div>
            {((filteredMovies.length > 12 && window.innerWidth >= 1280 && props.checkboxStatus) ||
                (filteredMovies.length > 8 && (window.innerWidth >= 768 && window.innerWidth < 1280) && props.checkboxStatus) ||
                (filteredMovies.length > 5 && (window.innerWidth < 768) && props.checkboxStatus)) && filteredMovies.length > counter
                ? <div className="movies-card-list__button-container">
                    <button className="movies-card-list__button" onClick={handleButtonClick}>Еще</button>
                </div> : ""}

            {((props.movies.length > 12 && window.innerWidth >= 1280 && (!props.checkboxStatus)) ||
                (props.movies.length > 8 && (window.innerWidth >= 768 && window.innerWidth < 1280) && (!props.checkboxStatus)) ||
                (props.movies.length > 5 && (window.innerWidth < 768) && (!props.checkboxStatus))) && props.movies.length > counter
                ? <div className="movies-card-list__button-container">
                    <button className="movies-card-list__button" onClick={handleButtonClick}>Еще</button>
                </div> : ""}
        </section>
    );
}

export default MoviesCardList;