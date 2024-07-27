import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { BrowserRouter as Route, Router, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className='App'>
      <Navbar />
      <div className='content'>
        <Routes>
          <Route path="/">
            <Home />
          </Route>
        </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;
