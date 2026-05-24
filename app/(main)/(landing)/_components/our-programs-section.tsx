'use client';

import { openSans, playfairDisplay } from '@/lib/utils';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const carouselItems = [
  {
    image: '/images/p1.png',
    title: 'Sunday Services',
    description:
      'A glorious time of worship, sound apostolic teaching, prophetic insight, and deep fellowship. Come and experience encounters that equip you to walk in your unique purpose and live victoriously',
    time: 'Sundays | 05:00 PM – 07:00 PM',
  },

  {
    image: '/images/p2.png',
    title: 'Monthly Vigil (Incense and Intercession Night)',
    description:
      'A night of worship and priestly intercession where we minister to the Lord and pray His will over with the assurance that He meets ours.',
    time: 'Every 3rd Friday | 11:00 PM | CVN Lagos',
  },
  {
    image: '/images/p3.png',
    title: 'Friday Bible Study',
    description:
      'A night of encounters, revelations, and practical wisdom for victorious living.',
    time: 'Fridays | 9:30 PM - 11:00 PM',
  },
  // {
  //   image: '/images/p3.png',
  //   title: 'Monthly Vigils',
  //   description:
  //     'Join us for our powerful Monthly Vigils—a night of prayer, worship, and spiritual renewal.s',
  //   time: '',
  // },
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
    <section className='bg-white py-16 md:py-24 px-6 lg:px-16'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 items-start'>
          {/* Left Section: Header and Description */}
          <div className='lg:col-span-4 flex flex-col gap-6'>
            <div className='flex items-center gap-6 lg:flex-col lg:items-start'>
              <h2
                className={`text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight ${playfairDisplay.className}`}
              >
                Our <br className='hidden lg:block' /> Programs
              </h2>
              <Image
                src='/arrow-diagonal.svg'
                alt='Decorative Arrow'
                width={80}
                height={80}
                className='hidden lg:block rotate-0'
              />
            </div>
            <p
              className={`text-gray-700 text-lg leading-relaxed max-w-md ${openSans.className}`}
            >
              Experience God’s presence, connect with a loving community, and
              discover opportunities to deepen your faith and make an impact for
              His Kingdom.
            </p>
          </div>

          {/* Right Section: Carousel and Thumbnails */}
          <div className='lg:col-span-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8'>
            {/* Main Featured Item */}
            <div className='bg-white border-2 border-primary-main rounded-[2rem] overflow-hidden p-6 md:p-8 flex flex-col lg:flex-row gap-8 shadow-sm transition-all duration-500'>
              <div className='relative w-full lg:w-1/2 min-h-[250px] rounded-2xl overflow-hidden'>
                <Image
                  src={carouselItems[currentIndex].image}
                  alt={carouselItems[currentIndex].title}
                  fill
                  className='object-cover transition-transform duration-700 hover:scale-110'
                />
              </div>
              <div className='flex flex-col justify-center flex-1'>
                <h3
                  className={`text-2xl md:text-3xl font-bold text-gray-900 mb-4 ${playfairDisplay.className}`}
                >
                  {carouselItems[currentIndex].title}
                </h3>
                <p
                  className={`text-gray-600 leading-relaxed mb-6 text-base ${openSans.className}`}
                >
                  {carouselItems[currentIndex].description}
                </p>
                <div
                  className={`bg-yellow-100 text-yellow-800 text-sm font-semibold px-4 py-2 rounded-full inline-flex items-center w-fit border border-yellow-200 ${openSans.className}`}
                >
                  <span className='mr-2'>⏰</span> {carouselItems[currentIndex].time}
                </div>
              </div>
            </div>

            {/* Selection Area (Thumbnails & Navigation) */}
            <div className='flex flex-col gap-6 overflow-hidden'>
              <div className='flex items-center gap-4 overflow-x-auto pb-4 no-scrollbar'>
                {carouselItems.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => handleThumbnailClick(index)}
                    className={`relative flex-shrink-0 w-32 h-32 md:w-36 md:h-36 rounded-2xl overflow-hidden border-4 transition-all duration-300 ${currentIndex === index
                      ? 'border-primary-main scale-105 shadow-lg'
                      : 'border-transparent opacity-60 hover:opacity-100 hover:scale-105'
                      }`}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className='object-cover'
                    />
                  </button>
                ))}
              </div>

              {/* Controls */}
              <div className='flex items-center gap-4 justify-center md:justify-start'>
                <button
                  onClick={handlePrev}
                  className='group w-12 h-12 flex items-center justify-center border-2 border-gray-200 rounded-full transition-all hover:bg-gray-900 hover:border-gray-900'
                  aria-label='Previous'
                >
                  <span className='group-hover:text-white transition-colors text-xl font-bold'>←</span>
                </button>
                <button
                  onClick={handleNext}
                  className='group w-12 h-12 flex items-center justify-center bg-gray-900 border-2 border-gray-900 rounded-full transition-all hover:bg-white hover:border-gray-900'
                  aria-label='Next'
                >
                  <span className='text-white group-hover:text-gray-900 transition-colors text-xl font-bold'>→</span>
                </button>
                <div className='flex gap-2 ml-4'>
                  {carouselItems.map((_, index) => (
                    <div
                      key={index}
                      className={`h-2 rounded-full transition-all duration-300 ${currentIndex === index ? 'w-8 bg-primary-main' : 'w-2 bg-gray-200'
                        }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
