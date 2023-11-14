import { IconCart } from '@/library/icons/IconCart';
import { IconShare } from '@/library/icons/IconShare';
import { Button, Card, CardBody, CardFooter, Image } from '@nextui-org/react';

export const ProductCard = ({
  imageUrl,
  title,
  price,
}: {
  imageUrl: string;
  title: string;
  price: number;
}) => {
  return (
    <Card shadow='none' className='w-full' radius='lg'>
      <CardBody className='relative overflow-visible px-0 py-2 md:px-3'>
        <Button
          isIconOnly
          className='absolute right-5 top-5 z-20 rounded-full bg-primary/40 p-0 shadow-md'
        >
          <IconCart color='white' />
        </Button>
        <div>
          <Image
            alt='Card background'
            className='rounded-xl object-cover'
            src={imageUrl}
          />
        </div>
      </CardBody>
      <CardFooter className='grid w-full gap-3 px-0'>
        <div className='flex justify-between'>
          <p className='text-lg font-semibold text-header-100'>{title}</p>
          <p className='font-medium text-header-100'>₦{price}</p>
        </div>
        <div className='flex justify-between'>
          <Button
            className='w-max border-header-100 text-header-100'
            variant='bordered'
          >
            Buy
          </Button>
          <Button variant='light' size='sm' className='w-max p-0'>
            <IconShare size={21} />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};
