import React from 'react';
import '.Hero.css';

function ProjectDescription(props) {
    return (
        <div className="hero-left">
            <h1>
                My <span className="highlight">{props.title}</span><br />
            </h1>
            <p className="description">
                {props.description}
            </p>
        </div>
    );
}

export default ProjectDescription;