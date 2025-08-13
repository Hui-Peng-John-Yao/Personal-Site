import React, { useState } from 'react';
import './Header.css';
import profilePic from '../assets/John_Color.png';
import Nav from './Nav';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="custom-header">
      <div className="header-left">
        <img src={profilePic} alt="Profile" className="profile-pic" />
        <span className="site-name">John Yao</span>
      </div>
      
      {/* Desktop Navigation */}
      <Nav />
      
      {/* Mobile Menu Button */}
      <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
        ☰
      </button>
      
      {/* Mobile Navigation Overlay */}
      {isMobileMenuOpen && (
        <div className="mobile-nav-overlay">
          <div className="mobile-nav-content">
            <button className="mobile-close-btn" onClick={toggleMobileMenu}>
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