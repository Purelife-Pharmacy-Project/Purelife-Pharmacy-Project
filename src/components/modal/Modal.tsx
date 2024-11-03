import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { IconRating } from '../icons/IconRating';
import { IconVideo } from '../icons/IconVideo';
import { IconX } from '../icons/IconX';
import { useClickOutside } from '@/helpers/utils';
import { useAuth } from '@/helpers/useContext/authContext';
import { useRouter } from 'next/navigation';

interface ModalProps {
  date: Date;
  doctor: any;
  availableTimes: string[];
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({
  date,
  availableTimes,
  onClose,
  doctor,
}) => {
  const router = useRouter();
  const [selectedHour, setSelectedHour] = useState('');
  const modalRef = useRef<HTMLDivElement | null>(null);
  const btnRef = useRef<HTMLDivElement | null>(null);
  useClickOutside(modalRef, btnRef, onClose);
  const hours = Array.from({ length: 24 }, (_, i) => `${i}:00`);
  const convertTo12HourFormat = (hour: string): string => {
    const [hourStr, minutes] = hour.split(':');
    let hours = parseInt(hourStr, 10);
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    return `${hours}:${minutes} ${ampm}`;
  };
  const [submittedDay, setSubmittedDay] = useState('');
  const { isAuthenticated } = useAuth();

  const handleTimeSelect = (hour: string) => {
    setSelectedHour(hour);
    localStorage.setItem('redirectPath', '/telehealth/find-a-doctor/availability-calendar');
    if (isAuthenticated) {
      router.push(`/telehealth/find-a-doctor/review-and-book`)
    }
    else {
      router.push(`/sign-in`);
    }
    setSubmittedDay(`Submitted appointment for ${doctor.name}: ${date.toDateString()} at ${convertTo12HourFormat(hour)}`);
    console.log(`Submitted appointment for ${doctor.name}: ${date.toDateString()} at ${convertTo12HourFormat(hour)}`);
  };
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'>
      <div ref={modalRef} className='w-full max-w-[50%] rounded-lg bg-white p-6'>
        <h2 className='mb-4 text-2xl font-bold flex justify-between items-center'>
          Book an appointment for {date.toDateString()}
          <div className='cursor-pointer' onClick={onClose}><IconX size={25}/></div>
          
        </h2>
        <div className='grid grid-cols-[1fr_3fr] gap-2 p-3 border-b pb-4 mb-4'>
          <div ref={btnRef} className='flex h-fit w-fit rounded-full bg-primaryLight'>
            <Image
              src={doctor.image}
              alt='doctor image'
              className='rounded-full'
              width={100}
              height={100}
            />
          </div>
          <div className='text-sm font-medium text-[#5A5A5A]'>
            <h3 className='text-2xl font-semibold text-[#1E272F]'>
              {doctor.name}
            </h3>
            <p className='text-sm text-[#5A5A5A]'>{doctor.title}</p>
            <p className='flex items-center gap-1 text-sm text-[#5A5A5A]'>
              <IconRating color='#FDC04B' size={11} className='-mt-1'/> 4.5
            </p>
            <div className='flex items-center gap-2'>
              <IconVideo /> <span onClick={()=>{console.log()}}>Video Visit</span>{' '}
            </div>
          </div>
        </div>
        <div className='mb-4'>
          <h3 className='text-lg font-semibold'>Available Time</h3>
          <p className="text-[#5A5A5A] text-sm">Select a time to complete your booking</p>
        </div>
        <div className='grid grid-cols-6 gap-4'>
          {hours.map((hour) => (
            <button
              disabled={!availableTimes.includes(hour)}
              key={hour}
              onClick={() => {
                handleTimeSelect(hour);
              }}
              className={`cursor-pointer rounded-lg p-2 text-center font-bold ${selectedHour === hour && 'text-[#38CB61] border border-[#38CB61] bg-[#38CB611A]'} ${
                availableTimes.includes(hour)
                  ? 'bg-white border rounded-lg'
                  : 'bg-[#EFEFEF] text-[#5A5A5A]'
              }`}
            >
              {convertTo12HourFormat(hour)} 
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Modal;
