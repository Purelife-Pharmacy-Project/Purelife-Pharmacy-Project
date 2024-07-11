import React from 'react';
import { Section } from '@/components/home/Section';
import { Button, Card, CardBody, Image } from '@nextui-org/react';

type Prop = {};

const data = [
  {
    title: 'Shop our top tests now and enjoy a 20% discount!',
    image: '/images/holding-blood-tube.png',
    cta: 'Shop all test',
    ctaLink: '',
  },
  {
    title: 'Explore popular vaccines and get 20% off your order!',
    image: '/images/getting-injection.png',
    cta: 'Shop all vaccines',
    ctaLink: '',
  },
  {
    title: 'Book an instant consultation with a doctor',
    image: '/images/doctor-consulting.png',
    cta: 'Book Session',
    ctaLink: '',
  },
  {
    title: 'For healthier skin and beauty, speak to our cosmetologist.',
    image: '/images/skin-care.png',
    cta: 'Book Session',
    ctaLink: '',
  },
  {
    title: 'Subscribe for a drug refill for your prescriptions',
    image: '/images/doctor-prescribing.png',
    cta: 'Subscribe Now',
    ctaLink: '',
  },
  {
    title: 'Want to improve your health? Talk to our pharmacist.',
    image: '/images/smiling-nurse.png',
    cta: 'Book Session',
    ctaLink: '',
  },
];

const HealthOfferings: React.FC<Prop> = () => {
  return (
    <Section>
      <h5 className='mb-6 text-lg font-semibold capitalize lg:text-2xl'>
        See our Health offerings
      </h5>
      <div className='grid grid-cols-1 gap-x-3.5 gap-y-6 md:grid-cols-2'>
        {data.map((offering) => (
          <Card key={offering.title} className='border border-[#EFEFEF]'>
            <CardBody className='flex flex-row gap-5 px-8 py-5'>
              <div className='my-auto flex flex-col'>
                <p className='font-medium lg:text-lg xl:text-2xl'>
                  Shop our top tests now and enjoy a 20% discount!
                </p>
                <Button
                  className='w-[118px] bg-primaryLight text-xs font-medium text-primary lg:text-sm'
                  radius='sm'
                >
                  Shop Now
                </Button>
              </div>
              <Image
                src={offering.image}
                alt=''
                width={200}
                height={200}
                className='h-[106px] min-w-[106px] shrink-0 lg:h-[160px] lg:min-w-[160px]'
              />
            </CardBody>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default HealthOfferings;
