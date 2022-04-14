import React from 'react'
import "./work.css"

import Upwork from "../../img/Upwork.png"
import Fiver from "../../img/fiverr.png"

import Amazone from "../../img/amazon.png"
import Facebook from "../../img/Facebook.png"
import Shopify from "../../img/Shopify.png"


const Work = () => {
    return (
        <div className='works'>
            <div className='awsome'>
                <span> Work for All These</span>
                <span>Branded & Client</span>
                <p>
                    Lorem ipsum dolor sit amet <br />
                    consectetur adipisicing elit. Quo, quasi!
                    <br />
                    Lorem ipsum dolor sit amet . Voluptatibus, autem.
                    <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>

                <button className='s-button'>Download Cs</button>

                <div className='blur svlur' style={{ background: "#ABF1FF94" }}></div>
            </div>

            {/* rightSide */}

            <div className='m-right'>
                <div className='m-maincircle'>
                    <div className='w-circle'>
                        <img src={Upwork} alt="" />

                    </div>
                    <div className='w-circle'>
                        <img src={Fiver} alt="" />

                    </div>
                    <div className='w-circle'>
                        <img src={Amazone} alt="" />

                    </div>

                    <div className='w-circle'>
                        <img src={Shopify} alt="" />

                    </div>
                    <div className='w-circle'>
                        <img src={Facebook} alt="" />

                    </div>

                </div>
                <div className='w-back blueCircle'>

                </div>
                <div className='w-back yellowcir'>

                </div>

            </div>

        </div>
    )
}

export default Work