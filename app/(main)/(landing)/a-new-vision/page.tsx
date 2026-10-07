'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { openSans, playfairDisplay } from '@/lib/utils';
import toast from 'react-hot-toast';
import { FaWhatsapp } from 'react-icons/fa';

const COUNTRIES = [
  { code: '+234', flag: '🇳🇬', name: 'Nigeria', iso: 'NG' },
  { code: '+1', flag: '🇺🇸', name: 'United States', iso: 'US' },
  { code: '+44', flag: '🇬🇧', name: 'United Kingdom', iso: 'GB' },
  { code: '+1', flag: '🇨🇦', name: 'Canada', iso: 'CA' },
  { code: '+233', flag: '🇬🇭', name: 'Ghana', iso: 'GH' },
  { code: '+254', flag: '🇰🇪', name: 'Kenya', iso: 'KE' },
  { code: '+27', flag: '🇿🇦', name: 'South Africa', iso: 'ZA' },
  { code: '+971', flag: '🇦🇪', name: 'United Arab Emirates', iso: 'AE' },
  { code: '+61', flag: '🇦🇺', name: 'Australia', iso: 'AU' },
  { code: '+49', flag: '🇩🇪', name: 'Germany', iso: 'DE' },
  { code: '+33', flag: '🇫🇷', name: 'France', iso: 'FR' },
  { code: '+39', flag: '🇮🇹', name: 'Italy', iso: 'IT' },
  { code: '+34', flag: '🇪🇸', name: 'Spain', iso: 'ES' },
  { code: '+31', flag: '🇳🇱', name: 'Netherlands', iso: 'NL' },
  { code: '+353', flag: '🇮🇪', name: 'Ireland', iso: 'IE' },
  { code: '+91', flag: '🇮🇳', name: 'India', iso: 'IN' },
  { code: '+86', flag: '🇨🇳', name: 'China', iso: 'CN' },
  { code: '+81', flag: '🇯🇵', name: 'Japan', iso: 'JP' },
  { code: '+55', flag: '🇧🇷', name: 'Brazil', iso: 'BR' },
  { code: '+250', flag: '🇷🇼', name: 'Rwanda', iso: 'RW' },
  { code: '+256', flag: '🇺🇬', name: 'Uganda', iso: 'UG' },
  { code: '+255', flag: '🇹🇿', name: 'Tanzania', iso: 'TZ' },
  { code: '+237', flag: '🇨🇲', name: 'Cameroon', iso: 'CM' },
  { code: '+225', flag: '🇨🇮', name: 'Ivory Coast', iso: 'CI' },
  { code: '+231', flag: '🇱🇷', name: 'Liberia', iso: 'LR' },
  { code: '+232', flag: '🇸🇱', name: 'Sierra Leone', iso: 'SL' },
  { code: '+220', flag: '🇬🇲', name: 'Gambia', iso: 'GM' },
  { code: '+260', flag: '🇿🇲', name: 'Zambia', iso: 'ZM' },
  { code: '+263', flag: '🇿🇼', name: 'Zimbabwe', iso: 'ZW' },
  { code: '+966', flag: '🇸🇦', name: 'Saudi Arabia', iso: 'SA' },
  { code: '+974', flag: '🇶🇦', name: 'Qatar', iso: 'QA' },
  { code: '+65', flag: '🇸🇬', name: 'Singapore', iso: 'SG' },
  { code: '+60', flag: '🇲🇾', name: 'Malaysia', iso: 'MY' },
  { code: '+64', flag: '🇳🇿', name: 'New Zealand', iso: 'NZ' },
];

