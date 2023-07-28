import './SearchForm.css';

function SearchForm() {
    return (
        <div className="search-form">
            <input className="search-form__input" type="text" placeholder='Фильм' required/>
            <p className="search-form__button">Найти</p>
        </div>
    );
}

export default SearchForm;