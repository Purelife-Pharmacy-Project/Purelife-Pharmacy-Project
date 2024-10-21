'use client';
import CalendarComponent from '@/components/calendar/Calendar';
import { BookConsultationForm } from '@/components/find-a-doctor/BookConsultationForm';
import { Footer } from '@/components/home/Footer';
import { Section } from '@/components/home/Section';
import { IconCalendar } from '@/components/icons/IconCalendar';
import { IconChevronLeft } from '@/components/icons/IconChevronLeft';
import { IconLeftArrow } from '@/components/icons/IconLeftArrow';
import { IconRating } from '@/components/icons/IconRating';
import { IconVideo } from '@/components/icons/IconVideo';
import { Pagination } from '@/components/pagination';
import { allDoctors } from '@/helpers/mocks/doctors';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

export default function Doctor() {
  const router = useRouter();
  // const doctorSlug = usePathname().split('/').pop();

  const doctorData = allDoctors.find((doctor) => doctor.slug === 'salako');

  if (!doctorData) router.push('/find-a-doctor');
  return (
    <>
      <Section className='mt-10'>
        <Link
          className='cursor-pointer'
          href={'/telehealth/find-a-doctor'}>
          <IconLeftArrow />
        </Link>
        <div className='my-10 flex items-center justify-between'>
          <h1 className='text-2xl font-bold  text-header-100 lg:text-3xl'>
            100 In-network Providers
          </h1>
          <div className='flex gap-5'>
            <div className='flex items-center text-[#5A5A5A]'>
              <IconCalendar/>
              <p className=''>Today, September 2024</p>
            </div>
            <div className='flex items-center gap-2'>
              <IconChevronLeft color='[#5A5A5A]'/>
              <div className='rotate-180'>
                <IconChevronLeft color='[#5A5A5A]'/>
              </div>
            </div>
          </div>
        </div>

        <div className='flex flex-col'>
          {allDoctors.map((doctor, index) => (
            <div key={index} className='border-b mb-[30px] md:h-[600px] h-[700px] grid xl:grid-cols-[1fr_1fr] lg:grid-cols-[0.7fr_1fr] md:grid-cols-[0.3fr_1fr] grid-cols-[1fr]'>
              <div className='grid grid-cols-[1fr_5fr] gap-2 p-3 h-fit md:mb-0 mb-[0px]'>
                <div className='flex w-fit h-fit rounded-full bg-primaryLight'>
                  <Image
                    src={doctor.image}
                    alt='doctor image'
                    className='rounded-full'
                    width={100}
                    height={100}
                  />
                </div>
                <div className='text-sm font-medium text-[#5A5A5A] h-fit'>
                  <h3 className='text-2xl font-semibold text-[#1E272F]'>
                    {doctor.name}
                  </h3>
                  <p className='text-sm text-[#5A5A5A]'>{doctor.title}</p>
                  <p className='flex items-center gap-1 text-sm text-[#5A5A5A]'>
                    <IconRating color='#FDC04B' size={11} className='-mt-1'/> 4.5
                  </p>
                  <div className='flex items-center gap-2'>
                    <IconVideo /> <span>Video Visit</span>{' '}
                  </div>
                </div>
              </div>
              <div className='h-[550px] md:h-[250px]'>
                <CalendarComponent doctor={doctor} />
              </div>
            </div>
          ))}
        </div>
        <Pagination currentPage={1} totalPages={6} setCurrentPage={function (currentPage: any): void {
          throw new Error('Function not implemented.');
        } } handleNextPage={function (): void {
          throw new Error('Function not implemented.');
        } } handlePrevPage={function (): void {
          throw new Error('Function not implemented.');
        } }/>
        <Footer />
      </Section>
    </>
  );
}
