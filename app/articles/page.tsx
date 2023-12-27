'use client';
import React, { useEffect } from 'react';
import { PlusCircledIcon } from '@radix-ui/react-icons';
import { Button } from '@/components/new-york/button';
import Link from 'next/link';

interface Article {
  id: number;
  title: string;
  text: string;
  date: string;
  status: 'approved' | 'rejected' | 'pending';
}

export default function TrendsPage() {
  const [articles, setArticles] = React.useState<Article[]>([]);

  async function getArticles() {
    const res = await fetch('http://localhost:3000/api/articles');
    const data = await res.json();
    setArticles(data);
  }

  useEffect(() => {
    getArticles();
  }, []);

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

      <div className={'flex flex-wrap'}>
        {articles.map((article) => (
          <div
            key={article.id}
            className={
              'flex flex-col border rounded-lg p-4 m-4 w-96 max-w-full'
            }
          >
            <h3 className='text-xl font-semibold'>{article.title}</h3>
            <p className='text-gray-500'>{article.text}</p>
            <p className='text-gray-500'>{article.date}</p>
            <p className='text-gray-500'>{article.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
