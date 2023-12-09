import { Button, Card, CardBody } from '@nextui-org/react';
import { FC } from 'react';

interface ITestProductCardProps {
  product: {
    title: string;
    description: string;
    price: string;
  };
}

export const TestProductCard: FC<ITestProductCardProps> = ({ product }) => {
  return (
    <div className='grid gap-8 lg:gap-12'>
      <Card shadow='none' className={'bg-primaryLight'} radius='lg'>
        <div className='flex items-center justify-between gap-4'>
          <CardBody className='p-6 lg:p-20'>
            <div className='flex flex-col gap-4'>
              <h1 className='text-center text-4xl font-bold text-header-100 lg:text-start'>
                {product.title}
              </h1>
              <p className='text-center text-content lg:max-w-[353px] lg:text-start lg:text-lg'>
                {product.description}
              </p>
              <Button color='success' radius='full' className='w-full'>
                Add to Cart
              </Button>
            </div>
          </CardBody>
        </div>
      </Card>
    </div>
  );
};
