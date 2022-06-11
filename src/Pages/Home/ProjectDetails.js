import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ContextApiData } from '../../App';

const ProjectDetails = () => {
    const [projects, setProjects] = useContext(ContextApiData)
    const { id } = useParams()
    const detailsProject = projects.find(pd => pd.id === id)
    console.log(detailsProject)
    const { picture1, picture2, picture3, picture4, picture5, picture6, features } = detailsProject
    return (
        <div className='bg-slate-900 p-20'>
            <h2 className='text-3xl text-white font-bold py-5'>Project others details pages</h2>
            <div className='grid grid-cols-3 gap-5 '>
                <img className='rounded w-full h-full' src={picture1} alt="pic" />
                <img className='rounded w-full h-full' src={picture2} alt="pic" />
                <img className='rounded w-full h-full' src={picture3} alt="pic" />
                <img className='rounded w-full h-full' src={picture4} alt="pic" />
                <img className='rounded w-full h-full' src={picture5} alt="pic" />
                <img className='rounded w-full h-full' src={picture6} alt="pic" />
            </div>
            <div className='py-10'>
                <h1 className='py-5 text-4xl font-bold text-white'>Features</h1>
                <h1 className='text-gray-300'>1: {features[0]?.feature1}</h1>
                <h1 className='text-gray-300'>2: {features[0]?.feature2}</h1>
                <h1 className='text-gray-300'>3: {features[0]?.feature3}</h1>
                <h1 className='text-gray-300'>4: {features[0]?.feature4}</h1>
                <h1 className='text-gray-300'>5: {features[0]?.feature5}</h1>
                <h1 className='text-gray-300'>6: {features[0]?.feature6}</h1>
            </div>
            {/* <h1>features{details.description}</h1> */}
        </div>
    );
};

export default ProjectDetails;