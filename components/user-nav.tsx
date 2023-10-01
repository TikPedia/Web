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
import { useSession } from 'next-auth/react';

export function UserNav() {
  let { data: session, status } = useSession();

  if (status === 'loading') {
    return (
      <div className='flex items-center space-x-2'>
        <div className='h-8 w-8 rounded-full bg-gray-200 animate-pulse' />
      </div>
    );
  }

  // if (!session) {
  //   return (
  //     <div className='flex items-center space-x-2'>
  //       <Button variant='ghost'>Sign in</Button>
  //     </div>
  //   );
  // }

  return (
    <nav className={'flex w-full justify-between'}>
      <div className={'flex'}>
        <Link href={'/dashboard'}>
          <Image src='/logo.png' alt='logo' className='h-8 w-8' />
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
              src={'https://avatars.githubusercontent.com/u/25646890?v=4'}
              alt={'@DorianHardy'}
            />
          </Avatar>
          <p>thegostisdead</p>
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
            <Button variant='ghost' className='relative h-8 w-8 rounded-full'>
              <Avatar className='h-8 w-8'>
                <AvatarImage
                  src={'https://avatars.githubusercontent.com/u/25646890?v=4'}
                  alt={'@DorianHardy'}
                />
                <AvatarFallback>SC</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className='w-56' align='end' forceMount>
            <DropdownMenuLabel className='font-normal'>
              <div className='flex flex-col space-y-1'>
                <p className='text-sm font-medium leading-none'>
                  {'Dorian Hardy'}
                </p>
                <p className='text-xs leading-none text-muted-foreground'>
                  {'thegostisdead@gmail.com'}
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
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
            <DropdownMenuItem>
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
