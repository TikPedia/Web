import { Toaster } from '@/components/ui/toaster';
import { UserNav } from '@/components/user-nav';
import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className='flex-col md:flex'>
      <Toaster />
      <div className='flex border-b w-full flex-wrap'>
        <div className='flex basis-full'>
          <UserNav />
        </div>
      </div>
      <div className={'flex-1'}>{children}</div>
    </main>
  );
}
