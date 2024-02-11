import { Skeleton } from '@nextui-org/react';

export const LabTestsSkeleton = () => {
  return (
    <div className='grid w-full grid-flow-row grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3'>
      {Array(6)
        .fill(0)
        .map((_, index) => (
          <Skeleton
            key={index}
            className={
              'h-[188px] w-full rounded-xl bg-white sm:w-[350px] lg:w-[384px]'
            }
          ></Skeleton>
        ))}
    </div>
  );
};
