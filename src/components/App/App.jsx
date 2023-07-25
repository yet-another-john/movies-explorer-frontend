import './App.css';
import React from 'react';
import NotFound from '../NotFound/NotFound';

function App() {

  return (
    <div className="app-page">
      <div className="app-content">  
        <NotFound />
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