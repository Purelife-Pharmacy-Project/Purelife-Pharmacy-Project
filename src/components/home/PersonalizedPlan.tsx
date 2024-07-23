'use client';

import React from 'react';
import { Section } from '@/components/home/Section';
import { Button, Image } from '@nextui-org/react';
import JoinWaitlistModal from '@/components/waitlist/JoinWaitlistModal';
import { useHash } from '@/hooks/useHash';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';

type Prop = {};

const plans = [
  {
    title: 'Subscribe to our fitness plan for better health.',
    image: '/images/man-carrying-dumbbells.png',
    ctaLink: '#join-waitlist',
  },
  {
    title: 'Get a personalized meal plan just for you',
    image: '/images/woman-eating-salad.png',
    ctaLink: '#join-waitlist',
  },
  {
    title: 'Get health insurance and enjoy health discounts.',
    image: '/images/doctor-consultant.png',
    ctaLink: '#join-waitlist',
  },
];

const PersonalizedPlan: React.FC<Prop> = () => {
  const hash = useHash();
  const { push } = useRouter();
  const path = usePathname();

  return (
    <>
      <Section className='overflow-hidden'>
        <h4 className='text-lg font-semibold text-black lg:text-2xl'>
          Get a personalized wellness plan.
        </h4>
        <div className='mt-12 flex w-full snap-x scroll-pb-1.5 flex-nowrap gap-3 gap-y-5 overflow-x-auto lg:gap-x-7 xl:max-w-full xl:gap-x-9'>
          {plans.map((plan) => (
            <div
              key={plan.title}
              className='flex snap-center flex-col gap-7 rounded-lg bg-[#F7F7F7]'
            >
              <div className='mx-11 mt-7 w-[238px] lg:me-14 lg:ms-7 lg:mt-8 lg:w-[281px]'>
                <p className='mb-4 text-xl font-semibold text-header-100 lg:text-[22px]'>
                  {plan.title}
                </p>
                <Button
                  as={Link}
                  href={plan.ctaLink}
                  color='primary'
                  radius='full'
                  className='text-xs font-medium text-white'
                >
                  Join Our Waiting List
                </Button>
              </div>
              <Image
                src={plan.image}
                alt={plan.title}
                radius='full'
                width={217}
                height={217}
                className='h-[185px] w-[185px] lg:h-[217px] lg:w-[217px]'
                classNames={{ wrapper: 'ml-auto mr-1 mb-2 lg:mb-4 lg:me-5' }}
              />
            </div>
          ))}
        </div>
      </Section>
      <JoinWaitlistModal
        isOpen={hash === '#join-waitlist'}
        openChange={() => push(path, { scroll: false })}
      />
    </>
  );
};

export default PersonalizedPlan;
