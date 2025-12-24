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
            <div className="relative h-[50vh] overflow-hidden bg-black">
                <div className="absolute inset-0 opacity-40">
                    <div className="grid grid-cols-4 h-full w-full animate-pulse-slow">
                        {allSports.slice(0, 4).map((sport, i) => (
                            <div key={i} className="h-full w-full bg-cover bg-center grayscale" style={{ backgroundImage: `url(${sport.image})` }} />
                        ))}
                    </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-gray-50"></div>

                <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-white mb-2">
                            Sports
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent text-3xl md:text-5xl mt-2 tracking-normal font-bold">
                                & Clubs
                            </span>
                        </h1>
                    </motion.div>
                </div>
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
