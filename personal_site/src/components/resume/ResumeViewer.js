import React from 'react';
import '../../Hero.css';

function ResumeViewer() {
  return (
    <div className="hero-right">
      <iframe
        src="/John_Yao_Resume.pdf#zoom=100%"
        width="800px"
        height="700px"
        style={{ border: "none" }}
        title="My PDF Document"
      />
      
    </div>
  );
}

export default ResumeViewer;