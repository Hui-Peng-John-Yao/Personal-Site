import React from 'react';
import './Header.css';
import profilePic from '../assets/John_Color.png';
import Nav from './Nav';

function Header() {

  return (
    <header className="custom-header">
      <div className="header-left">
        <img src={profilePic} alt="Profile" className="profile-pic" />
        <span className="site-name">John Yao</span>
      </div>
      <Nav />
    </header>
  );
}

export default Header;