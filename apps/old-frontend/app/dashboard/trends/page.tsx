'use client';
import React, { Suspense } from 'react';

import Trends from '@/components/Trends';
import Hero from '@/components/hero';
import { Button } from '@/components/new-york/button';

export default async function TrendsPage() {
  function handleGenerateArticle() {
    console.log('generate article');
  }

  function handleRefresh() {
    console.log('refresh');
  }

  return (
    <div className={'flex flex-wrap'}>
      <Hero
        name={'Trends'}
        action={<Button onClick={handleRefresh}>Refresh</Button>}
      ></Hero>
      <div className={'flex basis-full justify-center items-center'}>
        <div
          className={
            'flex ml-[24px] mr-[24px] mt-4 mb-4 flex-grow h-full basis-10/12 items-center'
          }
        >
          <Suspense fallback={<p>Loading...</p>}>
            <Trends />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
