// App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SplashScreen from './SplashScreen';
import Home from './pages/Home';
import HireForm from './components/HireForm';
import './App.css'; // ✅ Create this file

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true); // Start fade-out
      setTimeout(() => {
        setShowSplash(false); // Actually remove splash after fade
      }, 800); // match fade duration
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {showSplash ? (
        <div className={`fade-wrapper ${fadeOut ? 'fade-out' : ''}`}>
          <SplashScreen />
        </div>
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/HireForm" element={<HireForm />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;
