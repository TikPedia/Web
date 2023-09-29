'use client';

import React from 'react';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/new-york/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/new-york/button';
import { Loader2 } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { ToastAction } from '@/components/ui/toast';
export default function CreateArticlePage() {
  const [articleTitle, setArticleTitle] = React.useState<string>('');
  const [articleContent, setArticleContent] = React.useState<string>('');
  const [loading, setLoading] = React.useState<boolean>(false);
  const { toast } = useToast();

  return (
    <div className='hidden space-y-6 p-10 pb-16 md:block'>
      <div className='space-y-0.5'>
        <h2 className='text-2xl font-bold tracking-tight'>Article</h2>
      </div>

      <Separator className='my-6' />
      <div className='flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0'>
        <div className='flex-1'>
          <div className='space-y-6'>
            <div>
              <h3 className='text-lg font-medium'>Title</h3>
              <Input placeholder={'Article title'} />
            </div>
            <Textarea placeholder={'Article text'} />
          </div>
        </div>
      </div>
      <div className={'flex justify-end'}>
        {loading ? (
          <Button disabled>
            <Loader2 className='mr-2 h-4 w-4 animate-spin' />
            Please wait
          </Button>
        ) : (
          <Button onClick={() => createArticle()}>Create</Button>
        )}
      </div>
    </div>
  );
}
