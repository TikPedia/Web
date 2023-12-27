import React, { Suspense } from 'react';

import Trends from '@/components/Trends';
import { Progress } from '@/components/ui/progress';

export default async function TrendsPage() {
  function handleGenerateArticle() {
    console.log('generate article');
  }

  return (
    <div className={'flex flex-col basis-full justify-center items-center'}>
      <div className={'md:w-6/12'}>
        <h2 className='flex basis-full text-3xl font-semibold mb-4'>Trends</h2>
      </div>
      <div className={'flex w-3/12 md:w-6/12 sm:w-full'}>
        <Suspense fallback={<p>Loading...</p>}>
          <Trends />
        </Suspense>
      </div>
    </div>
  );
}
