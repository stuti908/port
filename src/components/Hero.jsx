import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  const navigate = useNavigate();

  const handleHireClick = () => {
    navigate('/HireForm');
  };

  const handleResumeClick = () => {
    window.open('/resume.pdf', '_blank');
  };

  const handleProjectsClick = () => {
    window.scrollTo({ top: 800, behavior: 'smooth' });
  };
  const handleDesignsClick = () => {
    window.open('https://www.figma.com/design/W7L73DZ35bQVnbNHfArUS0/Untitled?node-id=0-1&t=yxhk86muU1HO1hEC-1', '_blank');
  };
  
  const handleContactClick = () => {
    window.scrollTo({ top: 1500, behavior: 'smooth' });
  };
  


  const introWords = [ "I'm", "EKTA", "SAJWAN"];
  const [displayedText, setDisplayedText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    if (wordIndex < introWords.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + (prev ? " " : "") + introWords[wordIndex]);
        setWordIndex(wordIndex + 1);
      }, 400);
      return () => clearTimeout(timeout);
    }
  }, [wordIndex]);

  return (
    <section className="hero">
      <div className="stars-layer">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="star twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 1 + 1.5}s`,
              animationDelay: `${Math.random() * 6}s`,
            }}
          />
        ))}
      </div>
      <div className="top-left">  
      </div>
      <div className="top-right">
        <button className="resume-btn animate-delay-1" onClick={handleResumeClick}>
          RESUME
        </button>
        <button className="resume-btn animate-delay-2" onClick={handleProjectsClick}>
          PROJECTS
        </button>
        <button className="resume-btn animate-delay-3" onClick={handleDesignsClick}>
          DESIGNS
        </button>
        <button className="resume-btn animate-delay-4" onClick={handleContactClick}>
          CONTACT ME
        </button>
        <button className="resume-btn animate-delay-5" onClick={handleHireClick}>
          HIRE ME
        </button>
      </div>

      <div className="rectangle slide-in-left">
        <div className="text">
          <h1> Hello!! <span className="highlight">{displayedText}</span></h1>
          <p className="fade-in">A passionate Developer creating modern digital experiences.</p>
          <p className="fade-in delay">Working at PPS INTERNATIONAL as a GET (R&D)</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
