import React from 'react';
import '../.././Hero.css';   
import HomeDescription from './HomeDescription';
import JohnPicture from './JohnPicture';

function Hero() {
  return (
    <section className="hero-section">
      <HomeDescription />
      <JohnPicture />
    </section>
  );
}

export default Hero;