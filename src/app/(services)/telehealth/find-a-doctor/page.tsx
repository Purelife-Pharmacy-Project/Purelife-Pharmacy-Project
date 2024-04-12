import { AppNavbar } from '@/components/Navbar';
import { HowItWorks } from '@/components/book-lab-test/HowItWorks';
import { DoctorCard } from '@/components/find-a-doctor/DoctorCard';
import { Footer } from '@/components/home/Footer';
import { HomeHero } from '@/components/home/HomeHero';
import { Section } from '@/components/home/Section';
import { IconCalendarTime } from '@/components/icons/IconCalendarTime';
import { IconPen } from '@/components/icons/IconPen';
import { IconProfessional } from '@/components/icons/IconProfessional';
import { allDoctors } from '@/helpers/mocks/doctors';

export default function FindADoctor() {
  const howItWorksData: {
    description: string;
    icon: JSX.Element;
  }[] = [
    {
      description:
        'Select the specific health professional you would like to consult with.',
      icon: <IconProfessional size={48} color='primary' />,
    },
    {
      description:
        'Choose a time, provide name, contact info, reason. Appointment confirmed, professional assigned for consultation.',
      icon: <IconPen size={60} color='primary' />,
    },
    {
      description:
        'Your appointment will be confirmed, and a health professional will be assigned to you for your consultation.',
      icon: <IconCalendarTime size={60} color='primary' />,
    },
  ];

  return (
    <>
      <AppNavbar background={'primaryLight'} />

      <main className='grid gap-6'>
        <div className='grid justify-center bg-primaryLight'>
          <HomeHero
            title='Book an appointment with Doctors at Purelife'
            description='Take the first step towards a healthier you. Book your appointment with one of our dedicated doctors at Purelife and embark on your journey to wellness today.'
            ctaText='Consult Now'
            ctaLink='#doctors'
          />
        </div>

        <HowItWorks data={howItWorksData} variant='primary' />

        <div id='doctors' className='bg-primaryLight lg:grid lg:justify-center'>
          <div className='bg-primaryLight lg:grid lg:justify-center'>
            <Section className='bg-primaryLight py-4 lg:py-20'>
              <div className='grid grid-flow-dense grid-cols-1 gap-4 md:grid-cols-2'>
                {allDoctors.map((doctor, i) => (
                  <DoctorCard key={doctor.slug} doctor={doctor} />
                ))}
              </div>
            </Section>
          </div>
        </div>

        <Footer />
      </main>
    </>
  );
}
