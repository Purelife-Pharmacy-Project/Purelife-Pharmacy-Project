import { Card, CardBody } from '@nextui-org/react';
import { ProductCard } from './ProductCard';

export const ProductsList = () => {
  return (
    <Card shadow='none' className='w-full'>
      <CardBody>
        <div className='grid grid-flow-row grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3'>
          {Array.from({ length: 9 })
            .fill(0)
            .map((_, index) => (
              <ProductCard
                key={index}
                imageUrl='/images/dummy-imagee.png'
                title='Lokmal Qs-Tab'
                price={2000}
              />
            ))}
        </div>
      </CardBody>
    </Card>
  );
};
