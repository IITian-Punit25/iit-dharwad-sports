import React from 'react';
import FacilityCard from '../components/facilities/FacilityCard';

import cricketImg from '../assets/images/cricket.png';
import badmintonImg from '../assets/images/badminton.png';
import basketballImg from '../assets/images/basketball.png';
import gymImg from '../assets/images/gym.png';
import ttImg from '../assets/images/tt.png';

const facilitiesData = [
    {
        id: 1,
        name: 'Main Cricket Ground',
        image: cricketImg,
        description: 'A full-sized cricket ground with well-maintained turf wickets and practice nets. Hosts inter-departmental and inter-college matches.',
        timings: '6:00AM - 12:00PM',
        location: 'Indoor Facility, IIT Dharwad Permanent Campus, Dharwad – 580007',
    },
    {
        id: 2,
        name: 'Football Field',
        image: cricketImg, // Using cricket ground as fallback for now
        description: 'Standard size football field with natural grass surface. Equipped with floodlights for evening practice sessions.',
        timings: '6:00AM - 12:00PM',
        location: 'Indoor Facility, IIT Dharwad Permanent Campus, Dharwad – 580007',
    },
    {
        id: 3,
        name: 'Indoor Badminton Court',
        image: badmintonImg,
        description: 'Three synthetic courts with professional lighting and non-marking flooring. Requires prior booking.',
        timings: '6:00AM - 12:00PM',
        location: 'Indoor Facility, IIT Dharwad Permanent Campus, Dharwad – 580007',
    },
    {
        id: 4,
        name: 'Basketball Court',
        image: basketballImg,
        description: 'Outdoor synthetic court with fibreglass backboards. Popular spot for evening pickup games.',
        timings: '6:00AM - 12:00PM',
        location: 'Indoor Facility, IIT Dharwad Permanent Campus, Dharwad – 580007',
    },
    {
        id: 5,
        name: 'Gymnasium',
        image: gymImg,
        description: 'Well-equipped gym with cardio machines, free weights, and strength training equipment. Trainers available.',
        timings: '6:00AM - 12:00PM',
        location: 'Indoor Facility, IIT Dharwad Permanent Campus, Dharwad – 580007',
    },
    {
        id: 6,
        name: 'Table Tennis Hall',
        image: ttImg,
        description: 'Dedicated hall with 6 ITTF approved tables and robot machine for practice.',
        timings: '6:00AM - 12:00PM',
        location: 'Indoor Facility, IIT Dharwad Permanent Campus, Dharwad – 580007',
    },
];

const Facilities = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-primary mb-4">Sports Facilities</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        World-class infrastructure to support your athletic journey.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {facilitiesData.map((facility) => (
                        <FacilityCard key={facility.id} facility={facility} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Facilities;
