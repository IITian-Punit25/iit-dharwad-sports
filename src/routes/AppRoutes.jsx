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
import GeneralChampionship from '../pages/GeneralChampionship';

// Admin Imports
import AdminLogin from '../admin-panel/pages/AdminLogin';
import ProtectedRoute from '../admin-panel/components/ProtectedRoute';
import AdminDashboard from '../admin-panel/pages/AdminDashboard';
import EventManagement from '../admin-panel/pages/EventManagement';
import ScoreManagement from '../admin-panel/pages/ScoreManagement';
import PointsManagement from '../admin-panel/pages/PointsManagement';
import RegistrationList from '../admin-panel/pages/RegistrationList';

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
                <Route path="/general-championship" element={<PageTransition><GeneralChampionship /></PageTransition>} />

                <Route path="/sports/:id" element={<PageTransition><Sports /></PageTransition>} />

                {/* Admin Routes */}
                <Route path="/admin/login" element={<AdminLogin />} />
                <Route element={<ProtectedRoute />}>
                    <Route path="/admin/dashboard" element={<AdminDashboard />} />
                    <Route path="/admin/events" element={<EventManagement />} />
                    <Route path="/admin/scores" element={<ScoreManagement />} />
                    <Route path="/admin/points" element={<PointsManagement />} />
                    <Route path="/admin/registrations" element={<RegistrationList />} />
                </Route>
            </Routes>
        </AnimatePresence>
    );
};

export default AppRoutes;
