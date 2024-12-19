import React from 'react';
import './footer.css';
import VPVelthuizen from '../../assets/VPVelthuizen.png';
import github from '../../assets/github.png';
import linkedin from '../../assets/linkedin.png';

const Footer = () => {

    return (
        <footer>
            <nav className="links">
                <a href="https://github.com/VPVelthuizen" target="_blank" rel="noopener noreferrer">
                    <img src={github} alt="github icon"></img>
                </a>
                <div className="footerLogo">
                    <img src={VPVelthuizen} alt="VPVelthuizen logo"></img>
                </div>
                <a href="https://www.linkedin.com/in/vpvelthuizen/" target="_blank" rel="noopener noreferrer">
                    <img src={linkedin} alt="linkedin icon"></img>
                </a>
            </nav>
        </footer>
    );
};

export default Footer;