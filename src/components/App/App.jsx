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

function App() {

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
              <Header />
              <Main />
              <Footer />
            </>
          } />
          <Route path="/movies" element={
            <>
              <Header />
              <Movies />
              <Footer />
            </>
          } />
          <Route path="/saved-movies" element={
            <>
              <Header />
              <SavedMovies />
              <Footer />
            </>
          } />
          <Route path="/profile" element={
            <>
              <Header />
              <Profile />
            </>
          } />
          <Route path='*' element={
            <>
              <NotFound />
            </>
          } />
        </Routes>
      </div>
    </div>
  );
}

export default App;