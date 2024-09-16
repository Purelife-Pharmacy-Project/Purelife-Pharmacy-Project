'use client';
import { Footer } from '@/components/home/Footer';
import { NewsLetterCard } from '@/components/home/NewsletterCard';
import { FC, useRef } from 'react';

export default function PrivacyPolicy() {
  const introduction = useRef<HTMLDivElement>(null);
  const personalData = useRef<HTMLDivElement>(null);
  const howWeCollect = useRef<HTMLDivElement>(null);
  const usePersonalData = useRef<HTMLDivElement>(null);
  const sharing = useRef<HTMLDivElement>(null);
  const storage = useRef<HTMLDivElement>(null);
  const security = useRef<HTMLDivElement>(null);
  const consent = useRef<HTMLDivElement>(null);
  const cookies = useRef<HTMLDivElement>(null);
  const thirdPartyLinks = useRef<HTMLDivElement>(null);
  const changesToPolicy = useRef<HTMLDivElement>(null);
  const contactDetails = useRef<HTMLDivElement>(null);
  const scrollTo = (ref: React.RefObject<HTMLDivElement>, sign: '-' | '+', padding: number) => {
    if (ref.current) {
      const offset = sign === '-' ? ref.current.offsetTop - padding : ref.current.offsetTop + padding;
      window.scrollTo({
        top: offset,
        behavior: 'smooth',
      });
    }
  };
  const collectInfo = [
    'Our Website',
    'Registration Forms',
    'Interactions with healthcare providers',
    'Referrals from other medical professionals',
    'Hospital records',
    'Correspondence via email, phone, or other communication channels',
  ];
  const personalInfo = [
    "Register you as a new customer or create an account for you on our Website.",
    "We use your information to send appointment reminders.",
    "To communicate with you regarding your account, including responding to inquiries, confirming appointments, notifying you of changes, and updates, Services and any other promotional offers.",
    "To share your personal health information with healthcare providers to deliver medical care.",
    "To process payments for the Services we provide.",
    "To enhance your experience on our Website and tailor our Services to your preferences, we may use your personal data to customize our offerings.",
    "To improve our Website’s performance and user experience, including understanding how you interact with our Site, the pages you visit, and the duration of your visits.",
    "To maintain the security of our Website, detect and prevent fraud, and protect against any unauthorized or illegal activities.",
    "To comply with legal obligations, respond to legal requests, or protect our rights and interests.",
    "To fulfill our contractual obligations to you and to effect any rights you have assigned to us."
  ];
  const sharingInfo = [
    "<strong>Service Providers:</strong> We may share your personal data with third-party service providers who assist us in operating our Website, processing payments and overall help us deliver our Services.",
    "<strong>Healthcare Providers: </strong>In the context of telehealth services or medical consultations, we may share your health information with healthcare professionals, including doctors and laboratory technicians, to ensure the provision of accurate medical advice and care.",
    "<strong>Legal Obligations: </strong>We may disclose your information to comply with legal requirements, respond to regulatory authorities, enforce our policies, or in the event of any legal process, such as court orders or government investigations, and protect the rights, privacy, safety, or property of our employees, or others.",
    "<strong>Business Transfers: </strong>In the event of a merger, acquisition, or sale of all or part of our assets, your personal data may be transferred or disclosed as part of the transaction.",
    "<strong>Affiliated companies within our corporate structure: </strong>We may share your personal data with our affiliated companies. This sharing allows us to offer you certain products, services, or promotions that may be of interest to you."
  ];

  return (
    <div className='grid w-full justify-center gap-6'>
      <main className='mx-auto grid max-w-[1280px] px-6'>
        <div className='relative mx-auto mt-10 w-full px-6 sm:mt-7'>
        <div className='flex flex-col-reverse sm:flex-row sm:gap-[5%]'>
          <section className='w-full sm:w-[30%] sm:h-[450px] sticky top-32 z-10 mb-7'>
            <header className='mb-[7px] font-bold sm:text-[16px] lg:text-[18px]'>
              ON THIS PAGE
            </header>
            <div
              onClick={()=>{scrollTo(introduction, '-',  70)}}
              className='mb-[7px] cursor-pointer font-semibold text-[13px]  sm:text-[14px] lg:text-[16px]'
            >
              Introduction
            </div>
            <div
              onClick={()=>{scrollTo(personalData, '+',  70)}}
              className='mb-[7px] cursor-pointer font-semibold text-[13px] sm:text-[14px] lg:text-[16px]'
            >
              Personal Data We Collect
            </div>
            <div
              onClick={()=>{scrollTo(howWeCollect, '+',  70)}}
              className='mb-[7px] cursor-pointer font-semibold text-[13px] sm:text-[14px] lg:text-[16px]'
            >
              How We Collect Information
            </div>
            <div
              onClick={()=>{scrollTo(usePersonalData, '+',  70)}}
              className='mb-[7px] cursor-pointer font-semibold text-[13px] sm:text-[14px] lg:text-[16px]'
            >
              How We Use Personal Data
            </div>
            <div
              onClick={()=>{scrollTo(sharing, '+',  70)}}
              className='mb-[7px] cursor-pointer font-semibold text-[13px] sm:text-[14px] lg:text-[16px]'
            >
              Sharing
            </div>
            <div
              onClick={()=>{scrollTo(storage, '+',  70)}}
              className='mb-[7px] cursor-pointer font-semibold text-[13px] sm:text-[14px] lg:text-[16px]'
            >
              Storage
            </div>
            <div
              onClick={()=>{scrollTo(security, '+',  70)}}
              className='mb-[7px] cursor-pointer font-semibold text-[13px] sm:text-[14px] lg:text-[16px]'
            >
              Security
            </div>
            <div
              onClick={()=>{scrollTo(consent, '+',  70)}}
              className='mb-[7px] cursor-pointer font-semibold text-[13px] sm:text-[14px] lg:text-[16px]'
            >
              Consent
            </div>
            <div
              onClick={()=>{scrollTo(cookies, '+',  70)}}
              className='mb-[7px] cursor-pointer font-semibold text-[13px] sm:text-[14px] lg:text-[16px]'
            >
              Cookies
            </div>
            <div
              onClick={()=>{scrollTo(thirdPartyLinks, '+',  70)}}
              className='mb-[7px] cursor-pointer font-semibold text-[13px] sm:text-[14px] lg:text-[16px]'
            >
              Third-Party Links
            </div>
            <div
              onClick={()=>{scrollTo(changesToPolicy, '+',  70)}}
              className='mb-[7px] cursor-pointer font-semibold text-[13px] sm:text-[14px] lg:text-[16px]'
            >
              Changes To Our Privacy Policy
            </div>
            <div
              onClick={()=>{scrollTo(contactDetails, '+',  70)}}
              className='mb-[7px] cursor-pointer font-semibold text-[13px] sm:text-[14px] lg:text-[16px]'
            >
              Contact Details
            </div>
          </section>
          <section
            style={{ margin: '0 3% 0px 0' }}
            className='w-full sm:w-[65%] flex flex-col gap-6'
          >
            <div ref={introduction}>
              <header className='-mt-[15px] font-bold text-[24px] sm:text-[28px] lg:text-[32px]'>
                Privacy Policy
              </header>
              <p className='mb-2 text-[#5A5A5A] text-[13px] sm:text-[14px]'>
                Updated Date: September 20, 2024
              </p>
              <h2 className='mt-5 font-semibold sm:text-[20px] lg:text-[24px]'>
                Introduction
              </h2>
              <p className='mb-[20px] text-justify text-[#5A5A5A] text-[13px] sm:text-[14px] lg:text-[16px]'>
                This privacy policy discloses the privacy practices for the A-
                Pure Lifestyle Pharmacy Nigeria Limited (“Pure Life’ or “we”,
                “us”, or “our”) and applies to our website{' '}
                <a className='text-[#0066ff]' href='https://purelifehealth.io'>
                  https://purelifehealth.io
                </a>{' '}
                (“Site” or “Website”), and any other services or interactions
                related to our products and services (collectively, the
                `Services`). This Policy is designed to provide persons or
                entities who interact with us or who utilize our Services
                (“users”, “you” or “your”) with an understanding of how we
                collect, use, share, store, and safeguard information of users
                on our Website.
              </p>
              <p className='text-justify text-[#5A5A5A] text-[13px] sm:text-[14px] lg:text-[16px]'>
                Please read this privacy policy carefully. If you do not agree
                with the terms of this privacy policy, please do not access the
                Site or use our Services.
              </p>
            </div>
            <div ref={personalData}>
              <h2 className=' my-4 font-semibold sm:text-[20px] lg:text-[24px]'>
                Personal Data We Collect
              </h2>

              <p className='mb-5 text-justify text-[#5A5A5A] text-[13px] sm:text-[14px] lg:text-[16px]'>
                When you visit our Website or interact with our Services,
                subscribe to our newsletter, respond to a survey or fill out a
                form, we may collect various types of personal data, including
                but not limited to contact information, health information,
                usage information, device information, payment information, IP
                address, log data, browser time.
              </p>

              <p className='mb-5 text-justify text-[#5A5A5A] text-[13px] sm:text-[14px] lg:text-[16px]'>
                By giving us this information, you agree to this information
                being collected, used and disclosed as described in this privacy
                policy.
              </p>

              <p className='mb-5 text-justify text-[#5A5A5A] text-[13px] sm:text-[14px] lg:text-[16px]'>
                It's important to note that providing personal data to us is
                voluntary. You have the right to refuse or withdraw consent to
                the collection of certain personal data, although this may limit
                your ability to use certain features of our Website or receive
                certain Services.
              </p>
            </div>
            <div ref={howWeCollect}>
              <h2 className=' my-4 font-semibold sm:text-[20px] lg:text-[24px]'>
                How We Collect Information
              </h2>
              <p className='mb-[20px] text-justify text-[#5A5A5A] text-[13px] sm:text-[14px] lg:text-[16px]'>
                We gather your personal data from various sources, including:
              </p>
              {collectInfo && (
                <ul className='ml-5 list-disc'>
                  {collectInfo.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className=' text-[#5A5A5A]  text-[13px] sm:text-[14px] lg:text-[16px]'
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div ref={usePersonalData}>
              <h2 className=' my-4 font-semibold sm:text-[20px] lg:text-[24px]'>
                How We Use Personal Data
              </h2>
              <p className='mb-[20px] text-justify text-[#5A5A5A] text-[13px] sm:text-[14px] lg:text-[16px]'>
              Our commitment to transparency is unwavering, and we handle your personal data with the utmost responsibility. We use your personal data to:
              </p>
              {personalInfo && (
                <ul className='ml-5 list-disc'>
                  {personalInfo.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className=' text-[#5A5A5A]  text-[13px] sm:text-[14px] lg:text-[16px]'
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div ref={sharing}>
              <h2 className=' my-4 font-semibold sm:text-[20px] lg:text-[24px]'>
                Sharing
              </h2>
              <p className='mb-[20px] text-justify text-[#5A5A5A] text-[13px] sm:text-[14px] lg:text-[16px]'>
              At Pure Life, we prioritize the protection of your personal data and are committed to maintaining your privacy. However, there are specific situations where we may disclose your information, as described below:
              </p>
              {sharingInfo && (
                <ul className='ml-5 list-disc'>
                  {sharingInfo.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className=' text-[#5A5A5A]  text-[13px] sm:text-[14px] lg:text-[16px]'
                      dangerouslySetInnerHTML={{ __html: item }}
                    >
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div ref={storage}>
              <h2 className=' my-4 font-semibold sm:text-[20px] lg:text-[24px]'>
                Storage
              </h2>
              <p className='mb-[20px] text-justify text-[#5A5A5A] text-[13px] sm:text-[14px] lg:text-[16px]'>
              We take the security and confidentiality of your personal data seriously. Your information will be stored in compliance with industry standards and best practices. Your data will be stored on secure servers, and access will be limited to authorized personnel who need the information to fulfill their responsibilities.
              </p>
              <p className='mb-[20px] text-justify text-[#5A5A5A] text-[13px] sm:text-[14px] lg:text-[16px]'>
              Please note that while we take every reasonable precaution to protect your personal data, no method of transmission or storage over the internet is completely secure. We cannot guarantee the absolute security of your data. Therefore, we encourage you to take steps to protect your personal information, such as maintaining strong and unique passwords and ensuring the confidentiality of your account credentials.
              </p>
              <p className='mb-[20px] text-justify text-[#5A5A5A] text-[13px] sm:text-[14px] lg:text-[16px]'>
              We will retain your personal data for as long as it is necessary to fulfill the purposes outlined in this privacy policy, or until you withdraw your consent for the use of your personal data. This is a case-by-case determination that is dependent on various factors like the nature of the data, why it is collected and processed, and relevant legal or operational retention needs.
              </p>
              
            </div>
            <div ref={security}>
              <h2 className=' my-4 font-semibold sm:text-[20px] lg:text-[24px]'>
                Security
              </h2>
              <p className='mb-[20px] text-justify text-[#5A5A5A] text-[13px] sm:text-[14px] lg:text-[16px]'>
              We take precautions to protect your data. Wherever we collect any sensitive data, that data is encrypted and transmitted to us in a secure way. 
              </p>
              <p className='mb-[20px] text-justify text-[#5A5A5A] text-[13px] sm:text-[14px] lg:text-[16px]'>
              The security of the storage includes firewall policies and password policies to prevent unauthorized access. We shall take precautionary measures to protect your data against accidental loss and from unauthorized access, use, alteration, and disclosure. However, despite our efforts, no security controls are 100% effective, and we cannot ensure or warrant the security of the data you provide to us. There is no guarantee that the data may not be accessed, disclosed, altered, or destroyed by breach of any of our physical, technical, or managerial safeguards.
              </p>
              <p className='mb-[20px] text-justify text-[#5A5A5A] text-[13px] sm:text-[14px] lg:text-[16px]'>
              Pure Life shall not be liable for any claims whether direct, consequential, incidental, special, exemplary or punitive damages of any nature including loss of data, revenue, anticipated profit or intangible losses (even if Pure Life has been advised of the possibility of such damages).
              </p>
              <p className='mb-[20px] text-justify text-[#5A5A5A] text-[13px] sm:text-[14px] lg:text-[16px]'>
              The Website may, from time to time, contain links to other websites. If you follow a link to any of these websites, please note that they may have their own privacy policies and that we do not accept any responsibility or liability for these policies or websites. Please check these privacy policies before you submit any data. This policy applies only to information collected by the Website and by us and not to other websites that you may link to from here.
              </p>
              
            </div>
            <div ref={consent}>
              <h2 className=' my-4 font-semibold sm:text-[20px] lg:text-[24px]'>
                Consent
              </h2>
              <p className='mb-[20px] text-justify text-[#5A5A5A] text-[13px] sm:text-[14px] lg:text-[16px]'>
              By using our website, you consent to the collection, processing, and use of your personal information as described in this Privacy Policy. You have the right to access, update, correct, or delete your personal information. You may also request that we restrict or object to the processing of your data.
              </p>
            </div>
            <div ref={cookies}>
              <h2 className=' my-4 font-semibold sm:text-[20px] lg:text-[24px]'>
                Cookies
              </h2>
              <p className='mb-[20px] text-justify text-[#5A5A5A] text-[13px] sm:text-[14px] lg:text-[16px]'>
              Our website uses cookies. Cookies are small data files that are placed on your device (computer, mobile phone, or tablet) when you visit a website. Cookies allow the website to recognize your device and store some information about your preferences or past actions.
              </p>
              <p className='mb-[20px] text-justify text-[#5A5A5A] text-[13px] sm:text-[14px] lg:text-[16px]'>
              We use cookies and other tracking technologies to enhance your user experience, improve our Services, and personalize your interactions with us. You can control cookies through your browser settings.
              </p>
            </div>
            <div ref={thirdPartyLinks}>
              <h2 className=' my-4 font-semibold sm:text-[20px] lg:text-[24px]'>
                Third-Party Links
              </h2>
              <p className='mb-[20px] text-justify text-[#5A5A5A] text-[13px] sm:text-[14px] lg:text-[16px]'>
              Occasionally, at our discretion, we may include or offer third-party products or services on our Website. These third-party sites have separate and independent privacy policies. We therefore have no responsibility or liability for the content and activities of these linked sites.
              </p>
            </div>
            <div ref={changesToPolicy}>
              <h2 className=' my-4 font-semibold sm:text-[20px] lg:text-[24px]'>
                Changes To Our Privacy Policy
              </h2>
              <p className='mb-[20px] text-justify text-[#5A5A5A] text-[13px] sm:text-[14px] lg:text-[16px]'>
              We may update this privacy policy to reflect changes to our information practices. Any changes will be effective immediately upon posting on our Website. We encourage you to periodically review this page for the latest information on our privacy policy practices. If you continue to use the Services after those changes are in effect, you agree to the revised policy.
              </p>
            </div>
            <div ref={contactDetails}>
              <h2 className=' my-4 font-semibold sm:text-[20px] lg:text-[24px]'>
                Contact Details
              </h2>
              <p className='mb-[20px] text-justify text-[#5A5A5A] text-[13px] sm:text-[14px] lg:text-[16px]'>
              If you have questions or comments regarding our privacy policy or privacy practices, you can do so by sending a mail to hello@purelifehealth.io and your request will be handled immediately.
              </p>
            </div>
          </section>
          </div>
        </div>
        <div className='mb-10 mx-auto mt-10 w-full px-4 sm:mb-10'>
          <div className='sm:gap-0 sm:flex-row sm:items-center flex flex-col gap-6 justify-between rounded-[20px] bg-primaryLight pb-[20px] pl-[40px] pr-[40px] pt-[20px]'>
            <h3 className='font-extrabold text-[#FF0028] text-[20px] sm:text-[22px] lg:text-[24px]'>
              Report any adverse drug reaction here
            </h3>
            <button className='w-fit rounded-[50px] bg-[#FF0028]  pb-[15px]  pl-[50px]  pr-[50px]  pt-[15px] text-[#FFFFFF] text-[13px]  sm:pb-[10px] sm:pl-[30px] sm:pr-[30px] sm:pt-[10px] sm:text-[14px]'>
              Report Now
            </button>
          </div>
        </div>
        <NewsLetterCard />
        <Footer />
      </main>
    </div>
  );
}