import { Nav } from '@/components/nav';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { UserNav } from '@/components/user-nav';
import { Toaster } from '@/components/ui/toaster';

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  if (!session) {
    // redirect('/api/auth/signin');
    // return <p>You must be signed in...</p>
  }

  return (
    <div className='flex-col md:flex'>
      <Toaster />
      <div className='flex border-b w-full flex-wrap'>
        <div className='flex basis-full'>
          <UserNav />
        </div>
        <div className='flex basis-full'>
          <Nav />
        </div>
      </div>
      <div className={'flex-1'}>{children}</div>
    </div>
  );
}
