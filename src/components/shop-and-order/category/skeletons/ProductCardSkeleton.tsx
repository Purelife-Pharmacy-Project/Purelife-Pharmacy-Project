import { Skeleton } from '@nextui-org/react';

export const ProductCardSkeleton = () => {
  return (
    <div className='grid gap-2'>
      <Skeleton className={'h-60 w-full rounded-xl bg-gray-100'}></Skeleton>
      <div className='flex justify-between gap-4'>
        <div className='grid w-full gap-2'>
          <Skeleton className={'h-2 w-full rounded-xl bg-gray-100'}></Skeleton>
          <Skeleton className={'h-10 w-full rounded-xl bg-gray-100'}></Skeleton>
        </div>
        <div className='grid w-full justify-end gap-2'>
          <Skeleton className={'h-2 w-20 rounded-xl bg-gray-100'}></Skeleton>
          <Skeleton
            className={'h-10 w-10 justify-self-end rounded-full bg-gray-100'}
          ></Skeleton>
        </div>
      </div>
    </div>
  );
};
