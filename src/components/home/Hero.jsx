import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <div className="relative min-h-screen flex items-center bg-gray-50 overflow-hidden pt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 text-center lg:text-left z-10"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-gray-100 mb-8">
                            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                            <span className="text-sm font-bold text-gray-600 tracking-wide uppercase">IIT Dharwad Sports</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 leading-tight tracking-tight">
                            ELEVATE <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                                YOUR GAME
                            </span>
                        </h1>

                        <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
                            Experience the thrill of competition and the bond of community.
                            Join us in building a legacy of athletic excellence.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Link
                                to="/sports"
                                className="px-8 py-4 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/30 hover:bg-primary/90 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                            >
                                Explore Sports
                            </Link>
                            <Link
                                to="/facilities"
                                className="px-8 py-4 bg-white text-gray-700 font-bold rounded-xl shadow-sm border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-all duration-300"
                            >
                                View Facilities
                            </Link>
                        </div>

                        <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 text-gray-500">
                            <div className="flex items-center gap-2">
                                <div className="font-bold text-2xl text-gray-900">15+</div>
                                <div className="text-sm font-medium">Sports</div>
                            </div>
                            <div className="w-px h-8 bg-gray-300"></div>
                            <div className="flex items-center gap-2">
                                <div className="font-bold text-2xl text-gray-900">500+</div>
                                <div className="text-sm font-medium">Athletes</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Collage */}
                    <div className="flex-1 relative w-full max-w-lg lg:max-w-none">
                        <div className="grid grid-cols-2 gap-4 md:gap-6">
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="space-y-4 md:space-y-6 mt-12 lg:mt-24"
                            >
                                <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[3/4] group">
                                    <img
                                        src="https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=800"
                                        alt="Basketball Action"
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                                <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-square group">
                                    <img
                                        src="https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=800"
                                        alt="Training"
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="space-y-4 md:space-y-6"
                            >
                                <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-square group">
                                    <img
                                        src="https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&q=80&w=800"
                                        alt="Team Huddle"
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                </div>
                                <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[3/4] group">
                                    <img
                                        src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&q=80&w=800"
                                        alt="Football Field"
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-purple-100/50 via-purple-100/30 to-transparent rounded-full blur-3xl"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
