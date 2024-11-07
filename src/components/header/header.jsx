import React from 'react';
import './header.css';
import headerBackground from '../../assets/headerBackground.jpg';

const Header = () => {
    return (
        <header>
            <div className="bg">
                <img src={headerBackground} alt="Header Background" />
            </div>
            <div className="logo">
                VPVelthuizen
            </div>
            <nav className="navigation">
                <ul>
                    <li>Landing</li>
                    <li>About</li>
                    <li>Projects</li>
                    <li>Resume</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;