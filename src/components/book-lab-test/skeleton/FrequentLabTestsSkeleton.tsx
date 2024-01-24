import { Skeleton } from '@nextui-org/react';

export const FrequentLabTestsSkeleton = () => {
  return (
    <div className='grid grid-flow-row grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3'>
      {Array(3)
        .fill(0)
        .map((_, index) => (
          <Skeleton
            key={index}
            className={'h-[300px] w-[384px] rounded-xl bg-gray-100'}
          ></Skeleton>
        ))}
    </div>
  );
};
