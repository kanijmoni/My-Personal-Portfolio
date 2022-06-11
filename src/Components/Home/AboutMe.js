import React from 'react';
import me from '../../assets/f194b01673460667a0f795b7ee339a7c.jpg';

const AboutMe = () => {
    return (
        <div id='aboutMe' className='mx-12 mt-20'>

            <div class="flex flex-col w-full lg:flex-row">
                <div class="grid flex-grow h-72 w-1/2 card bg-base-300 rounded-box place-items-center"> <h2 className='text-xl text-center font-bold py-4'>My Skills</h2>
                    <p>Coming Soon...</p>
                </div>
                <div class="divider lg:divider-horizontal"></div>
                <div class="grid flex-grow h-72 w-1/2 card bg-base-300 rounded-box place-items-center">
                    <div class="card lg:card-side">
                        <figure><img className='h-56 w-3/5' src={me} alt="Album" /></figure>
                        <div class="card-body">
                            <h2 className='text-xl font-bold py-2'>About Me</h2>
                            <p>Hi. I'm Kanij Fatema from Dhaka,Bangladesh.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;