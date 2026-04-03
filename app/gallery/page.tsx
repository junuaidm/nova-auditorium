'use client';

import Image from 'next/image';
import basePath from '@/lib/getBasePath';

export default function Gallery() {
  const images = [
    {
      id: 1,
      title: 'Conference Hall',
      src: `${basePath}/images/gallery/conference-hall.jpeg`,
      category: 'Business',
    },
    {
      id: 2,
      title: 'Grand Ballroom',
      src: `${basePath}/images/gallery/grand-ballroom.jpeg`,
      category: 'Weddings',
    },
    {
      id: 3,
      title: 'Exhibition Area',
      src: `${basePath}/images/gallery/exhibition-area.jpeg`,
      category: 'Trade',
    },
    {
      id: 4,
      title: 'Dining Hall',
      src: `${basePath}/images/gallery/dining-hall.jpeg`,
      category: 'Catering',
    },
    {
      id: 5,
      title: 'Outdoor Venue',
      src: `${basePath}/images/gallery/outdoor-venue.jpeg`,
      category: 'Events',
    },
    {
      id: 6,
      title: 'Green Room',
      src: `${basePath}/images/gallery/green-room.jpg`,
      category: 'Hospitality',
    },
  ];

  return (
    <div className='max-w-7xl mx-auto px-4 py-16 md:py-24'>
      <h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center'>
        Gallery
      </h1>
      <p className='text-center text-gray-600 mb-12'>
        Explore our state-of-the-art facilities
      </p>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {images.map((image) => (
          <div
            key={image.id}
            className='group relative h-64 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300'
          >
            <Image
              src={image.src}
              alt={image.title}
              fill
              className='object-cover group-hover:scale-105 transition duration-300'
            />
            <div className='absolute inset-0 bg-black/0 group-hover:bg-black/40 transition'></div>
            <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4'>
              <p className='text-white font-semibold'>{image.title}</p>
              <p className='text-amber-400 text-sm'>{image.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
