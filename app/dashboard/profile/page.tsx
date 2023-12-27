'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/new-york/button';
import { Input } from '@/components/new-york/input';
import AuthWrapper, { PbUser, usePbAuth } from '@/app/providers';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import pb from '@/lib/pocketbase';
import { useToast } from '@/components/ui/use-toast';

export default function ProfilePage() {
  const { user } = usePbAuth();
  const { toast } = useToast();

  const handleUploadPictureClick = () => {
    console.log('upload picture');
    const fileInput = document.getElementById('file-input');
    if (fileInput) {
      fileInput.click();
    }
  };

  const handleProfileUpload = async (e: any) => {
    const targetUser = pb.authStore.model as PbUser;
    const file = e.target.files[0];

    if (!file) return;

    const formData = new FormData();
    formData.append('avatar', file);

    try {
      const updatedUser = await pb
        .collection('users')
        .update(targetUser.id, formData);

      if (updatedUser) {
        console.log('updated user', updatedUser);
        toast({
          title: 'Avatar updated',
          description: 'Your avatar has been updated.',
        });
      }
    } catch (err) {
      console.error(err);
      toast({
        title: 'Error',
        description: 'There was an error updating your avatar.',
      });
    }
  };

  const handleGoogleSecretsUpload = async (e: any) => {};

  if (!user) {
    return (
      <div>
        <h2 className='text-3xl font-bold tracking-tight'>Not logged in</h2>
      </div>
    );
  }

  return (
    <main className={'space-y-4 '}>
      <h1 className='text-3xl p-4 pl-8 pt-4 font-semibold'>Your Profile</h1>
      <Separator />
      <div className={'p-8 pt-6 my-4 flex flex-wrap gap-8'}>
        <Card className={'basis-full'}>
          <CardHeader>
            <CardTitle className='text-2xl'>Avatar</CardTitle>
            <CardDescription>Edit profile picture.</CardDescription>
          </CardHeader>
          <CardContent className='flex justify-between'>
            This is your avatar. Click on the avatar to upload a custom one from
            your files.
            <Button
              variant='ghost'
              className='relative h-12 w-12 rounded-full'
              onClick={handleUploadPictureClick}
            >
              <input
                className={'hidden'}
                type='file'
                id='file-input'
                accept={'image/png, image/jpeg'}
                onChange={handleProfileUpload}
              />
              <Avatar className={'w-20 h-20'}>
                {user?.avatarUrl ? (
                  <AvatarImage src={user.avatarUrl} />
                ) : (
                  <AvatarFallback>{user.name}</AvatarFallback>
                )}
              </Avatar>
            </Button>
          </CardContent>
          <Separator className='my-4' />
          <CardFooter className={'flex'}>
            <p>An avatar is optional but strongly recommended.</p>
          </CardFooter>
        </Card>
        <Card className={'basis-full'}>
          <CardHeader className='space-y-1'>
            <CardTitle className='text-2xl'>Tikpedia ID</CardTitle>
            <CardDescription>
              This is your user ID within Tikpedia.
            </CardDescription>
          </CardHeader>
          <CardContent className='grid gap-4'>
            <Input id='name' value={user.id} />
          </CardContent>
          <CardFooter>Used when interacting with the Tikpedia API.</CardFooter>
        </Card>
        <Card className={'basis-full'}>
          <CardHeader className='space-y-1'>
            <CardTitle className='text-2xl'>Google API secrets</CardTitle>
            <CardDescription>
              Add your Google API secrets to enable Youtube upload integration.
            </CardDescription>
          </CardHeader>
          <CardContent className='grid gap-4'>
            <Input
              id='google_secrets'
              type='file'
              accept={'application/JSON'}
            />
            <p>
              The file should be a JSON file containing your Google API secrets.
            </p>
          </CardContent>
          <CardFooter>
            <br />
            <p className='text-gray-500 dark:text-gray-400'>
              Get your secret file.{' '}
              <a
                href='https://developers.google.com/youtube/v3/getting-started'
                className='inline-flex items-center font-medium text-blue-600 dark:text-blue-500 hover:underline'
              >
                Google API Documentation
                <svg
                  className='w-4 h-4 ms-2 rtl:rotate-180'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 14 10'
                >
                  <path
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M1 5h12m0 0L9 1m4 4L9 9'
                  />
                </svg>
              </a>
            </p>
          </CardFooter>
        </Card>
        <Card className={'basis-full'}>
          <CardHeader className='space-y-1'>
            <CardTitle className='text-2xl'>Personal Data</CardTitle>
            <CardDescription>
              Download a copy of your data from Tikpedia.
            </CardDescription>
          </CardHeader>
          <Separator></Separator>
          <CardFooter className={'w-full mt-4 flex basis-full justify-end'}>
            <Button variant='default'>Download</Button>
          </CardFooter>
        </Card>
        <Card className={'basis-full border border-[#671e21]'}>
          <CardHeader className='space-y-1'>
            <CardTitle className='text-2xl'>Delete Account</CardTitle>
            <CardDescription>
              Permanently remove your Personal Account and all of its contents
              from the Tikpedia platform. This action is not reversible, so
              please continue with caution.
            </CardDescription>
          </CardHeader>
          <Separator className='bg-[#671e21]' />
          <CardFooter className={'flex justify-end bg-[#2a1314] p-4'}>
            <Button variant='destructive'>Delete Account</Button>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
}
