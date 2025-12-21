import React from 'react';
import Hero from '../components/home/Hero';
import Stats from '../components/home/Stats';
import FeaturedSports from '../components/home/FeaturedSports';

const Home = () => {
    return (
        <div className="min-h-screen">
            <Hero />
            <Stats />
            <FeaturedSports />

            {/* Call to Action Section */}
            <section className="py-20 bg-primary text-white text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to make your mark?</h2>
                    <p className="text-xl text-gray-300 mb-8">
                        Whether you're a seasoned athlete or just starting out, there's a place for you in our teams.
                    </p>
                    <a
                        href="/join"
                        className="inline-block bg-white text-primary font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors transform hover:scale-105 duration-200"
                    >
                        Register Now
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Home;
