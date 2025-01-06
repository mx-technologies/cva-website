import { SidebarTrigger } from '@/components/ui/sidebar';
import { DropdownMenuControl } from './dropdown-menu-control';

export default function TopNav() {
  return (
    <header className='border-b py-2 flex justify-between items-center px-4'>
      <SidebarTrigger />

      <DropdownMenuControl />
    </header>
  );
}
