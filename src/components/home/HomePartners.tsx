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
  return (
    <div className='grid justify-center lg:pb-10 lg:pt-[55px]'>
      <Section className='bg-white'>
        <div className='flex flex-col items-center gap-3 lg:flex-row lg:justify-between'>
          <p className='max-w-[211px] text-center text-header-100 lg:text-start'>
            We are partners with over 30+ Health Providers
          </p>
          <div className='mx-auto grid grid-flow-dense grid-cols-2 gap-[39.31px] md:grid-cols-4 lg:grid-flow-col'>
            {partners.map((partner, index) => (
              <div key={index} className='flex items-center'>
                <Image
                  width={120}
                  height={40}
                  radius='none'
                  className='object-contain'
                  src={partner.image}
                  alt={partner.name}
                />
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
};