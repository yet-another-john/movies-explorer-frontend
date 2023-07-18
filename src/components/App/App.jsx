import './App.css';
import React from 'react';
import Header from '../Header/Header';

//import { Routes, Route } from 'react-router-dom';

/*
import Register from '../Register/';
import Login from '../Login';
import AboutProject from '../AboutProject';
import Movies from '../Movies';
import SavedMovies from '../SavedMovies';
import Profile from '../Profile';
import Footer from '../Footer';
*/

function App() {

  return (
    <div className="app-page">
      <div className="app-content">
        <Header />
      </div>
    </div>
  );
}

export default App;

/*
        <Routes>
          <Route path="/signup" element={
            <>

            </>
          } />
          <Route path="/signin" element={
            <>

            </>
          } />
          <Route path="/" element={
            <>

            </>
          } />
          <Route path="/movies" element={
            <>

            </>
          } />
          <Route path="/saved-movies" element={
            <>

            </>
          } />
          <Route path="/profile" element={
            <>

            </>
          } />
        </Routes>
*/