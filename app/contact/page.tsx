'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className='max-w-7xl mx-auto px-4 py-16 md:py-24'>
      <h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center'>
        Contact Us
      </h1>
      <p className='text-center text-gray-600 mb-12 max-w-2xl mx-auto'>
        Get in touch with our team to discuss your event requirements
      </p>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
        {/* Contact Form */}
        <div>
          <form
            onSubmit={handleSubmit}
            className='space-y-6'
          >
            <div>
              <label className='block text-gray-700 font-semibold mb-2'>
                Name
              </label>
              <input
                type='text'
                name='name'
                value={formData.name}
                onChange={handleChange}
                className='w-full px-6 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600'
                required
              />
            </div>
            <div>
              <label className='block text-gray-700 font-semibold mb-2'>
                Email
              </label>
              <input
                type='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                className='w-full px-6 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600'
                required
              />
            </div>
            <div>
              <label className='block text-gray-700 font-semibold mb-2'>
                Phone
              </label>
              <input
                type='tel'
                name='phone'
                value={formData.phone}
                onChange={handleChange}
                className='w-full px-6 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600'
              />
            </div>
            <div>
              <label className='block text-gray-700 font-semibold mb-2'>
                Message
              </label>
              <textarea
                name='message'
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className='w-full px-6 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600'
                required
              ></textarea>
            </div>
            <button
              type='submit'
              className='w-full bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition text-lg'
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className='space-y-8'>
          <div>
            <h2 className='text-2xl font-bold text-gray-900 mb-4'>
              Contact Information
            </h2>
            <div className='space-y-4'>
              <div>
                <h3 className='text-lg font-semibold text-gray-900 mb-1'>
                  Address
                </h3>
                <p className='text-gray-600'>
                  Palazhi Road
                  <br />
                  Kozhikode, Kerala - 673014
                  <br />
                  India
                </p>
              </div>
              <div>
                <h3 className='text-lg font-semibold text-gray-900 mb-1'>
                  Phone
                </h3>
                <p className='text-gray-600'>
                  <a
                    href='tel:+919544005916'
                    className='hover:text-blue-600'
                  >
                    +91 95440 05916
                  </a>
                  <br />
                  <a
                    href='tel:+919605401313'
                    className='hover:text-blue-600'
                  >
                    +91 96054 01313
                  </a>
                </p>
              </div>
              <div>
                <h3 className='text-lg font-semibold text-gray-900 mb-1'>
                  Email
                </h3>
                <p className='text-gray-600'>
                  <a
                    href='mailto:info@novaauditorium.com'
                    className='hover:text-blue-600'
                  >
                    info@novaauditorium.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className='text-2xl font-bold text-gray-900 mb-4'>
              Business Hours
            </h2>
            <div className='space-y-2 text-gray-600'>
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday: 10:00 AM - 4:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>

          <div>
            <h2 className='text-2xl font-bold text-gray-900 mb-4'>
              Connect With Us
            </h2>
            <div className='flex gap-4'>
              <a
                href='#'
                className='text-blue-600 hover:text-blue-700 font-semibold'
              >
                Facebook
              </a>
              <a
                href='#'
                className='text-pink-600 hover:text-pink-700 font-semibold'
              >
                Instagram
              </a>
              <a
                href='#'
                className='text-red-600 hover:text-red-700 font-semibold'
              >
                YouTube
              </a>
              <a
                href='#'
                className='text-green-600 hover:text-green-700 font-semibold'
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
