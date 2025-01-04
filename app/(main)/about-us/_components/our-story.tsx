'use client';

import { openSans, playfairDisplay } from '@/lib/utils';
import Image from 'next/image';

export default function OurStory() {
  return (
    <section className='mx-auto bg-[#F5F5F5] py-16 '>
      <div className='container px-6 md:px-16 lg:px-16 mx-auto'>
        <div className='text-center max-w-3xl mx-auto'>
          {/* Heading */}
          <h2
            className={`text-3xl md:text-5xl font-bold text-[#0F0000] mb-4 ${playfairDisplay.className}`}
          >
            Our Story
          </h2>
          <p className={`text-gray-700 ${openSans.className}`}>
            From a divine dream to a global vision, Christ&apos;s Victorious
            Army has grown from a small meeting of seven to a thriving community
            committed to God&apos;s eternal plan.
          </p>
        </div>

        {/* Content */}
        <div className='mt-24 space-y-16'>
          {/* Section 1 */}
          <div className='flex flex-col md:flex-row items-center md:items-start gap-8'>
            <div className='w-full md:w-1/2'>
              <Image
                src='/images/s1.png' // Replace with your image path
                alt='A Call Answered'
                width={600}
                height={400}
                className='rounded-lg object-cover'
              />
            </div>
            <div className='w-full md:w-1/2'>
              <h3
                className={`text-4xl font-bold text-[#0F0000] mb-4 ${playfairDisplay.className}`}
              >
                A Call Answered
              </h3>
              <div
                className={`${openSans.className} text-justify text-gray-700`}
              >
                <p>
                  In the early hours between 4:30 AM and 5:30 AM on July 22,
                  2021, Brother Ayomide Idogun had a dream. Three times, he
                  heard the same words echoing clearly: “The world is ready to
                  receive the knowledge of God.” At the time, he didn&apos;t
                  fully grasp its weight or significance.
                </p>
                <p className='my-4'>
                  A year and three months later, on a trip to the UAE, the
                  message came again, this time in a way that could not be
                  ignored. During a pre-worship service at a Redeemed Christian
                  Church of God, as Elijah Oyelade&apos;s song “Show Us Your
                  Glory” played, the final refrain struck Ayomide&apos;s heart
                  with new urgency: “Let the glory of the Lord cover the earth,
                  just as the waters cover the seas.”
                </p>
                <p>
                  This moment of clarity along with overwhelming nudges to hold
                  a meeting was no ordinary call; it was an urgent and divine
                  mandate.
                </p>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className='flex flex-col md:flex-row-reverse items-center md:items-start gap-8'>
            <div className='w-full md:w-1/2'>
              <Image
                src='/images/s2.png' // Replace with your image path
                alt='The First Step of Obedience'
                width={600}
                height={400}
                className='rounded-lg object-cover'
              />
            </div>
            <div className='w-full md:w-1/2'>
              <h3
                className={`text-4xl font-bold text-gray-900 mb-4 ${playfairDisplay.className}`}
              >
                The First Step of Obedience
              </h3>
              <div className={`${openSans.className} text-gray-700`}>
                <p>
                  In October 2022, Ayomide returned to Nigeria with a renewed
                  sense of purpose. On November 11, 2022, the first meeting was
                  held with seven people. God declared this gathering a
                  “conscription”—a call to enlist believers into His
                  kingdom&apos;s purpose.
                </p>
                <p className='mt-4'>
                  That small meeting was the beginning of a movement—one rooted
                  in prayer, fellowship, and a commitment to seeing God&apos;s
                  glory fill the earth. Since 2022, we have seen a broadening of
                  our vision.
                </p>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div className='flex flex-col md:flex-row items-center md:items-start gap-8'>
            <div className='w-full md:w-1/2'>
              <Image
                src='/images/wwa.png' // Replace with your image path
                alt='Join Us on This Journey of Faith'
                width={600}
                height={400}
                className='rounded-lg object-cover'
              />
            </div>
            <div className='w-full md:w-1/2'>
              <h3
                className={`text-4xl font-bold text-gray-900 mb-4 ${playfairDisplay.className}`}
              >
                Join Us on This Journey of Faith
              </h3>
              <div className={`${openSans.className}`}>
                <p className='text-gray-700'>
                  From a dream to a gathering of seven, the past three years
                  have been a journey of faith, duty, obedience, and unwavering
                  trust in God&nbsp;s plan. Today, this movement continues to
                  grow with one unchanging vision: to see God&nbsp;s kingdom
                  established and the earth filled with the knowledge of His
                  glory, just as the waters cover the seas. This is not the end,
                  it&nbsp;s only the beginning of what God is doing.
                </p>
              </div>
              <button
                className={`mt-6 px-12 py-3 bg-primary-main text-white rounded-full hover:bg-primary-hover transition ${openSans.className}`}
              >
                Join
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
