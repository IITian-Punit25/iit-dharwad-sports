import React from 'react';
import { Award, Star } from 'lucide-react';
import person1 from '../assets/images/keerthi.jpg';
import person2 from '../assets/images/prabhu.jpg';
import person3 from '../assets/images/ravi.jpg';

const hallOfFame = [
    {
        id: 1,
        name: 'Aditya Kumar',
        batch: '2019',
        sport: 'Athletics',
        achievement: 'Inter-IIT Gold Medalist (100m)',
        description: 'Set the institute record for 100m sprint at 10.8s. Represented IIT Dharwad at 3 consecutive Inter-IIT meets.',
        image: person1,
    },
    {
        id: 2,
        name: 'Riya Singh',
        batch: '2020',
        sport: 'Badminton',
        achievement: 'State Level Champion',
        description: 'Led the women\'s badminton team to their first Inter-IIT silver medal. Known for her exceptional tactical game.',
        image: person2,
    },
    {
        id: 3,
        name: 'Karthik R',
        batch: '2018',
        sport: 'Cricket',
        achievement: 'Best All-rounder',
        description: 'Scored over 500 runs and took 20 wickets in inter-college tournaments. Former Sports Secretary.',
        image: person3,
    },
];

const HallOfFame = () => {
    return (
        <div className="min-h-screen bg-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center p-3 bg-purple-100 rounded-full mb-4">
                        <Award className="w-8 h-8 text-primary" />
                    </div>
                    <h1 className="text-4xl font-bold text-primary mb-4">Hall of Fame</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Honoring the legends who have brought glory to IIT Dharwad.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {hallOfFame.map((person) => (
                        <div key={person.id} className="bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 group">
                            <div className="h-64 overflow-hidden relative">
                                <img
                                    src={person.image}
                                    alt={person.name}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
                                    <h3 className="text-2xl font-bold">{person.name}</h3>
                                    <p className="text-gray-300">Batch of {person.batch}</p>
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center gap-2 mb-4">
                                    <span className="px-3 py-1 bg-purple-100 text-primary text-xs font-bold uppercase tracking-wider rounded-full">
                                        {person.sport}
                                    </span>
                                    <span className="flex items-center text-secondary text-sm font-medium">
                                        <Star className="w-4 h-4 mr-1 fill-current" />
                                        {person.achievement}
                                    </span>
                                </div>
                                <p className="text-gray-600 leading-relaxed">
                                    {person.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HallOfFame;
