import React from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from './Banner';
import Contact from './Contact';
import MyProject from './MyProject';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home - Forhad Bin Amir</title>
            </Helmet>
            <Banner />
            <MyProject />
            <Contact />
        </div>
    );
};

export default Home;