import React, { useState, useEffect } from 'react';
import AdminSidebar from '../components/AdminSidebar';
import api from '../api';

const AdminDashboard = () => {
    const [stats, setStats] = useState({
        events: 0,
        matches: 0,
        registrations: 0
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const [eventsRes, scoresRes, registrationsRes] = await Promise.all([
                    api.get('/events'),
                    api.get('/scores'),
                    api.get('/admin/registrations')
                ]);

                setStats({
                    events: eventsRes.data.length,
                    matches: scoresRes.data.length,
                    registrations: registrationsRes.data.length
                });
                setLoading(false);
            } catch (err) {
                console.error('Error fetching dashboard stats:', err);
                setLoading(false);
            }
        };

        fetchStats();
    }, []);
    return (
        <div className="flex min-h-screen bg-slate-50">
            <AdminSidebar />
            <div className="flex-1 ml-64 p-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-8">Dashboard</h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="text-lg font-semibold text-gray-700 mb-2">Total Events</h3>
                        <p className="text-3xl font-bold text-blue-600">{loading ? '...' : stats.events}</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="text-lg font-semibold text-gray-700 mb-2">Completed Matches</h3>
                        <p className="text-3xl font-bold text-green-600">{loading ? '...' : stats.matches}</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="text-lg font-semibold text-gray-700 mb-2">Registrations</h3>
                        <p className="text-3xl font-bold text-purple-600">{loading ? '...' : stats.registrations}</p>
                    </div>
                </div>

                <div className="mt-12 bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Welcome to the GC Admin Panel</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Use the sidebar to manage events, update scores, modify the points table, and view student registrations.
                        All changes made here will be instantly reflected on the public website.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
