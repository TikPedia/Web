import { Nav } from '@/components/nav';

import { UserNav } from '@/components/user-nav';
import { Toaster } from '@/components/ui/toaster';

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='flex-col md:flex'>
      <Toaster />
      <div className='flex border-b w-full flex-wrap'>
        <div className='flex basis-full'>
          <UserNav />
        </div>
        <div className='flex basis-full'>
          <Nav />
        </div>
      </div>
      <div className={'flex-1'}>{children}</div>
    </div>
  );
}
