import React from 'react';
import { motion } from 'framer-motion';
import { statsData } from '../../data/mockData';

const Stats = () => {
    return (
        <div className="bg-white py-16 border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {statsData.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="p-6 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                                {stat.value}{stat.suffix}
                            </div>
                            <div className="text-sm md:text-base text-gray-500 font-medium uppercase tracking-wider">
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
