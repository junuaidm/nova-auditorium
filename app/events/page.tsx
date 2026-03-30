'use client';

import Image from 'next/image';

export default function Events() {
  const upcomingEvents = [
    {
      id: 1,
      title: 'Tech Conference 2026',
      date: 'April 15, 2026',
      type: 'Conference',
      time: '9:00 AM - 5:00 PM',
      image: '/images/events/tech-conference.jpeg',
    },
    {
      id: 2,
      title: 'Annual Trade Expo',
      date: 'May 10, 2026',
      type: 'Exhibition',
      time: '10:00 AM - 6:00 PM',
      image: '/images/events/trade-expo.jpeg',
    },
    {
      id: 3,
      title: 'Summer Entertainment Gala',
      date: 'June 20, 2026',
      type: 'Entertainment',
      time: '6:00 PM - 11:00 PM',
      image: '/images/events/entertainment-gala.jpeg',
    },
    {
      id: 4,
      title: 'Sports Championship Finals',
      date: 'July 5, 2026',
      type: 'Sports',
      time: '2:00 PM - 9:00 PM',
      image: '/images/events/sports-championship.jpeg',
    },
  ];

  return (
    <div className='max-w-7xl mx-auto px-4 py-16 md:py-24'>
      <h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center'>
        Events Calendar
      </h1>
      <p className='text-center text-gray-600 mb-12'>
        View upcoming events and book your participation
      </p>

      <div className='grid gap-8 md:grid-cols-2'>
        {upcomingEvents.map((event) => (
          <div
            key={event.id}
            className='group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300'
          >
            {/* Event Image */}
            <div className='relative h-48 w-full bg-gray-200 overflow-hidden'>
              <Image
                src={event.image}
                alt={event.title}
                fill
                className='object-cover group-hover:scale-105 transition duration-300'
              />
            </div>

            {/* Event Details */}
            <div className='p-6'>
              <div className='flex items-start justify-between mb-4'>
                <div>
                  <h3 className='text-xl font-bold text-gray-900'>
                    {event.title}
                  </h3>
                  <p className='text-amber-600 font-semibold mt-1'>
                    {event.type}
                  </p>
                </div>
              </div>
              <p className='text-gray-600 mb-2'>📅 {event.date}</p>
              <p className='text-gray-600 mb-4'>🕐 {event.time}</p>
              <button className='w-full bg-amber-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-amber-700 transition'>
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Info Section */}
      <div className='mt-16 bg-amber-50 p-8 rounded-lg'>
        <h2 className='text-2xl font-bold text-gray-900 mb-4'>
          Upcoming Events Highlights
        </h2>
        <p className='text-gray-600 mb-4'>
          Join us for a variety of events throughout the year. Whether you're
          looking for business conferences, entertainment experiences, or
          championship competitions, we have something special planned for you.
        </p>
        <p className='text-gray-600'>
          Contact us to book your participation or inquire about hosting your
          own event at our state-of-the-art venue.
        </p>
      </div>
    </div>
  );
}
