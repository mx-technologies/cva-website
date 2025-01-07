'use client';

import Navbar from '@/app/(main)/_components/navbar';
import Footer from './_components/footer';
import { usePathname } from 'next/navigation';
import { ToastProvider } from '@/components/providers/toaster-provider';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const footerComponent = pathname !== '/contact' && <Footer />;

  return (
    <div>
      <ToastProvider />
      <Navbar />
      {children}
      {footerComponent}
    </div>
  );
}
