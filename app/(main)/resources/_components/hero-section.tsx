'use client';

import { openSans, playfairDisplay } from '@/lib/utils';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <div className='relative bg-white'>
      <div className='absolute inset-0'>
        <Image
          src={'/images/about-b1.png'}
          alt={`Background`}
          layout='fill'
          objectFit='cover'
          objectPosition='center'
          className={`transition-opacity duration-1000 opacity-100`}
        />
      </div>

      {/* Gradient Overlay */}
      <div className='absolute inset-0 bg-gradient-to-t from-white/70 via-white/50 to-white/20 md:from-white/80 md:via-white/60 md:to-white/15'></div>

      {/* Content Section */}
      <div className='relative py-40 px-8 md:py-60 md:px-16 lg:px-32 flex flex-col justify-center'>
        <h1
          className={`text-3xl md:text-6xl font-bold text-gray-900 ${playfairDisplay.className}`}
        >
          <p className='mb-4 md:mb-8'>Rooted in Faith,</p>
          <p className='mb-4 md:mb-8'>
            Growing in{' '}
            <span className='relative inline-block'>
              <span className='pl-5 px-5'>Love</span>
              <Image
                src='/images/circle.png' // Replace with your circle image path
                alt='Circle'
                width='1000' // Adjust size as necessary
                height='60' // Adjust size as necessary
                className='absolute top-0 left-0 z-10 translate-x-[-2%] translate-y-[4%]'
              />
            </span>
          </p>
        </h1>

        <p
          className={`mt-8 md:mt-10 text-gray-800 md:text-gray-700 max-w-lg text-shadow ${openSans.className}`}
        >
          Discover the story, purpose, and people behind Christ’s Victorious
          Army—a church dedicated to empowering lives through God’s truth, love,
          and Spirit-led guidance.
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
