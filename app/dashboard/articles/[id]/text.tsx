import { Input } from '@/components/new-york/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/new-york/button';
import { Loader2 } from 'lucide-react';
import React from 'react';

export default function TextArticle() {
  const [loading, setLoading] = React.useState<boolean>(false);
  function editArticle() {
    console.log('edit article');
  }

  return (
    <>
      <div className='space-y-0.5'>
        <h2 className='text-2xl font-bold tracking-tight'>Article</h2>
        <p className='text-muted-foreground'>Article Text Content</p>
      </div>
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
        <div className={'flex justify-end'}>
          {loading ? (
            <Button disabled>
              <Loader2 className='mr-2 h-4 w-4 animate-spin' />
              Please wait
            </Button>
          ) : (
            <Button onClick={() => editArticle()}>Create</Button>
          )}
        </div>
      </div>
    </>
  );
}
