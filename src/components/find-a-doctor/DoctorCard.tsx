import { Button, Chip, Image, Link } from '@nextui-org/react';

export const DoctorCard = () => {
  return (
    <div className='p-5'>
      <div className='flex-col items-center gap-4 sm:flex sm:flex-row lg:gap-4'>
        <div className='h-60 w-60 rounded-lg'>
          <Image
            src='/images/image-fallback.png'
            alt='doctor image'
            width={240}
            height={240}
          />
        </div>
        <div className='flex flex-col gap-3'>
          <div className='grid gap-1'>
            <h3 className='text-xl font-bold'>Dr. Francis Odeyemi</h3>
            <p className='text-lg font-light'>General Partitioner</p>
            <Chip className='mt-2 bg-white text-sm font-light'>
              8 Years Experience
            </Chip>
          </div>
          <p className='max-w-[255px] font-light text-content'>
            Search for tests and packages and seamlessly book a home sample
            collection.
          </p>

          <Button
            color='primary'
            as={Link}
            href='/telehealth/find-a-doctor/1'
            size='md'
            radius='full'
            className='w-max px-8'
          >
            Consult now
          </Button>
        </div>
      </div>
    </div>
  );
};
