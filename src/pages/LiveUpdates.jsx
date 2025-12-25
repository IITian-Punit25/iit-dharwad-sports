import React, { useState, useEffect } from 'react';
import { RefreshCw } from 'lucide-react';

const initialMatches = [
    { id: 1, sport: 'Cricket', team1: 'CSE', team2: 'EE', score1: '145/4 (18.2)', score2: '142/8 (20.0)', status: 'Live', result: 'CSE needs 3 runs in 10 balls' },
    { id: 2, sport: 'Football', team1: 'ME', team2: 'CE', score1: '2', score2: '1', status: 'Live', result: '75th Minute' },
    { id: 3, sport: 'Basketball', team1: 'Hostel A', team2: 'Hostel B', score1: '45', score2: '38', status: 'Finished', result: 'Hostel A won by 7 points' },
];

const LiveUpdates = () => {
    const [matches, setMatches] = useState(initialMatches);
    const [lastUpdated, setLastUpdated] = useState(new Date());

    const refreshScores = () => {
        // Simulate fetching new data
        setLastUpdated(new Date());
        // In a real app, this would fetch from an API
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-black text-gray-900">Recent Match Results</h1>
                    <button
                        onClick={refreshScores}
                        className="flex items-center gap-2 text-accent hover:text-primary transition-colors"
                    >
                        <RefreshCw className="w-4 h-4" />
                        <span className="text-sm font-medium">Updated: {lastUpdated.toLocaleTimeString()}</span>
                    </button>
                </div>

                <div className="space-y-6">
                    {matches.map((match) => (
                        <div key={match.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 relative overflow-hidden">
                            {match.status === 'Live' && (
                                <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg animate-pulse">
                                    LIVE
                                </div>
                            )}

                            <div className="text-sm text-gray-500 font-medium mb-4 uppercase tracking-wider">{match.sport}</div>

                            <div className="flex justify-between items-center mb-4">
                                <div className="text-center w-1/3">
                                    <div className="text-2xl font-bold text-primary">{match.team1}</div>
                                    <div className="text-3xl font-mono font-bold text-gray-800 mt-2">{match.score1}</div>
                                </div>

                                <div className="text-center w-1/3 text-gray-400 font-bold text-xl">VS</div>

                                <div className="text-center w-1/3">
                                    <div className="text-2xl font-bold text-primary">{match.team2}</div>
                                    <div className="text-3xl font-mono font-bold text-gray-800 mt-2">{match.score2}</div>
                                </div>
                            </div>

                            <div className="text-center text-accent font-medium border-t border-gray-100 pt-4">
                                {match.result}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LiveUpdates;
