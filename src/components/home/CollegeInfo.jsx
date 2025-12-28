import React from 'react';
import { Award, Users, Zap, Target } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
    {
        icon: <Award className="w-8 h-8 text-accent" />,
        title: "World-Class Infrastructure",
        description: "Train in our state-of-the-art facilities designed for professional-level performance."
    },
    {
        icon: <Users className="w-8 h-8 text-primary" />,
        title: "Vibrant Community",
        description: "Join a diverse community of athletes and sports enthusiasts from across the country."
    },
    {
        icon: <Zap className="w-8 h-8 text-secondary" />,
        title: "Holistic Development",
        description: "Beyond physical fitness, we focus on leadership, teamwork, and mental resilience."
    },
    {
        icon: <Target className="w-8 h-8 text-primary" />,
        title: "Competitive Excellence",
        description: "Regular inter-IIT meets and tournaments to test your skills at the highest level."
    }
];

const CollegeInfo = () => {
    return (
        <section className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-primary dark:text-white mb-4"
                    >
                        Why IIT Dharwad Sports?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
                    >
                        We believe in nurturing talent and building character through the power of sports.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 + 0.2 }}
                            className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700 group hover:-translate-y-1"
                        >
                            <div className="bg-white dark:bg-gray-700 w-16 h-16 rounded-full flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-primary dark:text-white mb-3">{feature.title}</h3>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-96 h-96 bg-purple-50 dark:bg-purple-900/20 rounded-full blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100 dark:bg-purple-900/20 rounded-full blur-3xl opacity-50 -translate-x-1/2 translate-y-1/2"></div>
            </div>
        </section>
    );
};

export default CollegeInfo;
