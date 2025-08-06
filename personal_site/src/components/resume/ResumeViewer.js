import React from 'react';
import '../../Hero.css';

function ResumeViewer() {
  return (
    <div className="hero-right" >
      <iframe
        src="/John_Yao_Resume.pdf#zoom=100%"
        style={{ border: "none" }} 
        title="My PDF Document"
        width="100%"
        height="700px"
      />
      
    </div>
  );
}

export default ResumeViewer;