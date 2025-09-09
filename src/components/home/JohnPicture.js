import React from 'react';
import '../.././Hero.css';
import profilePic from '../../assets/John_Color.png';

function JohnPicture() {
  return (  
    <div className="hero-right">
        <div className="profile-img-container">
          <img src={profilePic} alt="John Yao" className="profile-img" />
        </div>
    </div>
  );
}

export default JohnPicture;