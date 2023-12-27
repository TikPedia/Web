import { Separator } from '@/components/ui/separator';

export default function TermsPage() {
  return (
    <div className={'flex w-full flex-wrap bg-black'}>
      <div className={'flex basis-full h-[300px]  items-center justify-center'}>
        <div>
          <h1 className={'text-5xl'}>Terms of Service</h1>
        </div>
      </div>

      <div className={'flex basis-full h-full bg-[#111] justify-center p-8'}>
        <small>
          Subject to these Terms of Service (this "Agreement"), Vercel Inc.
          ("Vercel", "we", "us" and/or "our") provides access to Vercel's cloud
          platform as a service, including, without limitation, certain API's
          and domain registration services (collectively, the "Services"). By
          using or accessing the Services, you acknowledge that you have read,
          understand, and agree to be bound by this Agreement.
        </small>
      </div>
    </div>
  );
}
