import React, { useState } from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';

const events = [
    {
        id: 1,
        title: 'Inter-Departmental Cricket Tournament',
        date: '2025-10-15',
        time: '9:00 AM',
        location: 'Main Cricket Ground',
        category: 'Upcoming',
        description: 'The annual cricket battle between departments. Register your teams by Oct 10th.',
    },
    {
        id: 2,
        title: 'Yoga Workshop',
        date: '2025-10-20',
        time: '6:00 AM',
        location: 'Yoga Hall, SAC',
        category: 'Upcoming',
        description: 'A morning session on mindfulness and flexibility with certified instructors.',
    },
    {
        id: 3,
        title: 'Freshers Sports Meet',
        date: '2025-08-10',
        time: 'All Day',
        location: 'Sports Complex',
        category: 'Past',
        description: 'Welcoming the new batch with a week-long sports extravaganza.',
    },
    {
        id: 4,
        title: 'Marathon for Peace',
        date: '2025-09-02',
        time: '5:30 AM',
        location: 'Campus Main Gate',
        category: 'Past',
        description: '5K run promoting peace and fitness among students and faculty.',
    },
];

const Events = () => {
    const [activeTab, setActiveTab] = useState('Upcoming');

    const filteredEvents = events.filter(event => event.category === activeTab);

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-primary mb-4">Events & Tournaments</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Stay updated with the latest sports activities and competitions on campus.
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex justify-center mb-12">
                    <div className="bg-white p-1 rounded-lg shadow-sm border border-gray-200 inline-flex">
                        <button
                            onClick={() => setActiveTab('Upcoming')}
                            className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 ${activeTab === 'Upcoming'
                                ? 'bg-primary text-white shadow-sm'
                                : 'text-gray-600 hover:text-primary hover:bg-gray-50'
                                }`}
                        >
                            Upcoming Events
                        </button>
                        <button
                            onClick={() => setActiveTab('Past')}
                            className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 ${activeTab === 'Past'
                                ? 'bg-primary text-white shadow-sm'
                                : 'text-gray-600 hover:text-primary hover:bg-gray-50'
                                }`}
                        >
                            Past Events
                        </button>
                    </div>
                </div>

                {/* Events Grid */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
                    {filteredEvents.map((event) => (
                        <div
                            key={event.id}
                            className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 flex flex-col md:flex-row gap-6"
                        >
                            {/* Date Box */}
                            <div className="flex-shrink-0 flex flex-col items-center justify-center bg-purple-50 text-primary rounded-lg w-24 h-24 border border-purple-100">
                                <span className="text-3xl font-bold">{new Date(event.date).getDate()}</span>
                                <span className="text-sm font-medium uppercase">
                                    {new Date(event.date).toLocaleString('default', { month: 'short' })}
                                </span>
                            </div>

                            <div className="flex-grow">
                                <h3 className="text-xl font-bold text-primary mb-2">{event.title}</h3>
                                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                                    {event.description}
                                </p>

                                <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                                    <div className="flex items-center">
                                        <Clock className="h-4 w-4 mr-1 text-accent" />
                                        {event.time}
                                    </div>
                                    <div className="flex items-center">
                                        <MapPin className="h-4 w-4 mr-1 text-accent" />
                                        {event.location}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                    {filteredEvents.length === 0 && (
                        <div className="col-span-full text-center py-12 text-gray-500">
                            No events found in this category.
                        </div>
                    )}
                </div>

                {/* Annual Fest Section */}
                <div className="mt-20 bg-primary rounded-2xl p-8 md:p-16 text-center text-white relative overflow-hidden">
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">PARAKRAM 2025</h2>
                        <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
                            The Annual Sports Festival of IIT Dharwad is coming soon.
                            Get ready for 3 days of intense competition, glory, and celebration.
                        </p>
                        <button className="bg-accent hover:bg-secondary text-white font-bold py-3 px-8 rounded-full transition-colors shadow-lg">
                            Coming Soon
                        </button>
                    </div>
                    {/* Decorative circles */}
                    <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3"></div>
                </div>
            </div>
        </div>
    );
};

export default Events;
