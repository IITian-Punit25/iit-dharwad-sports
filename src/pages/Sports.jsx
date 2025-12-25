import React from 'react';
import { featuredSports } from '../data/mockData';
import { motion } from 'framer-motion';
import SportCard from '../components/sports/SportCard';

import volleyballImg from '../assets/images/volleyball.png';
import ttImg from '../assets/images/tt.png';
import gymImg from '../assets/images/gym.png';
import chessImg from '../assets/images/chess.png';

// Extended sports list with COMPACT grid metadata
const allSports = [
    {
        ...featuredSports[0], // Cricket
        category: 'Outdoor',
        isTeam: true,
        gridClass: 'md:col-span-2 md:row-span-2', // Keep Cricket large as anchor
    },
    {
        ...featuredSports[1], // Football
        category: 'Outdoor',
        isTeam: true,
        gridClass: 'md:col-span-1 md:row-span-1', // Reduced from tall to standard
    },
    {
        ...featuredSports[2], // Basketball
        category: 'Outdoor',
        isTeam: true,
        gridClass: 'md:col-span-1 md:row-span-1',
    },
    {
        ...featuredSports[3], // Badminton
        category: 'Indoor',
        isTeam: false,
        gridClass: 'md:col-span-1 md:row-span-1',
    },
    {
        id: 5,
        name: 'Volleyball',
        image: volleyballImg,
        description: 'Spike, block, and dive.',
        category: 'Outdoor',
        isTeam: true,
        gridClass: 'md:col-span-1 md:row-span-1', // Reduced from wide to standard
    },
    {
        id: 6,
        name: 'Table Tennis',
        image: ttImg,
        description: 'Fast reflexes and spin shots.',
        category: 'Indoor',
        isTeam: false,
        gridClass: 'md:col-span-1 md:row-span-1',
    },
    {
        id: 7,
        name: 'Athletics',
        image: gymImg,
        description: 'Push your limits.',
        category: 'Outdoor',
        isTeam: false,
        gridClass: 'md:col-span-1 md:row-span-1', // Reduced from tall to standard
    },
    {
        id: 8,
        name: 'Chess',
        image: chessImg,
        description: 'Master strategy.',
        category: 'Indoor',
        isTeam: false,
        gridClass: 'md:col-span-2 md:row-span-1', // Made wide for variety at bottom
    },
];

const Sports = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Immersive Hero Section */}
            <div className="relative h-[60vh] bg-gray-50 flex flex-col justify-center px-4 sm:px-6 lg:px-8 overflow-hidden pt-20 border-b border-gray-200/50">
                <div className="max-w-7xl mx-auto w-full relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-gray-100 mb-8">
                            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                            <span className="text-sm font-bold text-gray-600 tracking-wide uppercase">IIT Dharwad Sports</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 leading-tight tracking-tight">
                            SPORTS <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                                & CLUBS
                            </span>
                        </h1>

                        <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto font-medium">
                            Explore the diverse range of athletic disciplines and student-led clubs at IIT Dharwad.
                        </p>
                    </motion.div>
                </div>

                <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-purple-100/30 via-blue-50/30 to-transparent rounded-full blur-3xl opacity-60"></div>
            </div>

            {/* Compact Bento Grid Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 -mt-16 relative z-20">
                {/* Reduced row height from 300px to 200px for more compact view */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]">
                    {allSports.map((sport, index) => (
                        <SportCard
                            key={sport.id}
                            sport={sport}
                            index={index}
                            className={sport.gridClass}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Sports;
