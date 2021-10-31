import React from 'react';
import About from '../About/About';
import Banner from "../Banner/Banner";
import Feedback from '../Feedback/Feedback';
import Places from '../Places/Places';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Places></Places>
            <Feedback></Feedback>
        </div>
    );
};

export default Home;