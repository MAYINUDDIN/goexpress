import React from 'react';
import Banner from './Banner';
import Delevery from './Delevery';
import Review from './Review';
import Service from './Service';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Service ></Service>
            <Delevery></Delevery>
            <Services></Services>
            <Review></Review>
        </div>
    );
};

export default Home;