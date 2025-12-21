import React from 'react';
import { Clock, MapPin } from 'lucide-react';

const FacilityCard = ({ facility }) => {
    return (
        <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 flex flex-col md:flex-row h-full">
            <div className="md:w-2/5 h-48 md:h-auto relative overflow-hidden">
                <img
                    src={facility.image}
                    alt={facility.name}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
            </div>
            <div className="p-6 md:w-3/5 flex flex-col justify-between">
                <div>
                    <h3 className="text-xl font-bold text-primary mb-2">{facility.name}</h3>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                        {facility.description}
                    </p>
                </div>

                <div className="space-y-2 pt-4 border-t border-gray-100">
                    <div className="flex items-center text-sm text-gray-500">
                        <Clock className="h-4 w-4 mr-2 text-accent" />
                        <span>{facility.timings}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                        <MapPin className="h-4 w-4 mr-2 text-accent" />
                        <span>{facility.location}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FacilityCard;
