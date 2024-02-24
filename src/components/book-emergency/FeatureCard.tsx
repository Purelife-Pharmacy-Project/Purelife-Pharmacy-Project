import { Button, Card, CardBody, Image, Link } from '@nextui-org/react';
import { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { Section } from '../home/Section';

export type FeatureCard = {
  title: string;
  description: string;
  icon: string;
  ctaText: string;
  ctaLink: string;
  direction: string;
};

type FeatureCardProps = { data: FeatureCard };

export const FeatureCard: FC<FeatureCardProps> = ({ data }) => {
  return (
    <div className='xl:grid xl:justify-center'>
      <Section>
        <Card shadow='none' radius='lg'>
          <div
            className={twMerge(
              'flex items-center justify-center gap-4 md:justify-between md:px-28',
              data?.direction === 'left'
                ? 'flex-col-reverse md:flex-row'
                : 'flex-col-reverse md:flex-row-reverse'
            )}
          >
            <CardBody className='py-6'>
              <div
                className={twMerge(
                  'flex flex-col gap-5',
                  data?.direction === 'left' ? 'items-start' : 'items-end'
                )}
              >
                <div className='flex flex-col justify-start gap-5'>
                  <h1 className='max-w-4/5 text-center text-2xl font-bold text-header-100 lg:text-start lg:text-4xl'>
                    {data?.title}
                  </h1>
                  <p className='text-center font-light text-content lg:max-w-[353px] lg:text-start lg:text-lg'>
                    {data?.description}
                  </p>
                  <Button
                    as={Link}
                    href={data?.ctaLink}
                    radius='full'
                    color='primary'
                    className='mx-auto w-max px-12 py-6 md:mx-0'
                  >
                    {data?.ctaText}
                  </Button>
                </div>
              </div>
            </CardBody>
            <div
              className={twMerge(
                'flex h-full w-full lg:flex',
                data?.direction === 'left'
                  ? 'justify-center md:justify-end'
                  : 'justify-center md:justify-start'
              )}
            >
              <Image
                width={400}
                height={600}
                src={data?.icon}
                className='object-cover '
                alt='image'
              />
            </div>
          </div>
        </Card>
      </Section>
    </div>
  );
};
