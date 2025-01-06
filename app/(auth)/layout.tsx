'use client';

import useAuth from '@/hooks/use-auth';
import { ToastContainer } from 'react-toastify';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useAuth();

  return (
    <div>
      {children}
      <ToastContainer />
    </div>
  );
}
