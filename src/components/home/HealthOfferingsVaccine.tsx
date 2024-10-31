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

const HealthOfferingsVaccine: React.FC<Prop> = ({ title, data }) => {
  return (
    <Section>
      <div className='grid grid-cols-[1fr] gap-x-6 gap-y-6 md:grid-cols-[0.8fr_1fr] md:grid-rows-2 mt-10 mb-[50px]'>
        {data.map((offering, index) => (
          <Card
            key={offering.title}
            className={`border border-[#EFEFEF] ${
              index === 0 ? 'md:row-span-2' : 'md:row-span-1'
            }`}
          >
            <CardBody
              className={`flex flex-row-reverse gap-5 ${index !== 0 ? 'px-8 py-5' : 'p-0 pt-10 pl-8 md:h-auto h-[500px]'}  ${
                index === 1 && 'flex-row'
              }`}
            >
              <div
                className={`flex ${
                  index === 0 ? 'absolute bottom-0' : 'relative w-[30%]'
                } justify-center  `}
              >
                <Image src={offering.image} alt='' className={`${index === 0 && 'lg:h-[410px] md:h-[350px] h-[400px]'}`} />
              </div>

              <div
                className={`my-auto mr-auto flex ${
                  index === 0 && 'h-full md:h-full justify-between items-between'
                } w-[53%] flex-col gap-3`}
              >
                {index !== 0 && (
                  <p className='text-sm text-[#000000]'>Vaccine Essentials</p>
                )}

                <div className='gap-[30px] flex flex-col'>
                {index === 0 && (
                  <Image
                    src='/app-logo.png'
                    alt='Purelife logo'
                    width={147}
                    height={68.271}
                  />
                  )}    
                <p
                  className={`font-bold text-2xl lg:text-3xl ${
                    index === 0 && 'text-3xl'
                  }`}
                >
                  {offering.title}
                </p>                  
                </div>

                {index === 0 && (
                  <p className='text-sm text-[#000000] lg:mb-10 mb-5'>
                    www.purelifepharmacy.ng
                  </p>
                )}
                {index !== 0 && (
                  <Button
                    as={offering.ctaLink ? NextLink : 'button'}
                    className={clsx(
                      'w-[120px] bg-primary text-xs font-medium text-[#FFFFFF] lg:text-sm',
                      { 'bg-transparent text-default': !offering.ctaLink }
                    )}
                    radius='sm'
                    disabled={!offering.ctaLink}
                    href={offering.ctaLink}
                    variant={offering.ctaLink ? 'solid' : 'bordered'}
                  >
                    {offering.ctaLink ? offering.cta : 'Coming soon'}
                  </Button>
                )}
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default HealthOfferingsVaccine;
