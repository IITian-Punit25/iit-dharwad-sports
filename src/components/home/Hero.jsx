import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <div className="relative bg-primary h-[600px] flex items-center overflow-hidden">
            {/* Background Image Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=2070"
                    alt="Sports Background"
                    className="w-full h-full object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-transparent opacity-90"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-2xl"
                >
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                        Sports at <br />
                        <span className="text-accent">IIT Dharwad</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 mb-8 font-light tracking-wide">
                        Strength • Discipline • Excellence
                    </p>
                    <p className="text-gray-300 mb-10 text-lg leading-relaxed max-w-lg">
                        Unleash your potential, build character, and be part of a legacy.
                        Join the vibrant sports community at IIT Dharwad.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            to="/sports"
                            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-accent hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Explore Sports
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                        <Link
                            to="/join"
                            className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-primary transition-all duration-300"
                        >
                            Join a Team
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
