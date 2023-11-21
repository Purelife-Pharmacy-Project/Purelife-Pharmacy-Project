import { Card, Chip, Image } from '@nextui-org/react';

export const BlogCard = () => {
  return (
    <Card shadow='none'>
      <Image
        src='/images/dummy-image.jpeg'
        width={360}
        height={333}
        alt='blog image'
      />
      <div className='mt-8 grid gap-2'>
        <Chip className='bg-primaryLight font-medium text-primary'>Rest</Chip>
        <p className='max-w-[280px] text-lg font-medium text-header-100'>
          Why You Need Downtime To Stay Healthy
        </p>
        <p className='text-sm text-content'>Purelife Admin | 1 Day ago </p>
      </div>
    </Card>
  );
};
