import './App.css';
import React from 'react';
import Login from '../Login/Login';

function App() {

  return (
    <div className="app-page">
      <div className="app-content">  
        <Login />
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