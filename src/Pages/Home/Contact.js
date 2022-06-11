import React, { useRef } from 'react';
import formImg from '../../Images/form.svg'
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet-async';
const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_bu3x9to', 'template_bhts7gu', form.current, 'QPDJi85_Naw7eQY9y')
            .then((result) => {
                console.log(result.text);
                toast.success("Your info send successfully", result.text)
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div className='bg-slate-900'>
            <Helmet>
                <title>Home - Forhad Bin Amir</title>
            </Helmet>
            <h2 className='text-5xl text-orange-500 p-3 text-center font-bold'>Contact <span className='text-white'>Me</span></h2>
            <div className="hero min-h-screen ">

                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="basis-1/2 p-5">
                        <img className='w-[80%] mx-auto' src={formImg} alt="" />
                    </div>
                    <div className="card basis-1/2 flex-shrink-0 w-full shadow-2xl bg-base-300">
                        <form ref={form} onSubmit={sendEmail} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="user_name" placeholder="Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="user_email" placeholder="Email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Subject</span>
                                </label>
                                <input type="text" name="" placeholder="Subject" className="input input-bordered" />
                                <label className="label">
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Message</span>
                                </label>
                                <textarea name="message" className="textarea textarea-bordered" placeholder="Message"></textarea>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary type='submit' bg-orange-500">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;