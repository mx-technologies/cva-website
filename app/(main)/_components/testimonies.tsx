'use client';

export default function Testimonies() {
  const testimonies = [
    {
      name: 'Gbemi',
      title: 'CVA: A Place for Every Lover of Christ',
      image: '/images/gbemi.jpg', // Replace with actual image path
      text: `Joining CVA has been greatly transformative for me. I have grown spiritually. Here, I am encouraged to actively practice all that’s been preached, and I have been equipped through the teachings, books, and other valuable resources provided. I am glad to be part of a community that’s keen on making Jesus known to all mankind. This community teaches and practices the love of Christ, and you can experience this through the way each member looks out for one another. I am blessed to have amazing sisters and brothers in Christ. CVA is truly a place every lover of Christ should be.`,
    },
    {
      name: 'Victoria',
      title: 'CVA: A Life-Changing Community',
      image: '/images/victoria.jpg', // Replace with actual image path
      text: `Becoming a member of CVA has been an immense blessing. Being embraced by this community has instilled in me a commitment to God and deepened my comprehension of his plans and how to effectively carry them out.`,
    },
    {
      name: 'Oluwaseun',
      title: 'CVA: A Transformative Journey',
      image: '/images/oluwaseun.jpg', // Replace with actual image path
      text: `CVA has been a transformative experience for me. From the moment I joined this group 2 years ago, I felt embraced by a community of believers who genuinely care about each other's spiritual growth. The discussions we have during our meetings are thought-provoking and filled with deep insights, allowing me to gain a fresh perspective on the Scriptures. The teacher God uses in our meetings exemplifies servant-hearted leadership, providing guidance and encouragement as we navigate our faith journeys together.`,
    },
  ];

  return (
    <section className='bg-gray-50 py-16'>
      <div className='container mx-auto px-6 lg:px-16 text-center'>
        {/* Heading */}
        <h2 className='text-3xl font-bold text-gray-900'>Testimonies</h2>
        <p className='mt-4 text-gray-600'>
          Discover inspiring stories of transformed lives and unshaken faith.
          These heartfelt testimonies reflect God’s grace, the power of His
          Word, and the impact of our Christ-centered community.
        </p>

        {/* Testimonies Cards */}
        <div className='mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8'>
          {testimonies.map((testimony, index) => (
            <div
              key={index}
              className='bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-left'
            >
              <img
                src={testimony.image}
                alt={testimony.name}
                className='w-16 h-16 rounded-full object-cover mb-4'
              />
              <h3 className='text-lg font-bold'>{testimony.name}</h3>
              <p className='text-sm text-gray-500 mb-4'>{testimony.title}</p>
              <p className='text-gray-600 text-sm leading-relaxed'>
                {testimony.text}
              </p>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className='flex justify-center items-center mt-8 space-x-2'>
          <span className='w-3 h-3 bg-yellow-500 rounded-full'></span>
          <span className='w-3 h-3 bg-gray-300 rounded-full'></span>
          <span className='w-3 h-3 bg-gray-300 rounded-full'></span>
        </div>
      </div>
    </section>
  );
}
