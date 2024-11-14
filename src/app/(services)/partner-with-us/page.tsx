'use client';
import { HowItWorks } from '@/components/book-lab-test/HowItWorks';
import { Footer } from '@/components/home/Footer';
import { HomeHero } from '@/components/home/HomeHero';
import { NewsLetterCard } from '@/components/home/NewsletterCard';
import { Section } from '@/components/home/Section';
import { IconAddNotification } from '@/components/icons/IconAddNotification';
import { IconBrowse } from '@/components/icons/IconBrowse';
import { IconHealthShield } from '@/components/icons/IconHealthShield';
import { ReportDrugReaction } from '@/components/ReportDrugReaction';
import { WhyJoinUs } from '@/components/why-join-us';
import { inputAuth } from '@/theme';
import {
  Button,
  Card,
  CardBody,
  Image,
  Input,
  Textarea,
} from '@nextui-org/react';
import clsx from 'clsx';

export default function PartnerWithUs() {
  const howItWorksData: {
    title?: string;
    description: string;
    icon: JSX.Element;
  }[] = [
    {
      description: 'Get in Touch: Fill out our forms to schedule a chat.',
      icon: <IconBrowse size={48} color='primary' />,
    },
    {
      description:
        "Tailored Solutions: We'll use your info to customize solutions that fit your needs perfectly.",
      icon: <IconHealthShield size={60} color='primary' />,
    },
    {
      description:
        "Team Up: Let's work together to build the future of healthcare.",
      icon: <IconAddNotification size={60} color='primary' />,
    },
  ];

  return (
    <>
      <main className='grid gap-6'>
        <div className='xl:max-w-1024 mx-auto mt-8 sm:mt-20 w-full bg-background md:px-4 lg:px-0 xl:w-1024'>
          <div className='flex w-full flex-col items-center lg:pt-2'>
            <div className='mx-auto mb-3 rounded-[5px] border border-[#E7E7E7] border-opacity-50 px-2 py-1 text-center text-xs font-medium sm:text-sm'>
              Partner with us
            </div>
            <h2 className='mb-4 w-[85%] sm:w-full text-center text-[34px] font-bold leading-[1.2] text-[#1E272F] md:w-[50%] xl:text-[55px]'>
              Build your telehealth business with us
            </h2>
            <p className='mx-auto mb-6 w-[80%] text-center text-[14px] font-light text-[#5A5A5A] sm:mx-0 sm:mb-5 sm:text-[18px] sm:leading-6 lg:w-[50%] lg:text-[22px]'>
              We provide flexible solutions, support, and tools, and we welcome
              you as a partner to build the future of healthcare together.
            </p>
            <Button
              radius='full'
              color='primary'
              className='mb-[30px] sm:mb-20 h-fit px-7 py-3 sm:py-5 md:py-5 text-sm sm:text-base lg:text-[20px]'
            >
              Apply Here - It’s Free
            </Button>
            <div
              style={{
                backgroundImage: `url('/images/provider-image.jpg')`,
                backgroundPosition: 'center top 40%',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
              }}
              className={`banner-container mx-auto flex h-[286px] w-full flex-col items-start justify-center sm:h-[526px] sm:rounded-[20px]`}
            ></div>
          </div>
        </div>

        <WhyJoinUs />

        <Section className='px-0'>
          <Card shadow='none' className='mx-auto w-[85%] px-0 lg:px-0'>
            <h2 className='mx-auto mb-6 mt-12 md:mt-16 w-fit text-[18px] font-bold lg:text-[22px]'>
              Apply Here
            </h2>
            <CardBody className='grid gap-4 p-0 py-6'>
              <div className='grid w-full grid-cols-1 lg:grid-cols-2 flex-col gap-5 lg:gap-10 md:flex-row'>
                <div>
                  <p className='mb-2 md:mb-4 font-medium text-[#1E272F]'>First Name</p>
                  <Input
                    // label=''
                    size='lg'
                    fullWidth
                    classNames={inputAuth}
                    placeholder=' '
                    // labelPlacement='outside'
                  />
                </div>
                <div>
                  <p className='mb-2 md:mb-4 font-medium text-[#1E272F]'>Last Name</p>
                  <Input
                    // label=''
                    size='lg'
                    fullWidth
                    classNames={inputAuth}
                    placeholder=' '
                    // labelPlacement='outside'
                  />
                </div>
              </div>

              <div className='grid w-full grid-cols-1 lg:grid-cols-2 flex-col gap-5 lg:gap-10 md:flex-row'>
                <div>
                  <p className='mb-2 md:mb-4 font-medium text-[#1E272F]'>
                    What best describes you?
                  </p>
                  <Input
                    // label=''
                    size='lg'
                    fullWidth
                    classNames={inputAuth}
                    placeholder=' '
                    // labelPlacement='outside'
                  />
                </div>
                <div>
                  <p className='mb-2 md:mb-4 font-medium text-[#1E272F]'>Gender</p>
                  <Input
                    // label=''
                    size='lg'
                    fullWidth
                    classNames={inputAuth}
                    placeholder=' '
                    // labelPlacement='outside'
                  />
                </div>
              </div>

              <div className='grid w-full grid-cols-1 lg:grid-cols-2 flex-col gap-5 lg:gap-10 md:flex-row'>
                <div>
                  <p className='mb-2 md:mb-4 font-medium text-[#1E272F]'>
                    Phone number
                  </p>
                  <Input
                    // label=''
                    inputMode='numeric'
                    type='number'
                    size='lg'
                    fullWidth
                    classNames={inputAuth}
                    placeholder=' '
                    // labelPlacement='outside'
                  />
                </div>
                <div>
                  <p className='mb-2 md:mb-4 font-medium text-[#1E272F]'>
                    Email Address
                  </p>
                  <Input
                    // label=''
                    type='email'
                    size='lg'
                    fullWidth
                    classNames={inputAuth}
                    placeholder=' '
                    // labelPlacement='outside'
                  />
                </div>
              </div>

              <div className='grid w-full grid-cols-1 lg:grid-cols-2 flex-col gap-5 lg:gap-10 md:flex-row'>
                <div>
                  <p className='mb-2 md:mb-4 font-medium text-[#1E272F]'>
                    Name of Organization / Company
                  </p>
                  <Input
                    // label=''
                    size='lg'
                    fullWidth
                    classNames={inputAuth}
                    placeholder=' '
                    // labelPlacement='outside'
                  />
                </div>
                <div>
                  <p className='mb-2 md:mb-4 font-medium text-[#1E272F]'>
                    Name of Representative
                  </p>
                  <Input
                    // label=''
                    type='email'
                    size='lg'
                    fullWidth
                    classNames={inputAuth}
                    placeholder=' '
                    // labelPlacement='outside'
                  />
                </div>
              </div>
              <p className='mb-2  md:mb-4 font-medium text-[#1E272F]'>Additional Note</p>
              <Textarea
                fullWidth
                // label=''
                size='lg'
                classNames={{
                  inputWrapper: [
                    'pr-2 pb-30 flex items-start',
                    'bg-white',
                    'shadow-none',
                    'text-content',
                    'border border-gray-300 data-[hover=true]:bg-white',
                    'group-data-[focus=true]:bg-white',
                    'group-data-[active=true]:bg-white',
                  ],
                }}
                placeholder=' '
                // labelPlacement='outside'
              />

              <div className='flex w-full justify-center'>
                <Button
                  radius='full'
                  isDisabled
                  className='mt-[40px] w-full px-16 py-7 text-base sm:text-[18px] lg:w-max'
                  color='primary'
                >
                  Submit
                </Button>
              </div>
            </CardBody>
          </Card>
        </Section>
        <ReportDrugReaction />
        <div className='mb-3'></div>
        <NewsLetterCard />

        <Footer />
      </main>
    </>
  );
}
