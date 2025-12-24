import React from 'react';
import { motion } from 'framer-motion';
import { statsData } from '../../data/mockData';

const Stats = () => {
    return (
        <div className="bg-primary py-20 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
                    {statsData.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="p-6"
                        >
                            <div className="text-4xl md:text-6xl font-bold text-accent mb-2">
                                {stat.value}{stat.suffix}
                            </div>
                            <div className="text-sm md:text-base text-gray-300 font-medium uppercase tracking-wider">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Stats;
