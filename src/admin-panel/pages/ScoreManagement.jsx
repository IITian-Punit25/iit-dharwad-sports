import React, { useState, useEffect } from 'react';
import AdminSidebar from '../components/AdminSidebar';
import api from '../api';
import { Plus, Trash2, Edit2, X, Check } from 'lucide-react';

const ScoreManagement = () => {
    const [events, setEvents] = useState([]);
    const [scores, setScores] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        eventId: '',
        score: '',
        winner: '',
        resultDetails: '',
        pointsAwarded: { winner: 10, runnerUp: 6 }
    });

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const [eventsRes, scoresRes] = await Promise.all([
                api.get('/events'),
                api.get('/scores')
            ]);
            setEvents(eventsRes.data);
            setScores(scoresRes.data);
            setLoading(false);
        } catch (err) {
            console.error('Error fetching data:', err);
            setLoading(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.post('/scores', formData);
            setShowModal(false);
            setFormData({
                eventId: '',
                score: '',
                winner: '',
                resultDetails: '',
                pointsAwarded: { winner: 10, runnerUp: 6 }
            });
            fetchData();
        } catch (err) {
            console.error('Error saving score:', err);
            alert('Failed to save score');
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this score?')) {
            try {
                await api.delete(`/scores/${id}`);
                fetchData();
            } catch (err) {
                console.error('Error deleting score:', err);
            }
        }
    };

    const handleEdit = (score) => {
        setFormData({
            eventId: score.eventId._id,
            score: score.score,
            winner: score.winner,
            resultDetails: score.resultDetails,
            pointsAwarded: score.pointsAwarded
        });
        setShowModal(true);
    };

    return (
        <div className="flex min-h-screen bg-slate-50">
            <AdminSidebar />
            <div className="flex-1 ml-64 p-8">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">Score Management</h1>
                    <button
                        onClick={() => {
                            setFormData({
                                eventId: '',
                                score: '',
                                winner: '',
                                resultDetails: '',
                                pointsAwarded: { winner: 10, runnerUp: 6 }
                            });
                            setShowModal(true);
                        }}
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-blue-700 transition-colors"
                    >
                        <Plus className="w-5 h-5 mr-2" /> Add Score
                    </button>
                </div>

                {loading ? (
                    <p>Loading scores...</p>
                ) : (
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Event</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Score</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Winner</th>
                                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {scores.map((score) => (
                                    <tr key={score._id}>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm font-medium text-gray-900">
                                                {score.eventId ? `${score.eventId.team1} vs ${score.eventId.team2}` : 'Unknown Event'}
                                            </div>
                                            <div className="text-sm text-gray-500">
                                                {score.eventId ? `${score.eventId.sport} - ${score.eventId.stage}` : ''}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm font-bold text-gray-900">{score.score}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                {score.winner}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <button onClick={() => handleEdit(score)} className="text-indigo-600 hover:text-indigo-900 mr-4">
                                                <Edit2 className="w-5 h-5" />
                                            </button>
                                            <button onClick={() => handleDelete(score._id)} className="text-red-600 hover:text-red-900">
                                                <Trash2 className="w-5 h-5" />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

                {/* Modal */}
                {showModal && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                        <div className="bg-white rounded-xl p-8 max-w-2xl w-full">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-2xl font-bold text-gray-900">Update Score</h2>
                                <button onClick={() => setShowModal(false)} className="text-gray-500 hover:text-gray-700">
                                    <X className="w-6 h-6" />
                                </button>
                            </div>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Select Event</label>
                                    <select
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2"
                                        value={formData.eventId}
                                        onChange={(e) => setFormData({ ...formData, eventId: e.target.value })}
                                        required
                                    >
                                        <option value="">Select an event...</option>
                                        {events.map(event => (
                                            <option key={event._id} value={event._id}>
                                                {event.sport} - {event.team1} vs {event.team2} ({event.date})
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Score</label>
                                    <input
                                        type="text"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2"
                                        placeholder="e.g. 3 - 1"
                                        value={formData.score}
                                        onChange={(e) => setFormData({ ...formData, score: e.target.value })}
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Winner</label>
                                    <input
                                        type="text"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2"
                                        value={formData.winner}
                                        onChange={(e) => setFormData({ ...formData, winner: e.target.value })}
                                        required
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Points for Winner</label>
                                        <input
                                            type="number"
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2"
                                            value={formData.pointsAwarded.winner}
                                            onChange={(e) => setFormData({ ...formData, pointsAwarded: { ...formData.pointsAwarded, winner: e.target.value } })}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Points for Runner-up</label>
                                        <input
                                            type="number"
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2"
                                            value={formData.pointsAwarded.runnerUp}
                                            onChange={(e) => setFormData({ ...formData, pointsAwarded: { ...formData.pointsAwarded, runnerUp: e.target.value } })}
                                        />
                                    </div>
                                </div>

                                <div className="flex justify-end space-x-3 mt-6">
                                    <button
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                        className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center"
                                    >
                                        <Check className="w-4 h-4 mr-2" /> Save Score
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ScoreManagement;
