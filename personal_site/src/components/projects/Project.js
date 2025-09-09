import React from 'react';
import '../.././Hero.css';
import ProjectDescription from './ProjectDescription.js';

function Project(props) {
  return (
    <div>
        <section className="hero-section-vertical">
            <ProjectDescription title={props.title} description={props.description} />
        </section>
    </div>
  );
}

export default Project;