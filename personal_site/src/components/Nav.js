import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav className="header-nav">
          <Link to="/">Home</Link>
          <Link to="/resume">Resume</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </nav>
    );
}

export default Nav;