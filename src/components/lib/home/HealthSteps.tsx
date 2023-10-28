import { Button, Card, CardBody } from '@nextui-org/react';
import { FC } from 'react';
import { Section } from './Section';

interface HealthStepsProps {
  steps: {
    icon: JSX.Element;
    title: string;
    description: string;
    url: string;
  }[];
}

export const HealthSteps: FC<HealthStepsProps> = ({ steps }) => {
  return (
    <div className='grid justify-center lg:pb-10 lg:pt-[55px]'>
      <Section className='bg-white'>
        <div className='grid gap-10'>
          <div className='flex flex-col justify-between gap-4 md:flex-row md:gap-0'>
            <div className='grid gap-2'>
              <h1 className='text-start text-xl font-bold text-header-100 lg:text-4xl'>
                Use our Convenient Telehealth Service.
              </h1>
              <p className='text-content lg:max-w-[476px] lg:text-lg'>
                Subscribe to medication refills, book laboratory tests, and
                schedule vaccinations all in one place.
              </p>
            </div>

            <Button
              radius='full'
              size='lg'
              className='border-header-100 bg-primaryLight px-12 text-header-100'
              variant='bordered'
            >
              View All
            </Button>
          </div>

          <div className='grid grid-flow-row grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3'>
            {steps.map((step, index) => (
              <Card key={index} shadow='none' radius='lg'>
                <CardBody className='grid gap-6 bg-primaryLight p-6'>
                  <div className='grid h-[104px] w-[104px] place-content-center rounded-full bg-white'>
                    {step.icon}
                  </div>
                  <div className='grid h-max gap-2'>
                    <p className='text-lg font-medium text-header-100'>
                      {step.title}
                    </p>
                    <p className='text-xs text-content lg:max-w-[246px]'>
                      {step.description}
                    </p>
                  </div>
                  <Button
                    variant='bordered'
                    radius='sm'
                    size='lg'
                    className='border-header-100 py-[18px] uppercase text-header-100'
                  >
                    Learn More
                  </Button>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
};
