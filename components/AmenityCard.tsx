'use client';

import { ReactNode } from 'react';

interface AmenityCardProps {
  title: string;
  description: string;
  icon: ReactNode;
}

export default function AmenityCard({
  title,
  description,
  icon,
}: AmenityCardProps) {
  return (
    <div className='bg-white rounded-lg shadow-md p-8 text-center hover:shadow-lg transition duration-300'>
      <div className='inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4 text-3xl'>
        {icon}
      </div>
      <h3 className='text-xl font-bold text-gray-900 mb-2'>{title}</h3>
      <p className='text-gray-600'>{description}</p>
    </div>
  );
}
