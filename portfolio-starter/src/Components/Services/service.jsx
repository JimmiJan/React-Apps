import React from 'react'
import "./service.css"
// import Floting from '../Floting/Floting'
import Heart from "../../img/heartemoji.png"
import Smile from "../../img/glasses.png"
import Humb from "../../img/humble.png"
import Card from '../card/card'
import Resume from "./duckett.pdf"
const Service = () => {
    return (
        <div className='Service'>
            <div className='awsome'>
                <span>My Aowsome </span>
                <span>Services</span>
                <span>
                    Lorem ipsum dolor sit amet <br />
                    consectetur adipisicing elit. Quo, quasi!
                </span>
                <a href={Resume} download>
                    <button className='s-button'>Download Cs</button>
                </a>
                <div className='blur svlur' style={{ background: "#ABF1FF94" }}></div>
            </div>
            <div className='Cards'>
                <div style={{ left: "14rem" }}>
                    <Card
                        emoji={Heart}
                        heading={"Design"}
                        detail={"Figma, Sketch , PhotoShop , Adobe xd"}
                    />
                </div>


                <div style={{ left: "-4rem", top: "12rem" }}>
                    <Card
                        emoji={Smile}
                        heading={"Design"}
                        detail={"Figma, Sketch , PhotoShop , Adobe xd"}
                    />
                </div>


                <div style={{ left: "12rem", top: "19rem" }}>
                    <Card
                        emoji={Humb}
                        heading={"UI/UX"}
                        detail={"lorem  consectetur adipisicing elit"}
                    />
                </div>
            </div>
        </div>
    )
}

export default Service