import React from 'react';

function Footer() {
  return (
    <footer style={{
      textAlign: 'center',
      padding: '1rem',
      background: '#f1f1f1',
      position: 'fixed',
      left: 0,
      bottom: 0,
      width: '100%'
    }}>
      © {new Date().getFullYear()} John Yao. All rights reserved.
    </footer>
  );
}

export default Footer;
