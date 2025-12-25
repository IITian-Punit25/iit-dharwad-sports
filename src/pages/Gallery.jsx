import React, { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import cricketImg from '../assets/images/cricket.png';
import footballImg from '../assets/images/volleyball.png'; // Using volleyball as placeholder if football missing or specific map
import basketballImg from '../assets/images/basketball.png';
import badmintonImg from '../assets/images/badminton.png';
import volleyballImg from '../assets/images/volleyball.png';
import athleticsImg from '../assets/images/gym.png'; // Using gym as placeholder
import gymImg from '../assets/images/gym.png';
import chessImg from '../assets/images/chess.png';

const galleryImages = [
    { id: 1, src: cricketImg, category: 'Cricket' },
    { id: 2, src: footballImg, category: 'Football' },
    { id: 3, src: basketballImg, category: 'Basketball' },
    { id: 4, src: badmintonImg, category: 'Badminton' },
    { id: 5, src: volleyballImg, category: 'Volleyball' },
    { id: 6, src: athleticsImg, category: 'Athletics' },
    { id: 7, src: gymImg, category: 'Gym' },
    { id: 8, src: chessImg, category: 'Chess' },
];

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [filter, setFilter] = useState('All');

    const categories = ['All', ...new Set(galleryImages.map(img => img.category))];

    const filteredImages = filter === 'All'
        ? galleryImages
        : galleryImages.filter(img => img.category === filter);

    return (
        <div className="min-h-screen bg-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-black text-gray-900 mb-6 tracking-tight">Photo Gallery</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
                        Glimpses of sporting action and memorable moments at IIT Dharwad.
                    </p>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {categories.map(category => (
                        <button
                            key={category}
                            onClick={() => setFilter(category)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${filter === category
                                ? 'bg-primary text-white'
                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {filteredImages.map((image) => (
                        <div
                            key={image.id}
                            className="relative group cursor-pointer overflow-hidden rounded-lg aspect-square"
                            onClick={() => setSelectedImage(image)}
                        >
                            <img
                                src={image.src}
                                alt={image.category}
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                <ZoomIn className="text-white w-8 h-8" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm">
                    <button
                        onClick={() => setSelectedImage(null)}
                        className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
                    >
                        <X size={32} />
                    </button>
                    <div className="max-w-5xl max-h-[90vh] relative">
                        <img
                            src={selectedImage.src}
                            alt={selectedImage.category}
                            className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-4 text-center text-white bg-black/50 backdrop-blur-sm rounded-b-lg">
                            <span className="font-medium">{selectedImage.category}</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery;
