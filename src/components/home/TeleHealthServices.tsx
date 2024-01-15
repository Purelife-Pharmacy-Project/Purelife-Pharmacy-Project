'use client';
import { teleHealthServices } from '@/constants';
import { Button, Card, CardBody, Link } from '@nextui-org/react';
import { Section } from './Section';

export const TeleHealthServices = () => {
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
          </div>

          <div className='grid grid-flow-row grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3'>
            {teleHealthServices.map((service, index) => (
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
                    {service.actionText}
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
