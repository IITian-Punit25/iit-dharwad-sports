import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import PageTransition from '../components/common/PageTransition';

import Home from '../pages/Home';
import About from '../pages/About';
import Sports from '../pages/Sports';
import Facilities from '../pages/Facilities';
import Teams from '../pages/Teams';
import Events from '../pages/Events';
import Gallery from '../pages/Gallery';
import Contact from '../pages/Contact';
import LiveUpdates from '../pages/LiveUpdates';
import Fitness from '../pages/Fitness';


const AppRoutes = () => {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<PageTransition><Home /></PageTransition>} />
                <Route path="/about" element={<PageTransition><About /></PageTransition>} />
                <Route path="/sports" element={<PageTransition><Sports /></PageTransition>} />
                <Route path="/facilities" element={<PageTransition><Facilities /></PageTransition>} />
                <Route path="/teams" element={<PageTransition><Teams /></PageTransition>} />
                <Route path="/events" element={<PageTransition><Events /></PageTransition>} />
                <Route path="/gallery" element={<PageTransition><Gallery /></PageTransition>} />
                <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
                <Route path="/live" element={<PageTransition><LiveUpdates /></PageTransition>} />
                <Route path="/fitness" element={<PageTransition><Fitness /></PageTransition>} />

                <Route path="/sports/:id" element={<PageTransition><Sports /></PageTransition>} />
            </Routes>
        </AnimatePresence>
    );
};

export default AppRoutes;
