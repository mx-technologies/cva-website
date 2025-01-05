import * as React from 'react';

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

export function ConsoleForm() {
  return (
    <Card className={`w-[350px] ${openSans.className}`}>
      <CardHeader>
        <CardTitle className={playfairDisplay.className}>
          Signin to the console
        </CardTitle>
        <CardDescription>Continue as an administrator.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className='grid w-full items-center gap-4'>
            <div className='flex flex-col space-y-1.5'>
              <Label htmlFor='email'>Email address</Label>
              <Input id='email' placeholder='Email address' />
            </div>
            <div className='flex flex-col space-y-1.5'>
              <Label htmlFor='password'>Password</Label>
              <Input id='password' placeholder='Password' />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className='flex justify-between'>
        <Button
          type='submit'
          className='font-semibold bg-primary-main text-white hover:bg-primary-hover w-full'
        >
          Proceed
        </Button>
      </CardFooter>
    </Card>
  );
}
