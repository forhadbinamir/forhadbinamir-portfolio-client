import React from 'react';
import './Banner.css'
import bg from '../../Images/banner-bg.jpg'
import myPicture from '../../Images/My-Picture.png'
const Banner = () => {
    return (
        <div className='relative'>
            <div className='min-h-screen' style={{ background: `url(${bg})`, backgroundPosition: 'top', backgroundSize: 'cover' }}>

            </div>
            <div className="overlay "></div>

            <div class="content hero absolute z-20">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div className='basis-1/2'>
                        <img src={myPicture} class="mx-auto rounded-lg shadow-2xl" />
                    </div>
                    <div className='basis-1/2'>
                        <h1 class="text-5xl font-bold">Welcome to  <br />my Portfolio website</h1>
                        <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button class="btn btn-outline text-white">Get Resume</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;