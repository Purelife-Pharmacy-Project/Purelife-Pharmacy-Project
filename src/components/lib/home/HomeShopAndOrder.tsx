import { IconCart } from '@/components/icons/IconCart';
import { IconHandAndHeart } from '@/components/icons/IconHandAndHeart';
import { IconHome } from '@/components/icons/IconHome';
import { Button, Card, CardBody } from '@nextui-org/react';
import { Section } from './Section';

export const HomeShopAndOrder = () => {
  const steps = [
    {
      icon: <IconHome size={48} />,
      title: '​Health Category​',
    },
    {
      icon: <IconHandAndHeart size={48} />,
      title: 'Beauty and Skin Care Category',
    },
    {
      icon: <IconCart size={48} color='success' />,
      title: '​Supermarket Category',
    },
  ];
  return (
    <div className='grid justify-center lg:pb-10 lg:pt-[55px]'>
      <Section className='bg-white'>
        <div className='grid gap-10'>
          <div className='flex flex-col justify-between gap-4 md:flex-row md:gap-0'>
            <div className='grid gap-2'>
              <h1 className='text-start text-2xl font-bold text-primaryGreenDark md:min-w-[476px] lg:text-4xl'>
                Shop and Order
              </h1>
              <p className='text-content lg:max-w-[524px] lg:text-lg'>
                Discover our one-stop shop for your health, supermarket, beauty
                and skin essentials, and enjoy hassle-free ordering.
              </p>
            </div>

            <Button
              radius='full'
              size='lg'
              className='border-primaryGreenDark bg-primaryGreenLight px-12 text-primaryGreenDark'
              variant='bordered'
            >
              Shop & Order
            </Button>
          </div>

          <div className='grid grid-flow-row grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3'>
            {steps.map((step, index) => (
              <Card key={index} shadow='none' radius='lg'>
                <CardBody className='grid gap-6 bg-primaryGreenLight p-6'>
                  <div className='ml-auto grid h-[104px] w-[104px] place-content-center rounded-full bg-white'>
                    {step.icon}
                  </div>
                  <div className='grid h-max gap-2'>
                    <p className='max-w-[280px] text-lg font-medium text-primaryGreenDark'>
                      {step.title}
                    </p>
                  </div>
                  <Button
                    variant='bordered'
                    radius='sm'
                    size='lg'
                    className='border-primaryGreenDark py-[18px] uppercase text-primaryGreenDark'
                  >
                    Shop all
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
