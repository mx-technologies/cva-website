'use client';
import { useState } from 'react';
import { toast } from 'react-hot-toast'; // Assuming you have react-hot-toast installed
import axios from 'axios';

export function NewsletterForm() {
  const [email, setEmail] = useState('');

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/newsletter/subscribe', { email });
      toast.success(response.data.message); // Show success message
      setEmail(''); // Clear the input field
    } catch (error: any) {
      console.log('[SUBSCRIBE_NEWSLETTER]', error);

      const errorMessage =
        error.response?.data?.message || 'An error occurred. Please try again.';
      toast.error(errorMessage); // Show error message
    }
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <div className='flex items-center w-full md:w-[50%] lg:w-auto gap-3'>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Enter your email'
            className=' flex-grow px-4 py-2 border border-[#666666] rounded-full text-sm focus:outline-none'
            required
          />
          <button
            type='submit'
            className='bg-primary-main rounded-full text-white px-6 py-2 text-sm hover:bg-primary-hover'
          >
            Send
          </button>
        </div>
      </form>
      <p className='text-gray-500 text-sm'>Join the Newsletter</p>
    </>
  );
}
