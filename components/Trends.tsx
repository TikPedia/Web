import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { RocketIcon } from '@radix-ui/react-icons';
import React from 'react';

interface TrendsItem {
  searchTerm: string[];
  day: string;
}

export default async function Trends() {
  const res = await fetch('http://localhost:3000/api/trends');
  const data = await res.json();

  const keywords = new Set();
  data.forEach((item: TrendsItem) => {
    item.searchTerm.forEach((term) => {
      keywords.add(term);
    });
  });

  return (
    <Card className={'w-full h-fit'}>
      <CardHeader className='pb-3'>
        <CardTitle>Current Trends</CardTitle>
        <CardDescription>Choose a trend</CardDescription>
        <Separator className='my-4' />
      </CardHeader>
      <CardContent className='grid gap-1'>
        {Array.from(keywords).map((keyword) => (
          <div
            className='flex items-center justify-between space-x-4 -mx-2 rounded-md p-4 transition-all hover:bg-accent hover:text-accent-foreground'
            key={keyword}
          >
            <div className='space-y-1'>
              <p className='text-sm font-medium leading-none'>{keyword}</p>
            </div>
            <Button variant={'outline'} size='icon'>
              <RocketIcon className='h-4 w-4' />
            </Button>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
