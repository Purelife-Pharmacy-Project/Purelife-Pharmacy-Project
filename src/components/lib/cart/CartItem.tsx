import { IconX } from '@/components/icons/IconX';
import { Button, Card, CardBody, Image } from '@nextui-org/react';
import { ProductQuantity } from './ProductQuantity';

export const CartItem = () => {
  return (
    <Card shadow='none' className='w-full border border-gray-200'>
      <CardBody>
        <div className='grid grid-flow-col items-center'>
          <Image
            width={79}
            height={75}
            radius='md'
            src='/images/dummy-imagee.png'
            alt='product image'
          />

          <p>Chlamydia IgM Ab (Quantitative)</p>
          <p>₦89,250.00</p>
          <ProductQuantity />
          <Button
            isIconOnly
            variant='flat'
            className='rounded-full bg-transparent'
          >
            <IconX color='primary' />
          </Button>
        </div>
      </CardBody>
    </Card>
  );
};
