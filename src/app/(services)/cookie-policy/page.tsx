'use client';
import { Footer } from '@/components/home/Footer';
import { NewsLetterCard } from '@/components/home/NewsletterCard';
import { useRef } from 'react';

export default function CookiePolicy() {
  const introduction = useRef<HTMLDivElement>(null);
  const whatAreCookies = useRef<HTMLDivElement>(null);
  const typesOfCookies = useRef<HTMLDivElement>(null);
  const cookiePreferences = useRef<HTMLDivElement>(null);
  const thirdPartyCookies = useRef<HTMLDivElement>(null);
  const internationalDataTransfers = useRef<HTMLDivElement>(null);
  const cookiePolicyChanges = useRef<HTMLDivElement>(null);

  const scrollTo = (
    ref: React.RefObject<HTMLDivElement>,
    sign: '-' | '+',
    padding: number
  ) => {
    if (ref.current) {
      const offset =
        sign === '-'
          ? ref.current.offsetTop - padding
          : ref.current.offsetTop + padding;
      window.scrollTo({
        top: offset,
        behavior: 'smooth',
      });
    }
  };

  const cookiePreferenceInfo = [
    'See what cookies you have and delete them on an individual or all-at-once basis.',
    'Block third-party cookies or all cookies from being stored on your device.',
    'Set your browser to notify you when you receive a new cookie.',
  ];

  const cookiesInfo = [
    '<strong>Essential cookies:</strong> These Cookies are necessary for the Website to function properly. They enable basic functions like page navigation and access to secure areas of the website. The Website cannot function properly without these Cookies.',
    '<strong>Analytical/performance cookies:</strong> These Cookies help us understand how visitors interact with our Website. They collect information about which pages are visited most often, how visitors move around the site, and if they encounter error messages. All information collected by these cookies is aggregated and anonymous.',
    '<strong>Functional Cookies:</strong> These Cookies allow the Website to remember choices you make (such as your language or the region you are in) and provide enhanced, more personalized features.',
    '<strong>Targeting/Advertising Cookies:</strong> These Cookies record your visit to our website, the pages you have visited, and the links you have followed. We use this information to make our Website, and the advertising displayed on it more relevant to your interests.',
  ];

  return (
    <>
      <div className='grid w-full justify-center gap-6'>
        <main className='mx-auto grid max-w-[1280px] px-6'>
          <div className='custom-width relative mt-5 sm:mt-5'>
            <div className='flex flex-col-reverse sm:flex-row sm:gap-[5%]'>
              <section className='sticky top-32 z-10 mb-7 mt-[10px] w-full sm:h-[300px] sm:w-[30%]'>
                <header className='mb-[7px] font-bold sm:text-[16px] lg:text-[18px]'>
                  ON THIS PAGE
                </header>
                <div
                  onClick={() => {
                    scrollTo(introduction, '-', 70);
                  }}
                  className='mb-[7px] cursor-pointer text-[13px] font-semibold sm:text-[14px] lg:text-[16px]'
                >
                  Introduction
                </div>
                <div
                  onClick={() => {
                    scrollTo(whatAreCookies, '+', 70);
                  }}
                  className='mb-[7px] cursor-pointer text-[13px] font-semibold sm:text-[14px] lg:text-[16px]'
                >
                  What Are Cookies?
                </div>
                <div
                  onClick={() => {
                    scrollTo(typesOfCookies, '+', 70);
                  }}
                  className='mb-[7px] cursor-pointer text-[13px] font-semibold sm:text-[14px] lg:text-[16px]'
                >
                  Types of Cookies
                </div>
                <div
                  onClick={() => {
                    scrollTo(cookiePreferences, '+', 70);
                  }}
                  className='mb-[7px] cursor-pointer text-[13px] font-semibold sm:text-[14px] lg:text-[16px]'
                >
                  Your Cookie Preferences
                </div>
                <div
                  onClick={() => {
                    scrollTo(thirdPartyCookies, '+', 70);
                  }}
                  className='mb-[7px] cursor-pointer text-[13px] font-semibold sm:text-[14px] lg:text-[16px]'
                >
                  Third-Party Cookies
                </div>
                <div
                  onClick={() => {
                    scrollTo(internationalDataTransfers, '+', 70);
                  }}
                  className='mb-[7px] cursor-pointer text-[13px] font-semibold sm:text-[14px] lg:text-[16px]'
                >
                  International Data Transfers
                </div>
                <div
                  onClick={() => {
                    scrollTo(cookiePolicyChanges, '+', 70);
                  }}
                  className='mb-[7px] cursor-pointer text-[13px] font-semibold sm:text-[14px] lg:text-[16px]'
                >
                  Changes To Our Cookie Policy
                </div>
              </section>
              <section className='flex w-full flex-col gap-6 sm:w-[65%]'>
                <div ref={introduction}>
                  <header className='text-[24px] font-bold sm:text-[28px] lg:text-[32px]'>
                    Cookie Policy
                  </header>
                  <p className='mb-2 text-[13px] text-[#5A5A5A] sm:text-[14px]'>
                    Updated Date: September 20, 2024
                  </p>
                  <h2 className='mt-5 font-semibold sm:text-[20px] lg:text-[24px]'>
                    Introduction
                  </h2>
                  <p className='mb-[20px] text-justify text-[13px] text-[#5A5A5A] sm:text-[14px] lg:text-[16px]'>
                    This Cookie Policy provides information on how A- Pure
                    Lifestyle Pharmacy Nigeria Limited ("PureLife", "we", "us",
                    or "our") use cookies and similar tracking technologies
                    (collectively, “Cookies”) on our website{' '}
                    <a
                      className='text-[#0066ff]'
                      href='https://purelifehealth.io'
                    >
                      https://purelifehealth.io
                    </a>{' '}
                    ("Site", or "Website") to provide users (“users”, “you” or
                    “your”) with a better user experience. Kindly read this
                    policy carefully to understand what types of Cookies we use,
                    what information we collect using Cookies, and how that
                    information is used. By using our Website, You agree to the
                    use of Cookies as outlined in this policy.
                  </p>
                  <p className='text-justify text-[13px] text-[#5A5A5A] sm:text-[14px] lg:text-[16px]'>
                    Cookies do not typically contain any information that
                    personally identifies a user. However, personal information
                    that we store about you may be linked to the information
                    stored in and obtained from Cookies. For further information
                    on how we use, store and keep your personal data secure,
                    please refer to our Privacy Policy.
                  </p>
                </div>
                <div ref={whatAreCookies}>
                  <h2 className=' my-4 font-semibold sm:text-[20px] lg:text-[24px]'>
                    What are Cookies?
                  </h2>

                  <p className='mb-5 text-justify text-[13px] text-[#5A5A5A] sm:text-[14px] lg:text-[16px]'>
                    Cookies are small data files that are placed on your device
                    (computer, mobile phone, or tablet) when you visit a
                    website. Cookies allow the website to recognize your device
                    and store some information about your preferences or past
                    actions.
                  </p>
                </div>
                <div ref={typesOfCookies}>
                  <h2 className=' my-4 font-semibold sm:text-[20px] lg:text-[24px]'>
                    Types of Cookies and How We Use Them
                  </h2>
                  <p className='mb-5 text-justify text-[13px] text-[#5A5A5A] sm:text-[14px] lg:text-[16px]'>
                    We use Cookies to improve your experience on our Website
                    while respecting your privacy. Specifically, we use the
                    following types of Cookies:
                  </p>
                  {cookiesInfo && (
                    <ul className='ml-5 list-disc'>
                      {cookiesInfo.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className=' text-[13px]  text-[#5A5A5A] sm:text-[14px] lg:text-[16px]'
                          dangerouslySetInnerHTML={{ __html: item }}
                        ></li>
                      ))}
                    </ul>
                  )}
                </div>
                <div ref={cookiePreferences}>
                  <h2 className=' my-4 font-semibold sm:text-[20px] lg:text-[24px]'>
                    Your Cookie Preferences
                  </h2>
                  <p className='mb-[20px] text-justify text-[13px] text-[#5A5A5A] sm:text-[14px] lg:text-[16px]'>
                    You can control and manage cookies in your web browser. Most
                    browsers allow you to:
                  </p>
                  {cookiePreferenceInfo && (
                    <ul className='ml-5 list-disc'>
                      {cookiePreferenceInfo.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className=' text-[13px]  text-[#5A5A5A] sm:text-[14px] lg:text-[16px]'
                          dangerouslySetInnerHTML={{ __html: item }}
                        ></li>
                      ))}
                    </ul>
                  )}
                </div>
                <div ref={thirdPartyCookies}>
                  <h2 className=' my-4 font-semibold sm:text-[20px] lg:text-[24px]'>
                    Third-Party Cookies
                  </h2>
                  <p className='mb-[20px] text-justify text-[13px] text-[#5A5A5A] sm:text-[14px] lg:text-[16px]'>
                    We may allow our third-party service providers to place
                    cookies on our site for analytics or advertising purposes.
                    These third parties may include Google Analytics and social
                    media platforms. We do not control or recommend these
                    cookies and recommend that you review the cookie policies of
                    any third-party providers for more details.
                  </p>
                  <p className='mb-[20px] text-justify text-[13px] text-[#5A5A5A] sm:text-[14px] lg:text-[16px]'>
                    You have the right to choose whether or not to accept
                    Cookies. You can set your browser to refuse all or some
                    browser Cookies, or to alert you when Websites set or access
                    Cookies. However, if you choose to refuse or disable
                    Cookies, some parts of this Website may become inaccessible
                    or not function properly. To learn more about how to manage
                    Cookies, please consult your browser's help section.
                  </p>
                </div>
                <div ref={internationalDataTransfers}>
                  <h2 className=' my-4 font-semibold sm:text-[20px] lg:text-[24px]'>
                    International Data Transfers
                  </h2>
                  <p className='mb-[20px] text-justify text-[13px] text-[#5A5A5A] sm:text-[14px] lg:text-[16px]'>
                    Our servers are located in Nigeria. If you are accessing our
                    Website from outside Nigeria, be aware that your information
                    may be transferred to, stored and processed in Nigeria. By
                    using our Website, You consent to this transfer. We ensure
                    that any international transfers comply with applicable data
                    protection laws.
                  </p>
                </div>
                <div ref={cookiePolicyChanges}>
                  <h2 className=' my-4 font-semibold sm:text-[20px] lg:text-[24px]'>
                    Changes To Our Cookie Policy
                  </h2>
                  <p className='mb-[20px] text-justify text-[13px] text-[#5A5A5A] sm:text-[14px] lg:text-[16px]'>
                    We may update this Cookie Policy from time to time to
                    reflect changes in technology, laws, or our operations. Any
                    such changes will become binding on you on your first use of
                    our Site after such changes have been made. We encourage you
                    to review this policy periodically for updates.
                  </p>
                </div>
              </section>
            </div>
          </div>
          <div className='mx-auto mb-10 mt-10 w-full px-4 sm:mb-10'>
            <div className='flex flex-col justify-between gap-6 rounded-[20px] bg-primaryLight pb-[20px] pl-[40px] pr-[40px] pt-[20px] sm:flex-row sm:items-center sm:gap-0'>
              <h3 className='text-[20px] font-extrabold text-[#FF0028] sm:text-[22px] lg:text-[24px]'>
                Report any adverse drug reaction here
              </h3>
              <button className='w-fit rounded-[50px] bg-[#FF0028]  pb-[15px]  pl-[50px]  pr-[50px]  pt-[15px] text-[13px] text-[#FFFFFF]  sm:pb-[10px] sm:pl-[30px] sm:pr-[30px] sm:pt-[10px] sm:text-[14px]'>
                Report Now
              </button>
            </div>
          </div>
          <NewsLetterCard />
          <Footer />
        </main>
      </div>
      <style jsx>{`
        @media (min-width: 1280px) {
          .custom-width {
            width: calc(100% - 3rem);
          }
        }
      `}</style>
    </>
  );
}
