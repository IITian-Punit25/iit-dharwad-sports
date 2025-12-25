import React from 'react';

const timelineEvents = [
    { year: '2016', title: 'Establishment', description: 'IIT Dharwad was established, and the first sports committee was formed.' },
    { year: '2017', title: 'First Inter-IIT', description: 'Participated in the Inter-IIT Sports Meet for the first time with a contingent of 50 students.' },
    { year: '2019', title: 'New Grounds', description: 'Inauguration of the new cricket and football grounds at the transit campus.' },

    { year: '2024', title: 'Permanent Campus', description: 'Moved to the permanent campus with state-of-the-art sports complex planning.' },
];

const Timeline = () => {
    return (
        <div className="relative border-l-2 border-gray-200 ml-3 md:ml-6 space-y-12 my-12">
            {timelineEvents.map((event, index) => (
                <div key={index} className="relative pl-8 md:pl-12">
                    {/* Dot */}
                    <div className="absolute -left-[9px] top-0 h-5 w-5 rounded-full border-4 border-white bg-accent shadow-sm"></div>

                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 mb-2">
                        <span className="text-accent font-bold text-xl">{event.year}</span>
                        <h3 className="text-lg font-bold text-primary">{event.title}</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed max-w-2xl">
                        {event.description}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default Timeline;
