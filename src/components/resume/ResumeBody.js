import React from 'react';
import '../../Hero.css';
import ResumeDescription from './ResumeDescription';
import ResumeViewer from './ResumeViewer';

function ResumeBody() {
  return (
    <section className="hero-section">
      <ResumeDescription/>
      <ResumeViewer />
    </section>
  );
}

export default ResumeBody;