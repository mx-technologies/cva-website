import { Open_Sans, Playfair_Display } from 'next/font/google';

import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const playfairDisplay = Playfair_Display({
  variable: '--font-playfair-display',
  subsets: ['latin'],
  weight: '600',
});

export const openSans = Open_Sans({
  variable: '--font-open-sans',
  subsets: ['latin'],
});

export const resources = [
  'Sermons',
  'Books',
  'Devotionals',
  'Music & Worship',
  'Recorded Live Sessions',
];

export const stringifyUrl = (category: string) => {
  return category.split(' ').join('-').toLowerCase();
};
