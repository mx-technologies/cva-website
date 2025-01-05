import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { SidebarTrigger } from '@/components/ui/sidebar';

export default function TopNav() {
  return (
    <header className='border-b py-2 flex justify-between items-center px-4'>
      <SidebarTrigger />

      <Avatar>
        <AvatarImage src='https://github.com/shadcn.png' width='100' />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </header>
  );
}
