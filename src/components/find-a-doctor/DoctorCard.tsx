import { Button, Chip, Image, Link } from '@nextui-org/react';

export const DoctorCard = () => {
  return (
    <div className='p-5'>
      <div className='grid grid-cols-[2fr_8fr] items-center gap-4'>
        <div className='!h-60 !w-60 overflow-hidden rounded-full bg-primary'>
          <Image
            src='/images/doctors/doctor-ike.png'
            alt='doctor image'
            width={240}
            height={240}
          />
        </div>
        <div className='flex flex-col gap-3'>
          <div className='grid gap-1'>
            <h3 className='text-xl font-bold'>Dr. Ike Emmanuel Chinedum</h3>
            <p className='text-lg font-light'>General Partitioner </p>
            <Chip className='mt-2 bg-white text-sm font-light'>
              Over 5Year Experience
            </Chip>
          </div>
          <p className='max-w-4/5 font-light text-content'>
            Dr. Ike Emmanuel Chinedum is a skilled Medical Doctor with degrees
            in MBBS and Physiology from Bingham University. He&apos;s recognized
            by the General Medical Council (GMC) in the UK.
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
