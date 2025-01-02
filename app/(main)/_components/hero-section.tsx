'use client';

import { openSans, playfairDisplay } from '@/lib/utils';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function HeroSection() {
  const words = ['Glory', 'Power', 'Kingdom']; // Words to cycle through
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  // Background images for the carousel
  const backgroundImages = [
    '/images/b1.png',
    '/images/b2.png',
    '/images/b3.png',
  ]; // Replace with your image paths
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const wordInterval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000); // Change word every 2 seconds

    const imageInterval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % backgroundImages.length
      );
    }, 5000); // Change image every 5 seconds

    return () => {
      clearInterval(wordInterval);
      clearInterval(imageInterval);
    };
  }, []);

  return (
    <div className='relative bg-white'>
      {/* Background Carousel */}
      <div className='absolute inset-0'>
        {backgroundImages.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={`Background ${index + 1}`}
            layout='fill'
            objectFit='cover'
            objectPosition='center'
            className={`transition-opacity duration-1000 bg-[100%] ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>

      {/* Content Section */}
      <div className='relative py-40 px-8 md:py-60 md:px-16 lg:px-32 flex flex-col justify-center'>
        <h1
          className={`text-3xl md:text-6xl font-bold text-gray-900 ${playfairDisplay.className}`}
        >
          <p className='mb-4 md:mb-8'>Transforming Lives</p>
          {/* <br /> */}
          <p className='mb-4 md:mb-8'>Through God’s Word</p>
          {/* <br /> */}
          for{' '}
          <span className='relative inline-block'>
            {/* Word with Circle */}
            <span className='pl-4 px-5'>
              {words[currentWordIndex]} {/* Dynamic Word */}
            </span>
            <Image
              src='/images/circle.png' // Replace with your circle image path
              alt='Circle'
              width={400} // Adjust size as necessary
              height={30} // Adjust size as necessary
              className='absolute top-0 left-0 z-10 translate-x-[-2%] translate-y-[-20%]'
            />
          </span>
        </h1>

        <p
          className={`mt-8 md:mt-12 text-gray-800 md:text-gray-700 max-w-lg text-shadow ${openSans.className}`}
        >
          till the knowledge of His glory fills the entire Earth!
        </p>

        <div>
          <button
            className={`mt-8 px-4 py-2 md:px-6 md:py-3 text-sm md:text-base bg-primary-main text-white font-semibold rounded-full hover:bg-red-700 transition ${openSans.className}`}
          >
            Join Now
          </button>
        </div>
      </div>
    </div>
  );
}
