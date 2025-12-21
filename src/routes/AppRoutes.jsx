import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Sports from '../pages/Sports';
import Facilities from '../pages/Facilities';
import Teams from '../pages/Teams';
import Events from '../pages/Events';
import Gallery from '../pages/Gallery';
import Join from '../pages/Join';
import Contact from '../pages/Contact';
import LiveUpdates from '../pages/LiveUpdates';
import Fitness from '../pages/Fitness';
import HallOfFame from '../pages/HallOfFame';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/sports" element={<Sports />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/events" element={<Events />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/join" element={<Join />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/live" element={<LiveUpdates />} />
            <Route path="/fitness" element={<Fitness />} />
            <Route path="/hall-of-fame" element={<HallOfFame />} />
            {/* Dynamic route for sport detail (using placeholder for now as per requirements list but good to have) */}
            <Route path="/sports/:id" element={<Sports />} />
        </Routes>
    );
};

export default AppRoutes;
