import React from 'react';
import '../projects/Projects.css';
import ProjectSection from '../projects/ProjectSection.js';
import WorkDescription from './WorkDescription.js';
import wooolyImage from '../../assets/woooly.png';
import dataformaImage from '../../assets/dataforma.png';

const work = [
  {
    image: wooolyImage,
    title: 'WOOOLY',
    description: "I'm a full-stack developer at WOOOLY, an AI-era hiring platform. I own assessment modules that measure how candidates actually work with AI — market research, AI-assisted coding, and chatbot search optimization — skills a resume cannot show.\n\nI ship those modules end-to-end in React, JavaScript, Python, PostgreSQL, and Docker: product logic, UI, and data. This is production software used to evaluate real applicants, not a classroom prototype.",
    tech: ['Javascript', 'React', 'PostgreSQL', 'Docker', 'Python'],
    github: '',
    external: ''
  },
  {
    image: dataformaImage,
    title: 'Dataforma',
    description: "At Dataforma, a field-management platform for roofing companies, I build customer-facing widgets that turn operational data into decisions crews and office teams can act on the same day.\n\nI work across Vue.js, Kotlin, SQL, Docker, and AWS S3 — the UI plus the backend and data it sits on — so operators see critical business metrics without digging through reports.",
    tech: ['Vue.js', 'Kotlin', 'SQL', 'Docker', 'AWS S3'],
    github: '',
    external: ''
  }
];

function Work() {
  return (
    <div className="projects">
      <WorkDescription />
      {work.map((item, idx) => (
        <ProjectSection key={idx} {...item} />
      ))}
    </div>
  );
}

export default Work;
