import React from 'react';
import projects from './data/projects.json';
import './Projects.css';

function Projects() {
  return (
    <div className=" projects" id="projects">
      <h1>PROJECTS</h1>
      <div className="items">
        {projects.map((data) => (
          <div className="item1" key={data.id} data-aos="flip-left">
            {/* <img src={`/assets/${data.imageSrc}`} alt={data.title} /> */}
            <h3>{data.title}</h3>
            <p>{data.description}</p>
            <p><strong>Technologies:</strong> {data.technologies.join(', ')}</p>
          
            <div className="links">
              <a id='A' href={data.projectLink} target="_blank" rel="noopener noreferrer">View Project</a>
              {/* <a href={data.repoLink} target="_blank" rel="noopener noreferrer">View Code</a> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
