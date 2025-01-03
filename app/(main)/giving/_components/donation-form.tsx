'use client';

import { openSans, playfairDisplay } from '@/lib/utils';
import { ClipboardCopy } from 'lucide-react';
import { useState } from 'react';

export default function DonationForm() {
  const [activeTab, setActiveTab] = useState('Cash'); // Default to "Cash" tab

  return (
    <div className='min-h-screen bg-gray-100 flex flex-col items-center justify-center py-10 gap-4 px-8 md:px-0'>
      <div className='max-w-lg'>
        <h1
          className={`text-center text-5xl font-bold text-gray-900 mb-4 ${playfairDisplay.className}`}
        >
          How You Can Give?
        </h1>
        <p className={`text-center text-gray-600 mb-6 ${openSans.className}`}>
          Every gift you give goes beyond monetary value—it changes lives.
          Here&apos;s how your contributions make a difference:
        </p>
      </div>
      <div
        className={`max-w-2xl w-full bg-white shadow-lg rounded-xl p-6 ${openSans.className} py-10`}
      >
        {/* Tabs */}
        <div className='flex justify-center mb-6 '>
          <div className='bg-[#F5F5F5] rounded-full'>
            {['Cash', 'Transfer', 'Paypal'].map((tab) => (
              <button
                key={tab}
                className={`px-8 py-2 font-semibold rounded-full ${
                  activeTab === tab
                    ? 'bg-red-800 text-white'
                    : 'bg-[#F5F5F5] text-gray-800'
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Content Based on Active Tab */}
        {activeTab === 'Cash' && (
          <>
            {/* Form */}
            <form>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4'>
                <div>
                  <label className='block text-gray-700 font-medium mb-1'>
                    Full Name
                  </label>
                  <input
                    type='text'
                    className='w-full border border-gray-300 p-2 focus:outline-primary-main rounded-full'
                    placeholder='Enter your full name'
                  />
                </div>
                <div>
                  <label className='block text-gray-700 font-medium mb-1'>
                    Phone Number
                  </label>
                  <input
                    type='text'
                    className='w-full border border-gray-300  p-2 focus:outline-primary-main rounded-full'
                    placeholder='Enter your phone number'
                  />
                </div>
              </div>

              <div className='mb-4'>
                <label className='block text-gray-700 font-medium mb-1'>
                  What would you like to give?
                </label>
                <input
                  type='text'
                  className='w-full border border-gray-300 p-2 focus:outline-primary-main rounded-full'
                  placeholder='e.g. offering, tithe, building project...'
                />
              </div>

              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4'>
                <div>
                  <label className='block text-gray-700 font-medium mb-1'>
                    Date to Give
                  </label>
                  <input
                    type='date'
                    className='w-full border border-gray-300 p-2 focus:outline-primary-main rounded-full'
                  />
                </div>
                <div>
                  <label className='block text-gray-700 font-medium mb-1'>
                    Amount
                  </label>
                  <div className='flex items-center border border-gray-300 rounded-full p-2 '>
                    <span className='text-gray-600 mr-2'>$</span>
                    <input
                      type='number'
                      className='w-full focus:outline-none'
                      placeholder='Enter amount'
                    />
                  </div>
                </div>
              </div>

              <button
                type='submit'
                className='w-full bg-primary-main text-white font-semibold py-3 rounded-full hover:bg-primary-hover transition'
              >
                Done
              </button>
            </form>
          </>
        )}
        {activeTab === 'Transfer' && (
          <>
            <div className='mb-4'>
              {/* Bank Details */}
              <div className={`${openSans.className} pb-4 mb-4`}>
                <div className='flex justify-between items-center'>
                  <div>
                    <p className='text-gray-600 text-sm'>BANK NAME</p>
                    <p className='text-gray-900 font-bold text-lg'>
                      CVA Church Account
                    </p>
                  </div>

                  <p className='text-red-800 font-semibold'>UBA</p>
                </div>
                <div className='flex justify-between items-center mt-4'>
                  <div>
                    <p className='text-gray-600 text-sm'>ACCOUNT NUMBER</p>
                    <p className='text-gray-900 font-bold text-lg'>
                      2297753510
                    </p>
                  </div>
                  <button
                    className='text-gray-600 hover:text-gray-900 focus:outline-none'
                    onClick={() => navigator.clipboard.writeText('2297753510')}
                  >
                    <ClipboardCopy />
                  </button>
                </div>
              </div>
            </div>
            {/* Form */}
            <form>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4'>
                <div>
                  <label className='block text-gray-700 font-medium mb-1'>
                    Full Name
                  </label>
                  <input
                    type='text'
                    className='w-full border border-gray-300 rounded-full p-2 focus:outline-primary-main'
                    placeholder='Enter your full name'
                  />
                </div>
                <div>
                  <label className='block text-gray-700 font-medium mb-1'>
                    Phone Number
                  </label>
                  <input
                    type='text'
                    className='w-full border border-gray-300 rounded-full p-2 focus:outline-primary-main'
                    placeholder='Enter your phone number'
                  />
                </div>
              </div>

              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4'>
                <div>
                  <label className='block text-gray-700 font-medium mb-1'>
                    What would you like to give?
                  </label>
                  <input
                    type='text'
                    className='w-full border border-gray-300 rounded-full p-2 focus:outline-primary-main'
                    placeholder='e.g. offering, tithe, building project...'
                  />
                </div>
                <div>
                  <label className='block text-gray-700 font-medium mb-1'>
                    Amount
                  </label>
                  <div className='flex items-center border border-gray-300 rounded-full focus:outline-primary-main p-2'>
                    <span className='text-gray-600 mr-2'>₦</span>
                    <input
                      type='number'
                      className='w-full focus:outline-none'
                      placeholder='Enter amount'
                    />
                  </div>
                </div>
              </div>

              <button
                type='submit'
                className='w-full bg-red-800 text-white font-semibold py-3 rounded-lg hover:bg-red-700 transition'
              >
                Done
              </button>
            </form>
          </>
        )}
        {activeTab === 'Paypal' && (
          <>
            {/* Form */}
            <form>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4'>
                <div>
                  <label className='block text-gray-700 font-medium mb-1'>
                    Full Name
                  </label>
                  <input
                    type='text'
                    className='w-full border border-gray-300 p-2 focus:outline-primary-main rounded-full'
                    placeholder='Enter your full name'
                  />
                </div>
                <div>
                  <label className='block text-gray-700 font-medium mb-1'>
                    Phone Number
                  </label>
                  <input
                    type='text'
                    className='w-full border border-gray-300  p-2 focus:outline-primary-main rounded-full'
                    placeholder='Enter your phone number'
                  />
                </div>
              </div>

              <div className='mb-4'>
                <label className='block text-gray-700 font-medium mb-1'>
                  What would you like to give?
                </label>
                <input
                  type='text'
                  className='w-full border border-gray-300 p-2 focus:outline-primary-main rounded-full'
                  placeholder='e.g. offering, tithe, building project...'
                />
              </div>

              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4'>
                <div>
                  <label className='block text-gray-700 font-medium mb-1'>
                    Date to Give
                  </label>
                  <input
                    type='date'
                    className='w-full border border-gray-300 p-2 focus:outline-primary-main rounded-full'
                  />
                </div>
                <div>
                  <label className='block text-gray-700 font-medium mb-1'>
                    Amount
                  </label>
                  <div className='flex items-center border border-gray-300 rounded-full p-2 '>
                    <span className='text-gray-600 mr-2'>$</span>
                    <input
                      type='number'
                      className='w-full focus:outline-none'
                      placeholder='Enter amount'
                    />
                  </div>
                </div>
              </div>

              <button
                type='submit'
                className='w-full bg-primary-main text-white font-semibold py-3 rounded-full hover:bg-primary-hover transition'
              >
                Done
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
