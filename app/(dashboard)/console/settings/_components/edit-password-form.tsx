'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { AuthStateProps, clearUser } from '@/redux/store/slices/authSlice';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';
import useAxios from '@/hooks/use-axios';

export function EditPasswordForm() {
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector((state: AuthStateProps) => state.auth.user);
  const axios = useAxios(user?.email);

  const [securityInfo, setSecurityInfo] = useState({
    currentPassword: '',
    newPassword: '',
    newPasswordConfirmation: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setIsLoading(true);

      const response = await axios.post(
        '/api/auth/update-password',
        securityInfo
      );
      toast.success(response.data.message);

      setSecurityInfo({
        currentPassword: '',
        newPassword: '',
        newPasswordConfirmation: '',
      });

      // Logout user
      dispatch(clearUser());
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.message || 'An error occurred. Please try again.';
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here. After saving, you'll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className='space-y-2'>
            <div className='space-y-1'>
              <Label htmlFor='current'>Current password</Label>
              <Input
                id='current'
                type='password'
                onChange={(e) =>
                  setSecurityInfo({
                    ...securityInfo,
                    currentPassword: e.target.value,
                  })
                }
                value={securityInfo.currentPassword}
                required
              />
            </div>
            <div className='space-y-1'>
              <Label htmlFor='new'>New password</Label>
              <Input
                id='new'
                type='password'
                onChange={(e) =>
                  setSecurityInfo({
                    ...securityInfo,
                    newPassword: e.target.value,
                  })
                }
                value={securityInfo.newPassword}
                required
              />
            </div>
            <div className='space-y-1'>
              <Label htmlFor='new'>New password Confirmation</Label>
              <Input
                id='new'
                type='password'
                onChange={(e) =>
                  setSecurityInfo({
                    ...securityInfo,
                    newPasswordConfirmation: e.target.value,
                  })
                }
                value={securityInfo.newPasswordConfirmation}
                required
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button
              type='submit'
              className='bg-primary-main hover:bg-primary-hover text-white'
              disabled={isLoading}
            >
              {isLoading ? 'Processing...' : 'Save password'}
            </Button>
          </CardFooter>
        </Card>
      </form>
    </>
  );
}
