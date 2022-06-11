import React from 'react';

const ProjectModal = ({ projectDetail }) => {
    const { name, img, bullatePoint, description, liveSite, clientSite, serverSite, technologies } = projectDetail;

    return (
        <div className=' w-11/12'>
            <input type="checkbox" id="project-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label for="project-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div className='grid grid-cols-3 gap-1 mb-2'>
                        <img className='h-52 w-52' src={img} alt="" />
                        <img className='h-52 w-52' src={img} alt="" />
                        <img className='h-52 w-52' src={img} alt="" />
                    </div>
                    <h3 className="font-bold text-lg">{name}</h3>
                    <p className='font-bold text-center'>Description:</p>
                    <p className="py-2">{bullatePoint}</p>
                    <p className='py-2'>{description}</p>
                    <p><b>Used Technologies:</b>{technologies}</p>
                    <div className="modal-action">
                        <a href={liveSite} target='_blank' rel="noreferrer" class="btn btn-accent">Live Site Link</a>
                        <a href={clientSite} target='_blank' rel="noreferrer" class="btn btn-accent">Client Site Code</a>
                        <a href={serverSite} target='_blank' rel="noreferrer" class="btn btn-accent">Server Site Code</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;