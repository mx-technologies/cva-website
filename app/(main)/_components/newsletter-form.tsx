'use client';
import { useState } from 'react';
import { toast } from 'react-hot-toast'; // Assuming you have react-hot-toast installed

export function NewsletterForm() {
  const [formData, setFormData] = useState({
    email: '',
  });
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = 'Valid email is required';

    return newErrors;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    setErrors({});
    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSuccess(true);
        setFormData({
          email: '',
        });
        toast.success('Newsletter subscription was successful!');
      } else {
        const { error } = await res.json();
        setErrors({ general: error || 'Failed to submit' });
      }
    } catch {
      console.log(12344);

      setErrors({ general: 'Network error, please try again' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <div className='flex items-center w-full md:w-[50%] lg:w-auto gap-3'>
          <input
            type='email'
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
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
