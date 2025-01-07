'use client';

import { Label } from '@/components/ui/label';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useDispatch, useSelector } from 'react-redux';
import { AuthStateProps, setUser } from '@/redux/store/slices/authSlice';
import { toast } from 'react-hot-toast';
import useAxios from '@/hooks/use-axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export function EditEmailForm() {
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector((state: AuthStateProps) => state.auth.user);

  const [email, setEmail] = useState(user?.email);

  const axios = useAxios(user?.token);

  const onSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post(`/api/auth/update-email`, {
        email,
      });

      const { id, token } = response.data.user;

      dispatch(setUser({ id, email, token })); // You can add more user info if needed
      toast.success(response.data.message);

      return router.refresh();
    } catch (error) {
      console.log('[UPDATE_EMAIL]', error);
      toast.error('Something went wrong.');
    }
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when you're done.
            </CardDescription>
          </CardHeader>
          <CardContent className='space-y-2'>
            <div className='space-y-1'>
              <Label htmlFor='email'>Email Address</Label>
              <Input
                id='email'
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button
              type='submit'
              className='bg-primary-main hover:bg-primary-hover text-white'
            >
              Save changes
            </Button>
          </CardFooter>
        </Card>
      </form>
    </>
  );
}
