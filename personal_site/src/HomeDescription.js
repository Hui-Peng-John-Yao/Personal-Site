import React from 'react';
import './Hero.css';

function HomeDescription() {
    return (
        <div className="hero-left">
            <h1>
                Hi, I’m <span className="highlight">John Yao!</span>
            </h1>
            <p className="description" style={{fontSize: '1.2rem'}}>
                I'm a UCLA student that loves coding and building things, and I'm currently looking for a summer 2026 internship. I specialize in full stack development and AI implementation.
            </p>
            {/* Add social and skills sections here */}
        </div>
    );
}

export default HomeDescription;