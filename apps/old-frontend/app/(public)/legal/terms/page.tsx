import { Separator } from '@/components/ui/separator';

export default function TermsPage() {
  return (
    <div className={'flex w-full flex-wrap bg-black'}>
      <div className={'flex basis-full h-[300px]  items-center justify-center'}>
        <div>
          <h1 className={'text-5xl'}>Terms of Service</h1>
        </div>
      </div>

      <div
        className={
          'flex flex-col basis-full h-full bg-[#111] justify-center gap-4 p-12'
        }
      >
        <h2 className={'text-2xl'}>Terms of Use</h2>
        <small className={'leading-4 text-base tracking-wide'}>
          <b>1. Description of Services:</b>
          <br />
          <br />
          TikPedia aims to provide a video content generation service based on
          current trends using data from WikiPedia and the Open AI API. These
          services allow users to create videos by providing approvals at each
          stage of the process.
        </small>
        <small className={'leading-4 text-base tracking-wide'}>
          <b>2. Rights and Obligations of Users:</b>
          <br />
          <br />
          By using TikPedia, the user agrees to maintain the confidentiality of
          their login credentials, use the platform in accordance with its
          purpose, and not disrupt its proper functioning. Any damage resulting
          from a failure to comply with these obligations will incur the user's
          liability.
        </small>
        <small className={'leading-4 text-base tracking-wide'}>
          <b>3. Intellectual Property:</b>
          <br />
          <br />
          All elements on TikPedia are protected by intellectual property
          rights, notably by copyright. The use, exploitation, or reproduction
          of any content without explicit consent from TikPedia is strictly
          prohibited.
        </small>
        <small className={'leading-4 text-base tracking-wide'}>
          <b>4. Publisher's Liability:</b>
          <br />
          <br />
          TikPedia strives to provide accurate and up-to-date information,
          although errors may occur. The publisher disclaims any liability for
          site inaccessibility due to technical reasons or for any content from
          external sources linked through hyperlinks.
        </small>
        <small className={'leading-4 text-base tracking-wide'}>
          <b>5. Comments and Forums:</b>
          <br />
          <br />
          If users post comments or participate in forums, TikPedia disclaims
          any responsibility for the content published by users. Any erroneous
          or offensive content published by users cannot hold TikPedia liable.
        </small>
        <small className={'leading-4 text-base tracking-wide'}>
          <b>6. Applicable Law and Jurisdiction:</b>
          <br />
          <br />
          In the event of a dispute, the parties agree to attempt an amicable
          resolution before any legal action. The applicable law and competent
          jurisdiction are determined in accordance with the prevailing law.
        </small>

        <h2 className={'text-2xl'}>Legal Notice</h2>
        <small className={'leading-4 text-base tracking-wide'}>
          <b>Intellectual Property:</b>
          <br />
          <br />
          All content on TikPedia is protected by intellectual property rights.
          The use, reproduction, or exploitation of any content without explicit
          consent from TikPedia is prohibited.
        </small>
        <small className={'leading-4 text-base tracking-wide'}>
          <b>Use of Personal Data and Cookie Management:</b>
          <br />
          <br />
          TikPedia complies with the General Data Protection Regulation (GDPR).
          We collect and process personal data in accordance with this
          regulation. For more information on how we process your personal data,
          please refer to our Privacy Policy.
        </small>
        <small className={'leading-4 text-base tracking-wide'}>
          <b>Purposes of Cookies:</b>
          <br />
          <br />
          TikPedia uses cookies to analyze user behavior. Some cookies are
          necessary for the proper functioning of the site, while others are
          used for statistical and advertising purposes. By visiting our site,
          you consent to the use of cookies in accordance with our Cookie
          Policy.
        </small>
        <small className={'leading-4 text-base tracking-wide'}>
          <b>Legal Basis for Data Processing:</b>
          <br />
          <br />
          Our processing of personal data is based on user consent and/or other
          legal bases provided by the GDPR.
        </small>
        <small className={'leading-4 text-base tracking-wide'}>
          <b>Recipients of Personal Data:</b>
          <br />
          <br />
          The collected data may be accessible to the site's publishing company
          and the hosting provider. In some cases, data transfers may occur
          outside the European Union.
        </small>
        <small className={'leading-4 text-base tracking-wide'}>
          <b>User Rights:</b>
          <br />
          <br />
          In accordance with the GDPR, you have the right to access, rectify,
          object to, and delete your personal data. To exercise your rights or
          for any questions regarding your personal data, please contact us at
          gdpr@tikpedia.com .
        </small>
        <small className={'leading-4 text-base tracking-wide'}>
          <b>Website Hosting:</b>
          <br />
          <br />
          Hosting Provider Name: [Hosting provider name] Hosting Provider
          Business Name: [Hosting provider business name] Hosting Provider
          Address: [Hosting provider address] Hosting Provider SIRET Number:
          [Hosting provider's SIRET number] Hosting Provider Phone Number:
          [Hosting provider phone number]
        </small>
        <small className={'leading-4 text-base tracking-wide'}>
          <b>Identification:</b>
          <br />
          <br />
          Company Name: TikPedia Headquarters Address: Lyon, France
        </small>
        <div>
          <p>Last update: Dec 27, 2023</p>
        </div>
      </div>
    </div>
  );
}
