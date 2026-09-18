import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import profilePic from '../assets/John_Avatar.webp';
import Nav from './Nav';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="custom-header">
      <Link to="/" className="header-left">
        <img src={profilePic} alt="John Yao" className="profile-pic" />
        <span className="site-name">John Yao</span>
      </Link>

      <Nav />

      <button
        className="mobile-menu-btn"
        onClick={toggleMobileMenu}
        aria-label="Open navigation"
        aria-expanded={isMobileMenuOpen}
      >
        ☰
      </button>

      {isMobileMenuOpen && (
        <div className="mobile-nav-overlay">
          <div className="mobile-nav-content">
            <button
              className="mobile-close-btn"
              onClick={toggleMobileMenu}
              aria-label="Close navigation"
            >
              ✕
            </button>
            <Nav />
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
