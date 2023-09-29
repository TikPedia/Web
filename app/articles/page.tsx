'use client';
import React from 'react';
import { PlusCircledIcon } from '@radix-ui/react-icons';
import { Button } from '@/components/new-york/button';
import { DataTable } from '@/app/articles/data-table';
import { Article, columns } from '@/app/articles/columns';
import Link from 'next/link';

export default function TrendsPage() {
  const [articles, setArticles] = React.useState<Article[]>([
    {
      id: 1,
      title: 'Article 1',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget ultricies aliquam, nunc sapien aliquet urna, vitae aliqu',
      date: '2021-01-01',
      status: 'approved',
    },
    {
      id: 2,
      title: 'Article 2',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget ultricies aliquam, nunc sapien aliquet urna, vitae aliqu',
      date: '2021-01-02',
      status: 'rejected',
    },
    {
      id: 3,
      title: 'Article 3',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget ultricies aliquam, nunc sapien aliquet urna, vitae aliqu',
      date: '2021-01-03',
      status: 'pending',
    },
    {
      id: 4,
      title: 'Article 4',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget ultricies aliquam, nunc sapien aliquet urna, vitae aliqu',
      date: '2021-01-04',
      status: 'approved',
    },
  ]);

  return (
    <div className={'flex-col flex-wrap'}>
      <h2 className='flex basis-full text-3xl font-semibold mb-4'>Articles</h2>

      <div className={'flex justify-end'}>
        <Button asChild>
          <Link href='/articles/new'>
            <PlusCircledIcon className='mr-2 h-4 w-4' />
            New article
          </Link>
        </Button>
      </div>

      <DataTable data={articles} columns={columns} />
    </div>
  );
}
