'use client';
import { Icons } from '@/components/icons';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import type { AuthProviderInfo } from 'pocketbase';
import { usePbAuth } from '@/app/providers';
import pb from '@/lib/pocketbase';
import { Button, buttonVariants } from '@/components/new-york/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export default function SignInPage() {
  const { googleSignIn, githubSignIn, setUserData } = usePbAuth();

  const router = useRouter();

  const storeUserAndRedirect = (user: any) => {
    setUserData(user);
    router.replace('/dashboard');
  };

  useEffect(() => {
    const localAuthProvider: AuthProviderInfo = JSON.parse(
      localStorage.getItem('provider') as string
    );
    const params = new URL(location.href).searchParams;
    const redirectUrl = `${location.origin}/signin`;
    const code = params.get('code');

    // cancel signin logic if not a redirect
    if (
      !localAuthProvider ||
      !code ||
      localAuthProvider.state !== params.get('state')
    )
      return;

    pb.collection('users')
      .authWithOAuth2(
        localAuthProvider.name,
        code,
        localAuthProvider.codeVerifier,
        redirectUrl
      )
      .then(async (response) => {
        const user = await pb.collection('users').getOne(response.record.id);

        // skip profile updation if user already exists or user data from OAuth providers haven't changed
        if (
          user.name &&
          user.avatarUrl &&
          user.name === response.meta?.name &&
          user.avatarUrl === response.meta?.avatarUrl
        ) {
          storeUserAndRedirect(user);
        } else
          pb.collection('users')
            .update(response.record.id, {
              name: response.meta?.name,
              avatarUrl: response.meta?.avatarUrl,
            })
            .then((res) => {
              storeUserAndRedirect(res);
            })
            .catch((err) => {
              console.error(err);
            });
      })
      .catch((err) => {
        console.error(err);
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const GoogleProvider = () => {
    return (
      <>
        <p className='text-sm text-muted-foreground'>Use Google to login</p>
        <Button variant='outline' type='button' onClick={() => googleSignIn()}>
          <Icons.google className='mr-2 h-4 w-4' />
          Google
        </Button>
      </>
    );
  };

  const GithubProvider = () => {
    return (
      <>
        <p className='text-sm text-muted-foreground'>Use Github to login</p>
        <Button variant='outline' type='button' onClick={() => githubSignIn()}>
          <Icons.gitHub className='mr-2 h-4 w-4' />
          Github
        </Button>
      </>
    );
  };

  return (
    <div className='flex-row lg:p-8 content-center items-center h-full justify-center w-full'>
      <div className='flex flex-row justify-end'>
        <Link
          href='/signup'
          className={cn(buttonVariants({ variant: 'ghost' }), 'm-4 ')}
        >
          Sign Up
        </Link>
      </div>
      <div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>
        <div className='flex flex-col space-y-2 text-center'>
          <h1 className='text-2xl font-semibold tracking-tight'>Login</h1>
          <GoogleProvider />
          <GithubProvider />
        </div>
      </div>
    </div>
  );
}
