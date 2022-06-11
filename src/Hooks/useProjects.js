import React, { useContext } from 'react';
import { ContextApiData } from '../App';

const useProjects = () => {
    const [projects, setProjects] = useContext(ContextApiData)

    return [projects, setProjects]
};

export default useProjects;