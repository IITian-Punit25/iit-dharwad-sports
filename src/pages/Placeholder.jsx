import React from 'react';

const Placeholder = ({ title }) => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-primary mb-4">{title}</h1>
                <p className="text-gray-600">This page is under construction.</p>
            </div>
        </div>
    );
};

export default Placeholder;
