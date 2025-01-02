'use client';

import { openSans, playfairDisplay } from '@/lib/utils';
import Image from 'next/image';

const beliefs = [
  {
    icon: '/about-us/about-i1.png', // Replace with actual icon path
    text: 'We uphold the Word of God as the supreme authority in all matters of faith and life.',
  },
  {
    icon: '/about-us/about-i2.png', // Replace with actual icon path
    text: 'We believe in the death, burial, and resurrection of Jesus Christ as the cornerstone of our faith.',
  },
  {
    icon: '/about-us/about-i3.png', // Replace with actual icon path
    text: 'We affirm that salvation is found in no other name but Jesus Christ.',
  },
  {
    icon: '/about-us/about-i4.png', // Replace with actual icon path
    text: "We believe in the full demonstration of God's power to accomplish His will on Earth.",
  },
  {
    icon: '/about-us/about-i5.png', // Replace with actual icon path
    text: 'We believe in the Triune God—Father, Son, and Holy Spirit—and the unity of their work in creation, salvation, and sanctification.',
  },
  {
    icon: '/about-us/about-i6.png', // Replace with actual icon path
    text: 'We believe in the second coming of Jesus Christ the final judgment, and the establishment of His eternal Kingdom.',
  },
  {
    icon: '/about-us/about-i7.png', // Replace with actual icon path
    text: 'We embrace the manifestation of the gifts of the Spirit for the edification and strengthening of the saints.',
  },
  {
    icon: '/about-us/about-i8.png', // Replace with actual icon path
    text: 'We are committed to spreading the gospel making disciples, and living out the Great Commission.',
  },
];

export default function BeliefsSection() {
  return (
    <section className='bg-white py-16 px-6 md:px-12 lg:px-20'>
      <div className='text-center max-w-3xl mx-auto mb-12'>
        {/* Heading */}
        <h2
          className={`text-3xl md:text-4xl font-bold text-[#0F0000] mb-4 ${playfairDisplay.className}`}
        >
          Our Beliefs at Christ&apos;s Victorious Army
        </h2>
        <p className={`text-[#666666] ${openSans.className}`}>
          Discover our core values and the heart of Christ&apos;s Victorious
          Army—where lives are transformed by the power of God&apos;s Word and
          Spirit.
        </p>
      </div>

      {/* Beliefs Grid */}
      <div className='flex justify-center mt-10'>
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full place-items-center ${openSans.className}`}
        >
          {beliefs.map((belief, index) => (
            <div
              key={index}
              className='text-center flex flex-col items-center w-[270px]'
            >
              {/* Icon */}
              <div className='mb-4'>
                <Image
                  src={belief.icon}
                  alt={belief.icon}
                  width={64}
                  height={64}
                  className='mx-auto'
                />
              </div>
              {/* Text */}
              <p className='text-[#666666] mt-2'>{belief.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
