import './SearchForm.css';

function SearchForm() {
    return (
        <form className="search-form">
            <input className="search-form__input" type="text" placeholder='Фильм' required/>
            <button className="search-form__button">Найти</button>
        </form>
    );
}

export default SearchForm;