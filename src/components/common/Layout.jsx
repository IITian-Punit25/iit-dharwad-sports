import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
    const location = useLocation();
    const isHome = location.pathname === '/';
    const isAdmin = location.pathname.startsWith('/admin');

    if (isAdmin) {
        return <>{children}</>;
    }

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className={`flex-grow ${!isHome ? 'pt-20' : ''}`}>
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
