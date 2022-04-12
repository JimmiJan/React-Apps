import React from 'react'
import "./navbar.css"

const Navbar = () => {
  return (
    <div className='wrapper'>
        <div className='Left'>
            <div className='Name'>
                Jamshed
            </div>
            <span>Toggle</span>
        </div>
        <div className='Right'>
            <div className='list'>
                <ul>
                    <li>Home</li>
                    <li>Services</li>
                    <li>Experience</li>
                    <li>PortFolio</li>
                    <li>Testimonial</li>
                    {/* <li></li> */}
                </ul>
            </div>  
            <button>Contect Us</button>


        </div>
    </div>
  )
}

export default Navbar