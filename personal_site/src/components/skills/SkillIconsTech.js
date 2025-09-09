import React from 'react';
import '../.././Hero.css';
import './Skills.css';
import googleLogo from '../../assets/google_api.png';
import alexaLogo from '../../assets/alexa.png';
import gitLogo from '../../assets/Giticon.svg.png';
import restLogo from '../../assets/resticon.svg.png';
import oauthLogo from '../../assets/Oauth_logo.svg.png';
import cursorLogo from '../../assets/cursorailogo.png';
import flowiseLogo from '../../assets/flowise.png';
import slackLogo from '../../assets/slack-logo-icon.png';
import linuxLogo from '../../assets/linux.webp';

const skills = [
  {
    name: 'Git',
    svg: (
      <img src={gitLogo} alt="Git" width="80" height="80" style={{display: 'block', margin: '0 auto', borderRadius: '10px'}} />
    ),
  },
  {
    name: 'REST APIs',
    svg: (
      <img src={restLogo} alt="REST APIs" width="80" height="80" style={{display: 'block', margin: '0 auto', borderRadius: '10px'}} />
    ),
  },
  {
    name: 'OAuth 2.0',
    svg: (
      <img src={oauthLogo} alt="OAuth 2.0" width="80" height="80" style={{display: 'block', margin: '0 auto', borderRadius: '10px'}} />
    ),
  },
  {
    name: 'Alexa Skills Kit',
    svg: (
      <img src={alexaLogo} alt="Alexa Skills Kit" width="80" height="80" style={{display: 'block', margin: '0 auto', borderRadius: '10px'}} />
    ),
  },
  {
    name: 'Google Drive API',
    svg: (
      <img src={googleLogo} alt="Google Drive API" width="80" height="80" style={{display: 'block', margin: '0 auto', borderRadius: '10px'}} />
    ),
  },
  {
    name: 'Cursor AI',
    svg: (
      <img src={cursorLogo} alt="Cursor AI" width="80" height="80" style={{display: 'block', margin: '0 auto', borderRadius: '10px'}} />
    ),
  },
  {
    name: 'Flowise',
    svg: (
      <img src={flowiseLogo} alt="Flowise" width="80" height="80" style={{display: 'block', margin: '0 auto', borderRadius: '10px'}} />
    ),
  },
  {
    name: 'Slack',
    svg: (
      <img src={slackLogo} alt="Slack" width="80" height="80" style={{display: 'block', margin: '0 auto', borderRadius: '10px'}} />
    ),
  },
  {
    name: 'Linux',
    svg: (
      <img src={linuxLogo} alt="Linux" width="80" height="80" style={{display: 'block', margin: '0 auto', borderRadius: '10px'}} />
    ),
  },
];

function SkillIconsTech() {
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

export default SkillIconsTech;