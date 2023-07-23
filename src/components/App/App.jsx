import './App.css';
import React from 'react';
import Header from '../Header/Header';
//import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Footer from '../Footer/Footer';

function App() {

  return (
    <div className="app-page">
      <div className="app-content">
        <Header />
        <Movies />
        <Footer />
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