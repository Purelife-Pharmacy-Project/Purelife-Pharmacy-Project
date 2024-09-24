import { Image } from '@nextui-org/react';
import { Section } from './Section';

export const HomePartners = () => {
  const partners = [
    {
      name: 'Leadway health',
      image: '/images/partners/leadway-health.png',
    },
    {
      name: 'Beacon health',
      image: '/images/partners/beacon-health.png',
    },
    {
      name: 'drugStoc',
      image: '/images/partners/drugStoc.png',
    },
    {
      name: 'mPharma',
      image: '/images/partners/mPharma.png',
    },
    {
      name: 'Reddington hospital',
      image: '/images/partners/reddington-hospital.png',
    },
  ];
  const repeatedPartners = Array(5).fill(partners).flat();
  return (
    <div className='lg:-mt-8 lg:py-4 xl:-mt-12 xl:grid xl:justify-center'>
      <Section className='bg-white'>
        <div className='flex flex-col items-center gap-4 lg:flex-row lg:justify-between lg:gap-[]'>
          <p className='max-w-[211px] text-center font-medium text-header-100 lg:text-start'>
            We are partners with over 30+ Health Providers
          </p>
          <div className='max-w-[90vw] sm:max-w-[90vw] md:max-w-[90vw] lg:max-w-[700px] overflow-hidden'>
            <div
            className='swipe-animation flex items-center gap-10'
            style={{'--speed': '5000ms'} as React.CSSProperties}
          >
            {repeatedPartners.map((partner, index) => (
              <div key={index} className='flex flex-shrink-0 items-center justify-center p-2'>
                <Image
                  width={120}
                  className='h-auto w-full object-cover'
                  src={partner.image}
                  alt={partner.name}
                />
              </div>
            ))}
          </div>
          </div>
          
        </div>
      </Section>
      <style>
        {`
          .swipe-animation {
            display: flex;
            animation: swipe var(--speed) linear infinite;
          }

          @keyframes swipe {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-125%);
            }
          }
        `}
      </style>
    </div>
  );
};
