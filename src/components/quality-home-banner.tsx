import { Button, Link } from '@nextui-org/react';
import { Section } from './home/Section';
import Image from 'next/image';

interface QualityHomeBannerProps {
  backgroundClassName?: string;
  buttonClassName?: string;
}
export const QualityHomeBanner: React.FC<QualityHomeBannerProps> = ({backgroundClassName, buttonClassName}) => {
  return (
    <>
      <div className={`flex justify-center bg-[#1E272F] ${backgroundClassName}`}>
        <Section className={`grid gap-4 bg-[#1E272F] sm:grid-cols-[1fr_1fr] ${backgroundClassName}`}>
          <div className='flex flex-col overflow-hidden sm:py-10 pt-10'>
            <div className='relative flex w-full flex-col justify-between overflow-hidden font-bold text-[#1E272F] md:h-fit md:text-4xl xl:text-5xl'>
              <Image
                width={430} // Keeps the intrinsic width as 430px.
                height={235} // Keeps the intrinsic height as 235px.
                className='h-auto w-[500px] max-w-[85%] sm:max-w-[100%] md:max-w-[400px] lg:max-w-[650px] bg-transparent'
                src={'/images/quality-home-text.png'}
                alt={'quality home image'}
              />
              {/* <div className='absolute left-[3%] top-[10%] flex flex-col gap-1 text-4xl sm:left-[3%] sm:top-[12%] sm:gap-0 sm:text-4xl md:top-[14%] md:gap-2 md:text-5xl lg:top-[12%] lg:gap-4 lg:text-6xl'>
                <span className='max-w-[250px] whitespace-nowrap'>
                  Quality home
                </span>
                <span className='max-w-[250px] whitespace-nowrap'>
                  healthcare you
                </span>
                <span>can trust</span>
              </div> */}
            </div>

            <Button
              as={Link}
              href='https://primaryreporting.who-umc.org/NG'
              target='_blank'
              className={`ml-[2%] mt-6 w-[50%] bg-white text-sm text-[#262629] sm:text-base md:w-[40%] lg:py-8 lg:text-lg ${buttonClassName}`}
              radius='full'
              size='lg'
            >
              Book Session
            </Button>
          </div>
          <div className='relative flex items-end justify-end overflow-hidden pt-[50px] sm:pt-0'>
            <Image
              width={300}
              height={270}
              className=' -mb-[50px] -ml-[15%] h-auto w-[530px] w-[80%] max-w-[400px] sm:-ml-0 md:-mb-[40px] md:max-w-[450px] lg:max-w-[650px]'
              src={'/images/quality-home-bg.png'}
              alt={'quality home image'}
            />
            <Image
              width={400}
              height={470}
              className='absolute -right-14 bottom-0 h-auto w-[650px] max-w-[450px] sm:max-w-[500px] md:max-w-[550px] lg:max-w-[650px]'
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