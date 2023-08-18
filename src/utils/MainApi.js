class MainApi {
    constructor({ baseUrl, headers }) {
        this._baseUrl = baseUrl;
        this._headers = headers;
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }

    signUp(email, password, name) {
        return fetch(`${this._baseUrl}/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password,
                name: name
            })
        }).then(this._checkResponse);
    }

    signIn(email, password) {
        return fetch(`${this._baseUrl}/signin`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                password: password,
                email: email
            })
        }).then(this._checkResponse);
    }

    getUserInfo() {
        return fetch(`${this._baseUrl}/users/me`, this._headers).then(this._checkResponse);
    }

    getSavedMovies() {
        return fetch(`${this._baseUrl}/movies`, this._headers).then(this._checkResponse);
    }

    checkToken(token) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        }).then(this._checkResponse);
    }

    editProfile(newName, newEmail) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            headers: this._headers.headers,
            body: JSON.stringify({
                name: newName,
                email: newEmail
            })
        }).then(this._checkResponse);
    }

    setLike(movie) {
        return fetch(`${this._baseUrl}/movies`, {
            method: 'POST',
            headers: this._headers.headers,
            body: JSON.stringify({
                country: movie.country,
                director: movie.director,
                duration: movie.duration,
                year: movie.year,
                description: movie.description,
                image: `https://api.nomoreparties.co${movie.image.url}`,
                trailerLink: movie.trailerLink,
                thumbnail: `${this._baseUrl}${movie.image.formats.thumbnail.url}`,
                nameRU: movie.nameRU,
                nameEN: movie.nameEN,
                movieId: movie.id,
            })
        }).then(this._checkResponse);
    }

    removeLike(movie) {
        return fetch(`${this._baseUrl}/movies/${movie._id}`, {
          method: 'DELETE',
          headers: this._headers.headers,
        }).then(this._checkResponse);
      }

    changeLikeCardStatus(cardId, flag) {
        if (flag) {
            return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
                method: 'PUT',
                headers: this._headers.headers,
            }).then(this._checkResponse);
        } else {
            return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
                method: 'DELETE',
                headers: this._headers.headers,
            }).then(this._checkResponse);
        }
    }
}

const mainApi = new MainApi({
    baseUrl: 'https://api.stoliarovea-diploma.nomoredomains.work',
    headers: {
        headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json',
        }
    }
})

export default mainApi;