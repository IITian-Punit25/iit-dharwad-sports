import React from 'react';
import { motion } from 'framer-motion';

const SportCard = ({ sport, index, className }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`group relative overflow-hidden rounded-[2rem] bg-gray-900 ${className}`}
        >
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src={sport.image}
                    alt={sport.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80" />
            </div>

            {/* Content Overlay */}
            <div className="relative flex h-full flex-col justify-end p-8">
                {/* Text Content */}
                <div className="transform transition-transform duration-300 group-hover:translate-y-[-8px]">
                    <div className="mb-2 flex items-center gap-3">
                        <span className="inline-block rounded-full bg-primary/90 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-sm">
                            {sport.category || 'Sport'}
                        </span>
                        {sport.isTeam && (
                            <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-sm">
                                Team
                            </span>
                        )}
                    </div>

                    <h3 className="text-4xl font-black uppercase tracking-tighter text-white">
                        {sport.name}
                    </h3>

                    <div className="mt-4 h-0 overflow-hidden opacity-0 transition-all duration-300 group-hover:h-auto group-hover:opacity-100">
                        <p className="text-sm font-medium text-gray-300 line-clamp-2">
                            {sport.description || "Experience the thrill and camaraderie of this amazing sport."}
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default SportCard;
