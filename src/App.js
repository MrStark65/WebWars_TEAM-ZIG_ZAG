// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Guidelines from './pages/Guidelines';
import SubmitPaper from './pages/SubmitPaper';
import Committee from './pages/Committee';
import Register from './pages/Register'; // Import the Register component
import './App.css';
import ScrollToTop from './components/ScrollToTop';
import CommitteeMembers from './pages/CommitteeMembers.js';
import KeynoteSpeakers from './pages/KeynoteSpeakers';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/guidelines" element={<Guidelines />} />
            <Route path="/submit-paper" element={<SubmitPaper />} />
            <Route path="/committee" element={<Committee />} />
            <Route path="/committee/members" element={<CommitteeMembers />} />
            <Route path="/committee/speakers" element={<KeynoteSpeakers />} />
            <Route path="/register" element={<Register />} /> {/* Add the Register route */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;