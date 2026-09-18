import React from 'react';
import '../../Hero.css';

function ResumeViewer() {
  return (
    <div className="hero-right resume-viewer-container">
      <div className="resume-card">
        <iframe
          src="/John_Yao_Resume.pdf#zoom=77%"
          title="John Yao resume"
          className="resume-iframe"
        />
      </div>
    </div>
  );
}

export default ResumeViewer;
