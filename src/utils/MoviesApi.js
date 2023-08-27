class MoviesApi {
    constructor({ baseUrl }) {
        this._baseUrl = baseUrl;
    }

    getAllMovies() {
        return fetch(this._baseUrl);
    }
}

const moviesApi = new MoviesApi({ baseUrl: 'https://api.nomoreparties.co/beatfilm-movies' })

export default moviesApi;