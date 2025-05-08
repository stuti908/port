import React, { useRef, useEffect } from 'react';
import './Projects.css';

const projects = [
  { title: 'Portfolio Site', description: 'Personal portfolio using React, npm react-script, and react icons to make more effective.' },
  { title: 'E-Commerce App', description: 'Full-featured online store with cart and payments.' },
  { title: 'CNS (College Navigation System)', description: 'Used to navigate college campus, library, classes, and more.' },
  { title: 'Hardware Communication', description: 'Byte-by-byte communication using RS485-232/UART protocol in provided module.' }
];

const Projects = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      const middle = Math.floor(container.scrollWidth / 2 - container.clientWidth / 2);
      container.scrollLeft = middle;
    }
  }, []);

  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="carousel-container" ref={scrollRef}>
        {projects.map((proj, i) => (
          <div className="carousel-card" key={i}>
            <h3><em>{proj.title} :</em></h3>
            <p>{proj.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
