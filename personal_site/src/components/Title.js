import React from 'react';
import '../Hero.css';

function Title(props) {
  return (
      <h2 className="title">
        {props.title}
      </h2>
  );
}

export default Title;