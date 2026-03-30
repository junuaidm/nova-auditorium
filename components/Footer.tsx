'use client';

import Link from 'next/link';
import { FaFacebook, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className='bg-gray-900 text-white mt-16'>
      <div className='max-w-7xl mx-auto px-4 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-8'>
          {/* Location Info */}
          <div>
            <h3 className='text-xl font-bold text-blue-400 mb-4'>
              Get in Touch
            </h3>
            <p className='text-gray-300 mb-2'>Near Hilite Mall, Palazhi Road</p>
            <p className='text-gray-300 mb-2'>
              Palazhi, Kozhikode, Kerala - 673014
            </p>
            <p className='text-gray-300 mb-2'>
              <a
                href='tel:+919544005916'
                className='hover:text-blue-400'
              >
                +91 9544005916
              </a>
            </p>
            <p className='text-gray-300'>
              <a
                href='tel:+919605401313'
                className='hover:text-blue-400'
              >
                +91 9605401313
              </a>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className='text-xl font-bold text-blue-400 mb-4'>
              Quick Links
            </h3>
            <ul className='space-y-2'>
              <li>
                <Link
                  href='/about'
                  className='text-gray-300 hover:text-amber-400'
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href='/services'
                  className='text-gray-300 hover:text-amber-400'
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href='/gallery'
                  className='text-gray-300 hover:text-amber-400'
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href='/events'
                  className='text-gray-300 hover:text-amber-400'
                >
                  Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h3 className='text-xl font-bold text-blue-400 mb-4'>Newsletter</h3>
            <p className='text-gray-300 mb-4'>
              Subscribe for updates and offers
            </p>
            <form className='flex gap-2 mb-6'>
              <input
                type='email'
                placeholder='Your email'
                className='flex-1 px-4 py-2 rounded text-gray-900'
                required
              />
              <button
                type='submit'
                className='bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded font-semibold transition'
              >
                Sign Up
              </button>
            </form>

            {/* Social Links */}
            <div className='flex gap-4'>
              <a
                href='#'
                className='text-gray-300 hover:text-blue-400 text-2xl'
              >
                <FaFacebook />
              </a>
              <a
                href='#'
                className='text-gray-300 hover:text-blue-400 text-2xl'
              >
                <FaInstagram />
              </a>
              <a
                href='#'
                className='text-gray-300 hover:text-blue-400 text-2xl'
              >
                <FaYoutube />
              </a>
              <a
                href='#'
                className='text-gray-300 hover:text-blue-400 text-2xl'
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className='border-t border-gray-700 pt-8 text-center text-gray-400'>
          <p>&copy; 2026 Nova Auditorium. All rights reserved.</p>
          <p className='mt-2 text-sm'>
            Built with Next.js & hosted on GitHub Pages
          </p>
        </div>
      </div>
    </footer>
  );
}
