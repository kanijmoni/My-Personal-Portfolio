import React from 'react';

const Projects = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-3 gap-5'>
            <div class="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src="" alt="projects" /></figure>
                <div class="card-body">
                    <h2 class="card-title">Fresh Fruits Warehouse</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Details...</button>
                    </div>
                </div>
            </div>
            <div class="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src="" alt="" /></figure>
                <div class="card-body">
                    <h2 class="card-title">Bicycle Parts</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Details...</button>
                    </div>
                </div>
            </div>
            <div class="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src="" alt="" /></figure>
                <div class="card-body">
                    <h2 class="card-title">Independent Tour Guide</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Details...</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;