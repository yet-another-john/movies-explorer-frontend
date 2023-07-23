import './SearchForm.css';

function SearchForm() {
    return (
        <header className="search-form">
            <input className="search-form__input" placeholder='Фильм' />
            <p className="search-form__button">Найти</p>
        </header>
    );
}

export default SearchForm;