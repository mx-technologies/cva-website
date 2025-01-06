'use client';

import { Inbox, LayoutDashboard, Settings, Users } from 'lucide-react';

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn, openSans } from '@/lib/utils';

// Menu items.
const items = [
  {
    title: 'Dashboard',
    url: '/console',
    icon: LayoutDashboard,
  },
  {
    title: 'Resources',
    url: '/console/resources',
    icon: Inbox,
  },
  {
    title: 'Subscribers',
    url: '/console/subscribers',
    icon: Users,
  },
  {
    title: 'Settings',
    url: '/console/settings',
    icon: Settings,
  },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <Image
            src='/logo.png'
            alt='Logo'
            width='40'
            height='40'
            className='self-center'
          />

          <SidebarGroupContent className={`mt-3 ${openSans.className}`}>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem
                  key={item.title}
                  className={cn(
                    'rounded-lg',
                    pathname === item.url && 'border bg-slate-100'
                  )}
                >
                  <SidebarMenuButton size='lg' asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span className='text-base'>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
