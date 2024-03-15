'use client';
import { AppNavbar } from '@/components/Navbar';
import { BookConsultationForm } from '@/components/find-a-doctor/BookConsultationForm';
import { Footer } from '@/components/home/Footer';
import { Section } from '@/components/home/Section';
import { usePathname, useRouter } from 'next/navigation';
import { allDoctors } from '@/helpers/mocks/doctors';
import { DoctorCard } from '@/components/find-a-doctor/DoctorCard';

export default function Doctor() {
  const router = useRouter();
  const doctorSlug = usePathname().split('/').pop();

  const doctorData = allDoctors.find((doctor) => doctor.slug === doctorSlug);

  if (!doctorData) router.push('/find-a-doctor');

  return (
    <>
      <AppNavbar background={'primaryLight'} />

      <div className='grid justify-center gap-6 bg-primaryLight'>
        <Section className='relative flex h-[20vh] w-screen items-center bg-primaryLight lg:h-[40vh]'>
          <DoctorCard doctor={doctorData!} />
        </Section>
      </div>

      <section className='xl:grid xl:justify-center xl:gap-6'>
        <div className='mt-8 grid items-end'>
          <Section className='relative pb-10 lg:grid-flow-col lg:grid-cols-[3fr_4fr]'>
            <BookConsultationForm />
          </Section>
        </div>
      </section>

      <Footer />
    </>
  );
}
