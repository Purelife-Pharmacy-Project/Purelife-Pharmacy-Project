import { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { Section } from '../home/Section';
import clsx from 'clsx';

type HowItWorksProps = {
  variant?: 'primary' | 'success';
  data: {
    title: string;
    description: string;
    icon: JSX.Element;
  }[];
  className?: string;
};

export const HowItWorks: FC<HowItWorksProps> = ({
  data,
  className,
  variant,
}) => {
  return (
    <div
      className={clsx(
        'lg:grid lg:justify-center lg:pb-10 lg:pt-[55px] bg-primaryLight',
        className
      )}
    >
      <Section className='bg-primaryLight py-10'>
        <div className='grid gap-10'>
          <div className='grid gap-10 md:grid-cols-3 grid-cols-1'>
            {data.map((answer, index) => {
              return (
                <div key={index} className='flex flex-col items-center w-full text-center'>
                  <div
                    className={twMerge(
                      'grid h-[50px] w-[50px] place-content-center items-center rounded-full ' )}
                  >
                    {answer.icon}
                  </div>
                  <div className='flex flex-col gap-1'>
                    <h3 className='md:h-[70px] text-[#1E272F] font-bold text-[22px]'>{answer.title}</h3>
                    <p className='md:h-[120px] lg:h-[100px] mx-auto text-center w-[90%] sm:w-full text-balance sm:text-left font-light text-black'>
                      {answer.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Section>
    </div>
  );
};
