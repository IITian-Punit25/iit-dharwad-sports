import React from 'react';
import { Mail, Phone, MapPin, Clock, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

// Staff Images
import prabhuImg from '../assets/images/prabhu.jpg';
import rajeshwaraImg from '../assets/images/rajeshwara.jpg';
import keerthiImg from '../assets/images/keerthi.jpg';
import sonttiImg from '../assets/images/sontti.jpg';
import raviImg from '../assets/images/ravi.jpg';
import rameshImg from '../assets/images/ramesh.png';

// Facility Images for Showcase
import heroImg from '../assets/images/contact-hero.jpg';
import badmintonImg from '../assets/images/badminton.png';
import basketballImg from '../assets/images/basketball.png';
import cricketImg from '../assets/images/cricket.png';
import gymImg from '../assets/images/gym.png';

const councilMembers = [
    {
        name: 'Prof R Prabhu',
        role: 'Dean SW',
        email: 'deansw@iitdh.ac.in',
        phone: '',
        image: prabhuImg,
    },
    {
        name: 'Prof Rajeshwara Rao M',
        role: 'Associate Dean SW',
        email: 'adean.sw.gymkhana@iitdh.ac.in',
        phone: '',
        image: rajeshwaraImg,
    },
    {
        name: 'Dr. Keerthi kumar',
        role: 'Sports Officer',
        email: 'keerthi.kumar@iitdh.ac.in',
        phone: '',
        image: keerthiImg,
    },
    {
        name: 'Dr Sontti Goud',
        role: 'FiC HPC and Sports',
        email: 'fic.sw.sports@iitdh.ac.in',
        phone: '',
        image: sonttiImg,
    },
    {
        name: 'Ravi Shivprakash Galimath',
        role: 'Junior Sports Officer',
        email: 'ravi@iitdh.ac.in',
        phone: '',
        image: raviImg,
    },
    {
        name: 'Gundaveni Ramesh',
        role: 'Junior Sports Officer',
        email: 'rameshg@iitdh.ac.in',
        phone: '',
        image: rameshImg,
    },
];

const facilities = [
    { name: 'Cricket Ground', image: cricketImg },
    { name: 'Badminton Court', image: badmintonImg },
    { name: 'Basketball Court', image: basketballImg },
    { name: 'Gymnasium', image: gymImg },
];

const Contact = () => {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-900">
            {/* Hero Section with Parallax */}
            <div className="relative h-[60vh] overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-fixed"
                    style={{ backgroundImage: `url(${heroImg})` }}
                >
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
                </div>
                <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight"
                    >
                        GET IN <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-accent">TOUCH</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl md:text-2xl text-gray-200 font-light max-w-3xl"
                    >
                        Connect with the team powering sports excellence at IIT Dharwad.
                    </motion.p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10 pb-24">
                {/* Contact Info Cards */}
                <div className="grid md:grid-cols-2 gap-6 mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl p-8 md:p-10 rounded-3xl shadow-2xl border border-white/20 dark:border-gray-700 flex flex-col justify-center min-h-[300px]"
                    >
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
                            <MapPin className="w-8 h-8 text-primary" />
                            Visit Us
                        </h2>
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Location</h3>
                                <p className="text-xl text-gray-800 dark:text-gray-200 font-medium leading-relaxed">
                                    Gymkhana, Indoor facility,<br />
                                    IIT Dharwad permanent campus
                                </p>
                            </div>
                            <div>
                                <h3 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Office Hours</h3>
                                <p className="text-lg text-gray-700 dark:text-gray-300">
                                    Mon - Fri: 9:00 AM - 5:00 PM<br />
                                    Sat: 9:00 AM - 1:00 PM
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="rounded-3xl overflow-hidden shadow-2xl h-[300px] md:h-auto relative group"
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3845.854924853036!2d74.9867863148503!3d15.48843998924248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb8d3a4b5b5b5b5%3A0x5b5b5b5b5b5b5b5b!2sIndian%20Institute%20of%20Technology%20Dharwad!5e0!3m2!1sen!2sin!4v1625641234567!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            title="IIT Dharwad Map"
                            className="absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-700"
                        ></iframe>
                    </motion.div>
                </div>

                {/* Staff Section */}
                <div className="mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-4">SPORTS COUNCIL</h2>
                        <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {councilMembers.map((member, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                                className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
                            >
                                <div className="h-80 overflow-hidden relative">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent z-10 opacity-100"></div>
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                                    />

                                    <div className="absolute bottom-0 left-0 right-0 p-6 z-20 text-white">
                                        <h3 className="text-2xl font-bold mb-1 text-white">{member.name}</h3>
                                        <p className="text-white font-medium tracking-wide text-sm uppercase">{member.role}</p>
                                    </div>
                                </div>
                                <div className="p-6 bg-white dark:bg-gray-800 relative z-20">
                                    <a
                                        href={`mailto:${member.email}`}
                                        className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-white transition-colors group/link"
                                    >
                                        <div className="w-10 h-10 rounded-full bg-purple-50 dark:bg-purple-900/20 flex items-center justify-center text-primary dark:text-purple-300 group-hover/link:bg-primary group-hover/link:text-white transition-all">
                                            <Mail className="w-5 h-5" />
                                        </div>
                                        <span className="font-medium text-sm truncate">{member.email}</span>
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Contact;
