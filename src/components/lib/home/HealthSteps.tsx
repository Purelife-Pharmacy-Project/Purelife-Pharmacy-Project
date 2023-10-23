import { IconFluidMed } from '@/components/icons/IconFluidMed';
import { IconLabs } from '@/components/icons/IconLabs';
import { IconPill } from '@/components/icons/IconPill';
import { Button, Card, CardBody } from '@nextui-org/react';

export const HealthSteps = () => {
  const steps = [
    {
      icon: <IconPill size={48} />,
      title: 'Subscribe to a drug refill',
      description:
        'Get your medications delivered to you at your preferred intervals.',
    },
    {
      icon: <IconLabs />,
      title: 'Book a lab test',
      description:
        'Choose from our over 500 effective test packages, aimed at providing you with the best health care possible.',
    },
    {
      icon: <IconFluidMed />,
      title: 'Get Vaccination',
      description:
        'Choose from our expertly curated vaccines whenever you want.',
    },
  ];
  return (
    <div className='grid gap-10'>
      <div className='flex justify-between'>
        <div className='grid gap-2'>
          <h1 className='text-center text-2xl font-bold text-header-100 md:text-start lg:text-4xl'>
            Use our Convenient Telehealth Service.
          </h1>
          <p className='text-lg text-content lg:max-w-[476px]'>
            Subscribe to medication refills, book laboratory tests, and schedule
            vaccinations all in one place.
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
                <p className='text-xs text-content'>{step.description}</p>
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
  );
};
