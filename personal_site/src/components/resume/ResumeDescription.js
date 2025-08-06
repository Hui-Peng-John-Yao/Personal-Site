import React from 'react';
import '../../Hero.css';

function ResumeDescription() {
    return (
        <div className="hero-left hidden lg:block">
            <h1>
                My <span className="highlight">Resume</span><br />
            </h1>
            <p className="description">
            Constantly updating...
            </p>
        </div>
    );
}

export default ResumeDescription;