import { SidebarTrigger } from '@/components/ui/sidebar';
import { DropdownMenuControl } from './dropdown-menu-control';
import { SetStateAction } from 'react';

export default function TopNav({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (value: SetStateAction<boolean>) => void;
}) {
  return (
    <header className='border-b py-2 flex justify-between items-center px-4'>
      <SidebarTrigger onClick={() => setIsOpen(!isOpen)} />
      <DropdownMenuControl />
    </header>
  );
}
