import React from 'react'
import "./card.css"

const Card = ({emoji, heading, detail}) => {
  return (
    <div className='card'>
        <img src={emoji} alt="" />
        <span>{heading}</span>
        <span className='heel'>{detail}</span>
        <button className='c-buttun'>Learn More</button>
    </div>
  )
}

export default Card