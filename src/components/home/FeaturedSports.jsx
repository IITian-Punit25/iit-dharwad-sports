import React from 'react';
import { featuredSports } from '../../data/mockData';
import { motion } from 'framer-motion';
import { Trophy, Target, Activity, Dumbbell } from 'lucide-react';

// Map sport IDs to Lucide icons
const iconMap = {
    1: Trophy,    // Cricket (Trophy as placeholder for popular sport)
    2: Activity,  // Football
    3: Target,    // Basketball
    4: Dumbbell,  // Badminton
};

const FeaturedSports = () => {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16 text-center">
                    <h2 className="text-4xl font-black text-gray-900 uppercase tracking-tight mb-4">
                        Featured <span className="text-primary">Sports</span>
                    </h2>
                    <div className="w-20 h-1.5 bg-primary mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {featuredSports.map((sport, index) => {
                        const Icon = iconMap[sport.id] || Activity;

                        return (
                            <motion.div
                                key={sport.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group relative p-8 bg-gray-50 rounded-3xl border border-gray-100 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
                            >
                                <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white shadow-sm text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                    <Icon className="w-8 h-8" strokeWidth={1.5} />
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                                    {sport.name}
                                </h3>

                                <p className="text-gray-500 leading-relaxed mb-6">
                                    {sport.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default FeaturedSports;
