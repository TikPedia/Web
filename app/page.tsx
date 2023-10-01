export const dynamic = 'force-dynamic';

// @ts-ignore
import Gradient from 'rgt';
import { Button } from '@/components/ui/button';

import { GitHubRepoCard } from '@/components/GitHubRepoCard';
import { ModeToggle } from '@/components/ModeToggle';
import { MainNav } from '@/components/main-nav';
import Features from '@/components/FeatureCard';
import { LandingHeader } from '@/components/LandingHeader';
import './locomotive.css';

interface Project {
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  languages_url: string;
  languages: {
    [key: string]: number;
  };
  updated_at: string;
  stargazers_count: number;
}

export default async function Home() {
  const projects = await fetch(process.env.APP_URL + '/api/github', {
    next: { revalidate: 3600 },
  }).then((res) => res.json());

  return (
    <div className='relative flex min-h-screen flex-col'>
      <div className='container flex items-center backdrop-blur-[64px] flex-wrap'>
        <MainNav />
        <main className='container flex flex-wrap gap-8'>
          <div className='absolute top-40 -left-8 w-48 h-48 bg-[#00ded8] rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob'></div>
          <div className='absolute -top-10 -right-4 w-72 h-72 bg-[#f6a4df] rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-2000'></div>
          <div className='absolute top-40 -bottom-8 left-50 w-56 h-72 bg-[#0080ef] rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000'></div>
          <div className={'flex flex-col self-center gap-4 basis-full'}>
            <LandingHeader />
            <div className={'flex flex-row my-8'}>
              <Features />
            </div>
            <div
              className={
                'flex flex-row gap-4 md:justify-left lg:justify-left xl:justify-left sm:justify-center'
              }
            >
              <Button variant={'default'}>Get Started</Button>
              <Button variant={'ghost'}>Github</Button>
            </div>
          </div>

          <div className={'flex flex-col self-center gap-4 basis-full'}>
            <h2
              className={
                'text-3xl font-semibold md:text-4xl lg:text-5xl max-w-lg pb-6 sm:max-w-xl md:max-w-3xl lg:max-w-4xl u-text-gray-900'
              }
            >
              Open{' '}
              <Gradient dir='left-to-right' from='#00DFD8' to='#007CF0'>
                Source
              </Gradient>
            </h2>
            <div className={'flex flex-row basis-full sm:justify-center'}>
              <div
                className={
                  'grid md:grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-8'
                }
              >
                {projects.map((project: Project, index: number) => (
                  <GitHubRepoCard key={index} project={project} />
                ))}
              </div>
            </div>
          </div>

          <footer>
            <div className='container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0'>
              <div className='flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0'>
                <p className='text-center text-sm leading-loose md:text-left'>
                  Hosted on{' '}
                  <a
                    href='https://vercel.com'
                    target='_blank'
                    rel='noreferrer'
                    className='font-medium underline underline-offset-4'
                  >
                    Vercel
                  </a>
                  . The source code is available on{' '}
                  <a
                    href={'https://github.com/tikpedia'}
                    target='_blank'
                    rel='noreferrer'
                    className='font-medium underline underline-offset-4'
                  >
                    GitHub
                  </a>
                  .
                </p>
              </div>
              <ModeToggle />
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}
