import { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { Section } from '../home/Section';

type HowItWorksProps = {
  variant?: 'primary' | 'success';
  data: {
    description: string;
    icon: JSX.Element;
  }[];
};

export const HowItWorks: FC<HowItWorksProps> = ({ data, variant }) => {
  return (
    <div className='grid justify-center lg:pb-10 lg:pt-[55px]'>
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
                  <div className='mx-auto flex max-w-[330px] flex-col gap-1'>
                    <p className='text-center text-xl leading-[18px] text-content'>
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
