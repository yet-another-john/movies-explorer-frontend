import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
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

function App() {

  const loggedIn = 0; //Войти
  const popupMenuOpen = 0; //Открыть попап

  const [movies, setMovies] = React.useState([]);

  function getMovies() {
    fetch('https://api.nomoreparties.co/beatfilm-movies')
      .then((response) => response.json())
      .then((data) => {
        setMovies(data);
      });
  }

  React.useEffect(() => {

  }, []);

  return (
    <div className="app-page">
      <div className="app-content">
        <Routes>
          <Route path="/signup" element={
            <>
              <Register />
            </>
          } />
          <Route path="/signin" element={
            <>
              <Login />
            </>
          } />
          <Route path="/" element={
            <>
              <Header loggedIn={loggedIn} />
              <Main />
              <Footer />
            </>
          } />
          <Route path="/movies" element={
            <>
              <Header loggedIn={loggedIn} />
              <Movies getMovies={getMovies} movies={movies} />
              <Footer />
              <PopupMenu />
            </>
          } />
          <Route path="/saved-movies" element={
            <>
              <Header loggedIn={loggedIn} />
              <SavedMovies />
              <Footer />
            </>
          } />
          <Route path="/profile" element={
            <>
              <Header loggedIn={loggedIn} />
              <Profile />
            </>
          } />
          <Route path='*' element={
            <>
              <NotFound />
            </>
          } />
        </Routes>
        <PopupMenu isOpen={popupMenuOpen} />
      </div>
    </div>
  );
}

export default App;