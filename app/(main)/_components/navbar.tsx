'use client';

import { Button } from '@/components/ui/button';
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';
import { openSans } from '@/lib/utils';
import NavbarItem from './navbar-item';

const navbarRoutes = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'About us',
    href: '/about-us',
  },
  {
    label: 'Giving',
    href: '/giving',
  },
  {
    label: 'Resources',
    href: '/resources',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
];

export default function Navbar() {
  return (
    <header className='bg-[#F5F5F5] border-b'>
      <nav
        className='flex items-center justify-between m-auto container py-4 px-8 md:px-10 lg:px-10
xl:px-14'
      >
        {/* Logo */}
        <div className='flex items-center'>
          <div className='w-10 h-10'>
            <img src='/logo.png' alt='Logo' className='object-contain' />
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <ul
          className={`hidden md:flex space-x-8 text-sm font-semibold text-gray-800 ${openSans.className}`}
        >
          {navbarRoutes.map((route) => (
            <NavbarItem
              key={route.href}
              href={route.href}
              label={route.label}
            />
          ))}
        </ul>

        {/* Join Us Button */}
        <div className='hidden md:block'>
          <Button
            variant='default'
            className={`bg-primary-main text-white hover:bg-red-800 rounded-full ${openSans.className}`}
          >
            Join Us
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className='md:hidden'>
          <Sheet>
            <SheetTrigger>
              <Button variant='ghost'>
                <svg
                  className='w-6 h-6'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M4 6h16M4 12h16m-7 6h7'
                  />
                </svg>
              </Button>
            </SheetTrigger>
            <SheetContent side='left' className='p-4 space-y-4'>
              <ul
                className={`space-y-4 text-sm font-medium text-gray-800 mt-10 ${openSans.className}`}
              >
                {navbarRoutes.map((route) => (
                  <NavbarItem
                    key={route.href}
                    href={route.href}
                    label={route.label}
                  />
                ))}
              </ul>
              <Button
                variant='default'
                className={`bg-primary-main text-white hover:bg-red-800 w-full rounded-full ${openSans.className}`}
              >
                Join Us
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
