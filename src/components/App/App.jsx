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
  const [preloader, setPreloader] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [registered, setRegistered] = React.useState(false);
  const [isPopupOpen, setPopupOpen] = React.useState(false);
  const [requestError, setRequestError] = React.useState(false);
  const [signUpRequestError, setSignUpRequestError] = React.useState('');
  const [editProfileRequestError, setEditProfileRequestError] = React.useState('');
  const [notFoundError, setNotFoundError] = React.useState(false);
  const [userEmail, setUserEmail] = React.useState('');
  //  const [selectedCard, setSelectedCard] = React.useState({});

  /*
    function handleCardLike(card) {
      const isLiked = card.likes.some(i => i === currentUser._id);
      api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
      }).catch((err) => {
        console.log(err);
      });
    }
  
    function closeAllPopups() {
      setPopupOpen(false);
      setEditProfilePopupOpen(false);
      setInfoTooltipOpen(false);
      setRegistered(false);
      setSelectedCard({});
    };
    */

  function getMovies() {
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
          setMovies(data);
        }
      })
      .catch((err) => {
        setRequestError(true);
        console.log(err);
      });
  }

  function handleSignUp(name, email, password) {
    mainApi.signUp(name, email, password).then((data) => {
      if (data) {
        setSignUpRequestError('');
        setRegistered(true);
        setLoggedIn(true);
        navigate('/movies');
      }
    }).catch((err) => {
      console.log(err);
      setRegistered(false);
      setSignUpRequestError(err);
    });
  };

  function handleSignIn(email, password) {
    mainApi.signIn(email, password).then((data) => {
      if (data) {
        localStorage.setItem('token', data.token);
        mainApi._headers.headers.authorization = `Bearer ${localStorage.getItem('token')}`;
        setUserEmail(email);
        setLoggedIn(true);
        navigate('/movies');
      }
    }).catch((err) => {
      console.log(err);
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
    localStorage.removeItem('token');
    setLoggedIn(false);
    navigate('/');
  };

  function handleUpdateUser(newData) {
    mainApi.editProfile(newData.name, newData.email).then((userData) => {
      setEditProfileRequestError('');
      setCurrentUser(userData);
    }).catch((err) => {
      console.log(err);
      setEditProfileRequestError(err);
    });
  };

  React.useEffect(() => {
    checkToken();
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
                />
              </>
            } />
            <Route path="/signin" element={
              <>
                <Login
                  onSingIn={handleSignIn} />
              </>
            } />
            <Route path="/" element={
              <>
                <Header
                  loggedIn={loggedIn} />
                <Main />
                <Footer />
              </>
            } />
            <Route path="/movies" element={
              <>
                {loggedIn ? <Header
                  loggedIn={loggedIn} /> : ""}
                <ProtectedRouteElement
                  loggedIn={loggedIn}
                  element={Movies}
                  onCardLike={false /*handleCardLike*/}
                  getMovies={getMovies}
                  movies={movies}
                  preloader={preloader}
                  requestError={requestError}
                  notFoundError={notFoundError} />
                {loggedIn ? <Footer /> : ""}
              </>
            } />
            <Route path="/saved-movies" element={
              <>
                {loggedIn ? <Header
                  loggedIn={loggedIn} /> : ""}
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
                  loggedIn={loggedIn} /> : ""}
                <ProtectedRouteElement
                  loggedIn={loggedIn}
                  element={Profile}
                  currentUser={currentUser}
                  onEditProfile={handleUpdateUser}
                  editProfileRequestError={editProfileRequestError}
                  setEditProfileRequestError={setEditProfileRequestError}
                  onLogout={handleLogout} />
              </>
            } />
            <Route path='*' element={
              <>
                <NotFound />
              </>
            } />
          </Routes>
          <PopupMenu isOpen={isPopupOpen} />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;