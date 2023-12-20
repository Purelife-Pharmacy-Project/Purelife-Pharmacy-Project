import { Skeleton } from '@nextui-org/react';

export const ManufacturersSkeleton = () => {
  return (
    <div className='grid grid-flow-col grid-cols-[1fr_8fr] items-center'>
      <Skeleton className='h-5 w-5 rounded-full' />
      <Skeleton className='h-4 w-2/5 rounded-lg bg-primary/5' />
    </div>
  );
};
