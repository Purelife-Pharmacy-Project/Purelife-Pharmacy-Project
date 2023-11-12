import { AppNavbar } from '@/components/Navbar';
import { IconAddNotification } from '@/components/icons/IconAddNotification';
import { IconDrugPrescription } from '@/components/icons/IconDrugPrescription';
import { IconPill } from '@/components/icons/IconPill';
import { HowitWorks } from '@/components/lib/book-a-test/HowItWorks';
import { DrugSubscriptionTabs } from '@/components/lib/drug-refill/DrugSubscriptionTabs';
import { Footer } from '@/components/lib/home/Footer';
import { HomeHero } from '@/components/lib/home/HomeHero';
import { NewsLetterCard } from '@/components/lib/home/NewsletterCard';

export default function DrugRefill() {
  const howItWorksData: {
    description: string;
    icon: JSX.Element;
  }[] = [
    {
      description:
        'Browse for your preferred test packages and easily schedule a home sample collection.',
      icon: <IconPill size={48} color='success' />,
    },
    {
      description:
        'Receive one of our certified health professionals at your preferred location for a test sample collection.',
      icon: <IconDrugPrescription size={60} color='success' />,
    },
    {
      description:
        'Get notified by mail of your reports, which is also available within your account on the Purelife app.',
      icon: <IconAddNotification size={60} color='success' />,
    },
  ];
  return (
    <>
      <AppNavbar background='primaryLight' />
      <main className='grid gap-6'>
        <HomeHero
          title="Get us Your Doctor's Prescription, and Get an On-time Refill"
          description='We deliver your medications to you at your preferred intervals.'
          ctaText='Start Here'
          ctaLink='#'
        />

        <HowitWorks data={howItWorksData} />

        <DrugSubscriptionTabs />

        <NewsLetterCard />
        <Footer />
      </main>
    </>
  );
}
