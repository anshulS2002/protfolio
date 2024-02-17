import React from 'react';
import { ThreeDots } from  'react-loader-spinner'
import LogoA from "../../assets/img/LogoA.png"
import "./index.scss";
const Loader = () => {
    return (
        <div className="loader">
            <div className="image-container">
                <img src={LogoA} alt="A"/>
            </div>
            <div className="para-container">
                Anshul is working...
            </div>
            <ThreeDots color="#ffd400" height={60} width={60} />
        </div>
    )
}

export default Loader
