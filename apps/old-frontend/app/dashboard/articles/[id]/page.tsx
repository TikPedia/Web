'use client';

import React from 'react';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/new-york/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/new-york/button';
import { Loader2 } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { ToastAction } from '@/components/ui/toast';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import TextArticle from '@/app/dashboard/articles/[id]/text';
import AudioArticle from '@/app/dashboard/articles/[id]/audio';
import ImagesArticle from '@/app/dashboard/articles/[id]/images';
export default function CreateArticlePage() {
  const [articleTitle, setArticleTitle] = React.useState<string>('');
  const [articleContent, setArticleContent] = React.useState<string>('');
  const [loading, setLoading] = React.useState<boolean>(false);
  const { toast } = useToast();

  return (
    <div className='hidden space-y-6 p-10 pb-16 md:block'>
      <Tabs defaultValue='text' className='w-full'>
        <TabsList>
          <TabsTrigger value='text'>Text</TabsTrigger>
          <TabsTrigger value='audio'>Audio</TabsTrigger>
          <TabsTrigger value='images'>Images</TabsTrigger>
        </TabsList>
        <Separator className='my-4' />
        <TabsContent value='text'>
          <TextArticle />
        </TabsContent>
        <TabsContent value='audio'>
          <AudioArticle />
        </TabsContent>
        <TabsContent value='images'>
          <ImagesArticle />
        </TabsContent>
      </Tabs>
    </div>
  );
}
