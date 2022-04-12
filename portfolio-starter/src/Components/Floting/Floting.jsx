import React from 'react'
import "./Floting.css"

const Floting = ({image,txt1,txt2}) => {
  return (
    <div className='floating'>
        <img src={image} alt="" />
        <span>
            {txt1}
            <br />
            {txt2}
        </span>
    </div>
  )
}

export default Floting