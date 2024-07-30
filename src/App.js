import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Create from './components/Create';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogDetail from './components/BlogDetails';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
    <div className='App'>
      <Navbar />
      <div className='content'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path= "/create" element={<Create />} />
          <Route path= "/blogs/:id" element={<BlogDetail />} />
          <Route path= "*" element={<NotFound />}/>
        </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;
