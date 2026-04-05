'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/events', label: 'Events' },
    { href: '/floor-plan', label: 'Floor Plan' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className='sticky top-0 z-50 bg-white shadow-md'>
      <nav className='max-w-7xl mx-auto px-4 py-2 flex justify-between items-center'>
        {/* Logo */}
        <Link
          href='/'
          className='flex items-center gap-2 hover:opacity-80 transition duration-200'
        >
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/logo.png`}
            alt='Nova Auditorium'
            width={48}
            height={48}
            className='w-12 h-12 object-contain'
          />
          <span className='text-xl font-bold text-amber-700 hidden sm:inline'>
            Nova Auditorium
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className='hidden md:flex gap-8'>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className='text-gray-700 hover:text-amber-700 transition duration-200 font-medium'
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className='md:hidden text-2xl'
          aria-label='Toggle menu'
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='md:hidden bg-white border-t border-gray-200'>
          <div className='px-4 py-4 space-y-3'>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className='block text-gray-700 hover:text-amber-700 transition font-medium py-2'
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
