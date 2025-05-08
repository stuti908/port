import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="tilted-card">
        <h2>About Me</h2>
        <p>
          Hi, I'm a Software Developer with 8 months of industry experience in Embedded Systems,
          specializing in UART-based serial communication (RS485/RS232) and C programming for hardware modules.
        </p>
        <p>
          Alongside, I’ve also worked on Full Stack Web Development, building responsive and interactive web applications using React.js, Node.js, and MongoDB,
          with a strong eye for design through UI/UX tools like Figma.
        </p>
        <p>
          I'm passionate about combining low-level systems programming with modern web technologies to build smart, scalable, and user-friendly tech solutions.
        </p>
      </div>
    </div>
  );
};

export default About;
