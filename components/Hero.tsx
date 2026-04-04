'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className='relative bg-gray-900 text-white py-16 md:py-24 overflow-hidden'>
      {/* Background Image */}
      <div className='absolute inset-0 z-0'>
        <Image
          src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/hero/hero-banner.jpeg`}
          alt='Hero Background'
          fill
          className='object-cover'
          priority
        />
        <div className='absolute inset-0 bg-black/60'></div>
      </div>

      {/* Content */}
      <div className='relative z-10 max-w-7xl mx-auto px-4 text-center'>
        <h1 className='text-4xl md:text-6xl font-bold mb-4'>
          Celebrate Your Dreams... with Nova Auditorium
        </h1>
        <p className='text-lg md:text-xl text-white mb-8 max-w-2xl mx-auto'>
          Unrivaled event spaces designed for all types of functions and
          celebrations
        </p>
        <div className='flex flex-col sm:flex-row gap-4 justify-center'>
          <button className='bg-white text-amber-700 px-8 py-3 rounded-lg font-semibold hover:bg-amber-50 transition'>
            Book Your Event
          </button>
          <Link
            href='/events'
            className='border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-amber-700 transition'
          >
            View Events Calendar
          </Link>
        </div>
      </div>
    </section>
  );
}
