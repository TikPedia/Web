'use client';
import Link from 'next/link';

import { usePathname } from 'next/navigation';
import React from 'react';
import { Button } from '@/components/new-york/button';

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();
  return (
    <div className='hidden md:flex w-full justify-between ml-8 mr-8 mt-2 mb-2 z-10'>
      <Link href='/' className='flex items-center space-x-2'>
        <img src={'/logo.png'} className='h-8 w-8' />
        <span className='font-bold text-2xl'>TikPedia</span>
      </Link>
      <Button asChild>
        <Link href='/login' className='flex items-center'>
          Start Now
        </Link>
      </Button>
    </div>
  );
}
