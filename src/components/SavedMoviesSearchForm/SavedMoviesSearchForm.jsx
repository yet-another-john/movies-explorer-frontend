import './SavedMoviesSearchForm.css';
import React from 'react';

function SavedMoviesSearchForm(props) {

    const [input, setInput] = React.useState('');
    const [error, setError] = React.useState('');

    function handleInputChange(e) {
        setInput(e.target.value);
        props.setSavedMoviesSearchInputValue(e.target.value);
        setError('');
    }

    function handleSubmit() {
        if (input) {
            props.setSearchedMovies(props.searchSavedMovies(props.savedMoviesCheckboxStatus));
            console.log(props.searchSavedMovies(props.savedMoviesCheckboxStatus));
        } else {
            setError("Нужно ввести ключевое слово");
        }
    }

    React.useEffect(() => {
        if (input) {
            handleSubmit();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.savedMovies]);

    return (
        <>
            <form className="search-form" onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
            }} >
                <input
                    id="search-form__input"
                    className="search-form__input"
                    type="text"
                    value={input || ''}
                    placeholder='Фильм'
                    onChange={handleInputChange} />
                <button className="search-form__button">Найти</button>
            </form>
            <p id="search-form__input-error" className="search-form__input-error">{error}</p>
        </>
    );
}

export default SavedMoviesSearchForm;