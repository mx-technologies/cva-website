'use client';

import * as React from 'react';

import { cn, openSans, playfairDisplay, resources } from '@/lib/utils';
import { useMediaQuery } from '@/hooks/use-media-query';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Plus } from 'lucide-react';
import { Combobox } from '@/app/(dashboard)/console/resources/_components/combobox';
import { useState } from 'react';
import useAxios from '@/hooks/use-axios';
import { useSelector } from 'react-redux';
import { AuthStateProps } from '@/redux/store/slices/authSlice';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

export function CreateResourceDrawer() {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery('(min-width: 768px)');

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button
            variant='outline'
            className='bg-primary-main hover:bg-primary-hover text-white hover:text-white'
          >
            <Plus />
            Create
          </Button>
        </DialogTrigger>
        <DialogContent className={`sm:max-w-[425px] ${openSans.className}`}>
          <DialogHeader>
            <DialogTitle className={playfairDisplay.className}>
              Create Resource
            </DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <ResourceForm className='px-4' setOpen={setOpen} />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button
          variant='outline'
          className='bg-primary-main hover:bg-primary-hover text-white hover:text-white'
        >
          <Plus />
          Create
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className='text-left'>
          <DrawerTitle>Create Resource</DrawerTitle>
          <DrawerDescription>
            Make changes to your profile here. Click save when you're done.
          </DrawerDescription>
        </DrawerHeader>
        <ResourceForm className='px-4' setOpen={setOpen} />
        <DrawerFooter className='pt-2'>
          <DrawerClose asChild>
            <Button variant='outline'>Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

// const frameworks = [
//   {
//     value: 'next.js',
//     label: 'Next.js',
//   },
//   {
//     value: 'sveltekit',
//     label: 'SvelteKit',
//   },
//   {
//     value: 'nuxt.js',
//     label: 'Nuxt.js',
//   },
//   {
//     value: 'remix',
//     label: 'Remix',
//   },
//   {
//     value: 'astro',
//     label: 'Astro',
//   },
// ];
const categories = resources.map((resource) => {
  return {
    value: resource.split(' ').join('-').toLowerCase(),
    label: resource,
  };
});

function ResourceForm({
  className,
  setOpen,
}: {
  className: any;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const user = useSelector((state: AuthStateProps) => state.auth.user);
  const axios = useAxios(user?.token);
  const router = useRouter();

  const [resourceDetails, setResourceDetails] = useState({
    title: '',
    category: '',
    mediaArt: '',
    mediaUrl: '',
    messenger: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (e: any) => {
    e.preventDefault();
    try {
      setIsLoading(true);

      const response = await axios.post(
        `/api/resources/create`,
        resourceDetails
      );

      setResourceDetails({
        title: '',
        category: '',
        mediaArt: '',
        mediaUrl: '',
        messenger: '',
      });

      toast.success(response.data.message);
      setOpen(false);
      router.refresh();
    } catch (error: any) {
      console.log('[CREATE_RESOURCE]', error);
      const errorMessage =
        error.response?.data?.message || 'An error occurred. Please try again.';
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <form
      onSubmit={onSubmit}
      className={cn('grid items-start gap-4 ' + openSans.className, className)}
    >
      <div className='grid gap-2'>
        <Label htmlFor='title'>Title</Label>
        <Input
          type='title'
          id='title'
          value={resourceDetails.title}
          onChange={(e) =>
            setResourceDetails({
              ...resourceDetails,
              title: e.target.value,
            })
          }
          required
        />
      </div>
      <div className='grid gap-2'>
        <Label htmlFor='category'>Category</Label>
        <Combobox
          data={categories}
          setResourceDetails={setResourceDetails}
          resourceDetails={resourceDetails}
        />
      </div>
      <div className='grid gap-2'>
        <Label htmlFor='mediaArt'>Media art</Label>
        <Input
          type='mediaArt'
          id='mediaArt'
          value={resourceDetails.mediaArt}
          onChange={(e) =>
            setResourceDetails({
              ...resourceDetails,
              mediaArt: e.target.value,
            })
          }
          required
        />
      </div>
      <div className='grid gap-2'>
        <Label htmlFor='mediaUrl'>Media Url</Label>
        <Input
          type='mediaUrl'
          id='mediaUrl'
          value={resourceDetails.mediaUrl}
          onChange={(e) =>
            setResourceDetails({
              ...resourceDetails,
              mediaUrl: e.target.value,
            })
          }
          required
        />
      </div>
      <div className='grid gap-2'>
        <Label htmlFor='messenger'>Resource by</Label>
        <Input
          type='messenger'
          id='messenger'
          value={resourceDetails.messenger}
          onChange={(e) =>
            setResourceDetails({
              ...resourceDetails,
              messenger: e.target.value,
            })
          }
          required
        />
      </div>
      <Button
        type='submit'
        className='bg-primary-main hover:bg-primary-hover text-white hover:text-white'
        disabled={isLoading}
      >
        {isLoading ? 'Processing...' : 'Save changes'}
      </Button>
    </form>
  );
}
