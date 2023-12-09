import { Section } from '@/components/home/Section';
import { Button, Card, CardBody, Input } from '@nextui-org/react';
import { FC } from 'react';
import { IconImage } from '@/components/icons/IconImage';
import { AboutDrugCard } from '@/components/drug-refill/AboutDrugCard';

type DrugRefillHeroProps = {};

export const DrugRefillHero: FC<DrugRefillHeroProps> = () => {
  return (
    <div className='grid justify-center bg-primaryLight lg:pb-10 lg:pt-[55px]'>
      <Section className='relative bg-primaryLight'>
        <Card shadow='none'>
          <CardBody className='bg-primaryLight'>
            <div className='grid w-full justify-center p-1 md:p-4 lg:p-20'>
              <h1 className='mx-auto mb-[32px] w-full text-center text-3xl font-bold text-header-100 lg:max-w-[650px] lg:text-5xl'>
                Never Miss Out on Your Medications Again
              </h1>

              <p className='mb-[59px] text-center text-lg font-light text-content'>
                With Pure life, you can get your medications delivered to you at
                your preferred intervals.
              </p>

              <Input
                size='lg'
                radius='full'
                type='Search'
                isRequired
                classNames={{
                  input: ['py-6'],
                  inputWrapper: [
                    'h-max',
                    'pr-2',
                    'bg-white',
                    'shadow-none',
                    'text-black capitalize',
                    'data-[hover=true]:bg-white',
                    'group-data-[focus=true]:bg-white transition-all group-data-[focus=true]:shadow-md',
                    'group-data-[active=true]:bg-white',
                  ],
                }}
                endContent={
                  <Button
                    color='primary'
                    className='px-10 text-white lg:px-12'
                    radius='full'
                    size='lg'
                    startContent={<IconImage size={40} color='white' />}
                  >
                    Search
                  </Button>
                }
                placeholder='Search for medication'
              />
            </div>
          </CardBody>
        </Card>

        <AboutDrugCard />
      </Section>
    </div>
  );
};
