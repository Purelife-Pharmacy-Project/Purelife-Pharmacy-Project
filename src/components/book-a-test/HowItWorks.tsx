import { FC } from 'react';
import { Section } from '../home/Section';

interface HowItWorksProps {
  data: {
    description: string;
    icon: JSX.Element;
  }[];
}

export const HowitWorks: FC<HowItWorksProps> = ({ data }) => {
  return (
    <div className='grid justify-center lg:pb-10 lg:pt-[55px]'>
      <Section className='bg-white'>
        <div className='grid gap-10'>
          <h1 className='text-center text-2xl font-bold text-primaryGreenDark lg:text-4xl'>
            How it Works
          </h1>

          <div className='grid grid-flow-row grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3'>
            {data.map((answer, index) => {
              return (
                <div key={index} className='grid w-full gap-2'>
                  <div className='mx-auto grid h-[123px] w-[123px] place-content-center items-center rounded-full bg-primaryGreenLight'>
                    {answer.icon}
                  </div>
                  <div className='mx-auto flex max-w-[330px] flex-col gap-1'>
                    <p className='text-center text-xl text-content'>
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
