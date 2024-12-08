import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/nav';
import Home from './pages/Home';
import Games from './pages/Games';
import References from './pages/References';

import './App.css'

function App() {
  return (
    <div>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Games />} />
        <Route path="/references" element={<References />} />
      </Routes>
    </Router>
      <div className="info-section">
        <p className="student-info foot">
          Created by: Nhlonipho Khathutshelo Marwala, Student #: 21308921  
          <br />
          Final Project for Online Game & Play
        </p>
      </div>
    </div>
  );
}

export default App;