'use client';

import Navbar from '@/app/(main)/_components/navbar';
import Footer from './_components/footer';
import { usePathname } from 'next/navigation';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const footerComponent = pathname !== '/contact' && <Footer />;

  return (
    <div>
      <Navbar />
      {children}
      {footerComponent}
    </div>
  );
}
