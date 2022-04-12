import React from 'react'
import "./intro.css"
import GitHub from "../../img/github.png"
import Instagram from "../../img/instagram.png"
import Link from "../../img/linkedin.png"
import png1 from "../../img/Vector1.png"
import Pmg2 from "../../img/Vector2.png"
import Boy from "../../img/boy.png"
import Thumb from "../../img/thumbup.png"
import Crown from "../../img/crown.png"
import glass from "../../img/glassesimoji.png"
import Floting from '../Floting/Floting'



const intro = () => {
  return (
    <div className='intro'>
        <div className='intleft'>
            <div className='iName'>
                <span>
                    Hy! I AM 
                </span>
                <span>Jamshed Shahid</span>
                <span>
                    Frontend Developer With High Level of
                    Experience in Web Designing
                    and Development , <br /> Producting 
                    the Quality Work
                </span>
                <button className='ibutt'>Hire Me</button>
            <div className='i-icons'>
            <img src={GitHub} alt="" />
            <img src={Instagram} alt="" />
            <img src={Link} alt="" />

            </div>
            </div>
        </div>
        <div className='iright'>
       <img src={png1} alt="" />
       <img src={Pmg2} alt="" />
       
       <img src={Boy} alt="" />
    <img src={glass} alt="" />
       <div style={{top:'-4%' ,left:"68%"}}>
           <Floting image={Crown} txt1="web" txt2="Developer"/>
       </div>
       <div style={{top:'48%' ,left:""}}>
           <Floting image={Thumb} txt1="Best Design" txt2="Award"/>
       </div>
        <div className='blur' style={{background :"rgb(224, 143, 36)"}}>

        </div>

        <div className='blurs' style={{background :"rgb(83, 28, 109)"}}>

        </div>

        </div>
    </div>
  )
}

export default intro