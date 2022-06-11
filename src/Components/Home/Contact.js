import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_gjelxbb', e.target, '8xGOh--7HbWlp3Ykw')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    };

    return (
        <div id='contact' className='my-6 mx-12'>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row-reverse gap-4">
                    <div class="text-center lg:text-left">
                        <h1 class="text-5xl font-bold">Please, Contact with Me</h1>
                        <p class="py-6">If you want to contact me, than you can sand me an email.</p>
                        <p>You can also connect with me via:</p>
                        <a className='btn btn-info text-white py-2 my-2 mx-2' href='https://github.com/kanijmoni/My-Personal-Portfolio'>My Github Link</a>
                        <a className='text-white py-2 my-2' href='kfatema991@gmail.com'>kfatema991@gmail.com</a>
                    </div>
                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div class="card-body">
                            <form ref={form} class="form-control gap-2" onSubmit={sendEmail}>
                                <input type="text" placeholder="Your Name" class="input input-bordered" />
                                <input type="text" placeholder="Your Email Address" class="input input-bordered" />
                                <input type="text" placeholder="Subject" class="input input-bordered" />
                                <textarea placeholder="Your Message" class="input input-bordered" />
                                <div class="form-control mt-4">
                                    <button class="btn btn-primary">Send Email</button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Contact;