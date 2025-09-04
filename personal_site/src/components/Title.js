import '@fontsource/dm-sans';
import React from 'react';
import '../Hero.css';

function Title(props) {
  return (
      <h2 className="title" style={{fontFamily: 'DM Sans', fontSize: '2rem', fontWeight: 'bold', color: 'white'}}>
        {props.title}
      </h2>
  );
}

export default Title;