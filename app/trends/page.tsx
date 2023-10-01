import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import React from 'react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import { NewTrends } from '@/components/new-trends';
import { RocketIcon } from '@radix-ui/react-icons';

interface TrendsItem {
  name: string;
  state: string;
}

const data = [
  { name: 'Football', state: '' },
  { name: 'OlympicGames', state: '' },
  { name: 'Esport', state: '' },
  { name: 'Github', state: '' },
];

export default function TrendsPage() {
  return (
    <div className={'flex flex-col basis-full justify-center items-center'}>
      <div className={'md:w-6/12'}>
        <h2 className='flex basis-full text-3xl font-semibold mb-4'>Trends</h2>
      </div>
      <div className={'flex w-3/12 md:w-6/12 sm:w-full'}>
        <Card className={'w-full h-fit'}>
          <CardHeader className='pb-3'>
            <CardTitle>Current Trends</CardTitle>
            <CardDescription>Choose a trend</CardDescription>
            <Separator className='my-4' />
          </CardHeader>
          <CardContent className='grid gap-1'>
            {data.map((item) => {
              return (
                <div
                  className='flex items-center justify-between space-x-4 -mx-2 rounded-md p-4 transition-all hover:bg-accent hover:text-accent-foreground'
                  key={item.name}
                >
                  <div className='space-y-1'>
                    <p className='text-sm font-medium leading-none'>
                      {item.name}
                    </p>
                  </div>
                  <Button variant={'outline'} size='icon'>
                    <RocketIcon className='h-4 w-4' />
                  </Button>
                </div>
              );
            })}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
