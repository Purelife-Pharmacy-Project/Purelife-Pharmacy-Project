import React from 'react';
import { Section } from './Section';
import { BentArrowDown } from '@/library/illustrations/BentArrowDown';
import { BentArrowUp } from '@/library/illustrations/BentArrowUp';

export type TransformationData = {
  stat: string;
  description: string;
};

export const HomeTransformation = ({
  data,
}: {
  data: TransformationData[];
}) => {
  return (
    <div className='grid justify-center lg:pb-10 lg:pt-[55px]'>
      <Section className='bg-white'>
        <div className='grid justify-center gap-10'>
          <h1 className='max-w-none text-center text-3xl font-bold text-header-100 md:max-w-lg lg:text-4xl xl:max-w-3xl xl:text-start'>
            Join 100,000+ who have transformed their lives with Purelife
            Pharmacy.
          </h1>
          <div className='grid grid-flow-row grid-cols-1 gap-10 md:grid-cols-2 lg:grid-flow-col lg:grid-cols-5'>
            {data.map((item, index) => (
              <React.Fragment key={index}>
                <div
                  key={index}
                  className='mx-auto grid h-[224px] w-[224px] min-w-max place-content-center gap-2 rounded-full bg-gray-100'
                >
                  <p className='text-center text-6xl font-bold text-primary'>
                    {item.stat}
                  </p>
                  <p className='max-w-[210px] px-6 text-center text-sm font-medium text-content'>
                    {item.description}
                  </p>
                </div>
                {index === 0 && index !== data.length ? (
                  <div className='hidden place-content-center lg:grid'>
                    <BentArrowUp />
                  </div>
                ) : null}
                {index === 1 && index !== data.length ? (
                  <div className='hidden place-content-center lg:grid'>
                    <BentArrowDown />
                  </div>
                ) : null}
              </React.Fragment>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
};
