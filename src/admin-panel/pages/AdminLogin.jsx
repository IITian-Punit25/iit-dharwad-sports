import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, Mail, Server, AlertCircle, Loader2 } from 'lucide-react';
import api from '../api';

const AdminLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [serverStatus, setServerStatus] = useState('checking'); // checking, online, offline
    const navigate = useNavigate();

    useEffect(() => {
        const checkServer = async () => {
            try {
                // Try to hit a public endpoint to check connectivity
                await api.get('/events');
                setServerStatus('online');
            } catch (err) {
                console.error('Server check failed:', err);
                setServerStatus('offline');
            }
        };
        checkServer();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        try {
            const res = await api.post('/admin/login', { email, password });
            localStorage.setItem('adminToken', res.data.token);
            navigate('/admin/dashboard');
        } catch (err) {
            console.error('Login Error:', err);
            let msg = 'Login failed';

            if (err.response) {
                // Server responded with error
                msg = err.response.data.message || 'Invalid credentials';
            } else if (err.request) {
                // Request made but no response
                msg = 'Server unreachable. Please check your connection.';
            } else {
                msg = err.message;
            }

            setError(msg);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4">
            <div className="max-w-md w-full bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-700">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-white mb-2">Admin Login</h2>
                    <p className="text-slate-400">Sign in to manage the GC portal</p>
                </div>

                {/* Server Status Indicator */}
                <div className={`mb-6 p-3 rounded-lg flex items-center justify-center gap-2 text-sm ${serverStatus === 'online' ? 'bg-green-500/10 text-green-400 border border-green-500/20' :
                        serverStatus === 'offline' ? 'bg-red-500/10 text-red-400 border border-red-500/20' :
                            'bg-slate-700/50 text-slate-400 border border-slate-600'
                    }`}>
                    <Server className="h-4 w-4" />
                    <span>
                        {serverStatus === 'online' ? 'System Online' :
                            serverStatus === 'offline' ? 'System Offline / Unreachable' :
                                'Checking System Status...'}
                    </span>
                </div>

                {error && (
                    <div className="bg-red-500/10 border border-red-500/50 text-red-500 p-3 rounded-lg mb-6 text-sm flex items-center gap-2">
                        <AlertCircle className="h-4 w-4 flex-shrink-0" />
                        <span>{error}</span>
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">Email Address</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Mail className="h-5 w-5 text-slate-500" />
                            </div>
                            <input
                                type="email"
                                required
                                className="block w-full pl-10 pr-3 py-2 border border-slate-600 rounded-lg bg-slate-900 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="admin@iitdh.ac.in"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                disabled={isLoading}
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">Password</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Lock className="h-5 w-5 text-slate-500" />
                            </div>
                            <input
                                type="password"
                                required
                                className="block w-full pl-10 pr-3 py-2 border border-slate-600 rounded-lg bg-slate-900 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                disabled={isLoading}
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isLoading ? (
                            <>
                                <Loader2 className="animate-spin -ml-1 mr-2 h-4 w-4" />
                                Signing In...
                            </>
                        ) : (
                            'Sign In'
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AdminLogin;
