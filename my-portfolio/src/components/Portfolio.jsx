import React from 'react';

function Portfolio() {
  const projects = [
    { title: 'Who Let The Chicken Out?', link: 'https://github.com/isabella-romero/Project-game.git', github: 'https://github.com' },
    // Add more projects here
  ];

  return (
    <section>
      {/* <h2>Portfolio</h2> */}
      <div>
        {projects.map((project, index) => (
          <div key={index}>
            <h3>{project.title}</h3>
            <a href={project.github} target="_blank" rel="noopener noreferrer">Live Demo</a>
            <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
  