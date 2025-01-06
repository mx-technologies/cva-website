'use client';

import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from './_components/app-sidebar';
import TopNav from './_components/top-nav';
import useAuth from '@/hooks/use-auth';
import { useState } from 'react';

export default function ConsoleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(true);

  useAuth();

  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <SidebarProvider>
      <AppSidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <main className='w-full'>
        <TopNav isOpen={isOpen} setIsOpen={setIsOpen} />
        <div className='px-4'>{children}</div>
      </main>
    </SidebarProvider>
  );
}
