import { Button, Link } from '@nextui-org/react';
import Image from 'next/image';
import { Section } from './Section';

interface DiscoverTopProductsProps {}
export const DiscoverTopProducts: React.FC<DiscoverTopProductsProps> = () => {
  return (
    <>
      <Section
        
      >
        <div className={`relative rounded-[25px] bg-[#E3DFE5] flex justify-center overflow-hidden`}>
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
        <div className='flex flex-col gap-3 w-[45%] sm:pb-5 sm:pt-16 items-center text-center'>
          <h2 className='text-2xl md:text-4xl font-bold text-[#1E272F]'>Discover top products for better sexual health.
          </h2>
          <p className='font-medium text-[#5A5A5A] md:text-lg'>Improve your sexual health with expert-endorsed products for enhanced intimacy.</p>
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
            <div className='lg-mx-0 mx-auto mt-4 flex w-fit gap-2'>
          {[1,2,3].map((_, index) => (
            <div
              key={index}
              className={`h-[8px] w-[30px] rounded-full ${
                _ === 1 ? 'bg-[#FF0028]' : 'bg-[#FFFBFB]'
              }`}
            />
          ))}
        </div>
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
        </div>
        
      </Section>
    </>
  );
};
