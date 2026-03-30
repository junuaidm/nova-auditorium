export default function About() {
  return (
    <div className='max-w-7xl mx-auto px-4 py-16 md:py-24'>
      <h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-8'>
        About Us
      </h1>

      <div className='prose prose-lg max-w-3xl'>
        <p className='text-gray-600 mb-6'>
          Nova Auditorium is a premier event venue in Kozhikode, Kerala,
          offering world-class facilities for weddings, corporate events,
          conferences, and celebrations. With spacious halls and modern
          amenities, we create memorable experiences for every occasion.
        </p>

        <h2 className='text-3xl font-bold text-gray-900 mt-8 mb-4'>
          Our Story
        </h2>
        <p className='text-gray-600 mb-6'>
          Founded to serve as a premier venue for events of all scales, we have
          been hosting successful events for businesses, organizations, and
          individuals across the region.
        </p>

        <h2 className='text-3xl font-bold text-gray-900 mt-8 mb-4'>
          Our Facilities
        </h2>
        <ul className='text-gray-600 space-y-3 mb-6'>
          <li>✓ 70,000+ square feet of premium space</li>
          <li>✓ Capacity for up to 8,000+ delegates</li>
          <li>✓ State-of-the-art audio-visual equipment</li>
          <li>✓ On-site catering facilities</li>
          <li>✓ Ample parking</li>
          <li>✓ Full accessibility features</li>
        </ul>

        <h2 className='text-3xl font-bold text-gray-900 mt-8 mb-4'>
          Why Choose Us?
        </h2>
        <p className='text-gray-600 mb-6'>
          We combine strategic location, modern amenities, and exceptional
          customer service to ensure every event is a success.
        </p>
      </div>
    </div>
  );
}
