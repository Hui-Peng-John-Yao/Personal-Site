import React from 'react';
import '../../Hero.css';
import '../../Skills.css';
import googleLogo from '../../assets/google_api.png';
import alexaLogo from '../../assets/alexa.png';
import lambdaLogo from '../../assets/Lambda.png';
import DynamoDBLogo from '../../assets/DynamoDB.png';
import S3Logo from '../../assets/S3.png';

const skills = [
  {
    name: 'Alexa SK',
    svg: (
      <img src={alexaLogo} alt="AWS Logo" width="60" height="60" style={{display: 'block', margin: '0 auto', borderRadius: '10px'}} />
    ),
  },
  {
    name: 'Google API',
    svg: (
      <img src={googleLogo} alt="AWS Logo" width="60" height="60" style={{display: 'block', margin: '0 auto', borderRadius: '10px'}} />
    ),
  },
  {
    name: 'Lambda',
    svg: (
      <img src={lambdaLogo} alt="AWS Logo" width="60" height="60" style={{display: 'block', margin: '0 auto', borderRadius: '10px'}} />
    ),
  },
  {
    name: 'DynamoDB',
    svg: (
      <img src={DynamoDBLogo} alt="AWS Logo" width="60" height="60" style={{display: 'block', margin: '0 auto', borderRadius: '10px'}} />
    ),
  },
  {
    name: 'S3',
    svg: (
      <img src={S3Logo} alt="AWS Logo" width="60" height="60" style={{display: 'block', margin: '0 auto', borderRadius: '10px'}} />
    ),
  },
];

function SkillIconsPracticing() {
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

export default SkillIconsPracticing;