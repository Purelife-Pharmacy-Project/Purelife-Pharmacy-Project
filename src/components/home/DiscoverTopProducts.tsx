import { Button, Link } from '@nextui-org/react';
import Image from 'next/image';
import { Section } from './Section';

interface DiscoverTopProductsProps {}
export const DiscoverTopProducts: React.FC<DiscoverTopProductsProps> = () => {
  return (
    <>
      <Section>
        <div
          className={`relative flex justify-center overflow-hidden rounded-[25px] bg-[#E3DFE5]`}
        >
          <div className='absolute bottom-0 left-0'>
            <Image
              width={207}
              height={347}
              className='-mb-[40px] -ml-[30px] h-[200px] w-auto sm:-mb-0 sm:-ml-0 lg:h-[300px]'
              src={'/images/mens-health-1.png'}
              alt={'quality home image'}
              quality={100}
            />
          </div>
          <div className='z-[9] flex w-[60%] flex-col items-center gap-3 pb-10 pt-10 text-center sm:pt-16 lg:w-[45%]'>
            <h2 className='font-bold text-[#1E272F] text-2xl md:text-4xl'>
              Discover top products for better sexual health.
            </h2>
            <p className='text-sm font-medium text-[#5A5A5A] sm:text-base md:text-lg'>
              Improve your sexual health with expert-endorsed products for
              enhanced intimacy.
            </p>
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
            <div className='hidden lg-mx-0 mx-auto mt-4 flex w-fit gap-2'>
              {[1, 2, 3].map((_, index) => (
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
              className='-mb-[40px] -mr-[30px] h-[200px] w-auto sm:-mb-0 sm:-mr-0 lg:h-[300px]'
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
