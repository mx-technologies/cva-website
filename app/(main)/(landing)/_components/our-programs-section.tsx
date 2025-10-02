'use client';

import { openSans, playfairDisplay } from '@/lib/utils';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const carouselItems = [
  {
    image: '/images/p1.png',
    title: 'Mahanaim Bootcamp (Lagos Weekly Gathering)',
    description:
      'More than a Bible study—it’s a training ground. Here, believers are equipped through sound teaching, prophetic insight, and deep fellowship to live boldly for Christ. Come hungry. Leave transformed.',
    time: 'Tuesdays | 6:00 PM – 8:00 PM | UNILAG Conference Room',
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

          {/* Thumbnails */}
          <div className='lg:flex hidden flex-col lg:w-full'>
            <div className='flex items-center h-full overflow-x-auto space-x-3 py-2'>
              {carouselItems.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex-shrink-0 w-40 h-40 rounded-lg border cursor-pointer overflow-hidden ${
                    currentIndex === index
                      ? 'border-2 border-primary-main'
                      : 'border border-gray-300'
                  }`}
                  onClick={() => handleThumbnailClick(index)}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className='object-cover rounded-lg'
                  />
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className='flex space-x-4 mt-4'>
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
