import React from 'react';
import '../../Hero.css';

function ResumeDescription() {
  return (
    <div className="hero-left resume-description">
      <h1>
        My <span className="highlight">Resume</span>
      </h1>
      <p className="description">
        A one-page snapshot of school, internships, and the products I ship.
        Last updated September 2026.
      </p>
      <a href="/John_Yao_Resume.pdf" className="projects-button" download>
        Download PDF
      </a>
    </div>
  );
}

export default ResumeDescription;
