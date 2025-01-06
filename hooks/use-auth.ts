'use client';

import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const useAuth = () => {
  const router = useRouter();
  const user = useSelector((state: any) => state.auth.user);

  useEffect(() => {
    if (!user) {
      // Redirect to login if user is not authenticated
      router.push('/console-signin'); // Adjust the path based on your routing structure
    } else {
      router.push('/console');
    }
  });
};

export default useAuth;
