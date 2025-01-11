'use client';

import { openSans, playfairDisplay } from '@/lib/utils';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const carouselItems = [
  {
    image: '/images/p1.png',
    title: 'Sunday Worship Service',
    description:
      'Experience Spirit-filled worship, a powerful message, and vibrant praise. Come and be blessed as we gather to celebrate God’s presence.',
    time: '8:00AM - 12:00PM',
  },

  {
    image: '/images/p2.png',
    title: 'Bible Study',
    description:
      'Deepen your understanding of God’s word in a welcoming and interactive environment.',
    time: '6:00PM - 8:00PM',
  },
  {
    image: '/images/p3.png',
    title: 'Prayer Meeting',
    description:
      'Join us for a powerful time of prayer and intercession for individuals, families, and nations.',
    time: '7:00PM - 9:00PM',
  },
];

export default function OurProgramsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleThumbnailClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className='bg-white py-12 md:py-20 px-4 md:px-16 lg:pl-32'>
      <div className='p-2 lg:pl-20 ml-auto flex flex-col lg:grid lg:grid-cols-[1fr_2fr] gap-10 items-center'>
        {/* Left Section */}
        <div className='flex gap-3 flex-1 flex-col sm:flex-row md:flex-row'>
          <div className='w-full lg:w-72'>
            <h2
              className={`flex lg:flex-col justify-center lg:text-left text-3xl md:text-5xl font-bold text-gray-900 mb-4 ${playfairDisplay.className} gap-2 w-full`}
            >
              <span>Our</span> <span>Programs</span>
            </h2>
            <div
              className={`text-center lg:text-left w-full text-gray-700 leading-relaxed ${openSans.className}`}
            >
              Experience God’s presence, connect with a loving community, and
              discover opportunities to deepen your faith and make an impact for
              His Kingdom.
            </div>
          </div>
          <Image
            src={'/arrow-diagonal.svg'}
            alt='arrow-diagonal'
            width='150'
            height='50'
            className='self-center hidden lg:block'
          />
        </div>

        {/* Right Section */}
        <div className='flex space-y-4 flex-col md:flex-row gap-10'>
          {/* Main Carousel View */}
          <div className='flex flex-row lg:flex-col border border-primary-main rounded-3xl p-4 w-full sm:w-full lg:w-[400px] m-auto gap-5 lg:gap-0'>
            <div className='relative rounded-lg mb-4'>
              <Image
                src={carouselItems[currentIndex].image}
                alt={carouselItems[currentIndex].title}
                width={300}
                height={200}
                objectFit='cover'
                className='rounded-lg'
              />
            </div>
            <div>
              <h3
                className={`text-2xl font-bold text-gray-900 mb-2 ${playfairDisplay.className}`}
              >
                {carouselItems[currentIndex].title}
              </h3>
              <p
                className={`text-secondary-main leading-relaxed mb-4 text-sm ${openSans.className}`}
              >
                {carouselItems[currentIndex].description}
              </p>
              <div
                className={`bg-yellow-300 text-sm font-medium text-gray-900 lg:px-3 py-1 rounded-lg inline-block ${openSans.className}`}
              >
                {carouselItems[currentIndex].time}
              </div>
            </div>
          </div>

          {/* Thumbnails w-[200] h-[200] md:w-[600px] */}
          <div className='lg:flex hidden flex-col lg:w-full'>
            <div className='lg:flex hidden items-center h-full md:overflow-x-scroll space-x-2'>
              {carouselItems.map((item, index) => (
                <div
                  key={index}
                  className={`relative overflow-hidden rounded-lg border ${
                    currentIndex === index
                      ? 'border-primary-main'
                      : 'border-gray-300'
                  } cursor-pointer `}
                  onClick={() => handleThumbnailClick(index)}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    // layout='fill'
                    width='600'
                    height='600'
                    // objectFit='cover'
                    className='rounded-lg w-full'
                  />
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className='flex space-x-4'>
              <button
                onClick={handlePrev}
                aria-label='Previous'
                className='w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full hover:bg-gray-300'
              >
                &#60;
              </button>
              <button
                onClick={handleNext}
                aria-label='Next'
                className='w-8 h-8 flex items-center justify-center bg-gray-900 text-white rounded-full hover:bg-gray-800'
              >
                &#62;
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
