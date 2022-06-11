import React from 'react';
import About from './About';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Projects from './Projects';
// import Services from './Services';


const Home = () => {
    return (
        <div>
            <About></About>
            <AboutMe></AboutMe>
            {/* <Services></Services> */}
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;