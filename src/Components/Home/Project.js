import React from 'react';

const Project = ({ project, setProjectDetail }) => {
    const { name, img, liveSite, bullatePoint } = project;

    return (
        <div className="card lg:card-side bg-base-100 shadow-xl w-full h-96">
            <figure><img className='w-64 h-32 lg:h-80 sm:h-32' src={img} alt="Album" /></figure>
            <div className="card-body w-auto h-36 lg:h-96">
                <h2 className="card-title">{name}</h2>
                <p>{bullatePoint}</p>
                <div className="card-actions justify-end">
                    <a href={liveSite} className="btn btn-gray text-white h-2 w-28 py-4 px-6" target='_blank' rel="noreferrer" >Live Site</a>

                    <label for="project-modal"
                        onClick={() => setProjectDetail(project)}
                        class="btn btn-gray text-white uppercase" >Project Detail...</label>
                </div>
            </div>
        </div>
    );
};

export default Project;