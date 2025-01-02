'use client';

export default function Footer() {
  return (
    <footer className='bg-gray-50 text-gray-700'>
      <div className='container mx-auto px-6 py-12'>
        {/* Footer Sections */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 text-left'>
          {/* Organization Section */}
          <div>
            <h5 className='font-bold text-lg'>Organization</h5>
            <ul className='mt-4 space-y-2'>
              <li>
                <a href='#' className='hover:text-red-600'>
                  Contact Us
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-red-600'>
                  Donations
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-red-600'>
                  Blog & News
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Section */}
          <div>
            <h5 className='font-bold text-lg'>Resources</h5>
            <ul className='mt-4 space-y-2'>
              <li>
                <a href='#' className='hover:text-red-600'>
                  Documentation
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-red-600'>
                  Papers
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-red-600'>
                  Guidelines
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <h5 className='font-bold text-lg'>Legal</h5>
            <ul className='mt-4 space-y-2'>
              <li>
                <a href='#' className='hover:text-red-600'>
                  Terms of Service
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-red-600'>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-red-600'>
                  Cookies Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter and Social Media */}
        <div className='mt-12 flex flex-col lg:flex-row lg:justify-between items-center'>
          {/* Newsletter Section */}
          <div className='flex items-center w-full lg:w-auto'>
            <input
              type='email'
              placeholder='Enter your email'
              className='flex-grow px-4 py-2 border border-gray-300 rounded-l-full text-sm focus:outline-none'
            />
            <button className='bg-red-600 text-white px-6 py-2 rounded-r-full text-sm hover:bg-red-700'>
              Send
            </button>
          </div>
          <p className='text-gray-500 text-sm mt-4 lg:mt-0 lg:ml-4'>
            Join the Newsletter
          </p>
        </div>

        {/* Social Media Links */}
        <div className='mt-8 flex justify-center lg:justify-end space-x-4'>
          <a href='#' className='text-gray-500 hover:text-red-600'>
            <i className='fab fa-facebook-f'></i>
          </a>
          <a href='#' className='text-gray-500 hover:text-red-600'>
            <i className='fab fa-youtube'></i>
          </a>
          <a href='#' className='text-gray-500 hover:text-red-600'>
            <i className='fab fa-instagram'></i>
          </a>
          <a href='#' className='text-gray-500 hover:text-red-600'>
            <i className='fab fa-twitter'></i>
          </a>
        </div>

        {/* Footer Bottom */}
        <div className='mt-12 border-t border-gray-200 pt-6 text-center text-sm text-gray-500'>
          <span>© Christ Victorious Armies, 2024. All rights reserved</span>
        </div>
      </div>
    </footer>
  );
}
