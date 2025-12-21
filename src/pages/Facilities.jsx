import React from 'react';
import FacilityCard from '../components/facilities/FacilityCard';

const facilitiesData = [
    {
        id: 1,
        name: 'Main Cricket Ground',
        image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80&w=800',
        description: 'A full-sized cricket ground with well-maintained turf wickets and practice nets. Hosts inter-departmental and inter-college matches.',
        timings: '6:00 AM - 6:30 PM',
        location: 'Sports Complex, North Campus',
    },
    {
        id: 2,
        name: 'Football Field',
        image: 'https://images.unsplash.com/photo-1459865264687-595d652de67e?auto=format&fit=crop&q=80&w=800',
        description: 'Standard size football field with natural grass surface. Equipped with floodlights for evening practice sessions.',
        timings: '5:30 AM - 9:00 PM',
        location: 'Sports Complex, South Campus',
    },
    {
        id: 3,
        name: 'Indoor Badminton Court',
        image: 'https://images.unsplash.com/photo-1626224583764-847649623dbb?auto=format&fit=crop&q=80&w=800',
        description: 'Three synthetic courts with professional lighting and non-marking flooring. Requires prior booking.',
        timings: '6:00 AM - 10:00 PM',
        location: 'Student Activity Center',
    },
    {
        id: 4,
        name: 'Basketball Court',
        image: 'https://images.unsplash.com/photo-1504450758481-7338eba7524a?auto=format&fit=crop&q=80&w=800',
        description: 'Outdoor synthetic court with fibreglass backboards. Popular spot for evening pickup games.',
        timings: '24/7 Access',
        location: 'Near Hostel Block A',
    },
    {
        id: 5,
        name: 'Gymnasium',
        image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800',
        description: 'Well-equipped gym with cardio machines, free weights, and strength training equipment. Trainers available.',
        timings: '5:00 AM - 9:00 AM, 4:00 PM - 10:00 PM',
        location: 'Student Activity Center, 1st Floor',
    },
    {
        id: 6,
        name: 'Table Tennis Hall',
        image: 'https://images.unsplash.com/photo-1534158914592-062992fbe900?auto=format&fit=crop&q=80&w=800',
        description: 'Dedicated hall with 6 ITTF approved tables and robot machine for practice.',
        timings: '10:00 AM - 10:00 PM',
        location: 'Common Room, Hostel Block B',
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
