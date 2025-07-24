import React from 'react';
import './Hero.css';

function HomeDescription() {
    return (
        <div className="hero-left">
            <h1>
                Hi, I’m <span className="highlight">John Yao</span><br />
            a <span className="highlight">Developer</span>!
            </h1>
            <p className="description">
                I'm a UCLA student that loves coding and building things, and I'm currently looking for a summer 2026 internship.<br/>
                I specialize in full stack development, and I'm currently learning about AI and machine learning. 
            </p>
            {/* Add social and skills sections here */}
        </div>
    );
}

export default HomeDescription;