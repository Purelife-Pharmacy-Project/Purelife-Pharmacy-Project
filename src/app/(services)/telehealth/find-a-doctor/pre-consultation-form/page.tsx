'use client';
import { BookConsultationForm } from '@/components/find-a-doctor/BookConsultationForm';
import { Footer } from '@/components/home/Footer';
import { IconVideo } from '@/components/icons/IconVideo';
import { allDoctors } from '@/helpers/mocks/doctors';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

export default function Doctor() {
  const router = useRouter();
  // const doctorSlug = usePathname().split('/').pop();

  const doctorData = allDoctors.find((doctor) => doctor.slug === 'salako');

  if (!doctorData) router.push('/find-a-doctor');

  return (
    <>
      <main className='flex flex-col items-center mt-20'>
        <h1 className='w-[40%] text-2xl font-bold  text-header-100 lg:text-3xl'>
          Pre-Consultation Form
        </h1>
        <div className='rounded-[12px] w-[40%] border grid grid-cols-[1fr_3fr] gap-2 p-3 mt-5 mb-4'>
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

        <BookConsultationForm />

        <Footer />
      </main>
    </>
  );
}
