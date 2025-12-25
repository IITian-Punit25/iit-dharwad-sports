import React, { useState } from 'react';
import { Trophy, Medal, Star } from 'lucide-react';



const Teams = () => {


    return (
        <div className="min-h-screen bg-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-primary mb-4">Teams & Achievements</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Celebrating the dedication and success of our student athletes.
                    </p>
                </div>

                {/* Inter-IIT Highlight */}
                <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12 text-white mb-16 shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 opacity-10 transform translate-x-1/4 -translate-y-1/4">
                        <Trophy size={400} />
                    </div>
                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                            <Trophy className="text-accent" /> Inter-IIT Participation
                        </h2>
                        <p className="text-lg text-purple-100 max-w-3xl mb-8 leading-relaxed">
                            IIT Dharwad actively participates in the annual Inter-IIT Sports Meet, the prestigious
                            sports tournament among all IITs. Our contingent has shown remarkable growth and
                            competitive spirit over the years, bringing home laurels and respect.
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                                <div className="text-3xl font-bold text-accent">58th</div>
                                <div className="text-sm text-purple-200">Inter-IIT Meet</div>
                            </div>
                            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                                <div className="text-3xl font-bold text-white">120+</div>
                                <div className="text-sm text-purple-200">Athletes</div>
                            </div>
                            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                                <div className="text-3xl font-bold text-white">12</div>
                                <div className="text-sm text-purple-200">Sports</div>
                            </div>
                            <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                                <div className="text-3xl font-bold text-white">2016</div>
                                <div className="text-sm text-purple-200">Est.</div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Teams;
