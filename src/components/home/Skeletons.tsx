import { Skeleton } from '@nextui-org/react';
import React from 'react';

export const ProductLoadingSkeleton = () => (
  <div className='grid grid-flow-row grid-cols-2 gap-5 lg:grid-cols-4'>
    {Array(5)
      .fill(0)
      .map((_, index) => (
        <div key={index} className='flex flex-col gap-5'>
          <Skeleton className='h-40 w-full rounded-md bg-gray-100 lg:h-56' />
          <div className='flex justify-between'>
            <Skeleton className='h-2 w-24 rounded-md bg-gray-100'></Skeleton>
            <Skeleton className='h-2 w-16 rounded-md bg-gray-100'></Skeleton>
          </div>
          <Skeleton className='h-8 w-full rounded-md bg-gray-100' />
        </div>
      ))}
  </div>
);

export const TestLoadingSkeleton = () => (
  <div className='grid grid-flow-row grid-cols-2 gap-5 lg:grid-cols-4'>
    {Array(5)
      .fill(0)
      .map((_, index) => (
        <div key={index} className='flex flex-col gap-5'>
          <Skeleton className='h-16 w-full rounded-md bg-gray-100' />
          <Skeleton className='h-24 w-full rounded-md bg-gray-100' />
          <Skeleton className='h-8 w-full rounded-md bg-gray-100' />
        </div>
      ))}
  </div>
);
