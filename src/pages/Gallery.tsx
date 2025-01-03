import React, { useState } from 'react';
import { X } from 'lucide-react';

const galleryImages = {
  exterior: [
    '/indoor-1.jpg',
    '/indoor-4.jpg',
    '/indoor-2.jpg',
    '/indoor-3.jpg',
  ],
  rooms: [
    '/room-1.jpg',
    '/room-3.jpg',
    '/room-2.jpg',
    '/room-4.jpg',
  ],
  bushBar: [
    '/bushbar-2.jpg',
    '/bushbar-1.jpg',
    './bushbar-3.jpg',
    ],
  eventHall: [
    '/hall-3.jpg',
    '/hall-2.jpg',
    '/hall-1.jpg',
    '/hall-4.jpg',
  ],
};

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen pt-20 bg-white">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-serif text-center mb-12">Our Gallery</h1>

        {/* Sections */}
        {Object.entries(galleryImages).map(([section, images]) => (
          <div key={section} className="mb-16">
            <h2 className="text-2xl font-serif capitalize mb-8">{section === 'bushBar' ? 'Bush Bar' : section === 'eventHall' ? 'Event Hall' : section}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-lg cursor-pointer group"
                  onClick={() => setSelectedImage(image)}
                >
                  <img
                    src={image}
                    alt={`${section} ${index + 1}`}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white"
            onClick={() => setSelectedImage(null)}
          >
            <X className="h-8 w-8" />
          </button>
          <img
            src={selectedImage}
            alt="Selected"
            className="max-w-[90vw] max-h-[90vh] object-contain"
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;