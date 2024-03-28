'use client';

import * as React from 'react';
import { Progress } from '@/components/ui/progress';
import { useRouter } from 'next/navigation';
import pb from '@/lib/pocketbase';
import { useEffect } from 'react';

export default function LogoutPage() {
  const [progress, setProgress] = React.useState(0);
  const router = useRouter();
  const user = pb.authStore.model;

  useEffect(() => {
    pb.authStore.clear();
    setProgress(100);
    router.push('/');
  }, []);

  if (user) {
    return (
      <div>
        <h2 className='text-3xl font-bold tracking-tight'>Logout....</h2>
        <Progress value={progress} className={'w-8/12'} />
      </div>
    );
  }

  router.push('/');
}
