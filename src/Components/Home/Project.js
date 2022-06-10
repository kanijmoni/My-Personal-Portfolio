import React from 'react';

const Project = ({ project }) => {
    const { name, img, liveSite, bullatePoint } = project;

    return (
        <div class="card lg:card-side bg-base-100 shadow-xl">
            <figure><img className='w-52 h-80' src={img} alt="Album" /></figure>
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <p>{bullatePoint}</p>
                <a href={liveSite} className="btn btn-gray h-2 w-28 py-4 px-6 card-actions justify-end" target='_blank' rel="noreferrer" >Live Site</a>
                <div class="card-actions justify-end">
                    <button class="btn btn-gray">Project Detail...</button>
                </div>
            </div>
        </div>
    );
};

export default Project;