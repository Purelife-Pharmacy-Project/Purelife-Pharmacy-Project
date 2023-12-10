import { AppNavbar } from '@/components/Navbar';
import { HowItWorks } from '@/components/book-lab-test/HowItWorks';
import { DoctorCard } from '@/components/find-a-doctor/DoctorCard';
import { Footer } from '@/components/home/Footer';
import { HomeHero } from '@/components/home/HomeHero';
import { Section } from '@/components/home/Section';
import { IconAddNotification } from '@/components/icons/IconAddNotification';
import { IconBrowse } from '@/components/icons/IconBrowse';
import { IconHealthShield } from '@/components/icons/IconHealthShield';

export default function FindADoctor() {
  const howItWorksData: {
    description: string;
    icon: JSX.Element;
  }[] = [
    {
      description:
        'Search for tests and packages and seamlessly book a home sample collection.',
      icon: <IconBrowse size={48} color='primary' />,
    },
    {
      description:
        'We will send a certified professional to your place to assist you with the sample collection',
      icon: <IconHealthShield size={60} color='primary' />,
    },
    {
      description:
        'We will email you the reports. You can also access your reports within your account on the Purelife app',
      icon: <IconAddNotification size={60} color='primary' />,
    },
  ];
  return (
    <>
      <AppNavbar background='primaryLight' />

      <main className='grid gap-6'>
        <div className='grid justify-center bg-primaryLight'>
          <HomeHero
            title='Book an appointment with Doctors at Purelife'
            description='Easily purchase your everyday essentials from wherever you are.'
            ctaText='Consult Now'
            ctaLink='#'
          />
        </div>

        <HowItWorks data={howItWorksData} variant='primary' />

        <div className='grid justify-center bg-primaryLight'>
          <div className='grid justify-center bg-primaryLight'>
            <Section className='bg-primaryLight py-20'>
              <div className='grid grid-flow-dense grid-cols-1 gap-4 md:grid-cols-2'>
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <DoctorCard key={i} />
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
