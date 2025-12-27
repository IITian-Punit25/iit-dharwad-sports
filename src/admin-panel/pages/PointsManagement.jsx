import React, { useState, useEffect } from 'react';
import AdminSidebar from '../components/AdminSidebar';
import api from '../api';
import { Plus, Trash2, Edit2, X, Check } from 'lucide-react';

const PointsManagement = () => {
    const [points, setPoints] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        hostel: '',
        category: 'Boys',
        gold: 0,
        silver: 0,
        bronze: 0,
        totalPoints: 0,
        eventsParticipated: 0
    });

    useEffect(() => {
        fetchPoints();
    }, []);

    // Auto-calculate points whenever medals change
    useEffect(() => {
        const points = (formData.gold * 10) + (formData.silver * 6) + (formData.bronze * 4);
        setFormData(prev => ({ ...prev, totalPoints: points }));
    }, [formData.gold, formData.silver, formData.bronze]);

    const fetchPoints = async () => {
        try {
            const res = await api.get('/points');
            setPoints(res.data);
            setLoading(false);
        } catch (err) {
            console.error('Error fetching points:', err);
            setLoading(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.post('/points', formData);
            setShowModal(false);
            setFormData({
                hostel: '',
                category: 'Boys',
                gold: 0,
                silver: 0,
                bronze: 0,
                totalPoints: 0,
                eventsParticipated: 0
            });
            fetchPoints();
        } catch (err) {
            console.error('Error saving points:', err);
            alert('Failed to save points');
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this entry?')) {
            try {
                await api.delete(`/points/${id}`);
                fetchPoints();
            } catch (err) {
                console.error('Error deleting points:', err);
            }
        }
    };

    const handleEdit = (entry) => {
        setFormData({
            hostel: entry.hostel,
            category: entry.category,
            gold: entry.gold,
            silver: entry.silver,
            bronze: entry.bronze,
            totalPoints: entry.totalPoints,
            eventsParticipated: entry.eventsParticipated
        });
        setShowModal(true);
    };

    return (
        <div className="flex min-h-screen bg-slate-50">
            <AdminSidebar />
            <div className="flex-1 ml-64 p-8">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">Points Table Management</h1>
                    <button
                        onClick={() => {
                            setFormData({
                                hostel: '',
                                category: 'Boys',
                                gold: 0,
                                silver: 0,
                                bronze: 0,
                                totalPoints: 0,
                                eventsParticipated: 0
                            });
                            setShowModal(true);
                        }}
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-blue-700 transition-colors"
                    >
                        <Plus className="w-5 h-5 mr-2" /> Add Entry
                    </button>
                </div>

                {loading ? (
                    <p>Loading points...</p>
                ) : (
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hostel</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">🥇 Gold</th>
                                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">🥈 Silver</th>
                                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">🥉 Bronze</th>
                                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Total Points</th>
                                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {points.map((entry) => (
                                    <tr key={entry._id}>
                                        <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">{entry.hostel}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-gray-500">{entry.category}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-center">{entry.gold}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-center">{entry.silver}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-center">{entry.bronze}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right font-bold text-blue-600">{entry.totalPoints}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <button onClick={() => handleEdit(entry)} className="text-indigo-600 hover:text-indigo-900 mr-4">
                                                <Edit2 className="w-5 h-5" />
                                            </button>
                                            <button onClick={() => handleDelete(entry._id)} className="text-red-600 hover:text-red-900">
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
                                <h2 className="text-2xl font-bold text-gray-900">Update Points Entry</h2>
                                <button onClick={() => setShowModal(false)} className="text-gray-500 hover:text-gray-700">
                                    <X className="w-6 h-6" />
                                </button>
                            </div>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Hostel Name</label>
                                        <input
                                            type="text"
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2"
                                            value={formData.hostel}
                                            onChange={(e) => setFormData({ ...formData, hostel: e.target.value })}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Category</label>
                                        <select
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2"
                                            value={formData.category}
                                            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                        >
                                            <option value="Boys">Boys</option>
                                            <option value="Girls">Girls</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="grid grid-cols-3 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Gold</label>
                                        <input
                                            type="number"
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2"
                                            value={formData.gold}
                                            onChange={(e) => setFormData({ ...formData, gold: parseInt(e.target.value) })}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Silver</label>
                                        <input
                                            type="number"
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2"
                                            value={formData.silver}
                                            onChange={(e) => setFormData({ ...formData, silver: parseInt(e.target.value) })}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Bronze</label>
                                        <input
                                            type="number"
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2"
                                            value={formData.bronze}
                                            onChange={(e) => setFormData({ ...formData, bronze: parseInt(e.target.value) })}
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Total Points</label>
                                        <input
                                            type="number"
                                            value={formData.totalPoints}
                                            readOnly
                                            className="mt-1 block w-full rounded-md border-gray-300 bg-gray-100 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2 cursor-not-allowed"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Events Participated</label>
                                        <input
                                            type="number"
                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2"
                                            value={formData.eventsParticipated}
                                            onChange={(e) => setFormData({ ...formData, eventsParticipated: parseInt(e.target.value) })}
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
                                        <Check className="w-4 h-4 mr-2" /> Save Entry
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

export default PointsManagement;
