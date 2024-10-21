import { IDoctor } from '@/services/consult-doctor/types';
import { Button, Chip, Image, Link } from '@nextui-org/react';
import { FC } from 'react';
import { IconStethoscopeNew } from '../icons/IconStethoscopeNew';
import { IconRating } from '../icons/IconRating';

type DoctorCardProps = {
  doctor: IDoctor;
};
export const DoctorCard: FC<DoctorCardProps> = ({ doctor }) => {
  return (
    <div className='rounded-[20px] border border-[#E7E7E7] p-5'>
      <div className='flex flex-col'>
        <div className='flex gap-4'>
          <div className='flex rounded-full bg-primaryLight'>
            <Image
              src={doctor.image}
              alt='doctor image'
              className='rounded-full'
              width={100}
              height={100}
            />
          </div>
          <div>
            <h3 className='text-xl font-bold'>{doctor.name}</h3>
            <p className='text-base font-light text-[#5A5A5A]'>
              {doctor.title}{' '}
            </p>
            <p className='flex gap-1 text-[10px]'>
              <IconRating color='#FDC04B' size={11} /> 4.5
            </p>
          </div>
        </div>

        <div className='flex flex-col gap-3'>
          <div className='mt-4 flex flex gap-2 bg-white text-sm font-medium text-[#151515]'>
            <IconStethoscopeNew />
            Over {doctor.yearsOfExperience}+ Years Experience
          </div>
          <p className='line-clamp-3 max-h-[70px] overflow-hidden text-ellipsis font-light text-[#5A5A5A] text-content'>
            {doctor.description}
          </p>

          <Button
            color=''
            as={Link}
            href={`/telehealth/find-a-doctor/availability-calendar`}
            size='md'
            radius='full'
            className='mt-4 w-full rounded-[35px] bg-[#1E272F] py-5 text-[#FFFFFF]'
          >
            Consult now
          </Button>
        </div>
      </div>
    </div>
  );
};
