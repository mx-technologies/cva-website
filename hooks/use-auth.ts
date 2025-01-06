'use client';

import { useSelector } from 'react-redux';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';

const useAuth = () => {
  const router = useRouter();
  const pathname = usePathname();
  const user = useSelector((state: any) => state.auth.user);

  useEffect(() => {
    if (!user) {
      // Redirect to login if user is not authenticated
      router.push('/console-signin'); // Adjust the path based on your routing structure
    } else {
      if (pathname === '/console-signin') {
        router.push('/console');
      }
    }
  });
};

export default useAuth;
