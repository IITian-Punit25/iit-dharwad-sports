import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { featuredSports } from '../../data/mockData';

const FeaturedSports = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl font-bold text-primary mb-4">Featured Sports</h2>
                        <p className="text-gray-600 max-w-2xl">
                            Discover the wide range of sports activities available at IIT Dharwad.
                            From team sports to individual athletics, there's something for everyone.
                        </p>
                    </div>
                    <Link
                        to="/sports"
                        className="hidden md:flex items-center text-accent font-semibold hover:text-red-700 transition-colors"
                    >
                        View All Sports <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {featuredSports.map((sport) => (
                        <div
                            key={sport.id}
                            className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={sport.image}
                                    alt={sport.name}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                    <span className="text-white font-medium">View Details</span>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-primary mb-2">{sport.name}</h3>
                                <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                                    {sport.description}
                                </p>
                                <Link
                                    to={`/sports/${sport.id}`}
                                    className="text-accent text-sm font-medium hover:underline"
                                >
                                    Learn More
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <Link
                        to="/sports"
                        className="inline-flex items-center text-accent font-semibold hover:text-red-700 transition-colors"
                    >
                        View All Sports <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default FeaturedSports;
