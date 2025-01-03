import { openSans, playfairDisplay } from '@/lib/utils';
import Image from 'next/image';

export default function GenerositySection() {
  return (
    <section className='bg-primary-main'>
      <div className='container py-16 px-8 md:px-16 m-auto'>
        <div className='relative text-white flex flex-col md:flex-row items-center gap-16'>
          {/* Text Section */}
          <div className='flex-1'>
            <h2
              className={`text-4xl md:text-5xl font-bold mb-4 ${playfairDisplay.className}`}
            >
              Your Generosity in Action
            </h2>
            <div className={openSans.className}>
              <p className='text-lg mb-6'>
                Every gift you give goes beyond monetary value—it changes lives.
                Here&apos;s how your contributions make a difference:
              </p>
              <ul className='list-disc list-inside space-y-3'>
                <li>Supporting missions and evangelism efforts.</li>
                <li>
                  Organizing outreach programs for underserved communities.
                </li>
                <li>
                  Funding educational resources like devotionals and study
                  materials.
                </li>
                <li>Maintaining our worship facilities and online ministry.</li>
              </ul>
            </div>
          </div>

          {/* Heart Image Section */}
          <div className='relative flex flex-1 w-full h-80 md:h-auto justify-end'>
            {/* <div
          className='absolute inset-0 bg-cover bg-center rounded-full'
          style={{
            clipPath:
              'polygon(50% 0%, 85% 15%, 100% 50%, 85% 85%, 50% 100%, 15% 85%, 0% 50%, 15% 15%)',
            backgroundImage: "url('/images/g2.png')", // Replace with your image path
          }}
        ></div> */}
            <Image src='/giving/g2.png' alt='giving' width='502' height='426' />
          </div>
        </div>
      </div>
    </section>
  );
}
