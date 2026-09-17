import React from 'react';
import '../projects/Projects.css';
import ProjectSection from '../projects/ProjectSection.js';
import WorkDescription from './WorkDescription.js';
import Header from '../Header.js';
import wooolyImage from '../../assets/woooly.png';
import dataformaImage from '../../assets/dataforma.png';

const work = [
  {
    image: wooolyImage,
    title: 'WOOOLY',
    description: "I work as a full stack developer at WOOOLY, a hiring platform built for the AI era. I engineer complex modules that test candidates' AI relevant skills. This includes market research, AI-assisted coding, chatbot search optimization, and more.",
    tech: ['Javascript', 'React', 'PostgreSQL', 'Docker', 'Python'],
    github: '',
    external: ''
  },
  {
    image: dataformaImage,
    title: 'Dataforma',
    description: 'I work as a software developer at Dataforma, a field management software for roofing companies. My job is to create widgets that display critical business information to customers.',
    tech: [],
    github: '',
    external: ''
  }
];

function Work() {
  return (
    <div>
      <Header />
      <div className="projects">
        <WorkDescription />
        {work.map((item, idx) => (
          <ProjectSection key={idx} {...item} />
        ))}
      </div>
    </div>
  );
}

export default Work;
