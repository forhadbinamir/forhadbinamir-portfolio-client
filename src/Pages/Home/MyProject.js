import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ContextApiData } from '../../App';
const MyProject = () => {

    const navigate = useNavigate()
    const [projects, setProjects] = useContext(ContextApiData)


    const handleProjectDetails = (id) => {
        navigate(`/details/${id}`)
    }
    return (
        <div id='project' className='bg-slate-900 p-20'>
            <h2 className='text-5xl text-orange-500 p-3 text-center font-bold'>My <span className='text-white'>Project</span></h2>

            <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 p-10'>
                {
                    projects.map(project => {
                        // console.log(project)
                        return (
                            <div
                                key={project.id}
                                project={project}
                                className='rounded-lg'>
                                <img className='h-[400px] rounded-lg w-full md:w-[80%] lg:w-[80%] mx-auto' src={project?.picture} alt="" />
                                <div className='flex justify-evenly my-5 lg:my-5 md:mx-5'>
                                    <button className='btn btn-sm btn-outline text-white'><a href={project.liveSite} target="_blank">Live Site</a></button>
                                    <button onClick={() => handleProjectDetails(project.id)} className='btn btn-sm btn-outline text-white'>Details</button>
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