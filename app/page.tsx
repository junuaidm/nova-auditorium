'use client';

import Image from 'next/image';
import basePath from '@/lib/getBasePath';
import Hero from '@/components/Hero';
import EventTypeCard from '@/components/EventTypeCard';
import AmenityCard from '@/components/AmenityCard';
import {
  FiMic,
  FiTrendingUp,
  FiAward,
  FiMapPin,
  FiSliders,
  FiTarget,
} from 'react-icons/fi';

const eventTypes = [
  {
    title: 'Wedding',
    description:
      'Elevate your wedding celebrations to the next level & make memories of a lifetime with our elegant spaces.',
    icon: '💒',
    color: 'border-pink-500',
    image: `${basePath}/images/events/wedding.jpeg`,
  },
  {
    title: 'Engagement Ceremony',
    description:
      'Celebrate your engagement with grace and elegance at our beautifully designed venue.',
    icon: '💍',
    color: 'border-rose-500',
    image: `${basePath}/images/events/engagement-ceremony.jpeg`,
  },
  {
    title: 'Business Meetings',
    description:
      'Professional spaces designed for executive meetings, boardroom sessions, and corporate gatherings.',
    icon: '🤝',
    color: 'border-blue-500',
    image: `${basePath}/images/events/business-meetings.jpeg`,
  },
  {
    title: 'Family Meetings',
    description:
      'Comfortable and welcoming spaces for family gatherings, reunions, and get-togethers.',
    icon: '👨‍👩‍👧‍👦',
    color: 'border-green-500',
    image: `${basePath}/images/events/family-meetings.jpeg`,
  },
  {
    title: 'Corporate Events',
    description:
      'Host impressive corporate events, product launches, and team celebrations with full amenities.',
    icon: '🏢',
    color: 'border-indigo-500',
    image: `${basePath}/images/events/corporate-events.jpeg`,
  },
  {
    title: 'Conference',
    description:
      'A truly engaging space to inspire your entrepreneurial spirit and host professional conferences.',
    icon: '🎤',
    color: 'border-cyan-500',
    image: `${basePath}/images/events/conference.jpeg`,
  },
  {
    title: 'Royal Get Together',
    description:
      'Exclusive and luxurious spaces for premium events and special gatherings of high distinction.',
    icon: '👑',
    color: 'border-yellow-500',
    image: `${basePath}/images/events/royal-get-together.jpeg`,
  },
  {
    title: 'Birthday Parties',
    description:
      'Create unforgettable birthday celebrations with our versatile event spaces and full services.',
    icon: '🎉',
    color: 'border-purple-500',
    image: `${basePath}/images/events/birthday-parties.jpeg`,
  },
  {
    title: 'School & College Day',
    description:
      'Perfect venue for annual days, farewell functions, and educational institution events.',
    icon: '🎓',
    color: 'border-orange-500',
    image: `${basePath}/images/events/school-college-day.jpeg`,
  },
];

const amenities = [
  {
    title: 'Strategic Location',
    description:
      'Strategically placed at the heart of the city to endorse an event-friendly culture. Well connected by air, road, & rail.',
    icon: <FiMapPin />,
  },
  {
    title: 'State-of-the-art Amenities',
    description:
      'Extensive range of amenities to give you a unique experience that redefines your events.',
    icon: <FiAward />,
  },
  {
    title: 'Highly Customizable',
    description:
      'Create your event the way you envisioned it with complete customization of the venue.',
    icon: <FiSliders />,
  },
  {
    title: 'On-site Branding',
    description:
      'Boost the visibility of your brand & get it to thousands of potential customers every day.',
    icon: <FiTarget />,
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Event Types Section */}
      <section className='py-16 md:py-24 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-4'>
          <div className='text-center mb-12'>
            <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
              All Types of Functions & Events
            </h2>
            <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
              Host any type of occasion with our versatile and well-equipped
              venue
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8'>
            {eventTypes.map((event, index) => (
              <EventTypeCard
                key={index}
                title={event.title}
                description={event.description}
                icon={event.icon}
                color={event.color}
                image={event.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className='py-16 md:py-24 bg-white'>
        <div className='max-w-7xl mx-auto px-4'>
          <div className='text-center mb-12'>
            <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
              Why Choose Auditorium Trade Centre
            </h2>
            <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
              Experience excellence with our comprehensive facilities and
              services
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {amenities.map((amenity, index) => (
              <AmenityCard
                key={index}
                title={amenity.title}
                description={amenity.description}
                icon={amenity.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className='py-16 md:py-24 bg-gradient-to-r from-amber-600 to-amber-800 text-white'>
        <div className='max-w-7xl mx-auto px-4 text-center'>
          <h2 className='text-4xl md:text-5xl font-bold mb-6'>
            Ready to Book Your Event?
          </h2>
          <p className='text-xl text-amber-100 mb-8 max-w-2xl mx-auto'>
            Get in touch with our team today to discuss your event requirements
          </p>
          <button className='bg-white text-amber-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-amber-50 transition'>
            Get Started Now
          </button>
        </div>
      </section>

      {/* Floor Plan Preview */}
      <section className='py-16 md:py-24 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-4'>
          <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center'>
            Our Venue Layout
          </h2>
          <div className='bg-white rounded-lg shadow-lg overflow-hidden'>
            <div className='relative w-full h-96 bg-gray-200'>
              <Image
                src={`${basePath}/images/venues/venue-preview.jpeg`}
                alt='Venue Layout Preview'
                fill
                className='object-cover'
              />
              <div className='absolute inset-0 bg-black/20 flex items-center justify-center'>
                <div className='text-center bg-white/95 p-8 rounded-lg backdrop-blur'>
                  <p className='text-gray-600 text-xl mb-4'>
                    70,000+ Square Feet of Premium Event Space
                  </p>
                  <a
                    href='/floor-plan'
                    className='inline-block bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-700 transition'
                  >
                    View Interactive Floor Plan
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className='py-16 md:py-20 bg-white'>
        <div className='max-w-3xl mx-auto px-4 text-center'>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
            Stay Updated
          </h2>
          <p className='text-gray-600 mb-8'>
            Subscribe to our newsletter for exclusive offers and event updates
          </p>
          <form className='flex flex-col sm:flex-row gap-3'>
            <input
              type='email'
              placeholder='Enter your email'
              className='flex-1 px-6 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-amber-600'
              required
            />
            <button
              type='submit'
              className='bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-700 transition'
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
