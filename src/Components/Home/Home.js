import React from 'react';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';
import Skills from './Skills';

const Home = () => {
    return (
        <div>
            <About></About>
            <Skills></Skills>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;