import React from 'react';
const MyProject = () => {


    const projects = [
        {
            id: 1,
            picture: 'https://i.ibb.co/rmtczyX/project-1.png',
            liveSite: 'https://independent-service-prov-9c01e.web.app/',

        },
        {
            id: 2,
            picture: 'https://i.ibb.co/hFkfb96/project-2.png',
            liveSite: 'https://warehouse-management-sys-a95b8.web.app/',

        },
        {
            id: 3,
            picture: 'https://i.ibb.co/xzdtFrG/project-3.png',
            liveSite: 'https://manufacturer-website-9828b.web.app/',

        },
        {
            id: 4,
            picture: 'https://i.ibb.co/h2d3xMM/project-4.png',
            liveSite: 'https://warehouse-management-sys-a95b8.web.app/',
            sourceCode: ""
        },
    ]
    return (
        <div id='project' className='p-5 bg-slate-900 p-20'>
            <h2 className='text-5xl text-orange-500 p-3 text-center font-bold'>My <span className='text-white'>Project</span></h2>

            <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 p-10'>
                {
                    projects.map(project => {

                        return (
                            <div key={project.id} className='rounded-lg'>
                                <img className='h-[400px] rounded-lg w-full md:w-[80%] lg:w-[80%] mx-auto' src={project.picture} alt="" />
                                <div className='flex justify-evenly my-5 lg:my-5 md:mx-5'>
                                    <button className='btn btn-sm btn-outline text-white'><a href={project.liveSite} target="_blank">Live Site</a></button>
                                    <button className='btn btn-sm btn-outline text-white'>Source Code</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default MyProject;