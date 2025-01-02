'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

interface NavbarItemProps {
  label: string;
  href: string;
}

export default function NavbarItem({ label, href }: NavbarItemProps) {
  const pathname = usePathname();
  const router = useRouter();

  const isActive =
    (pathname === '/' && href === '/') ||
    pathname === href ||
    pathname?.startsWith(`${href}/`);

  const onClick = () => {
    router.refresh();
  };

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
