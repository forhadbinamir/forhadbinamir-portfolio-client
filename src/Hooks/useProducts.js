import React, { useEffect, useState } from 'react';

const useProducts = () => {
    const [projects, setProjects] = useState([])
    console.log("projects")
    useEffect(() => {
        fetch('feckData.json')
            .then(res => res.json())
            .then(data => console.log('project', data))
            .catch((error) => {
                console.log(error)
            })

    }, [])

    return [projects, setProjects]
};

export default useProducts;