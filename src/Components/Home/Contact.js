import React from 'react';

const Contact = () => {
    return (
        <div id='contact' className='my-6 mx-12'>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row-reverse gap-4">
                    <div class="text-center lg:text-left">
                        <h1 class="text-5xl font-bold">Please, Contact with Me</h1>
                        <p class="py-6">If you want to contact me, than you can sand me an email.</p>
                    </div>
                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div class="card-body">
                            <div class="form-control gap-2">
                                <input type="text" placeholder="Your Name" class="input input-bordered" />
                                <input type="text" placeholder="Your Email Address" class="input input-bordered" />
                                <input type="text" placeholder="Description" class="input input-bordered" />
                            </div>
                            <div class="form-control mt-4">
                                <button class="btn btn-primary">Send Email</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;