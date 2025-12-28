import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-primary dark:bg-gray-950 text-white pt-12 pb-8 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    {/* Brand */}
                    <div className="col-span-1">
                        <h3 className="text-xl font-bold mb-4 text-white dark:text-gray-100">IIT Dharwad Sports</h3>
                        <p className="text-gray-300 dark:text-gray-400 text-sm leading-relaxed">
                            Fostering a culture of sportsmanship, discipline, and excellence among the students of IIT Dharwad.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-white dark:text-gray-100">Quick Links</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/about" className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-white transition-colors">About Us</Link></li>
                            <li><Link to="/sports" className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-white transition-colors">Sports Offered</Link></li>
                            <li><Link to="/facilities" className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-white transition-colors">Facilities</Link></li>
                            <li><Link to="/events" className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-white transition-colors">Events</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-white dark:text-gray-100">Contact Us</h4>
                        <ul className="space-y-3 text-sm text-gray-300 dark:text-gray-400">
                            <li className="flex items-start justify-center gap-2">
                                <MapPin className="h-5 w-5 flex-shrink-0 text-accent" />
                                <span>IIT Dharwad, Permanent Campus,<br />Chikkamalligawad,<br />Dharwad - 580011</span>
                            </li>
                            <li className="flex items-center justify-center gap-2">
                                <Mail className="h-4 w-4 text-accent" />
                                <a href="mailto:sports@iitdh.ac.in" className="hover:text-white">sports@iitdh.ac.in</a>
                            </li>
                            <li className="flex items-center justify-center gap-2">
                                <Phone className="h-4 w-4 text-accent" />
                                <span>+91 836 2212 839</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-700 dark:border-gray-800 mt-12 pt-8 text-center text-sm text-gray-400 dark:text-gray-500">
                    <p>&copy; {new Date().getFullYear()} IIT Dharwad Sports Council. All rights reserved.</p>
                    <div className="mt-2">
                        <Link to="/admin/login" className="text-gray-600 dark:text-gray-600 hover:text-gray-400 dark:hover:text-gray-400 text-xs transition-colors">Admin Login</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
