import React from 'react';

import "./card.css";

export const Card = (props) => {
  return (
    <div className="card">
        
      <img src={props.img}/>
      <h4>{props.heading}</h4>
      <p>{props.content}</p>
    </div>
  )
}


