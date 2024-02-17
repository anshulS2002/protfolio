import React, { useState, useEffect } from 'react'
import "./sidebar.scss";
import { Link, NavLink } from "react-router-dom";
import LogoA from "../../assets/img/LogoA.png";
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MenuIcon from '@mui/icons-material/Menu';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
const Sidebar = () => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [screenSize, setScreenSize] = useState(undefined);

    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth);

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (screenSize <= 800) {
            setActiveMenu(false);
        } else {
            setActiveMenu(true);
        }
    }, [screenSize]);

    return (
        <div className="nav-bar">
            <div className="logo-heading">
                <Link className="logo" to="/">
                    <img src={LogoA} alt="Ansh" />
                </Link>
                <h1 className="name-heading">ANSHUL</h1>
            </div>
            <nav>
                <NavLink exact="true" activeclassname="active" className="home-link" to="/">
                    <HomeIcon />

                </NavLink>
                <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                    <InfoIcon />

                </NavLink>
                <NavLink exact="true" activeclassname="active" className="skill-link" to="/skill">
                    <SettingsSuggestOutlinedIcon />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="project-link" to="/project">
                    <RemoveRedEyeOutlinedIcon />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                    <MarkunreadIcon />
                </NavLink>
            </nav>

                {/* <li>
                    <a target="_blank" rel="noreferrer" href="/">
                    <GitHubIcon />
                    </a>
                    </li>
                    <li>
                    <a target="_blank" rel="noreferrer" href="https://twitter.com/Anshjhanwar07">
                    <TwitterIcon />
                    </a>
                </li> */}
                <ul className="social-links">
                    <li>
                        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/somanianshul02/">
                            <LinkedInIcon />
                        </a>
                    </li>
                </ul>
            <button className="mobile-menu" onClick={() => setActiveMenu(!activeMenu)}> <MenuIcon /> </button>
            {activeMenu && (
                <div className="mobile-container">
                    <div className="nav-links">
                        <NavLink exact="true" activeclassname="active" className="home-link" to="/">
                            <HomeIcon />

                        </NavLink>
                        <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                            <InfoIcon />
                        </NavLink>
                        <NavLink exact="true" activeclassname="active" className="skill-link" to="/skill">
                            <SettingsSuggestOutlinedIcon />
                        </NavLink>
                        <NavLink exact="true" activeclassname="active" className="project-link" to="/project">
                            <RemoveRedEyeOutlinedIcon />
                        </NavLink>
                        <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                            <MarkunreadIcon />
                        </NavLink>

                    </div>

                </div>
            )}
        </div>
    )
}

export default Sidebar
