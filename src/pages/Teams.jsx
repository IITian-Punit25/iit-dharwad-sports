import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Award, ArrowRight } from 'lucide-react';
import { councilMembers, selectionProcess } from '../data/mockData';

const Teams = () => {
    return (
        <div className="min-h-screen bg-gray-50 text-gray-900 font-sans selection:bg-primary/10 selection:text-primary">
            {/* Hero Section - Aligned with Home Theme */}
            <div className="relative min-h-[60vh] flex flex-col justify-center px-4 sm:px-6 lg:px-8 overflow-hidden pt-20 border-b border-gray-200/50">
                <div className="max-w-7xl mx-auto w-full relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Pulse Dot Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-gray-100 mb-8">
                            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                            <span className="text-sm font-bold text-gray-600 tracking-wide uppercase">IIT Dharwad Sports</span>
                        </div>

                        {/* Theme-Aligned Headline */}
                        <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 leading-tight tracking-tight">
                            OUR <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                                TEAMS
                            </span>
                        </h1>

                        {/* Motivating Message */}
                        <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto font-medium">
                            "Being a newer IIT isn't a disadvantage; it's our greatest strength.
                            We don't just inherit a legacy; <span className="text-primary font-bold">we build one.</span>"
                        </p>
                    </motion.div>
                </div>

                {/* Decorative Background Blur */}
                <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-purple-100/30 via-blue-50/30 to-transparent rounded-full blur-3xl opacity-60"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

                {/* Council Structure */}
                <div className="mb-24">
                    <div className="flex items-center justify-between mb-12">
                        <div>
                            <h2 className="text-3xl font-black text-gray-900 mb-2">The Council</h2>
                            <p className="text-gray-600">Leadership 2024-25</p>
                        </div>
                        <div className="hidden md:block w-24 h-1 bg-gradient-to-r from-primary to-transparent rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {councilMembers.map((member, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-primary/20 transition-all duration-300 group"
                            >
                                <div className="mb-4">
                                    <div className="w-14 h-14 bg-gray-50 rounded-xl flex items-center justify-center text-gray-400 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                        <Users size={24} />
                                    </div>
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                                <p className="text-sm text-primary font-bold uppercase tracking-wide">{member.role}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Selection Process */}
                <div className="mb-24">
                    <div className="flex items-center justify-between mb-12">
                        <div>
                            <h2 className="text-3xl font-black text-gray-900 mb-2">Join the Team</h2>
                            <p className="text-gray-600">Selection Process</p>
                        </div>
                        <div className="hidden md:block w-24 h-1 bg-gradient-to-r from-accent to-transparent rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {selectionProcess.map((step, index) => (
                            <div key={index} className="relative">
                                <div className="text-6xl font-black text-gray-100 absolute -top-8 -left-2 -z-10 select-none">0{step.step}</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3 pt-2">{step.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Inter-IIT Stats */}
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16"></div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
                        <div>
                            <div className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest text-primary uppercase bg-primary/10 rounded-full">
                                Annual Highlight
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                                58th Inter-IIT <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Sports Meet</span>
                            </h2>
                            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                                The ultimate proving ground. We are sending our largest contingent yet to compete against the best.
                            </p>
                            <button className="px-6 py-3 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/30 hover:bg-primary/90 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2">
                                View Gallery <ArrowRight size={18} />
                            </button>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 text-center">
                                <div className="text-4xl font-black text-gray-900 mb-1">98</div>
                                <div className="text-xs text-gray-500 uppercase tracking-widest font-bold">Athletes</div>
                            </div>
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 text-center">
                                <div className="text-4xl font-black text-gray-900 mb-1">12</div>
                                <div className="text-xs text-gray-500 uppercase tracking-widest font-bold">Sports</div>
                            </div>
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 text-center">
                                <div className="text-4xl font-black text-gray-900 mb-1">2016</div>
                                <div className="text-xs text-gray-500 uppercase tracking-widest font-bold">Est.</div>
                            </div>
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 text-center">
                                <div className="text-4xl font-black text-gray-900 mb-1">1</div>
                                <div className="text-xs text-gray-500 uppercase tracking-widest font-bold">Mission</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Teams;
