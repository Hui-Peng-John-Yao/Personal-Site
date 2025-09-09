import React from 'react';
import '../.././Hero.css';
import './Skills.css';
import SkillsDescription from './SkillsDescription.js';
import SkillIconsProficent from './SkillIconsProficent.js';
import Title from '../Title.js';
import SkillIconsPracticing from './SkillIconsPracticing.js';
import SkillIconsCloud from './SkillIconsCloud.js';
import SkillIconsTech from './SkillIconsTech.js';
import Header from '../Header.js';

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