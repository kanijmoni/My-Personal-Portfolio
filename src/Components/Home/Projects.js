import React, { useEffect, useState } from 'react';
import Project from './Project';

const Projects = () => {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('projects.json')
            .then(res => res.json())
            .then(data => setProjects(data));
    }, [])

    return (
        <div className='px-12'>
            <h2 className='font-bold text-3xl text-center mt-4'>My Projects</h2>
            <p className='text-center mb-4'><i>"Projects,that I have done recently"</i></p>
            <div className='grid grid-cols-2 gap-8'>
                {
                    projects.map(project => <Project
                        key={project.id}
                        project={project}
                    ></Project>)
                }
            </div>
        </div>
    );
};

export default Projects;