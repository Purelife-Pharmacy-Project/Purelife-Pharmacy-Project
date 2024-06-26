import { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { Section } from '../home/Section';
import clsx from 'clsx';

type HowItWorksProps = {
  variant?: 'primary' | 'success';
  data: {
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
        'lg:grid lg:justify-center lg:pb-10 lg:pt-[55px]',
        className
      )}
    >
      <Section className='bg-white'>
        <div className='grid gap-10'>
          <h1
            className={twMerge(
              'text-center text-2xl font-bold lg:text-4xl',
              variant === 'primary'
                ? 'text-header-100'
                : 'text-primaryGreenDark'
            )}
          >
            How it Works
          </h1>

          <div className='grid grid-flow-row grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3'>
            {data.map((answer, index) => {
              return (
                <div key={index} className='grid w-full gap-2'>
                  <div
                    className={twMerge(
                      'mx-auto grid h-[123px] w-[123px] place-content-center items-center rounded-full',
                      variant === 'primary'
                        ? 'bg-primaryLight'
                        : 'bg-primaryGreenLight'
                    )}
                  >
                    {answer.icon}
                  </div>
                  <div className='mx-auto flex max-w-[275px] flex-col gap-1'>
                    <p className='text-balance text-center text-lg font-light text-black'>
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
