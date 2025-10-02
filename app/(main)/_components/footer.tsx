'use client';

import { openSans } from '@/lib/utils';
import Image from 'next/image';
import { NewsletterForm } from './newsletter-form';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='container mx-auto bg-white text-gray-[#0F0000] px-8 md:px-16 lg:px-16 '>
      <div className={`py-12 ${openSans.className}`}>
        {/* Footer Sections */}
        <div className='flex flex-col lg:flex-row gap-10 lg:gap-0'>
          <div className='flex-[3] grid grid-cols-1 md:grid-cols-3 gap-8 text-left'>
            {/* Logo */}
            <div>
              <Image
                src={'/logo.png'}
                width={60}
                height={60}
                alt='logo'
                objectFit='cover'
              />
            </div>
            {/* Organization Section */}
            <div>
              <h5 className='font-bold text-lg'>Organization</h5>
              <ul className={`mt-4 space-y-2 text-[#666666]`}>
                <li>
                  <Link href='/contact' className='hover:text-primary-hover'>
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href='/giving' className='hover:text-primary-hover'>
                    Donations
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources Section */}
            <div>
              <h5 className='font-bold text-lg'>Others</h5>
              <ul className='mt-4 space-y-2 text-[#666666]'>
                <li>
                  <Link href='/about-us' className='hover:text-primary-hover'>
                    About
                  </Link>
                </li>
                <li>
                  <Link href='/resources' className='hover:text-primary-hover'>
                    Sermons
                  </Link>
                </li>
                <li>
                  <Link href='/wtk3.0' className='hover:text-primary-hover'>
                    WTK 3.0
                  </Link>
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
            &nbsp; Christ&apos;s Victorious Army, {new Date().getFullYear()}.
            All rights reserved
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
            <a
              href='https://youtube.com/@christsvictoriousarmy?si=pCKx60IIUsE243fn'
              className='text-gray-500 hover:text-red-600'
            >
              <Image
                src='/images/youtube.png'
                alt='Youtube'
                width='24'
                height='24'
                layout='cover'
              />
            </a>
            <a
              href='https://www.instagram.com/christsvictoriousarmy?igsh=em50d2IyZmw0NWo5&utm_source=qr'
              className='text-gray-500 hover:text-red-600'
            >
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
