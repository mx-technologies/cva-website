'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { EditEmailForm } from './edit-email-form';
import { EditPasswordForm } from './edit-password-form';

export function SettingsTab() {
  return (
    <Tabs defaultValue='account' className='w-[400px]'>
      <TabsList className='grid w-full grid-cols-2'>
        <TabsTrigger value='account'>Account</TabsTrigger>
        <TabsTrigger value='password'>Password</TabsTrigger>
      </TabsList>
      <TabsContent value='account'>
        <EditEmailForm />
      </TabsContent>
      <TabsContent value='password'>
        <EditPasswordForm />
      </TabsContent>
    </Tabs>
  );
}
