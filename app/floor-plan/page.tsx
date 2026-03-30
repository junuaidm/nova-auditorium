import Image from 'next/image';

export default function FloorPlan() {
  return (
    <div className='max-w-7xl mx-auto px-4 py-16 md:py-24'>
      <h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center'>
        Floor Plan
      </h1>
      <p className='text-center text-gray-600 mb-12'>
        Explore our 70,000+ square feet of flexible event space
      </p>

      <div className='bg-white rounded-lg shadow-lg p-8 mb-8'>
        <div className='relative w-full h-96 md:h-screen rounded-lg overflow-hidden bg-gray-100'>
          <Image
            src='/images/venues/floor-plan.jpeg'
            alt='Main Floor Plan'
            fill
            className='object-contain'
          />
          <div className='absolute inset-0 flex items-center justify-center'>
            <div className='text-center bg-white/90 p-8 rounded-lg'>
              <h2 className='text-3xl font-bold text-gray-600 mb-4'>
                Main Exhibition Hall
              </h2>
              <p className='text-2xl text-gray-500 mb-8'>25,000 sq ft</p>
              <p className='text-gray-500'>
                Capacity: 3,000+ seated or 5,000+ standing
              </p>
              <p className='text-sm text-gray-400 mt-6'>
                [Add your floor plan image to
                /public/images/venues/floor-plan.jpeg]
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='mt-8 grid grid-cols-1 md:grid-cols-2 gap-6'>
        <div className='bg-blue-50 p-6 rounded-lg'>
          <h3 className='text-xl font-bold text-blue-900 mb-2'>
            Conference Wing
          </h3>
          <p className='text-blue-700'>
            10,000 sq ft • Capacity: 800 delegates
          </p>
        </div>
        <div className='bg-green-50 p-6 rounded-lg'>
          <h3 className='text-xl font-bold text-green-900 mb-2'>
            Banquet Hall
          </h3>
          <p className='text-green-700'>
            15,000 sq ft • Capacity: 1,200 guests
          </p>
        </div>
        <div className='bg-amber-50 p-6 rounded-lg'>
          <h3 className='text-xl font-bold text-amber-900 mb-2'>
            Exhibition Area
          </h3>
          <p className='text-amber-700'>
            20,000 sq ft • Modular spaces available
          </p>
        </div>
        <div className='bg-purple-50 p-6 rounded-lg'>
          <h3 className='text-xl font-bold text-purple-900 mb-2'>
            Breakout Rooms
          </h3>
          <p className='text-purple-700'>
            5,000 sq ft total • Multiple configurations
          </p>
        </div>
      </div>

      <div className='mt-8 p-6 bg-gray-50 rounded-lg'>
        <h3 className='text-xl font-bold text-gray-900 mb-4'>Amenities</h3>
        <ul className='grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700'>
          <li>✓ Full climate control</li>
          <li>✓ High-speed internet</li>
          <li>✓ Professional AV systems</li>
          <li>✓ Loading docks</li>
          <li>✓ On-site catering</li>
          <li>✓ Ample parking</li>
          <li>✓ Accessibility features</li>
          <li>✓ 24/7 security</li>
        </ul>
      </div>
    </div>
  );
}
