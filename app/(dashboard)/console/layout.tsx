import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from './_components/app-sidebar';
import TopNav from './_components/top-nav';

export default function ConsoleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className='w-full'>
        <TopNav />
        <div className='px-4'>{children}</div>
      </main>
    </SidebarProvider>
  );
}
