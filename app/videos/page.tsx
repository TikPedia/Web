import React, { Suspense } from 'react';
import { DataTable } from '@/app/videos/data-table';
import { columns, Video } from '@/app/videos/columns';

export default function TrendsPage() {
  const data: Video[] = [
    {
      id: '1',
      name: 'Video 1',
      status: 'success',
      description: 'Description 1',
    },
    {
      id: '2',
      name: 'Video 2',
      status: 'failed',
      description: 'Description 2',
    },
    {
      id: '3',
      name: 'Video 2',
      status: 'processing',
      description: 'Description 2',
    },
    {
      id: '4',
      name: 'Video 2',
      status: 'pending',
      description: 'Description 2',
    },
  ];

  return (
    <div className={'flex-col flex-wrap'}>
      <h2 className='flex basis-full text-3xl font-semibold mb-4'>Videos</h2>
      <div className='hidden h-full flex-1 flex-col space-y-8 p-8 md:flex'>
        <Suspense fallback={<p>Loading videos...</p>}>
          <DataTable columns={columns} data={data} />
        </Suspense>
      </div>
    </div>
  );
}
