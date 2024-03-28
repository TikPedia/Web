'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

const examples = [
  {
    name: 'Dashboard',
    href: '/dashboard',
  },
  {
    name: 'Trends',
    href: '/dashboard/trends',
  },
  {
    name: 'Articles',
    href: '/dashboard/articles',
  },
  {
    name: 'Videos',
    href: '/dashboard/videos',
  },
];

interface ExamplesNavProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Nav({ className, ...props }: ExamplesNavProps) {
  const pathname = usePathname();

  return (
    <div className='w-full'>
      <ScrollArea className='max-w-[600px] lg:max-w-none'>
        <div
          className={cn('mb-4 mt-4 flex items-center', className)}
          {...props}
        >
          {examples.map((example) => (
            <Link
              href={example.href}
              key={example.href}
              className={cn(
                'flex items-center px-4',
                pathname?.startsWith(example.href)
                  ? 'font-bold text-primary'
                  : 'font-medium text-muted-foreground'
              )}
            >
              {example.name}
            </Link>
          ))}
        </div>
        <ScrollBar orientation='horizontal' className='invisible' />
      </ScrollArea>
    </div>
  );
}
