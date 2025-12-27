import React, { useState } from 'react';

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        rollNumber: '',
        email: '',
        gender: '',
        hostel: '',
        sports: []
    });

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [loading, setLoading] = useState(false);

    const sportsList = {
        Boy: ['Athletics', 'Badminton', 'Basketball', 'Chess', 'Cricket', 'Football', 'Squash', 'Table Tennis', 'Volleyball', 'Weightlifting', 'Powerlifting', 'Yoga'],
        Girl: ['Athletics', 'Badminton', 'Basketball', 'Chess', 'Cricket', 'Squash', 'Table Tennis', 'Volleyball', 'Powerlifting', 'Yoga']
    };

    const currentSportsList = formData.gender ? sportsList[formData.gender] : [];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Reset sports if gender changes to enforce limits correctly
        if (name === 'gender') {
            setFormData(prev => ({ ...prev, sports: [] }));
        }
    };

    const handleSportChange = (sport) => {
        setFormData(prev => {
            const isSelected = prev.sports.includes(sport);
            if (isSelected) {
                return { ...prev, sports: prev.sports.filter(s => s !== sport) };
            } else {
                // Limit check
                const limit = prev.gender === 'Boy' ? 3 : prev.gender === 'Girl' ? 4 : 0;
                if (prev.sports.length >= limit) {
                    alert(`You can only select up to ${limit} sports.`);
                    return prev;
                }
                return { ...prev, sports: [...prev.sports, sport] };
            }
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');
        setLoading(true);

        // Frontend Validation
        if (!formData.email.endsWith('@iitdh.ac.in')) {
            setError('Email must end with @iitdh.ac.in');
            setLoading(false);
            return;
        }

        try {
            const response = await fetch('http://localhost:5000/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Registration failed');
            }

            setSuccess('Registration successful!');
            setFormData({
                fullName: '',
                rollNumber: '',
                email: '',
                gender: '',
                hostel: '',
                sports: []
            });
        } catch (err) {
            setError(err.message === 'Failed to fetch' ? 'Unable to connect to the server. Please ensure the backend is running.' : err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 relative">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
            <div className="p-8 md:p-10">
                <div className="text-center mb-10">
                    <h3 className="text-3xl font-extrabold text-gray-900 tracking-tight">Register for GC 2025</h3>
                    <p className="mt-3 text-gray-500 text-lg">Join the legacy. Represent your hostel.</p>
                </div>

                {error && (
                    <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6 rounded-r">
                        <p className="text-red-700 text-sm">{error}</p>
                    </div>
                )}

                {success && (
                    <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6 rounded-r">
                        <p className="text-green-700 text-sm">{success}</p>
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Full Name */}
                    {/* Full Name */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name</label>
                        <input
                            type="text"
                            name="fullName"
                            required
                            value={formData.fullName}
                            onChange={handleChange}
                            placeholder="Enter your full name"
                            className="mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        />
                    </div>

                    {/* Roll Number */}
                    {/* Roll Number */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Roll Number</label>
                        <input
                            type="text"
                            name="rollNumber"
                            required
                            value={formData.rollNumber}
                            onChange={handleChange}
                            placeholder="e.g., 21001001"
                            className="mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        />
                    </div>

                    {/* Email */}
                    {/* Email */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">College Email ID</label>
                        <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="example@iitdh.ac.in"
                            className="mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        />
                    </div>

                    {/* Gender & Hostel Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Gender</label>
                            <select
                                name="gender"
                                required
                                value={formData.gender}
                                onChange={handleChange}
                                className="mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                            >
                                <option value="">Select Gender</option>
                                <option value="Boy">Boy</option>
                                <option value="Girl">Girl</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Hostel</label>
                            <select
                                name="hostel"
                                required
                                value={formData.hostel}
                                onChange={handleChange}
                                className="mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                            >
                                <option value="">Select Hostel</option>
                                <option value="Hostel 1">Hostel 1</option>
                                <option value="Hostel 2">Hostel 2</option>
                            </select>
                        </div>
                    </div>

                    {/* Sports Selection */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-3">
                            Select Sports {formData.gender && <span className="text-blue-600 font-normal">(Max {formData.gender === 'Boy' ? 3 : 4})</span>}
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                            {currentSportsList.map(sport => (
                                <div key={sport} className="flex items-center p-2 border border-gray-100 rounded hover:bg-gray-50 transition-colors">
                                    <input
                                        type="checkbox"
                                        id={sport}
                                        checked={formData.sports.includes(sport)}
                                        onChange={() => handleSportChange(sport)}
                                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded cursor-pointer"
                                    />
                                    <label htmlFor={sport} className="ml-2 text-sm text-gray-700 cursor-pointer w-full">
                                        {sport}
                                    </label>
                                </div>
                            ))}
                        </div>
                        {!formData.gender && (
                            <p className="text-sm text-gray-500 italic mt-2">
                                Select a gender to view available sports.
                            </p>
                        )}
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full flex justify-center py-4 px-4 border border-transparent rounded-lg shadow-lg text-base font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all transform hover:-translate-y-0.5 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                        >
                            {loading ? (
                                <span className="flex items-center">
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Registering...
                                </span>
                            ) : 'Complete Registration'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RegistrationForm;
