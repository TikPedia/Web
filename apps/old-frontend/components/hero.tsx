import { Button } from '@/components/ui/button';
import React from 'react';

export default function Hero({
  name,
  action,
}: {
  name: string;
  action: React.ReactNode;
}) {
  return (
    <div
      className={
        'flex basis-full h-[100px] bg-[#111] justify-center items-center'
      }
    >
      <div
        className={
          'flex ml-[24px] mr-[24px] h-full basis-10/12 items-center justify-between'
        }
      >
        <h2 className={'text-4xl'}>{name}</h2>
        <div>{action}</div>
      </div>
    </div>
  );
}
