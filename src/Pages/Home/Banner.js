import React from 'react';
import './Banner.css'
import bg from '../../Images/banner-bg.jpg'
import myPicture from '../../Images/Forhad Hossain.jpg'
import Typical from 'react-typical'
const Banner = () => {
    return (
        <div style={{ backgroundImage: `url(${bg})` }} className='w-full min-h-screen  bg-[100vh] bg-no-repeat bg-cover'>

            <div className="overlay z-10"></div>
            <div className="content w-full h-full flex flex-col-reverse md:flex-row-reverse py-16 px-4 gap-5 hero z-20">

                <div className='flex-1 '>
                    <img src={myPicture} className="w-[300px] h-[300px] md:h-full mx-auto object-cover rounded-lg shadow-2xl" alt='' />
                </div>
                <div className='flex-1 px-10'>
                    <h1 className="text-4xl md:text-5xl text-white font-bold mb-2">Hay!</h1>
                    <h1 className="text-4xl md:text-5xl text-white font-bold">This is Forhad Hossain</h1>
                    <Typical
                        className="text-4xl md:text-5xl font-bold text-orange-500"
                        steps={['Professional', 3000, 'Front End!', 2000, 'Web Developer!', 1000]}
                        loop={Infinity}
                        wrapper="p"
                    />
                    <p className="py-6 text-sm text-gray-400">My goal is to obtain employment with a company where I can acquire skills, knowledge, and experiences for a better career. I am seeking an opportunity with my interpersonal communication skills and sense of good organizational behavior. My goal is to succeed in an environment that challenges me and offers me advancement opportunities. I am committed to working under pressure and working as part of a team.</p>
                    <button className="btn btn-outline text-white"><a href="https://drive.google.com/file/d/1eeR0NDvHvNcjlQkYH7SvzdOxa6C_ZXKR/view?usp=sharing" target="_blank" rel="noopener noreferrer">Get Resume</a></button>
                </div>

            </div>
        </div>
    );
};

export default Banner;