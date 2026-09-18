import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="site-footer">
      <p>© {new Date().getFullYear()} John Yao</p>
      <div className="footer-links">
        <a href="https://github.com/hui-peng-john-yao" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/hui-peng-john-yao-2298b2376/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <Link to="/contact">Contact</Link>
      </div>
    </footer>
  );
}

export default Footer;
