import React from 'react';
import Hero from '../components/home/Hero';
import Stats from '../components/home/Stats';
import FeaturedSports from '../components/home/FeaturedSports';
import CollegeInfo from '../components/home/CollegeInfo';

const Home = () => {
    return (
        <div className="min-h-screen">
            <Hero />
            <CollegeInfo />
            <Stats />
            <FeaturedSports />
        </div>
    );
};

export default Home;
