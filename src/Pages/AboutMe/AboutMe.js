import React from 'react';
import { Helmet } from 'react-helmet-async';
import myPicture from '../../Images/My-Picture.png'
const AboutMe = () => {
    return (
        <div>
            <Helmet>
                <title>About - Forhad Bin Amir</title>
            </Helmet>
            <div className="hero min-h-screen bg-slate-900">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='flex-1' >
                        <img src={myPicture} className="max-w-md mx-auto rounded-lg shadow-2xl" alt='' />
                    </div>
                    <div className='flex-1' >
                        <h1 className="text-5xl font-bold text-white mb-2">Forhad Hossain</h1>
                        <h1 className="text-3xl font-bold text-orange-500">Professional Front End Web Developer</h1>
                        <p className="py-6 text-gray-500">I love to develop and create a dynamic and eye-catching e-Commerce management system and personal portfolio website that can reach out to customers and company businesses online, with a focus on responsive design and professional Gorgias. </p>
                        <button className="btn btn-outline text-white"><a href="http://localhost:3000/project">Explore Me</a></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;