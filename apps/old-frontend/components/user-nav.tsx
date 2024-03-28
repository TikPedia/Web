'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Icons } from '@/components/icons';
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

import { usePbAuth } from '@/app/providers';

export function UserNav() {
  const router = useRouter();
  const { user } = usePbAuth();

  if (!user) {
    return (
      <nav className={'flex w-full justify-between'}>
        <div className={'flex items-center gap-2 pl-4'}>
          <Link href={'/dashboard'}>
            <Image src='/logo.png' alt='logo' width={42} height={42} />
          </Link>
        </div>
        <div className={'flex m-3 gap-4 items-center'}>
          <Link href={'/legal/contact'}>Contact</Link>
          <Link href={'/signin'}>
            <Button variant='secondary'>Log in</Button>
          </Link>
          <Link href={'/signup'}>
            <Button variant='default'>Sign Up</Button>
          </Link>
        </div>
      </nav>
    );
  }

  return (
    <nav className={'flex w-full justify-between'}>
      <div className={'flex items-center gap-2 pl-4'}>
        <Link href={'/dashboard'}>
          <Image src='/logo.png' alt='logo' width={42} height={42} />
        </Link>
        <Icons.separator />
        <div className={'flex-col'}>
          <Avatar className='h-6 w-6'>
            <AvatarImage
              src={user?.avatarUrl || ''}
              alt={user?.name || '@User'}
            />
          </Avatar>
        </div>
        <p>{user?.name}</p>
      </div>

      <div className={'flex'}>
        <div className={'flex items-center gap-4'}>
          <Link href={'/docs'} className={'font-medium text-muted-foreground'}>
            Docs
          </Link>
          <Link href={'/help'} className={'font-medium text-muted-foreground'}>
            Help
          </Link>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant='ghost'
              className='relative m-2 h-12 w-12 rounded-full'
            >
              <Avatar className='h-[32px] w-[32px]'>
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