const ANewVision = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    countryIso: 'NG',
    countryCode: '+234',
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

  const selectedCountry = COUNTRIES.find((c) => c.iso === formData.countryIso) || COUNTRIES[0];

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
      const fullPhoneNumber = `${formData.countryCode} ${formData.phone}`.trim();
      const payload = {
        ...formData,
        phone: fullPhoneNumber,
      };

      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setSuccess(true);
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          countryIso: 'NG',
          countryCode: '+234',
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
            src='/images/a-new-vision.jpeg'
            alt='Worship The King - A New Vision'
            fill
            priority
            className='object-cover'
          />
        </div>

        {/* Gradient Overlay tailored to the flyer's mountain glow and deep red/slate tones */}
        <div className='absolute inset-0 z-0 bg-gradient-to-b from-slate-950/70 via-[#8B0000]/60 to-black/80'></div>

        {/* Content */}
        <div className='relative z-10 max-w-3xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className='inline-block mb-3 px-4 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-sm font-semibold tracking-wider uppercase backdrop-blur-sm'
          >
            Christ&apos;s Victorious Nation
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`mb-4 text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg text-white ${playfairDisplay.className}`}
          >
            Worship The King
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className={`text-xl md:text-3xl mb-6 italic text-amber-300 drop-shadow font-serif ${openSans.className}`}
          >
            Theme: A New Vision
          </motion.p>

          {/* Event Info Cards */}
          <div className='flex flex-col md:flex-row justify-center items-center gap-4 mb-8'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className='rounded-xl bg-white/10 backdrop-blur-md px-6 py-3 text-base md:text-lg font-semibold text-white shadow-lg border border-white/20'
            >
              28th November, 2026
            </motion.div>
          </div>

          {/* CTA Button */}
          <motion.a
            onClick={handleScroll}
            href='#register'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className={`inline-block rounded-2xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 px-8 py-4 font-bold text-slate-950 shadow-xl hover:brightness-110 transition cursor-pointer ${openSans.className}`}
          >
            Register Now
          </motion.a>
        </div>
      </section>

      {/* Registration Form */}
      <section
        id='register'
        className='mt-20 mb-10 max-w-3xl mx-auto rounded-2xl bg-white px-6 py-16 shadow-md border border-gray-100'
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
            <label className='mb-1 block font-medium text-gray-700'>Full Name</label>
            <input
              type='text'
              value={formData.fullName}
              onChange={(e) =>
                setFormData({ ...formData, fullName: e.target.value })
              }
              className='w-full rounded-xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-[#8B0000]'
            />
            {errors.fullName && (
              <p className='text-red-600 text-sm mt-1'>{errors.fullName}</p>
            )}
          </div>

          {/* Email Address */}
          <div>
            <label className='mb-1 block font-medium text-gray-700'>Email Address</label>
            <input
              type='email'
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className='w-full rounded-xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-[#8B0000]'
            />
            {errors.email && (
              <p className='text-red-600 text-sm mt-1'>{errors.email}</p>
            )}
          </div>

          {/* Phone Number with Country Flag & Dial Code Selector */}
          <div>
            <label className='mb-1 block font-medium text-gray-700'>Phone Number</label>
            <div className='relative flex rounded-xl border border-gray-300 shadow-sm focus-within:ring-2 focus-within:ring-[#8B0000] focus-within:border-transparent overflow-hidden'>
              <div className='relative flex items-center bg-gray-100 border-r border-gray-300 px-3 py-3 text-gray-700 text-sm font-medium hover:bg-gray-200 transition cursor-pointer shrink-0'>
                <span className='mr-2 text-xl leading-none'>{selectedCountry.flag}</span>
                <span className='font-semibold text-gray-800 mr-1.5'>{selectedCountry.code}</span>
                <span className='text-xs text-gray-500'>▼</span>
                <select
                  aria-label='Country Code'
                  value={formData.countryIso}
                  onChange={(e) => {
                    const matched = COUNTRIES.find((c) => c.iso === e.target.value);
                    if (matched) {
                      setFormData({
                        ...formData,
                        countryIso: matched.iso,
                        countryCode: matched.code,
                      });
                    }
                  }}
                  className='absolute inset-0 w-full h-full opacity-0 cursor-pointer'
                >
                  {COUNTRIES.map((c) => (
                    <option key={c.iso} value={c.iso}>
                      {c.flag} {c.name} ({c.code})
                    </option>
                  ))}
                </select>
              </div>
              <input
                type='tel'
                placeholder='801 234 5678'
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className='w-full p-3 focus:outline-none bg-white text-gray-900'
              />
            </div>
            {errors.phone && (
              <p className='text-red-600 text-sm mt-1'>{errors.phone}</p>
            )}
          </div>

          {/* Church / Denomination */}
          <div>
            <label className='mb-1 block font-medium text-gray-700'>
              Church / Denomination
            </label>
            <input
              type='text'
              value={formData.church}
              onChange={(e) =>
                setFormData({ ...formData, church: e.target.value })
              }
              className='w-full rounded-xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-[#8B0000]'
            />
          </div>

          {/* How did you hear */}
          <div>
            <label className='mb-1 block font-medium text-gray-700'>
              How did you hear about us?
            </label>
            <select
              className='w-full rounded-xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-[#8B0000]'
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
            <label className='mb-1 block font-medium text-gray-700'>City of Residence</label>
            <input
              type='text'
              value={formData.city}
              onChange={(e) =>
                setFormData({ ...formData, city: e.target.value })
              }
              className='w-full rounded-xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-[#8B0000]'
            />
          </div>

          {/* Location */}
          <div>
            <label className='mb-1 block font-medium text-gray-700'>Location</label>
            <input
              type='text'
              value={formData.location}
              onChange={(e) =>
                setFormData({ ...formData, location: e.target.value })
              }
              className='w-full rounded-xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-[#8B0000]'
            />
          </div>

          {/* Free Transportation */}
          <div>
            <label className='mb-1 block font-medium text-gray-700'>
              Interested in free transportation?
            </label>
            <select
              className='w-full rounded-xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-[#8B0000]'
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
              <label className='mb-1 block font-medium text-gray-700'>
                What is your preferred pick up bus stop?
              </label>
              <input
                type='text'
                value={formData.pickupBusStop}
                onChange={(e) =>
                  setFormData({ ...formData, pickupBusStop: e.target.value })
                }
                className='w-full rounded-xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-[#8B0000]'
              />
            </div>
          )}

          {/* Volunteering */}
          <div>
            <label className='mb-1 block font-medium text-gray-700'>
              Interested in volunteering?
            </label>
            <select
              className='w-full rounded-xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-[#8B0000]'
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
              <label className='mb-1 block font-medium text-gray-700'>
                If &quot;yes&quot;, please indicate what category
              </label>
              <select
                value={formData.volunteeringCategory}
                onChange={(e) =>
                  setFormData({ ...formData, volunteeringCategory: e.target.value })
                }
                className='w-full rounded-xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-[#8B0000]'
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
            <label className='mb-1 block font-medium text-gray-700'>
              Prayer Requests (Optional)
            </label>
            <textarea
              rows={3}
              value={formData.prayer}
              onChange={(e) =>
                setFormData({ ...formData, prayer: e.target.value })
              }
              placeholder="Share what you'd like us to pray with you about"
              className='w-full rounded-xl border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-[#8B0000]'
            ></textarea>
          </div>

          <button
            type='submit'
            disabled={loading}
            className='w-full rounded-xl bg-[#8B0000] py-3 font-semibold text-white shadow-lg hover:bg-red-900 transition disabled:opacity-50'
          >
            {loading ? 'Submitting...' : 'Submit Registration'}
          </button>
        </form>
      </section>

      {/* WhatsApp Channel Invite */}
      <div className='flex flex-col justify-center items-center px-6 pb-12'>
        <p
          className={`mb-4 text-lg font-medium text-gray-700 ${openSans.className}`}
        >
          Stay updated and connected with others joining the program!
        </p>
        <a
          href='https://chat.whatsapp.com/GBzGuhBuugO5xlZzGFLjtW'
          target='_blank'
          rel='noopener noreferrer'
          className='flex rounded-xl bg-[#8B0000] px-6 py-3 font-semibold text-white shadow-lg hover:bg-red-900 transition gap-2 items-center'
        >
          <FaWhatsapp className='w-5 h-5 text-green-400' />
          Join the WhatsApp Channel
        </a>
      </div>
    </div>
  );
};

export default ANewVision;

