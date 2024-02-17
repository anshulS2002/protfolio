import React from 'react';
import LogoA from "../../../assets/img/background3.svg"
import "./Logo.scss";
const Logo = () => {
    return (

        <div className="logo-container">
            <img src={LogoA} alt="Ansh" className="solid-logo"/>
        </div>
    )
}

export default Logo
