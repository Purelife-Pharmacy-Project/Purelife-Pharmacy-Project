import React from 'react';
import { Section } from '@/components/home/Section';
import { Button, Card, CardBody, Image } from '@nextui-org/react';
import clsx from 'clsx';
import NextLink from 'next/link';

type Prop = {
  title: string;
  data: Array<{
    title: string;
    image: string;
    cta: string;
    ctaLink: string;
  }>;
};

const HealthOfferings: React.FC<Prop> = ({ title, data }) => {
  return (
    <Section>
      <h5 className='mb-6 text-lg font-semibold capitalize lg:text-2xl'>
        {title}
      </h5>
      <div className='grid grid-cols-1 gap-x-3.5 gap-y-6 md:grid-cols-2'>
        {data.map((offering) => (
          <Card key={offering.title} className='border border-[#EFEFEF]'>
            <CardBody className='flex flex-row gap-5 px-8 py-5'>
              <div className='my-auto flex flex-col gap-3'>
                <p className='font-medium lg:text-lg xl:text-2xl'>
                  {offering.title}
                </p>
                <Button
                  as={offering.ctaLink ? NextLink : 'button'}
                  className={clsx(
                    'w-[150px] bg-primaryLight text-xs font-medium text-primary lg:text-sm',
                    { 'bg-transparent text-default': !offering.ctaLink }
                  )}
                  radius='sm'
                  disabled={!offering.ctaLink}
                  href={offering.ctaLink}
                  variant={offering.ctaLink ? 'solid' : 'bordered'}
                >
                  {offering.ctaLink ? offering.cta : 'Coming soon'}
                </Button>
              </div>
              <Image
                src={offering.image}
                alt=''
                width={200}
                height={200}
                className='h-[106px] min-w-[106px] shrink-0 lg:min-h-[200px] lg:min-w-[200px]'
              />
            </CardBody>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default HealthOfferings;
