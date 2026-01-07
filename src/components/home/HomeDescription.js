import React from 'react';
import { Link } from 'react-router-dom';
import '../.././Hero.css';

function HomeDescription() {
    return (
        <div className="hero-left">
            <h1>
                Hi, I'm <span className="highlight">John Yao!</span>
            </h1>
            <p className="description" style={{fontSize: '1.2rem'}}>
                I'm a UCLA student specializing in full stack development and AI implementation.
            </p>
            <Link to="/projects" className="projects-button">
                See my projects!
            </Link>
            {/* Add social and skills sections here */}
        </div>
    );
}

export default HomeDescription;