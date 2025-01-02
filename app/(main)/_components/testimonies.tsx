'use client';

import { openSans, playfairDisplay } from '@/lib/utils';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

export default function Testimonies() {
  const testimonies = [
    {
      name: 'Gbemi',
      title: 'CVA: A Place for Every Lover of Christ',
      image: '/images/t1.png', // Replace with actual image path
      text: `Joining CVA has been greatly transformative for me. I have grown spiritually. Here, I am encouraged to actively practice all that’s been preached, and I have been equipped through the teachings, books, and other valuable resources provided. I am glad to be part of a community that’s keen on making Jesus known to all mankind. This community teaches and practices the love of Christ, and you can experience this through the way each member looks out for one another. I am blessed to have amazing sisters and brothers in Christ. CVA is truly a place every lover of Christ should be.`,
    },
    {
      name: 'Victoria',
      title: 'CVA: A Life-Changing Community',
      image: '/images/t2.png', // Replace with actual image path
      text: `Becoming a member of CVA has been an immense blessing. Being embraced by this community has instilled in me a commitment to God and deepened my comprehension of his plans and how to effectively carry them out.`,
    },
    {
      name: 'Oluwaseun',
      title: 'CVA: A Transformative Journey',
      image: '/images/t3.png', // Replace with actual image path
      text: `CVA has been a transformative experience for me. From the moment I joined this group 2 years ago, I felt embraced by a community of believers who genuinely care about each other's spiritual growth. The discussions we have during our meetings are thought-provoking and filled with deep insights, allowing me to gain a fresh perspective on the Scriptures. The teacher God uses in our meetings exemplifies servant-hearted leadership, providing guidance and encouragement as we navigate our faith journeys together.`,
    },
    {
      name: 'Oluwaseun',
      title: 'CVA: A Transformative Journey',
      image: '/images/t3.png', // Replace with actual image path
      text: `CVA has been a transformative experience for me. From the moment I joined this group 2 years ago, I felt embraced by a community of believers who genuinely care about each other's spiritual growth. The discussions we have during our meetings are thought-provoking and filled with deep insights, allowing me to gain a fresh perspective on the Scriptures. The teacher God uses in our meetings exemplifies servant-hearted leadership, providing guidance and encouragement as we navigate our faith journeys together.`,
    },
  ];

  return (
    <section className='bg-gray-50 py-16'>
      <div className='container mx-auto px-6 lg:px-16 text-center'>
        <div className='w-full lg:w-[50%] m-auto'>
          <h2
            className={`text-center text-3xl md:text-5xl font-bold text-gray-900 mb-4 ${playfairDisplay.className}`}
          >
            Testimonies
          </h2>
          <p
            className={`text-center mt-4 leading-relaxed ${openSans.className}`}
          >
            Discover inspiring stories of transformed lives and unshaken faith.
            These heartfelt testimonies reflect God’s grace, the power of His
            Word, and the impact of our Christ-centered community.
          </p>
        </div>

        {/* Carousel */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30} // Space between slides
          breakpoints={{
            // Define responsive breakpoints
            640: { slidesPerView: 1 }, // Mobile
            1024: { slidesPerView: 3 }, // Desktop
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          className='my-4 lg:my-12 py-4 lg:py-40'
        >
          {testimonies.map((testimony, index) => (
            <SwiperSlide key={index}>
              <div className='bg-white rounded-lg shadow-md p-6 flex flex-col text-left'>
                <div className='flex gap-3 mb-4'>
                  <img
                    src={testimony.image}
                    alt={testimony.name}
                    className='w-16 h-16 rounded-full object-cover'
                  />
                  <div
                    className={`flex flex-col justify-center ${openSans.className}`}
                  >
                    <h3 className='text-lg font-bold'>{testimony.name}</h3>
                    <p className='text-sm'>{testimony.title}</p>
                  </div>
                </div>
                <p
                  className={`text-gray-600 text-sm leading-relaxed ${openSans.className}`}
                >
                  {testimony.text}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
