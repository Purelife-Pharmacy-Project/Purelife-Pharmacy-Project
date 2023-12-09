import { Button, Card, CardBody, CardFooter, Image } from '@nextui-org/react';
import { FC } from 'react';
import { Section } from '../home/Section';

interface FrequentLabTestsProps {
  title?: string;
  products?: {
    id: string;
    name: string;
    price: number;
    image: string;
  }[];
}

export const FrequentLabTests: FC<FrequentLabTestsProps> = ({
  title,
  products,
}) => {
  return (
    <div className='grid justify-center lg:pb-10 lg:pt-[55px]'>
      <Section className='bg-white'>
        <div className='grid gap-10'>
          <h1 className='text-center text-2xl font-bold text-header-100 lg:text-4xl'>
            {title ? title : 'Featured Products'}
          </h1>

          <div className='grid grid-flow-row grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3'>
            {Array.from({ length: 3 })
              .fill(0)
              .map((_, index) => (
                <Card key={index} shadow='none' className='w-full' radius='lg'>
                  <CardBody className='bg-gray-100'>
                    <Image
                      alt='Card background'
                      className='rounded-xl object-cover'
                      src='/images/dummy-imagee.png'
                    />
                  </CardBody>
                  <CardFooter className='flex w-full justify-between bg-gray-100'>
                    <div>
                      <p className='text-lg font-semibold text-primaryGreenDark'>
                        Amino Pep 200ml
                      </p>
                      <p className='font-medium text-primaryGreenDark'>
                        ₦2,550.00{' '}
                      </p>
                    </div>
                    <Button
                      className='border-primaryGreenDark bg-primaryGreenLight text-primaryGreenDark'
                      variant='bordered'
                    >
                      Add to Cart
                    </Button>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </div>
      </Section>
    </div>
  );
};
