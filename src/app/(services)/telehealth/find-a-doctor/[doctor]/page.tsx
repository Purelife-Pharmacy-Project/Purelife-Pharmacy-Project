import { AppNavbar } from '@/components/Navbar';
import { BookConsultationForm } from '@/components/find-a-doctor/BookConsultationForm';
import { DoctorCard } from '@/components/find-a-doctor/DoctorCard';
import { Footer } from '@/components/home/Footer';
import { Section } from '@/components/home/Section';

export default function Doctor() {
  return (
    <>
      <AppNavbar background='primaryLight' />

      <div className='grid justify-center gap-6 bg-primaryLight'>
        <Section className='relative flex h-[20vh] w-screen items-center bg-primaryLight lg:h-[40vh]'>
          <DoctorCard />
        </Section>
      </div>

      <section className='xl:grid xl:justify-center xl:gap-6'>
        <div className='mt-8 grid items-end'>
          <Section className='relative pb-10 lg:grid-flow-col lg:grid-cols-[3fr_4fr]'>
            <div className='flex flex-col gap-6'>
              <h1 className='text-4xl font-bold text-header-100 lg:max-w-[500px]'>
                About <br /> Dr. Ike Emmanuel Chinedum
              </h1>
              <div className='text-md grid w-full gap-0.5 whitespace-normal leading-9 text-content lg:max-w-[758px]'>
                <p className='mb-2'>
                  Dr. Ike Emmanuel Chinedum is a skilled Medical Doctor with
                  degrees in MBBS and Physiology from Bingham University.
                  He&apos;s recognized by the General Medical Council (GMC) in
                  the UK.
                </p>

                <p className='mb-2'>
                  Currently, he&apos;s actively involved in emergency care,
                  offering crucial assistance to patients. His expertise extends
                  to primary care and he&apos;s keen on advancing medical
                  knowledge through research.
                </p>

                <p className='mb-2'>
                  With over four years of experience, Dr. Odeyemi has worked at
                  respected institutions such as Reddington Hospital and Golden
                  Cross Infirmiry Hospital. His dedication to patient care,
                  especially in cardiology, is well-known.
                </p>

                <p className='mb-2'>
                  With over four years of experience, Dr. Chinedum has worked at
                  respected institutions such as Reddington Hospital and Golden
                  Cross Infirmiry Hospital. His dedication to patient care,
                  especially in cardiology, is well-known.
                </p>
                <p className='mb-2'>
                  Known for his diligence and adaptability, Dr. Chinedum is
                  committed to continuous learning and professional growth. He
                  strives to stay updated with the latest advancements in
                  healthcare.
                </p>
                <p className='mb-2'>
                  Dr. Chinedum&apos;s dedication to excellence makes him a
                  valuable asset in the medical field, where he aims to
                  contribute significantly to patient care and research.
                </p>
              </div>
            </div>
          </Section>
          <BookConsultationForm />
        </div>
      </section>

      <Footer />
    </>
  );
}
