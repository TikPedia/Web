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
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';
import { ModelSelector } from '@/components/model-selector';
import { TemperatureSelector } from '@/components/temperature-selector';
import { MaxLengthSelector } from '@/components/maxlength-selector';
import { TopPSelector } from '@/components/top-p-selector';
import { CounterClockwiseClockIcon } from '@radix-ui/react-icons';
import { Label } from '@/components/label';
import { CodeViewer } from '@/app/articles/new/code-viewer';

const types = ['GPT-3'] as const;

export type ModelType = (typeof types)[number];

export interface Model<Type = string> {
  id: string;
  name: string;
  description: string;
  strengths?: string;
  type: Type;
}

const models: Model<ModelType>[] = [
  {
    id: 'c305f976-8e38-42b1-9fb7-d21b2e34f0da',
    name: 'text-davinci-003',
    description:
      'Most capable GPT-3 model. Can do any task the other models can do, often with higher quality, longer output and better instruction-following. Also supports inserting completions within text.',
    type: 'GPT-3',
    strengths:
      'Complex intent, cause and effect, creative generation, search, summarization for audience',
  },
  {
    id: '464a47c3-7ab5-44d7-b669-f9cb5a9e8465',
    name: 'text-curie-001',
    description: 'Very capable, but faster and lower cost than Davinci.',
    type: 'GPT-3',
    strengths:
      'Language translation, complex classification, sentiment, summarization',
  },
  {
    id: 'ac0797b0-7e31-43b6-a494-da7e2ab43445',
    name: 'text-babbage-001',
    description: 'Capable of straightforward tasks, very fast, and lower cost.',
    type: 'GPT-3',
    strengths: 'Moderate classification, semantic search',
  },
  {
    id: ' be638fb1-973b-4471-a49c-290325085802',
    name: 'text-ada-001',
    description:
      'Capable of very simple tasks, usually the fastest model in the GPT-3 series, and lowest cost.',
    type: 'GPT-3',
    strengths:
      'Parsing text, simple classification, address correction, keywords',
  },
];

export default function CreateArticlePage() {
  const [articleTitle, setArticleTitle] = React.useState<string>('');
  const [articleContent, setArticleContent] = React.useState<string>('');
  const [loading, setLoading] = React.useState<boolean>(false);
  const { toast } = useToast();
  function createArticle() {
    console.log('create article');
    setLoading(true);

    toast({
      title: 'Article created',
      description: 'The article has been created successfully.',
      action: <ToastAction altText='See Article'>See Article</ToastAction>,
    });

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }

  return (
    <div className='hidden space-y-6 p-10 pb-16 md:block'>
      <div className='space-y-0.5'>
        <h2 className='text-2xl font-bold tracking-tight'>Article</h2>
        <p className='text-muted-foreground'>
          Add a new article with your own content.
        </p>
      </div>

      <Separator className='my-6' />

      <Tabs defaultValue='ai' className='w-full'>
        <TabsList>
          <TabsTrigger value='ai'>AI</TabsTrigger>
          <TabsTrigger value='custom'>Custom</TabsTrigger>
        </TabsList>
        <TabsContent value='ai'>
          <div className={'flex w-full flex-nowrap gap-4'}>
            <div className='h-full'>
              <div className='grid h-full items-stretch gap-6'>
                <div className='hidden flex-col space-y-4 sm:flex md:order-2'>
                  <ModelSelector types={types} models={models} />
                  <TemperatureSelector defaultValue={[0.56]} />
                  <MaxLengthSelector defaultValue={[256]} />
                  <TopPSelector defaultValue={[0.9]} />
                  <Button>Generate</Button>
                </div>
                <div className='md:order-1'>
                  <TabsContent value='complete' className='mt-0 border-0 p-0'>
                    <div className='flex h-full flex-col space-y-4'>
                      <Textarea
                        placeholder='Write a tagline for an ice cream shop'
                        className='min-h-[400px] flex-1 p-4 md:min-h-[700px] lg:min-h-[700px]'
                      />
                      <div className='flex items-center space-x-2'>
                        <Button>Submit</Button>
                        <Button variant='secondary'>
                          <span className='sr-only'>Show history</span>
                          <CounterClockwiseClockIcon className='h-4 w-4' />
                        </Button>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value='insert' className='mt-0 border-0 p-0'>
                    <div className='flex flex-col space-y-4'>
                      <div className='grid h-full grid-rows-2 gap-6 lg:grid-cols-2 lg:grid-rows-1'>
                        <Textarea
                          placeholder="We're writing to [inset]. Congrats from OpenAI!"
                          className='h-full min-h-[300px] lg:min-h-[700px] xl:min-h-[700px]'
                        />
                        <div className='rounded-md border bg-muted'></div>
                      </div>
                      <div className='flex items-center space-x-2'>
                        <Button>Submit</Button>
                        <Button variant='secondary'>
                          <span className='sr-only'>Show history</span>
                          <CounterClockwiseClockIcon className='h-4 w-4' />
                        </Button>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value='edit' className='mt-0 border-0 p-0'>
                    <div className='flex flex-col space-y-4'>
                      <div className='grid h-full gap-6 lg:grid-cols-2'>
                        <div className='flex flex-col space-y-4'>
                          <div className='flex flex-1 flex-col space-y-2'>
                            <Label htmlFor='input'>Input</Label>
                            <Textarea
                              id='input'
                              placeholder='We is going to the market.'
                              className='flex-1 lg:min-h-[580px]'
                            />
                          </div>
                          <div className='flex flex-col space-y-2'>
                            <Label htmlFor='instructions'>Instructions</Label>
                            <Textarea
                              id='instructions'
                              placeholder='Fix the grammar.'
                            />
                          </div>
                        </div>
                        <div className='mt-[21px] min-h-[400px] rounded-md border bg-muted lg:min-h-[700px]' />
                      </div>
                      <div className='flex items-center space-x-2'>
                        <Button>Submit</Button>
                        <Button variant='secondary'>
                          <span className='sr-only'>Show history</span>
                          <CounterClockwiseClockIcon className='h-4 w-4' />
                        </Button>
                      </div>
                    </div>
                  </TabsContent>
                </div>
              </div>
            </div>
            <div className='flex h-full flex-col space-y-4 flex-1'>
              <Textarea
                placeholder='Write a tagline for an ice cream shop'
                className='min-h-[200px] flex-1 p-4'
              />
            </div>
          </div>
        </TabsContent>
        <TabsContent value='custom'>
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
              <Button onClick={() => createArticle()} className={'mt-4'}>
                Create
              </Button>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
