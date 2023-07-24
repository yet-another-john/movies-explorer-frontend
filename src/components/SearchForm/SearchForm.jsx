import './SearchForm.css';

function SearchForm() {
    return (
        <div className="search-form">
            <input className="search-form__input" placeholder='Фильм' />
            <p className="search-form__button">Найти</p>
        </div>
    );
}

export default SearchForm;