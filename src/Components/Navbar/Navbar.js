import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const menuItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><a href='#myProjects'>Projects</a></li>
        {/* <li><a href='#myProjects'>Projects</a></li> */}
        <li><a href='#aboutMe'>Skills</a></li>
        <li><a href='#aboutMe'>About Me</a></li>
        <li><a href='#blogs'>Blogs</a></li>
        <li><a href='#contact'>Contact Me</a></li>
    </>
    return (
        <div class="navbar bg-base-100 px-12 bg-primary text-white fixed top-0">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabIndex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <a href='/home' className="btn btn-ghost normal-case text-xl">Portfolio</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn btn-info" href='https://drive.google.com/file/d/1I2dNUz_ZbQxYuJzJ2YnJXHASvjPgi9vu/view?usp=sharing' target='_blank' rel="noreferrer" download>Download Resume</a>
            </div>
        </div>
    );
};

export default Navbar;