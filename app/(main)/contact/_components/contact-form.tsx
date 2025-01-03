import { openSans, playfairDisplay } from '@/lib/utils';
import Image from 'next/image';

const ContactForm = () => {
  return (
    <section className='w-full pt-12 px-8 md:px-36 bg-white rounded-lg'>
      {/* Header */}
      <h1
        className={`text-5xl font-bold text-black ${playfairDisplay.className}`}
      >
        Get in Touch
      </h1>
      <p className={`mt-2 text-gray-600 ${openSans.className}`}>
        We love hearing from you and connecting with you, feel free to reach us.
      </p>

      {/* Contact Information */}
      <div className={`mt-12 space-y-2 ${openSans.className}`}>
        <div className='flex items-center space-x-2'>
          <span className='text-primary-main'>
            <Image src='/phone.svg' alt='Email' width={14} height={12} />
          </span>
          <a
            href='tel:2348166396694'
            className='text-primary-main underline underline-offset-8'
          >
            +2348166396694
          </a>
        </div>
        <div className='flex items-center space-x-2'>
          <span className='text-primary-main'>
            <Image src='/email.svg' alt='Email' width={14} height={12} />
          </span>
          <a
            href='mailto:christsvictoriousarmy@gmail.com'
            className='text-primary-main underline underline-offset-8'
          >
            christsvictoriousarmy@gmail.com
          </a>
        </div>
      </div>

      {/* Form */}
      <form className={`mt-8 space-y-4 ${openSans.className}`}>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
          <div>
            <label>First Name</label>
            <input
              type='text'
              placeholder='First name'
              className='w-full px-4 py-2 mt-1 border border-[#999999] rounded-full focus:outline-primary-main'
            />
          </div>

          <div>
            <label>Last Name</label>
            <input
              type='text'
              placeholder='Last name'
              className='w-full px-4 py-2 mt-1 border border-[#999999] rounded-full focus:outline-primary-main'
            />
          </div>
        </div>

        <div>
          <label>Email Address</label>
          <input
            type='email'
            placeholder='Email Address'
            className='w-full px-4 py-2 mt-1 border border-[#999999] rounded-full focus:outline-primary-main'
          />
        </div>
        <div>
          <label>Phone Number</label>
          <input
            type='tel'
            placeholder='Phone Number'
            className='w-full px-4 py-2 mt-1 border border-[#999999] rounded-full focus:outline-primary-main'
          />
        </div>

        <div>
          <label>Message</label>
          <textarea
            rows={4}
            placeholder='Leave us a message'
            className='w-full px-4 py-2 mt-1 border border-[#999999] rounded-3xl focus:outline-primary-main'
          ></textarea>
        </div>
        <button
          type='submit'
          className='w-full px-4 py-2 text-white bg-primary-main rounded-lg hover:bg-primary-hover'
        >
          Send
        </button>
      </form>

      {/* Footer */}
      <div className={`mt-8 text-center ${openSans.className}`}>
        <div className='relative'>
          <hr className='bg-[#999999]' />
          <div className='flex justify-center absolute top-[-14] left-0 right-0 text-gray-600'>
            <div className='bg-white text-[#999999] px-3'>
              or connect with us on
            </div>
          </div>
        </div>
        {/* Social Media Links */}
        <div className='flex justify-center space-x-6 mt-5'>
          <a href='#' className='text-gray-500'>
            <Image
              src='/images/facebook.png'
              alt='Facebook'
              width='34'
              height='34'
              layout='cover'
            />
          </a>
          <a href='#' className='text-gray-500'>
            <Image
              src='/images/youtube.png'
              alt='Youtube'
              width='34'
              height='34'
              layout='cover'
            />
          </a>
          <a href='#' className='text-gray-500'>
            <Image
              src='/images/instagram.png'
              alt='Instagram'
              width='34'
              height='34'
              layout='cover'
            />
          </a>
          <a href='#' className='text-gray-500'>
            <Image
              src='/images/x.png'
              alt='X'
              width='34'
              height='34'
              layout='cover'
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
