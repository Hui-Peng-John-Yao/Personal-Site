import React from 'react';
import { Link } from 'react-router-dom';
import '../../Hero.css';
import githubIcon from '../../assets/github-icon.svg';
import linkedinIcon from '../../assets/linkedin-icon.svg';
import mailIcon from '../../assets/mail-icon.svg';

function HomeDescription() {
  return (
    <div className="hero-left">
      <h1>
        Hi, I'm <span className="highlight">John Yao!</span>
      </h1>
      <p className="description">
        I build full-stack products and AI tools as a UCLA student — from Fitica,
        a fitness app with AI calorie scanning, to A-Eye, MLH-winning smart glasses
        that help visually impaired people navigate.
      </p>
      <p className="description">
        Right now I'm a full-stack developer at WOOOLY, shipping hiring software
        for the AI era.
      </p>
      <div className="hero-actions">
        <Link to="/projects" className="projects-button">
          See my projects!
        </Link>
        <Link to="/work" className="projects-button">
          See my professional work!
        </Link>
        <Link to="/contact" className="hero-secondary-link">
          Get in touch
        </Link>
      </div>
      <div className="hero-socials">
        <a
          className="hero-social"
          href="https://github.com/hui-peng-john-yao"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <img src={githubIcon} alt="" />
        </a>
        <a
          className="hero-social"
          href="https://www.linkedin.com/in/hui-peng-john-yao-2298b2376/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <img src={linkedinIcon} alt="" />
        </a>
        <a
          className="hero-social"
          href="mailto:huipengjohnyao@gmail.com"
          aria-label="Email"
        >
          <img src={mailIcon} alt="" />
        </a>
      </div>
    </div>
  );
}

export default HomeDescription;
