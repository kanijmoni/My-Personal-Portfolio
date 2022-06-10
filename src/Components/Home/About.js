import React from 'react';

const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200 mb-10">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="" alt='' />
                <div className=''>
                    <h1 className="text-5xl font-bold">Hi,This is Kanij Fatema</h1>
                    <p className="py-5">I'm a junior web developer</p>
                    <a className="btn btn-info" href='https://drive.google.com/file/d/1I2dNUz_ZbQxYuJzJ2YnJXHASvjPgi9vu/view?usp=sharing' target='_blank' rel="noreferrer" download>My Resume</a>
                </div>
            </div>
        </div>
    );
};

export default About;