import React from 'react';
import '../../Hero.css';

function ResumeViewer() {
  return (
    <div className="hero-right resume-viewer-container">
      <iframe
        src="/John_Yao_Resume.pdf#zoom=100%"
        style={{ border: "none" }} 
        title="My PDF Document"
        className="resume-iframe"
      />
    </div>
  );
}

export default ResumeViewer;