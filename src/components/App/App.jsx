import './App.css';
import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import ProtectedRouteElement from '../ProtectedRoute/ProtectedRoute';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound';
import PopupMenu from '../PopupMenu/PopupMenu';
import moviesApi from '../../utils/MoviesApi';
import mainApi from '../../utils/MainApi';

function App() {

  const navigate = useNavigate();
  const [movies, setMovies] = React.useState([]);
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [preloader, setPreloader] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [registered, setRegistered] = React.useState(false);
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [isPopupOpen, setPopupOpen] = React.useState(false);
  const [requestError, setRequestError] = React.useState(false);
  const [signUpRequestError, setSignUpRequestError] = React.useState('');
  const [signInRequestError, setSignInRequestError] = React.useState('');
  const [editProfileRequestResult, setEditProfileRequestResult] = React.useState('');
  const [notFoundError, setNotFoundError] = React.useState(false);
  const [moviesSearchInputValue, setMoviesSearchInputValue] = React.useState('');
  const [checkboxStatus, setCheckboxStatus] = React.useState('');

  function getMovies(checkboxStatus) {
    setRequestError(false);
    setNotFoundError(false);
    setMovies([]);
    setPreloader(true);
    moviesApi.getAllMovies()
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          setPreloader(false);
          setRequestError(true);
          return Promise.reject(console.log(`Ошибка: ${res.status}`));
        }
      })
      .then((data) => {
        setPreloader(false);
        if (data.length === 0) {
          setNotFoundError(true);
        } else {
          return data.filter(function (movie) {
            if (checkboxStatus) {
              return (movie.nameRU.replaceAll(' ', '')
                .toUpperCase()
                .includes(`${moviesSearchInputValue.toUpperCase()}`) ||
                movie.nameEN.replaceAll(' ', '')
                  .toUpperCase()
                  .includes(`${moviesSearchInputValue.toUpperCase()}`)) &&
                movie.duration <= 40;
            } else {
              return movie.nameRU.replaceAll(' ', '')
                .toUpperCase()
                .includes(`${moviesSearchInputValue.toUpperCase()}`) ||
                movie.nameEN.replaceAll(' ', '')
                  .toUpperCase()
                  .includes(`${moviesSearchInputValue.toUpperCase()}`);
            }
          });
        }
      })
      .then((data) => {
        if (data.length === 0) {
          setNotFoundError(true);
        } else {
          setMovies(data);
          localStorage.setItem('moviesSearchInputValue', moviesSearchInputValue);
          localStorage.setItem('checkboxStatus', checkboxStatus || false);
          localStorage.setItem('movies', JSON.stringify(data));
          console.log(localStorage.getItem('moviesSearchInputValue'));
          console.log(localStorage.getItem('checkboxStatus'));
          console.log(JSON.parse(localStorage.getItem('movies')));
        }
      })
      .catch((err) => {
        setRequestError(true);
        console.log(err);
      });
  }

  function handleSignUp(name, email, password) {
    mainApi.signUp(name, email, password)
      .then((data) => {
        if (data) {
          setSignUpRequestError('');
          setRegistered(true);
        }
      })
      .catch((err) => {
        console.log(err);
        setSignUpRequestError(err);
      });
  };

  function handleSignIn(email, password) {
    mainApi.signIn(email, password).then((data) => {
      if (data) {
        localStorage.setItem('token', data.token);
        mainApi._headers.headers.authorization = `Bearer ${localStorage.getItem('token')}`;
        setLoggedIn(true);
        setRegistered(false);
        setSignInRequestError('');
        navigate('/movies');
      }
    }).catch((err) => {
      console.log(err);
      setSignInRequestError(err);
    });
  };

  function checkToken() {
    const token = localStorage.getItem('token');
    if (token) {
      mainApi.checkToken(token).then((data) => {
        setLoggedIn(true);
      }).catch((err) => {
        console.log(err);
      });
    };
  }

  function handleLogout() {
    localStorage.clear();
    setMovies([]);
    setEditProfileRequestResult('');
    setLoggedIn(false);
    navigate('/');
  };

  function handleUpdateUser(newData) {
    setEditProfileRequestResult('');
    mainApi.editProfile(newData.name, newData.email).then((userData) => {
      setEditProfileRequestResult('Данные успешно изменены');
      setCurrentUser(userData);
    }).catch((err) => {
      console.log(err);
      setEditProfileRequestResult(err);
    });
  };

  function handleCardLike(movie) {
    mainApi.setLike(movie).then((data) => {
      setSavedMovies(data);
    }).catch((err) => {
      console.log(err);
    });
  };

  function handleCardLikeRemove(movie) {
    mainApi.removeLike(movie).then((data) => {
      console.log(data);
    }).catch((err) => {
      console.log(err);
    });
  };

  React.useEffect(() => {
    checkToken();
    if (localStorage.getItem('movies')) {
      setMoviesSearchInputValue(localStorage.getItem('moviesSearchInputValue'));
      setCheckboxStatus(localStorage.getItem('checkboxStatus'));
      setMovies(JSON.parse(localStorage.getItem('movies')));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    if (loggedIn) {
      mainApi.getUserInfo()
        .then((userData) => {
          setCurrentUser(userData);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [loggedIn]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app-page">
        <div className="app-content">
          <Routes>
            <Route path="/signup" element={
              <>
                <Register
                  onSingUp={handleSignUp}
                  signUpRequestError={signUpRequestError}
                  setSignUpRequestError={setSignUpRequestError}
                  registered={registered}
                  onSingIn={handleSignIn}
                />
              </>
            } />
            <Route path="/signin" element={
              <>
                <Login
                  onSingIn={handleSignIn}
                  signInRequestError={signInRequestError}
                  setSignInRequestError={setSignInRequestError}
                />
              </>
            } />
            <Route path="/" element={
              <>
                <Header
                  loggedIn={loggedIn}
                  setPopupOpen={setPopupOpen} />
                <Main />
                <Footer />
              </>
            } />
            <Route path="/movies" element={
              <>
                {loggedIn ? <Header
                  loggedIn={loggedIn}
                  setPopupOpen={setPopupOpen} /> : ""}
                <ProtectedRouteElement
                  loggedIn={loggedIn}
                  element={Movies}
                  onCardLike={handleCardLike}
                  onCardLikeRemove={handleCardLikeRemove}
                  getMovies={getMovies}
                  movies={movies}
                  savedMovies={savedMovies}
                  preloader={preloader}
                  requestError={requestError}
                  setMoviesSearchInputValue={setMoviesSearchInputValue}
                  moviesSearchInputValue={moviesSearchInputValue}
                  setCheckboxStatus={setCheckboxStatus}
                  checkboxStatus={checkboxStatus}
                  notFoundError={notFoundError} />
                {loggedIn ? <Footer /> : ""}
              </>
            } />
            <Route path="/saved-movies" element={
              <>
                {loggedIn ? <Header
                  loggedIn={loggedIn}
                  setPopupOpen={setPopupOpen} /> : ""}
                <ProtectedRouteElement
                  loggedIn={loggedIn}
                  element={SavedMovies}
                  onCardLike={false /*handleCardLike*/}
                  preloader={preloader} />
                {loggedIn ? <Footer /> : ""}
              </>
            } />
            <Route path="/profile" element={
              <>
                {loggedIn ? <Header
                  loggedIn={loggedIn}
                  setPopupOpen={setPopupOpen} /> : ""}
                <ProtectedRouteElement
                  loggedIn={loggedIn}
                  element={Profile}
                  currentUser={currentUser}
                  onEditProfile={handleUpdateUser}
                  editProfileRequestResult={editProfileRequestResult}
                  setEditProfileRequestResult={setEditProfileRequestResult}
                  onLogout={handleLogout} />
              </>
            } />
            <Route path='*' element={
              <>
                <NotFound />
              </>
            } />
          </Routes>
          <PopupMenu
            isOpen={isPopupOpen}
            setPopupOpen={setPopupOpen} />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;