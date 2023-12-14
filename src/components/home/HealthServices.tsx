'use client';
import { Button, Card, CardBody, Link } from '@nextui-org/react';
import { Section } from './Section';
import { useMemo, useState } from 'react';
import { healthServices } from '@/constants';

export const HealthServices = () => {
  const [showFull, setShowFull] = useState(false);
  const _healthServices = useMemo(() => {
    if (showFull) {
      return healthServices;
    }
    return healthServices.slice(0, 3);
  }, [showFull]);
  return (
    <div className='grid justify-center lg:pb-10 lg:pt-[55px]'>
      <Section className='bg-white'>
        <div className='grid gap-10'>
          <div className='flex flex-col justify-between gap-4 md:flex-row md:gap-0'>
            <div className='grid gap-2'>
              <h1 className='text-start text-xl font-bold text-header-100 lg:text-4xl'>
                Use our Convenient Telehealth Service.
              </h1>
              <p className='text-content lg:max-w-[476px] lg:text-xl'>
                Subscribe to medication refills, book laboratory tests, and
                schedule vaccinations all in one place.
              </p>
            </div>

            <Button
              radius='full'
              size='lg'
              className='border-header-100 bg-primaryLight px-12 text-header-100'
              variant='bordered'
              onClick={() => setShowFull(!showFull)}
            >
              {showFull ? 'View Less' : 'View All'}
            </Button>
          </div>

          <div className='grid grid-flow-row grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3'>
            {_healthServices.map((service, index) => (
              <Card key={index} shadow='none' radius='lg'>
                <CardBody className='grid gap-5 bg-primaryLight p-6'>
                  <div className='grid h-[104px] w-[104px] place-content-center rounded-full bg-white'>
                    {service.icon({
                      size: 48,
                      color: 'primary',
                    })}
                  </div>
                  <div className='grid h-max gap-2'>
                    <p className='text-xl font-medium text-header-100'>
                      {service.title}
                    </p>
                    <p className='text-sm font-light leading-5 text-content lg:max-w-[260px]'>
                      {service.description}
                    </p>
                  </div>
                  <Button
                    as={Link}
                    href={service.url}
                    variant='bordered'
                    radius='sm'
                    size='lg'
                    className='border-header-100 bg-white py-[28px] uppercase text-header-100'
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
