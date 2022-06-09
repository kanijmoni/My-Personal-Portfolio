import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <div>
            <nav>
                <Link to='/home'>Home</Link>
                <Link to='#projects'>Projects</Link>
                <Link to='#contact'>Contact Me</Link>
                <Link to='/home'><button >Download Resume</button></Link>
            </nav>
        </div>
    );
};

export default Navbar;