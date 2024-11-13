import { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { Section } from '../home/Section';
import clsx from 'clsx';

type HowItWorksProps = {
  variant?: 'primary' | 'success';
  data: {
    title?: string;
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
        'lg:grid bg-primaryLight pt-5',
        className
      )}
    >
      <Section className='bg-primaryLight py-5'>
        <div className='grid gap-10'>
          <div className='grid gap-10 md:grid-cols-3 grid-cols-1'>
            {data.map((answer, index) => {
              return (
                <div key={index} className=' flex flex-col w-full'>
                  <div
                    className={`${twMerge(
                      'grid w-[50px] h-[50px] place-content-center rounded-full bg-[#D74B42]') } ${index !== 1 && ''}`}
                  >
                    {answer.icon}
                  </div>
                  <div className='flex flex-col gap-1 pt-2'>
                    <h3 className='md:h-[65px] lg:h-[50px] text-[#1E272F] font-bold text-[22px]'>{answer.title}</h3>
                    <p className='md:h-[120px] lg:h-[100px] mx-auto w-[90%] sm:w-full font-light text-black'>
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
