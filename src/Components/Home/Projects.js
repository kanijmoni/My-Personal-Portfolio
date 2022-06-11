import React, { useEffect, useState } from 'react';
import Project from './Project';
import ProjectModal from './ProjectModal';

const Projects = () => {

    const [projects, setProjects] = useState([]);
    const [projectDetail, setProjectDetail] = useState(null);

    useEffect(() => {
        fetch('projects.json')
            .then(res => res.json())
            .then(data => setProjects(data));
    }, [])

    return (
        <div id='myProjects' className='px-12 py-20'>
            <h2 className='font-bold text-3xl text-center mt-4'>My Projects</h2>
            <p className='text-center mb-4'><i>"Projects,that I have done recently"</i></p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8'>
                {
                    projects.map(project => <Project
                        key={project.id}
                        project={project}
                        setProjectDetail={setProjectDetail}
                    ></Project>)
                }
            </div>
            {projectDetail && <ProjectModal projectDetail={projectDetail}></ProjectModal>}
        </div>
    );
};

export default Projects;