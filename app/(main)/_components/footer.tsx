'use client';

import { openSans } from '@/lib/utils';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className='container mx-auto bg-white text-gray-[#0F0000] px-8 md:px-16 lg:px-16 py-12'>
      <div className={`py-12 ${openSans.className}`}>
        {/* Footer Sections */}
        <div className='flex flex-col md:flex-row gap-10 md:gap-0'>
          <div className='flex-[3] grid grid-cols-1 md:grid-cols-3 gap-8 text-left'>
            {/* Organization Section */}
            <div>
              <h5 className='font-bold text-lg'>Organization</h5>
              <ul className={`mt-4 space-y-2 text-[#666666]`}>
                <li>
                  <a href='#' className='hover:text-red-600'>
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-red-600'>
                    Donations
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-red-600'>
                    Blog & News
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources Section */}
            <div>
              <h5 className='font-bold text-lg'>Resources</h5>
              <ul className='mt-4 space-y-2 text-[#666666]'>
                <li>
                  <a href='#' className='hover:text-red-600'>
                    Documentation
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-red-600'>
                    Papers
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-red-600'>
                    Guidelines
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal Section */}
            <div>
              <h5 className='font-bold text-lg'>Legal</h5>
              <ul className='mt-4 space-y-2 text-[#666666]'>
                <li>
                  <a href='#' className='hover:text-red-600'>
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-red-600'>
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-red-600'>
                    Cookies Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter and Social Media */}
          <div className='flex flex-col gap-3 justify-start'>
            {/* Newsletter Section */}
            <div className='flex items-center w-full lg:w-auto gap-3'>
              <input
                type='email'
                placeholder='Enter your email'
                className='flex-grow px-4 py-2 border border-[#666666] rounded-full text-sm focus:outline-none'
              />
              <button className='bg-primary-main rounded-full text-white px-6 py-2 text-sm hover:bg-primary-hover'>
                Send
              </button>
            </div>
            <p className='text-gray-500 text-sm'>Join the Newsletter</p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className='flex flex-col md:flex-row justify-between mt-24 border-t border-gray-200 pt-6 text-center text-sm text-gray-500 gap-4'>
          <span className='flex flex-col md:flex-row items-center gap-1 md:gap-0'>
            <Image
              src={'/logo.png'}
              alt='logo'
              width='25'
              height='1'
              objectFit='cover'
            />
            &nbsp; Christ's Victorious Army, 2024. All rights reserved
          </span>
          {/* Social Media Links */}
          <div className='flex justify-center lg:justify-end space-x-4'>
            <a href='#' className='text-gray-500 hover:text-red-600'>
              <Image
                src='/images/facebook.png'
                alt='Facebook'
                width='24'
                height='24'
                layout='cover'
              />
            </a>
            <a href='#' className='text-gray-500 hover:text-red-600'>
              <Image
                src='/images/youtube.png'
                alt='Youtube'
                width='24'
                height='24'
                layout='cover'
              />
            </a>
            <a href='#' className='text-gray-500 hover:text-red-600'>
              <Image
                src='/images/instagram.png'
                alt='Instagram'
                width='24'
                height='24'
                layout='cover'
              />
            </a>
            <a href='#' className='text-gray-500 hover:text-red-600'>
              <Image
                src='/images/x.png'
                alt='X'
                width='24'
                height='24'
                layout='cover'
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
