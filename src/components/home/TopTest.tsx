import React from 'react';
import { Section } from '@/components/home/Section';
import { Button, Card, CardBody, Image } from '@nextui-org/react';
import clsx from 'clsx';
import NextLink from 'next/link';

type Prop = {
  title: string;
  data: Array<{
    title: string;
    tag?: string;
    image: string;
    cta: string;
    ctaLink: string;
  }>;
};

const TopTest: React.FC<Prop> = ({ title, data }) => {
  return (
    <Section className='px-0'>
      <h3 className='mb-5 pl-4 md:pl-0 text-xl md:text-3xl text-[#1E272F]'>{title}</h3>
      <div className='grid grid-cols-[1fr] gap-x-6 gap-y-6 md:grid-cols-[0.8fr_1fr] md:grid-rows-2 mt-10 mb-[50px]'>
        {data.map((offering, index) => (
          <Card
            key={offering.title}
            className={`bg-[#F9F6EF] rounded-none shadow-none ${
              index === 0 ? 'md:row-span-2' : 'md:row-span-1'
            }`}
          >
            <CardBody
              className={`flex items-center overflow-y-hidden flex-row-reverse  ${index !== 0 ? 'px-0 py-0' : 'p-0 pt-5 pl-5 pb-5 md:pt-10 md:pl-8 sm:h-[500px] h-[450px] gap-5'}  ${
                index === 1 && 'flex-row'
              }`}
            >
              <div
                className={`flex  ${
                  index === 0 ? 'absolute bottom-0 w-auto -right-10 overflow-hidden' : 'relative'
                } justify-center  `}
              >
                <Image src={offering.image} alt='' className={`${index === 0 ? 'h-[400px] sm:h-[500px] lg:h-auto max-w-none' : 'h-[200px] sm:h-[300px] w-auto max-w-none'}`} />
              </div>

              <div
                className={`my-5 mr-auto flex ${
                  index === 0 && 'h-full md:h-full w-[60%] items-between'
                } ${index === 1 && 'mr-[7%] ml-[3%]'} ${index === 2 && 'ml-[7%]'} flex-col gap-3`}
              >
                {index !== 0 && (
                  <p className='text-sm text-[#000000]'>{offering.tag}</p>
                )}  

                <div className='gap-[30px] flex flex-col'>
                {index === 0 && (
                  <Image
                    src='/app-logo.png'
                    alt='Purelife logo'
                    width={147}
                    height='auto'
                    className='w-[100px] h-auto md:w-auto'
                  />
                  )}    
                <p
                  className={`font-bold text-xl sm:text-2xl lg:text-3xl ${
                    index === 0 && 'text-3xl'
                  }`}
                >
                  {offering.title}
                </p>                  
                </div>
                {(
                  <Button
                    as={offering.ctaLink ? NextLink : 'button'}
                    className={clsx(
                      'w-[80px] md:w-[120px] bg-primary text-xs font-medium text-[#FFFFFF] lg:text-sm',
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

export default TopTest;