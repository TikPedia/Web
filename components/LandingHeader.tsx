'use client';
import Lottie from 'lottie-react';
import Gradient from 'rgt';
import server from '@/public/animations/test.json';

export function LandingHeader() {
  return (
    <div
      className={
        'flex flex-row w-full gap-8 justify-between backdrop-blur-[20px] rounded-md'
      }
    >
      <div
        className={
          'flex flex-col flex-1 h-[400px] gap-8 self-center justify-center pl-8 basis-2/4 backdrop-blur-[20px] rounded-md'
        }
      >
        <h1 className='max-w-2xl text-5xl font-semibold text-center sm:text-left md:text-6xl lg:text-7xl u-text-gray-900'>
          <Gradient dir='left-to-right' from='#00DFD8' to='#007CF0'>
            TikPedia
          </Gradient>
        </h1>
        <div className={'flex flex-row'}>
          <h2 className='max-w-lg z-10 text-xl text-center text-gray-500 sm:w-3/5 sm:text-left dark:text-gray-100 leading-8 selectable'>
            TikPedia is a SaaS platform for creating and managing video content
            produced by AI.
          </h2>
        </div>
      </div>
      <div className={'flex m-4 justify-end basis-full'}>
        <Lottie
          className={'backdrop-blur-[20px] rounded-md'}
          animationData={server}
          style={{ height: 400 }}
        ></Lottie>
      </div>
    </div>
  );
}
