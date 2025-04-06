'use client';

import { openSans, playfairDisplay } from '@/lib/utils';
import Image from 'next/image';
import { useState } from 'react';
import { Dialog } from '@headlessui/react';

const approachDetails = {
  prayer: {
    title: 'Prayer and Intercession',
    description:
      'Through fervent prayer and heartfelt intercession, we connect with God to seek guidance, healing, and breakthroughs in the lives of individuals and our community. Our prayer gatherings serve as a spiritual backbone, igniting faith and divine intervention.',
  },
  evangelism: {
    title: 'Evangelism and Outreaches',
    description:
      'We are passionate about sharing the love and message of Christ beyond our walls. Through street evangelism, missions, and community outreaches, we touch lives, restore hope, and build lasting change through the Gospel.',
  },
  teaching: {
    title: 'Teaching the Word',
    description:
      'The foundation of faith is the Word of God. We emphasize sound biblical teaching to equip believers with truth, deepen their walk with Christ, and empower them to live out the Gospel daily.',
  },
};

export default function ApproachSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeModal, setActiveModal] = useState<
    keyof typeof approachDetails | null
  >(null);

  const openModal = (key: keyof typeof approachDetails) => {
    setActiveModal(key);
    setIsOpen(true);
  };

  return (
    <section className='container bg-[#F5F5F5] py-16 px-6 md:px-16 lg:px-16 mx-auto'>
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
        <div className='grid md:grid-rows-2 md:grid-flow-col gap-6 w-full'>
          {/* Item 1 */}
          <div className='md:col-span-2 relative group overflow-hidden rounded-lg shadow-lg md:h-[290px]'>
            <Image
              src='/about-us/approach-i1.jpeg'
              alt='Prayer and Intercession'
              width={300}
              height={20}
              className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-300'
            />
            <div className='absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white p-6 gap-2 md:gap-3'>
              <h3
                className={`text-2xl md:text-5xl font-bold mb-2 ${playfairDisplay.className}`}
              >
                Prayer and Intercession
              </h3>
              <button
                onClick={() => openModal('prayer')}
                className={`text-lg font-semibold underline hover:underline-offset-4 transition-all duration-300 ${openSans.className} underline-offset-2`}
              >
                Learn More →
              </button>
            </div>
          </div>

          {/* Item 2 */}
          <div className='md:col-span-2 relative group overflow-hidden rounded-lg shadow-lg h-[200px] md:h-[290px]'>
            <Image
              src='/about-us/approach-i2.png'
              alt='Evangelism and Outreaches'
              width={592}
              height={190}
              className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-300'
            />
            <div className='absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white p-6 gap-2 md:gap-3'>
              <h3
                className={`text-2xl md:text-5xl text-center font-bold mb-2 ${playfairDisplay.className}`}
              >
                Evangelism and Outreaches
              </h3>
              <button
                onClick={() => openModal('evangelism')}
                className={`text-lg font-semibold underline hover:underline-offset-4 transition-all duration-300 ${openSans.className} underline-offset-2`}
              >
                Learn More →
              </button>
            </div>
          </div>

          {/* Item 3 */}
          <div className='md:row-span-2 relative group overflow-hidden rounded-lg shadow-lg md:w-[600px] md:h-[605px]'>
            <Image
              src='/about-us/approach-i3.jpeg'
              alt='Teaching the Word'
              width={800}
              height={400}
              className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-300'
            />
            <div className='absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white p-6 gap-3'>
              <h3
                className={`text-3xl text-center md:text-5xl font-bold mb-2 ${playfairDisplay.className}`}
              >
                Teaching the Word
              </h3>
              <button
                onClick={() => openModal('teaching')}
                className={`text-lg font-semibold underline hover:underline-offset-4 transition-all duration-300 ${openSans.className} underline-offset-2`}
              >
                Learn More →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className='relative z-50'
      >
        <div className='fixed inset-0 bg-black/50' aria-hidden='true' />
        <div className='fixed inset-0 flex items-center justify-center p-4'>
          <Dialog.Panel className='w-full max-w-md rounded-xl bg-white p-6 space-y-4 shadow-lg'>
            <Dialog.Title
              className={`text-2xl font-bold ${playfairDisplay.className}`}
            >
              {activeModal && approachDetails[activeModal].title}
            </Dialog.Title>
            <Dialog.Description
              className={`text-gray-700 ${openSans.className}`}
            >
              {activeModal && approachDetails[activeModal].description}
            </Dialog.Description>
            <button
              onClick={() => setIsOpen(false)}
              className='mt-4 px-4 py-2 bg-[#0F0000] text-white rounded hover:bg-opacity-90 transition'
            >
              Close
            </button>
          </Dialog.Panel>
        </div>
      </Dialog>
    </section>
  );
}
