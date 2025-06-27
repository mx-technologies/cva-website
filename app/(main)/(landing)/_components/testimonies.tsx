'use client';

import { openSans, playfairDisplay } from '@/lib/utils';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

export default function Testimonies() {
  const testimonies = [
    {
      name: 'Victor',
      title: 'My Experience with CVA',
      image: '/images/t1.png', // Replace with actual image path
      text: `CVA has been more than just a spiritual hub for me – it's a place where I've been trained in the Word of God and empowered to fulfill His purposes. I've experienced firsthand the equipping of spiritual gifts and the transformative impact of God's Word, and I'm a living testimony of His faithfulness.`,
    },
    {
      name: 'Ibukun',
      title: 'My Lost Phone Was Miraculously Returned!',
      image: '/images/t2.png', // Replace with actual image path
      text: `On Tuesday, June 3rd, 2025, I was rushing to the Bible Study at the UNILAG Guest House, drenched by rain and battling heavy traffic. Very close to UNILAG Gate, my phone slipped out of my bag. By the time I realized—just a minute later—it was gone.

Even though I had likely missed the meeting, I still made my way to the venue. Bible study had just ended, but the CVA team gathered around me with immediate support to help secure my accounts and prayed. Honestly, I was worried about the cost of replacing my phone, especially in today’s economy.

But God showed up.

Six days later, on June 9th, a man called saying he had my phone. Someone had brought the phone for him to sell, but he suspected it was stolen. His conscience didn’t let him go through with it, so he managed to convince them to return the phone to me and not sell it. He tracked me down and returned it—intact!

This was nothing short of divine intervention. I’m so grateful to God, and to the CVA family for their prayers and support. Truly, this is a house where God dwells and I bless God for the gift of this ministry. 
`,
    },
    {
      name: 'Stella',
      title: 'Delivered From Sleep Paralysis',
      image: '/images/t3.png', // Replace with actual image path
      text: `Late last year, about 4am one morning, I had an unusual experience while sleeping. Though my eyes were closed, I could see, but it wasn’t my room or anywhere familiar. It was my first encounter with sleep paralysis. What started once kept happening again and again until it became a troubling cycle. I didn’t understand it, and I honestly loathed it.

I tried everything I knew, vigils, fasting, prayers, but it didn’t stop. I was discouraged.
It felt like a spiritual battle I didn’t even know the root of.

Then one day during one of our online meetings, PAI quoted a scripture that changed everything: 

“He that is from above is above all."  John 3:31 

He explained that as God’s children, nothing should have dominion over us. 

That struck me. I remember going to bed that night insisting that nothing was above me. I’m from above, in Christ, and so I'm above all things.

That night, I slept with that conviction, and from then, everything changed. GOD delivered me completely. 

To Jesus Christ, my Deliverer, I give all the glory.
THANK YOU, JESUS.
`,
    },
    // {
    //   name: 'Oluwaseun',
    //   title: 'CVA: A Transformative Journey',
    //   image: '/images/t3.png', // Replace with actual image path
    //   text: `CVA has been a transformative experience for me. From the moment I joined this group 2 years ago, I felt embraced by a community of believers who genuinely care about each other's spiritual growth. The discussions we have during our meetings are thought-provoking and filled with deep insights, allowing me to gain a fresh perspective on the Scriptures. The teacher God uses in our meetings exemplifies servant-hearted leadership, providing guidance and encouragement as we navigate our faith journeys together.`,
    // },
  ];

  return (
    <section className='bg-gray-50 py-16'>
      <div className='container mx-auto px-6 lg:px-16 text-center'>
        <div className='w-full lg:w-[50%] m-auto'>
          <h2
            className={`text-center text-3xl md:text-5xl font-bold text-gray-900 mb-4 ${playfairDisplay.className}`}
          >
            Testimonies
          </h2>
          <p
            className={`text-center mt-4 leading-relaxed ${openSans.className}`}
          >
            Discover inspiring stories of transformed lives and unshaken faith.
            These heartfelt testimonies reflect God’s grace, the power of His
            Word, and the impact of our Christ-centered community.
          </p>
        </div>

        {/* Carousel */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30} // Space between slides
          breakpoints={{
            // Define responsive breakpoints
            640: { slidesPerView: 1 }, // Mobile
            1024: { slidesPerView: 3 }, // Desktop
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          className='my-4 lg:my-12'
          style={{
            paddingBottom: '40px',
          }}
        >
          {testimonies.map((testimony, index) => (
            <SwiperSlide key={index}>
              <div className='bg-white rounded-lg shadow-md p-6 flex flex-col text-left'>
                <div className='flex gap-3 mb-4'>
                  <img
                    src={testimony.image}
                    alt={testimony.name}
                    className='w-16 h-16 rounded-full object-cover'
                  />
                  <div
                    className={`flex flex-col justify-center ${openSans.className}`}
                  >
                    <h3 className='text-lg font-bold'>{testimony.name}</h3>
                    <p className='text-sm'>{testimony.title}</p>
                  </div>
                </div>
                <p
                  className={`text-gray-600 text-sm leading-relaxed ${openSans.className}`}
                >
                  {testimony.text}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
