import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Trophy, Sun, Moon } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    const isHomePage = location.pathname === '/';
    const isGCPage = location.pathname === '/general-championship';
    const isTransparentPage = isHomePage || isGCPage;

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', path: '/about' },
        { name: 'Sports', path: '/sports' },
        { name: 'Facilities', path: '/facilities' },
        { name: 'Teams', path: '/teams' },
        { name: 'Events', path: '/events' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Contact', path: '/contact' },
    ];

    const isActive = (path) => location.pathname === path;

    // Navbar background logic
    const navbarClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isTransparentPage && !isScrolled
        ? 'bg-transparent py-6'
        : 'bg-white/90 backdrop-blur-md shadow-sm py-3'} ${isTransparentPage && !isScrolled ? 'dark:bg-transparent' : 'dark:bg-gray-900/90 dark:backdrop-blur-md dark:shadow-sm'} `;

    // Helper to determine text color based on page and scroll state
    const getTextColorClass = (active) => {
        if (isTransparentPage && !isScrolled) {
            if (isHomePage) {
                // Home page has light background, so use dark text
                return active ? 'text-blue-600 font-bold' : 'text-gray-700 hover:text-blue-600 font-medium';
            } else {
                // GC page has dark background (blue hero), so use white text
                return active ? 'text-white font-bold' : 'text-gray-200 hover:text-white font-medium';
            }
        }
        // Scrolled or non-transparent page
        return active ? 'text-blue-600 font-semibold' : 'text-gray-600 hover:text-blue-600 font-medium';
    };

    const linkClasses = (path) => {
        const baseClasses = getTextColorClass(isActive(path));

        const darkActive = isTransparentPage && !isScrolled ? 'dark:text-yellow-400' : 'dark:text-yellow-400';
        const darkInactive = isTransparentPage && !isScrolled
            ? (isHomePage ? 'dark:text-gray-300 dark:hover:text-white' : 'dark:text-gray-300 dark:hover:text-white')
            : 'dark:text-gray-300 dark:hover:text-white';

        return `text-sm transition-colors duration-200 ${baseClasses} ${isActive(path) ? darkActive : darkInactive}`;
    };

    // Logo colors
    const getLogoColor = () => {
        if (isTransparentPage && !isScrolled) {
            return isHomePage ? 'text-blue-600 dark:text-white' : 'text-white';
        }
        return 'text-blue-600 dark:text-white';
    };

    const getLogoTextColor = () => {
        if (isTransparentPage && !isScrolled) {
            return isHomePage ? 'text-gray-900 dark:text-white' : 'text-white';
        }
        return 'text-gray-900 dark:text-white';
    };

    const logoColor = getLogoColor();
    const logoTextColor = getLogoTextColor();

    // Dark mode handling
    const [darkMode, setDarkMode] = useState(() => {
        if (typeof window !== 'undefined') {
            return document.documentElement.classList.contains('dark') || localStorage.getItem('theme') === 'dark';
        }
        return false;
    });

    const toggleDarkMode = () => {
        if (darkMode) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            setDarkMode(false);
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            setDarkMode(true);
        }
    };

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.documentElement.classList.add('dark');
            setDarkMode(true);
        }
    }, []);

    return (
        <nav className={navbarClasses}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <Link to="/" className="flex-shrink-0 flex items-center gap-2 group">
                            <Trophy className={`h-8 w-8 ${logoColor} transition-colors duration-300 group-hover:scale-110 transform`} />
                            <span className={`font-bold text-xl tracking-tight ${logoTextColor} transition-colors duration-300`}>IIT Dharwad Sports</span>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center space-x-8">
                        <div className="flex items-center space-x-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={linkClasses(link.path)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>

                        <div className="flex items-center space-x-4 pl-4 border-l border-gray-200 dark:border-gray-700">
                            <Link
                                to="/general-championship"
                                className={`px-4 py-2 rounded-full text-sm font-bold transition-all transform hover:-translate-y-0.5 shadow-md ${isTransparentPage && !isScrolled && !isHomePage
                                        ? 'bg-white text-blue-600 hover:bg-blue-50'
                                        : 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700'
                                    }`}
                            >
                                General Championship
                            </Link>

                            <button
                                onClick={toggleDarkMode}
                                className={`p-2 rounded-full transition-colors ${isTransparentPage && !isScrolled && !isHomePage
                                        ? 'bg-white/20 text-white hover:bg-white/30'
                                        : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-yellow-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                                    }`}
                                aria-label="Toggle dark mode"
                            >
                                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                            </button>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex items-center lg:hidden">
                        <button
                            onClick={toggleDarkMode}
                            className={`mr-4 p-2 rounded-full transition-colors ${isTransparentPage && !isScrolled && !isHomePage
                                    ? 'bg-white/20 text-white hover:bg-white/30'
                                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-yellow-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                                }`}
                            aria-label="Toggle dark mode"
                        >
                            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                        </button>

                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none transition-colors ${isTransparentPage && !isScrolled && !isHomePage
                                    ? 'text-white hover:bg-white/10'
                                    : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-gray-800'
                                }`}
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="lg:hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 shadow-lg absolute w-full left-0 top-full">
                    <div className="px-4 pt-4 pb-6 space-y-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${isActive(link.path)
                                    ? 'text-blue-600 bg-blue-50 dark:bg-gray-800 dark:text-yellow-400'
                                    : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            to="/general-championship"
                            onClick={() => setIsOpen(false)}
                            className="block px-4 py-3 rounded-lg text-base font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-md mt-4 text-center"
                        >
                            General Championship
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
