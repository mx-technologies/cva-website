'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SetStateAction } from 'react';
import { Dispatch } from 'react';

interface NavbarItemProps {
  label: string;
  href: string;
  onClick: () => void;
}

export default function NavbarItem({ label, href, onClick }: NavbarItemProps) {
  const pathname = usePathname();

  const isActive =
    (pathname === '/' && href === '/') ||
    pathname === href ||
    pathname?.startsWith(`${href}/`);

  return (
    <li>
      <Link
        href={href}
        onClick={onClick}
        className={cn(
          'text-gray-600 hover:text-gray-500',
          isActive && ' text-black hover:text-gray-800'
        )}
      >
        {label}
      </Link>
    </li>
  );
}
