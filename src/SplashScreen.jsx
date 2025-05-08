import React from 'react';
import './SplashScreen.css';

const SplashScreen = () => {
  return (
    <div className="splash-container">
      <div className="stars-layer">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="star twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 1 + 1.5}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="animated-intro">
        <h3 className="tagline">Welcome to my space</h3>
        <h1 className="intro-line"><span className="line-left" />Hi, I'm <span className="highlight">Ekta</span><span className="line-right" /></h1>
        <p className="subtitle">"Designing the Digital Future with Passion and Precision" 🚀</p>
      </div>
    </div>
  );
};

export default SplashScreen;
