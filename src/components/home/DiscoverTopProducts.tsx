import React from 'react';
import { Section } from '@/components/home/Section';
import { Button, Card, CardBody, Image } from '@nextui-org/react';

type Prop = {};

const DiscoverTopProducts: React.FC<Prop> = () => {
  return (
    <Section>
      <Card className='border border-[#BDBDBD]'>
        <CardBody className='flex flex-col p-0 pb-9 md:flex-row-reverse md:px-7 md:py-10 lg:px-14 lg:py-20 xl:px-[67px] '>
          <div className='grid grow grid-cols-3 gap-2 bg-[#FFF7F8] px-3.5 pb-7 pt-9 md:bg-transparent lg:py-0'>
            <span className='mx-auto h-[112px] w-[112px] overflow-hidden rounded-full border border-[#EFEFEF] xl:h-[180px] xl:w-[180px]'>
              <Image
                src='/images/male-pill-bottle.png'
                alt=''
                width={200}
                height={200}
                className=''
              />
            </span>
            <span className='mx-auto h-[112px] w-[112px] overflow-hidden rounded-full border border-[#EFEFEF] xl:h-[180px] xl:w-[180px]'>
              <Image
                src='/images/sex-bottle-1.png'
                alt=''
                width={200}
                height={200}
                className=''
              />
            </span>
            <span className='mx-auto h-[112px] w-[112px] overflow-hidden rounded-full border border-[#EFEFEF] xl:h-[180px] xl:w-[180px]'>
              <Image
                src='/images/sex-bottle-2.png'
                alt=''
                width={200}
                height={200}
                className=''
              />
            </span>
          </div>
          <div className='flex flex-col gap-[18px] px-[18px] md:w-[290px] md:p-0 lg:w-[393px]'>
            <h3 className='text-2xl font-bold'>
              Discover top products for better sexual health.
            </h3>
            <p className='text-sm'>
              Improve your sexual health with expert-endorsed products for
              enhanced intimacy.
            </p>
            <Button
              as='a'
              className='mt-auto w-[150px] bg-primaryLight text-sm font-medium text-primary'
              radius='full'
              href='/shop?category=sexual-health'
            >
              Shop Now
            </Button>
          </div>
        </CardBody>
      </Card>
    </Section>
  );
};

export default DiscoverTopProducts;
