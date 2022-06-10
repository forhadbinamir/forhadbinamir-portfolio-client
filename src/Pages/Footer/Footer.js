import React from 'react';

const Footer = () => {

    return (
        <div>
            <div className='bg-slate-800 p-10'>
                <p className='text-center text-gray-500'>&copy;CopyRight {new Date().getFullYear()} Develop By Forhad Bin Amir </p>
            </div>
        </div>
    );
};

export default Footer;