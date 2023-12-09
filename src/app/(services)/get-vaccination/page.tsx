import { AppNavbar } from '@/components/Navbar';
import { Section } from '@/components/home/Section';
import { HomeHero } from '@/components/home/HomeHero';
import { IconBrowse } from '@/components/icons/IconBrowse';
import { IconHealthShield } from '@/components/icons/IconHealthShield';
import { IconAddNotification } from '@/components/icons/IconAddNotification';
import { HowItWorks } from '@/components/book-lab-test/HowItWorks';
import { VaccinationProducts } from '@/components/get-vaccination/VaccinationProducts';
import { ReportDrugReaction } from '@/components/ReportDrugReaction';
import { NewsLetterCard } from '@/components/home/NewsletterCard';
import { Footer } from '@/components/home/Footer';

export default function GetVaccinationPage() {
  const howItWorksData: {
    description: string;
    icon: JSX.Element;
  }[] = [
    {
      description:
        'Browse for your preferred test packages and easily schedule a home sample collection.',
      icon: <IconBrowse size={48} color='primary' />,
    },
    {
      description:
        'Receive one of our certified health professionals at your preferred location for a test sample collection.',
      icon: <IconHealthShield size={60} color='primary' />,
    },
    {
      description:
        'Get notified by mail of your reports, which is also available within your account on the Purelife app.',
      icon: <IconAddNotification size={60} color='primary' />,
    },
  ];

  return (
    <>
      <AppNavbar background='primaryLight' />
      <main className='grid gap-20'>
        <div className='grid justify-center bg-primaryLight'>
          <Section className='bg-primaryLight'>
            <HomeHero
              title='Select for our loads of Vaccines for your health'
              description='Schedule laboratory tests, book vaccination appointments, and receive high-quality medical services from the convenience of wherever you are in Nigeria.'
              ctaText='Start here'
              ctaLink='#'
            />
          </Section>
        </div>

        <HowItWorks data={howItWorksData} variant={'primary'} />

        <VaccinationProducts />

        <ReportDrugReaction />

        <NewsLetterCard />

        <Footer />
      </main>
    </>
  );
}
