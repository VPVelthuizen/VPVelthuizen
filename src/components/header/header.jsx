import React from 'react';
import './header.css';
import headerBackground from '../../assets/hexes.png';
import headerBackground2 from '../../assets/hexesSmall.png';
import VPVelthuizen from '../../assets/VPVelthuizen.png';
// Link will be used to allow us to jump with react router without reloading the whole page
import { Link } from 'react-router-dom';

const Header = () => {
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

    React.useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <header>
            <div className="bg">
                <img src={windowWidth <= 660 ? headerBackground2 : headerBackground} alt="Header Background" />
            </div>
            <img src={VPVelthuizen} className="logo" alt="VPVelthuizen logo"></img>
            <nav className="navigation">
                <Link to="/">Landing</Link>
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </header>
    );
};

export default Header;