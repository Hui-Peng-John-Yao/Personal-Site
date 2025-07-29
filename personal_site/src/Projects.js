import React from 'react';
import './Hero.css';
import './Projects.css';
import ProjectSection from './ProjectSection.js';
import ProjectsDescription from './ProjectsDescription.js';
import Header from './components/Header.js';
import alexaImage from './assets/alexa.jpg';
import arcaneChessImage from './assets/Arcane_Chess.png';
import researchImage from './assets/Research_Image.png';

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
    image: arcaneChessImage,
    title: 'Arcane Chess',
    description: 'A game developed in GoDot that combines the classic gameplay of chess with a card and mana system.',
    tech: ['GoDot'],
    github: '',
    external: ''
  },
  {
    image: researchImage,
    title: 'Published Research',
    description: 'A paper titled "The Role of Game-Playing and Coping Styles in Mitigating Stress Among Students" published in The Whitman Journal of Psychology. I used Centiment for data collection and R for data analysis.',
    tech: ['Centiment', 'R'],
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