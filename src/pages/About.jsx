import React from 'react';
import Timeline from '../components/about/Timeline';
import { Quote } from 'lucide-react';
import gymImg from '../assets/images/gym.png';

const About = () => {
    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <div className="bg-secondary py-20 text-center text-white">
                <h1 className="text-4xl font-bold mb-4 text-white">About Sports Council</h1>
                <p className="text-xl text-gray-200 max-w-2xl mx-auto px-4">
                    Driving the spirit of sportsmanship and holistic development at IIT Dharwad.
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Vision & Mission */}
                <div className="grid md:grid-cols-2 gap-12 mb-20">
                    <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                        <h2 className="text-2xl font-bold text-primary mb-4">Our Vision</h2>
                        <p className="text-gray-600 leading-relaxed">
                            To create a vibrant sports culture that empowers students to achieve excellence in sports
                            while fostering leadership, teamwork, and physical well-being, contributing to the
                            overall development of the IIT Dharwad community.
                        </p>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                        <h2 className="text-2xl font-bold text-primary mb-4">Our Mission</h2>
                        <ul className="space-y-3 text-gray-600">
                            <li className="flex items-start gap-2">
                                <span className="text-accent font-bold">•</span>
                                Provide world-class sports infrastructure and training facilities.
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-accent font-bold">•</span>
                                Encourage mass participation in sports and fitness activities.
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-accent font-bold">•</span>
                                Nurture talent to represent IIT Dharwad at national and international levels.
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Secretary Message */}
                <div className="mb-20">
                    <div className="bg-primary rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">
                        <Quote className="absolute top-8 left-8 h-16 w-16 text-white/10" />
                        <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
                            <div className="w-32 h-32 md:w-48 md:h-48 flex-shrink-0 bg-gray-300 rounded-full overflow-hidden border-4 border-white/20">
                                <img
                                    src={gymImg}
                                    alt="Sports Secretary"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="text-center md:text-left">
                                <h2 className="text-2xl font-bold mb-4">Message from the General Secretary</h2>
                                <p className="text-gray-200 italic text-lg mb-6">
                                    "Sports is not just about winning medals; it's about building character, resilience, and
                                    friendships that last a lifetime. At IIT Dharwad, we strive to provide every student with
                                    the opportunity to discover their potential on the field."
                                </p>
                                <div>
                                    <div className="font-bold text-xl">Rahul Sharma</div>
                                    <div className="text-accent text-sm uppercase tracking-wider">General Secretary, Sports Affairs</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Timeline */}
                <div>
                    <h2 className="text-3xl font-bold text-primary mb-8 text-center">Our Journey</h2>
                    <Timeline />
                </div>
            </div>
        </div>
    );
};

export default About;
