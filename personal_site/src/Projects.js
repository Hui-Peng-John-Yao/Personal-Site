import React from 'react';
import './Hero.css';
import './Projects.css';
import ProjectSection from './ProjectSection.js';
import ProjectsDescription from './ProjectsDescription.js';
import Header from './components/Header.js';
import alexaImage from './assets/alexa.jpg';

const projects = [
  {
    image: alexaImage,
    title: 'Alexa Journal Reader',
    description: 'I journal my to-do list, and I ask Alexa to read it back to me the next day when I wake up.',
    tech: ['React', 'Tailwind'],
    github: 'https://github.com/',
    external: 'https://example.com/'
  },
  {
    image: 'https://via.placeholder.com/600x400?text=Project+2',
    title: 'Another Project',
    description: 'A description for another project goes here.',
    tech: ['React', 'CSS'],
    github: '',
    external: ''
  }
];

function Projects() {
  return (
    <div>
      <Header />
    <div className="projects">
      <ProjectsDescription />
      {projects.map((project, idx) => (
        <ProjectSection key={idx} {...project} />
      ))}
    </div>
    </div>
  );
}

export default Projects;      