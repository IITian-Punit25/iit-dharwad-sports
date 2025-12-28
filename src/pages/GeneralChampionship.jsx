import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Users, Calendar, Award, AlertCircle, CheckCircle, Shield, Zap, Target, Medal, Filter, Clock, MapPin, Info, Loader2, RefreshCw } from 'lucide-react';
import { io } from 'socket.io-client';
import RegistrationForm from '../components/gc/RegistrationForm';
import api from '../api';
import debounce from 'lodash.debounce';

const GeneralChampionship = () => {
    const [scheduleFilter, setScheduleFilter] = useState('All');
    const [leaderboardTab, setLeaderboardTab] = useState('Boys');

    const [gcSchedule, setGcSchedule] = useState([]);
    const [gcResults, setGcResults] = useState([]);
    const [gcLeaderboard, setGcLeaderboard] = useState({ boys: [], girls: [], lastUpdated: '' });
    const [loading, setLoading] = useState(true);

    const [isRefreshing, setIsRefreshing] = useState(false);

    const fetchData = async (showLoading = true) => {
        if (showLoading) setLoading(true);
        else setIsRefreshing(true);

        try {
            const [pointsRes, eventsRes, scoresRes] = await Promise.all([
                api.get('/points'),
                api.get('/events'),
                api.get('/scores')
            ]);

            // Process Points
            const pointsData = pointsRes.data;
            const boysPoints = pointsData.filter(p => p.category === 'Boys').map((p, i) => ({ ...p, rank: i + 1 }));
            const girlsPoints = pointsData.filter(p => p.category === 'Girls').map((p, i) => ({ ...p, rank: i + 1 }));

            setGcLeaderboard({
                boys: boysPoints,
                girls: girlsPoints,
                lastUpdated: new Date().toLocaleString()
            });

            // Process Schedule
            setGcSchedule(eventsRes.data);

            // Process Results
            const processedResults = scoresRes.data.map(score => ({
                id: score._id,
                sport: score.eventId?.sport || 'Unknown',
                category: score.eventId?.category || 'Unknown',
                stage: score.eventId?.stage || 'Unknown',
                team1: score.eventId?.team1 || 'Unknown',
                team2: score.eventId?.team2 || 'Unknown',
                score: score.score,
                winner: score.winner
            }));
            setGcResults(processedResults);

        } catch (err) {
            console.error('Error fetching GC data:', err);
        } finally {
            setLoading(false);
            setIsRefreshing(false);
        }
    };

    useEffect(() => {
        fetchData();

        // Socket.io connection

        const socket = io('http://localhost:5000');
        const debouncedFetch = debounce(() => {
            console.log('Debounced fetch triggered');
            fetchData(false);
        }, 300);

        socket.on('connect', () => {
            console.log('Connected to WebSocket server');
        });

        socket.on('pointsUpdated', () => {
            console.log('Points updated, fetching new data...');
            debouncedFetch();
        });

        socket.on('scoresUpdated', () => {
            console.log('Scores updated, fetching new data...');
            debouncedFetch();
        });

        socket.on('eventsUpdated', () => {
            console.log('Events updated, fetching new data...');
            debouncedFetch();
        });

        // Test live update listener
        socket.on('testLive', () => {
            console.log('TestLive event received, fetching data...');
            debouncedFetch();
        });



        return () => {
            socket.disconnect();
        };
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100
            }
        }
    };

    const filteredSchedule = scheduleFilter === 'All'
        ? gcSchedule
        : gcSchedule.filter(match => {
            if (scheduleFilter === 'Boy' || scheduleFilter === 'Girl') {
                return match.category === scheduleFilter;
            }
            return match.pool === scheduleFilter || match.stage.includes(scheduleFilter);
        });

    const currentLeaderboard = gcLeaderboard[leaderboardTab.toLowerCase()] || [];

    if (loading) {
        return (
            <div className="min-h-screen bg-slate-50 flex items-center justify-center">
                <div className="text-center">
                    <Loader2 className="w-12 h-12 text-blue-600 animate-spin mx-auto mb-4" />
                    <p className="text-gray-600 font-medium">Loading Championship Data...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-gray-900 pb-12 overflow-x-hidden">
            {/* Hero Section */}
            <div className="relative bg-blue-900 text-white py-24 mb-16 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-blue-700 opacity-20 blur-3xl"></div>
                    <div className="absolute top-1/2 -left-24 w-72 h-72 rounded-full bg-indigo-600 opacity-20 blur-3xl"></div>
                    <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-purple-600 opacity-20 blur-3xl"></div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="inline-flex items-center justify-center p-2 bg-blue-800/50 backdrop-blur-sm rounded-full mb-6 border border-blue-700/50"
                    >
                        <Trophy className="w-5 h-5 text-yellow-400 mr-2" />
                        <span className="text-blue-200 font-semibold text-sm px-2">The Ultimate Showdown</span>
                    </motion.div>

                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-blue-200 drop-shadow-sm">
                        General Championship <span className="text-yellow-400">2025</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed font-light">
                        One Institute. Multiple Hostels. <span className="font-semibold text-white">Infinite Glory.</span><br />
                        Witness the spirit of competition, unity, and sportsmanship.
                    </p>


                </motion.div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

                {/* Official GC Leaderboard */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                    id="leaderboard"
                    className="grid lg:grid-cols-3 gap-8"
                >
                    <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-100 dark:border-gray-700">
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                            <div className="flex items-center mb-4 md:mb-0">
                                <div className="p-3 bg-yellow-100 rounded-xl mr-4">
                                    <Trophy className="h-8 w-8 text-yellow-600" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">GC Leaderboard</h2>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Official Standings</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => fetchData(false)}
                                    disabled={isRefreshing}
                                    className="p-2 bg-blue-50 dark:bg-gray-700 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-100 dark:hover:bg-gray-600 transition-colors"
                                    title="Refresh Live Data"
                                >
                                    <RefreshCw className={`w-5 h-5 ${isRefreshing ? 'animate-spin' : ''}`} />
                                </motion.button>
                                <div className="flex space-x-2 bg-gray-100 dark:bg-gray-700 p-1 rounded-lg">
                                    {['Boys', 'Girls'].map(tab => (
                                        <button
                                            key={tab}
                                            onClick={() => setLeaderboardTab(tab)}
                                            className={`px-6 py-2 rounded-md text-sm font-bold transition-all ${leaderboardTab === tab
                                                ? 'bg-white dark:bg-gray-600 text-blue-600 dark:text-blue-300 shadow-sm'
                                                : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
                                                }`}
                                        >
                                            {tab} GC
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="min-w-full text-sm text-left">
                                <thead className="text-xs text-gray-500 dark:text-gray-400 uppercase bg-gray-50 dark:bg-gray-700 border-b border-gray-100 dark:border-gray-600">
                                    <tr>
                                        <th className="px-6 py-3 font-bold">Rank</th>
                                        <th className="px-6 py-3 font-bold">Hostel</th>
                                        <th className="px-6 py-3 font-bold text-center"><span title="Gold" className="text-xl">🥇</span></th>
                                        <th className="px-6 py-3 font-bold text-center"><span title="Silver" className="text-xl">🥈</span></th>
                                        <th className="px-6 py-3 font-bold text-center"><span title="Bronze" className="text-xl">🥉</span></th>
                                        <th className="px-6 py-3 font-bold text-right text-blue-600">Total Points</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-50 dark:divide-gray-700">
                                    {currentLeaderboard.length > 0 ? (
                                        currentLeaderboard.map((hostel) => (
                                            <tr key={hostel.hostel} className={`hover:bg-blue-50/30 transition-colors ${hostel.rank === 1 ? 'bg-yellow-50/30' : ''}`}>
                                                <td className="px-6 py-4 font-bold text-gray-900">
                                                    <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full ${hostel.rank === 1 ? 'bg-yellow-100 text-yellow-700' :
                                                        hostel.rank === 2 ? 'bg-gray-100 text-gray-700' :
                                                            hostel.rank === 3 ? 'bg-amber-100 text-amber-800' : 'text-gray-500'
                                                        }`}>
                                                        {hostel.rank}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 font-medium text-gray-900">{hostel.hostel}</td>
                                                <td className="px-6 py-4 text-center font-medium text-gray-700">{hostel.gold}</td>
                                                <td className="px-6 py-4 text-center font-medium text-gray-700">{hostel.silver}</td>
                                                <td className="px-6 py-4 text-center font-medium text-gray-700">{hostel.bronze}</td>
                                                <td className="px-6 py-4 text-right font-extrabold text-blue-600 text-lg">{hostel.totalPoints}</td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="6" className="px-6 py-12 text-center">
                                                <div className="flex flex-col items-center justify-center text-gray-400">
                                                    <Trophy className="w-12 h-12 mb-3 text-gray-300" />
                                                    <p className="text-lg font-medium text-gray-500">The arena awaits its champions.</p>
                                                    <p className="text-sm">Standings coming soon!</p>
                                                </div>
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                        <div className="mt-4 flex justify-between items-center text-xs text-gray-400">
                            <span>* Tie-breaker: Gold &gt; Silver &gt; Bronze count</span>
                            <span>Last Updated: {gcLeaderboard.lastUpdated}</span>
                        </div>
                    </div>

                    {/* Recent Results Sidebar */}
                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-100 dark:border-gray-700 h-fit">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                            <Zap className="w-5 h-5 text-amber-500 mr-2" /> Recent Results
                        </h3>
                        <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                            {gcResults.length > 0 ? (
                                gcResults.map(result => (
                                    <div key={result.id} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 border border-gray-100 dark:border-gray-600 hover:border-blue-200 dark:hover:border-blue-500 transition-colors">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">{result.sport} ({result.category})</span>
                                            <span className="text-xs text-gray-500">{result.stage}</span>
                                        </div>
                                        <div className="flex justify-between items-center font-bold text-gray-800 mb-2">
                                            <span>{result.team1}</span>
                                            <span className="bg-white border border-gray-200 px-2 py-0.5 rounded text-sm shadow-sm">{result.score}</span>
                                            <span>{result.team2}</span>
                                        </div>
                                        <div className="text-xs text-green-600 font-medium flex items-center bg-green-50 p-2 rounded">
                                            <Award className="w-3 h-3 mr-1" /> Winner: {result.winner}
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="flex flex-col items-center justify-center py-12 text-center text-gray-400">
                                    <Zap className="w-12 h-12 mb-3 text-gray-300" />
                                    <p className="text-lg font-medium text-gray-500">Silence on the field.</p>
                                    <p className="text-sm">No recent battles recorded.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </motion.section>

                {/* Match Schedule */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                    id="schedule"
                    className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-100 dark:border-gray-700"
                >
                    <div className="flex flex-col xl:flex-row xl:items-center justify-between mb-8 gap-4">
                        <div className="flex items-center">
                            <div className="p-3 bg-indigo-100 rounded-xl mr-4">
                                <Calendar className="h-8 w-8 text-indigo-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Match Schedule</h2>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {['All', 'Boy', 'Girl', 'Pool A', 'Pool B', 'Knockout'].map(filter => (
                                <button
                                    key={filter}
                                    onClick={() => setScheduleFilter(filter)}
                                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${scheduleFilter === filter
                                        ? 'bg-indigo-600 text-white'
                                        : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                                        }`}
                                >
                                    {filter === 'All' ? 'All Matches' : filter}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="min-w-full text-left text-sm whitespace-nowrap">
                            <thead className="uppercase tracking-wider border-b-2 border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 text-gray-500 dark:text-gray-400 font-semibold">
                                <tr>
                                    <th className="px-6 py-4">Sport</th>
                                    <th className="px-6 py-4">Stage</th>
                                    <th className="px-6 py-4">Teams</th>
                                    <th className="px-6 py-4">Date & Time</th>
                                    <th className="px-6 py-4">Venue</th>
                                    <th className="px-6 py-4">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                                {filteredSchedule.length > 0 ? filteredSchedule.map((match) => (
                                    <tr key={match.id} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                                        <td className="px-6 py-4 font-medium text-gray-900 dark:text-white flex items-center">
                                            <span className={`w-2 h-2 rounded-full mr-2 ${match.category === 'Boy' ? 'bg-blue-500' : 'bg-pink-500'}`}></span>
                                            {match.sport}
                                        </td>
                                        <td className="px-6 py-4 text-gray-600 dark:text-gray-300">
                                            <span className="bg-gray-100 dark:bg-gray-600 px-2 py-1 rounded text-xs font-medium">{match.stage}</span>
                                        </td>
                                        <td className="px-6 py-4 text-gray-800 dark:text-gray-200 font-medium">
                                            {match.team1} <span className="text-gray-400 mx-1">vs</span> {match.team2}
                                        </td>
                                        <td className="px-6 py-4 text-gray-600 dark:text-gray-300">
                                            <div className="flex flex-col">
                                                <span className="font-medium">{match.date}</span>
                                                <span className="text-xs text-gray-500 flex items-center mt-0.5">
                                                    <Clock className="w-3 h-3 mr-1" /> {match.time}
                                                </span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-gray-600 dark:text-gray-300">
                                            <div className="flex items-center">
                                                <MapPin className="w-3 h-3 mr-1 text-gray-400" /> {match.venue}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={`px-2 py-1 text-xs font-semibold rounded-full ${match.status === 'Live' ? 'bg-red-100 text-red-700 animate-pulse' :
                                                match.status === 'Completed' ? 'bg-gray-100 text-gray-600' :
                                                    'bg-green-100 text-green-700'
                                                }`}>
                                                {match.status}
                                            </span>
                                        </td>
                                    </tr>
                                )) : (
                                    <tr>
                                        <td colSpan="6" className="px-6 py-8 text-center text-gray-500 italic">
                                            No matches found for the selected filter.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </motion.section>

                {/* Section 1: About GC */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                    id="about"
                    className="relative"
                >
                    <div className="absolute top-0 left-0 w-full h-full bg-white dark:bg-gray-800 rounded-3xl shadow-xl -skew-y-1 transform origin-top-left z-0"></div>
                    <div className="relative z-10 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 md:p-12 border border-gray-100 dark:border-gray-700">
                        <motion.div variants={itemVariants} className="flex items-center mb-6">
                            <div className="p-3 bg-blue-100 rounded-xl mr-4">
                                <Target className="h-8 w-8 text-blue-600" />
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">About General Championship</h2>
                        </motion.div>
                        <motion.p variants={itemVariants} className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                            The General Championship (GC) is the premier annual inter-hostel sports competition organized by the IIT Dharwad Sports Council.
                            It brings together the best athletes from all hostels to compete for the coveted GC Trophy.
                            More than just a tournament, the GC is a celebration of sportsmanship, hostel spirit, and holistic development.
                        </motion.p>
                    </div>
                </motion.section>

                {/* Section 2: Structure & Format */}
                <section id="structure" className="grid md:grid-cols-2 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border-l-4 border-green-500 hover:shadow-xl transition-shadow duration-300"
                    >
                        <div className="flex items-center mb-6">
                            <div className="p-3 bg-green-100 rounded-xl mr-4">
                                <Users className="h-8 w-8 text-green-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Competition Structure</h2>
                        </div>
                        <ul className="space-y-4 text-gray-600 dark:text-gray-300">
                            <li className="flex items-start group">
                                <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                                <span><strong className="text-gray-900 dark:text-white">Boys GC:</strong> 10 Hostels divided into Pool A & Pool B. Top 4 from each pool advance to Knockouts.</span>
                            </li>
                            <li className="flex items-start group">
                                <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                                <span><strong className="text-gray-900 dark:text-white">Girls GC:</strong> 4 Hostels compete in a Round-Robin League format followed by Finals.</span>
                            </li>
                            <li className="flex items-start group">
                                <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                                <span><strong className="text-gray-900 dark:text-white">Stages:</strong> League Matches -&gt; Quarter Finals -&gt; Semi Finals -&gt; Grand Finale.</span>
                            </li>
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 border-l-4 border-amber-500 hover:shadow-xl transition-shadow duration-300"
                    >
                        <div className="flex items-center mb-6">
                            <div className="p-3 bg-amber-100 rounded-xl mr-4">
                                <Award className="h-8 w-8 text-amber-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Points System</h2>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 mb-6">
                            The GC Trophy is awarded to the hostel with the highest cumulative points across all sports.
                        </p>
                        <div className="overflow-hidden rounded-xl border border-gray-100 dark:border-gray-700">
                            <table className="min-w-full text-sm text-left text-gray-600 dark:text-gray-300">
                                <thead className="text-xs text-gray-700 dark:text-gray-200 uppercase bg-amber-50/50 dark:bg-amber-900/20">
                                    <tr>
                                        <th className="px-6 py-4 font-bold">Position</th>
                                        <th className="px-6 py-4 font-bold text-right">Points Awarded</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                                    <tr className="bg-white dark:bg-gray-800 hover:bg-amber-50/30 dark:hover:bg-amber-900/10 transition-colors">
                                        <td className="px-6 py-4 font-medium flex items-center"><Medal className="w-4 h-4 text-yellow-500 mr-2" /> 1st Place (Winner)</td>
                                        <td className="px-6 py-4 text-right font-bold text-gray-900 dark:text-white">10 Points</td>
                                    </tr>
                                    <tr className="bg-white dark:bg-gray-800 hover:bg-amber-50/30 dark:hover:bg-amber-900/10 transition-colors">
                                        <td className="px-6 py-4 font-medium flex items-center"><Medal className="w-4 h-4 text-gray-400 mr-2" /> 2nd Place (Runner-up)</td>
                                        <td className="px-6 py-4 text-right font-bold text-gray-900 dark:text-white">6 Points</td>
                                    </tr>
                                    <tr className="bg-white dark:bg-gray-800 hover:bg-amber-50/30 dark:hover:bg-amber-900/10 transition-colors">
                                        <td className="px-6 py-4 font-medium flex items-center"><Medal className="w-4 h-4 text-amber-700 mr-2" /> 3rd Place</td>
                                        <td className="px-6 py-4 text-right font-bold text-gray-900 dark:text-white">4 Points</td>
                                    </tr>
                                    <tr className="bg-white dark:bg-gray-800 hover:bg-amber-50/30 dark:hover:bg-amber-900/10 transition-colors">
                                        <td className="px-6 py-4 font-medium">4th Place</td>
                                        <td className="px-6 py-4 text-right font-bold text-gray-900 dark:text-white">2 Points</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </motion.div>
                </section>

                {/* Section 3: Sports & Events */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={containerVariants}
                    id="sports"
                    className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100 dark:border-gray-700 relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-purple-50 rounded-full -mr-32 -mt-32 opacity-50 blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-50 rounded-full -ml-32 -mb-32 opacity-50 blur-3xl"></div>

                    <motion.div variants={itemVariants} className="flex items-center mb-10 relative z-10">
                        <div className="p-3 bg-purple-100 rounded-xl mr-4">
                            <Calendar className="h-8 w-8 text-purple-600" />
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Sports & Events</h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-12 relative z-10">
                        <motion.div variants={itemVariants}>
                            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-6 flex items-center">
                                <span className="w-1.5 h-8 bg-blue-500 rounded-full mr-3"></span>
                                Men's Events
                            </h3>
                            <div className="grid grid-cols-2 gap-3">
                                {['Athletics', 'Badminton', 'Basketball', 'Chess', 'Cricket', 'Football', 'Squash', 'Table Tennis', 'Volleyball', 'Weightlifting', 'Powerlifting', 'Yoga'].map(sport => (
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        key={sport}
                                        className="flex items-center text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700 hover:bg-blue-50 dark:hover:bg-gray-600 p-3 rounded-lg border border-gray-100 dark:border-gray-600 cursor-default transition-colors"
                                    >
                                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                                        <span className="font-medium">{sport}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                        <motion.div variants={itemVariants}>
                            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-6 flex items-center">
                                <span className="w-1.5 h-8 bg-pink-500 rounded-full mr-3"></span>
                                Women's Events
                            </h3>
                            <div className="grid grid-cols-2 gap-3">
                                {['Athletics', 'Badminton', 'Basketball', 'Chess', 'Cricket', 'Squash', 'Table Tennis', 'Volleyball', 'Powerlifting', 'Yoga'].map(sport => (
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        key={sport}
                                        className="flex items-center text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700 hover:bg-pink-50 dark:hover:bg-gray-600 p-3 rounded-lg border border-gray-100 dark:border-gray-600 cursor-default transition-colors"
                                    >
                                        <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
                                        <span className="font-medium">{sport}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </motion.section>

                {/* Section 5 & 6: Rules & Registration */}
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Rules Column */}
                    <div className="lg:col-span-1 space-y-8">
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            id="rules"
                            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border-t-4 border-red-500"
                        >
                            <div className="flex items-center mb-6">
                                <div className="p-2 bg-red-100 rounded-lg mr-3">
                                    <AlertCircle className="h-6 w-6 text-red-600" />
                                </div>
                                <h2 className="text-xl font-bold text-gray-900 dark:text-white">Eligibility Rules</h2>
                            </div>
                            <ul className="space-y-4 text-sm text-gray-600 dark:text-gray-300">
                                <li className="flex items-start">
                                    <span className="text-red-500 mr-2 font-bold text-lg">•</span>
                                    <span>Must use <strong>@iitdh.ac.in</strong> email ID.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-red-500 mr-2 font-bold text-lg">•</span>
                                    <span>Only <strong>Hostel 1</strong> and <strong>Hostel 2</strong> residents eligible.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-red-500 mr-2 font-bold text-lg">•</span>
                                    <span><strong>Boys Limit:</strong> Max 3 sports.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-red-500 mr-2 font-bold text-lg">•</span>
                                    <span><strong>Girls Limit:</strong> Max 4 sports.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-red-500 mr-2 font-bold text-lg">•</span>
                                    <span>Duplicate registrations will be rejected.</span>
                                </li>
                            </ul>
                        </motion.section>

                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            id="governance"
                            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border-t-4 border-gray-600"
                        >
                            <div className="flex items-center mb-6">
                                <div className="p-2 bg-gray-100 rounded-lg mr-3">
                                    <Shield className="h-6 w-6 text-gray-600" />
                                </div>
                                <h2 className="text-xl font-bold text-gray-900 dark:text-white">Governance</h2>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 leading-relaxed">
                                Managed by the Sports Council. Referees' decisions are final and binding.
                            </p>
                            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                                <strong>Discipline:</strong> Unsporting behavior leads to immediate disqualification.
                            </p>
                        </motion.section>
                    </div>

                    {/* Registration Form Column */}
                    <div className="lg:col-span-2">
                        <motion.section
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            id="registration"
                        >
                            <RegistrationForm />
                        </motion.section>
                    </div>
                </div>

                {/* Authority Note */}
                <motion.section
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="bg-gray-900 rounded-2xl p-8 text-center border border-gray-800"
                >
                    <div className="flex justify-center mb-4">
                        <Info className="h-8 w-8 text-blue-400" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">Official Authority Note</h3>
                    <p className="text-gray-400 max-w-3xl mx-auto text-sm leading-relaxed">
                        All fixtures, results, and rankings displayed on this page are issued and approved by the <strong>IIT Dharwad Sports Council</strong>.
                        While we strive for accuracy, the decisions of the referees and official sports committee members are final and binding in all disputes.
                        The schedule is subject to change due to weather conditions or administrative reasons.
                    </p>
                </motion.section>

                {/* Closing Section */}
                <div className="text-center py-12">
                    <h2 className="text-3xl font-serif italic text-gray-300">
                        "One Institute. One Spirit. One Champion."
                    </h2>
                </div>

            </div>
        </div>
    );
};

export default GeneralChampionship;
