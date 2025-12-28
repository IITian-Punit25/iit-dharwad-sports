import React from 'react';

const timelineEvents = [
    { year: '2016', title: 'Establishment', description: 'IIT Dharwad was established, and the first sports committee was formed.' },
    { year: '2018', title: 'First Medal', description: 'Secured the first medal in Para-powerlifting at the Inter-IIT Sports Meet.' },
    { year: '2022', title: 'Gold Medal', description: 'Won a Gold Medal in Weightlifting and secured 4th position in the general weightlifting championship.' },
    { year: '2024', title: 'Permanent Campus', description: 'Moved to the permanent campus with state-of-the-art sports complex planning.' },
    { year: '2025', title: '58th Inter-IIT', description: 'Participating in the 58th Inter-IIT Sports Meet with a contingent of 98 members.' },
];

const Timeline = () => {
    return (
        <div className="relative border-l-2 border-gray-200 dark:border-gray-700 ml-3 md:ml-6 space-y-12 my-12">
            {timelineEvents.map((event, index) => (
                <div key={index} className="relative pl-8 md:pl-12">
                    {/* Dot */}
                    <div className="absolute -left-[9px] top-0 h-5 w-5 rounded-full border-4 border-white dark:border-gray-800 bg-accent shadow-sm"></div>

                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 mb-2">
                        <span className="text-accent font-bold text-xl">{event.year}</span>
                        <h3 className="text-lg font-bold text-primary dark:text-white">{event.title}</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
                        {event.description}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default Timeline;
