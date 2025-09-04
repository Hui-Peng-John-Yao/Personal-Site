import React from 'react';
import './Hero.css';
import './Skills.css';
import SkillsDescription from './components/skills/SkillsDescription.js';
import SkillIconsProficent from './components/skills/SkillIconsProficent.js';
import Title from './components/Title.js';
import SkillIconsPracticing from './components/skills/SkillIconsPracticing.js';
import SkillIconsCloud from './components/skills/SkillIconsCloud.js';
import SkillIconsTech from './components/skills/SkillIconsTech.js';
import Header from './components/Header.js';

function Skills() {
  return (
    <div>
      <Header />
    <section className="skills-section">
      <SkillsDescription />
      <Title title="Programming Languages" />
      <SkillIconsProficent />
      <Title title="Frameworks & Libraries" />
      <SkillIconsPracticing />
      <Title title="Cloud & Databases" />
      <SkillIconsCloud />
      <Title title="Technologies & Platforms" />
      <SkillIconsTech />
    </section>
    </div>
  );
}

export default Skills;  