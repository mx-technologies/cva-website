'use client';

import { openSans, playfairDisplay } from '@/lib/utils';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className='bg-gray-50'>
      <div className='container px-6 lg:px-16 mx-auto py-14'>
        <div className='relative bg-primary-main text-white py-12 md:py-20 px-6 lg:px-16 rounded-xl overflow-hidden container border'>
          <div className='absolute inset-0'>
            {/* Background pattern */}
            <div
              className='w-full h-full'
              style={{
                backgroundImage: 'url(/about-us/watermark.png)', // Replace with your pattern URL
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0.2,
              }}
            ></div>
          </div>

          <div className='relative flex flex-col-reverse md:flex-row items-center justify-between gap-3'>
            {/* Left Content */}
            <div className={`max-w-xl text-left`}>
              <div className='hidden md:block'>
                <Image
                  src='/about-us/logo-white.png'
                  alt='logo'
                  width='40'
                  height='40'
                />
                <h2
                  className={`text-4xl md:text-4xl font-bold mt-3 mb-6 ${playfairDisplay.className}`}
                >
                  About Brother Ayomide Idogun
                </h2>
              </div>
              <div className={`${openSans.className}`}>
                <p className='text-lg leading-relaxed mb-6'>
                  Ayomide Idogun is the founder of CVA, a growing movement
                  birthed out of obedience to God&apos;s call.
                </p>
                <p className='text-lg leading-relaxed'>
                  Ayomide is passionate about seeing people become the best
                  versions of themselves—living fully in the purpose God has for
                  them. As a teacher of the Word, he is committed to empowering
                  individuals to embrace the victorious life God has designed
                  for them. His ministry is centered on guiding people into
                  deeper fellowship with God, equipping them to live boldly in
                  faith, and fulfilling their God-given destinies.
                </p>
              </div>
            </div>

            {/* Right Content */}
            <div className='mt-8 md:mt-0 md:ml-12'>
              <div className='block md:hidden'>
                <Image
                  src='/about-us/logo-white.png'
                  alt='logo'
                  width='40'
                  height='40'
                />
                <h2
                  className={`text-4xl md:text-4xl mt-3 font-bold mb-6 ${playfairDisplay.className}`}
                >
                  About Brother Ayomide Idogun
                </h2>
              </div>

              <Image
                src='/about-us/me.png' // Replace with your image URL
                alt='Brother Ayomide Idogun'
                width={400}
                height={400}
                className='rounded-lg shadow-lg'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
