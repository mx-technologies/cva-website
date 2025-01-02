'use client';

import { openSans, playfairDisplay } from '@/lib/utils';
import Image from 'next/image';

export default function ApproachSection() {
  return (
    <section className='container py-16 px-6 md:px-16 lg:px-16 mx-auto'>
      {/* Section Header */}
      <div className='text-center mb-12 max-w-4xl mx-auto'>
        <h2
          className={`text-3xl md:text-5xl font-bold mb-4 ${playfairDisplay.className} text-[#0F0000]`}
        >
          Our Approach
        </h2>
        <p className={`text-lg text-gray-600 ${openSans.className}`}>
          Discover inspiring stories of transformed lives and unshaken faith.
          These heartfelt testimonies reflect God&apos;s grace, the power of His
          Word, and the impact of our Christ-centered community.
        </p>
      </div>

      {/* Grid Layout */}
      <div className='flex justify-center mt-10'>
        <div className='grid grid-rows-2 grid-flow-col gap-6 w-full'>
          {/* Item 1 */}
          <div className='col-span-2 relative group overflow-hidden rounded-lg shadow-lg'>
            <Image
              src='/about-us/approach-i1.png' // Replace with your actual image path
              alt='Prayer and Intercession'
              width={500}
              height={100}
              className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-300'
            />
            <div className='absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white p-6 gap-3'>
              <h3
                className={`text-5xl font-bold mb-2 ${playfairDisplay.className}`}
              >
                Prayer and Intercession
              </h3>
              <a
                href='#'
                className={`text-lg font-semibold underline group-hover:underline-offset-4 transition-all duration-300 ${openSans.className} underline-offset-2`}
              >
                Learn More →
              </a>
            </div>
          </div>

          {/* Item 2 */}
          <div className=' col-span-2 relative group overflow-hidden rounded-lg shadow-lg'>
            <Image
              src='/about-us/approach-i2.png' // Replace with your actual image path
              alt='Evangelism and Outreaches'
              width={592}
              height={190}
              className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-300'
            />
            <div className='absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white p-6 gap-3'>
              <h3
                className={`text-5xl font-bold mb-2 ${playfairDisplay.className}`}
              >
                Evangelism and Outreaches
              </h3>
              <a
                href='#'
                className={`text-lg font-semibold underline group-hover:underline-offset-4 transition-all duration-300 ${openSans.className} underline-offset-2`}
              >
                Learn More →
              </a>
            </div>
          </div>

          {/* Item 3 */}
          <div className='row-span-2 relative group overflow-hidden rounded-lg shadow-lg'>
            <Image
              src='/about-us/approach-i3.png' // Replace with your actual image path
              alt='Teaching the Word'
              width={800}
              height={400}
              className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-300'
            />
            <div className='absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white p-6 gap-3'>
              <h3
                className={`text-5xl font-bold mb-2 ${playfairDisplay.className}`}
              >
                Teaching the Word
              </h3>
              <a
                href='#'
                className={`text-lg font-semibold underline group-hover:underline-offset-4 transition-all duration-300 ${openSans.className} underline-offset-2`}
              >
                Learn More →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
