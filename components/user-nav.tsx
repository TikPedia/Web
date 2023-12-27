'use client';
import Link from 'next/link';
import Image from 'next/image';

import { LogOut, Settings, User } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useRouter } from 'next/navigation';
import pb from '@/lib/pocketbase';
import { PbUser, usePbAuth } from '@/app/providers';
import { useEffect, useState } from 'react';

export function UserNav() {
  const router = useRouter();
  const { user } = usePbAuth();

  return (
    <nav className={'flex w-full justify-between'}>
      <div className={'flex'}>
        <Link href={'/dashboard'}>
          <Image src='/logo.png' alt='logo' width={32} height={32} />
        </Link>
        <svg
          data-testid='geist-icon'
          fill='none'
          height='24'
          shape-rendering='geometricPrecision'
          stroke='currentColor'
          stroke-linecap='round'
          stroke-linejoin='round'
          stroke-width='1'
          viewBox='0 0 24 24'
          width='24'
          data-darkreader-inline-stroke=''
          data-darkreader-inline-color=''
        >
          <path d='M16.88 3.549L7.12 20.451'></path>
        </svg>
        <div className={'flex-col'}>
          <Avatar className='h-4 w-4'>
            <AvatarImage
              src={user?.avatarUrl || ''}
              alt={user?.name || '@User'}
            />
          </Avatar>
          <p>{user?.email}</p>
        </div>
      </div>

      <div className={'flex'}>
        <div>
          <Link href={''} className={'font-medium text-muted-foreground'}>
            qsdsqd
          </Link>
          <Link href={''} className={'font-medium text-muted-foreground'}>
            qsdsqd
          </Link>
          <Link href={''} className={'font-medium text-muted-foreground'}>
            sqdsqd
          </Link>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='ghost' className='relative h-12 w-12 rounded-full'>
              <Avatar className='h-12 w-12'>
                <AvatarImage
                  src={user?.avatarUrl || ''}
                  alt={user?.username || '@User'}
                />
                <AvatarFallback>SC</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className='w-56' align='end' forceMount>
            <DropdownMenuLabel className='font-normal'>
              <div className='flex flex-col space-y-1'>
                <p className='text-sm font-medium leading-none'>{user?.name}</p>
                <p className='text-xs leading-none text-muted-foreground'>
                  {user?.email}
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem
                onClick={(e) => router.push('/dashboard/profile')}
              >
                <User className='mr-2 h-4 w-4' />
                <span>Profile</span>
                <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className='mr-2 h-4 w-4' />
                <span>Settings</span>
                <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={(e) => router.push('/logout')}>
              <LogOut className='mr-2 h-4 w-4' />
              <span>Log out</span>
              <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}
