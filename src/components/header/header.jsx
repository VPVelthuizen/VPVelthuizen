import React from 'react';
import './header.css';
import headerBackground from '../../assets/hexes.png';
import headerBackground2 from '../../assets/hexesSmall.png';
import VPVelthuizen from '../../assets/VPVelthuizen.png';

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