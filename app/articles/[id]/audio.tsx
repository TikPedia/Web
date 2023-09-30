import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/new-york/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/new-york/dialog';
import { Label } from '@/components/label';
import { Input } from '@/components/new-york/input';

export default function AudioArticle() {
  return (
    <>
      <div className='flex items-center justify-between'>
        <div className='space-y-1'>
          <h2 className='text-2xl font-semibold tracking-tight'>
            Audio / Text To Speech
          </h2>
          <p className='text-sm text-muted-foreground'>
            Generate audio from text.
          </p>
        </div>
        <div className={'flex justify-end w-full'}>
          <Dialog>
            <DialogTrigger>
              <Button>Generate</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Are you sure absolutely sure?</DialogTitle>
                <DialogDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </DialogDescription>
              </DialogHeader>
              <div className='grid gap-4 py-4'>
                <div className='grid grid-cols-4 items-center gap-4'>
                  <Label htmlFor='name' className='text-right'>
                    Name
                  </Label>
                  <Input
                    id='name'
                    value='Pedro Duarte'
                    className='col-span-3'
                  />
                </div>
                <div className='grid grid-cols-4 items-center gap-4'>
                  <Label htmlFor='username' className='text-right'>
                    Username
                  </Label>
                  <Input
                    id='username'
                    value='@peduarte'
                    className='col-span-3'
                  />
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div>
        <Card>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <figure>
              <audio controls src='/media/cc0-audio/t-rex-roar.mp3'>
                <a href='/media/cc0-audio/t-rex-roar.mp3'> Download audio </a>
              </audio>
            </figure>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
