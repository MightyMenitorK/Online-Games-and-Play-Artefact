import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/nav';
import Home from './pages/Home';
import Games from './pages/Games';
import References from './pages/References';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Games />} />
        <Route path="/references" element={<References />} />
      </Routes>
    </Router>
  );
}

export default App;