import { IDoctor } from '@/services/consult-doctor/types';
import { Button, Chip, Image, Link } from '@nextui-org/react';
import { FC } from 'react';

type DoctorCardProps = {
  doctor: IDoctor;
};
export const DoctorCard: FC<DoctorCardProps> = ({ doctor }) => {
  return (
    <div className='p-5'>
      <div className='grid items-center gap-4 lg:grid-cols-[2fr_8fr]'>
        <div className='flex !h-60 !w-60 items-end overflow-hidden rounded-full bg-primary'>
          <Image
            src={doctor.image}
            alt='doctor image'
            className='object-cover'
            width={240}
            height={240}
          />
        </div>
        <div className='flex flex-col gap-3'>
          <div className='grid gap-1'>
            <h3 className='text-xl font-bold'>{doctor.name}</h3>
            <p className='text-lg font-light'>{doctor.title} </p>
            <Chip className='mt-2 bg-white text-sm font-light'>
              {doctor.yearsOfExperience}+ Years Experience
            </Chip>
          </div>
          <p className='max-w-4/5 font-light text-content'>
            {doctor.description}
          </p>

          <Button
            color='primary'
            as={Link}
            href={`/telehealth/find-a-doctor/${doctor.slug}`}
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
