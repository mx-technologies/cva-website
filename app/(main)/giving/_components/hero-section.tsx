'use client';

import { openSans, playfairDisplay } from '@/lib/utils';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <div className='relative bg-white'>
      <div className='absolute inset-0'>
        <Image
          src={'/giving/hero.png'}
          alt={`Background`}
          layout='fill'
          objectFit='cover'
          objectPosition='center'
          className={`transition-opacity duration-1000 opacity-100`}
        />
      </div>

      {/* Gradient Overlay */}
      <div className='absolute inset-0 bg-gradient-to-t from-white/70 via-white/50 to-white/20 md:from-white/10 md:via-white/10 md:to-white/5'></div>

      {/* Content Section */}
      <div className='relative py-40 px-8 md:py-60 md:px-16 lg:px-32 flex flex-col justify-center'>
        <h1
          className={`text-3xl md:text-6xl font-bold text-gray-900 ${playfairDisplay.className}`}
        >
          <p className='mb-4 md:mb-8'>Partner with Us to</p>
          <p className='mb-4 md:mb-8'>Advance God&apos;s</p>
          <p className='mb-4 md:mb-8'>
            <span className='relative inline-block'>
              <span className='pl-5 px-5'>Kingdom</span>
              <Image
                src='/images/circle.png' // Replace with your circle image path
                alt='Circle'
                width={400} // Adjust size as necessary
                height={30} // Adjust size as necessary
                className='absolute top-0 left-0 z-10 translate-x-[-2%] translate-y-[-20%]'
              />
            </span>
          </p>
        </h1>

        <p
          className={`mt-8 md:mt-10 text-[#666666] md:text-[#666666] max-w-lg text-shadow ${openSans.className}`}
        >
          Your generosity fuels our mission to spread the gospel, serve our
          community, and bring hope to the world.
        </p>

        <div>
          <button
            className={`mt-8 px-4 py-2 md:px-6 md:py-3 text-sm md:text-base bg-primary-main text-white font-semibold rounded-full hover:bg-red-700 transition ${openSans.className}`}
          >
            Give Now
          </button>
        </div>
      </div>
    </div>
  );
}
