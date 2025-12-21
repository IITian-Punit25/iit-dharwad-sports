import React, { useState } from 'react';
import { CheckCircle, AlertCircle } from 'lucide-react';

const Join = () => {
    const [formData, setFormData] = useState({
        name: '',
        rollNumber: '',
        email: '',
        sport: '',
        experience: 'Beginner',
        message: '',
    });

    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        // Clear error when user types
        if (errors[name]) {
            setErrors({ ...errors, [name]: '' });
        }
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.rollNumber.trim()) newErrors.rollNumber = 'Roll Number is required';
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
        if (!formData.sport) newErrors.sport = 'Please select a sport';
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            // Simulate API call
            console.log('Form submitted:', formData);
            setIsSubmitted(true);
            window.scrollTo(0, 0);
        }
    };

    if (isSubmitted) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
                <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-primary mb-4">Registration Successful!</h2>
                    <p className="text-gray-600 mb-8">
                        Thank you for registering for {formData.sport}. The sports secretary will contact you shortly regarding the trials/practice sessions.
                    </p>
                    <button
                        onClick={() => setIsSubmitted(false)}
                        className="bg-primary text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
                    >
                        Register Another
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-primary mb-4">Join a Team</h1>
                    <p className="text-xl text-gray-600">
                        Fill out the form below to register your interest for sports activities.
                    </p>
                </div>

                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            {/* Name */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all`}
                                    placeholder="Enter your name"
                                />
                                {errors.name && <p className="mt-1 text-sm text-red-500 flex items-center"><AlertCircle className="w-4 h-4 mr-1" />{errors.name}</p>}
                            </div>

                            {/* Roll Number */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Roll Number</label>
                                <input
                                    type="text"
                                    name="rollNumber"
                                    value={formData.rollNumber}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 rounded-lg border ${errors.rollNumber ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all`}
                                    placeholder="e.g., 21001001"
                                />
                                {errors.rollNumber && <p className="mt-1 text-sm text-red-500 flex items-center"><AlertCircle className="w-4 h-4 mr-1" />{errors.rollNumber}</p>}
                            </div>
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all`}
                                placeholder="student@iitdh.ac.in"
                            />
                            {errors.email && <p className="mt-1 text-sm text-red-500 flex items-center"><AlertCircle className="w-4 h-4 mr-1" />{errors.email}</p>}
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            {/* Sport Selection */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Select Sport</label>
                                <select
                                    name="sport"
                                    value={formData.sport}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 rounded-lg border ${errors.sport ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-white`}
                                >
                                    <option value="">Choose a sport...</option>
                                    <option value="Cricket">Cricket</option>
                                    <option value="Football">Football</option>
                                    <option value="Basketball">Basketball</option>
                                    <option value="Badminton">Badminton</option>
                                    <option value="Volleyball">Volleyball</option>
                                    <option value="Athletics">Athletics</option>
                                    <option value="Table Tennis">Table Tennis</option>
                                    <option value="Chess">Chess</option>
                                </select>
                                {errors.sport && <p className="mt-1 text-sm text-red-500 flex items-center"><AlertCircle className="w-4 h-4 mr-1" />{errors.sport}</p>}
                            </div>

                            {/* Experience Level */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Experience Level</label>
                                <select
                                    name="experience"
                                    value={formData.experience}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-white"
                                >
                                    <option value="Beginner">Beginner</option>
                                    <option value="Intermediate">Intermediate (School Level)</option>
                                    <option value="Advanced">Advanced (District/State Level)</option>
                                    <option value="Pro">Pro (National Level)</option>
                                </select>
                            </div>
                        </div>

                        {/* Message */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Additional Message (Optional)</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="4"
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                                placeholder="Tell us about your past achievements or specific interests..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-primary text-white font-bold py-4 rounded-lg hover:bg-blue-700 transition-colors shadow-lg transform hover:-translate-y-1 duration-200"
                        >
                            Submit Registration
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Join;
