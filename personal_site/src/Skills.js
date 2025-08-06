import React from 'react';
import './Hero.css';
import './Skills.css';
import SkillsDescription from './components/skills/SkillsDescription.js';
import SkillIconsProficent from './components/skills/SkillIconsProficent.js';
import Title from './components/Title.js';
import SkillIconsPracticing from './components/skills/SkillIconsPracticing.js';
import Header from './components/Header.js';

function Skills() {
  return (
    <div>
      <Header />
    <section className="hero-section-vertical">
      <SkillsDescription />
      <Title title="Languages/Frameworks" />
      <SkillIconsProficent />
      <Title title="Technologies" />
      <SkillIconsPracticing />
    </section>
    </div>
  );
}

export default Skills;  