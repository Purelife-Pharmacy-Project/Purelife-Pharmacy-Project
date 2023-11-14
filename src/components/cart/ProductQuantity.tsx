import { Button } from '@nextui-org/react';

export const ProductQuantity = () => {
  return (
    <div className='flex w-[120px] items-center justify-center gap-2 rounded-full bg-primaryLight'>
      <Button
        isIconOnly
        variant='flat'
        className='w-full rounded-l-full bg-primaryLight text-2xl'
      >
        +
      </Button>
      <p className='text-xl'>1</p>
      <Button
        isIconOnly
        variant='flat'
        className='w-full rounded-r-full bg-primaryLight text-2xl'
      >
        -
      </Button>
    </div>
  );
};
