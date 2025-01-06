'use client';

import { useState } from 'react';
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
import { openSans, playfairDisplay } from '@/lib/utils';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useDispatch } from 'react-redux'; // Adjust the import based on your project structure
import { setUser } from '@/redux/store/slices/authSlice';

export function ConsoleForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post('/api/auth/signin', {
        email,
        password,
      });

      toast.success(response.data.message);
      // Dispatch user information to Redux store
      dispatch(setUser({ email })); // You can add more user info if needed
      // Redirect or perform additional actions
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.message || 'An error occurred. Please try again.';
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className={`w-[350px] ${openSans.className}`}>
      <CardHeader>
        <CardTitle className={playfairDisplay.className}>
          Signin to the console
        </CardTitle>
        <CardDescription>Continue as an administrator.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className='grid w-full items-center gap-4'>
            <div className='flex flex-col space-y-1.5'>
              <Label htmlFor='email'>Email address</Label>
              <Input
                id='email'
                placeholder='Email address'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className='flex flex-col space-y-1.5'>
              <Label htmlFor='password'>Password</Label>
              <Input
                id='password'
                type='password'
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className='mt-3'>
            <Button
              type='submit'
              className='font-semibold bg-primary-main text-white hover:bg-primary-hover w-full'
              disabled={loading}
            >
              {loading ? 'Processing...' : 'Proceed'}
            </Button>
          </div>
        </form>
      </CardContent>
      <CardFooter className='flex justify-between'>
        {/* Additional footer content if needed */}
      </CardFooter>
    </Card>
  );
}
