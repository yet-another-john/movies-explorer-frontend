class MainApi {
    constructor({ baseUrl }) {
        this._baseUrl = baseUrl;
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

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }

    getUserInfo() {
        return fetch(`${this._baseUrl}/users/me`, this._headers).then(this._checkResponse);
    }

    editProfile(newName, newStatus) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            headers: this._headers.headers,
            body: JSON.stringify({
                name: newName,
                about: newStatus
            })
        }).then(this._checkResponse);
    }

    setLike(cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
            method: 'PUT',
            headers: this._headers.headers,
        }).then(this._checkResponse);
    }

    removeLike(cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
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

    checkToken(token) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        }).then(this._checkResponse);
    }
}

const mainApi = new MainApi({
    baseUrl: 'https://api.stoliarovea-diploma.nomoredomains.work'
})

export default mainApi;