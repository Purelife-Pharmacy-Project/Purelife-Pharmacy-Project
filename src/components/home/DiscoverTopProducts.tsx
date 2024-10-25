import { Button, Link } from '@nextui-org/react';
import Image from 'next/image';
import { Section } from './Section';

interface DiscoverTopProductsProps {}
export const DiscoverTopProducts: React.FC<DiscoverTopProductsProps> = () => {
  return (
    <>
      <Section
        className={`relative rounded-[25px] bg-[#E3DFE5] flex justify-center overflow-hidden`}
      >
        <div className='absolute bottom-0 left-0'>
          <Image
            width={207}
            height={347}
            className='h-[300px] w-auto'
            src={'/images/mens-health-1.png'}
            alt={'quality home image'}
            quality={100}
          />
        </div>
        <div className='flex flex-col gap-3 w-[45%] sm:py-16 items-center text-center'>
          <h2 className='text-4xl font-bold'>Discover top products for better sexual health.
          </h2>
          <p className='font-medium text-[#5A5A5A] text-lg'>Improve your sexual health with expert-endorsed products for enhanced intimacy.</p>
          <Button
            color='primary'
            as={Link}
            target='_blank'
            className={`w-[25%] text-sm text-white`}
            radius='sm'
            size='lg'
            href='/shop?category=sexual-health'
          >
            Shop Now
          </Button>
        </div>
        <div className='absolute bottom-0 right-0'>
          <Image
            width={207}
            height={347}
            className='h-[300px] w-auto'
            src={'/images/mens-health-2.png'}
            alt={'quality home image'}
            quality={100}
          />
        </div>
      </Section>
    </>
  );
};
