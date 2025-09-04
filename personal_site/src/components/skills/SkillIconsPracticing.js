import React from 'react';
import '../../Hero.css';
import '../../Skills.css';
import reactLogo from '../../assets/react_logo.svg';
import bootstrapLogo from '../../assets/bootstrap_logo.svg';
import nodejsLogo from '../../assets/Node.js.svg';
import expressLogo from '../../assets/expressjs.svg';
import tailwindLogo from '../../assets/TailwindCSSLogo.svg.png';

const skills = [
  {
    name: 'React',
    svg: (
      <img src={reactLogo} alt="React" width="80" height="80" style={{display: 'block', margin: '0 auto', borderRadius: '10px'}} />
    ),
  },
  {
    name: 'Node.js',
    svg: (
      <img src={nodejsLogo} alt="Node.js" width="80" height="80" style={{display: 'block', margin: '0 auto', borderRadius: '10px'}} />
    ),
  },
  {
    name: 'Express',
    svg: (
      <img src={expressLogo} alt="Express" width="80" height="80" style={{display: 'block', margin: '0 auto', borderRadius: '10px'}} />
    ),
  },
  {
    name: 'Bootstrap',
    svg: (
      <img src={bootstrapLogo} alt="Bootstrap" width="80" height="80" style={{display: 'block', margin: '0 auto', borderRadius: '10px'}} />
    ),
  },
  {
    name: 'Tailwind',
    svg: (
      <img src={tailwindLogo} alt="Tailwind" width="80" height="80" style={{display: 'block', margin: '0 auto', borderRadius: '10px'}} />
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