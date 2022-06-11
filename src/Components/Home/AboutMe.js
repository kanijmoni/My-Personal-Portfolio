import React from 'react';
import me from '../../assets/f194b01673460667a0f795b7ee339a7c.jpg';
import html from '../../assets/html.png';
import css from '../../assets/css.png';
import js from '../../assets/javascript.png';
import react from '../../assets/react.png';
import firebase from '../../assets/firebase.png';
import node from '../../assets/node.png';
import mongo from '../../assets/mongo.png';
import tailwind from '../../assets/tailwind.png';
import bootstrap from '../../assets/icons-hero.png';

const AboutMe = () => {
    return (
        <div id='aboutMe' className='mx-12 mt-20'>

            <div class="flex flex-col w-full lg:flex-row">
                <div class="grid flex-grow h-72 w-1/2 card bg-base-300 rounded-box place-items-center"> <h2 className='text-xl text-center font-bold'>My Skills</h2>
                    <p>These are the technologies I've worked with</p>
                    <div className='grid grid-cols-5 gap-4'>
                        <div> <img className='w-14 h-14' src={html} alt='' />
                            <p>HTML</p>
                        </div>
                        <div>
                            <img className='w-14 h-14' src={css} alt='' />
                            <p>CSS</p>
                        </div>
                        <div>
                            <img className='w-14 h-14' src={tailwind} alt='' />
                            <p>Tailwind CSS</p>
                        </div>
                        <div>
                            <img className='w-14 h-14' src={bootstrap} alt='' />
                            <p>Bootstrap</p>
                        </div>
                        <div>
                            <img className='w-14 h-14' src={js} alt='' />
                            <p>JavaScript</p>
                        </div>
                        <div>
                            <img className='w-14 h-14' src={react} alt='' />
                            <p>React</p>
                        </div>
                        <div>
                            <img className='w-14 h-14' src={firebase} alt='' />
                            <p>FireBase</p>
                        </div>
                        <div>
                            <img className='w-14 h-14' src={node} alt='' />
                            <p>NodeJs</p>
                        </div>
                        <div>
                            <img className='w-14 h-14' src={mongo} alt='' />
                            <p>MongoDb</p>
                        </div>
                    </div>
                </div>
                <div class="divider lg:divider-horizontal"></div>
                <div class="grid flex-grow h-72 w-1/2 card bg-base-300 rounded-box place-items-center">
                    <div class="card lg:card-side">
                        <figure><img className='h-56 w-52' src={me} alt="Album" /></figure>
                        <div class="card-body">
                            <h2 className='text-xl font-bold py-2'>About Me</h2>
                            <p>Hi. I'm Kanij Fatema from Dhaka,Bangladesh.I am practicing front-end development with a dedicated, patient, and strong knowledge of various technologies. Self-motivated, hard-working, and quick learner for the opportunity to develop more round skills and improve my workability in a challenging environment.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;