import { Button, Link } from '@nextui-org/react';
import { Section } from './home/Section';
import Image from 'next/image';

interface QualityHomeBannerProps {
  backgroundClassName?: string;
  buttonClassName?: string;
}
export const QualityHomeBanner: React.FC<QualityHomeBannerProps> = ({
  backgroundClassName,
  buttonClassName,
}) => {
  return (
    <>
      <div
        className={`flex justify-center bg-[#1E272F] ${backgroundClassName}`}
      >
        <Section
          className={`grid gap-4 bg-[#1E272F] sm:grid-cols-2 ${backgroundClassName}`}
        >
          <div className='flex flex-col justify-center pt-10 sm:py-14'>
            <div className='relative flex w-[60%] sm:w-full flex-col justify-between text-[#1E272F] md:h-fit '>
              <h1 className='mb-4 flex h-auto max-w-[70%] flex-col xl:gap-3 bg-transparent font-bold text-white sm:max-w-[100%] text-3xl md:text-4xl lg:max-w-[650px] xl:text-5xl'>
                <span className='whitespace-nowrap'>Quality home</span>
                <span className='whitespace-nowrap'>healthcare you can</span>
                <span className='whitespace-nowrap'>trust</span>
              </h1>
              <p className='text-white md:text-base text-xs'>
                We provide homecare services such as Sample pickup for lab
                tests, Home vaccination and Home doctor visitation.
              </p>
            </div>

            <Button
              as={Link}
              target='_blank'
              className={`mt-6 w-[30%] bg-white text-sm text-[#262629] md:text-base md:w-[40%] py-3 lg:py-8 lg:text-lg ${buttonClassName}`}
              radius='full'
              size='lg'
            >
              Book Session
            </Button>
          </div>
          <div className='relative -mt-[130px] md:h-[400px] lg:h-[500px] flex items-end justify-end overflow-hidden pt-[50px] sm:-mt-0 sm:pt-0'>
            <Image
              width={300}
              height={270}
              className=' -mb-[50px] h-auto w-[600px] max-w-[400px] sm:-ml-[10%] md:-mb-[40px] md:mr-[5%] md:max-w-[450px] lg:max-w-[650px]'
              src={'/images/quality-home-bg.png'}
              alt={'quality home image'}
            />
            <Image
              width={400}
              height={470}
              className='absolute -right-12 bottom-0 h-auto w-[800px] max-w-[450px] sm:-right-14 sm:max-w-[580px] md:-right-20 md:max-w-[620px] lg:-right-24 lg:max-w-[780px]'
              src={'/images/quality-home-image.png'}
              alt={'quality home image'}
            />
          </div>
        </Section>
      </div>
      <style>
        {`
        .clip-custom {
          clip-path: polygon(0% 100%, 100% 100%, 100% 0%, 50% 0%);
        }
        `}
      </style>
    </>
  );
};
