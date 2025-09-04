import React from 'react';
import '../../Hero.css';
import '../../Skills.css';
import godotLogo from '../../assets/godot_logo.png';
import rLogo from '../../assets/r_logo.png';
import cppLogo from '../../assets/c++logo.svg';

const skills = [
  {
    name: 'HTML',
    svg: (
      <svg width="80" height="80" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill="#E44D26" d="M19.5 116L8.1 0h111.8l-11.4 116L63.9 128"/>
        <path fill="#F16529" d="M64 117.1l36.7-10.2 9.8-109.7H64"/>
        <path fill="#EBEBEB" d="M64 66.6H44.2l-1.4-15.7H64V36.1H29.7l.4 4.7 4.1 46.2H64v-20.4zm0 36.2l-.1.1-16.6-4.5-1.1-12.2H36.2l2.1 23.6 25.6 7.1.1-.1v-14z"/>
        <path fill="#FFF" d="M63.9 66.6v14.8h16.2l-1.5 16.7-14.7 4.1v14l25.6-7.1.2-2.2 2.2-24.7.2-2.4H63.9zm0-30.5v14.8h18.3l.2-2.2.5-5.5.2-2.4H63.9z"/>
      </svg>
    ),
  },
  {
    name: 'CSS',
    svg: (
      <svg width="80" height="80" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill="#1572B6" d="M19.5 116L8.1 0h111.8l-11.4 116L63.9 128"/>
        <path fill="#33A9DC" d="M64 117.1l36.7-10.2 9.8-109.7H64"/>
        <path fill="#fff" d="M64 66.6H44.2l-1.4-15.7H64V36.1H29.7l.4 4.7 4.1 46.2H64v-20.4zm0 36.2l-.1.1-16.6-4.5-1.1-12.2H36.2l2.1 23.6 25.6 7.1.1-.1v-14z"/>
        <path fill="#EBEBEB" d="M63.9 66.6v14.8h16.2l-1.5 16.7-14.7 4.1v14l25.6-7.1.2-2.2 2.2-24.7.2-2.4H63.9zm0-30.5v14.8h18.3l.2-2.2.5-5.5.2-2.4H63.9z"/>
      </svg>
    ),
  },
  {
    name: 'Javascript',
    svg: (
      <svg width="80" height="80" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="128" height="128" rx="16" fill="#F7DF1E"/>
        <path d="M89.6 104.2c1.8 2.9 4.2 5.1 8.4 5.1 3.5 0 5.7-1.7 5.7-4.1 0-2.8-2.2-3.8-6-5.4l-2.1-.9c-6-2.6-10-5.8-10-12.7 0-6.3 4.8-11.1 12.2-11.1 5.3 0 9.1 1.8 11.8 6.6l-6.5 4.2c-1.4-2.5-2.9-3.5-5.3-3.5-2.4 0-4 1.5-4 3.5 0 2.4 1.5 3.4 5 4.9l2.1.9c7.1 3 11.1 6.1 11.1 13.1 0 7.5-5.9 11.6-13.8 11.6-7.7 0-12.7-3.7-15.1-8.5zm-36.2.7c1.3 2.3 2.5 4.2 5.3 4.2 2.7 0 4.4-1.1 4.4-5.3V72.2h8.2v31.7c0 8.5-5 12.4-12.3 12.4-6.6 0-10.5-3.4-12.5-7.5z" fill="#000"/>
      </svg>
    ),
  },
  {
    name: 'Python',
    svg: (
      <svg width="80" height="80" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="128" height="128" rx="16" fill="#306998"/>
        <path d="M64 24c-11.046 0-20 8.954-20 20v12h40V44c0-11.046-8.954-20-20-20zm-8 12a4 4 0 110 8 4 4 0 010-8z" fill="#FFD43B"/>
        <path d="M64 104c11.046 0 20-8.954 20-20V72H44v12c0 11.046 8.954 20 20 20zm8-12a4 4 0 110-8 4 4 0 010 8z" fill="#FFE873"/>
      </svg>
    ),
  },
  {
    name: 'Java',
    svg: (
      <svg width="80" height="80" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="128" height="128" rx="16" fill="#fff"/>
        <path d="M64 100c-16 0-28-4-28-8s12-8 28-8 28 4 28 8-12 8-28 8zm0-12c-10.493 0-19-2.239-19-5s8.507-5 19-5 19 2.239 19 5-8.507 5-19 5zm0-9c-7.732 0-14-1.119-14-2.5s6.268-2.5 14-2.5 14 1.119 14 2.5-6.268 2.5-14 2.5z" fill="#5382A1"/>
        <path d="M64 32c6.627 0 12 5.373 12 12 0 6.627-5.373 12-12 12s-12-5.373-12-12c0-6.627 5.373-12 12-12z" fill="#E76F00"/>
      </svg>
    ),
  },
  {
    name: 'GDScript',
    svg: (
      <img src={godotLogo} alt="Godot Engine Logo" width="80" height="80" style={{display: 'block', margin: '0 auto'}} />
    ),
  },
  {
    name: 'R',
    svg: (
      <img src={rLogo} alt="R Logo" width="80" height="80" style={{display: 'block', margin: '0 auto'}} />
    ),
  },
  {
    name: 'C++',
    svg: (
      <img src={cppLogo} alt="C++" width="80" height="80" style={{display: 'block', margin: '0 auto', borderRadius: '10px'}} />
    ),
  },
];

function SkillIcons() {
  return (
    <div className="skill-icons-panel">
      {skills.map((skill) => (
        <div className="skill-icon-card" key={skill.name}>
          <div className="skill-icon-svg">{skill.svg}</div>
          <div className="skill-icon-label">{skill.name}</div>
        </div>
      ))}
    </div>
  );
}

export default SkillIcons;