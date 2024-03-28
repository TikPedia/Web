'use client';
import Link from 'next/link';
import Image from 'next/image';

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
        <Image src={'/logo.png'} alt={'logo'} width={32} height={32} />
        <span className='font-bold text-2xl'>TikPedia</span>
      </Link>
      <div className={'flex gap-4'}>
        <Button asChild variant={'secondary'}>
          <Link href='/signin' className='flex items-center'>
            Login
          </Link>
        </Button>
        <Button asChild>
          <Link href='/signup' className='flex items-center'>
            Start Now
          </Link>
        </Button>
      </div>
    </div>
  );
}
