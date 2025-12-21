import React from 'react';
import { featuredSports } from '../data/mockData';
import { Link } from 'react-router-dom';

// Extended sports list (mock)
const allSports = [
    ...featuredSports,
    {
        id: 5,
        name: 'Volleyball',
        image: 'https://images.unsplash.com/photo-1592656094267-764a45160876?auto=format&fit=crop&q=80&w=800',
        description: 'Spike, block, and serve on our sand and synthetic courts.',
    },
    {
        id: 6,
        name: 'Table Tennis',
        image: 'https://images.unsplash.com/photo-1534158914592-062992fbe900?auto=format&fit=crop&q=80&w=800',
        description: 'Lightning fast reflexes required. Join the TT club.',
    },
    {
        id: 7,
        name: 'Athletics',
        image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&q=80&w=800',
        description: 'Track and field events for the speed demons and endurance runners.',
    },
    {
        id: 8,
        name: 'Chess',
        image: 'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&q=80&w=800',
        description: 'Battle of minds. Strategic gameplay for the intellectuals.',
    },
];

const Sports = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-primary mb-4">Sports Offered</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Explore the diverse range of sports facilities and teams available at IIT Dharwad.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {allSports.map((sport) => (
                        <div
                            key={sport.id}
                            className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group"
                        >
                            <div className="h-56 overflow-hidden relative">
                                <img
                                    src={sport.image}
                                    alt={sport.name}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-primary mb-3">{sport.name}</h3>
                                <p className="text-gray-600 mb-6 line-clamp-2">
                                    {sport.description}
                                </p>
                                <Link
                                    to={`/sports/${sport.id}`}
                                    className="inline-block px-6 py-2 border border-primary text-primary font-medium rounded-md hover:bg-primary hover:text-white transition-colors"
                                >
                                    View Details
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Sports;
