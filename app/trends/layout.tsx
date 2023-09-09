import { Nav } from '@/components/nav';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { UserNav } from '@/components/user-nav';

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
      <div className='flex border-b w-full'>
        <div className='flex h-16 items-center px-4'>
          <Nav />
          <UserNav />
        </div>
      </div>
      <div className={'flex-1 space-y-4 p-8 pt-6'}>{children}</div>
    </div>
  );
}
