import { AppNavbar } from '@/components/Navbar';
import { BookConsultationForm } from '@/components/find-a-doctor/BookConsultationForm';
import { Footer } from '@/components/home/Footer';
import { Section } from '@/components/home/Section';
import { Avatar, Chip } from '@nextui-org/react';

export default function Doctor() {
  return (
    <>
      <AppNavbar background='primaryLight' />

      <div className='grid justify-center gap-6 bg-primaryLight'>
        <Section className='relative h-[10vh] w-screen bg-primaryLight lg:h-[30vh]'>
          <div className='absolute top-[50px] flex w-max flex-col items-start gap-4 lg:top-[140px] lg:flex-row lg:gap-10'>
            <Avatar
              name='Francis Odeyemi'
              size='lg'
              className='h-32 w-32 border-8 border-white lg:h-64 lg:w-64'
              src='https://i.pravatar.cc/150?u=a042581f4e29026704d'
            />
            <div className='grid h-max gap-2'>
              <p className='break-words text-xl font-bold lg:text-4xl'>
                Dr. Francis Odeyemi
              </p>
              <p className='text-lg font-light'>General Practitioner</p>
              <Chip
                size={'lg'}
                className='text-dark bg-white text-sm font-light'
              >
                8 Years Experience
              </Chip>
            </div>
          </div>
        </Section>
      </div>

      <section className='grid justify-center gap-6'>
        <div className='mt-[200px] grid items-end'>
          <Section className='relative pb-10 lg:grid-flow-col lg:grid-cols-[3fr_4fr]'>
            <div className='flex flex-col gap-6'>
              <h1 className='text-3xl font-bold text-header-100 lg:max-w-[370px]'>
                About <br /> Dr. Francis Odeyemi
              </h1>
              <p className='w-full max-w-[758px] whitespace-normal leading-9 text-content'>
                Lorem ipsum dolor sit amet consectetur. Phasellus mi vehicula
                vitae sit nisi vulputate sit ut etiam. Arcu ac habitant quam
                pulvinar ultrices sed tortor felis ante. Aliquam sed mattis nibh
                rhoncus elit et quis. Integer risus sed cursus cursus et quis.
                Urna in cursus quis ornare sociis dictum ut non facilisis. Id
                dolor posuere vel semper. Facilisi cursus vulputate dictum nibh
                in viverra. Curabitur dapibus lacus ut tellus. Purus diam lorem
                tortor odio.
              </p>
            </div>
          </Section>
          <BookConsultationForm />
        </div>
      </section>

      <Footer />
    </>
  );
}
