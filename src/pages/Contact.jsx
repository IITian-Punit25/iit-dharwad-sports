import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const councilMembers = [
    {
        name: 'Rahul Sharma',
        role: 'General Secretary',
        email: 'gsec.sports@iitdh.ac.in',
        phone: '+91 98765 43210',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400',
    },
    {
        name: 'Priya Patel',
        role: 'Deputy General Secretary',
        email: 'dgsec.sports@iitdh.ac.in',
        phone: '+91 98765 43211',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400',
    },
    {
        name: 'Amit Singh',
        role: 'Cricket Secretary',
        email: 'cricket.sec@iitdh.ac.in',
        phone: '+91 98765 43212',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
    },
    {
        name: 'Sneha Gupta',
        role: 'Badminton Secretary',
        email: 'badminton.sec@iitdh.ac.in',
        phone: '+91 98765 43213',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400',
    },
];

const Contact = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-primary mb-4">Contact Us</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Get in touch with the Sports Council for any queries or suggestions.
                    </p>
                </div>

                {/* Office Bearers Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                    {councilMembers.map((member, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center hover:shadow-md transition-shadow">
                            <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-gray-100">
                                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                            </div>
                            <h3 className="text-lg font-bold text-primary mb-1">{member.name}</h3>
                            <p className="text-accent text-sm font-medium mb-4">{member.role}</p>
                            <div className="space-y-2 text-sm text-gray-600">
                                <div className="flex items-center justify-center gap-2">
                                    <Mail className="w-4 h-4" />
                                    <a href={`mailto:${member.email}`} className="hover:text-primary">{member.email}</a>
                                </div>
                                <div className="flex items-center justify-center gap-2">
                                    <Phone className="w-4 h-4" />
                                    <span>{member.phone}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Map and Info */}
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                        <h2 className="text-2xl font-bold text-primary mb-6">Visit Us</h2>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="bg-blue-50 p-3 rounded-lg">
                                    <MapPin className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-1">Sports Complex Office</h3>
                                    <p className="text-gray-600">
                                        Room 101, Student Activity Center,<br />
                                        IIT Dharwad, WALMI Campus,<br />
                                        Belur Industrial Area, Dharwad - 580011
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="bg-blue-50 p-3 rounded-lg">
                                    <Clock className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-1">Office Hours</h3>
                                    <p className="text-gray-600">
                                        Monday - Friday: 9:00 AM - 5:00 PM<br />
                                        Saturday: 9:00 AM - 1:00 PM
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Map Placeholder */}
                    <div className="bg-gray-200 rounded-xl overflow-hidden h-80 md:h-auto relative">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3845.854924853036!2d74.9867863148503!3d15.48843998924248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb8d3a4b5b5b5b5%3A0x5b5b5b5b5b5b5b5b!2sIIT%20Dharwad!5e0!3m2!1sen!2sin!4v1625641234567!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            title="IIT Dharwad Map"
                            className="absolute inset-0"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Helper component for Clock icon since it wasn't imported
import { Clock } from 'lucide-react';

export default Contact;
