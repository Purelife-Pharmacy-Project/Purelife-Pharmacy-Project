'use client';
import { BookConsultationForm } from '@/components/find-a-doctor/BookConsultationForm';
import { Footer } from '@/components/home/Footer';
import { Section } from '@/components/home/Section';
import { IconVideo } from '@/components/icons/IconVideo';
import { allDoctors } from '@/helpers/mocks/doctors';
import { Button } from '@nextui-org/react';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

export default function ReviewConsultationBooking() {
  const router = useRouter();
  // const doctorSlug = usePathname().split('/').pop();

  const doctorData = allDoctors.find((doctor) => doctor.slug === 'salako');

  if (!doctorData) router.push('/find-a-doctor');

  return (
    <>
      <main className='flex flex-col items-center mt-20'>
        <Section className='max-w-[95vw] md:w-[40%] md:max-w-[40%]'>
        <h1 className=' text-2xl font-bold  text-header-100 lg:text-3xl'>
          Review and book
        </h1>
        <div className='rounded-[12px]  border grid grid-cols-[1fr_3fr] gap-2 p-3 mt-5 mb-4'>
          <div className='w-fit flex rounded-full bg-primaryLight'>
            <Image
              src={doctorData.image}
              alt='doctor image'
              className='rounded-full'
              width={100}
              height={100}
            />
          </div>
          <div className='font-medium text-[#5A5A5A] text-sm'>
            <h3 className='text-[#1E272F] text-2xl font-semibold'>{doctorData?.name}</h3>
            <p>{doctorData?.title}</p>
            <p>Fri, Nov 15 at 8:00 AM WAT</p>
            <div className='flex items-center gap-2'><IconVideo/> <span>Video Visit</span> </div>
          </div>
        </div>
        <div className=' bordder-t border-b py-4'>
          <h3 className='md:text-2xl text-xl font-semibold'>Patient&apos;s Information</h3>
          <p className="md:text-lg text-base font-medium">Full Name</p>
          <p className="md:text-lg text-base mb-2 text-[#5A5A5A] font-medium">Ashley Olamide Ifeayin</p>
          <p className="md:text-lg text-base font-medium">Email Address</p>
          <p className="md:text-lg text-base text-[#5A5A5A] font-medium">ashley.ife@gmail.com</p>
        </div>
        <div className=' border-b py-4'>
          <h3 className='text-xl md:text-2xl font-semibold'>Consultation Fee</h3>
          <p className="text-base md:text-lg font-bold">₦10,000</p>
        </div>
        <Button className='w-full mt-10 rounded-full h-[60px] text-xl' color='primary'>Pay ₦10,000</Button>
        </Section>

        <Footer />
      </main>
    </>
  );
}
