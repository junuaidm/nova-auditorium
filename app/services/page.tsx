export default function Services() {
  return (
    <div className='max-w-7xl mx-auto px-4 py-16 md:py-24'>
      <h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-8'>
        Our Services
      </h1>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
        <div>
          <h2 className='text-2xl font-bold text-gray-900 mb-4'>
            Event Planning & Coordination
          </h2>
          <p className='text-gray-600 mb-4'>
            Our experienced team helps you plan and execute events that exceed
            expectations.
          </p>
        </div>

        <div>
          <h2 className='text-2xl font-bold text-gray-900 mb-4'>
            Audio-Visual & Technology
          </h2>
          <p className='text-gray-600 mb-4'>
            State-of-the-art AV systems and technical support for your
            presentations.
          </p>
        </div>

        <div>
          <h2 className='text-2xl font-bold text-gray-900 mb-4'>
            Catering Services
          </h2>
          <p className='text-gray-600 mb-4'>
            Partner with our preferred caterers for exceptional food and
            beverage service.
          </p>
        </div>

        <div>
          <h2 className='text-2xl font-bold text-gray-900 mb-4'>
            Customization & Setup
          </h2>
          <p className='text-gray-600 mb-4'>
            Flexible space configurations to match your event requirements
            perfectly.
          </p>
        </div>

        <div>
          <h2 className='text-2xl font-bold text-gray-900 mb-4'>
            Security & Safety
          </h2>
          <p className='text-gray-600 mb-4'>
            Professional security and safety protocols for all events.
          </p>
        </div>

        <div>
          <h2 className='text-2xl font-bold text-gray-900 mb-4'>
            Parking & Access
          </h2>
          <p className='text-gray-600 mb-4'>
            Ample parking, loading areas, and convenient access for your guests.
          </p>
        </div>
      </div>
    </div>
  );
}
