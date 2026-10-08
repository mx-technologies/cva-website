'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { openSans, playfairDisplay } from '@/lib/utils';
import toast from 'react-hot-toast';
import { FaWhatsapp } from 'react-icons/fa';

const SoundOfJubilee = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    church: '',
    city: '',
    location: '',
    referral: '',
    prayer: '',
    freeTransportation: '',
    pickupBusStop: '',
    volunteering: '',
    volunteeringCategory: '',
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.fullName) newErrors.fullName = 'Full Name is required';
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = 'Valid email is required';
    if (!formData.phone || formData.phone.length < 7)
      newErrors.phone = 'Valid phone number is required';
    if (formData.volunteering === 'Yes' && !formData.volunteeringCategory) {
      newErrors.volunteeringCategory = 'Please select a volunteer category';
    }
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
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
          fullName: '',
          email: '',
          phone: '',
          church: '',
          city: '',
          location: '',
          referral: '',
          prayer: '',
          freeTransportation: '',
          pickupBusStop: '',
          volunteering: '',
          volunteeringCategory: '',
        });
        toast.success('Registration successful!');
      } else {
        const { error } = await res.json();
        setErrors({ general: error || 'Failed to submit' });
      }
    } catch {
      setErrors({ general: 'Network error, please try again' });
    } finally {
      setLoading(false);
    }
  };

  // Inside your component
  const handleScroll = () => {
    const section = document.getElementById('register');
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Hero Section */}
      <section className='relative bg-[#8B0000] text-white py-40 px-6 text-center overflow-hidden'>
        {/* Background Image */}
        <div className='absolute inset-0 z-0'>
          <Image
            src='/images/sound-of-freedom.jpeg'
            alt='Sound of Freedom'
            fill
            priority
            className='object-cover'
          />
        </div>

        {/* Gradient Overlay */}
        <div className='absolute inset-0 z-0 bg-gradient-to-b from-black/60 via-[#8B0000]/70 to-black/70'></div>

        {/* Content */}
        <div className='relative z-10 max-w-3xl mx-auto'>
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`mb-6 text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg ${playfairDisplay.className}`}
          >
            Sound of Freedom
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className={`text-lg md:text-2xl mb-6 italic ${openSans.className}`}
          >
            Mid-Year Camp Meeting
            <br />
          </motion.p>

          {/* Event Info Cards */}
          <div className='flex flex-col md:flex-row justify-center items-center gap-4 mb-8'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className='rounded-xl bg-white/10 backdrop-blur-md px-6 py-3 text-base md:text-lg shadow-lg'
            >
              3rd - 5th July, 2026
            </motion.div>
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className='rounded-xl bg-white/10 backdrop-blur-md px-6 py-3 text-base md:text-lg shadow-lg'
            >
              Lecture Theatre, University of Lagos Guest House
            </motion.div> */}
          </div>

          {/* CTA Button */}
          <motion.a
            onClick={handleScroll}
            href='#register'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className={`inline-block rounded-2xl bg-white px-8 py-4 font-semibold text-[#8B0000] shadow-lg hover:bg-gray-100 transition ${openSans.className}`}
          >
            Register Now
          </motion.a>
        </div>
      </section>

      {/* Registration Form */}
      <section
        id='register'
        className='mt-20 mb-10 max-w-3xl mx-auto rounded-2xl bg-white px-6 py-16 shadow-md'
      >
        <h2
          className={`mb-8 text-center text-3xl font-bold text-[#8B0000] ${playfairDisplay.className}`}
        >
          Registration Form
        </h2>

        <form
          className={`space-y-6 ${openSans.className}`}
          onSubmit={handleSubmit}
        >
          {errors.general && (
            <div className='mb-4 rounded-lg bg-red-100 border border-red-400 px-4 py-3 text-red-700'>
              {errors.general}
            </div>
          )}

          {success && (
            <div className='mb-4 rounded-lg bg-green-100 border border-green-400 px-4 py-3 text-green-700'>
              🎉 Registration successful!
            </div>
          )}

          {/* Full Name */}
          <div>
            <label className='mb-1 block font-medium'>Full Name</label>
            <input
              type='text'
              // required
              value={formData.fullName}
              onChange={(e) =>
                setFormData({ ...formData, fullName: e.target.value })
              }
              className='w-full rounded-xl border p-3 focus:outline-none focus:ring-2 focus:ring-[#8B0000]'
            />
            {errors.fullName && (
              <p className='text-red-600 text-sm'>{errors.fullName}</p>
            )}
          </div>

          {/* Email Address */}
          <div>
            <label className='mb-1 block font-medium'>Email Address</label>
            <input
              type='email'
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className='w-full rounded-xl border p-3 focus:outline-none focus:ring-2 focus:ring-[#8B0000]'
            />
            {errors.email && (
              <p className='text-red-600 text-sm'>{errors.email}</p>
            )}
          </div>

          {/* Phone Number */}
          <div>
            <label className='mb-1 block font-medium'>Phone Number</label>
            <input
              type='tel'
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              className='w-full rounded-xl border p-3 focus:outline-none focus:ring-2 focus:ring-[#8B0000]'
            />
            {errors.phone && (
              <p className='text-red-600 text-sm'>{errors.phone}</p>
            )}
          </div>

          {/* Church / Denomination */}
          <div>
            <label className='mb-1 block font-medium'>
              Church / Denomination
            </label>
            <input
              type='text'
              value={formData.church}
              onChange={(e) =>
                setFormData({ ...formData, church: e.target.value })
              }
              className='w-full rounded-xl border p-3 focus:outline-none focus:ring-2 focus:ring-[#8B0000]'
            />
          </div>

          {/* How did you hear */}
          <div>
            <label className='mb-1 block font-medium'>
              How did you hear about us?
            </label>
            <select
              className='w-full rounded-xl border p-3 focus:outline-none focus:ring-2 focus:ring-[#8B0000]'
              value={formData.referral}
              onChange={(e) =>
                setFormData({ ...formData, referral: e.target.value })
              }
            >
              <option value=''>Select</option>
              <option>Social Media</option>
              <option>Church</option>
              <option>Friend / Family</option>
              <option>Other</option>
            </select>
          </div>

          {/* City of Residence */}
          <div>
            <label className='mb-1 block font-medium'>City of Residence</label>
            <input
              type='text'
              value={formData.city}
              onChange={(e) =>
                setFormData({ ...formData, city: e.target.value })
              }
              className='w-full rounded-xl border p-3 focus:outline-none focus:ring-2 focus:ring-[#8B0000]'
            />
          </div>

          {/* location */}
          <div>
            <label className='mb-1 block font-medium'>Location</label>
            <input
              type='text'
              value={formData.location}
              onChange={(e) =>
                setFormData({ ...formData, location: e.target.value })
              }
              className='w-full rounded-xl border p-3 focus:outline-none focus:ring-2 focus:ring-[#8B0000]'
            />
          </div>

          {/* Free Transportation */}
          <div>
            <label className='mb-1 block font-medium'>
              Interested in free transportation?
            </label>
            <select
              className='w-full rounded-xl border p-3 focus:outline-none focus:ring-2 focus:ring-[#8B0000]'
              value={formData.freeTransportation}
              onChange={(e) =>
                setFormData({ ...formData, freeTransportation: e.target.value })
              }
            >
              <option value=''>Select</option>
              <option value='Yes'>Yes</option>
              <option value='No'>No</option>
            </select>
          </div>

          {/* Preferred Pickup Bus Stop */}
          {formData.freeTransportation === 'Yes' && (
            <div>
              <label className='mb-1 block font-medium'>
                What is your preferred pick up bus stop?
              </label>
              <input
                type='text'
                value={formData.pickupBusStop}
                onChange={(e) =>
                  setFormData({ ...formData, pickupBusStop: e.target.value })
                }
                className='w-full rounded-xl border p-3 focus:outline-none focus:ring-2 focus:ring-[#8B0000]'
              />
            </div>
          )}

          {/* Volunteering */}
          <div>
            <label className='mb-1 block font-medium'>
              Interested in volunteering?
            </label>
            <select
              className='w-full rounded-xl border p-3 focus:outline-none focus:ring-2 focus:ring-[#8B0000]'
              value={formData.volunteering}
              onChange={(e) => {
                const val = e.target.value;
                setFormData({
                  ...formData,
                  volunteering: val,
                  volunteeringCategory: val === 'Yes' ? formData.volunteeringCategory : '',
                });
              }}
            >
              <option value=''>Select</option>
              <option value='Yes'>Yes</option>
              <option value='No'>No</option>
            </select>
          </div>

          {/* Volunteering Category */}
          {formData.volunteering === 'Yes' && (
            <div>
              <label className='mb-1 block font-medium'>
                If &quot;yes&quot;, please indicate what category
              </label>
              <select
                value={formData.volunteeringCategory}
                onChange={(e) =>
                  setFormData({ ...formData, volunteeringCategory: e.target.value })
                }
                className='w-full rounded-xl border p-3 focus:outline-none focus:ring-2 focus:ring-[#8B0000]'
              >
                <option value=''>Select Category</option>
                <option value='Welfare'>Welfare</option>
                <option value='Logistics'>Logistics</option>
                <option value='Protocol'>Protocol (Protocol Officers/Ushers)</option>
                <option value='Content Team'>Content Team</option>
                <option value='Media'>Media</option>
              </select>
              {errors.volunteeringCategory && (
                <p className='text-red-600 text-sm mt-1'>{errors.volunteeringCategory}</p>
              )}
            </div>
          )}

          {/* Prayer Requests */}
          <div>
            <label className='mb-1 block font-medium'>
              Prayer Requests (Optional)
            </label>
            <textarea
              rows={3}
              value={formData.prayer}
              onChange={(e) =>
                setFormData({ ...formData, prayer: e.target.value })
              }
              placeholder="Share what you'd like us to pray with you about"
              className='w-full rounded-xl border p-3 focus:outline-none focus:ring-2 focus:ring-[#8B0000]'
            ></textarea>
          </div>

          <button
            type='submit'
            disabled={loading}
            // className='w-full rounded-xl bg-[#8B0000] py-3 font-semibold text-white shadow-lg hover:bg-red-900'
            className='w-full rounded-xl bg-[#8B0000] py-3 font-semibold text-white shadow-lg hover:bg-red-900 disabled:opacity-50'
          >
            {loading ? 'Submitting...' : 'Submit Registration'}
          </button>
        </form>
      </section>
      {/* <br /> */}

      {/* WhatsApp Channel Invite */}
      <div className='flex flex-col justify-center items-center px-6'>
        <p
          className={`mb-4 text-lg font-medium text-gray-700 ${openSans.className}`}
        >
          Stay updated and connected with others joining the program!
        </p>
        <a
          href='https://chat.whatsapp.com/GBzGuhBuugO5xlZzGFLjtW'
          target='_blank'
          rel='noopener noreferrer'
          className='flex rounded-xl bg-[#8B0000] px-6 py-3 font-semibold text-white shadow-lg  hover:bg-red-900 transition gap-2 items-center'
        >
          <FaWhatsapp className='w-5 h-5 text-green-400' />
          Join the WhatsApp Channel
        </a>
      </div>

      <br />
    </div>
  );
};

export default SoundOfJubilee;



