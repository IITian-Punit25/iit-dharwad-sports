import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Trophy } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    const isHome = location.pathname === '/';

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
        { name: 'Home', path: '/' },
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
    const navbarClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isHome && !isScrolled
        ? 'bg-transparent py-4'
        : 'bg-white/90 backdrop-blur-md shadow-sm py-2'
        }`;

    // Link text color logic
    const linkClasses = (path) => {
        const activeBase = isHome && !isScrolled
            ? 'text-primary font-bold relative after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary'
            : 'text-primary font-bold bg-blue-50';

        const inactiveBase = isHome && !isScrolled
            ? 'text-gray-700 hover:text-primary font-medium hover:bg-white/50'
            : 'text-gray-600 hover:text-primary hover:bg-gray-50 font-medium';

        return `px-3 py-2 rounded-md text-sm transition-all duration-200 ${isActive(path) ? activeBase : inactiveBase
            }`;
    };

    const logoColor = 'text-primary';

    return (
        <nav className={navbarClasses}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <Link to="/" className="flex-shrink-0 flex items-center gap-2">
                            <Trophy className={`h-8 w-8 ${logoColor}`} />
                            <span className={`font-bold text-xl tracking-tight ${logoColor}`}>IIT Dharwad Sports</span>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-4">
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

                    {/* Mobile menu button */}
                    <div className="flex items-center md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary ${isHome && !isScrolled ? 'text-primary hover:bg-primary/5' : 'text-gray-600 hover:text-primary hover:bg-gray-50'
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
                <div className="md:hidden bg-white border-t border-gray-100 shadow-lg absolute w-full left-0 top-full">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className={`block px-3 py-2 rounded-md text-base font-medium ${isActive(link.path)
                                    ? 'text-primary bg-blue-50'
                                    : 'text-gray-600 hover:text-primary hover:bg-gray-50'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
