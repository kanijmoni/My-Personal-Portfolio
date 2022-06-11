import React from 'react';

const ProjectModal = ({ projectDetail }) => {
    const { name, img, bullatePoint, description, liveSite, clientSite, serverSite, technologies } = projectDetail;

    return (
        <div className=' w-11/12'>
            <input type="checkbox" id="project-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="project-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div className='grid grid-col-3 gap-1 mb-4'>
                        <img className='h-52' src={img} alt="" />
                        <img className='h-52' src={img} alt="" />
                        <img className='h-52' src={img} alt="" />
                    </div>
                    <h3 class="font-bold text-lg">{name}</h3>
                    <p className='font-bold text-center'>Description:</p>
                    <p class="py-2">{bullatePoint}</p>
                    <p className='py-2'>{description}</p>
                    <p><b>Used Technologies:</b>{technologies}</p>
                    <div class="modal-action">
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