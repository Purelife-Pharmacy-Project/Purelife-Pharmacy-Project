import { FC } from 'react';
import { Section } from '@/components/home/Section';
import { Pagination } from '@nextui-org/react';
import { VaccinationProduct } from '@/components/get-vaccination/VaccinationProduct';

type VaccinationProductsProps = {};

export const VaccinationProducts: FC<VaccinationProductsProps> = () => {
  return (
    <div className='min-h-fit w-full bg-gray-100'>
      <div className='grid justify-center'>
        <Section className='border-t-2 border-primary bg-transparent py-20'>
          <div className='grid grid-flow-row grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3'>
            {Array.from({ length: 5 })
              .fill(0)
              .map((_, index) => (
                <VaccinationProduct key={index} />
              ))}
          </div>
          <div className='mt-8 flex justify-end'>
            <Pagination
              color='primary'
              className='text-white'
              total={10}
              initialPage={1}
            />
          </div>
        </Section>
      </div>
    </div>
  );
};
