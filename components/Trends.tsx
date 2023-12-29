import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RocketIcon } from '@radix-ui/react-icons';
import React from 'react';
import { useToast } from '@/components/ui/use-toast';

interface TrendsItem {
  searchTerm: string[];
  day: string;
}

async function createArticle(keyword: string) {
  console.log('create article');
}

async function getTrendsKeywords() {
  const res = await fetch('http://localhost:3000/api/trends');
  const data = await res.json();
  const keywords = new Set<string>();
  data.forEach((item: TrendsItem) => {
    item.searchTerm.forEach((term) => {
      keywords.add(term);
    });
  });
  return keywords;
}

export default async function Trends() {
  const { toast } = useToast();
  const keywords = await getTrendsKeywords();
  function handleTrendClick(keyword: string) {
    console.log('trend clicked');
    try {
      createArticle(keyword);
      toast({
        title: 'Article created',
        description: `Article for ${keyword} created`,
      });
    } catch (error) {
      console.error(error);
      toast({
        title: 'Error',
        description: `Article for ${keyword} not created`,
      });
    }
  }

  return (
    <div className={'grid grid-cols-4 gap-4'}>
      {Array.from(keywords).map((keyword) => (
        <Card key={keyword}>
          <div className={'flex m-4 justify-between items-center'}>
            <p>{keyword}</p>
            <Button
              variant={'outline'}
              size='icon'
              onClick={(e) => handleTrendClick(keyword)}
            >
              <RocketIcon className='h-4 w-4' />
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
}
