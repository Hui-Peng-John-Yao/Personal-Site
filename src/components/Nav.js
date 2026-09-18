import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="header-nav">
      <NavLink to="/" end>Home</NavLink>
      <NavLink to="/resume">Resume</NavLink>
      <NavLink to="/skills">Skills</NavLink>
      <NavLink to="/work">Professional</NavLink>
      <NavLink to="/projects">Projects</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </nav>
  );
}

export default Nav;
