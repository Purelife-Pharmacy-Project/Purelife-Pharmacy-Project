import { Button, Card, CardBody, Image } from '@nextui-org/react';
import { FC } from 'react';
import { Section } from '../home/Section';

interface CategoryHeroProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  image?: string;
}

export const CategoryHero: FC<CategoryHeroProps> = ({
  title,
  subtitle,
  ctaText,
  ctaLink,
  image,
}) => {
  return (
    <div className='grid justify-center lg:pb-10 lg:pt-[55px]'>
      <Section className='bg-white'>
        <Card shadow='none' className={'bg-primaryLight'} radius='lg'>
          <div className='flex items-center justify-between gap-4'>
            <CardBody>
              <div className='grid w-full gap-4 p-1 md:p-4 lg:p-20'>
                <div className='flex gap-2 '>
                  <div className='grid gap-4'>
                    <h1 className='text-2xl font-bold text-header-100 lg:text-4xl'>
                      Health Category
                    </h1>
                    <p className='text-center text-base font-light text-content lg:max-w-[353px] lg:text-left lg:text-lg'>
                      Discover a wide range of healthcare and pharmaceutical
                      products at budget-friendly rates.
                    </p>
                    <Button
                      radius='full'
                      className='w-max px-20 py-8'
                      color='primary'
                      size='lg'
                    >
                      Shop all
                    </Button>
                  </div>
                </div>
              </div>
            </CardBody>
            <div className='mr-20 hidden self-end lg:block'>
              <Image
                src='/images/woman.png'
                className='object-cover'
                alt='image'
              />
            </div>
          </div>
        </Card>
      </Section>
    </div>
  );
};
