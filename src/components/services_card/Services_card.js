import React from 'react';
import "./services_card.css"

const ServicesCard = (props) => {
  return (
    <div className="services_card">
      <h2>{props.heading}</h2>
      <p>{props.content}</p>
    </div>
  )
}

export default ServicesCard
