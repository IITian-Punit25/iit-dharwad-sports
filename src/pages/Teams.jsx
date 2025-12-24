import React, { useState } from 'react';
import { Trophy, Medal, Star } from 'lucide-react';

const achievements = [
    { id: 1, year: 2023, sport: 'Athletics', event: 'Inter-IIT Sports Meet', achievement: 'Gold Medal (100m Sprint)', team: 'Men' },
    { id: 2, year: 2023, sport: 'Badminton', event: 'Inter-IIT Sports Meet', achievement: 'Silver Medal', team: 'Women' },
    { id: 3, year: 2022, sport: 'Cricket', event: 'Inter-IIT Sports Meet', achievement: 'Quarter Finalists', team: 'Men' },
    { id: 4, year: 2022, sport: 'Chess', event: 'Inter-IIT Sports Meet', achievement: 'Bronze Medal', team: 'Mixed' },
    { id: 5, year: 2021, sport: 'Football', event: 'Local University League', achievement: 'Winners', team: 'Men' },
];

const Teams = () => {
    const [filterYear, setFilterYear] = useState('All');
    const [filterSport, setFilterSport] = useState('All');

    const years = ['All', ...new Set(achievements.map(a => a.year))];
    const sports = ['All', ...new Set(achievements.map(a => a.sport))];

    const filteredAchievements = achievements.filter(item => {
        return (filterYear === 'All' || item.year.toString() === filterYear) &&
            (filterSport === 'All' || item.sport === filterSport);
    });

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
                                <div className="text-3xl font-bold text-accent">54th</div>
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
                                <div className="text-3xl font-bold text-white">Top 15</div>
                                <div className="text-sm text-purple-200">Overall Rank</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Achievements Section */}
                <div>
                    <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
                        <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
                            <Medal className="text-accent" /> Hall of Fame
                        </h2>

                        <div className="flex gap-4">
                            <select
                                value={filterYear}
                                onChange={(e) => setFilterYear(e.target.value)}
                                className="border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                            >
                                {years.map(year => <option key={year} value={year}>{year === 'All' ? 'All Years' : year}</option>)}
                            </select>
                            <select
                                value={filterSport}
                                onChange={(e) => setFilterSport(e.target.value)}
                                className="border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                            >
                                {sports.map(sport => <option key={sport} value={sport}>{sport === 'All' ? 'All Sports' : sport}</option>)}
                            </select>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead className="bg-gray-50 border-b border-gray-200">
                                    <tr>
                                        <th className="px-6 py-4 font-semibold text-gray-600">Year</th>
                                        <th className="px-6 py-4 font-semibold text-gray-600">Sport</th>
                                        <th className="px-6 py-4 font-semibold text-gray-600">Event</th>
                                        <th className="px-6 py-4 font-semibold text-gray-600">Team Category</th>
                                        <th className="px-6 py-4 font-semibold text-gray-600">Achievement</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {filteredAchievements.map((item) => (
                                        <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                                            <td className="px-6 py-4 text-gray-900 font-medium">{item.year}</td>
                                            <td className="px-6 py-4 text-gray-600">{item.sport}</td>
                                            <td className="px-6 py-4 text-gray-600">{item.event}</td>
                                            <td className="px-6 py-4 text-gray-600">{item.team}</td>
                                            <td className="px-6 py-4">
                                                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-primary">
                                                    <Star className="w-3 h-3 mr-1 fill-current" />
                                                    {item.achievement}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        {filteredAchievements.length === 0 && (
                            <div className="p-8 text-center text-gray-500">
                                No achievements found for the selected filters.
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Teams;
