'use client';

import { openSans } from '@/lib/utils';
import Image from 'next/image';
import { NewsletterForm } from './newsletter-form';

export default function Footer() {
  return (
    <footer className='container mx-auto bg-white text-gray-[#0F0000] px-8 md:px-16 lg:px-16 py-12'>
      <div className={`py-12 ${openSans.className}`}>
        {/* Footer Sections */}
        <div className='flex flex-col lg:flex-row gap-10 lg:gap-0'>
          <div className='flex-[3] grid grid-cols-1 md:grid-cols-3 gap-8 text-left'>
            {/* Organization Section */}
            <div>
              <h5 className='font-bold text-lg'>Organization</h5>
              <ul className={`mt-4 space-y-2 text-[#666666]`}>
                <li>
                  <a href='#' className='hover:text-primary-hover'>
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-primary-hover'>
                    Donations
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-primary-hover'>
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
                  <a href='#' className='hover:text-primary-hover'>
                    Documentation
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-primary-hover'>
                    Papers
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-primary-hover'>
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
                  <a href='#' className='hover:text-primary-hover'>
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-primary-hover'>
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-primary-hover'>
                    Cookies Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter and Social Media */}
          <div className='flex flex-col gap-3 justify-start'>
            {/* Newsletter Section */}
            <NewsletterForm />
          </div>
        </div>

        {/* Footer Bottom */}
        <div className='flex flex-col lg:flex-row md:flex-lg justify-between mt-4 md:mt-12 lg:mt-24 border-t border-gray-200 pt-6 text-center text-sm text-gray-500 gap-4'>
          <span className='flex flex-col md:flex-row items-center gap-1 md:gap-0'>
            <Image
              src={'/logo.png'}
              alt='logo'
              width='25'
              height='1'
              objectFit='cover'
            />
            &nbsp; Christ&apos;s Victorious Army, 2024. All rights reserved
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
