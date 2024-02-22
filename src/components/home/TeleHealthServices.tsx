'use client';
import { teleHealthServices } from '@/constants';
import { Button, Card, CardBody, Image, Link } from '@nextui-org/react';
import { Section } from './Section';

export const TeleHealthServices = () => {
  return (
    <div className='lg:grid lg:justify-center lg:pb-10 lg:pt-[55px]'>
      <Section className='bg-white'>
        <div className='grid gap-10'>
          <div className='flex flex-col justify-between gap-4 md:flex-row md:gap-0'>
            <div className='grid gap-2'>
              <h1 className='text-start text-xl font-bold text-header-100 lg:text-4xl'>
                Use our Convenient Telehealth Service.
              </h1>
              <p className='font-light text-content lg:max-w-[476px] lg:text-xl'>
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
            <Card
              shadow='none'
              radius='lg'
              className='h-full w-full flex-grow bg-primaryLight pl-6 md:col-span-1 lg:col-span-2'
            >
              <div className='grid h-full items-center lg:grid-flow-col  lg:grid-cols-2'>
                <CardBody>
                  <div className='flex h-full flex-col justify-center gap-5'>
                    <p className='w-full text-3xl font-extrabold text-header-100 lg:max-w-[384px]'>
                      Are you a healthcare provider interested in partnering
                      with us?
                    </p>
                    <Button
                      as={Link}
                      href='#'
                      radius='full'
                      className='w-max px-10'
                      size='lg'
                      color='primary'
                    >
                      Start Here
                    </Button>
                  </div>
                </CardBody>
                <div className='flex h-full items-end justify-end'>
                  <Image
                    className='h-full w-full object-contain align-bottom'
                    src='/images/healthcare-doctor.png'
                    width={630}
                    height={630}
                    alt='telehealth partner'
                  />
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Section>
    </div>
  );
};
